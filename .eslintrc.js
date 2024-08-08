const SUPPORTED_EXTENSIONS = [".js", ".mjs", ".jsx", ".tsx"];

module.exports = {
  root: true,
  parser: "@babel/eslint-parser",
  extends: "react-app",
  parserOptions: {
    requireConfigFile: false,
  },
  globals: {
    angular: true,
    PluginManager: true,
    Visualforce: true,
  },
  settings: {
    "import/resolver": {
      "babel-module": {
        extensions: SUPPORTED_EXTENSIONS,
      },
      node: {
        extensions: SUPPORTED_EXTENSIONS,
      },
    },
    "import/extensions": SUPPORTED_EXTENSIONS,
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        labelAttributes: ["label"],
        controlComponents: ["input", "span"],
        depth: 3,
      },
    ],
    "quote-props": "off",
    "object-curly-newline": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "react/forbid-prop-types": "off",
    "import/prefer-default-export": "off",
    "no-case-declarations": "off",
    "arrow-parens": ["error", "always"],
    "max-len": [
      "error",
      {
        code: 200,
        ignorePattern: "^\\s*const\\s.+=\\s*\\(\\{\\s.+\\}\\)\\s.+>",
        ignoreComments: true,
      },
    ],
    "no-unused-expressions": [
      "error",
      { allowShortCircuit: true, allowTernary: true },
    ],
    "react/prop-types": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: SUPPORTED_EXTENSIONS,
      },
    ],
    "import/no-extraneous-dependencies": "off",
    "no-use-before-define": "off",
    "comma-dangle": "off",
    "no-nested-ternary": "off",
    "react/jsx-one-expression-per-line": "off",
    "linebreak-style": "off",
  },
};
