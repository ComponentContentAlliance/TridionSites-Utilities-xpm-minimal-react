import * as React from 'react';
import { ReactNode } from 'react';

interface HeadlessXpmEditorProps {
    tcmId: string;
    children: ReactNode;
    isPage?: boolean;
}
declare const HeadlessXpmEditor: ({ tcmId, children, isPage }: HeadlessXpmEditorProps) => JSX.Element;

type ProviderProps = {
    editorUrl: string;
    children: ReactNode;
    icon?: ReactNode;
    linkStyle?: React.CSSProperties;
    containerStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    iconStyle?: React.CSSProperties;
    showExpSpaceEditor?: boolean;
    showPageEditorLink?: boolean;
    staging?: boolean | string;
};
declare const HeadlessXpmProvider: ({ editorUrl, icon, children, linkStyle, containerStyle, contentStyle, iconStyle, showPageEditorLink, showExpSpaceEditor, staging }: ProviderProps) => JSX.Element;

export { HeadlessXpmEditor, HeadlessXpmProvider };
