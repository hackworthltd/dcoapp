module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",

  env: {
    node: true,
  },

  plugins: [],

  extends: [
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    "plugin:import/recommended",
    "prettier",
  ],

  settings: {},

  rules: {
    "no-unused-vars": ["warn"],
  },

  overrides: [
    {
      files: ["test/**"],
      plugins: ["jest"],
      extends: ["plugin:jest/recommended"],
      rules: { "jest/prefer-expect-assertions": "off" },
    },
  ],
};
