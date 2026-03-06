# 🚀 Next Test Project: Design System Sandbox

이 프로젝트는 다양한 디자인 시스템(특히 `@gkssk/dstest` 및 Toss TDS)을 테스트하고 실험하기 위한 React + Vite 기반의 샌드박스 프로젝트입니다.

## 🛠 Tech Stack

- **Framework:** [React 18](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Design Systems:**
  - `@gkssk/dstest`: 핵심 테스트 대상 디자인 시스템
  - `@toss/tds-mobile`: Toss Design System (Reference)
- **Linting:** ESLint

## 📂 Project Structure

```text
.
├── src/
│   ├── components/       # 공통 및 테스트용 컴포넌트
│   │   ├── TopTabs.jsx      # 상단 탭 네비게이션
│   │   └── SectionCard.jsx  # 섹션별 카드 레이아웃
│   ├── assets/           # 정적 자산 (이미지, 로고 등)
│   ├── App.jsx           # 메인 애플리케이션 로직 및 라우팅
│   ├── main.jsx          # 엔트리 포인트
│   ├── index.css         # 글로벌 스타일 (Tailwind CSS 포함)
│   └── App.css           # 앱 전용 스타일
├── scripts/              # 스타일 및 런타임 체크용 유틸리티 스크립트
├── public/               # 정적 리소스
└── vite.config.js        # Vite 설정
```

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## 🧪 Special Scripts

디자인 시스템 정합성 확인을 위한 전용 스크립트들이 포함되어 있습니다:

- `npm run check:react-runtime`: 단일 React 런타임 사용 여부 확인
- `npm run check:tailwind-css`: Tailwind CSS 설정 및 충돌 확인
- `npm run check:dstest-button-styles`: `dstest` 패키지의 버튼 스타일 적용 상태 확인

## 📝 Usage

`src/App.jsx`에서 테스트하고자 하는 디자인 시스템의 컴포넌트를 임포트하여 자유롭게 구성해볼 수 있습니다. 주로 새로운 UI 컴포넌트의 동작 확인이나 테일윈드와의 조합을 테스트하는 용도로 사용합니다.