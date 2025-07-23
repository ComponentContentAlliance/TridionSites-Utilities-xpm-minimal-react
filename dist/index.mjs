import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { createContext, useContext, useState, useEffect } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".my-button{background:#007373;border:none;border-radius:4px;color:#fff;padding:10px 20px}.headlessXpmRegion{border:1px solid transparent;position:relative;transition:border-color .2s ease}.headlessXpmIcon{align-items:center;background:#007373;border-radius:4px;color:#fff;display:flex;height:32px;justify-content:center;opacity:0;padding:4px;position:absolute;right:6px;text-decoration:none;top:6px;transition:opacity .3s ease;width:32px;z-index:999}.headlessXpmIconAlignLeft{left:0}.headlessXpmBar{background:#007373;bottom:0;padding:10px 30px;position:fixed;width:100%}.headlessXpmBarContainer{align-items:center;display:flex;gap:30px;justify-content:flex-start}.headlessXpmBarButtonGroup{align-items:center;display:flex;gap:15px;justify-content:center}.headlessXpmBarButton{background:#034545;border:1px solid #eee;border-radius:3px;color:#fff;cursor:pointer;display:flex;font-size:18px;font-weight:700;padding:8px 22px}.headlessXpmBarButton:hover,.headlessXpmBarButtonActive{background:#0d5b95;box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}.headlessXpmRegion.hover-enabled:hover{border:2px solid #17c13e!important;box-shadow:0 0 0 1px #17c13e;opacity:1}.hover-enabled:hover .headlessXpmIcon{opacity:1}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhlYWRsZXNzWHBtRWRpdG9yLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUVFLGtCQUFtQixDQUduQixXQUFZLENBRFosaUJBQWtCLENBRGxCLFVBQVksQ0FGWixpQkFLRixDQUVBLG1CQUVFLDRCQUE2QixDQUQ3QixpQkFBa0IsQ0FFbEIsZ0NBQ0YsQ0FRQSxpQkFlRSxrQkFBbUIsQ0FYbkIsa0JBQW1CLENBRW5CLGlCQUFrQixDQUtsQixVQUFjLENBR2QsWUFBYSxDQUZiLFdBQVksQ0FJWixzQkFBdUIsQ0FQdkIsU0FBVSxDQUpWLFdBQVksQ0FKWixpQkFBa0IsQ0FFbEIsU0FBVSxDQUlWLG9CQUFxQixDQUxyQixPQUFRLENBUVIsMkJBQTZCLENBRzdCLFVBQVcsQ0FMWCxXQVNGLENBRUEsMEJBQ0UsTUFDRixDQU9BLGdCQUNFLGtCQUFtQixDQUduQixRQUFTLENBQ1QsaUJBQWtCLENBRmxCLGNBQWUsQ0FEZixVQUlGLENBRUEseUJBRUUsa0JBQW1CLENBRG5CLFlBQWEsQ0FHYixRQUFTLENBRFQsMEJBRUYsQ0FFQSwyQkFFRSxrQkFBbUIsQ0FEbkIsWUFBYSxDQUdiLFFBQVEsQ0FEUixzQkFFRixDQUVBLHNCQUtFLGtCQUFtQixDQUduQixxQkFBc0IsQ0FEdEIsaUJBQWtCLENBTGxCLFVBQVcsQ0FEWCxjQUFlLENBUWYsWUFBYSxDQUxiLGNBQWUsQ0FEZixlQUFpQixDQUdqQixnQkFJRixDQUVBLHdEQUNFLGtCQUFtQixDQUNuQix5RUFDRixDQU1BLHVDQUVFLGtDQUFvQyxDQUNwQyw0QkFBNkIsQ0FGN0IsU0FHRixDQUNBLHNDQUNFLFNBQ0YiLCJmaWxlIjoiSGVhZGxlc3NYcG1FZGl0b3IuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMDczNzM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5oZWFkbGVzc1hwbVJlZ2lvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi8qICAgXHJcbiAgLmhlYWRsZXNzWHBtUmVnaW9uOmhvdmVyIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxN2MxM2UgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjMTdjMTNlO1xyXG4gIH0gKi9cclxuXHJcbi5oZWFkbGVzc1hwbUljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDZweDtcclxuICByaWdodDogNnB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMDczNzM7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRsZXNzWHBtSWNvbkFsaWduTGVmdCB7XHJcbiAgbGVmdDogMHB4O1xyXG59XHJcblxyXG4vKiAgIC5oZWFkbGVzc1hwbVJlZ2lvbjpob3ZlciAuaGVhZGxlc3NYcG1JY29uIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgICovXHJcbi5oZWFkbGVzc1hwbUJhciB7XHJcbiAgYmFja2dyb3VuZDogIzAwNzM3MztcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcclxufVxyXG5cclxuLmhlYWRsZXNzWHBtQmFyQ29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGdhcDogMzBweDtcclxufVxyXG5cclxuLmhlYWRsZXNzWHBtQmFyQnV0dG9uR3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDE1cHhcclxufVxyXG5cclxuLmhlYWRsZXNzWHBtQmFyQnV0dG9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMzQ1NDU7XHJcbiAgcGFkZGluZzogOHB4IDIycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmhlYWRsZXNzWHBtQmFyQnV0dG9uOmhvdmVyLCAuaGVhZGxlc3NYcG1CYXJCdXR0b25BY3RpdmV7XHJcbiAgYmFja2dyb3VuZDogIzBkNWI5NTtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDEwcHggMTVweCAtM3B4LCByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA0cHggNnB4IC0ycHg7XHJcbn1cclxuXHJcbi5oZWFkbGVzc1hwbUJyYW5kTG9nbyB7fVxyXG5cclxuLmhlYWRsZXNzWHBtQ29udGVudCB7fVxyXG5cclxuLmhlYWRsZXNzWHBtUmVnaW9uLmhvdmVyLWVuYWJsZWQ6aG92ZXJ7XHJcbiAgb3BhY2l0eTogMTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMTdjMTNlICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICMxN2MxM2U7XHJcbn1cclxuLmhvdmVyLWVuYWJsZWQ6aG92ZXIgLmhlYWRsZXNzWHBtSWNvbntcclxuICBvcGFjaXR5OiAxO1xyXG59Il19 */";
styleInject(css_248z);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var TridionBar = function (_a) {
    var setToggleXpm = _a.setToggleXpm, toggleXpm = _a.toggleXpm;
    var _b = useHeadlessXpmContext(), showPageEditorLink = _b.showPageEditorLink, editorUrl = _b.editorUrl, pageId = _b.pageId, showPage = _b.showPage;
    var handlePage = function () {
        if (showPage) {
            var link = "".concat(editorUrl, "/page?item=").concat(pageId, "&tab=general.content");
            window.open(link, "_blank");
        }
    };
    return (jsx("div", { className: "headlessXpmBar", children: jsxs("div", { className: "headlessXpmBarContainer", children: [jsx("div", { className: "headlessXpmBrandLogo" }), jsxs("div", { className: "headlessXpmBarButtonGroup", children: [showPageEditorLink &&
                            jsx("button", { className: "headlessXpmBarButton", onClick: handlePage, children: jsxs("svg", { viewBox: "64 64 896 896", focusable: "false", "data-icon": "form", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", children: [jsx("path", { d: "M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z" }), jsx("path", { d: "M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 00-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z" })] }) }), jsx("button", { className: "headlessXpmBarButton ".concat(toggleXpm ? "headlessXpmBarButtonActive" : ""), onClick: function () { return setToggleXpm(!toggleXpm); }, title: "Edit Components", children: jsx("svg", { viewBox: "64 64 896 896", focusable: "false", "data-icon": "edit", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", children: jsx("path", { d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" }) }) })] })] }) }));
};

var toBoolean = function (staging) {
    if (typeof staging === "boolean")
        return staging;
    if (typeof staging === "string")
        return staging.toLowerCase() === "true";
    return false; // ✅ default fallback
};

var HeadlessXpmContext = createContext(undefined);
var useHeadlessXpmContext = function () {
    var ctx = useContext(HeadlessXpmContext);
    if (!ctx) {
        throw new Error("useHeadlessXpmContext must be used within HeadlessXpmProvider");
    }
    return ctx;
};
var HeadlessXpmProvider = function (_a) {
    var editorUrl = _a.editorUrl, icon = _a.icon, children = _a.children, linkStyle = _a.linkStyle, containerStyle = _a.containerStyle, contentStyle = _a.contentStyle, iconStyle = _a.iconStyle, _b = _a.showPageEditorLink, showPageEditorLink = _b === void 0 ? false : _b, _c = _a.showExpSpaceEditor, showExpSpaceEditor = _c === void 0 ? true : _c, staging = _a.staging;
    var _d = useState(false), toggleXpm = _d[0], setToggleXpm = _d[1];
    var _e = useState(false), showPage = _e[0], setShowPage = _e[1];
    var _f = useState(""), pageId = _f[0], setPageId = _f[1];
    return (jsxs(HeadlessXpmContext.Provider, { value: { editorUrl: editorUrl, icon: icon, linkStyle: linkStyle, containerStyle: containerStyle, contentStyle: contentStyle, iconStyle: iconStyle, showExpSpaceEditor: showExpSpaceEditor, showPageEditorLink: showPageEditorLink, toggleXpm: toggleXpm, pageId: pageId, showPage: showPage, setPageId: setPageId, setShowPage: setShowPage, staging: toBoolean(staging) }, children: [children, toBoolean(staging) && (showExpSpaceEditor && jsx(TridionBar, { setToggleXpm: setToggleXpm, toggleXpm: toggleXpm }))] }));
};

var HeadlessXpmEditor = function (_a) {
    var tcmId = _a.tcmId, children = _a.children, _b = _a.isPage, isPage = _b === void 0 ? false : _b;
    var _c = useHeadlessXpmContext(), editorUrl = _c.editorUrl, icon = _c.icon, containerStyle = _c.containerStyle, linkStyle = _c.linkStyle, contentStyle = _c.contentStyle, iconStyle = _c.iconStyle, showExpSpaceEditor = _c.showExpSpaceEditor, toggleXpm = _c.toggleXpm, setPageId = _c.setPageId, setShowPage = _c.setShowPage, staging = _c.staging;
    var link = isPage ? "".concat(editorUrl, "/page?item=").concat(tcmId, "&tab=general.content") : "".concat(editorUrl, "/component?item=").concat(tcmId, "&tab=general.content");
    useEffect(function () {
        if (isPage) {
            setShowPage(true);
            setPageId(tcmId);
        }
    }, [isPage, tcmId]);
    if (!staging)
        return jsx(Fragment, { children: children });
    return (jsxs("div", { className: "headlessXpmRegion ".concat(toggleXpm || !showExpSpaceEditor ? "hover-enabled" : ""), style: { containerStyle: containerStyle }, children: [(toggleXpm || !showExpSpaceEditor) &&
                jsx("a", { href: link, className: "headlessXpmIcon", target: "_blank", rel: "noopener noreferrer", title: "Edit in Experiance sapce", style: __assign(__assign({}, linkStyle), { transition: "opacity 0.3s ease" }), children: icon ? icon :
                        jsx("svg", { style: iconStyle, viewBox: "64 64 896 896", focusable: "false", "data-icon": "edit", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", children: jsx("path", { d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" }) }) }), jsx("div", { className: "headlessXpmContent", style: __assign({}, contentStyle), children: children })] }));
};

export { HeadlessXpmEditor, HeadlessXpmProvider, useHeadlessXpmContext };
//# sourceMappingURL=index.mjs.map
