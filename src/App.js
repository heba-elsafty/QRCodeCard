import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import QrCard from "./components/QrCode";
import "./styles/global.scss";
const App = () => {
    return (_jsxs("div", { className: "app", children: [_jsx("main", { children: _jsx(QrCard, { title: "Improve your front-end skills by building projects", description: "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level" }) }), _jsxs("footer", { children: [_jsxs("p", { className: "text-sm", children: [_jsx("strong", { children: "Challenge by: " }), _jsx("a", { href: "https://www.frontendmentor.io", target: "_blank", rel: "noopener noreferrer", children: "Frontend Mentor." })] }), _jsxs("p", { className: "text-sm", children: [_jsx("strong", { children: " Coded by: " }), _jsx("a", { href: "https://github.com/heba-elsafty", target: "_blank", rel: "noopener noreferrer", children: "Heba Elsafty" })] })] })] }));
};
export default App;
