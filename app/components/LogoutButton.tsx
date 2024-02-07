import { useRouter } from "next/navigation";
import useUserStore from "./store/useUserStore";


const LogoutButton = () => {
  const logout = useUserStore((state) => state.logout);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    localStorage.removeItem('userToken');
    localStorage.removeItem('agentToken');
    localStorage.removeItem('userType');
    localStorage.removeItem('userAvatar');
    router.push("/loginUser");
    // set({ user: null, isAuthenticated: false, isPhoneVerified: false, isEmailVerified: false, error: null});
  };
  return (
    <button onClick={handleLogout} className="btn btn-ghost">
      logout
    </button>
  );
};

export default LogoutButton;
