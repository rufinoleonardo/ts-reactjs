import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";

export function DashboardHeader() {
  function handleLogout() {
    signOut(auth);
  }

  return (
    <div>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/dashboard/new">Novo carro</Link>

      <button onClick={handleLogout}>Sair da conta</button>
    </div>
  );
}
