import { useContext } from "react";
import { SettingsContext } from "../contexts/SettingsContext";

const useSettings: any = () => useContext(SettingsContext);
export default useSettings;
