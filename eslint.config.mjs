import eslintConfigPrettier from "eslint-config-prettier";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import pluginUnusedImports from "eslint-plugin-unused-imports";

const eslintConfig = [
  ...nextVitals,
  ...nextTs,
  eslintConfigPrettier,
  {
    ignores: ["node_modules/**", "build/**", "dist/**", ".next/**"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    plugins: {
      "unused-imports": pluginUnusedImports,
    },
    rules: {
      // 🔹 Reglas base de JavaScript
      "no-console": "warn",
      "unused-imports/no-unused-imports": "error",
      // Desactivar no-unused-vars base (conflictúa con TypeScript)
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],

      // 🔹 Reglas específicas de React
      "react/jsx-sort-props": [
        "error",
        { callbacksLast: true, shorthandFirst: true, noSortAlphabetically: true },
      ],
      "react/react-in-jsx-scope": "off", // No necesario en Next.js con App Router

      // 🔹 Reglas específicas de TypeScript
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "warn",
      "@typescript-eslint/no-explicit-any": "warn", // Advertir uso de any

      // 🔹 React Hooks - Rehabilitar con excepciones puntuales
      "react-hooks/exhaustive-deps": [
        "warn",
        {
          // Permitir exclusiones específicas si es necesario
          // Por ahora, advertencia para revisar caso por caso
        },
      ],
    },
  },
];

export default eslintConfig;
