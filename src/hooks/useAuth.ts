import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

const useAuth: any = () => useContext(AuthContext);
export default useAuth;
