import { useRouter } from "next/navigation";
import useUserStore from "./store/useUserStore";


const LogoutButton = () => {
  const logout = useUserStore((state) => state.logout);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    localStorage.removeItem("user");
    localStorage.removeItem('userAvatar');
    router.push("/loginUser");
  };
  return (
    <button onClick={handleLogout} className="btn btn-ghost">
      logout
    </button>
  );
};

export default LogoutButton;
