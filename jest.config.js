/** @type {import('jest').Config} */
module.exports = {
  preset: "jest-expo",
  testEnvironment: "node",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|@react-native|react-native-webview|react-navigation|@react-navigation|expo(nent)?|expo|@expo|@expo-google-fonts|expo-modules-core|nativewind|@unimodules|unimodules|sentry-expo)/)",
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@app/(.*)$": "<rootDir>/src/app/$1",
    "^@entities/(.*)$": "<rootDir>/src/entities/$1",
    "^@features/(.*)$": "<rootDir>/src/features/$1",
    "^@shared/(.*)$": "<rootDir>/src/shared/$1",
    "^@widgets/(.*)$": "<rootDir>/src/widgets/$1",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  roots: ["<rootDir>/src", "<rootDir>"],
};
