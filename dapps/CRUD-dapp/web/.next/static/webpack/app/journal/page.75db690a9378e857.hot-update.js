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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useJournalProgram\": function() { return /* binding */ useJournalProgram; },\n/* harmony export */   \"useJournalProgramAccount\": function() { return /* binding */ useJournalProgramAccount; }\n/* harmony export */ });\n/* harmony import */ var _journal_anchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @journal/anchor */ \"(app-client)/../anchor/src/index.ts\");\n/* harmony import */ var _coral_xyz_anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coral-xyz/anchor */ \"(app-client)/../node_modules/@coral-xyz/anchor/dist/browser/index.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-client)/../node_modules/@solana/wallet-adapter-react/lib/esm/useConnection.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/web3.js */ \"(app-client)/../node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-client)/../node_modules/@tanstack/react-query/build/modern/useQuery.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-client)/../node_modules/@tanstack/react-query/build/modern/useMutation.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"(app-client)/../node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _cluster_cluster_data_access__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cluster/cluster-data-access */ \"(app-client)/./components/cluster/cluster-data-access.tsx\");\n/* harmony import */ var _solana_solana_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../solana/solana-provider */ \"(app-client)/./components/solana/solana-provider.tsx\");\n/* harmony import */ var _ui_ui_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/ui-layout */ \"(app-client)/./components/ui/ui-layout.tsx\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"(app-client)/../node_modules/buffer/index.js\")[\"Buffer\"];\n/* __next_internal_client_entry_do_not_use__ useJournalProgram,useJournalProgramAccount auto */ var _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction useJournalProgram() {\n    _s();\n    const { connection  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useConnection)();\n    const { cluster  } = (0,_cluster_cluster_data_access__WEBPACK_IMPORTED_MODULE_4__.useCluster)();\n    const transactionToast = (0,_ui_ui_layout__WEBPACK_IMPORTED_MODULE_6__.useTransactionToast)();\n    const provider = (0,_solana_solana_provider__WEBPACK_IMPORTED_MODULE_5__.useAnchorProvider)();\n    const programId = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.PublicKey(\"8sddtWW1q7fwzspAfZj4zNpeQjpvmD3EeCCEfnc3JnuP\");\n    const program = new _coral_xyz_anchor__WEBPACK_IMPORTED_MODULE_1__.Program(_journal_anchor__WEBPACK_IMPORTED_MODULE_0__.JournalIDL, programId, provider);\n    const accounts = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery)({\n        queryKey: [\n            \"journal\",\n            \"all\",\n            {\n                cluster\n            }\n        ],\n        queryFn: ()=>program.account.journalEntryState.all()\n    });\n    const getProgramAccount = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery)({\n        queryKey: [\n            \"get-program-account\",\n            {\n                cluster\n            }\n        ],\n        queryFn: ()=>connection.getParsedAccountInfo(programId)\n    });\n    const createEntry = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__.useMutation)({\n        mutationKey: [\n            \"test\",\n            \"initialize\",\n            {\n                cluster\n            }\n        ],\n        mutationFn: (owner, title, message)=>program.methods.createJournalEntry(title, message).accounts({\n                journalEntry: _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.PublicKey.findProgramAddressSync([\n                    Buffer.from(title),\n                    owner.toBuffer()\n                ], programId)[0]\n            }).rpc(),\n        onSuccess: (signature)=>{\n            transactionToast(signature);\n            return accounts.refetch();\n        },\n        onError: ()=>react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Failed to initialize account\")\n    });\n    return {\n        program,\n        programId,\n        accounts,\n        getProgramAccount,\n        createEntry\n    };\n}\n_s(useJournalProgram, \"ZZmszOj8/8+aAGQxSBnO2O6a8ig=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useConnection,\n        _cluster_cluster_data_access__WEBPACK_IMPORTED_MODULE_4__.useCluster,\n        _ui_ui_layout__WEBPACK_IMPORTED_MODULE_6__.useTransactionToast,\n        _solana_solana_provider__WEBPACK_IMPORTED_MODULE_5__.useAnchorProvider,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__.useMutation\n    ];\n});\nfunction useJournalProgramAccount(param) {\n    let { account  } = param;\n    _s1();\n    const { cluster  } = (0,_cluster_cluster_data_access__WEBPACK_IMPORTED_MODULE_4__.useCluster)();\n    const transactionToast = (0,_ui_ui_layout__WEBPACK_IMPORTED_MODULE_6__.useTransactionToast)();\n    const { program , accounts  } = useJournalProgram();\n    const programId = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.PublicKey(\"8sddtWW1q7fwzspAfZj4zNpeQjpvmD3EeCCEfnc3JnuP\");\n    const title = \"My Journal Title\";\n    const message = \"This is my journal entry message.\";\n    const accountQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery)({\n        queryKey: [\n            \"journal\",\n            \"fetch\",\n            {\n                cluster,\n                account\n            }\n        ],\n        queryFn: ()=>program.account.journalEntryState.fetch(account)\n    });\n    const updateEntry = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__.useMutation)({\n        mutationKey: [\n            \"journal\",\n            \"updateEntry\",\n            {\n                cluster,\n                account\n            }\n        ],\n        mutationFn: (owner)=>program.methods.updateJournalEntry(title, message).accounts({\n                journalEntry: _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.PublicKey.findProgramAddressSync([\n                    Buffer.from(title),\n                    owner.toBuffer()\n                ], programId)[0]\n            }).rpc(),\n        onSuccess: (tx)=>{\n            transactionToast(tx);\n            return accounts.refetch();\n        }\n    });\n    const deleteEntry = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__.useMutation)({\n        mutationKey: [\n            \"journal\",\n            \"deleteEntry\",\n            {\n                cluster,\n                account\n            }\n        ],\n        mutationFn: ()=>program.methods.deleteJournalEntry(title).accounts({\n                journalEntry: account\n            }).rpc(),\n        onSuccess: (tx)=>{\n            transactionToast(tx);\n            return accounts.refetch();\n        }\n    });\n    return {\n        accountQuery,\n        updateEntry,\n        deleteEntry\n    };\n}\n_s1(useJournalProgramAccount, \"5BX5x9O+EEx9eGgwNi3rAGTY40E=\", false, function() {\n    return [\n        _cluster_cluster_data_access__WEBPACK_IMPORTED_MODULE_4__.useCluster,\n        _ui_ui_layout__WEBPACK_IMPORTED_MODULE_6__.useTransactionToast,\n        useJournalProgram,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__.useMutation,\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__.useMutation\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9qb3VybmFsL2pvdXJuYWwtZGF0YS1hY2Nlc3MudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTZDO0FBQ0Q7QUFDaUI7QUFDakI7QUFDa0I7QUFDMUI7QUFDd0I7QUFDRTtBQUNSO0FBRy9DLFNBQVNVOztJQUNkLE1BQU0sRUFBRUMsV0FBVSxFQUFFLEdBQUdULDJFQUFhQTtJQUNwQyxNQUFNLEVBQUVVLFFBQU8sRUFBRSxHQUFHTCx3RUFBVUE7SUFDOUIsTUFBTU0sbUJBQW1CSixrRUFBbUJBO0lBQzVDLE1BQU1LLFdBQVdOLDBFQUFpQkE7SUFDbEMsTUFBTU8sWUFBWSxJQUFJWixzREFBU0EsQ0FBQztJQUNoQyxNQUFNYSxVQUFVLElBQUlmLHNEQUFPQSxDQUFDRCx1REFBVUEsRUFBRWUsV0FBV0Q7SUFFbkQsTUFBTUcsV0FBV1osK0RBQVFBLENBQUM7UUFDeEJhLFVBQVU7WUFBQztZQUFXO1lBQU87Z0JBQUVOO1lBQVE7U0FBRTtRQUN6Q08sU0FBUyxJQUFNSCxRQUFRSSxRQUFRQyxrQkFBa0JDO0lBQ25EO0lBRUEsTUFBTUMsb0JBQW9CbEIsK0RBQVFBLENBQUM7UUFDakNhLFVBQVU7WUFBQztZQUF1QjtnQkFBRU47WUFBUTtTQUFFO1FBQzlDTyxTQUFTLElBQU1SLFdBQVdhLHFCQUFxQlQ7SUFDakQ7SUFFQSxNQUFNVSxjQUFjckIsa0VBQVdBLENBQUM7UUFDOUJzQixhQUFhO1lBQUM7WUFBUTtZQUFjO2dCQUFFZDtZQUFRO1NBQUU7UUFDaERlLFlBQVksQ0FBQ0MsT0FBa0JDLE9BQWVDLFVBQzVDZCxRQUFRZSxRQUNMQyxtQkFBbUJILE9BQU9DLFNBQzFCYixTQUFTO2dCQUNSZ0IsY0FBYzlCLDZFQUFnQytCLENBQUM7b0JBQzdDQyxNQUFNQSxDQUFDQyxLQUFLUDtvQkFBUUQsTUFBTVM7aUJBQzNCLEVBQUV0QixVQUFVLENBQUMsRUFBRTtZQUNqQixHQUNBdUI7UUFDTEMsV0FBVyxDQUFDQztZQUNWM0IsaUJBQWlCMkI7WUFDakIsT0FBT3ZCLFNBQVN3QjtRQUNsQjtRQUNBQyxTQUFTLElBQU1wQyw2REFBV3FDLENBQUM7SUFDN0I7SUFHQSxPQUFPO1FBQ0wzQjtRQUNBRDtRQUNBRTtRQUNBTTtRQUNBRTtJQUNGO0FBQ0Y7R0E1Q2dCZjs7UUFDU1IsdUVBQWFBO1FBQ2hCSyxvRUFBVUE7UUFDTEUsOERBQW1CQTtRQUMzQkQsc0VBQWlCQTtRQUlqQkgsMkRBQVFBO1FBS0NBLDJEQUFRQTtRQUtkRCw4REFBV0E7OztBQTRCMUIsU0FBU3dDLHlCQUF5QixLQUFtQztRQUFuQyxFQUFFeEIsUUFBTyxFQUEwQixHQUFuQzs7SUFDdkMsTUFBTSxFQUFFUixRQUFPLEVBQUUsR0FBR0wsd0VBQVVBO0lBQzlCLE1BQU1NLG1CQUFtQkosa0VBQW1CQTtJQUM1QyxNQUFNLEVBQUVPLFFBQU8sRUFBRUMsU0FBUSxFQUFFLEdBQUdQO0lBQzlCLE1BQU1LLFlBQVksSUFBSVosc0RBQVNBLENBQUM7SUFFaEMsTUFBTTBCLFFBQVE7SUFDZCxNQUFNQyxVQUFVO0lBRWhCLE1BQU1lLGVBQWV4QywrREFBUUEsQ0FBQztRQUM1QmEsVUFBVTtZQUFDO1lBQVc7WUFBUztnQkFBRU47Z0JBQVNRO1lBQVE7U0FBRTtRQUNwREQsU0FBUyxJQUFNSCxRQUFRSSxRQUFRQyxrQkFBa0J5QixNQUFNMUI7SUFDekQ7SUFFQSxNQUFNMkIsY0FBYzNDLGtFQUFXQSxDQUFDO1FBQzlCc0IsYUFBYTtZQUFDO1lBQVc7WUFBZTtnQkFBRWQ7Z0JBQVNRO1lBQVE7U0FBRTtRQUM3RE8sWUFBWSxDQUFDQyxRQUNYWixRQUFRZSxRQUFRaUIsbUJBQW1CbkIsT0FBT0MsU0FBU2IsU0FBUztnQkFDMURnQixjQUFjOUIsNkVBQWdDK0IsQ0FBQztvQkFDN0NDLE1BQU1BLENBQUNDLEtBQUtQO29CQUFRRCxNQUFNUztpQkFDM0IsRUFBRXRCLFVBQVUsQ0FBQyxFQUFFO1lBQ2pCLEdBQ0F1QjtRQUNIQyxXQUFXLENBQUNVO1lBQ1ZwQyxpQkFBaUJvQztZQUNqQixPQUFPaEMsU0FBU3dCO1FBQ2xCO0lBQ0Y7SUFFQSxNQUFNUyxjQUFjOUMsa0VBQVdBLENBQUM7UUFDOUJzQixhQUFhO1lBQUM7WUFBVztZQUFlO2dCQUFFZDtnQkFBU1E7WUFBUTtTQUFFO1FBQzdETyxZQUFZLElBQ1ZYLFFBQVFlLFFBQVFvQixtQkFBbUJ0QixPQUFPWixTQUFTO2dCQUFFZ0IsY0FBY2I7WUFBUSxHQUFHa0I7UUFDaEZDLFdBQVcsQ0FBQ1U7WUFDVnBDLGlCQUFpQm9DO1lBQ2pCLE9BQU9oQyxTQUFTd0I7UUFDbEI7SUFDRjtJQUVBLE9BQU87UUFDTEk7UUFDQUU7UUFDQUc7SUFDRjtBQUNGO0lBNUNnQk47O1FBQ01yQyxvRUFBVUE7UUFDTEUsOERBQW1CQTtRQUNkQztRQU1UTCwyREFBUUE7UUFLVEQsOERBQVdBO1FBZVhBLDhEQUFXQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2pvdXJuYWwvam91cm5hbC1kYXRhLWFjY2Vzcy50c3g/YzZiMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IEpvdXJuYWxJREwgfSBmcm9tICdAam91cm5hbC9hbmNob3InO1xuaW1wb3J0IHsgUHJvZ3JhbSB9IGZyb20gJ0Bjb3JhbC14eXovYW5jaG9yJztcbmltcG9ydCB7IHVzZUNvbm5lY3Rpb24gfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0JztcbmltcG9ydCB7IFB1YmxpY0tleSB9IGZyb20gJ0Bzb2xhbmEvd2ViMy5qcyc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xuaW1wb3J0IHRvYXN0IGZyb20gJ3JlYWN0LWhvdC10b2FzdCc7XG5pbXBvcnQgeyB1c2VDbHVzdGVyIH0gZnJvbSAnLi4vY2x1c3Rlci9jbHVzdGVyLWRhdGEtYWNjZXNzJztcbmltcG9ydCB7IHVzZUFuY2hvclByb3ZpZGVyIH0gZnJvbSAnLi4vc29sYW5hL3NvbGFuYS1wcm92aWRlcic7XG5pbXBvcnQgeyB1c2VUcmFuc2FjdGlvblRvYXN0IH0gZnJvbSAnLi4vdWkvdWktbGF5b3V0JztcblxuXG5leHBvcnQgZnVuY3Rpb24gdXNlSm91cm5hbFByb2dyYW0oKSB7XG4gIGNvbnN0IHsgY29ubmVjdGlvbiB9ID0gdXNlQ29ubmVjdGlvbigpO1xuICBjb25zdCB7IGNsdXN0ZXIgfSA9IHVzZUNsdXN0ZXIoKTtcbiAgY29uc3QgdHJhbnNhY3Rpb25Ub2FzdCA9IHVzZVRyYW5zYWN0aW9uVG9hc3QoKTtcbiAgY29uc3QgcHJvdmlkZXIgPSB1c2VBbmNob3JQcm92aWRlcigpO1xuICBjb25zdCBwcm9ncmFtSWQgPSBuZXcgUHVibGljS2V5KFwiOHNkZHRXVzFxN2Z3enNwQWZaajR6TnBlUWpwdm1EM0VlQ0NFZm5jM0pudVBcIik7XG4gIGNvbnN0IHByb2dyYW0gPSBuZXcgUHJvZ3JhbShKb3VybmFsSURMLCBwcm9ncmFtSWQsIHByb3ZpZGVyKTtcblxuICBjb25zdCBhY2NvdW50cyA9IHVzZVF1ZXJ5KHtcbiAgICBxdWVyeUtleTogWydqb3VybmFsJywgJ2FsbCcsIHsgY2x1c3RlciB9XSxcbiAgICBxdWVyeUZuOiAoKSA9PiBwcm9ncmFtLmFjY291bnQuam91cm5hbEVudHJ5U3RhdGUuYWxsKCksXG4gIH0pO1xuXG4gIGNvbnN0IGdldFByb2dyYW1BY2NvdW50ID0gdXNlUXVlcnkoe1xuICAgIHF1ZXJ5S2V5OiBbJ2dldC1wcm9ncmFtLWFjY291bnQnLCB7IGNsdXN0ZXIgfV0sXG4gICAgcXVlcnlGbjogKCkgPT4gY29ubmVjdGlvbi5nZXRQYXJzZWRBY2NvdW50SW5mbyhwcm9ncmFtSWQpLFxuICB9KTtcblxuICBjb25zdCBjcmVhdGVFbnRyeSA9IHVzZU11dGF0aW9uKHtcbiAgICBtdXRhdGlvbktleTogWyd0ZXN0JywgJ2luaXRpYWxpemUnLCB7IGNsdXN0ZXIgfV0sXG4gICAgbXV0YXRpb25GbjogKG93bmVyOiBQdWJsaWNLZXksIHRpdGxlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykgPT5cbiAgICAgIHByb2dyYW0ubWV0aG9kc1xuICAgICAgICAuY3JlYXRlSm91cm5hbEVudHJ5KHRpdGxlLCBtZXNzYWdlKVxuICAgICAgICAuYWNjb3VudHMoeyBcbiAgICAgICAgICBqb3VybmFsRW50cnk6IFB1YmxpY0tleS5maW5kUHJvZ3JhbUFkZHJlc3NTeW5jKFtcbiAgICAgICAgICAgIEJ1ZmZlci5mcm9tKHRpdGxlKSwgb3duZXIudG9CdWZmZXIoKVxuICAgICAgICAgIF0sIHByb2dyYW1JZClbMF1cbiAgICAgICAgIH0pXG4gICAgICAgIC5ycGMoKSxcbiAgICBvblN1Y2Nlc3M6IChzaWduYXR1cmUpID0+IHtcbiAgICAgIHRyYW5zYWN0aW9uVG9hc3Qoc2lnbmF0dXJlKTtcbiAgICAgIHJldHVybiBhY2NvdW50cy5yZWZldGNoKCk7XG4gICAgfSxcbiAgICBvbkVycm9yOiAoKSA9PiB0b2FzdC5lcnJvcignRmFpbGVkIHRvIGluaXRpYWxpemUgYWNjb3VudCcpLFxuICB9KTtcblxuXG4gIHJldHVybiB7XG4gICAgcHJvZ3JhbSxcbiAgICBwcm9ncmFtSWQsXG4gICAgYWNjb3VudHMsXG4gICAgZ2V0UHJvZ3JhbUFjY291bnQsXG4gICAgY3JlYXRlRW50cnksXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VKb3VybmFsUHJvZ3JhbUFjY291bnQoeyBhY2NvdW50IH06IHsgYWNjb3VudDogUHVibGljS2V5IH0pIHtcbiAgY29uc3QgeyBjbHVzdGVyIH0gPSB1c2VDbHVzdGVyKCk7XG4gIGNvbnN0IHRyYW5zYWN0aW9uVG9hc3QgPSB1c2VUcmFuc2FjdGlvblRvYXN0KCk7XG4gIGNvbnN0IHsgcHJvZ3JhbSwgYWNjb3VudHMgfSA9IHVzZUpvdXJuYWxQcm9ncmFtKCk7XG4gIGNvbnN0IHByb2dyYW1JZCA9IG5ldyBQdWJsaWNLZXkoXCI4c2RkdFdXMXE3Znd6c3BBZlpqNHpOcGVRanB2bUQzRWVDQ0VmbmMzSm51UFwiKTtcblxuICBjb25zdCB0aXRsZSA9IFwiTXkgSm91cm5hbCBUaXRsZVwiO1xuICBjb25zdCBtZXNzYWdlID0gXCJUaGlzIGlzIG15IGpvdXJuYWwgZW50cnkgbWVzc2FnZS5cIjtcblxuICBjb25zdCBhY2NvdW50UXVlcnkgPSB1c2VRdWVyeSh7XG4gICAgcXVlcnlLZXk6IFsnam91cm5hbCcsICdmZXRjaCcsIHsgY2x1c3RlciwgYWNjb3VudCB9XSxcbiAgICBxdWVyeUZuOiAoKSA9PiBwcm9ncmFtLmFjY291bnQuam91cm5hbEVudHJ5U3RhdGUuZmV0Y2goYWNjb3VudCksXG4gIH0pO1xuXG4gIGNvbnN0IHVwZGF0ZUVudHJ5ID0gdXNlTXV0YXRpb24oe1xuICAgIG11dGF0aW9uS2V5OiBbJ2pvdXJuYWwnLCAndXBkYXRlRW50cnknLCB7IGNsdXN0ZXIsIGFjY291bnQgfV0sXG4gICAgbXV0YXRpb25GbjogKG93bmVyOiBQdWJsaWNLZXkpID0+XG4gICAgICBwcm9ncmFtLm1ldGhvZHMudXBkYXRlSm91cm5hbEVudHJ5KHRpdGxlLCBtZXNzYWdlKS5hY2NvdW50cyh7IFxuICAgICAgICBqb3VybmFsRW50cnk6IFB1YmxpY0tleS5maW5kUHJvZ3JhbUFkZHJlc3NTeW5jKFtcbiAgICAgICAgICBCdWZmZXIuZnJvbSh0aXRsZSksIG93bmVyLnRvQnVmZmVyKClcbiAgICAgICAgXSwgcHJvZ3JhbUlkKVswXVxuICAgICAgIH0pXG4gICAgICAucnBjKCksXG4gICAgb25TdWNjZXNzOiAodHgpID0+IHtcbiAgICAgIHRyYW5zYWN0aW9uVG9hc3QodHgpO1xuICAgICAgcmV0dXJuIGFjY291bnRzLnJlZmV0Y2goKTtcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBkZWxldGVFbnRyeSA9IHVzZU11dGF0aW9uKHtcbiAgICBtdXRhdGlvbktleTogWydqb3VybmFsJywgJ2RlbGV0ZUVudHJ5JywgeyBjbHVzdGVyLCBhY2NvdW50IH1dLFxuICAgIG11dGF0aW9uRm46ICgpID0+XG4gICAgICBwcm9ncmFtLm1ldGhvZHMuZGVsZXRlSm91cm5hbEVudHJ5KHRpdGxlKS5hY2NvdW50cyh7IGpvdXJuYWxFbnRyeTogYWNjb3VudCB9KS5ycGMoKSxcbiAgICBvblN1Y2Nlc3M6ICh0eCkgPT4ge1xuICAgICAgdHJhbnNhY3Rpb25Ub2FzdCh0eCk7XG4gICAgICByZXR1cm4gYWNjb3VudHMucmVmZXRjaCgpO1xuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgYWNjb3VudFF1ZXJ5LFxuICAgIHVwZGF0ZUVudHJ5LCBcbiAgICBkZWxldGVFbnRyeVxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkpvdXJuYWxJREwiLCJQcm9ncmFtIiwidXNlQ29ubmVjdGlvbiIsIlB1YmxpY0tleSIsInVzZU11dGF0aW9uIiwidXNlUXVlcnkiLCJ0b2FzdCIsInVzZUNsdXN0ZXIiLCJ1c2VBbmNob3JQcm92aWRlciIsInVzZVRyYW5zYWN0aW9uVG9hc3QiLCJ1c2VKb3VybmFsUHJvZ3JhbSIsImNvbm5lY3Rpb24iLCJjbHVzdGVyIiwidHJhbnNhY3Rpb25Ub2FzdCIsInByb3ZpZGVyIiwicHJvZ3JhbUlkIiwicHJvZ3JhbSIsImFjY291bnRzIiwicXVlcnlLZXkiLCJxdWVyeUZuIiwiYWNjb3VudCIsImpvdXJuYWxFbnRyeVN0YXRlIiwiYWxsIiwiZ2V0UHJvZ3JhbUFjY291bnQiLCJnZXRQYXJzZWRBY2NvdW50SW5mbyIsImNyZWF0ZUVudHJ5IiwibXV0YXRpb25LZXkiLCJtdXRhdGlvbkZuIiwib3duZXIiLCJ0aXRsZSIsIm1lc3NhZ2UiLCJtZXRob2RzIiwiY3JlYXRlSm91cm5hbEVudHJ5Iiwiam91cm5hbEVudHJ5IiwiZmluZFByb2dyYW1BZGRyZXNzU3luYyIsIkJ1ZmZlciIsImZyb20iLCJ0b0J1ZmZlciIsInJwYyIsIm9uU3VjY2VzcyIsInNpZ25hdHVyZSIsInJlZmV0Y2giLCJvbkVycm9yIiwiZXJyb3IiLCJ1c2VKb3VybmFsUHJvZ3JhbUFjY291bnQiLCJhY2NvdW50UXVlcnkiLCJmZXRjaCIsInVwZGF0ZUVudHJ5IiwidXBkYXRlSm91cm5hbEVudHJ5IiwidHgiLCJkZWxldGVFbnRyeSIsImRlbGV0ZUpvdXJuYWxFbnRyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/journal/journal-data-access.tsx\n"));

/***/ })

});