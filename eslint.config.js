// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');

const expoConfig = require('eslint-config-expo/flat');
const prettierConfig = require('eslint-config-prettier');

// ESLint 전체 설정 구성
module.exports = defineConfig([
  // 미리 정의된 ESLint 구성 옵션 내용 불러오기
  expoConfig,
  prettierConfig,

  // Custom ESLint 설정 구성
  {
    files: ['**/*.{ts,tsx}'], // 적용할 파일(glob 패턴)을 지정
    ignores: ['**/node_modules/**', '**/dist/**', '**/build**', '.expo'], // 린트에서 제외할 파일(또는 폴더)을 지정

    // 언어 관련 옵션을 설정
    languageOptions: {
      parser: require.resolve('@typescript-eslint/parser'), // 사용할 파서(해석기)를 지정

      // 파서 옵션: ECMAScript 버전, 모듈 방식, JSX 지원 등을 설정
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },

      // 전역 변수 설정: 각 변수에 대해 "readonly", "writable" 등의 접근 권한을 지정
      globals: {
        __DEV__: 'readonly',
        global: 'readonly',
      },
    },

    // 사용할 플러그인들을 객체 형태로 지정
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      react: require('eslint-plugin-react'),
      'react-hooks': require('eslint-plugin-react-hooks'),
      'react-native': require('eslint-plugin-react-native'),
      import: require('eslint-plugin-import'),
      prettier: require('eslint-plugin-prettier'),
    },

    // 플러그인별 추가 설정 (예: React 버전 감지)
    settings: {
      react: {
        version: 'detect',
      },
    },

    // 적용할 린트 규칙을 설정
    rules: {
      // ⚠️ 경고 수준 Lint Rules
      'for-direction': 'warn',
      'no-async-promise-executor': 'warn',
      'no-compare-neg-zero': 'warn',
      'no-constant-condition': 'warn',
      'no-empty-pattern': 'warn',
      'no-self-assign': 'warn',
      'no-unsafe-finally': 'warn',
      'no-console': 'warn',
      'no-debugger': 'warn',

      // ❌ 오류 수준 Lint Rules
      'constructor-super': 'error',
      'getter-return': 'error',
      'no-class-assign': 'error',
      'no-const-assign': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-ex-assign': 'error',
      'no-func-assign': 'error',
      'no-import-assign': 'error',
      'no-new-native-nonconstructor': 'error',
      'no-obj-calls': 'error',
      'no-this-before-super': 'error',
      'no-unreachable': 'error',
      'use-isnan': 'error',
      'valid-typeof': 'error',
    },

    // 프로세서를 지정(명시적으로 하지 않아도 동일하게 동작)
    // processor: null,
  },
]);
