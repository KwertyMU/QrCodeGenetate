import reactLogo from "../assets/react.svg";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <img src={reactLogo} alt="" />
      <h1>Vite + React</h1>
      <Link className="nav" to="/">
        Главная
      </Link>
      <Link className="nav" to="QrCodeGeneration" style={{ margin: 5 }}>
        Генерация QrCode
      </Link>
      <Link className="nav" to="History">
        История
      </Link>
    </>
  );
}
