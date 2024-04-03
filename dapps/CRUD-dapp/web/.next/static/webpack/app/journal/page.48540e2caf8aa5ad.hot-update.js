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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"JournalCreate\": function() { return /* binding */ JournalCreate; },\n/* harmony export */   \"JournalList\": function() { return /* binding */ JournalList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ui_ui_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/ui-layout */ \"(app-client)/./components/ui/ui-layout.tsx\");\n/* harmony import */ var _cluster_cluster_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cluster/cluster-ui */ \"(app-client)/./components/cluster/cluster-ui.tsx\");\n/* harmony import */ var _journal_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./journal-data-access */ \"(app-client)/./components/journal/journal-data-access.tsx\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-client)/../node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-client)/../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ JournalCreate,JournalList auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n// import { useMemo } from 'react';\n\n\n\n\n\nfunction JournalCreate() {\n    _s();\n    const { createEntry  } = (0,_journal_data_access__WEBPACK_IMPORTED_MODULE_3__.useJournalProgram)();\n    const { publicKey  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useWallet)();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const isFormValid = title.trim() !== \"\" && message.trim() !== \"\";\n    const handleSubmit = ()=>{\n        if (publicKey && isFormValid) {\n            createEntry.mutateAsync({\n                title,\n                message,\n                owner: publicKey\n            });\n        }\n    };\n    if (!publicKey) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Connect your wallet\"\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 30,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Title\",\n                value: title,\n                onChange: (e)=>setTitle(e.target.value),\n                className: \"input input-bordered w-full max-w-xs\"\n            }, void 0, false, {\n                fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                placeholder: \"Message\",\n                value: message,\n                onChange: (e)=>setMessage(e.target.value),\n                className: \"textarea textarea-bordered w-full max-w-xs\"\n            }, void 0, false, {\n                fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn btn-xs lg:btn-md btn-primary\",\n                onClick: handleSubmit,\n                disabled: createEntry.isPending || !isFormValid,\n                children: [\n                    \"Create Journal Entry \",\n                    createEntry.isPending && \"...\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(JournalCreate, \"l18ZqCRQ9XH1CUMpG69KtXUpv7k=\", false, function() {\n    return [\n        _journal_data_access__WEBPACK_IMPORTED_MODULE_3__.useJournalProgram,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useWallet\n    ];\n});\n_c = JournalCreate;\nfunction JournalList() {\n    var _getProgramAccount_data, _accounts_data, _accounts_data1;\n    _s1();\n    const { accounts , getProgramAccount  } = (0,_journal_data_access__WEBPACK_IMPORTED_MODULE_3__.useJournalProgram)();\n    if (getProgramAccount.isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"loading loading-spinner loading-lg\"\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 65,\n            columnNumber: 12\n        }, this);\n    }\n    if (!((_getProgramAccount_data = getProgramAccount.data) === null || _getProgramAccount_data === void 0 ? void 0 : _getProgramAccount_data.value)) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center alert alert-info\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"Program account not found. Make sure you have deployed the program and are on the correct cluster.\"\n            }, void 0, false, {\n                fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-6\",\n        children: accounts.isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"loading loading-spinner loading-lg\"\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 80,\n            columnNumber: 9\n        }, this) : ((_accounts_data = accounts.data) === null || _accounts_data === void 0 ? void 0 : _accounts_data.length) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid gap-4 md:grid-cols-2\",\n            children: (_accounts_data1 = accounts.data) === null || _accounts_data1 === void 0 ? void 0 : _accounts_data1.map((account)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(JournalCard, {\n                    account: account.publicKey\n                }, account.publicKey.toString(), false, {\n                    fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 13\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 82,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl\",\n                    children: \"No accounts\"\n                }, void 0, false, {\n                    fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 11\n                }, this),\n                \"No accounts found. Create one above to get started.\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 91,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, this);\n}\n_s1(JournalList, \"ODkGGbMi85Tkf3ZOOaPAIBMWQ/w=\", false, function() {\n    return [\n        _journal_data_access__WEBPACK_IMPORTED_MODULE_3__.useJournalProgram\n    ];\n});\n_c1 = JournalList;\nfunction JournalCard(param) {\n    let { account  } = param;\n    var _accountQuery_data, _accountQuery_data1, _accountQuery_data2;\n    _s2();\n    const { accountQuery , updateEntry , deleteEntry  } = (0,_journal_data_access__WEBPACK_IMPORTED_MODULE_3__.useJournalProgramAccount)({\n        account\n    });\n    const { publicKey  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useWallet)();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const title = (_accountQuery_data = accountQuery.data) === null || _accountQuery_data === void 0 ? void 0 : _accountQuery_data.title;\n    const isFormValid = message.trim() !== \"\";\n    const handleSubmit = ()=>{\n        if (publicKey && isFormValid) {\n            updateEntry.mutateAsync({\n                title,\n                message,\n                owner: publicKey\n            });\n        }\n    };\n    if (!publicKey) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Connect your wallet\"\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 119,\n            columnNumber: 12\n        }, this);\n    }\n    return accountQuery.isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"loading loading-spinner loading-lg\"\n    }, void 0, false, {\n        fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n        lineNumber: 123,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card card-bordered border-base-300 border-4 text-neutral-content\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card-body items-center text-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"card-title justify-center text-3xl cursor-pointer\",\n                        onClick: ()=>accountQuery.refetch(),\n                        children: (_accountQuery_data1 = accountQuery.data) === null || _accountQuery_data1 === void 0 ? void 0 : _accountQuery_data1.title\n                    }, void 0, false, {\n                        fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: (_accountQuery_data2 = accountQuery.data) === null || _accountQuery_data2 === void 0 ? void 0 : _accountQuery_data2.message\n                    }, void 0, false, {\n                        fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                        lineNumber: 134,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-actions justify-around\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                placeholder: \"Update message here\",\n                                value: message,\n                                onChange: (e)=>setMessage(e.target.value),\n                                className: \"textarea textarea-bordered w-full max-w-xs\"\n                            }, void 0, false, {\n                                fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                                lineNumber: 138,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-xs lg:btn-md btn-primary\",\n                                onClick: handleSubmit,\n                                disabled: updateEntry.isPending || !isFormValid,\n                                children: [\n                                    \"Update Journal Entry \",\n                                    updateEntry.isPending && \"...\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                                lineNumber: 144,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                        lineNumber: 137,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center space-y-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cluster_cluster_ui__WEBPACK_IMPORTED_MODULE_2__.ExplorerLink, {\n                                    path: \"account/\".concat(account),\n                                    label: (0,_ui_ui_layout__WEBPACK_IMPORTED_MODULE_1__.ellipsify)(account.toString())\n                                }, void 0, false, {\n                                    fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                                    lineNumber: 154,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                                lineNumber: 153,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-xs btn-secondary btn-outline\",\n                                onClick: ()=>{\n                                    var _accountQuery_data;\n                                    if (!window.confirm(\"Are you sure you want to close this account?\")) {\n                                        return;\n                                    }\n                                    return deleteEntry.mutateAsync((_accountQuery_data = accountQuery.data) === null || _accountQuery_data === void 0 ? void 0 : _accountQuery_data.title);\n                                },\n                                disabled: deleteEntry.isPending,\n                                children: \"Close\"\n                            }, void 0, false, {\n                                fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                                lineNumber: 159,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                        lineNumber: 152,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n                lineNumber: 127,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n            lineNumber: 126,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/brimigs/Documents/solana/solana-journal/web/components/journal/journal-ui.tsx\",\n        lineNumber: 125,\n        columnNumber: 5\n    }, this);\n}\n_s2(JournalCard, \"lAhYvHA8Qo+ekjSNQYAOWSurzEI=\", false, function() {\n    return [\n        _journal_data_access__WEBPACK_IMPORTED_MODULE_3__.useJournalProgramAccount,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useWallet\n    ];\n});\n_c2 = JournalCard;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"JournalCreate\");\n$RefreshReg$(_c1, \"JournalList\");\n$RefreshReg$(_c2, \"JournalCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9qb3VybmFsL2pvdXJuYWwtdWkudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBR0EsbUNBQW1DO0FBQ1M7QUFDUztBQUl0QjtBQUMwQjtBQUV4QjtBQUUxQixTQUFTTTs7SUFDZCxNQUFNLEVBQUVDLFlBQVcsRUFBRSxHQUFHTCx1RUFBaUJBO0lBQ3pDLE1BQU0sRUFBRU0sVUFBUyxFQUFFLEdBQUdKLHVFQUFTQTtJQUMvQixNQUFNLENBQUNLLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1RLGNBQWNKLE1BQU1LLFdBQVcsTUFBTUgsUUFBUUcsV0FBVztJQUU5RCxNQUFNQyxlQUFlO1FBQ25CLElBQUlQLGFBQWFLLGFBQWE7WUFDNUJOLFlBQVlTLFlBQVk7Z0JBQUVQO2dCQUFPRTtnQkFBU00sT0FBT1Q7WUFBVTtRQUM3RDtJQUNGO0lBRUEsSUFBSSxDQUFDQSxXQUFVO1FBQ2IscUJBQU8sOERBQUNVO3NCQUFFOzs7Ozs7SUFDWjtJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDO2dCQUNDQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaQyxPQUFPZDtnQkFDUGUsVUFBVSxDQUFDQyxJQUFNZixTQUFTZSxFQUFFQyxPQUFPSDtnQkFDbkNJLFdBQVU7Ozs7OzswQkFFWiw4REFBQ0M7Z0JBQ0NOLGFBQVk7Z0JBQ1pDLE9BQU9aO2dCQUNQYSxVQUFVLENBQUNDLElBQU1iLFdBQVdhLEVBQUVDLE9BQU9IO2dCQUNyQ0ksV0FBVTs7Ozs7OzBCQUVaLDhEQUFDRTs7Ozs7MEJBQ0QsOERBQUNDO2dCQUNDSCxXQUFVO2dCQUNWSSxTQUFTaEI7Z0JBQ1RpQixVQUFVekIsWUFBWTBCLGFBQWEsQ0FBQ3BCOztvQkFDckM7b0JBQ3VCTixZQUFZMEIsYUFBYTs7Ozs7Ozs7Ozs7OztBQUl2RDtHQTNDZ0IzQjs7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Q3VCa0MsWUFBWWQsYUFBYTs7Ozs7Ozs7Ozs7OztrQ0FHbkQsOERBQUNkO3dCQUFJUSxXQUFVOzswQ0FDYiw4REFBQ1Q7MENBQ0MsNEVBQUNqQiw2REFBWUE7b0NBQ1hpRCxNQUFNLFdBQW1CLE9BQVJSO29DQUNqQlMsT0FBT25ELHdEQUFTQSxDQUFDMEMsUUFBUUU7Ozs7Ozs7Ozs7OzBDQUc3Qiw4REFBQ2Q7Z0NBQ0NILFdBQVU7Z0NBQ1ZJLFNBQVM7d0NBUXdCZTtvQ0FQL0IsSUFDRSxDQUFDTSxPQUFPQyxRQUNOLGlEQUVGO3dDQUNBO29DQUNGO29DQUNBLE9BQU9MLFlBQVloQyxZQUFZOEIsQ0FBQUEscUJBQUFBLGFBQWFQLGtCQUFiTyxnQ0FBQUEsS0FBQUEsSUFBQUEsbUJBQW1CckM7Z0NBQ3BEO2dDQUNBdUIsVUFBVWdCLFlBQVlmOzBDQUN2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiO0lBaEZTVTs7UUFLSHhDLDBFQUF3QkE7UUFDTkMsbUVBQVNBOzs7TUFOeEJ1QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2pvdXJuYWwvam91cm5hbC11aS50c3g/ZTU3NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IEtleXBhaXIsIFB1YmxpY0tleSB9IGZyb20gJ0Bzb2xhbmEvd2ViMy5qcyc7XG4vLyBpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZWxsaXBzaWZ5IH0gZnJvbSAnLi4vdWkvdWktbGF5b3V0JztcbmltcG9ydCB7IEV4cGxvcmVyTGluayB9IGZyb20gJy4uL2NsdXN0ZXIvY2x1c3Rlci11aSc7XG5pbXBvcnQge1xuICB1c2VKb3VybmFsUHJvZ3JhbSxcbiAgdXNlSm91cm5hbFByb2dyYW1BY2NvdW50LFxufSBmcm9tICcuL2pvdXJuYWwtZGF0YS1hY2Nlc3MnO1xuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdCc7XG5pbXBvcnQgeyBwdWJsaWNLZXkgfSBmcm9tICdAY29yYWwteHl6L2FuY2hvci9kaXN0L2Nqcy91dGlscyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIEpvdXJuYWxDcmVhdGUoKSB7XG4gIGNvbnN0IHsgY3JlYXRlRW50cnkgfSA9IHVzZUpvdXJuYWxQcm9ncmFtKCk7XG4gIGNvbnN0IHsgcHVibGljS2V5IH0gPSB1c2VXYWxsZXQoKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBpc0Zvcm1WYWxpZCA9IHRpdGxlLnRyaW0oKSAhPT0gJycgJiYgbWVzc2FnZS50cmltKCkgIT09ICcnO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICBpZiAocHVibGljS2V5ICYmIGlzRm9ybVZhbGlkKSB7XG4gICAgICBjcmVhdGVFbnRyeS5tdXRhdGVBc3luYyh7IHRpdGxlLCBtZXNzYWdlLCBvd25lcjogcHVibGljS2V5IH0pO1xuICAgIH1cbiAgfTtcblxuICBpZiAoIXB1YmxpY0tleSl7XG4gICAgcmV0dXJuIDxwPkNvbm5lY3QgeW91ciB3YWxsZXQ8L3A+XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcbiAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaW5wdXQtYm9yZGVyZWQgdy1mdWxsIG1heC13LXhzXCJcbiAgICAgIC8+XG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcbiAgICAgICAgdmFsdWU9e21lc3NhZ2V9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIGNsYXNzTmFtZT1cInRleHRhcmVhIHRleHRhcmVhLWJvcmRlcmVkIHctZnVsbCBtYXgtdy14c1wiXG4gICAgICAvPlxuICAgICAgPGJyPjwvYnI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4teHMgbGc6YnRuLW1kIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgICBkaXNhYmxlZD17Y3JlYXRlRW50cnkuaXNQZW5kaW5nIHx8ICFpc0Zvcm1WYWxpZH1cbiAgICAgID5cbiAgICAgICAgQ3JlYXRlIEpvdXJuYWwgRW50cnkge2NyZWF0ZUVudHJ5LmlzUGVuZGluZyAmJiAnLi4uJ31cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBKb3VybmFsTGlzdCgpIHtcbiAgY29uc3QgeyBhY2NvdW50cywgZ2V0UHJvZ3JhbUFjY291bnQgfSA9IHVzZUpvdXJuYWxQcm9ncmFtKCk7XG5cbiAgaWYgKGdldFByb2dyYW1BY2NvdW50LmlzTG9hZGluZykge1xuICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxvYWRpbmctc3Bpbm5lciBsb2FkaW5nLWxnXCI+PC9zcGFuPjtcbiAgfVxuICBpZiAoIWdldFByb2dyYW1BY2NvdW50LmRhdGE/LnZhbHVlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBhbGVydCBhbGVydC1pbmZvXCI+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIFByb2dyYW0gYWNjb3VudCBub3QgZm91bmQuIE1ha2Ugc3VyZSB5b3UgaGF2ZSBkZXBsb3llZCB0aGUgcHJvZ3JhbSBhbmRcbiAgICAgICAgICBhcmUgb24gdGhlIGNvcnJlY3QgY2x1c3Rlci5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXsnc3BhY2UteS02J30+XG4gICAgICB7YWNjb3VudHMuaXNMb2FkaW5nID8gKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2FkaW5nIGxvYWRpbmctc3Bpbm5lciBsb2FkaW5nLWxnXCI+PC9zcGFuPlxuICAgICAgKSA6IGFjY291bnRzLmRhdGE/Lmxlbmd0aCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC00IG1kOmdyaWQtY29scy0yXCI+XG4gICAgICAgICAge2FjY291bnRzLmRhdGE/Lm1hcCgoYWNjb3VudCkgPT4gKFxuICAgICAgICAgICAgPEpvdXJuYWxDYXJkXG4gICAgICAgICAgICAgIGtleT17YWNjb3VudC5wdWJsaWNLZXkudG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgYWNjb3VudD17YWNjb3VudC5wdWJsaWNLZXl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXsndGV4dC0yeGwnfT5ObyBhY2NvdW50czwvaDI+XG4gICAgICAgICAgTm8gYWNjb3VudHMgZm91bmQuIENyZWF0ZSBvbmUgYWJvdmUgdG8gZ2V0IHN0YXJ0ZWQuXG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gSm91cm5hbENhcmQoeyBhY2NvdW50IH06IHsgYWNjb3VudDogUHVibGljS2V5IH0pIHtcbiAgY29uc3Qge1xuICAgIGFjY291bnRRdWVyeSxcbiAgICB1cGRhdGVFbnRyeSwgXG4gICAgZGVsZXRlRW50cnlcbiAgfSA9IHVzZUpvdXJuYWxQcm9ncmFtQWNjb3VudCh7IGFjY291bnQgfSk7XG4gIGNvbnN0IHsgcHVibGljS2V5IH0gPSB1c2VXYWxsZXQoKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCB0aXRsZSA9IGFjY291bnRRdWVyeS5kYXRhPy50aXRsZTsgXG5cbiAgY29uc3QgaXNGb3JtVmFsaWQgPSBtZXNzYWdlLnRyaW0oKSAhPT0gJyc7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgIGlmIChwdWJsaWNLZXkgJiYgaXNGb3JtVmFsaWQpIHtcbiAgICAgIHVwZGF0ZUVudHJ5Lm11dGF0ZUFzeW5jKHsgdGl0bGUsIG1lc3NhZ2UsIG93bmVyOiBwdWJsaWNLZXkgfSk7XG4gICAgfVxuICB9O1xuXG4gIGlmICghcHVibGljS2V5KXtcbiAgICByZXR1cm4gPHA+Q29ubmVjdCB5b3VyIHdhbGxldDwvcD5cbiAgfVxuXG4gIHJldHVybiBhY2NvdW50UXVlcnkuaXNMb2FkaW5nID8gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvYWRpbmcgbG9hZGluZy1zcGlubmVyIGxvYWRpbmctbGdcIj48L3NwYW4+XG4gICkgOiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm9yZGVyZWQgYm9yZGVyLWJhc2UtMzAwIGJvcmRlci00IHRleHQtbmV1dHJhbC1jb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgICAgICA8aDJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtdGl0bGUganVzdGlmeS1jZW50ZXIgdGV4dC0zeGwgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWNjb3VudFF1ZXJ5LnJlZmV0Y2goKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWNjb3VudFF1ZXJ5LmRhdGE/LnRpdGxlfVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHA+IFxuICAgICAgICAgIHthY2NvdW50UXVlcnkuZGF0YT8ubWVzc2FnZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvbnMganVzdGlmeS1hcm91bmRcIj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVwZGF0ZSBtZXNzYWdlIGhlcmVcIlxuICAgICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dGFyZWEgdGV4dGFyZWEtYm9yZGVyZWQgdy1mdWxsIG1heC13LXhzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4teHMgbGc6YnRuLW1kIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17dXBkYXRlRW50cnkuaXNQZW5kaW5nIHx8ICFpc0Zvcm1WYWxpZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVXBkYXRlIEpvdXJuYWwgRW50cnkge3VwZGF0ZUVudHJ5LmlzUGVuZGluZyAmJiAnLi4uJ31cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgc3BhY2UteS00XCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPEV4cGxvcmVyTGlua1xuICAgICAgICAgICAgICAgIHBhdGg9e2BhY2NvdW50LyR7YWNjb3VudH1gfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtlbGxpcHNpZnkoYWNjb3VudC50b1N0cmluZygpKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi14cyBidG4tc2Vjb25kYXJ5IGJ0bi1vdXRsaW5lXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICF3aW5kb3cuY29uZmlybShcbiAgICAgICAgICAgICAgICAgICAgJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjbG9zZSB0aGlzIGFjY291bnQ/J1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZGVsZXRlRW50cnkubXV0YXRlQXN5bmMoYWNjb3VudFF1ZXJ5LmRhdGE/LnRpdGxlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2RlbGV0ZUVudHJ5LmlzUGVuZGluZ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImVsbGlwc2lmeSIsIkV4cGxvcmVyTGluayIsInVzZUpvdXJuYWxQcm9ncmFtIiwidXNlSm91cm5hbFByb2dyYW1BY2NvdW50IiwidXNlV2FsbGV0IiwidXNlU3RhdGUiLCJKb3VybmFsQ3JlYXRlIiwiY3JlYXRlRW50cnkiLCJwdWJsaWNLZXkiLCJ0aXRsZSIsInNldFRpdGxlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJpc0Zvcm1WYWxpZCIsInRyaW0iLCJoYW5kbGVTdWJtaXQiLCJtdXRhdGVBc3luYyIsIm93bmVyIiwicCIsImRpdiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJ0ZXh0YXJlYSIsImJyIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwiaXNQZW5kaW5nIiwiSm91cm5hbExpc3QiLCJnZXRQcm9ncmFtQWNjb3VudCIsImFjY291bnRzIiwiaXNMb2FkaW5nIiwic3BhbiIsImRhdGEiLCJsZW5ndGgiLCJtYXAiLCJhY2NvdW50IiwiSm91cm5hbENhcmQiLCJ0b1N0cmluZyIsImgyIiwiYWNjb3VudFF1ZXJ5IiwidXBkYXRlRW50cnkiLCJkZWxldGVFbnRyeSIsInJlZmV0Y2giLCJwYXRoIiwibGFiZWwiLCJ3aW5kb3ciLCJjb25maXJtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/journal/journal-ui.tsx\n"));

/***/ })

});