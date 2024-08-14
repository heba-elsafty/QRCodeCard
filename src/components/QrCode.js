import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Components
import QRCode from "react-qr-code";
//Utils
import { clx } from "../utils/src/utils";
//SCSS
import styles from "../styles/QrCard.module.scss";
const QrCard = ({ title, description, classNames }) => {
    return (_jsxs("div", { className: clx(styles.qrcode, classNames === null || classNames === void 0 ? void 0 : classNames.base), "aria-label": "qr code card", children: [_jsx("div", { className: clx(styles["qrcode__code"], classNames === null || classNames === void 0 ? void 0 : classNames.code), children: _jsx(QRCode, { value: "https://www.frontendmentor.io/", size: 180, fgColor: "#2c7dfa", className: clx(styles["qrcode__code__qr-code"], classNames === null || classNames === void 0 ? void 0 : classNames.qrCode), "aria-label": "Scan QR Code" }) }), _jsxs("div", { className: clx(styles["qrcode__info"], classNames === null || classNames === void 0 ? void 0 : classNames.info), "aria-label": "Info of QR Code", children: [_jsx("h1", { className: clx(styles["qrcode__title"], classNames === null || classNames === void 0 ? void 0 : classNames.title), "aria-label": `Title of qr code: ${title}`, children: title }), _jsx("p", { className: clx(styles["qrcode__description"], classNames === null || classNames === void 0 ? void 0 : classNames.description), "aria-label": `Description of qr code: ${description}`, children: description })] })] }));
};
export default QrCard;
