export type Meta = {
  title?: string | null;
  description?: string | null;
  image?: string | null;
  url?: string | null;
};

export type ImageType = {
  src: string;
  alt: string;
  height?: number;
  width?: number;
};

export type VoucherType = {
  id?: string;
  name: string;
  discount: number;
  description: string;
};

export type ModalStateType = {
  open: boolean;
  setOpen: (val: boolean) => void;
};

export interface VoucherFormPropsType {
  isEditable: boolean;
  voucher: VoucherType;
}
