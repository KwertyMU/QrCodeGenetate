import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

export default function QrCodeGen() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  function Handler() {
    setResult(value);
    setValue("");

    let prevData = JSON.parse(localStorage.getItem("GenerateQR") || "[]");
    localStorage.setItem("GenerateQR", JSON.stringify([...prevData, value]));
  }

  function InputHandler(e) {
    setValue(e.target.value);
    setResult("");
  }

  return (
    <>
      <div className="qrcode">
        <input
          type="text"
          value={value}
          onChange={InputHandler}
          style={{ width: "240px", marginRight: "10px" }}
        />
        <a className="nav" onClick={Handler}>
          Сгенерировать QR
        </a>
      </div>
      {result !== "" && <QRCodeSVG value={result} />}
    </>
  );
}

("https://i.pinimg.com/736x/fe/2c/c2/fe2cc29f7e97b368334a6f83c675f5b9.jpg");
