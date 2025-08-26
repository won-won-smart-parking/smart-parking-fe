# I. 디자인 토큰 - Color
```tsx
<Text className="text-blue-400"></Text> // Text 관련 요소(컴포넌트) 색상 적용 방법
<View className="bg-blue-400"></View> // Box 관련 요소(컴포넌트) 색상 적용 방법
```

### ⚪️ Neutral

| 명암 단계 | HEX | 사용법 |
|--|--|--|
| 100 | `#FFFFFF` | `<text or bg>-neutral-100` |
| 200 | `#F5F5F5` | `<text or bg>-neutral-200` |
| 300 | `#F2F2F2` | `<text or bg>-neutral-300` |
| 400 | `#EDEDED` | `<text or bg>-neutral-400` |
| 500 | `#ECECEC` | `<text or bg>-neutral-500` |
| 600 | `#E5E5E5` | `<text or bg>-neutral-600` |
| 700 | `#E0E0E0` | `<text or bg>-neutral-700` |
| 800 | `#B0B0B0` | `<text or bg>-neutral-800` |
| 850 | `#A0A0A0` | `<text or bg>-neutral-850` |
| 870 | `#9E9E9E` | `<text or bg>-neutral-870` |
| 900 | `#616161` | `<text or bg>-neutral-900` |
| 950 | `#333333` | `<text or bg>-neutral-950` |
| 1000 | `#12141A` | `<text or bg>-neutral-1000` |

### 🔘 Coolgray

| 명암 단계 | HEX | 사용법 |
|--|--|--|
| 100 | `#F1F2F6` | `<text or bg>-coolgray-100` |
| 200 | `#E5E7EB` | `<text or bg>-coolgray-200` |
| 300 | `#DFE4EA` | `<text or bg>-coolgray-300` |
| 400 | `#C7C7CD` | `<text or bg>-coolgray-400` |
| 500 | `#A4B0BE` | `<text or bg>-coolgray-500` |

### 🔵 Blue

| 명암 단계 | HEX | 사용법 |
|--|--|--|
| 100 | `#E7F0F9` | `<text or bg>-blue-100` |
| 200 | `#E4F1FE` | `<text or bg>-blue-200` |
| 300 | `#5BABF8` | `<text or bg>-blue-300` |
| 400 | `#3A8DDE` | `<text or bg>-blue-400` |

### 🟢 Green

| 명암 단계 | HEX | 사용법 |
|--|--|--|
| 100 | `#F1FBEA` | `<text or bg>-green-100` |
| 200 | `#7CB342` | `<text or bg>-green-200` |
| 300 | `#24E955` | `<text or bg>-green-300` |

### 🔴 Red

| 명암 단계 | HEX | 사용법 |
|--|--|--|
| 100 | `#FEEAEA` | `<text or bg>-red-100` |
| 200 | `#F44336` | `<text or bg>-red-200` |
| 300 | `#DA3636` | `<text or bg>-red-300` |

### 🟡 Orange

| 명암 단계 | HEX | 사용법 |
|--|--|--|
| 100 | `#FFF4E5` | `<text or bg>-orange-100` |
| 200 | `#FF9800` | `<text or bg>-orange-200` |

### 🔲 Overlay

> Overlay는 Box 요소(컴포넌트)에서만 사용 ‼️

| 투명도 단계 | RGBA | 사용법 |
|--|--|--|
| 8% | `rgba(0, 0, 0, 0.08)",` | `bg-overlay-black-08` |
| 10% | `rgba(91, 171, 248, 0.1)` | `bg-overlay-blue-10` |
| 20% | `rgba(242, 250, 255, 0.2)` | `bg-overlay-blue-20` |
| 30% | `rgba(255, 255, 255, 0.3)` | `bg-overlay-white-30` |
| 40% | `rgba(0, 0, 0, 0.4)",` | `bg-overlay-black-40` |

<br />

# II. 디자인 토큰 - Spacing

```tsx
<View className="w-1 h-4 ..." />
```

- 간격 단위는 4px 배수를 기준으로 설정한다.  
- 예를 들어 `1.5`를 사용하면 4px × 1.5 = 6px이 적용된다.  
- 값의 범위는 0부터 96까지이다.
- 넓이(width), 높이(height), 외부 간격(margin), 내부 간격(padding)의 `<number>` 값으로 사용된다.

# III. 디자인 토큰 - Elevation

```tsx
<View style={elevation.active}>
  {/* ... */}
</View>
```

| 종류 | box-shadow 값 |
|--|--|
| overlay | `0 4px 12px rgba(0, 0, 0, 0.2)` |
| floating | `0 4px 12px rgba(0, 0, 0, 0.08)` |
| raised | `0 2px 6px rgba(0, 0, 0, 0.12)` |
| resting | `0 0px 8px rgba(0, 0, 0, 0.1)` |
| active | `0 2px 4px rgba(0, 0, 0, 0.012)` |
| bottom | `-2px 16px 12px rgba(0, 0, 0, 0.12)` |
| side | `4px 0px 4px rgba(0, 0, 0, 0.08)` |

- Elevation은 NativeWind에서 기본적으로 지원하지 않는다.  
- 이는 iOS와 Android의 Elevation 기본 스타일이 서로 다르기 때문이다.  
- 따라서 Elevation은 React Native의 전통적인 StyleSheet API를 통해 구현한다.  
- 사용 시에는 `style={elevation.<type>}` 형태로 적용한다.