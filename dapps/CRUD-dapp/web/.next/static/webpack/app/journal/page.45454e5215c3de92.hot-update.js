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

/***/ "(app-client)/./components/journal/journal-data-access.tsx":
/*!****************************************************!*\
  !*** ./components/journal/journal-data-access.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useJournalProgram\": function() { return /* binding */ useJournalProgram; },\n/* harmony export */   \"useJournalProgramAccount\": function() { return /* binding */ useJournalProgramAccount; }\n/* harmony export */ });\n/* harmony import */ var _journal_anchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @journal/anchor */ \"(app-client)/../anchor/src/index.ts\");\n/* harmony import */ var _coral_xyz_anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coral-xyz/anchor */ \"(app-client)/../node_modules/@coral-xyz/anchor/dist/browser/index.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-client)/../node_modules/@solana/wallet-adapter-react/lib/esm/useConnection.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/web3.js */ \"(app-client)/../node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-client)/../node_modules/@tanstack/react-query/build/modern/useQuery.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-client)/../node_modules/@tanstack/react-query/build/modern/useMutation.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"(app-client)/../node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _cluster_cluster_data_access__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cluster/cluster-data-access */ \"(app-client)/./components/cluster/cluster-data-access.tsx\");\n/* harmony import */ var _solana_solana_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../solana/solana-provider */ \"(app-client)/./components/solana/solana-provider.tsx\");\n/* harmony import */ var _ui_ui_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/ui-layout */ \"(app-client)/./components/ui/ui-layout.tsx\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"(app-client)/../node_modules/buffer/index.js\")[\"Buffer\"];\n/* __next_internal_client_entry_do_not_use__ useJournalProgram,useJournalProgramAccount auto */ var _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction useJournalProgram() {\n    _s();\n    const { connection  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useConnection)();\n    const { cluster  } = (0,_cluster_cluster_data_access__WEBPACK_IMPORTED_MODULE_4__.useCluster)();\n    const transactionToast = (0,_ui_ui_layout__WEBPACK_IMPORTED_MODULE_6__.useTransactionToast)();\n    const provider = (0,_solana_solana_provider__WEBPACK_IMPORTED_MODULE_5__.useAnchorProvider)();\n    const programId = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.PublicKey(\"8sddtWW1q7fwzspAfZj4zNpeQjpvmD3EeCCEfnc3JnuP\");\n    const program = new _coral_xyz_anchor__WEBPACK_IMPORTED_MODULE_1__.Program(_journal_anchor__WEBPACK_IMPORTED_MODULE_0__.JournalIDL, programId, provider);\n    const accounts = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery)({\n        queryKey: [\n            \"journal\",\n            \"all\",\n            {\n                cluster\n            }\n        ],\n        queryFn: ()=>program.account.journalEntryState.all()\n    });\n    const getProgramAccount = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery)({\n        queryKey: [\n            \"get-program-account\",\n            {\n                cluster\n            }\n        ],\n        queryFn: ()=>connection.getParsedAccountInfo(programId)\n    });\n    const createEntry = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__.useMutation)({\n        mutationKey: [\n            \"journalEntry\",\n            \"create\",\n            {\n                cluster\n            }\n        ],\n        mutationFn: async (param)=>{\n            let { title , message , owner  } = param;\n            const [journalEntryAddress] = await _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.PublicKey.findProgramAddress([\n                Buffer.from(title),\n                owner.toBuffer()\n            ], programId);\n            return program.methods.createJournalEntry(title, message).accounts({\n                journalEntry: journalEntryAddress\n            }).rpc();\n        },\n        onSuccess: (signature)=>{\n            transactionToast(signature);\n            accounts.refetch();\n        },\n        onError: ()=>{\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Failed to create journal entry\");\n        }\n    });\n    return {\n        program,\n        programId,\n        accounts,\n        getProgramAccount,\n        createEntry\n    };\n}\n_s(useJournalProgram, \"ZZmszOj8/8+aAGQxSBnO2O6a8ig=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useConnection,\n        _cluster_cluster_data_access__WEBPACK_IMPORTED_MODULE_4__.useCluster,\n        _ui_ui_layout__WEBPACK_IMPORTED_MODULE_6__.useTransactionToast,\n        _solana_solana_provider__WEBPACK_IMPORTED_MODULE_5__.useAnchorProvider,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__.useMutation\n    ];\n});\nfunction useJournalProgramAccount(param) {\n    let { account  } = param;\n    _s1();\n    const { cluster  } = (0,_cluster_cluster_data_access__WEBPACK_IMPORTED_MODULE_4__.useCluster)();\n    const transactionToast = (0,_ui_ui_layout__WEBPACK_IMPORTED_MODULE_6__.useTransactionToast)();\n    const { program , accounts  } = useJournalProgram();\n    const programId = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.PublicKey(\"8sddtWW1q7fwzspAfZj4zNpeQjpvmD3EeCCEfnc3JnuP\");\n    const title = \"My Journal Title\";\n    const message = \"This is my journal entry message.\";\n    const accountQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery)({\n        queryKey: [\n            \"journal\",\n            \"fetch\",\n            {\n                cluster,\n                account\n            }\n        ],\n        queryFn: ()=>program.account.journalEntryState.fetch(account)\n    });\n    const updateEntry = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__.useMutation)({\n        mutationKey: [\n            \"journal\",\n            \"updateEntry\",\n            {\n                cluster,\n                account\n            }\n        ],\n        mutationFn: (owner)=>program.methods.updateJournalEntry(title, message).accounts({\n                journalEntry: _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.PublicKey.findProgramAddressSync([\n                    Buffer.from(title),\n                    owner.toBuffer()\n                ], programId)[0]\n            }).rpc(),\n        onSuccess: (tx)=>{\n            transactionToast(tx);\n            return accounts.refetch();\n        }\n    });\n    const deleteEntry = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__.useMutation)({\n        mutationKey: [\n            \"journal\",\n            \"deleteEntry\",\n            {\n                cluster,\n                account\n            }\n        ],\n        mutationFn: ()=>program.methods.deleteJournalEntry(title).accounts({\n                journalEntry: account\n            }).rpc(),\n        onSuccess: (tx)=>{\n            transactionToast(tx);\n            return accounts.refetch();\n        }\n    });\n    return {\n        accountQuery,\n        updateEntry,\n        deleteEntry\n    };\n}\n_s1(useJournalProgramAccount, \"5BX5x9O+EEx9eGgwNi3rAGTY40E=\", false, function() {\n    return [\n        _cluster_cluster_data_access__WEBPACK_IMPORTED_MODULE_4__.useCluster,\n        _ui_ui_layout__WEBPACK_IMPORTED_MODULE_6__.useTransactionToast,\n        useJournalProgram,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__.useMutation,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__.useMutation\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9qb3VybmFsL2pvdXJuYWwtZGF0YS1hY2Nlc3MudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTZDO0FBQ0Q7QUFDaUI7QUFDakI7QUFDa0I7QUFDMUI7QUFDd0I7QUFDRTtBQUNSO0FBUS9DLFNBQVNVOztJQUNkLE1BQU0sRUFBRUMsV0FBVSxFQUFFLEdBQUdULDJFQUFhQTtJQUNwQyxNQUFNLEVBQUVVLFFBQU8sRUFBRSxHQUFHTCx3RUFBVUE7SUFDOUIsTUFBTU0sbUJBQW1CSixrRUFBbUJBO0lBQzVDLE1BQU1LLFdBQVdOLDBFQUFpQkE7SUFDbEMsTUFBTU8sWUFBWSxJQUFJWixzREFBU0EsQ0FBQztJQUNoQyxNQUFNYSxVQUFVLElBQUlmLHNEQUFPQSxDQUFDRCx1REFBVUEsRUFBRWUsV0FBV0Q7SUFFbkQsTUFBTUcsV0FBV1osK0RBQVFBLENBQUM7UUFDeEJhLFVBQVU7WUFBQztZQUFXO1lBQU87Z0JBQUVOO1lBQVE7U0FBRTtRQUN6Q08sU0FBUyxJQUFNSCxRQUFRSSxRQUFRQyxrQkFBa0JDO0lBQ25EO0lBRUEsTUFBTUMsb0JBQW9CbEIsK0RBQVFBLENBQUM7UUFDakNhLFVBQVU7WUFBQztZQUF1QjtnQkFBRU47WUFBUTtTQUFFO1FBQzlDTyxTQUFTLElBQU1SLFdBQVdhLHFCQUFxQlQ7SUFDakQ7SUFFQSxNQUFNVSxjQUFjckIsa0VBQVdBLENBQStCO1FBQzVEc0IsYUFBYTtZQUFDO1lBQWdCO1lBQVU7Z0JBQUVkO1lBQVE7U0FBRTtRQUNwRGUsWUFBWTtnQkFBTyxFQUFFQyxNQUFLLEVBQUVDLFFBQU8sRUFBRUMsTUFBSyxFQUFFO1lBQzFDLE1BQU0sQ0FBQ0Msb0JBQW9CLEdBQUcsTUFBTTVCLHlFQUE0QjZCLENBQzlEO2dCQUFDQyxNQUFNQSxDQUFDQyxLQUFLTjtnQkFBUUUsTUFBTUs7YUFBVyxFQUN0Q3BCO1lBR0YsT0FBT0MsUUFBUW9CLFFBQ1pDLG1CQUFtQlQsT0FBT0MsU0FDMUJaLFNBQVM7Z0JBQ1JxQixjQUFjUDtZQUNoQixHQUNDUTtRQUNMO1FBQ0FDLFdBQVcsQ0FBQ0M7WUFDVjVCLGlCQUFpQjRCO1lBQ2pCeEIsU0FBU3lCO1FBQ1g7UUFDQUMsU0FBUztZQUNQckMsNkRBQVdzQyxDQUFDO1FBQ2Q7SUFDRjtJQUVBLE9BQU87UUFDTDVCO1FBQ0FEO1FBQ0FFO1FBQ0FNO1FBQ0FFO0lBQ0Y7QUFDRjtHQWpEZ0JmOztRQUNTUix1RUFBYUE7UUFDaEJLLG9FQUFVQTtRQUNMRSw4REFBbUJBO1FBQzNCRCxzRUFBaUJBO1FBSWpCSCwyREFBUUE7UUFLQ0EsMkRBQVFBO1FBS2RELDhEQUFXQTs7O0FBaUMxQixTQUFTeUMseUJBQXlCLEtBQW1DO1FBQW5DLEVBQUV6QixRQUFPLEVBQTBCLEdBQW5DOztJQUN2QyxNQUFNLEVBQUVSLFFBQU8sRUFBRSxHQUFHTCx3RUFBVUE7SUFDOUIsTUFBTU0sbUJBQW1CSixrRUFBbUJBO0lBQzVDLE1BQU0sRUFBRU8sUUFBTyxFQUFFQyxTQUFRLEVBQUUsR0FBR1A7SUFDOUIsTUFBTUssWUFBWSxJQUFJWixzREFBU0EsQ0FBQztJQUVoQyxNQUFNeUIsUUFBUTtJQUNkLE1BQU1DLFVBQVU7SUFFaEIsTUFBTWlCLGVBQWV6QywrREFBUUEsQ0FBQztRQUM1QmEsVUFBVTtZQUFDO1lBQVc7WUFBUztnQkFBRU47Z0JBQVNRO1lBQVE7U0FBRTtRQUNwREQsU0FBUyxJQUFNSCxRQUFRSSxRQUFRQyxrQkFBa0IwQixNQUFNM0I7SUFDekQ7SUFFQSxNQUFNNEIsY0FBYzVDLGtFQUFXQSxDQUFDO1FBQzlCc0IsYUFBYTtZQUFDO1lBQVc7WUFBZTtnQkFBRWQ7Z0JBQVNRO1lBQVE7U0FBRTtRQUM3RE8sWUFBWSxDQUFDRyxRQUNYZCxRQUFRb0IsUUFBUWEsbUJBQW1CckIsT0FBT0MsU0FBU1osU0FBUztnQkFDMURxQixjQUFjbkMsNkVBQWdDK0MsQ0FBQztvQkFDN0NqQixNQUFNQSxDQUFDQyxLQUFLTjtvQkFBUUUsTUFBTUs7aUJBQzNCLEVBQUVwQixVQUFVLENBQUMsRUFBRTtZQUNqQixHQUNBd0I7UUFDSEMsV0FBVyxDQUFDVztZQUNWdEMsaUJBQWlCc0M7WUFDakIsT0FBT2xDLFNBQVN5QjtRQUNsQjtJQUNGO0lBRUEsTUFBTVUsY0FBY2hELGtFQUFXQSxDQUFDO1FBQzlCc0IsYUFBYTtZQUFDO1lBQVc7WUFBZTtnQkFBRWQ7Z0JBQVNRO1lBQVE7U0FBRTtRQUM3RE8sWUFBWSxJQUNWWCxRQUFRb0IsUUFBUWlCLG1CQUFtQnpCLE9BQU9YLFNBQVM7Z0JBQUVxQixjQUFjbEI7WUFBUSxHQUFHbUI7UUFDaEZDLFdBQVcsQ0FBQ1c7WUFDVnRDLGlCQUFpQnNDO1lBQ2pCLE9BQU9sQyxTQUFTeUI7UUFDbEI7SUFDRjtJQUVBLE9BQU87UUFDTEk7UUFDQUU7UUFDQUk7SUFDRjtBQUNGO0lBNUNnQlA7O1FBQ010QyxvRUFBVUE7UUFDTEUsOERBQW1CQTtRQUNkQztRQU1UTCwyREFBUUE7UUFLVEQsOERBQVdBO1FBZVhBLDhEQUFXQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2pvdXJuYWwvam91cm5hbC1kYXRhLWFjY2Vzcy50c3g/YzZiMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IEpvdXJuYWxJREwgfSBmcm9tICdAam91cm5hbC9hbmNob3InO1xuaW1wb3J0IHsgUHJvZ3JhbSB9IGZyb20gJ0Bjb3JhbC14eXovYW5jaG9yJztcbmltcG9ydCB7IHVzZUNvbm5lY3Rpb24gfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0JztcbmltcG9ydCB7IFB1YmxpY0tleSB9IGZyb20gJ0Bzb2xhbmEvd2ViMy5qcyc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xuaW1wb3J0IHRvYXN0IGZyb20gJ3JlYWN0LWhvdC10b2FzdCc7XG5pbXBvcnQgeyB1c2VDbHVzdGVyIH0gZnJvbSAnLi4vY2x1c3Rlci9jbHVzdGVyLWRhdGEtYWNjZXNzJztcbmltcG9ydCB7IHVzZUFuY2hvclByb3ZpZGVyIH0gZnJvbSAnLi4vc29sYW5hL3NvbGFuYS1wcm92aWRlcic7XG5pbXBvcnQgeyB1c2VUcmFuc2FjdGlvblRvYXN0IH0gZnJvbSAnLi4vdWkvdWktbGF5b3V0JztcblxuaW50ZXJmYWNlIENyZWF0ZUVudHJ5QXJncyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgb3duZXI6IFB1YmxpY0tleTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUpvdXJuYWxQcm9ncmFtKCkge1xuICBjb25zdCB7IGNvbm5lY3Rpb24gfSA9IHVzZUNvbm5lY3Rpb24oKTtcbiAgY29uc3QgeyBjbHVzdGVyIH0gPSB1c2VDbHVzdGVyKCk7XG4gIGNvbnN0IHRyYW5zYWN0aW9uVG9hc3QgPSB1c2VUcmFuc2FjdGlvblRvYXN0KCk7XG4gIGNvbnN0IHByb3ZpZGVyID0gdXNlQW5jaG9yUHJvdmlkZXIoKTtcbiAgY29uc3QgcHJvZ3JhbUlkID0gbmV3IFB1YmxpY0tleShcIjhzZGR0V1cxcTdmd3pzcEFmWmo0ek5wZVFqcHZtRDNFZUNDRWZuYzNKbnVQXCIpO1xuICBjb25zdCBwcm9ncmFtID0gbmV3IFByb2dyYW0oSm91cm5hbElETCwgcHJvZ3JhbUlkLCBwcm92aWRlcik7XG5cbiAgY29uc3QgYWNjb3VudHMgPSB1c2VRdWVyeSh7XG4gICAgcXVlcnlLZXk6IFsnam91cm5hbCcsICdhbGwnLCB7IGNsdXN0ZXIgfV0sXG4gICAgcXVlcnlGbjogKCkgPT4gcHJvZ3JhbS5hY2NvdW50LmpvdXJuYWxFbnRyeVN0YXRlLmFsbCgpLFxuICB9KTtcblxuICBjb25zdCBnZXRQcm9ncmFtQWNjb3VudCA9IHVzZVF1ZXJ5KHtcbiAgICBxdWVyeUtleTogWydnZXQtcHJvZ3JhbS1hY2NvdW50JywgeyBjbHVzdGVyIH1dLFxuICAgIHF1ZXJ5Rm46ICgpID0+IGNvbm5lY3Rpb24uZ2V0UGFyc2VkQWNjb3VudEluZm8ocHJvZ3JhbUlkKSxcbiAgfSk7XG5cbiAgY29uc3QgY3JlYXRlRW50cnkgPSB1c2VNdXRhdGlvbjx2b2lkLCBFcnJvciwgQ3JlYXRlRW50cnlBcmdzPih7XG4gICAgbXV0YXRpb25LZXk6IFsnam91cm5hbEVudHJ5JywgJ2NyZWF0ZScsIHsgY2x1c3RlciB9XSxcbiAgICBtdXRhdGlvbkZuOiBhc3luYyAoeyB0aXRsZSwgbWVzc2FnZSwgb3duZXIgfSkgPT4ge1xuICAgICAgY29uc3QgW2pvdXJuYWxFbnRyeUFkZHJlc3NdID0gYXdhaXQgUHVibGljS2V5LmZpbmRQcm9ncmFtQWRkcmVzcyhcbiAgICAgICAgW0J1ZmZlci5mcm9tKHRpdGxlKSwgb3duZXIudG9CdWZmZXIoKV0sXG4gICAgICAgIHByb2dyYW1JZFxuICAgICAgKTtcbiAgXG4gICAgICByZXR1cm4gcHJvZ3JhbS5tZXRob2RzXG4gICAgICAgIC5jcmVhdGVKb3VybmFsRW50cnkodGl0bGUsIG1lc3NhZ2UpXG4gICAgICAgIC5hY2NvdW50cyh7XG4gICAgICAgICAgam91cm5hbEVudHJ5OiBqb3VybmFsRW50cnlBZGRyZXNzLFxuICAgICAgICB9KVxuICAgICAgICAucnBjKCk7XG4gICAgfSxcbiAgICBvblN1Y2Nlc3M6IChzaWduYXR1cmUpID0+IHtcbiAgICAgIHRyYW5zYWN0aW9uVG9hc3Qoc2lnbmF0dXJlKTtcbiAgICAgIGFjY291bnRzLnJlZmV0Y2goKTtcbiAgICB9LFxuICAgIG9uRXJyb3I6ICgpID0+IHtcbiAgICAgIHRvYXN0LmVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIGpvdXJuYWwgZW50cnknKTtcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHByb2dyYW0sXG4gICAgcHJvZ3JhbUlkLFxuICAgIGFjY291bnRzLFxuICAgIGdldFByb2dyYW1BY2NvdW50LFxuICAgIGNyZWF0ZUVudHJ5LFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlSm91cm5hbFByb2dyYW1BY2NvdW50KHsgYWNjb3VudCB9OiB7IGFjY291bnQ6IFB1YmxpY0tleSB9KSB7XG4gIGNvbnN0IHsgY2x1c3RlciB9ID0gdXNlQ2x1c3RlcigpO1xuICBjb25zdCB0cmFuc2FjdGlvblRvYXN0ID0gdXNlVHJhbnNhY3Rpb25Ub2FzdCgpO1xuICBjb25zdCB7IHByb2dyYW0sIGFjY291bnRzIH0gPSB1c2VKb3VybmFsUHJvZ3JhbSgpO1xuICBjb25zdCBwcm9ncmFtSWQgPSBuZXcgUHVibGljS2V5KFwiOHNkZHRXVzFxN2Z3enNwQWZaajR6TnBlUWpwdm1EM0VlQ0NFZm5jM0pudVBcIik7XG5cbiAgY29uc3QgdGl0bGUgPSBcIk15IEpvdXJuYWwgVGl0bGVcIjtcbiAgY29uc3QgbWVzc2FnZSA9IFwiVGhpcyBpcyBteSBqb3VybmFsIGVudHJ5IG1lc3NhZ2UuXCI7XG5cbiAgY29uc3QgYWNjb3VudFF1ZXJ5ID0gdXNlUXVlcnkoe1xuICAgIHF1ZXJ5S2V5OiBbJ2pvdXJuYWwnLCAnZmV0Y2gnLCB7IGNsdXN0ZXIsIGFjY291bnQgfV0sXG4gICAgcXVlcnlGbjogKCkgPT4gcHJvZ3JhbS5hY2NvdW50LmpvdXJuYWxFbnRyeVN0YXRlLmZldGNoKGFjY291bnQpLFxuICB9KTtcblxuICBjb25zdCB1cGRhdGVFbnRyeSA9IHVzZU11dGF0aW9uKHtcbiAgICBtdXRhdGlvbktleTogWydqb3VybmFsJywgJ3VwZGF0ZUVudHJ5JywgeyBjbHVzdGVyLCBhY2NvdW50IH1dLFxuICAgIG11dGF0aW9uRm46IChvd25lcjogUHVibGljS2V5KSA9PlxuICAgICAgcHJvZ3JhbS5tZXRob2RzLnVwZGF0ZUpvdXJuYWxFbnRyeSh0aXRsZSwgbWVzc2FnZSkuYWNjb3VudHMoeyBcbiAgICAgICAgam91cm5hbEVudHJ5OiBQdWJsaWNLZXkuZmluZFByb2dyYW1BZGRyZXNzU3luYyhbXG4gICAgICAgICAgQnVmZmVyLmZyb20odGl0bGUpLCBvd25lci50b0J1ZmZlcigpXG4gICAgICAgIF0sIHByb2dyYW1JZClbMF1cbiAgICAgICB9KVxuICAgICAgLnJwYygpLFxuICAgIG9uU3VjY2VzczogKHR4KSA9PiB7XG4gICAgICB0cmFuc2FjdGlvblRvYXN0KHR4KTtcbiAgICAgIHJldHVybiBhY2NvdW50cy5yZWZldGNoKCk7XG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgZGVsZXRlRW50cnkgPSB1c2VNdXRhdGlvbih7XG4gICAgbXV0YXRpb25LZXk6IFsnam91cm5hbCcsICdkZWxldGVFbnRyeScsIHsgY2x1c3RlciwgYWNjb3VudCB9XSxcbiAgICBtdXRhdGlvbkZuOiAoKSA9PlxuICAgICAgcHJvZ3JhbS5tZXRob2RzLmRlbGV0ZUpvdXJuYWxFbnRyeSh0aXRsZSkuYWNjb3VudHMoeyBqb3VybmFsRW50cnk6IGFjY291bnQgfSkucnBjKCksXG4gICAgb25TdWNjZXNzOiAodHgpID0+IHtcbiAgICAgIHRyYW5zYWN0aW9uVG9hc3QodHgpO1xuICAgICAgcmV0dXJuIGFjY291bnRzLnJlZmV0Y2goKTtcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGFjY291bnRRdWVyeSxcbiAgICB1cGRhdGVFbnRyeSwgXG4gICAgZGVsZXRlRW50cnlcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJKb3VybmFsSURMIiwiUHJvZ3JhbSIsInVzZUNvbm5lY3Rpb24iLCJQdWJsaWNLZXkiLCJ1c2VNdXRhdGlvbiIsInVzZVF1ZXJ5IiwidG9hc3QiLCJ1c2VDbHVzdGVyIiwidXNlQW5jaG9yUHJvdmlkZXIiLCJ1c2VUcmFuc2FjdGlvblRvYXN0IiwidXNlSm91cm5hbFByb2dyYW0iLCJjb25uZWN0aW9uIiwiY2x1c3RlciIsInRyYW5zYWN0aW9uVG9hc3QiLCJwcm92aWRlciIsInByb2dyYW1JZCIsInByb2dyYW0iLCJhY2NvdW50cyIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsImFjY291bnQiLCJqb3VybmFsRW50cnlTdGF0ZSIsImFsbCIsImdldFByb2dyYW1BY2NvdW50IiwiZ2V0UGFyc2VkQWNjb3VudEluZm8iLCJjcmVhdGVFbnRyeSIsIm11dGF0aW9uS2V5IiwibXV0YXRpb25GbiIsInRpdGxlIiwibWVzc2FnZSIsIm93bmVyIiwiam91cm5hbEVudHJ5QWRkcmVzcyIsImZpbmRQcm9ncmFtQWRkcmVzcyIsIkJ1ZmZlciIsImZyb20iLCJ0b0J1ZmZlciIsIm1ldGhvZHMiLCJjcmVhdGVKb3VybmFsRW50cnkiLCJqb3VybmFsRW50cnkiLCJycGMiLCJvblN1Y2Nlc3MiLCJzaWduYXR1cmUiLCJyZWZldGNoIiwib25FcnJvciIsImVycm9yIiwidXNlSm91cm5hbFByb2dyYW1BY2NvdW50IiwiYWNjb3VudFF1ZXJ5IiwiZmV0Y2giLCJ1cGRhdGVFbnRyeSIsInVwZGF0ZUpvdXJuYWxFbnRyeSIsImZpbmRQcm9ncmFtQWRkcmVzc1N5bmMiLCJ0eCIsImRlbGV0ZUVudHJ5IiwiZGVsZXRlSm91cm5hbEVudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/journal/journal-data-access.tsx\n"));

/***/ })

});