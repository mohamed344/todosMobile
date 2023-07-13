import { ThemeContext } from './../contexts/ThemeContext';
import { useContext } from "react";

const useTheme: any = () => useContext(ThemeContext);
export default useTheme;
