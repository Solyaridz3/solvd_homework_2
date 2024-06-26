import globals from "globals";
import pluginJs from "@eslint/js";

export default [
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    {
        rules: {
            curly: "error",
            semi: "error",
            quotes: [2, "double", { avoidEscape: true }],
            "prefer-const": "error",
        },
    },
];
