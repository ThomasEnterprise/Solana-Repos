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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"JournalCreate\": function() { return /* binding */ JournalCreate; },\n/* harmony export */   \"JournalList\": function() { return /* binding */ JournalList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ui_ui_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/ui-layout */ \"(app-client)/./components/ui/ui-layout.tsx\");\n/* harmony import */ var _cluster_cluster_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cluster/cluster-ui */ \"(app-client)/./components/cluster/cluster-ui.tsx\");\n/* harmony import */ var _journal_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./journal-data-access */ \"(app-client)/./components/journal/journal-data-access.tsx\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-client)/../node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js\");\n/* __next_internal_client_entry_do_not_use__ JournalCreate,JournalList auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n// import { useMemo } from 'react';\n\n\n\n\nfunction JournalCreate() {\n    _s();\n    const { createEntry  } = (0,_journal_data_access__WEBPACK_IMPORTED_MODULE_3__.useJournalProgram)();\n    const { publicKey  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useWallet)();\n    if (!publicKey) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Connect your wallet\"\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 19,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"btn btn-xs lg:btn-md btn-primary\",\n        onClick: ()=>createEntry.mutateAsync(publicKey),\n        disabled: createEntry.isPending,\n        children: [\n            \"Create Journal Entry \",\n            createEntry.isPending && \"...\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(JournalCreate, \"QFD6UL7tmGWJZs3ULCQmvqt8iLE=\", false, function() {\n    return [\n        _journal_data_access__WEBPACK_IMPORTED_MODULE_3__.useJournalProgram,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useWallet\n    ];\n});\n_c = JournalCreate;\nfunction JournalList() {\n    var _getProgramAccount_data, _accounts_data, _accounts_data1;\n    _s1();\n    const { accounts , getProgramAccount  } = (0,_journal_data_access__WEBPACK_IMPORTED_MODULE_3__.useJournalProgram)();\n    if (getProgramAccount.isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"loading loading-spinner loading-lg\"\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 38,\n            columnNumber: 12\n        }, this);\n    }\n    if (!((_getProgramAccount_data = getProgramAccount.data) === null || _getProgramAccount_data === void 0 ? void 0 : _getProgramAccount_data.value)) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center alert alert-info\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"Program account not found. Make sure you have deployed the program and are on the correct cluster.\"\n            }, void 0, false, {\n                fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-6\",\n        children: accounts.isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"loading loading-spinner loading-lg\"\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 53,\n            columnNumber: 9\n        }, this) : ((_accounts_data = accounts.data) === null || _accounts_data === void 0 ? void 0 : _accounts_data.length) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid gap-4 md:grid-cols-2\",\n            children: (_accounts_data1 = accounts.data) === null || _accounts_data1 === void 0 ? void 0 : _accounts_data1.map((account)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(JournalCard, {\n                    account: account.publicKey\n                }, account.publicKey.toString(), false, {\n                    fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 13\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 55,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl\",\n                    children: \"No accounts\"\n                }, void 0, false, {\n                    fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 11\n                }, this),\n                \"No accounts found. Create one above to get started.\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 64,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s1(JournalList, \"ODkGGbMi85Tkf3ZOOaPAIBMWQ/w=\", false, function() {\n    return [\n        _journal_data_access__WEBPACK_IMPORTED_MODULE_3__.useJournalProgram\n    ];\n});\n_c1 = JournalList;\nfunction JournalCard(param) {\n    let { account  } = param;\n    var _accountQuery_data, _accountQuery_data1;\n    _s2();\n    const { accountQuery , updateEntry , deleteEntry  } = (0,_journal_data_access__WEBPACK_IMPORTED_MODULE_3__.useJournalProgramAccount)({\n        account\n    });\n    const { publicKey  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useWallet)();\n    if (!publicKey) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Connect your wallet\"\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 83,\n            columnNumber: 12\n        }, this);\n    }\n    return accountQuery.isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"loading loading-spinner loading-lg\"\n    }, void 0, false, {\n        fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card card-bordered border-base-300 border-4 text-neutral-content\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card-body items-center text-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"card-title justify-center text-3xl cursor-pointer\",\n                        onClick: ()=>accountQuery.refetch(),\n                        children: (_accountQuery_data = accountQuery.data) === null || _accountQuery_data === void 0 ? void 0 : _accountQuery_data.title\n                    }, void 0, false, {\n                        fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: (_accountQuery_data1 = accountQuery.data) === null || _accountQuery_data1 === void 0 ? void 0 : _accountQuery_data1.message\n                    }, void 0, false, {\n                        fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-actions justify-around\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-xs lg:btn-md btn-outline\",\n                            onClick: ()=>updateEntry.mutateAsync(publicKey),\n                            disabled: updateEntry.isPending,\n                            children: \"Update Journal Entry\"\n                        }, void 0, false, {\n                            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center space-y-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cluster_cluster_ui__WEBPACK_IMPORTED_MODULE_2__.ExplorerLink, {\n                                    path: \"account/\".concat(account),\n                                    label: (0,_ui_ui_layout__WEBPACK_IMPORTED_MODULE_1__.ellipsify)(account.toString())\n                                }, void 0, false, {\n                                    fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-xs btn-secondary btn-outline\",\n                                onClick: ()=>{\n                                    if (!window.confirm(\"Are you sure you want to close this account?\")) {\n                                        return;\n                                    }\n                                    return deleteEntry.mutateAsync();\n                                },\n                                disabled: deleteEntry.isPending,\n                                children: \"Close\"\n                            }, void 0, false, {\n                                fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                lineNumber: 91,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 90,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, this);\n}\n_s2(JournalCard, \"sQj23FxvVzPkyfUQlNuSl4phLD8=\", false, function() {\n    return [\n        _journal_data_access__WEBPACK_IMPORTED_MODULE_3__.useJournalProgramAccount,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useWallet\n    ];\n});\n_c2 = JournalCard;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"JournalCreate\");\n$RefreshReg$(_c1, \"JournalList\");\n$RefreshReg$(_c2, \"JournalCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9qb3VybmFsL2pvdXJuYWwtdWkudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUdBLG1DQUFtQztBQUNTO0FBQ1M7QUFJdEI7QUFDMEI7QUFHbEQsU0FBU0s7O0lBQ2QsTUFBTSxFQUFFQyxZQUFXLEVBQUUsR0FBR0osdUVBQWlCQTtJQUN6QyxNQUFNLEVBQUVLLFVBQVMsRUFBRSxHQUFHSCx1RUFBU0E7SUFFL0IsSUFBSSxDQUFDRyxXQUFVO1FBQ2IscUJBQU8sOERBQUNDO3NCQUFFOzs7Ozs7SUFDWjtJQUVBLHFCQUNFLDhEQUFDQztRQUNDQyxXQUFVO1FBQ1ZDLFNBQVMsSUFBTUwsWUFBWU0sWUFBWUw7UUFDdkNNLFVBQVVQLFlBQVlROztZQUN2QjtZQUN1QlIsWUFBWVEsYUFBYTs7Ozs7OztBQUdyRDtHQWpCZ0JUOztRQUNVSCxtRUFBaUJBO1FBQ25CRSxtRUFBU0E7OztLQUZqQkM7QUFvQlQsU0FBU1U7UUFNVEMseUJBY0dDLGdCQUVDQTs7SUFyQlQsTUFBTSxFQUFFQSxTQUFRLEVBQUVELGtCQUFpQixFQUFFLEdBQUdkLHVFQUFpQkE7SUFFekQsSUFBSWMsa0JBQWtCRSxXQUFXO1FBQy9CLHFCQUFPLDhEQUFDQztZQUFLVCxXQUFVOzs7Ozs7SUFDekI7SUFDQSxJQUFJLENBQUNNLENBQUFBLENBQUFBLDBCQUFBQSxrQkFBa0JJLGtCQUFsQkoscUNBQUFBLEtBQUFBLElBQUFBLHdCQUF3QkssS0FBSSxHQUFHO1FBQ2xDLHFCQUNFLDhEQUFDQztZQUFJWixXQUFVO3NCQUNiLDRFQUFDUzswQkFBSzs7Ozs7Ozs7Ozs7SUFNWjtJQUNBLHFCQUNFLDhEQUFDRztRQUFJWixXQUFXO2tCQUNiTyxTQUFTQywwQkFDUiw4REFBQ0M7WUFBS1QsV0FBVTs7Ozs7bUJBQ2RPLENBQUFBLENBQUFBLGlCQUFBQSxTQUFTRyxrQkFBVEgsNEJBQUFBLEtBQUFBLElBQUFBLGVBQWVNLE1BQUssa0JBQ3RCLDhEQUFDRDtZQUFJWixXQUFVO3NCQUNaTyxDQUFBQSxrQkFBQUEsU0FBU0csa0JBQVRILDZCQUFBQSxLQUFBQSxJQUFBQSxnQkFBZU8sSUFBSSxDQUFDQyx3QkFDbkIsOERBQUNDO29CQUVDRCxTQUFTQSxRQUFRbEI7bUJBRFprQixRQUFRbEIsVUFBVW9COzs7Ozs7Ozs7aUNBTTdCLDhEQUFDTDtZQUFJWixXQUFVOzs4QkFDYiw4REFBQ2tCO29CQUFHbEIsV0FBVzs4QkFBWTs7Ozs7O2dCQUFnQjs7Ozs7Ozs7Ozs7O0FBTXJEO0lBckNnQks7O1FBQzBCYixtRUFBaUJBOzs7TUFEM0NhO0FBdUNoQixTQUFTVyxZQUFZLEtBQW1DO1FBQW5DLEVBQUVELFFBQU8sRUFBMEIsR0FBbkM7UUF1QlJJLG9CQUdGQTs7SUF6QlQsTUFBTSxFQUNKQSxhQUFZLEVBQ1pDLFlBQVcsRUFDWEMsWUFBVyxFQUNaLEdBQUc1Qiw4RUFBd0JBLENBQUM7UUFBRXNCO0lBQVE7SUFDdkMsTUFBTSxFQUFFbEIsVUFBUyxFQUFFLEdBQUdILHVFQUFTQTtJQUcvQixJQUFJLENBQUNHLFdBQVU7UUFDYixxQkFBTyw4REFBQ0M7c0JBQUU7Ozs7OztJQUNaO0lBRUEsT0FBT3FCLGFBQWFYLDBCQUNsQiw4REFBQ0M7UUFBS1QsV0FBVTs7Ozs7NkJBRWhCLDhEQUFDWTtRQUFJWixXQUFVO2tCQUNiLDRFQUFDWTtZQUFJWixXQUFVO3NCQUNiLDRFQUFDWTtnQkFBSVosV0FBVTs7a0NBQ2IsOERBQUNrQjt3QkFDQ2xCLFdBQVU7d0JBQ1ZDLFNBQVMsSUFBTWtCLGFBQWFHO2tDQUUzQkgsQ0FBQUEscUJBQUFBLGFBQWFULGtCQUFiUyxnQ0FBQUEsS0FBQUEsSUFBQUEsbUJBQW1CSTs7Ozs7O2tDQUV0Qiw4REFBQ3pCO2tDQUNBcUIsQ0FBQUEsc0JBQUFBLGFBQWFULGtCQUFiUyxpQ0FBQUEsS0FBQUEsSUFBQUEsb0JBQW1CSzs7Ozs7O2tDQUVwQiw4REFBQ1o7d0JBQUlaLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUNDQyxXQUFVOzRCQUNWQyxTQUFTLElBQU1tQixZQUFZbEIsWUFBWUw7NEJBQ3ZDTSxVQUFVaUIsWUFBWWhCO3NDQUN2Qjs7Ozs7Ozs7Ozs7a0NBSUgsOERBQUNRO3dCQUFJWixXQUFVOzswQ0FDYiw4REFBQ0Y7MENBQ0MsNEVBQUNQLDZEQUFZQTtvQ0FDWGtDLE1BQU0sV0FBbUIsT0FBUlY7b0NBQ2pCVyxPQUFPcEMsd0RBQVNBLENBQUN5QixRQUFRRTs7Ozs7Ozs7Ozs7MENBRzdCLDhEQUFDbEI7Z0NBQ0NDLFdBQVU7Z0NBQ1ZDLFNBQVM7b0NBQ1AsSUFDRSxDQUFDMEIsT0FBT0MsUUFDTixpREFFRjt3Q0FDQTtvQ0FDRjtvQ0FDQSxPQUFPUCxZQUFZbkI7Z0NBQ3JCO2dDQUNBQyxVQUFVa0IsWUFBWWpCOzBDQUN2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiO0lBakVTWTs7UUFLSHZCLDBFQUF3QkE7UUFDTkMsbUVBQVNBOzs7TUFOeEJzQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2pvdXJuYWwvam91cm5hbC11aS50c3g/ZTU3NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IEtleXBhaXIsIFB1YmxpY0tleSB9IGZyb20gJ0Bzb2xhbmEvd2ViMy5qcyc7XG4vLyBpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZWxsaXBzaWZ5IH0gZnJvbSAnLi4vdWkvdWktbGF5b3V0JztcbmltcG9ydCB7IEV4cGxvcmVyTGluayB9IGZyb20gJy4uL2NsdXN0ZXIvY2x1c3Rlci11aSc7XG5pbXBvcnQge1xuICB1c2VKb3VybmFsUHJvZ3JhbSxcbiAgdXNlSm91cm5hbFByb2dyYW1BY2NvdW50LFxufSBmcm9tICcuL2pvdXJuYWwtZGF0YS1hY2Nlc3MnO1xuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdCc7XG5pbXBvcnQgeyBwdWJsaWNLZXkgfSBmcm9tICdAY29yYWwteHl6L2FuY2hvci9kaXN0L2Nqcy91dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBKb3VybmFsQ3JlYXRlKCkge1xuICBjb25zdCB7IGNyZWF0ZUVudHJ5IH0gPSB1c2VKb3VybmFsUHJvZ3JhbSgpO1xuICBjb25zdCB7IHB1YmxpY0tleSB9ID0gdXNlV2FsbGV0KCk7XG5cbiAgaWYgKCFwdWJsaWNLZXkpe1xuICAgIHJldHVybiA8cD5Db25uZWN0IHlvdXIgd2FsbGV0PC9wPlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXhzIGxnOmJ0bi1tZCBidG4tcHJpbWFyeVwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiBjcmVhdGVFbnRyeS5tdXRhdGVBc3luYyhwdWJsaWNLZXkpfVxuICAgICAgZGlzYWJsZWQ9e2NyZWF0ZUVudHJ5LmlzUGVuZGluZ31cbiAgICA+XG4gICAgICBDcmVhdGUgSm91cm5hbCBFbnRyeSB7Y3JlYXRlRW50cnkuaXNQZW5kaW5nICYmICcuLi4nfVxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBKb3VybmFsTGlzdCgpIHtcbiAgY29uc3QgeyBhY2NvdW50cywgZ2V0UHJvZ3JhbUFjY291bnQgfSA9IHVzZUpvdXJuYWxQcm9ncmFtKCk7XG5cbiAgaWYgKGdldFByb2dyYW1BY2NvdW50LmlzTG9hZGluZykge1xuICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxvYWRpbmctc3Bpbm5lciBsb2FkaW5nLWxnXCI+PC9zcGFuPjtcbiAgfVxuICBpZiAoIWdldFByb2dyYW1BY2NvdW50LmRhdGE/LnZhbHVlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBhbGVydCBhbGVydC1pbmZvXCI+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIFByb2dyYW0gYWNjb3VudCBub3QgZm91bmQuIE1ha2Ugc3VyZSB5b3UgaGF2ZSBkZXBsb3llZCB0aGUgcHJvZ3JhbSBhbmRcbiAgICAgICAgICBhcmUgb24gdGhlIGNvcnJlY3QgY2x1c3Rlci5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXsnc3BhY2UteS02J30+XG4gICAgICB7YWNjb3VudHMuaXNMb2FkaW5nID8gKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxvYWRpbmctc3Bpbm5lciBsb2FkaW5nLWxnXCI+PC9zcGFuPlxuICAgICAgKSA6IGFjY291bnRzLmRhdGE/Lmxlbmd0aCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC00IG1kOmdyaWQtY29scy0yXCI+XG4gICAgICAgICAge2FjY291bnRzLmRhdGE/Lm1hcCgoYWNjb3VudCkgPT4gKFxuICAgICAgICAgICAgPEpvdXJuYWxDYXJkXG4gICAgICAgICAgICAgIGtleT17YWNjb3VudC5wdWJsaWNLZXkudG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgYWNjb3VudD17YWNjb3VudC5wdWJsaWNLZXl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXsndGV4dC0yeGwnfT5ObyBhY2NvdW50czwvaDI+XG4gICAgICAgICAgTm8gYWNjb3VudHMgZm91bmQuIENyZWF0ZSBvbmUgYWJvdmUgdG8gZ2V0IHN0YXJ0ZWQuXG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gSm91cm5hbENhcmQoeyBhY2NvdW50IH06IHsgYWNjb3VudDogUHVibGljS2V5IH0pIHtcbiAgY29uc3Qge1xuICAgIGFjY291bnRRdWVyeSxcbiAgICB1cGRhdGVFbnRyeSwgXG4gICAgZGVsZXRlRW50cnlcbiAgfSA9IHVzZUpvdXJuYWxQcm9ncmFtQWNjb3VudCh7IGFjY291bnQgfSk7XG4gIGNvbnN0IHsgcHVibGljS2V5IH0gPSB1c2VXYWxsZXQoKTtcblxuXG4gIGlmICghcHVibGljS2V5KXtcbiAgICByZXR1cm4gPHA+Q29ubmVjdCB5b3VyIHdhbGxldDwvcD5cbiAgfVxuXG4gIHJldHVybiBhY2NvdW50UXVlcnkuaXNMb2FkaW5nID8gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbG9hZGluZy1zcGlubmVyIGxvYWRpbmctbGdcIj48L3NwYW4+XG4gICkgOiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm9yZGVyZWQgYm9yZGVyLWJhc2UtMzAwIGJvcmRlci00IHRleHQtbmV1dHJhbC1jb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgICAgICA8aDJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtdGl0bGUganVzdGlmeS1jZW50ZXIgdGV4dC0zeGwgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWNjb3VudFF1ZXJ5LnJlZmV0Y2goKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWNjb3VudFF1ZXJ5LmRhdGE/LnRpdGxlfVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHA+IFxuICAgICAgICAgIHthY2NvdW50UXVlcnkuZGF0YT8ubWVzc2FnZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvbnMganVzdGlmeS1hcm91bmRcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi14cyBsZzpidG4tbWQgYnRuLW91dGxpbmVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVFbnRyeS5tdXRhdGVBc3luYyhwdWJsaWNLZXkpfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17dXBkYXRlRW50cnkuaXNQZW5kaW5nfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBVcGRhdGUgSm91cm5hbCBFbnRyeVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBzcGFjZS15LTRcIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8RXhwbG9yZXJMaW5rXG4gICAgICAgICAgICAgICAgcGF0aD17YGFjY291bnQvJHthY2NvdW50fWB9XG4gICAgICAgICAgICAgICAgbGFiZWw9e2VsbGlwc2lmeShhY2NvdW50LnRvU3RyaW5nKCkpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXhzIGJ0bi1zZWNvbmRhcnkgYnRuLW91dGxpbmVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgIXdpbmRvdy5jb25maXJtKFxuICAgICAgICAgICAgICAgICAgICAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNsb3NlIHRoaXMgYWNjb3VudD8nXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkZWxldGVFbnRyeS5tdXRhdGVBc3luYygpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZGVsZXRlRW50cnkuaXNQZW5kaW5nfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiZWxsaXBzaWZ5IiwiRXhwbG9yZXJMaW5rIiwidXNlSm91cm5hbFByb2dyYW0iLCJ1c2VKb3VybmFsUHJvZ3JhbUFjY291bnQiLCJ1c2VXYWxsZXQiLCJKb3VybmFsQ3JlYXRlIiwiY3JlYXRlRW50cnkiLCJwdWJsaWNLZXkiLCJwIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsIm11dGF0ZUFzeW5jIiwiZGlzYWJsZWQiLCJpc1BlbmRpbmciLCJKb3VybmFsTGlzdCIsImdldFByb2dyYW1BY2NvdW50IiwiYWNjb3VudHMiLCJpc0xvYWRpbmciLCJzcGFuIiwiZGF0YSIsInZhbHVlIiwiZGl2IiwibGVuZ3RoIiwibWFwIiwiYWNjb3VudCIsIkpvdXJuYWxDYXJkIiwidG9TdHJpbmciLCJoMiIsImFjY291bnRRdWVyeSIsInVwZGF0ZUVudHJ5IiwiZGVsZXRlRW50cnkiLCJyZWZldGNoIiwidGl0bGUiLCJtZXNzYWdlIiwicGF0aCIsImxhYmVsIiwid2luZG93IiwiY29uZmlybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/journal/journal-ui.tsx\n"));

/***/ })

});