import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";

export function DashboardHeader() {
  function handleLogout() {
    signOut(auth);
  }

  return (
    <div className="w-full items-center flex h-10 bg-red-500 rounded-lg text-white font-medium gap-4">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/dashboard/new">Novo carro</Link>

      <button onClick={handleLogout}>Sair da conta</button>
    </div>
  );
}
