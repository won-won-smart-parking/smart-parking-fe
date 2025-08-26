# I. Atom / Text

```tsx
// Atom / Text 컴포넌트 불러오기
import Text from "@shared/ui/atom/text"

// 컴포넌트 사용
<Text variant="TypographyKey" class="색상만">Text</Text>
```

| 이름 | font-size | line-height | font-weight |
|--|--|--|--|
| display-default | 32px | 40px | bold |
| heading-lg | 24px | 32px | bold |
| heading-md | 20px | 28px | bold |
| heading-sm | 20px | 24px | bold |
| title-md | 16px | 24px | bold |
| title-sm | 16px | 20px | bold |
| label-lg | 14px | 20px | bold |
| label-md | 16px | 24px | semibold |
| label-sm | 16px | 20px | semibold |
| label-tight | 14px | 20px | semibold |
| placeholder-default | 16px | 24px | normal |
| description-md | 14px | 20px | normal |
| description-sm | 14px | 18px | normal |
| body-xl | 14px | 32px | medium |
| body-lg | 14px | 24px | medium |
| body-md | 16px | 20px | medium |
| body-sm | 14px | 20px | medium |
| body-tight | 14px | 16px | medium |
| caption-xxl | 12px | 16px | semibold |
| caption-xl | 12px | 16px | medium |
| caption-lg | 16px | 20px | normal |
| caption-md | 12px | 24px | normal |
| caption-sm | 12px | 20px | normal |
| caption-tight | 12px | 16px | normal |

<br />

# II. Atom / Icon
```tsx
// Atom / Icon 컴포넌트 불러오기
import Icon from "@shared/ui/atoms/icon";

// 컴포넌트 사용
<Icon className="w-<number> color-<color-token>" />
```

> ⚠️ 주의사항: className을 수정할 때마다 cssInterop을 재계산을 해야되서 Reload를 한 번 해줘야 됨

<br />

# III. Atom / Tag
```tsx
// Atom / Tag 컴포넌트 불러오기
import Tag from "@shard/ui/atom/tag"

// 컴포넌트 사용
<Tag status="TagStatus" />
```

**■ TagStatus**
- available: 여유
- busy: 혼잡
- full: 만차