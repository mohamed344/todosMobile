import { NotificationsContext } from "../contexts/NotificationsContext";
import { useContext } from "react";

const useNotifications = () => useContext(NotificationsContext);

export default useNotifications;
