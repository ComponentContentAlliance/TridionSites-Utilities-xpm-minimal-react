
import * as React from 'react';

import { createContext, useContext, useState, CSSProperties } from "react";
import type { ReactNode } from "react";
import { TridionBar } from "./TridionBar";
import { toBoolean } from "./toBoolean";

export interface HeadlessXpmContextProps {
    editorUrl: string;
    icon?: ReactNode;
    linkStyle?: CSSProperties;
    containerStyle?: CSSProperties;
    contentStyle?: CSSProperties;
    iconStyle?: CSSProperties;
    showExpSpaceEditor: boolean;
    showPageEditorLink?: boolean
    toggleXpm: boolean;
    pageId: string;
    showPage: boolean;
    setPageId: (pageId: string) => void;
    setShowPage: (setShowPage: boolean) => void;
    staging?: boolean | string
}

const HeadlessXpmContext = createContext<undefined | HeadlessXpmContextProps>(undefined);

export const useHeadlessXpmContext = () => {
    const ctx = useContext(HeadlessXpmContext);
    if (!ctx) {
        throw new Error("useHeadlessXpmContext must be used within HeadlessXpmProvider");
    }
    return ctx;
};

export type ProviderProps = {
    editorUrl: string;
    children: ReactNode;
    icon?: ReactNode;
    linkStyle?: React.CSSProperties;
    containerStyle?: React.CSSProperties,
    contentStyle?: React.CSSProperties;
    iconStyle?: React.CSSProperties;
    showExpSpaceEditor?: boolean;
    showPageEditorLink?: boolean;
    staging?: boolean | string
};

export const HeadlessXpmProvider = ({ editorUrl, icon, children, linkStyle, containerStyle, contentStyle, iconStyle, showPageEditorLink = false, showExpSpaceEditor = true, staging }: ProviderProps): JSX.Element => {
    const [toggleXpm, setToggleXpm] = useState<boolean>(false);
    const [showPage, setShowPage] = useState(false);
    const [pageId, setPageId] = useState<string>("");

    return (
        <HeadlessXpmContext.Provider
            value={{ editorUrl, icon, linkStyle, containerStyle, contentStyle, iconStyle, showExpSpaceEditor, showPageEditorLink, toggleXpm, pageId, showPage, setPageId, setShowPage, staging: toBoolean(staging) }}>
            {children}
            {toBoolean(staging) && (showExpSpaceEditor && <TridionBar setToggleXpm={setToggleXpm} toggleXpm={toggleXpm} />)}
        </HeadlessXpmContext.Provider>
    );
};
