const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// react-native-svg-transformer 설정
config.transformer = {
  ...config.transformer,
  // Expo 환경이면 expo 전용 엔트리를 사용하세요.
  babelTransformerPath: require.resolve("react-native-svg-transformer/expo"),
};

config.resolver = {
  ...config.resolver,
  assetExts: config.resolver.assetExts.filter((ext) => ext !== "svg"),
  sourceExts: [...config.resolver.sourceExts, "svg"],
};

// NativeWind 설정
module.exports = withNativeWind(config, { input: "./src/global/styles/global.css" });
