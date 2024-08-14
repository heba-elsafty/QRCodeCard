import { FC } from "react";
// Components
import QRCode from "react-qr-code";
//Types
import { BaseQrCodeProps } from "../types/QrCode";
//Utils
import { clx } from "../utils/src/utils";
//SCSS
import styles from "../styles/QrCard.module.scss";

const QrCard: FC<BaseQrCodeProps> = ({ title, description, classNames }) => {
  return (
    <div className={clx(styles.qrcode, classNames?.base)}>
      <div className={clx(styles["qrcode__code"], classNames?.code)}>
        <QRCode
          value="https://www.frontendmentor.io/"
          size={180}
          fgColor="#2c7dfa"
          className={clx(styles["qrcode__code__qr-code"], classNames?.qrCode)}
        />
      </div>
      <div className={clx(styles["qrcode__info"], classNames?.info)}>
        <h1 className={clx(styles["qrcode__title"], classNames?.title)}>
          {title}
        </h1>
        <p
          className={clx(
            styles["qrcode__description"],
            classNames?.description
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default QrCard;
