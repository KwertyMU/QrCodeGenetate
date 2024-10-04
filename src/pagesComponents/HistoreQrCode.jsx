import { Link } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";

export default function HistoreQrCode() {
  let arr = JSON.parse(localStorage.getItem("GenerateQR"));
  return (
    <div style={{ marginTop: 25 }} className="List">
      {arr.map((item) => (
        <p className="item">
          <Link target="_blank" className="qwe" to={item}>
            {item}
          </Link>
          <QRCodeSVG style={{ width: "80px", height: "80px" }} value={item} />
        </p>
      ))}
    </div>
  );
}
