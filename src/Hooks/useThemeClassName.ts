import { useAppSelector } from "./hooks"

export const useThemeClassName = (className:string, styles: {
    readonly [key: string]: string;
}) => {
    const {theme} = useAppSelector(state => state.country)
    return theme === 'dark' ? styles[className] : styles[className] + " " + styles.light
}
