'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

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

var css_248z = ".headlessXpmRegion{border:1px solid transparent;position:relative;transition:border-color .2s ease}.headlessXpmIcon{align-items:center;background:#007373;border-radius:4px;color:#fff;display:flex;height:32px;justify-content:center;opacity:0;padding:4px;position:absolute;right:6px;text-decoration:none;top:6px;transition:opacity .3s ease;width:32px;z-index:999}.headlessXpmIconAlignLeft{left:0}.headlessXpmBar{background:#007373;bottom:0;padding:10px 30px;position:fixed;width:100%;z-index:999}.headlessXpmBarContainer{align-items:center;display:flex;gap:30px;justify-content:flex-start}.headlessXpmBarButtonGroup{align-items:center;display:flex;gap:15px;justify-content:center}.headlessXpmBarButton{background:#034545;border:1px solid #eee;border-radius:3px;color:#fff;cursor:pointer;display:flex;font-size:18px;font-weight:700;padding:8px 22px}.headlessXpmBarButton:hover,.headlessXpmBarButtonActive{background:#0d5b95;box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}.headlessXpmRegion.headlessXpmRegion-hover:hover{border:2px solid #17c13e!important;box-shadow:0 0 0 1px #17c13e;opacity:1}.headlessXpmRegion-hover:hover .headlessXpmIcon{opacity:1}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhlYWRsZXNzWHBtRWRpdG9yLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFFRSw0QkFBNkIsQ0FEN0IsaUJBQWtCLENBRWxCLGdDQUNGLENBUUEsaUJBZUUsa0JBQW1CLENBWG5CLGtCQUFtQixDQUVuQixpQkFBa0IsQ0FLbEIsVUFBYyxDQUdkLFlBQWEsQ0FGYixXQUFZLENBSVosc0JBQXVCLENBUHZCLFNBQVUsQ0FKVixXQUFZLENBSlosaUJBQWtCLENBRWxCLFNBQVUsQ0FJVixvQkFBcUIsQ0FMckIsT0FBUSxDQVFSLDJCQUE2QixDQUc3QixVQUFXLENBTFgsV0FTRixDQUVBLDBCQUNFLE1BQ0YsQ0FPQSxnQkFDRSxrQkFBbUIsQ0FHbkIsUUFBUyxDQUNULGlCQUFrQixDQUZsQixjQUFlLENBRGYsVUFBVyxDQUlYLFdBQ0YsQ0FFQSx5QkFFRSxrQkFBbUIsQ0FEbkIsWUFBYSxDQUdiLFFBQVMsQ0FEVCwwQkFFRixDQUVBLDJCQUVFLGtCQUFtQixDQURuQixZQUFhLENBR2IsUUFBUSxDQURSLHNCQUVGLENBRUEsc0JBS0Usa0JBQW1CLENBR25CLHFCQUFzQixDQUR0QixpQkFBa0IsQ0FMbEIsVUFBVyxDQURYLGNBQWUsQ0FRZixZQUFhLENBTGIsY0FBZSxDQURmLGVBQWlCLENBR2pCLGdCQUlGLENBRUEsd0RBQ0Usa0JBQW1CLENBQ25CLHlFQUNGLENBTUEsaURBRUUsa0NBQW9DLENBQ3BDLDRCQUE2QixDQUY3QixTQUdGLENBQ0EsZ0RBQ0UsU0FDRiIsImZpbGUiOiJIZWFkbGVzc1hwbUVkaXRvci5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGxlc3NYcG1SZWdpb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4vKiAgIFxyXG4gIC5oZWFkbGVzc1hwbVJlZ2lvbjpob3ZlciB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMTdjMTNlICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggIzE3YzEzZTtcclxuICB9ICovXHJcblxyXG4uaGVhZGxlc3NYcG1JY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA2cHg7XHJcbiAgcmlnaHQ6IDZweDtcclxuICBiYWNrZ3JvdW5kOiAjMDA3MzczO1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGhlaWdodDogMzJweDtcclxuICB3aWR0aDogMzJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkbGVzc1hwbUljb25BbGlnbkxlZnQge1xyXG4gIGxlZnQ6IDBweDtcclxufVxyXG5cclxuLyogICAuaGVhZGxlc3NYcG1SZWdpb246aG92ZXIgLmhlYWRsZXNzWHBtSWNvbiB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gICAqL1xyXG4uaGVhZGxlc3NYcG1CYXIge1xyXG4gIGJhY2tncm91bmQ6ICMwMDczNzM7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4uaGVhZGxlc3NYcG1CYXJDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgZ2FwOiAzMHB4O1xyXG59XHJcblxyXG4uaGVhZGxlc3NYcG1CYXJCdXR0b25Hcm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMTVweFxyXG59XHJcblxyXG4uaGVhZGxlc3NYcG1CYXJCdXR0b24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgYmFja2dyb3VuZDogIzAzNDU0NTtcclxuICBwYWRkaW5nOiA4cHggMjJweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaGVhZGxlc3NYcG1CYXJCdXR0b246aG92ZXIsIC5oZWFkbGVzc1hwbUJhckJ1dHRvbkFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kOiAjMGQ1Yjk1O1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMTBweCAxNXB4IC0zcHgsIHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDRweCA2cHggLTJweDtcclxufVxyXG5cclxuLmhlYWRsZXNzWHBtQnJhbmRMb2dvIHt9XHJcblxyXG4uaGVhZGxlc3NYcG1Db250ZW50IHt9XHJcblxyXG4uaGVhZGxlc3NYcG1SZWdpb24uaGVhZGxlc3NYcG1SZWdpb24taG92ZXI6aG92ZXJ7XHJcbiAgb3BhY2l0eTogMTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMTdjMTNlICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICMxN2MxM2U7XHJcbn1cclxuLmhlYWRsZXNzWHBtUmVnaW9uLWhvdmVyOmhvdmVyIC5oZWFkbGVzc1hwbUljb257XHJcbiAgb3BhY2l0eTogMTtcclxufSJdfQ== */";
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
    return (jsxRuntime.jsx("div", { className: "headlessXpmBar", children: jsxRuntime.jsxs("div", { className: "headlessXpmBarContainer", children: [jsxRuntime.jsx("div", { className: "headlessXpmBrandLogo" }), jsxRuntime.jsxs("div", { className: "headlessXpmBarButtonGroup", children: [showPageEditorLink &&
                            jsxRuntime.jsx("button", { className: "headlessXpmBarButton", onClick: handlePage, children: jsxRuntime.jsxs("svg", { viewBox: "64 64 896 896", focusable: "false", "data-icon": "form", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", children: [jsxRuntime.jsx("path", { d: "M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z" }), jsxRuntime.jsx("path", { d: "M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 00-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z" })] }) }), jsxRuntime.jsx("button", { className: "headlessXpmBarButton ".concat(toggleXpm ? "headlessXpmBarButtonActive" : ""), onClick: function () { return setToggleXpm(!toggleXpm); }, title: "Edit Components", children: jsxRuntime.jsx("svg", { viewBox: "64 64 896 896", focusable: "false", "data-icon": "edit", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", children: jsxRuntime.jsx("path", { d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" }) }) })] })] }) }));
};

var toBoolean = function (staging) {
    if (typeof staging === "boolean")
        return staging;
    if (typeof staging === "string")
        return staging.toLowerCase() === "true";
    return false; // ✅ default fallback
};

var HeadlessXpmContext = react.createContext(undefined);
var useHeadlessXpmContext = function () {
    var ctx = react.useContext(HeadlessXpmContext);
    if (!ctx) {
        throw new Error("useHeadlessXpmContext must be used within HeadlessXpmProvider");
    }
    return ctx;
};
var HeadlessXpmProvider = function (_a) {
    var editorUrl = _a.editorUrl, icon = _a.icon, children = _a.children, _b = _a.showPageEditorLink, showPageEditorLink = _b === void 0 ? false : _b, _c = _a.showExpSpaceEditor, showExpSpaceEditor = _c === void 0 ? true : _c, staging = _a.staging;
    var _d = react.useState(false), toggleXpm = _d[0], setToggleXpm = _d[1];
    var _e = react.useState(false), showPage = _e[0], setShowPage = _e[1];
    var _f = react.useState(""), pageId = _f[0], setPageId = _f[1];
    return (jsxRuntime.jsxs(HeadlessXpmContext.Provider, { value: { editorUrl: editorUrl, icon: icon, showExpSpaceEditor: showExpSpaceEditor, showPageEditorLink: showPageEditorLink, toggleXpm: toggleXpm, pageId: pageId, showPage: showPage, setPageId: setPageId, setShowPage: setShowPage, staging: toBoolean(staging) }, children: [children, toBoolean(staging) && (showExpSpaceEditor && jsxRuntime.jsx(TridionBar, { setToggleXpm: setToggleXpm, toggleXpm: toggleXpm }))] }));
};

var HeadlessXpmEditor = function (_a) {
    var tcmId = _a.tcmId, children = _a.children, _b = _a.isPage, isPage = _b === void 0 ? false : _b, className = _a.className, containerStyle = _a.containerStyle, contentStyle = _a.contentStyle, iconStyle = _a.iconStyle, linkStyle = _a.linkStyle;
    var _c = useHeadlessXpmContext(), editorUrl = _c.editorUrl, icon = _c.icon, showExpSpaceEditor = _c.showExpSpaceEditor, toggleXpm = _c.toggleXpm, setPageId = _c.setPageId, setShowPage = _c.setShowPage, staging = _c.staging;
    var link = isPage ? "".concat(editorUrl, "/page?item=").concat(tcmId, "&tab=general.content") : "".concat(editorUrl, "/component?item=").concat(tcmId, "&tab=general.content");
    react.useEffect(function () {
        if (isPage) {
            setShowPage(true);
            setPageId(tcmId);
        }
    }, [isPage, tcmId]);
    if (!staging)
        return jsxRuntime.jsx(jsxRuntime.Fragment, { children: children });
    return (jsxRuntime.jsxs("div", { className: "headlessXpmRegion ".concat(className || "", " ").concat(toggleXpm || !showExpSpaceEditor ? "headlessXpmRegion-hover" : ""), style: __assign({}, containerStyle), children: [(toggleXpm || !showExpSpaceEditor) &&
                jsxRuntime.jsx("a", { href: link, className: "headlessXpmIcon", target: "_blank", rel: "noopener noreferrer", title: "Edit in Experiance sapce", style: __assign(__assign({}, linkStyle), { transition: "opacity 0.3s ease" }), children: icon ? icon :
                        jsxRuntime.jsx("svg", { style: __assign({}, iconStyle), viewBox: "64 64 896 896", focusable: "false", "data-icon": "edit", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true", children: jsxRuntime.jsx("path", { d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" }) }) }), jsxRuntime.jsx("div", { className: "headlessXpmContent", style: __assign({}, contentStyle), children: children })] }));
};

exports.HeadlessXpmEditor = HeadlessXpmEditor;
exports.HeadlessXpmProvider = HeadlessXpmProvider;
exports.useHeadlessXpmContext = useHeadlessXpmContext;
//# sourceMappingURL=index.js.map
