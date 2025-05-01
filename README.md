### GAIN

## 주요 기능

- **로그인 페이지**

- 이메일/비밀번호 로그인
- 소셜 로그인 (네이버, 카카오, 페이스북, 구글)
- 자동 로그인 설정
- 비밀번호 표시/숨김 토글
- 반응형 디자인 (모바일에서는 오른쪽 영역 숨김)

- **회원가입 페이지**

- 소셜 회원가입
- 이메일 회원가입
- 비밀번호 유효성 검사
- 생년월일 유효성 검사
- 휴대폰 번호 인증
- 약관 동의 (전체 동의 기능 포함)
- 반응형 디자인

## 기술 스택

- **프레임워크**: Next.js 14 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **상태 관리**: Zustand
- **UI 컴포넌트**: shadcn/ui
- **아이콘**: Lucide React

## 설치 방법

### 사전 요구사항

- Node.js 18.17.0 이상
- npm 또는 yarn 또는 pnpm

### 설치 단계

1. 저장소 클론

```shellscript
git clone https://github.com/gain-mentoring/gain-FE
cd gain-FE
```

2. 의존성 설치

```shellscript
npm install
# 또는
yarn install
# 또는
pnpm install
```

3. 환경 변수 설정 (아직 없음)

`.env.local` 파일을 프로젝트 루트에 생성하고 필요한 환경 변수를 설정합니다.

```plaintext
NEXT_PUBLIC_API_URL=https://api.example.com
```

## 실행 방법

### 개발 서버 실행

```shellscript
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하여 애플리케이션을 확인할 수 있습니다.

### 프로덕션 빌드

```shellscript
npm run build
npm start
# 또는
yarn build
yarn start
# 또는
pnpm build
pnpm start
```

## 프로젝트 구조

```plaintext
gain/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 랜딩페이지
│   ├── login/              # 로그인 페이지
│   │   └── page.tsx
│   └── signup/             # 회원가입 페이지
│       └── page.tsx
├── components/             # 재사용 가능한 컴포넌트
│   └── ui/                 # UI 컴포넌트 (shadcn/ui)
├── lib/                    # 유틸리티 및 상태 관리
│   └── store/              # Zustand 스토어
│       └── auth-store.ts   # 인증 상태 관리
├── public/                 # 정적 파일
└── tailwind.config.ts      # Tailwind CSS 설정
```
