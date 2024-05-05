module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: true,
  },
  plugins: [
    "@typescript-eslint",
  ],
  rules: {
    "indent": [ "error", 2 ],
    "max-len": [ "error", {
      "code": 120,
      "ignoreUrls": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true,
      "ignoreRegExpLiterals": true,
    } ],
    "quotes": [ "error", "single" ],
    "semi": [ "error", "always" ],
    "array-bracket-spacing": [ "error", "always" ],
    "object-curly-spacing": [ "error", "always" ],
    "no-trailing-spaces": [ "error" ],
    "no-multi-spaces": [ "error" ],
    "no-multiple-empty-lines": [ "error", { "max": 1 } ],
    "eol-last": [ "error", "always" ],
    "@typescript-eslint/comma-dangle": [ "error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "always-multiline",
      "enums": "always-multiline",
      "generics": "always-multiline",
      "tuples": "always-multiline",
    }],
  },
}
