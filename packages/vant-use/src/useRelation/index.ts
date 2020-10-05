import {
  VNode,
  inject,
  isVNode,
  provide,
  computed,
  reactive,
  onUnmounted,
  getCurrentInstance,
  VNodeNormalizedChildren,
  ComponentPublicInstance as PublicInstance,
  ComponentInternalInstance as InternalInstance,
} from 'vue';

export function flattenVNodes(children: VNodeNormalizedChildren) {
  const result: VNode[] = [];

  const traverse = (children: VNodeNormalizedChildren) => {
    if (Array.isArray(children)) {
      children.forEach((child) => {
        if (isVNode(child)) {
          result.push(child);

          if (child.component?.subTree) {
            traverse(child.component.subTree.children);
          }

          if (child.children) {
            traverse(child.children);
          }
        }
      });
    }
  };

  traverse(children);

  return result;
}

// sort children instances by vnodes order
export function sortChildren(
  parent: InternalInstance,
  publicChildren: PublicInstance[],
  internalChildren: InternalInstance[]
) {
  const vnodes = flattenVNodes(parent.subTree.children);

  internalChildren.sort(
    (a, b) => vnodes.indexOf(a.vnode) - vnodes.indexOf(b.vnode)
  );

  const orderedPublicChildren = internalChildren.map((item) => item.proxy!);

  publicChildren.sort((a, b) => {
    const indexA = orderedPublicChildren.indexOf(a);
    const indexB = orderedPublicChildren.indexOf(b);
    return indexA - indexB;
  });
}

export function useChildren(key: string) {
  const publicChildren: PublicInstance[] = reactive([]);
  const internalChildren: InternalInstance[] = reactive([]);
  const parent = getCurrentInstance()!;

  const linkChildren = (value: any) => {
    const link = (child: InternalInstance) => {
      if (child.proxy) {
        internalChildren.push(child);
        publicChildren.push(child.proxy);
        sortChildren(parent, publicChildren, internalChildren);
      }
    };

    const unlink = (child: InternalInstance) => {
      const index = internalChildren.indexOf(child);
      publicChildren.splice(index, 1);
      internalChildren.splice(index, 1);
    };

    provide(key, {
      link,
      unlink,
      children: publicChildren,
      internalChildren,
      ...value,
    });
  };

  return {
    children: publicChildren,
    linkChildren,
  };
}

type ParentProvide<T> = T & {
  link(child: InternalInstance): void;
  unlink(child: InternalInstance): void;
  children: PublicInstance[];
  internalChildren: InternalInstance[];
};

export function useParent<T>(key: string) {
  const parent = inject<ParentProvide<T> | null>(key, null);

  if (parent) {
    const instance = getCurrentInstance();

    if (instance) {
      const { link, unlink, internalChildren, ...rest } = parent;

      link(instance);

      onUnmounted(() => {
        unlink(instance);
      });

      const index = computed(() => internalChildren.indexOf(instance));

      return {
        parent: rest,
        index,
      };
    }
  }

  return {};
}