import { useEffect, useLayoutEffect, useState } from "react";

export default function useMediaQuery(breakpoint) {
    const [match, setMatch] = useState(false);

    // Should immediately set device when firstly mounted, "during" browser paint
    useLayoutEffect(() => {
        setMatch(window.matchMedia(query(breakpoint)).matches);
    }, [breakpoint]);

    // Set listener for viewport changes
    useEffect(() => {
        const mq = window.matchMedia(query(breakpoint));
        const listener = (e) => setMatch(e.matches);
        mq.addEventListener("change", listener);
        return () => mq.removeEventListener("change", listener);
    }, [breakpoint]);

    return match;
}

const query = (breakpoint) => `(max-width: ${breakpoint}px)`;

export const Device = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
};