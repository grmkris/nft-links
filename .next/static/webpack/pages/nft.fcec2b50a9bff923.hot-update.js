"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/nft",{

/***/ "./pages/nft/index.tsx":
/*!*****************************!*\
  !*** ./pages/nft/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _components_NFTList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/NFTList */ \"./components/NFTList.tsx\");\n/* harmony import */ var _components_NFTListSkeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/NFTListSkeleton */ \"./components/NFTListSkeleton.tsx\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction NFT() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), nfts = ref[0], setNfts = ref[1];\n    var dummyNFT = [\n        {\n            title: \"Opica 1\",\n            description: \"Collection of best apes in the world yuhu\",\n            image: \"https://media.smallbiztrends.com/2022/02/best-selling-nfts-this-week.png\"\n        },\n        {\n            title: \"Bullrun\",\n            description: \"Bullrun 3,2,1 go!\",\n            image: \"https://miro.medium.com/max/1000/1*2OLWtgu-WqcvaukYwIGpxw.png\"\n        },\n        {\n            title: \"Random NFT\",\n            description: \"Collection of random NFT's\",\n            image: \"https://miro.medium.com/max/1024/1*RlMqU4P2XiOfw2_V1lNJEw.png\"\n        },\n        {\n            title: \"Fitness hulja\",\n            description: \"Hulja po\\u010Dikan v fitnessu\",\n            image: \"https://scontent.flju4-1.fna.fbcdn.net/v/t1.15752-9/275889148_2857791114519764_2731753575680007448_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=RXTYKt_1f9sAX_S-S-N&_nc_ht=scontent.flju4-1.fna&oh=03_AVL6uevZkWkJSFLjFkksu7V2hgxNt8CtPek4XF1Qd7qibw&oe=62725839\"\n        },\n        {\n            title: \"Hulja mrtu\",\n            description: \"Mrtu hulja po prvi vaji\",\n            image: \"https://scontent.flju4-1.fna.fbcdn.net/v/t1.15752-9/277821257_1614200642297822_783332395683730326_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=KdCQk7J8ZRQAX8pYavu&_nc_ht=scontent.flju4-1.fna&oh=03_AVKTbfT7UCZ4DlyGlN_pgAc9t7RVIUGOzJ8oSZ3PoRQw_Q&oe=6273C410\"\n        },\n        {\n            title: \"Hulja dosadan\",\n            description: \"Dosadan hulja k je biu na \\u0161ihtu dans\",\n            image: \"https://scontent.flju4-1.fna.fbcdn.net/v/t1.15752-9/276967151_380814533915536_289768505635896743_n.png?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=DhNqSlM7ysAAX-ijy9X&_nc_ht=scontent.flju4-1.fna&oh=03_AVLHJ0LXD0yFyWYtkdiC2QY8AFqiFxGNcf2NUU7__YYjSQ&oe=62754CD7\"\n        },\n        {\n            title: \"Hulja veseu\",\n            description: \"Veseli hulja, ker pije pivo\",\n            image: \"https://scontent.flju4-1.fna.fbcdn.net/v/t1.15752-9/276199310_314963527393704_1894867575042343784_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Uy_ifNoF-TgAX8koag6&_nc_ht=scontent.flju4-1.fna&oh=03_AVIhQYPthx2WXv9UUgTrZLi2hfD4_QxcO1M8JFoHHi_j8Q&oe=62743052\"\n        },\n        {\n            title: \"Hulja v antici\",\n            description: \"Hulja rad obi\\u0161\\u010De Antico in si privo\\u0161\\u010Di tartufe\",\n            image: \"https://scontent.flju4-1.fna.fbcdn.net/v/t1.15752-9/277912235_691062952216035_1666736231789691998_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=0q9GOPkKS5UAX89knYl&_nc_ht=scontent.flju4-1.fna&oh=03_AVKTxKhxRSOHur1DlWArSJM6wsE63q4y19B4fzluh735Bw&oe=62754A64\"\n        }, \n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setTimeout(function() {\n            setNfts(dummyNFT);\n        }, 1000);\n    }, []);\n    var nftTitle = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Your\",\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-rose-400 underline underline-offset-2\",\n                children: \"NFT\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Programiranje\\\\kris\\\\nft-links\\\\pages\\\\nft\\\\index.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            \" \",\n            \"Collection\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Programiranje\\\\kris\\\\nft-links\\\\pages\\\\nft\\\\index.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        headerTitle: nftTitle,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ml-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"rounded-lg bg-indigo-500 px-4 py-4 font-semibold text-white\",\n                        children: \"Add NFT\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Programiranje\\\\kris\\\\nft-links\\\\pages\\\\nft\\\\index.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Programiranje\\\\kris\\\\nft-links\\\\pages\\\\nft\\\\index.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this),\n                nfts.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NFTList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    dummyNFT: nfts\n                }, void 0, false, {\n                    fileName: \"C:\\\\Programiranje\\\\kris\\\\nft-links\\\\pages\\\\nft\\\\index.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NFTListSkeleton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    skeletonCount: 10\n                }, void 0, false, {\n                    fileName: \"C:\\\\Programiranje\\\\kris\\\\nft-links\\\\pages\\\\nft\\\\index.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Programiranje\\\\kris\\\\nft-links\\\\pages\\\\nft\\\\index.tsx\",\n            lineNumber: 76,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Programiranje\\\\kris\\\\nft-links\\\\pages\\\\nft\\\\index.tsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this);\n}\n_s(NFT, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = NFT;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NFT);\nvar _c;\n$RefreshReg$(_c, \"NFT\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZnQvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBaUQ7QUFDSjtBQUNFO0FBQ2dCOztBQUcvRCxTQUFTTSxHQUFHLEdBQUc7O0lBQ2IsSUFBd0JKLEdBQXdCLEdBQXhCQSwrQ0FBUSxDQUFhLEVBQUUsQ0FBQyxFQVBsRCxJQU9hLEdBQWFBLEdBQXdCLEdBQXJDLEVBUGIsT0FPc0IsR0FBSUEsR0FBd0IsR0FBNUI7SUFFcEIsSUFBTU8sUUFBUSxHQUFHO1FBQ2Y7WUFDRUMsS0FBSyxFQUFFLFNBQVM7WUFDaEJDLFdBQVcsRUFBRSwyQ0FBMkM7WUFDeERDLEtBQUssRUFDSCwwRUFBMEU7U0FDN0U7UUFDRDtZQUNFRixLQUFLLEVBQUUsU0FBUztZQUNoQkMsV0FBVyxFQUFFLG1CQUFtQjtZQUNoQ0MsS0FBSyxFQUFFLCtEQUErRDtTQUN2RTtRQUNEO1lBQ0VGLEtBQUssRUFBRSxZQUFZO1lBQ25CQyxXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDQyxLQUFLLEVBQUUsK0RBQStEO1NBQ3ZFO1FBRUQ7WUFDRUYsS0FBSyxFQUFFLGVBQWU7WUFDdEJDLFdBQVcsRUFBRSwrQkFBMEI7WUFDdENDLEtBQUksRUFDSCxzUUFBc1E7U0FDelE7UUFDRDtZQUNFRixLQUFLLEVBQUUsWUFBWTtZQUNuQkMsV0FBVyxFQUFFLHlCQUF5QjtZQUN0Q0MsS0FBSyxFQUNILHFRQUFxUTtTQUN4UTtRQUNEO1lBQ0VGLEtBQUssRUFBRSxlQUFlO1lBQ3RCQyxXQUFXLEVBQUUsMkNBQXNDO1lBQ2xEQyxLQUFJLEVBQ0gsb1FBQW9RO1NBQ3ZRO1FBQ0Q7WUFDRUYsS0FBSyxFQUFFLGFBQWE7WUFDcEJDLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUNDLEtBQUssRUFDSCxxUUFBcVE7U0FDeFE7UUFDRDtZQUNFRixLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCQyxXQUFXLEVBQUUsb0VBQWdEO1lBQzdEQyxLQUFLLEVBQ0gscVFBQXFRO1NBQ3hRO0tBQ0Y7SUFFRFgsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RZLFVBQVUsQ0FBQyxXQUFZO1lBQ3JCTCxPQUFPLENBQUNDLFFBQVEsQ0FBQyxDQUFDO1NBQ25CLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDVixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsSUFBTUssUUFBUSxpQkFDWiw4REFBQ0MsR0FBQzs7WUFBQyxNQUNHO1lBQUMsR0FBRzswQkFDUiw4REFBQ0MsTUFBSTtnQkFBQ0MsU0FBUyxFQUFDLDRDQUE0QzswQkFBQyxLQUFHOzs7OztvQkFBTztZQUFDLEdBQUc7WUFBQyxZQUU5RTs7Ozs7O1lBQUk7SUFHTixxQkFDRSw4REFBQ2QsMERBQU07UUFBQ2UsV0FBVyxFQUFFSixRQUFRO2tCQUMzQiw0RUFBQ0ssS0FBRztZQUFDRixTQUFTLEVBQUMsY0FBYzs7OEJBQzNCLDhEQUFDRSxLQUFHO29CQUFDRixTQUFTLEVBQUMsTUFBTTs4QkFDbkIsNEVBQUNHLFFBQU07d0JBQUNILFNBQVMsRUFBQyw2REFBNkQ7a0NBQUMsU0FFaEY7Ozs7OzRCQUFTOzs7Ozt3QkFDTDtnQkFDTFYsSUFBSSxDQUFDYyxNQUFNLGlCQUNWLDhEQUFDakIsMkRBQU87b0JBQUNLLFFBQVEsRUFBRUYsSUFBSTs7Ozs7d0JBQUksaUJBRTNCLDhEQUFDRixtRUFBZTtvQkFBQ2lCLGFBQWEsRUFBRSxFQUFFOzs7Ozt3QkFBSTs7Ozs7O2dCQUVwQzs7Ozs7WUFDQyxDQUNUO0NBQ0g7R0FuRlFoQixHQUFHO0FBQUhBLEtBQUFBLEdBQUc7QUFxRlosK0RBQWVBLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9uZnQvaW5kZXgudHN4P2JmOWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBORlRMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05GVExpc3RcIjtcclxuaW1wb3J0IE5GVExpc3RTa2VsZXRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ORlRMaXN0U2tlbGV0b25cIjtcclxuaW1wb3J0IHtuZnRNb2RlbH0gZnJvbSBcIi4uLy4uL21vZGVsL25mdE1vZGVsXCI7XHJcblxyXG5mdW5jdGlvbiBORlQoKSB7XHJcbiAgY29uc3QgW25mdHMsIHNldE5mdHNdID0gdXNlU3RhdGU8bmZ0TW9kZWxbXT4oW10pO1xyXG5cclxuICBjb25zdCBkdW1teU5GVCA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiT3BpY2EgMVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJDb2xsZWN0aW9uIG9mIGJlc3QgYXBlcyBpbiB0aGUgd29ybGQgeXVodVwiLFxyXG4gICAgICBpbWFnZTpcclxuICAgICAgICBcImh0dHBzOi8vbWVkaWEuc21hbGxiaXp0cmVuZHMuY29tLzIwMjIvMDIvYmVzdC1zZWxsaW5nLW5mdHMtdGhpcy13ZWVrLnBuZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQnVsbHJ1blwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJCdWxscnVuIDMsMiwxIGdvIVwiLFxyXG4gICAgICBpbWFnZTogXCJodHRwczovL21pcm8ubWVkaXVtLmNvbS9tYXgvMTAwMC8xKjJPTFd0Z3UtV3FjdmF1a1l3SUdweHcucG5nXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJSYW5kb20gTkZUXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkNvbGxlY3Rpb24gb2YgcmFuZG9tIE5GVCdzXCIsXHJcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vbWlyby5tZWRpdW0uY29tL21heC8xMDI0LzEqUmxNcVU0UDJYaU9mdzJfVjFsTkpFdy5wbmdcIixcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJGaXRuZXNzIGh1bGphXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkh1bGphIHBvxI1pa2FuIHYgZml0bmVzc3VcIixcclxuICAgICAgaW1hZ2U6XHJcbiAgICAgICAgXCJodHRwczovL3Njb250ZW50LmZsanU0LTEuZm5hLmZiY2RuLm5ldC92L3QxLjE1NzUyLTkvMjc1ODg5MTQ4XzI4NTc3OTExMTQ1MTk3NjRfMjczMTc1MzU3NTY4MDAwNzQ0OF9uLmpwZz9fbmNfY2F0PTExMCZjY2I9MS01Jl9uY19zaWQ9YWU5NDg4Jl9uY19vaGM9UlhUWUt0XzFmOXNBWF9TLVMtTiZfbmNfaHQ9c2NvbnRlbnQuZmxqdTQtMS5mbmEmb2g9MDNfQVZMNnVldlprV2tKU0ZMakZra3N1N1YyaGd4TnQ4Q3RQZWs0WEYxUWQ3cWlidyZvZT02MjcyNTgzOVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiSHVsamEgbXJ0dVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJNcnR1IGh1bGphIHBvIHBydmkgdmFqaVwiLFxyXG4gICAgICBpbWFnZTpcclxuICAgICAgICBcImh0dHBzOi8vc2NvbnRlbnQuZmxqdTQtMS5mbmEuZmJjZG4ubmV0L3YvdDEuMTU3NTItOS8yNzc4MjEyNTdfMTYxNDIwMDY0MjI5NzgyMl83ODMzMzIzOTU2ODM3MzAzMjZfbi5qcGc/X25jX2NhdD0xMDAmY2NiPTEtNSZfbmNfc2lkPWFlOTQ4OCZfbmNfb2hjPUtkQ1FrN0o4WlJRQVg4cFlhdnUmX25jX2h0PXNjb250ZW50LmZsanU0LTEuZm5hJm9oPTAzX0FWS1RiZlQ3VUNaNERseUdsTl9wZ0FjOXQ3UlZJVUdPeko4b1NaM1BvUlF3X1Emb2U9NjI3M0M0MTBcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkh1bGphIGRvc2FkYW5cIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiRG9zYWRhbiBodWxqYSBrIGplIGJpdSBuYSDFoWlodHUgZGFuc1wiLFxyXG4gICAgICBpbWFnZTpcclxuICAgICAgICBcImh0dHBzOi8vc2NvbnRlbnQuZmxqdTQtMS5mbmEuZmJjZG4ubmV0L3YvdDEuMTU3NTItOS8yNzY5NjcxNTFfMzgwODE0NTMzOTE1NTM2XzI4OTc2ODUwNTYzNTg5Njc0M19uLnBuZz9fbmNfY2F0PTExMCZjY2I9MS01Jl9uY19zaWQ9YWU5NDg4Jl9uY19vaGM9RGhOcVNsTTd5c0FBWC1pank5WCZfbmNfaHQ9c2NvbnRlbnQuZmxqdTQtMS5mbmEmb2g9MDNfQVZMSEowTFhEMHlGeVdZdGtkaUMyUVk4QUZxaUZ4R05jZjJOVVU3X19ZWWpTUSZvZT02Mjc1NENEN1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiSHVsamEgdmVzZXVcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiVmVzZWxpIGh1bGphLCBrZXIgcGlqZSBwaXZvXCIsXHJcbiAgICAgIGltYWdlOlxyXG4gICAgICAgIFwiaHR0cHM6Ly9zY29udGVudC5mbGp1NC0xLmZuYS5mYmNkbi5uZXQvdi90MS4xNTc1Mi05LzI3NjE5OTMxMF8zMTQ5NjM1MjczOTM3MDRfMTg5NDg2NzU3NTA0MjM0Mzc4NF9uLmpwZz9fbmNfY2F0PTEwMSZjY2I9MS01Jl9uY19zaWQ9YWU5NDg4Jl9uY19vaGM9VXlfaWZOb0YtVGdBWDhrb2FnNiZfbmNfaHQ9c2NvbnRlbnQuZmxqdTQtMS5mbmEmb2g9MDNfQVZJaFFZUHRoeDJXWHY5VVVnVHJaTGkyaGZENF9ReGNPMU04SkZvSEhpX2o4USZvZT02Mjc0MzA1MlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiSHVsamEgdiBhbnRpY2lcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiSHVsamEgcmFkIG9iacWhxI1lIEFudGljbyBpbiBzaSBwcml2b8WhxI1pIHRhcnR1ZmVcIixcclxuICAgICAgaW1hZ2U6XHJcbiAgICAgICAgXCJodHRwczovL3Njb250ZW50LmZsanU0LTEuZm5hLmZiY2RuLm5ldC92L3QxLjE1NzUyLTkvMjc3OTEyMjM1XzY5MTA2Mjk1MjIxNjAzNV8xNjY2NzM2MjMxNzg5NjkxOTk4X24uanBnP19uY19jYXQ9MTA5JmNjYj0xLTUmX25jX3NpZD1hZTk0ODgmX25jX29oYz0wcTlHT1BrS1M1VUFYODlrbllsJl9uY19odD1zY29udGVudC5mbGp1NC0xLmZuYSZvaD0wM19BVktUeEtoeFJTT0h1cjFEbFdBclNKTTZ3c0U2M3E0eTE5QjRmemx1aDczNUJ3Jm9lPTYyNzU0QTY0XCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgc2V0TmZ0cyhkdW1teU5GVCk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG5mdFRpdGxlID0gKFxyXG4gICAgPHA+XHJcbiAgICAgIFlvdXJ7XCIgXCJ9XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcm9zZS00MDAgdW5kZXJsaW5lIHVuZGVybGluZS1vZmZzZXQtMlwiPk5GVDwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgIENvbGxlY3Rpb25cclxuICAgIDwvcD5cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCBoZWFkZXJUaXRsZT17bmZ0VGl0bGV9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtNlwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLWluZGlnby01MDAgcHgtNCBweS00IGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICBBZGQgTkZUXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7bmZ0cy5sZW5ndGggPyAoXHJcbiAgICAgICAgICA8TkZUTGlzdCBkdW1teU5GVD17bmZ0c30gLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPE5GVExpc3RTa2VsZXRvbiBza2VsZXRvbkNvdW50PXsxMH0gLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5GVDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMYXlvdXQiLCJORlRMaXN0IiwiTkZUTGlzdFNrZWxldG9uIiwiTkZUIiwibmZ0cyIsInNldE5mdHMiLCJkdW1teU5GVCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInNldFRpbWVvdXQiLCJuZnRUaXRsZSIsInAiLCJzcGFuIiwiY2xhc3NOYW1lIiwiaGVhZGVyVGl0bGUiLCJkaXYiLCJidXR0b24iLCJsZW5ndGgiLCJza2VsZXRvbkNvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/nft/index.tsx\n");

/***/ })

});