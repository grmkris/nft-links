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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _components_NFTList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/NFTList */ \"./components/NFTList.tsx\");\n/* harmony import */ var _components_NFTListSkeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/NFTListSkeleton */ \"./components/NFTListSkeleton.tsx\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction NFT() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), nfts = ref[0], setNfts = ref[1];\n    var dummyNFT = [\n        {\n            title: \"Opica 1\",\n            description: \"Collection of best apes in the world yuhu\",\n            image: \"https://media.smallbiztrends.com/2022/02/best-selling-nfts-this-week.png\"\n        },\n        {\n            title: \"Bullrun\",\n            description: \"Bullrun 3,2,1 go!\",\n            image: \"https://miro.medium.com/max/1000/1*2OLWtgu-WqcvaukYwIGpxw.png\"\n        },\n        {\n            title: \"Random NFT\",\n            description: \"Collection of random NFT's\",\n            image: \"https://miro.medium.com/max/1024/1*RlMqU4P2XiOfw2_V1lNJEw.png\"\n        },\n        {\n            title: \"Fitness hulja\",\n            description: \"Hulja po\\u010Dikan v fitnessu\",\n            image: \"https://scontent.flju4-1.fna.fbcdn.net/v/t1.15752-9/275889148_2857791114519764_2731753575680007448_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=RXTYKt_1f9sAX_S-S-N&_nc_ht=scontent.flju4-1.fna&oh=03_AVL6uevZkWkJSFLjFkksu7V2hgxNt8CtPek4XF1Qd7qibw&oe=62725839\"\n        },\n        {\n            title: \"Hulja mrtu\",\n            description: \"Mrtu hulja po prvi vaji\",\n            image: \"https://scontent.flju4-1.fna.fbcdn.net/v/t1.15752-9/277821257_1614200642297822_783332395683730326_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=KdCQk7J8ZRQAX8pYavu&_nc_ht=scontent.flju4-1.fna&oh=03_AVKTbfT7UCZ4DlyGlN_pgAc9t7RVIUGOzJ8oSZ3PoRQw_Q&oe=6273C410\"\n        },\n        {\n            title: \"Hulja dosadan\",\n            description: \"Dosadan hulja k je biu na \\u0161ihtu dans\",\n            image: \"https://scontent.flju4-1.fna.fbcdn.net/v/t1.15752-9/276967151_380814533915536_289768505635896743_n.png?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=DhNqSlM7ysAAX-ijy9X&_nc_ht=scontent.flju4-1.fna&oh=03_AVLHJ0LXD0yFyWYtkdiC2QY8AFqiFxGNcf2NUU7__YYjSQ&oe=62754CD7\"\n        },\n        {\n            title: \"Hulja veseu\",\n            description: \"Veseli hulja, ker pije pivo\",\n            image: \"https://scontent.flju4-1.fna.fbcdn.net/v/t1.15752-9/276199310_314963527393704_1894867575042343784_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Uy_ifNoF-TgAX8koag6&_nc_ht=scontent.flju4-1.fna&oh=03_AVIhQYPthx2WXv9UUgTrZLi2hfD4_QxcO1M8JFoHHi_j8Q&oe=62743052\"\n        },\n        {\n            title: \"Hulja v antici\",\n            description: \"Hulja rad obi\\u0161\\u010De Antico in si privo\\u0161\\u010Di tartufe\",\n            image: \"https://scontent.flju4-1.fna.fbcdn.net/v/t1.15752-9/277912235_691062952216035_1666736231789691998_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=0q9GOPkKS5UAX89knYl&_nc_ht=scontent.flju4-1.fna&oh=03_AVKTxKhxRSOHur1DlWArSJM6wsE63q4y19B4fzluh735Bw&oe=62754A64\"\n        }, \n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setTimeout(function() {\n            setNfts(dummyNFT);\n        }, 1000);\n    }, []);\n    var nftTitle = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Your\",\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-rose-400 underline underline-offset-2\",\n                children: \"NFT\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Programiranje\\\\kris\\\\nft-links\\\\pages\\\\nft\\\\index.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            \" \",\n            \"Collection\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Programiranje\\\\kris\\\\nft-links\\\\pages\\\\nft\\\\index.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        headerTitle: nftTitle,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"rounded-lg bg-indigo-500 font-bold text-white\",\n                        children: \"Add NFT\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Programiranje\\\\kris\\\\nft-links\\\\pages\\\\nft\\\\index.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Programiranje\\\\kris\\\\nft-links\\\\pages\\\\nft\\\\index.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this),\n                nfts.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NFTList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    dummyNFT: nfts\n                }, void 0, false, {\n                    fileName: \"C:\\\\Programiranje\\\\kris\\\\nft-links\\\\pages\\\\nft\\\\index.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NFTListSkeleton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    skeletonCount: 10\n                }, void 0, false, {\n                    fileName: \"C:\\\\Programiranje\\\\kris\\\\nft-links\\\\pages\\\\nft\\\\index.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Programiranje\\\\kris\\\\nft-links\\\\pages\\\\nft\\\\index.tsx\",\n            lineNumber: 76,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Programiranje\\\\kris\\\\nft-links\\\\pages\\\\nft\\\\index.tsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this);\n}\n_s(NFT, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = NFT;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NFT);\nvar _c;\n$RefreshReg$(_c, \"NFT\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZnQvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBaUQ7QUFDSjtBQUNFO0FBQ2dCOztBQUcvRCxTQUFTTSxHQUFHLEdBQUc7O0lBQ2IsSUFBd0JKLEdBQXdCLEdBQXhCQSwrQ0FBUSxDQUFhLEVBQUUsQ0FBQyxFQVBsRCxJQU9hLEdBQWFBLEdBQXdCLEdBQXJDLEVBUGIsT0FPc0IsR0FBSUEsR0FBd0IsR0FBNUI7SUFFcEIsSUFBTU8sUUFBUSxHQUFHO1FBQ2Y7WUFDRUMsS0FBSyxFQUFFLFNBQVM7WUFDaEJDLFdBQVcsRUFBRSwyQ0FBMkM7WUFDeERDLEtBQUssRUFDSCwwRUFBMEU7U0FDN0U7UUFDRDtZQUNFRixLQUFLLEVBQUUsU0FBUztZQUNoQkMsV0FBVyxFQUFFLG1CQUFtQjtZQUNoQ0MsS0FBSyxFQUFFLCtEQUErRDtTQUN2RTtRQUNEO1lBQ0VGLEtBQUssRUFBRSxZQUFZO1lBQ25CQyxXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDQyxLQUFLLEVBQUUsK0RBQStEO1NBQ3ZFO1FBRUQ7WUFDRUYsS0FBSyxFQUFFLGVBQWU7WUFDdEJDLFdBQVcsRUFBRSwrQkFBMEI7WUFDdENDLEtBQUksRUFDSCxzUUFBc1E7U0FDelE7UUFDRDtZQUNFRixLQUFLLEVBQUUsWUFBWTtZQUNuQkMsV0FBVyxFQUFFLHlCQUF5QjtZQUN0Q0MsS0FBSyxFQUNILHFRQUFxUTtTQUN4UTtRQUNEO1lBQ0VGLEtBQUssRUFBRSxlQUFlO1lBQ3RCQyxXQUFXLEVBQUUsMkNBQXNDO1lBQ2xEQyxLQUFJLEVBQ0gsb1FBQW9RO1NBQ3ZRO1FBQ0Q7WUFDRUYsS0FBSyxFQUFFLGFBQWE7WUFDcEJDLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUNDLEtBQUssRUFDSCxxUUFBcVE7U0FDeFE7UUFDRDtZQUNFRixLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCQyxXQUFXLEVBQUUsb0VBQWdEO1lBQzdEQyxLQUFLLEVBQ0gscVFBQXFRO1NBQ3hRO0tBQ0Y7SUFFRFgsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RZLFVBQVUsQ0FBQyxXQUFZO1lBQ3JCTCxPQUFPLENBQUNDLFFBQVEsQ0FBQyxDQUFDO1NBQ25CLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDVixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsSUFBTUssUUFBUSxpQkFDWiw4REFBQ0MsR0FBQzs7WUFBQyxNQUNHO1lBQUMsR0FBRzswQkFDUiw4REFBQ0MsTUFBSTtnQkFBQ0MsU0FBUyxFQUFDLDRDQUE0QzswQkFBQyxLQUFHOzs7OztvQkFBTztZQUFDLEdBQUc7WUFBQyxZQUU5RTs7Ozs7O1lBQUk7SUFHTixxQkFDRSw4REFBQ2QsMERBQU07UUFBQ2UsV0FBVyxFQUFFSixRQUFRO2tCQUMzQiw0RUFBQ0ssS0FBRztZQUFDRixTQUFTLEVBQUMsY0FBYzs7OEJBQzNCLDhEQUFDRSxLQUFHOzhCQUNGLDRFQUFDQyxRQUFNO3dCQUFDSCxTQUFTLEVBQUMsK0NBQStDO2tDQUFDLFNBRWxFOzs7Ozs0QkFBUzs7Ozs7d0JBQ0w7Z0JBQ0xWLElBQUksQ0FBQ2MsTUFBTSxpQkFDViw4REFBQ2pCLDJEQUFPO29CQUFDSyxRQUFRLEVBQUVGLElBQUk7Ozs7O3dCQUFJLGlCQUUzQiw4REFBQ0YsbUVBQWU7b0JBQUNpQixhQUFhLEVBQUUsRUFBRTs7Ozs7d0JBQUk7Ozs7OztnQkFFcEM7Ozs7O1lBQ0MsQ0FDVDtDQUNIO0dBbkZRaEIsR0FBRztBQUFIQSxLQUFBQSxHQUFHO0FBcUZaLCtEQUFlQSxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmZ0L2luZGV4LnRzeD9iZjlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgTkZUTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ORlRMaXN0XCI7XHJcbmltcG9ydCBORlRMaXN0U2tlbGV0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTkZUTGlzdFNrZWxldG9uXCI7XHJcbmltcG9ydCB7bmZ0TW9kZWx9IGZyb20gXCIuLi8uLi9tb2RlbC9uZnRNb2RlbFwiO1xyXG5cclxuZnVuY3Rpb24gTkZUKCkge1xyXG4gIGNvbnN0IFtuZnRzLCBzZXROZnRzXSA9IHVzZVN0YXRlPG5mdE1vZGVsW10+KFtdKTtcclxuXHJcbiAgY29uc3QgZHVtbXlORlQgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIk9waWNhIDFcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiQ29sbGVjdGlvbiBvZiBiZXN0IGFwZXMgaW4gdGhlIHdvcmxkIHl1aHVcIixcclxuICAgICAgaW1hZ2U6XHJcbiAgICAgICAgXCJodHRwczovL21lZGlhLnNtYWxsYml6dHJlbmRzLmNvbS8yMDIyLzAyL2Jlc3Qtc2VsbGluZy1uZnRzLXRoaXMtd2Vlay5wbmdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkJ1bGxydW5cIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiQnVsbHJ1biAzLDIsMSBnbyFcIixcclxuICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9taXJvLm1lZGl1bS5jb20vbWF4LzEwMDAvMSoyT0xXdGd1LVdxY3ZhdWtZd0lHcHh3LnBuZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiUmFuZG9tIE5GVFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJDb2xsZWN0aW9uIG9mIHJhbmRvbSBORlQnc1wiLFxyXG4gICAgICBpbWFnZTogXCJodHRwczovL21pcm8ubWVkaXVtLmNvbS9tYXgvMTAyNC8xKlJsTXFVNFAyWGlPZncyX1YxbE5KRXcucG5nXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiRml0bmVzcyBodWxqYVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJIdWxqYSBwb8SNaWthbiB2IGZpdG5lc3N1XCIsXHJcbiAgICAgIGltYWdlOlxyXG4gICAgICAgIFwiaHR0cHM6Ly9zY29udGVudC5mbGp1NC0xLmZuYS5mYmNkbi5uZXQvdi90MS4xNTc1Mi05LzI3NTg4OTE0OF8yODU3NzkxMTE0NTE5NzY0XzI3MzE3NTM1NzU2ODAwMDc0NDhfbi5qcGc/X25jX2NhdD0xMTAmY2NiPTEtNSZfbmNfc2lkPWFlOTQ4OCZfbmNfb2hjPVJYVFlLdF8xZjlzQVhfUy1TLU4mX25jX2h0PXNjb250ZW50LmZsanU0LTEuZm5hJm9oPTAzX0FWTDZ1ZXZaa1drSlNGTGpGa2tzdTdWMmhneE50OEN0UGVrNFhGMVFkN3FpYncmb2U9NjI3MjU4MzlcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkh1bGphIG1ydHVcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiTXJ0dSBodWxqYSBwbyBwcnZpIHZhamlcIixcclxuICAgICAgaW1hZ2U6XHJcbiAgICAgICAgXCJodHRwczovL3Njb250ZW50LmZsanU0LTEuZm5hLmZiY2RuLm5ldC92L3QxLjE1NzUyLTkvMjc3ODIxMjU3XzE2MTQyMDA2NDIyOTc4MjJfNzgzMzMyMzk1NjgzNzMwMzI2X24uanBnP19uY19jYXQ9MTAwJmNjYj0xLTUmX25jX3NpZD1hZTk0ODgmX25jX29oYz1LZENRazdKOFpSUUFYOHBZYXZ1Jl9uY19odD1zY29udGVudC5mbGp1NC0xLmZuYSZvaD0wM19BVktUYmZUN1VDWjREbHlHbE5fcGdBYzl0N1JWSVVHT3pKOG9TWjNQb1JRd19RJm9lPTYyNzNDNDEwXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJIdWxqYSBkb3NhZGFuXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkRvc2FkYW4gaHVsamEgayBqZSBiaXUgbmEgxaFpaHR1IGRhbnNcIixcclxuICAgICAgaW1hZ2U6XHJcbiAgICAgICAgXCJodHRwczovL3Njb250ZW50LmZsanU0LTEuZm5hLmZiY2RuLm5ldC92L3QxLjE1NzUyLTkvMjc2OTY3MTUxXzM4MDgxNDUzMzkxNTUzNl8yODk3Njg1MDU2MzU4OTY3NDNfbi5wbmc/X25jX2NhdD0xMTAmY2NiPTEtNSZfbmNfc2lkPWFlOTQ4OCZfbmNfb2hjPURoTnFTbE03eXNBQVgtaWp5OVgmX25jX2h0PXNjb250ZW50LmZsanU0LTEuZm5hJm9oPTAzX0FWTEhKMExYRDB5RnlXWXRrZGlDMlFZOEFGcWlGeEdOY2YyTlVVN19fWVlqU1Emb2U9NjI3NTRDRDdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkh1bGphIHZlc2V1XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlZlc2VsaSBodWxqYSwga2VyIHBpamUgcGl2b1wiLFxyXG4gICAgICBpbWFnZTpcclxuICAgICAgICBcImh0dHBzOi8vc2NvbnRlbnQuZmxqdTQtMS5mbmEuZmJjZG4ubmV0L3YvdDEuMTU3NTItOS8yNzYxOTkzMTBfMzE0OTYzNTI3MzkzNzA0XzE4OTQ4Njc1NzUwNDIzNDM3ODRfbi5qcGc/X25jX2NhdD0xMDEmY2NiPTEtNSZfbmNfc2lkPWFlOTQ4OCZfbmNfb2hjPVV5X2lmTm9GLVRnQVg4a29hZzYmX25jX2h0PXNjb250ZW50LmZsanU0LTEuZm5hJm9oPTAzX0FWSWhRWVB0aHgyV1h2OVVVZ1RyWkxpMmhmRDRfUXhjTzFNOEpGb0hIaV9qOFEmb2U9NjI3NDMwNTJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkh1bGphIHYgYW50aWNpXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkh1bGphIHJhZCBvYmnFocSNZSBBbnRpY28gaW4gc2kgcHJpdm/FocSNaSB0YXJ0dWZlXCIsXHJcbiAgICAgIGltYWdlOlxyXG4gICAgICAgIFwiaHR0cHM6Ly9zY29udGVudC5mbGp1NC0xLmZuYS5mYmNkbi5uZXQvdi90MS4xNTc1Mi05LzI3NzkxMjIzNV82OTEwNjI5NTIyMTYwMzVfMTY2NjczNjIzMTc4OTY5MTk5OF9uLmpwZz9fbmNfY2F0PTEwOSZjY2I9MS01Jl9uY19zaWQ9YWU5NDg4Jl9uY19vaGM9MHE5R09Qa0tTNVVBWDg5a25ZbCZfbmNfaHQ9c2NvbnRlbnQuZmxqdTQtMS5mbmEmb2g9MDNfQVZLVHhLaHhSU09IdXIxRGxXQXJTSk02d3NFNjNxNHkxOUI0ZnpsdWg3MzVCdyZvZT02Mjc1NEE2NFwiLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNldE5mdHMoZHVtbXlORlQpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBuZnRUaXRsZSA9IChcclxuICAgIDxwPlxyXG4gICAgICBZb3Vye1wiIFwifVxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJvc2UtNDAwIHVuZGVybGluZSB1bmRlcmxpbmUtb2Zmc2V0LTJcIj5ORlQ8L3NwYW4+e1wiIFwifVxyXG4gICAgICBDb2xsZWN0aW9uXHJcbiAgICA8L3A+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgaGVhZGVyVGl0bGU9e25mdFRpdGxlfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTVcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLWluZGlnby01MDAgZm9udC1ib2xkIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgQWRkIE5GVFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge25mdHMubGVuZ3RoID8gKFxyXG4gICAgICAgICAgPE5GVExpc3QgZHVtbXlORlQ9e25mdHN9IC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxORlRMaXN0U2tlbGV0b24gc2tlbGV0b25Db3VudD17MTB9IC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBORlQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGF5b3V0IiwiTkZUTGlzdCIsIk5GVExpc3RTa2VsZXRvbiIsIk5GVCIsIm5mdHMiLCJzZXROZnRzIiwiZHVtbXlORlQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJzZXRUaW1lb3V0IiwibmZ0VGl0bGUiLCJwIiwic3BhbiIsImNsYXNzTmFtZSIsImhlYWRlclRpdGxlIiwiZGl2IiwiYnV0dG9uIiwibGVuZ3RoIiwic2tlbGV0b25Db3VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/nft/index.tsx\n");

/***/ })

});