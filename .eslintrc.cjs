module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    globals: { global: 'readonly' }
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:react-hooks/recommended"],
  parserOptions: {
    ecmaFeatures: {jsx: true},
    ecmaVersion: 2020,
    sourceType: "module"
  },
  settings: {"react": {version: "detect"}},
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off"
  }
};