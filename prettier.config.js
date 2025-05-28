/** @type {import("prettier").Config} */
export default {
    semi: false, // 세미콜론 제거
    singleQuote: true, // 작은따옴표 사용
    trailingComma: 'all', // 마지막 쉼표 유지
    printWidth: 120, // 줄바꿈 기준
    tabWidth: 4, // 들여쓰기
    plugins: ['prettier-plugin-tailwindcss'], // Tailwind class 정렬
}
