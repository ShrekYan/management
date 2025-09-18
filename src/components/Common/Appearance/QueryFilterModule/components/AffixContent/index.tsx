import React from "react";
import { Affix } from "antd";

const AffixContent: React.FC<React.PropsWithChildren<{ offsetTop?: number }>> = ({
    children,
    offsetTop = 0
}) => {
    return (
        <Affix
            target={() => {
                const el = document.querySelector(".page-content");
                if (!el) return window;
                return el as HTMLElement;
            }}
            offsetTop={offsetTop}
        >
            {children}
        </Affix>
    );
};

export default AffixContent;
