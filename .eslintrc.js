module.exports = {
  extends: [
    "universe",
    "universe/native",
    "universe/web",
    "universe/shared/typescript-analysis",
  ],
  plugins: ["react", "@typescript-eslint", "prettier", "react-native", "react-hooks"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  rules: {
    "prettier/prettier": 1,
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 0,
    "react-native/no-color-literals": 0,
    "react-native/no-raw-text": 0,
    "react-native/sort-styles": [
      "error",
      "asc",
      {
        "ignoreClassNames": false,
        "ignoreStyleProperties": false
      }
    ],
    "import/order": 2,
    "import/namespace": 2,
    "react/require-default-props": "off",
    "react/function-component-definition": [
      0,
      {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function"
      }
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["off"],
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".tsx", ".ts", ".js", ".jsx"]
      }
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src"]
      }
    }
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
    'react-native/react-native': true
  },
  globals: {
    JSX: true
  }
};
