# I. React Native 코어 컴포넌트(Core-Component) 특징

> [🔗 React Native | Core Components and APIs](https://reactnative.dev/docs/components-and-apis)

## 1. View 컴포넌트

```tsx
<View className="items-center justify-center g-3 ...">
  {/* ... */}
</View>
```

- View 컴포넌트는 기존 HTEML 태그에서 div 태그라고 생각하면 된다.
- 다만, React Native의 View 컴포넌트는 `display: flex`가 기본으로 적용이 된다.
- 즉, 기존 div 특징인 Block 엘리먼트가 아니기 때문에 flex container에서 사용되는 기본적인 CSS 스타일 시트 값을 사용할 수 있다.
- 또한, `display: flex`의 flex-direction의 기본값은 row이지만, View는 수직 레이아웃을 구성하기 위한 것이기 때문에 기본값이 column으로 동작한다.


# II. EXPO Development build 환경 설정 및 빌드 규칙

## 1. 네이티브 컴포넌트 모듈 추가 후 재빌드 필요

> 💡 네이티브 컴포넌트: Kotlin 또는 Java / Swift 또는 Objective-C로 구현된 UI 요소를 JavaScript를 통해 호출할 수 있도록 래핑한 컴포넌트

```bash
eas build --platform all --profile development
```

- React Native는 크로스 플랫폼 프레임워크이므로, 작성된 코드를 각 운영체제(Android, iOS)에 맞는 네이티브 코드로 변환하여 실행한다. _(TS -> JS로 이해하면 쉬움)_
- 따라서 네이티브 컴포넌트를 새로 추가하거나 수정할 경우, 기존 JavaScript 코드만 다시 번들링해서는 반영되지 않는다.
- 네이티브 레벨의 변경 사항은 반드시 앱을 **재빌드**해야 반영된다.

## 2. Android / iOS 빌드 시 주의

- 기존 시뮬레이터 / 에뮬레이터에 앱이 설치되어 있다면, 네이티브 코드 변경이 없는 경우에는 JavaScript 코드만 번들링되어 반영된다.
- 그러나 네이티브 레벨의 변경 사항이 발생하면 앱을 반드시 재빌드해야 하며, 이때 각 시뮬레이터/에뮬레이터에 설치된 기존 빌드 파일이 서로 다를 수 있으므로 최신 빌드 파일로 재설치해야 한다.

### 🤖 빌드 파일 수정 방법 - Android

```bash
# 1. 에뮬레이터 실행 (선택 사항. 이미 켜져 있다면 생략 가능)
emulator -list-avds       # 에뮬레이터 목록 확인
emulator -avd <emulator>  # 에뮬레이터 실행

# 2. 에뮬레이터 내 애플리케이션 제거
adb -e uninstall <app-name>
# 또는 에뮬레이터 기기 지정 후 해당 에뮬레이터 내 애플리케이션 제거
# adb devices -l  실행되고 있는 에뮬레이터 번호 확인
# adb -s <Emulator-Number> uninstall <app-name>

# 3. 애플리케이션 재설치
adb install -r /path/to/your.apk # your.apk -> build apk 파일

# 4. Expo 초기화 후 실행
npx expo start -c
```

### 📱 빌드 파일 수정 방법 - iOS

```bash
xcrun simctl list devices                      # 1. 시뮬레이터 종류 확인 (선택 사항)
open -a Simulator                              # 2. 시뮬레이터 실행
xcrun simctl uninstall booted <app-name>       # 3. 시뮬레이터 내 app 삭제
xcrun simctl install booted <path/app-name>    # 4. 새 빌드 설치
npx expo start -c                              # 5. Expo 초기화 후 실행
```