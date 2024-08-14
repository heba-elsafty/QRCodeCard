type ClassNames = {
  base?: string;
  title?: string;
  subTitle?: string;
  description?: string;
  code?: string;
  info?: string;
  qrCode?: string;
};

export type BaseQrCodeProps = {
  title: string;
  subTitle?: string;
  description: string;
  classNames?: ClassNames;
};
