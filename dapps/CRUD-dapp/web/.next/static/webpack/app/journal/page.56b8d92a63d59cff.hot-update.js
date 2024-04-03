"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/journal/page",{

/***/ "(app-client)/./components/journal/journal-ui.tsx":
/*!*******************************************!*\
  !*** ./components/journal/journal-ui.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"JournalCreate\": function() { return /* binding */ JournalCreate; },\n/* harmony export */   \"JournalList\": function() { return /* binding */ JournalList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ui_ui_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/ui-layout */ \"(app-client)/./components/ui/ui-layout.tsx\");\n/* harmony import */ var _cluster_cluster_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cluster/cluster-ui */ \"(app-client)/./components/cluster/cluster-ui.tsx\");\n/* harmony import */ var _journal_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./journal-data-access */ \"(app-client)/./components/journal/journal-data-access.tsx\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-client)/../node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js\");\n/* __next_internal_client_entry_do_not_use__ JournalCreate,JournalList auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n// import { useMemo } from 'react';\n\n\n\n\nfunction JournalCreate() {\n    _s();\n    const { createEntry  } = (0,_journal_data_access__WEBPACK_IMPORTED_MODULE_3__.useJournalProgram)();\n    const { publicKey  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useWallet)();\n    if (!publicKey) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Connect your wallet\"\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 20,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"btn btn-xs lg:btn-md btn-primary\",\n        onClick: ()=>createEntry.mutateAsync(publicKey),\n        disabled: createEntry.isPending,\n        children: [\n            \"Create Journal Entry \",\n            createEntry.isPending && \"...\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(JournalCreate, \"QFD6UL7tmGWJZs3ULCQmvqt8iLE=\", false, function() {\n    return [\n        _journal_data_access__WEBPACK_IMPORTED_MODULE_3__.useJournalProgram,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useWallet\n    ];\n});\n_c = JournalCreate;\nfunction JournalList() {\n    var _getProgramAccount_data, _accounts_data, _accounts_data1;\n    _s1();\n    const { accounts , getProgramAccount  } = (0,_journal_data_access__WEBPACK_IMPORTED_MODULE_3__.useJournalProgram)();\n    if (getProgramAccount.isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"loading loading-spinner loading-lg\"\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 39,\n            columnNumber: 12\n        }, this);\n    }\n    if (!((_getProgramAccount_data = getProgramAccount.data) === null || _getProgramAccount_data === void 0 ? void 0 : _getProgramAccount_data.value)) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center alert alert-info\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"Program account not found. Make sure you have deployed the program and are on the correct cluster.\"\n            }, void 0, false, {\n                fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-6\",\n        children: accounts.isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"loading loading-spinner loading-lg\"\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 54,\n            columnNumber: 9\n        }, this) : ((_accounts_data = accounts.data) === null || _accounts_data === void 0 ? void 0 : _accounts_data.length) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid gap-4 md:grid-cols-2\",\n            children: (_accounts_data1 = accounts.data) === null || _accounts_data1 === void 0 ? void 0 : _accounts_data1.map((account)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(JournalCard, {\n                    account: account.publicKey\n                }, account.publicKey.toString(), false, {\n                    fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 13\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 56,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl\",\n                    children: \"No accounts\"\n                }, void 0, false, {\n                    fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, this),\n                \"No accounts found. Create one above to get started.\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 65,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s1(JournalList, \"ODkGGbMi85Tkf3ZOOaPAIBMWQ/w=\", false, function() {\n    return [\n        _journal_data_access__WEBPACK_IMPORTED_MODULE_3__.useJournalProgram\n    ];\n});\n_c1 = JournalList;\nfunction JournalCard(param) {\n    let { account  } = param;\n    _s2();\n    const { accountQuery , updateEntry , deleteEntry  } = (0,_journal_data_access__WEBPACK_IMPORTED_MODULE_3__.useJournalProgramAccount)({\n        account\n    });\n    const { publicKey  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useWallet)();\n    if (!publicKey) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Connect your wallet\"\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 84,\n            columnNumber: 12\n        }, this);\n    }\n    return accountQuery.isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"loading loading-spinner loading-lg\"\n    }, void 0, false, {\n        fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card card-bordered border-base-300 border-4 text-neutral-content\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card-body items-center text-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"card-title justify-center text-3xl cursor-pointer\",\n                        onClick: ()=>accountQuery.refetch(),\n                        children: \"Journal Entry\"\n                    }, void 0, false, {\n                        fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-actions justify-around\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-xs lg:btn-md btn-outline\",\n                            onClick: ()=>updateEntry.mutateAsync(publicKey),\n                            disabled: updateEntry.isPending,\n                            children: \"Update Journal Entry\"\n                        }, void 0, false, {\n                            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center space-y-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cluster_cluster_ui__WEBPACK_IMPORTED_MODULE_2__.ExplorerLink, {\n                                    path: \"account/\".concat(account),\n                                    label: (0,_ui_ui_layout__WEBPACK_IMPORTED_MODULE_1__.ellipsify)(account.toString())\n                                }, void 0, false, {\n                                    fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                                    lineNumber: 130,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                                lineNumber: 129,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-xs btn-secondary btn-outline\",\n                                onClick: ()=>{\n                                    if (!window.confirm(\"Are you sure you want to close this account?\")) {\n                                        return;\n                                    }\n                                    return deleteEntry.mutateAsync();\n                                },\n                                disabled: deleteEntry.isPending,\n                                children: \"Close\"\n                            }, void 0, false, {\n                                fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                                lineNumber: 135,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 91,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, this);\n}\n_s2(JournalCard, \"sQj23FxvVzPkyfUQlNuSl4phLD8=\", false, function() {\n    return [\n        _journal_data_access__WEBPACK_IMPORTED_MODULE_3__.useJournalProgramAccount,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useWallet\n    ];\n});\n_c2 = JournalCard;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"JournalCreate\");\n$RefreshReg$(_c1, \"JournalList\");\n$RefreshReg$(_c2, \"JournalCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9qb3VybmFsL2pvdXJuYWwtdWkudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUdBLG1DQUFtQztBQUNTO0FBQ1M7QUFJdEI7QUFDMEI7QUFHbEQsU0FBU0s7O0lBQ2QsTUFBTSxFQUFFQyxZQUFXLEVBQUUsR0FBR0osdUVBQWlCQTtJQUN6QyxNQUFNLEVBQUVLLFVBQVMsRUFBRSxHQUFHSCx1RUFBU0E7SUFHL0IsSUFBSSxDQUFDRyxXQUFVO1FBQ2IscUJBQU8sOERBQUNDO3NCQUFFOzs7Ozs7SUFDWjtJQUVBLHFCQUNFLDhEQUFDQztRQUNDQyxXQUFVO1FBQ1ZDLFNBQVMsSUFBTUwsWUFBWU0sWUFBWUw7UUFDdkNNLFVBQVVQLFlBQVlROztZQUN2QjtZQUN1QlIsWUFBWVEsYUFBYTs7Ozs7OztBQUdyRDtHQWxCZ0JUOztRQUNVSCxtRUFBaUJBO1FBQ25CRSxtRUFBU0E7OztLQUZqQkM7QUFxQlQsU0FBU1U7UUFNVEMseUJBY0dDLGdCQUVDQTs7SUFyQlQsTUFBTSxFQUFFQSxTQUFRLEVBQUVELGtCQUFpQixFQUFFLEdBQUdkLHVFQUFpQkE7SUFFekQsSUFBSWMsa0JBQWtCRSxXQUFXO1FBQy9CLHFCQUFPLDhEQUFDQztZQUFLVCxXQUFVOzs7Ozs7SUFDekI7SUFDQSxJQUFJLENBQUNNLENBQUFBLENBQUFBLDBCQUFBQSxrQkFBa0JJLGtCQUFsQkoscUNBQUFBLEtBQUFBLElBQUFBLHdCQUF3QkssS0FBSSxHQUFHO1FBQ2xDLHFCQUNFLDhEQUFDQztZQUFJWixXQUFVO3NCQUNiLDRFQUFDUzswQkFBSzs7Ozs7Ozs7Ozs7SUFNWjtJQUNBLHFCQUNFLDhEQUFDRztRQUFJWixXQUFXO2tCQUNiTyxTQUFTQywwQkFDUiw4REFBQ0M7WUFBS1QsV0FBVTs7Ozs7bUJBQ2RPLENBQUFBLENBQUFBLGlCQUFBQSxTQUFTRyxrQkFBVEgsNEJBQUFBLEtBQUFBLElBQUFBLGVBQWVNLE1BQUssa0JBQ3RCLDhEQUFDRDtZQUFJWixXQUFVO3NCQUNaTyxDQUFBQSxrQkFBQUEsU0FBU0csa0JBQVRILDZCQUFBQSxLQUFBQSxJQUFBQSxnQkFBZU8sSUFBSSxDQUFDQyx3QkFDbkIsOERBQUNDO29CQUVDRCxTQUFTQSxRQUFRbEI7bUJBRFprQixRQUFRbEIsVUFBVW9COzs7Ozs7Ozs7aUNBTTdCLDhEQUFDTDtZQUFJWixXQUFVOzs4QkFDYiw4REFBQ2tCO29CQUFHbEIsV0FBVzs4QkFBWTs7Ozs7O2dCQUFnQjs7Ozs7Ozs7Ozs7O0FBTXJEO0lBckNnQks7O1FBQzBCYixtRUFBaUJBOzs7TUFEM0NhO0FBdUNoQixTQUFTVyxZQUFZLEtBQW1DO1FBQW5DLEVBQUVELFFBQU8sRUFBMEIsR0FBbkM7O0lBQ25CLE1BQU0sRUFDSkksYUFBWSxFQUNaQyxZQUFXLEVBQ1hDLFlBQVcsRUFDWixHQUFHNUIsOEVBQXdCQSxDQUFDO1FBQUVzQjtJQUFRO0lBQ3ZDLE1BQU0sRUFBRWxCLFVBQVMsRUFBRSxHQUFHSCx1RUFBU0E7SUFHL0IsSUFBSSxDQUFDRyxXQUFVO1FBQ2IscUJBQU8sOERBQUNDO3NCQUFFOzs7Ozs7SUFDWjtJQUVBLE9BQU9xQixhQUFhWCwwQkFDbEIsOERBQUNDO1FBQUtULFdBQVU7Ozs7OzZCQUVoQiw4REFBQ1k7UUFBSVosV0FBVTtrQkFDYiw0RUFBQ1k7WUFBSVosV0FBVTtzQkFDYiw0RUFBQ1k7Z0JBQUlaLFdBQVU7O2tDQUNiLDhEQUFDa0I7d0JBQ0NsQixXQUFVO3dCQUNWQyxTQUFTLElBQU1rQixhQUFhRztrQ0FFM0I7Ozs7OztrQ0FFSCw4REFBQ1Y7d0JBQUlaLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUNDQyxXQUFVOzRCQUNWQyxTQUFTLElBQU1tQixZQUFZbEIsWUFBWUw7NEJBQ3ZDTSxVQUFVaUIsWUFBWWhCO3NDQUN2Qjs7Ozs7Ozs7Ozs7a0NBd0JILDhEQUFDUTt3QkFBSVosV0FBVTs7MENBQ2IsOERBQUNGOzBDQUNDLDRFQUFDUCw2REFBWUE7b0NBQ1hnQyxNQUFNLFdBQW1CLE9BQVJSO29DQUNqQlMsT0FBT2xDLHdEQUFTQSxDQUFDeUIsUUFBUUU7Ozs7Ozs7Ozs7OzBDQUc3Qiw4REFBQ2xCO2dDQUNDQyxXQUFVO2dDQUNWQyxTQUFTO29DQUNQLElBQ0UsQ0FBQ3dCLE9BQU9DLFFBQ04saURBRUY7d0NBQ0E7b0NBQ0Y7b0NBQ0EsT0FBT0wsWUFBWW5CO2dDQUNyQjtnQ0FDQUMsVUFBVWtCLFlBQVlqQjswQ0FDdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRYjtJQWxGU1k7O1FBS0h2QiwwRUFBd0JBO1FBQ05DLG1FQUFTQTs7O01BTnhCc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9qb3VybmFsL2pvdXJuYWwtdWkudHN4P2U1NzciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyBLZXlwYWlyLCBQdWJsaWNLZXkgfSBmcm9tICdAc29sYW5hL3dlYjMuanMnO1xuLy8gaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGVsbGlwc2lmeSB9IGZyb20gJy4uL3VpL3VpLWxheW91dCc7XG5pbXBvcnQgeyBFeHBsb3JlckxpbmsgfSBmcm9tICcuLi9jbHVzdGVyL2NsdXN0ZXItdWknO1xuaW1wb3J0IHtcbiAgdXNlSm91cm5hbFByb2dyYW0sXG4gIHVzZUpvdXJuYWxQcm9ncmFtQWNjb3VudCxcbn0gZnJvbSAnLi9qb3VybmFsLWRhdGEtYWNjZXNzJztcbmltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QnO1xuaW1wb3J0IHsgcHVibGljS2V5IH0gZnJvbSAnQGNvcmFsLXh5ei9hbmNob3IvZGlzdC9janMvdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gSm91cm5hbENyZWF0ZSgpIHtcbiAgY29uc3QgeyBjcmVhdGVFbnRyeSB9ID0gdXNlSm91cm5hbFByb2dyYW0oKTtcbiAgY29uc3QgeyBwdWJsaWNLZXkgfSA9IHVzZVdhbGxldCgpO1xuXG5cbiAgaWYgKCFwdWJsaWNLZXkpe1xuICAgIHJldHVybiA8cD5Db25uZWN0IHlvdXIgd2FsbGV0PC9wPlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXhzIGxnOmJ0bi1tZCBidG4tcHJpbWFyeVwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiBjcmVhdGVFbnRyeS5tdXRhdGVBc3luYyhwdWJsaWNLZXkpfVxuICAgICAgZGlzYWJsZWQ9e2NyZWF0ZUVudHJ5LmlzUGVuZGluZ31cbiAgICA+XG4gICAgICBDcmVhdGUgSm91cm5hbCBFbnRyeSB7Y3JlYXRlRW50cnkuaXNQZW5kaW5nICYmICcuLi4nfVxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBKb3VybmFsTGlzdCgpIHtcbiAgY29uc3QgeyBhY2NvdW50cywgZ2V0UHJvZ3JhbUFjY291bnQgfSA9IHVzZUpvdXJuYWxQcm9ncmFtKCk7XG5cbiAgaWYgKGdldFByb2dyYW1BY2NvdW50LmlzTG9hZGluZykge1xuICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxvYWRpbmctc3Bpbm5lciBsb2FkaW5nLWxnXCI+PC9zcGFuPjtcbiAgfVxuICBpZiAoIWdldFByb2dyYW1BY2NvdW50LmRhdGE/LnZhbHVlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBhbGVydCBhbGVydC1pbmZvXCI+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIFByb2dyYW0gYWNjb3VudCBub3QgZm91bmQuIE1ha2Ugc3VyZSB5b3UgaGF2ZSBkZXBsb3llZCB0aGUgcHJvZ3JhbSBhbmRcbiAgICAgICAgICBhcmUgb24gdGhlIGNvcnJlY3QgY2x1c3Rlci5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXsnc3BhY2UteS02J30+XG4gICAgICB7YWNjb3VudHMuaXNMb2FkaW5nID8gKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxvYWRpbmctc3Bpbm5lciBsb2FkaW5nLWxnXCI+PC9zcGFuPlxuICAgICAgKSA6IGFjY291bnRzLmRhdGE/Lmxlbmd0aCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC00IG1kOmdyaWQtY29scy0yXCI+XG4gICAgICAgICAge2FjY291bnRzLmRhdGE/Lm1hcCgoYWNjb3VudCkgPT4gKFxuICAgICAgICAgICAgPEpvdXJuYWxDYXJkXG4gICAgICAgICAgICAgIGtleT17YWNjb3VudC5wdWJsaWNLZXkudG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgYWNjb3VudD17YWNjb3VudC5wdWJsaWNLZXl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXsndGV4dC0yeGwnfT5ObyBhY2NvdW50czwvaDI+XG4gICAgICAgICAgTm8gYWNjb3VudHMgZm91bmQuIENyZWF0ZSBvbmUgYWJvdmUgdG8gZ2V0IHN0YXJ0ZWQuXG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gSm91cm5hbENhcmQoeyBhY2NvdW50IH06IHsgYWNjb3VudDogUHVibGljS2V5IH0pIHtcbiAgY29uc3Qge1xuICAgIGFjY291bnRRdWVyeSxcbiAgICB1cGRhdGVFbnRyeSwgXG4gICAgZGVsZXRlRW50cnlcbiAgfSA9IHVzZUpvdXJuYWxQcm9ncmFtQWNjb3VudCh7IGFjY291bnQgfSk7XG4gIGNvbnN0IHsgcHVibGljS2V5IH0gPSB1c2VXYWxsZXQoKTtcblxuXG4gIGlmICghcHVibGljS2V5KXtcbiAgICByZXR1cm4gPHA+Q29ubmVjdCB5b3VyIHdhbGxldDwvcD5cbiAgfVxuXG4gIHJldHVybiBhY2NvdW50UXVlcnkuaXNMb2FkaW5nID8gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbG9hZGluZy1zcGlubmVyIGxvYWRpbmctbGdcIj48L3NwYW4+XG4gICkgOiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm9yZGVyZWQgYm9yZGVyLWJhc2UtMzAwIGJvcmRlci00IHRleHQtbmV1dHJhbC1jb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgICAgICA8aDJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtdGl0bGUganVzdGlmeS1jZW50ZXIgdGV4dC0zeGwgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWNjb3VudFF1ZXJ5LnJlZmV0Y2goKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7XCJKb3VybmFsIEVudHJ5XCJ9XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYWN0aW9ucyBqdXN0aWZ5LWFyb3VuZFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXhzIGxnOmJ0bi1tZCBidG4tb3V0bGluZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVwZGF0ZUVudHJ5Lm11dGF0ZUFzeW5jKHB1YmxpY0tleSl9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXt1cGRhdGVFbnRyeS5pc1BlbmRpbmd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFVwZGF0ZSBKb3VybmFsIEVudHJ5XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIHsvKiA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4teHMgbGc6YnRuLW1kIGJ0bi1vdXRsaW5lXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gd2luZG93LnByb21wdChcbiAgICAgICAgICAgICAgICAgICdTZXQgdGl0bGUgdG86JyxcbiAgICAgICAgICAgICAgICAgIHRpdGxlLnRvU3RyaW5nKCkgPz8gJzAnXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0TXV0YXRpb24ubXV0YXRlQXN5bmMocGFyc2VJbnQodmFsdWUpKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NldE11dGF0aW9uLmlzUGVuZGluZ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2V0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi14cyBsZzpidG4tbWQgYnRuLW91dGxpbmVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWNyZW1lbnRNdXRhdGlvbi5tdXRhdGVBc3luYygpfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZGVjcmVtZW50TXV0YXRpb24uaXNQZW5kaW5nfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBEZWNyZW1lbnRcbiAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHNwYWNlLXktNFwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxFeHBsb3JlckxpbmtcbiAgICAgICAgICAgICAgICBwYXRoPXtgYWNjb3VudC8ke2FjY291bnR9YH1cbiAgICAgICAgICAgICAgICBsYWJlbD17ZWxsaXBzaWZ5KGFjY291bnQudG9TdHJpbmcoKSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4teHMgYnRuLXNlY29uZGFyeSBidG4tb3V0bGluZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAhd2luZG93LmNvbmZpcm0oXG4gICAgICAgICAgICAgICAgICAgICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2xvc2UgdGhpcyBhY2NvdW50PydcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlbGV0ZUVudHJ5Lm11dGF0ZUFzeW5jKCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtkZWxldGVFbnRyeS5pc1BlbmRpbmd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJlbGxpcHNpZnkiLCJFeHBsb3JlckxpbmsiLCJ1c2VKb3VybmFsUHJvZ3JhbSIsInVzZUpvdXJuYWxQcm9ncmFtQWNjb3VudCIsInVzZVdhbGxldCIsIkpvdXJuYWxDcmVhdGUiLCJjcmVhdGVFbnRyeSIsInB1YmxpY0tleSIsInAiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwibXV0YXRlQXN5bmMiLCJkaXNhYmxlZCIsImlzUGVuZGluZyIsIkpvdXJuYWxMaXN0IiwiZ2V0UHJvZ3JhbUFjY291bnQiLCJhY2NvdW50cyIsImlzTG9hZGluZyIsInNwYW4iLCJkYXRhIiwidmFsdWUiLCJkaXYiLCJsZW5ndGgiLCJtYXAiLCJhY2NvdW50IiwiSm91cm5hbENhcmQiLCJ0b1N0cmluZyIsImgyIiwiYWNjb3VudFF1ZXJ5IiwidXBkYXRlRW50cnkiLCJkZWxldGVFbnRyeSIsInJlZmV0Y2giLCJwYXRoIiwibGFiZWwiLCJ3aW5kb3ciLCJjb25maXJtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/journal/journal-ui.tsx\n"));

/***/ })

});