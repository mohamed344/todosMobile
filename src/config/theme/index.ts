import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import useTheme from "../../hooks/useTheme";

const createStyles = (stylesCallback: any) => {
    return () => {
        const { theme, mode } = useTheme();
        // pass the `colorScheme` prop to the stylesheet callback
        return stylesCallback({ theme });
    };
};

export const iOSLightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "#0071e3",
        text: "#000",
        text2: "#999",
        border: "#EAEAEA",
        background: "#f3f3f3",
        card: "#fff"
    }
}

export const iOSDarkTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: "#0071e3",
        text: "#FFF",
        text2: "#999",
        border: "#111",
        background: "#222",
        card: "#000"
    }
}


export default createStyles;