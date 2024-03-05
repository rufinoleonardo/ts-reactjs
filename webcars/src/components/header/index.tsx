import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import { FiUser, FiLogIn } from "react-icons/fi";
import { useState } from "react";

export function Header() {
  const [signed, setSigned] = useState(true);
  const [loadingAuth, setLoadingAuth] = useState(false);

  return (
    <div className="w-full bg-white drop-shadow mb-4">
      <header className="max-w-6xl px-4 mx-auto flex flex-row items-center justify-between">
        <Link to={"/"}>
          <img src={logoImg} alt="Logo do site" />
        </Link>

        {!loadingAuth && signed && (
          <Link to="/dashboard">
            <div className="rounded-full border-2 border-gray-600 p-1">
              <FiUser size={22} color="#000000" />
            </div>
          </Link>
        )}

        {!loadingAuth && !signed && (
          <Link to="/login">
            <div className="rounded-full border-2 border-gray-600 p-1">
              <FiLogIn size={22} color="#000" />
            </div>
          </Link>
        )}
      </header>
    </div>
  );
}
