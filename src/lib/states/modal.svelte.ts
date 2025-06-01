export type ModalStore =
    | {
          open: true;
          children: string;
      }
    | {
          open: false;
          children: undefined;
      };

export const modal: ModalStore = $state({ open: false, children: undefined });
