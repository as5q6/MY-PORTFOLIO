"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Contact.tsx":
/*!********************************!*\
  !*** ./components/Contact.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Contact; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emailjs/browser */ \"(app-pages-browser)/./node_modules/@emailjs/browser/es/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Contact() {\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        message: \"\"\n    });\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"idle\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setStatus(\"sending\");\n        try {\n            await _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__[\"default\"].send(\"YOUR_SERVICE_ID\", \"YOUR_TEMPLATE_ID\", {\n                from_name: formData.name,\n                from_email: formData.email,\n                message: formData.message,\n                to_name: \"Your Name\"\n            }, \"YOUR_PUBLIC_KEY\" // Replace with your EmailJS public key\n            );\n            setStatus(\"success\");\n            setFormData({\n                name: \"\",\n                email: \"\",\n                message: \"\"\n            });\n            setTimeout(()=>setStatus(\"idle\"), 3000);\n        } catch (error) {\n            console.error(\"Failed to send message:\", error);\n            setStatus(\"error\");\n            setTimeout(()=>setStatus(\"idle\"), 3000);\n        }\n    };\n    const handleChange = (e)=>{\n        setFormData((prev)=>({\n                ...prev,\n                [e.target.name]: e.target.value\n            }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"contact\",\n        className: \"py-16\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container px-4 mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-2xl mx-auto text-center mb-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-3xl font-bold mb-4\",\n                            children: \"Get in Touch\"\n                        }, void 0, false, {\n                            fileName: \"/Users/afridali/Documents/MY-PORTFOLIO/components/Contact.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-600\",\n                            children: \"Have a question or want to work together?\"\n                        }, void 0, false, {\n                            fileName: \"/Users/afridali/Documents/MY-PORTFOLIO/components/Contact.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/afridali/Documents/MY-PORTFOLIO/components/Contact.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"max-w-xl mx-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"name\",\n                                    className: \"block text-sm font-medium mb-2\",\n                                    children: \"Name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/afridali/Documents/MY-PORTFOLIO/components/Contact.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"name\",\n                                    name: \"name\",\n                                    value: formData.name,\n                                    onChange: handleChange,\n                                    required: true,\n                                    className: \"w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none transition-all\",\n                                    placeholder: \"Your name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/afridali/Documents/MY-PORTFOLIO/components/Contact.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/afridali/Documents/MY-PORTFOLIO/components/Contact.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"email\",\n                                    className: \"block text-sm font-medium mb-2\",\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/afridali/Documents/MY-PORTFOLIO/components/Contact.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    id: \"email\",\n                                    name: \"email\",\n                                    value: formData.email,\n                                    onChange: handleChange,\n                                    required: true,\n                                    className: \"w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none transition-all\",\n                                    placeholder: \"your@email.com\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/afridali/Documents/MY-PORTFOLIO/components/Contact.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/afridali/Documents/MY-PORTFOLIO/components/Contact.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"message\",\n                                    className: \"block text-sm font-medium mb-2\",\n                                    children: \"Message\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/afridali/Documents/MY-PORTFOLIO/components/Contact.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    id: \"message\",\n                                    name: \"message\",\n                                    value: formData.message,\n                                    onChange: handleChange,\n                                    required: true,\n                                    rows: 5,\n                                    className: \"w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none transition-all resize-none\",\n                                    placeholder: \"Your message...\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/afridali/Documents/MY-PORTFOLIO/components/Contact.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/afridali/Documents/MY-PORTFOLIO/components/Contact.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            disabled: status === \"sending\",\n                            className: \"w-full py-4 px-6 rounded-lg font-medium transition-all \".concat(status === \"sending\" ? \"bg-gray-200 cursor-not-allowed\" : \"bg-gray-900 text-white hover:bg-gray-800\"),\n                            children: status === \"sending\" ? \"Sending...\" : \"Send Message\"\n                        }, void 0, false, {\n                            fileName: \"/Users/afridali/Documents/MY-PORTFOLIO/components/Contact.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, this),\n                        status === \"success\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                            initial: {\n                                opacity: 0,\n                                y: 10\n                            },\n                            animate: {\n                                opacity: 1,\n                                y: 0\n                            },\n                            className: \"mt-4 p-4 bg-green-50 text-green-600 rounded-lg text-center\",\n                            children: \"Message sent successfully!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/afridali/Documents/MY-PORTFOLIO/components/Contact.tsx\",\n                            lineNumber: 118,\n                            columnNumber: 13\n                        }, this),\n                        status === \"error\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                            initial: {\n                                opacity: 0,\n                                y: 10\n                            },\n                            animate: {\n                                opacity: 1,\n                                y: 0\n                            },\n                            className: \"mt-4 p-4 bg-red-50 text-red-600 rounded-lg text-center\",\n                            children: \"Failed to send message. Please try again.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/afridali/Documents/MY-PORTFOLIO/components/Contact.tsx\",\n                            lineNumber: 128,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/afridali/Documents/MY-PORTFOLIO/components/Contact.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/afridali/Documents/MY-PORTFOLIO/components/Contact.tsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/afridali/Documents/MY-PORTFOLIO/components/Contact.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(Contact, \"7hu4jP39kqEf7gDnMHiISBh/XZ8=\");\n_c = Contact;\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ29udGFjdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFaUM7QUFDTTtBQUNBO0FBRXhCLFNBQVNHOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUM7UUFDdkNNLE1BQU07UUFDTkMsT0FBTztRQUNQQyxTQUFTO0lBQ1g7SUFDQSxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQTJDO0lBRS9FLE1BQU1XLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEJILFVBQVU7UUFFVixJQUFJO1lBQ0YsTUFBTVQsNkRBQVksQ0FDaEIsbUJBQ0Esb0JBQ0E7Z0JBQ0VjLFdBQVdYLFNBQVNFLElBQUk7Z0JBQ3hCVSxZQUFZWixTQUFTRyxLQUFLO2dCQUMxQkMsU0FBU0osU0FBU0ksT0FBTztnQkFDekJTLFNBQVM7WUFDWCxHQUNBLGtCQUFrQix1Q0FBdUM7O1lBRzNEUCxVQUFVO1lBQ1ZMLFlBQVk7Z0JBQUVDLE1BQU07Z0JBQUlDLE9BQU87Z0JBQUlDLFNBQVM7WUFBRztZQUMvQ1UsV0FBVyxJQUFNUixVQUFVLFNBQVM7UUFDdEMsRUFBRSxPQUFPUyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQywyQkFBMkJBO1lBQ3pDVCxVQUFVO1lBQ1ZRLFdBQVcsSUFBTVIsVUFBVSxTQUFTO1FBQ3RDO0lBQ0Y7SUFFQSxNQUFNVyxlQUFlLENBQUNUO1FBQ3BCUCxZQUFZaUIsQ0FBQUEsT0FBUztnQkFDbkIsR0FBR0EsSUFBSTtnQkFDUCxDQUFDVixFQUFFVyxNQUFNLENBQUNqQixJQUFJLENBQUMsRUFBRU0sRUFBRVcsTUFBTSxDQUFDQyxLQUFLO1lBQ2pDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBUUMsSUFBRztRQUFVQyxXQUFVO2tCQUM5Qiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0U7NEJBQUdGLFdBQVU7c0NBQTBCOzs7Ozs7c0NBQ3hDLDhEQUFDRzs0QkFBRUgsV0FBVTtzQ0FBZ0I7Ozs7Ozs7Ozs7Ozs4QkFHL0IsOERBQUNJO29CQUFLQyxVQUFVckI7b0JBQWNnQixXQUFVOztzQ0FDdEMsOERBQUNDOzRCQUFJRCxXQUFVOzs4Q0FDYiw4REFBQ007b0NBQU1DLFNBQVE7b0NBQU9QLFdBQVU7OENBQWlDOzs7Ozs7OENBR2pFLDhEQUFDUTtvQ0FDQ0MsTUFBSztvQ0FDTFYsSUFBRztvQ0FDSHBCLE1BQUs7b0NBQ0xrQixPQUFPcEIsU0FBU0UsSUFBSTtvQ0FDcEIrQixVQUFVaEI7b0NBQ1ZpQixRQUFRO29DQUNSWCxXQUFVO29DQUNWWSxhQUFZOzs7Ozs7Ozs7Ozs7c0NBSWhCLDhEQUFDWDs0QkFBSUQsV0FBVTs7OENBQ2IsOERBQUNNO29DQUFNQyxTQUFRO29DQUFRUCxXQUFVOzhDQUFpQzs7Ozs7OzhDQUdsRSw4REFBQ1E7b0NBQ0NDLE1BQUs7b0NBQ0xWLElBQUc7b0NBQ0hwQixNQUFLO29DQUNMa0IsT0FBT3BCLFNBQVNHLEtBQUs7b0NBQ3JCOEIsVUFBVWhCO29DQUNWaUIsUUFBUTtvQ0FDUlgsV0FBVTtvQ0FDVlksYUFBWTs7Ozs7Ozs7Ozs7O3NDQUloQiw4REFBQ1g7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDTTtvQ0FBTUMsU0FBUTtvQ0FBVVAsV0FBVTs4Q0FBaUM7Ozs7Ozs4Q0FHcEUsOERBQUNhO29DQUNDZCxJQUFHO29DQUNIcEIsTUFBSztvQ0FDTGtCLE9BQU9wQixTQUFTSSxPQUFPO29DQUN2QjZCLFVBQVVoQjtvQ0FDVmlCLFFBQVE7b0NBQ1JHLE1BQU07b0NBQ05kLFdBQVU7b0NBQ1ZZLGFBQVk7Ozs7Ozs7Ozs7OztzQ0FJaEIsOERBQUNHOzRCQUNDTixNQUFLOzRCQUNMTyxVQUFVbEMsV0FBVzs0QkFDckJrQixXQUFXLDBEQUdSLE9BSGtFbEIsV0FBVyxZQUM1RSxtQ0FDQTtzQ0FHSEEsV0FBVyxZQUFZLGVBQWU7Ozs7Ozt3QkFHeENBLFdBQVcsMkJBQ1YsOERBQUNQLGlEQUFNQSxDQUFDMEIsR0FBRzs0QkFDVGdCLFNBQVM7Z0NBQUVDLFNBQVM7Z0NBQUdDLEdBQUc7NEJBQUc7NEJBQzdCQyxTQUFTO2dDQUFFRixTQUFTO2dDQUFHQyxHQUFHOzRCQUFFOzRCQUM1Qm5CLFdBQVU7c0NBQ1g7Ozs7Ozt3QkFLRmxCLFdBQVcseUJBQ1YsOERBQUNQLGlEQUFNQSxDQUFDMEIsR0FBRzs0QkFDVGdCLFNBQVM7Z0NBQUVDLFNBQVM7Z0NBQUdDLEdBQUc7NEJBQUc7NEJBQzdCQyxTQUFTO2dDQUFFRixTQUFTO2dDQUFHQyxHQUFHOzRCQUFFOzRCQUM1Qm5CLFdBQVU7c0NBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWI7R0FySXdCeEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0LnRzeD9hYjRmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZW1haWxqcyBmcm9tICdAZW1haWxqcy9icm93c2VyJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0KCkge1xuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBuYW1lOiAnJyxcbiAgICBlbWFpbDogJycsXG4gICAgbWVzc2FnZTogJydcbiAgfSk7XG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZTwnaWRsZScgfCAnc2VuZGluZycgfCAnc3VjY2VzcycgfCAnZXJyb3InPignaWRsZScpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0U3RhdHVzKCdzZW5kaW5nJyk7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgZW1haWxqcy5zZW5kKFxuICAgICAgICAnWU9VUl9TRVJWSUNFX0lEJywgLy8gUmVwbGFjZSB3aXRoIHlvdXIgRW1haWxKUyBzZXJ2aWNlIElEXG4gICAgICAgICdZT1VSX1RFTVBMQVRFX0lEJywgLy8gUmVwbGFjZSB3aXRoIHlvdXIgRW1haWxKUyB0ZW1wbGF0ZSBJRFxuICAgICAgICB7XG4gICAgICAgICAgZnJvbV9uYW1lOiBmb3JtRGF0YS5uYW1lLFxuICAgICAgICAgIGZyb21fZW1haWw6IGZvcm1EYXRhLmVtYWlsLFxuICAgICAgICAgIG1lc3NhZ2U6IGZvcm1EYXRhLm1lc3NhZ2UsXG4gICAgICAgICAgdG9fbmFtZTogJ1lvdXIgTmFtZScsIC8vIFJlcGxhY2Ugd2l0aCB5b3VyIG5hbWVcbiAgICAgICAgfSxcbiAgICAgICAgJ1lPVVJfUFVCTElDX0tFWScgLy8gUmVwbGFjZSB3aXRoIHlvdXIgRW1haWxKUyBwdWJsaWMga2V5XG4gICAgICApO1xuXG4gICAgICBzZXRTdGF0dXMoJ3N1Y2Nlc3MnKTtcbiAgICAgIHNldEZvcm1EYXRhKHsgbmFtZTogJycsIGVtYWlsOiAnJywgbWVzc2FnZTogJycgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHNldFN0YXR1cygnaWRsZScpLCAzMDAwKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHNlbmQgbWVzc2FnZTonLCBlcnJvcik7XG4gICAgICBzZXRTdGF0dXMoJ2Vycm9yJyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHNldFN0YXR1cygnaWRsZScpLCAzMDAwKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xuICAgIHNldEZvcm1EYXRhKHByZXYgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJjb250YWN0XCIgY2xhc3NOYW1lPVwicHktMTZcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB4LTQgbXgtYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTJ4bCBteC1hdXRvIHRleHQtY2VudGVyIG1iLTEyXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi00XCI+R2V0IGluIFRvdWNoPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+SGF2ZSBhIHF1ZXN0aW9uIG9yIHdhbnQgdG8gd29yayB0b2dldGhlcj88L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cIm1heC13LXhsIG14LWF1dG9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTZcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gbWItMlwiPlxuICAgICAgICAgICAgICBOYW1lXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMyBib3JkZXIgcm91bmRlZC1sZyBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmF5LTIwMCBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSBtYi0yXCI+XG4gICAgICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZW1haWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTMgYm9yZGVyIHJvdW5kZWQtbGcgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctZ3JheS0yMDAgb3V0bGluZS1ub25lIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ5b3VyQGVtYWlsLmNvbVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIG1iLTJcIj5cbiAgICAgICAgICAgICAgTWVzc2FnZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBpZD1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5tZXNzYWdlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICByb3dzPXs1fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0zIGJvcmRlciByb3VuZGVkLWxnIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWdyYXktMjAwIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uLWFsbCByZXNpemUtbm9uZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBtZXNzYWdlLi4uXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGRpc2FibGVkPXtzdGF0dXMgPT09ICdzZW5kaW5nJ31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBweS00IHB4LTYgcm91bmRlZC1sZyBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWFsbCAke3N0YXR1cyA9PT0gJ3NlbmRpbmcnXG4gICAgICAgICAgICAgID8gJ2JnLWdyYXktMjAwIGN1cnNvci1ub3QtYWxsb3dlZCdcbiAgICAgICAgICAgICAgOiAnYmctZ3JheS05MDAgdGV4dC13aGl0ZSBob3ZlcjpiZy1ncmF5LTgwMCdcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3N0YXR1cyA9PT0gJ3NlbmRpbmcnID8gJ1NlbmRpbmcuLi4nIDogJ1NlbmQgTWVzc2FnZSd9XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICB7c3RhdHVzID09PSAnc3VjY2VzcycgJiYgKFxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAxMCB9fVxuICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNCBwLTQgYmctZ3JlZW4tNTAgdGV4dC1ncmVlbi02MDAgcm91bmRlZC1sZyB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE1lc3NhZ2Ugc2VudCBzdWNjZXNzZnVsbHkhXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHtzdGF0dXMgPT09ICdlcnJvcicgJiYgKFxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAxMCB9fVxuICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNCBwLTQgYmctcmVkLTUwIHRleHQtcmVkLTYwMCByb3VuZGVkLWxnIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRmFpbGVkIHRvIHNlbmQgbWVzc2FnZS4gUGxlYXNlIHRyeSBhZ2Fpbi5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59ICJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImVtYWlsanMiLCJtb3Rpb24iLCJDb250YWN0IiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsIm5hbWUiLCJlbWFpbCIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZW5kIiwiZnJvbV9uYW1lIiwiZnJvbV9lbWFpbCIsInRvX25hbWUiLCJzZXRUaW1lb3V0IiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlQ2hhbmdlIiwicHJldiIsInRhcmdldCIsInZhbHVlIiwic2VjdGlvbiIsImlkIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJwIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwidGV4dGFyZWEiLCJyb3dzIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Contact.tsx\n"));

/***/ })

});