import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useIsCollapsed() {
    const [isCollapsed, setIsCollapsed] = useLocalStorage({
        key: "collapsed-sidebar",
        defaultValue: false,
    });

    useEffect(() => {
        const handleResize = () => {
            // Update isCollapsed based on window innerWidth
            setIsCollapsed(window.innerWidth < 768 ? false : isCollapsed);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isCollapsed, setIsCollapsed]);

    return [isCollapsed, setIsCollapsed];
}
