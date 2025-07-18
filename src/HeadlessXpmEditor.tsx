import React, { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { useHeadlessXpmContext } from "./HeadlessXpmProvider";

export interface HeadlessXpmEditorProps {
    tcmId: string;
    children: ReactNode
    isPage?: boolean;
}
export const inlineStyles = {
    headlessXpmRegion: {
        position: "relative",
        border: "1px solid transparent",
        transition: "border-color 0.2s ease"
    },
    headlessXpmRegionHover: {
        border: "2px solid #17c13e",
        boxShadow: "0 0 0 1px #17c13e"
    },
    headlessXpmIcon: {
        position: "absolute",
        top: "6px",
        right: "6px",
        background: "#007373",
        padding: "4px",
        borderRadius: "4px",
        textDecoration: "none",
        zIndex: 999,
        transition: "opacity 0.3s ease",
        color: "#ffffff",
        height: "32px",
        width: "32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    headlessXpmIconAlignLeft: {
        left: "0px"
    },
    headlessXpmIconVisible: {
        opacity: 1,
        color: "#fff"
    },
    headlessXpmBar: {
        background: "#007373",
        width: "100%",
        position: "fixed",
        bottom: 0,
        padding: "10px 30px"
    },
    headlessXpmBarContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "30px"
    },
    headlessXpmBarButtonGroup: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "15px"
    },
    headlessXpmBarButton: {
        cursor: "pointer",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "18px",
        background: "#034545",
        padding: "8px 22px",
        borderRadius: "3px",
        border: "1px solid #eee",
        display: "flex"
    },
    headlessXpmBrandLogo: {
        // Empty — add if needed
    },
    headlessXpmContent: {
        // Empty — add if needed
    }
};

export const HeadlessXpmEditor = ({ tcmId, children, isPage = false }: HeadlessXpmEditorProps): JSX.Element => {
    const [isHovered, setHovered] = useState(false);
    const { editorUrl, icon, containerStyle, linkStyle, contentStyle, iconStyle, showExpSpaceEditor, toggleXpm, setPageId, setShowPage, staging } = useHeadlessXpmContext();

    const link = isPage ? `${editorUrl}/page?item=${tcmId}&tab=general.content` : `${editorUrl}/component?item=${tcmId}&tab=general.content`;

    const toggleStyle = {
        opacity: (toggleXpm || !showExpSpaceEditor) ? 1 : 0
    }

    useEffect(() => {
        if (isPage) {
            setShowPage(true);
            setPageId(tcmId)
        }
    }, [isPage, tcmId]);

    useEffect(() => {
        setHovered(!isHovered)
    },[toggleXpm])
    if (!staging) return <>{children}</>;

    return (
        <div 
            className="headlessXpmRegion"
            style={{
                ...containerStyle, 
                ...inlineStyles.headlessXpmRegion,
                ...(isHovered ? inlineStyles.headlessXpmRegionHover : {}) 
            } as React.CSSProperties} 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>

            {(toggleXpm || !showExpSpaceEditor) &&
                <a
                    href={link}
                    className="headlessXpmIcon"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Edit in Experiance sapce"
                    style={{
                        ...toggleStyle,
                        ...linkStyle,
                        ...inlineStyles.headlessXpmIcon,
                        opacity: toggleXpm ? 1 : isHovered ? 1 : 0,
                        transition: "opacity 0.3s ease",
                    } as React.CSSProperties}
                >
                    {
                        icon ? icon :
                            <svg style={iconStyle} viewBox="64 64 896 896" focusable="false" data-icon="edit" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
                            </svg>
                    }
                </a>
            }
            <div className="headlessXpmContent" style={{...contentStyle, ...inlineStyles.headlessXpmContent}}>
                {children}
            </div>
        </div>
    );
};

