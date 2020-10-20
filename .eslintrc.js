module.exports = {
  extends: "divid",
  parserOptions: {
    project: ["./src/tsconfig.json"],
  },
  rules: {
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/no-base-to-string": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/prefer-readonly-parameter-types": "off"
  },
};
