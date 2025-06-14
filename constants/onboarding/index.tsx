export const STEP_LIST = [
  { procedure: 1, index: 0, label: '사용자', showTab: true },
  { procedure: 2, index: 1, label: '분야', showTab: true },
  { procedure: 3, index: 2, label: '위치', showTab: true },
  { procedure: 4, index: 3, label: '완료', showTab: false },
] as const

export const USER_TEMPLATE_LIST = [
  {
    type: 'mentor',
    icon: (
      <svg width="111" height="126" viewBox="0 0 111 126" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_636_1520)">
          <path
            d="M80.7554 53.8028C80.7554 66.0058 69.5 75.8916 55.6261 75.8916C41.7522 75.8916 31.3057 65.9784 30.4969 53.8028C29.2082 34.3327 40.2853 40.4343 52.7471 34.3327C56.3527 32.564 61.6856 24.9405 65.0033 26.9972C68.0057 28.8619 75.2305 34.4013 78.8223 38.8437C82.1263 42.9297 80.7416 49.1958 80.7416 53.8028H80.7554Z"
            fill="white"
            stroke="currentColor"
            strokeWidth="1.62"
            strokeMiterlimit="10"
          />
          <path
            d="M41.9573 72.2172C41.2444 77.4549 39.6815 85.0098 33.2656 85.5994C28.9882 85.7776 23.0795 84.7219 19.7618 81.7602C17.1434 78.8946 21.64 72.7931 21.9553 68.4054C23.1481 56.9154 23.2029 45.631 23.2577 34.0313C23.3263 29.6299 23.5456 26.2432 24.848 22.5275C26.7947 16.9607 30.3729 11.9012 35.1986 8.51456C54.4465 -4.25065 79.4524 2.42675 88.1578 23.8849C91.0094 31.1245 89.3505 40.2836 89.6384 48.2773C89.8166 55.9008 89.2957 63.6476 91.8319 71.0517C92.5859 73.1907 93.902 75.2748 94.4367 77.3863C95.3415 82.1167 90.886 83.3096 86.3071 84.667C71.0485 87.6424 72.5977 86.4084 69.8421 72.0252"
            stroke="currentColor"
            strokeWidth="1.62"
            strokeMiterlimit="10"
          />
          <path
            d="M2.9815 125.197C3.03634 120.645 2.78957 115.833 3.22827 111.28C4.07825 101.162 14.2369 94.9778 23.0794 91.6322C26.4382 90.2062 29.1252 88.9859 31.9082 87.5188C34.8832 85.846 36.8162 85.9557 40.0653 88.5609C41.7241 89.8497 43.8354 91.5774 45.9466 92.7291C51.8005 95.8827 58.1479 96.4449 64.1115 93.3735C67.909 91.6733 71.2404 87.0801 74.8871 86.134C77.7934 85.5033 80.8918 86.8881 83.6336 87.8753C88.0892 89.6029 91.7222 90.9878 95.7253 93.5929C108.434 101.354 108.886 111.664 108.338 125.184"
            stroke="currentColor"
            strokeWidth="1.62"
            strokeMiterlimit="10"
          />
        </g>
        <defs>
          <clipPath id="clip0_636_1520">
            <rect width="109.62" height="125.28" fill="white" transform="translate(0.912109)" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: '멘토',
    desc: '(현직자/재학생)',
  },
  {
    type: 'mentee',
    icon: (
      <svg width="112" height="124" viewBox="0 0 112 124" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_636_1536)">
          <path
            d="M55.9143 2.05371L5.51562 21.5749L56.4956 39.6073L106.325 20.5866L55.9143 2.05371Z"
            stroke="currentColor"
            strokeWidth="1.62"
            strokeMiterlimit="10"
          />
          <path
            d="M24.2038 28.2231V42.8544C24.2038 42.8544 37.0292 48.4245 45.4516 49.8235C53.8741 51.2224 59.0067 51.569 67.0705 49.8235C75.1343 48.078 87.23 43.2009 87.23 43.2009V28.2231L56.4837 39.6073L24.1914 28.2231H24.2038Z"
            stroke="currentColor"
            strokeWidth="1.62"
            strokeMiterlimit="10"
          />
          <path d="M102.269 22.3062V51.0039" stroke="currentColor" strokeWidth="1.62" strokeMiterlimit="10" />
          <path
            d="M102.269 59.4619C104.728 59.4619 106.721 57.5657 106.721 55.2266C106.721 52.8874 104.728 50.9912 102.269 50.9912C99.8098 50.9912 97.8164 52.8874 97.8164 55.2266C97.8164 57.5657 99.8098 59.4619 102.269 59.4619Z"
            stroke="currentColor"
            strokeWidth="1.62"
            strokeMiterlimit="10"
          />
          <path
            d="M32.7872 54.7261C32.4656 52.6469 29.485 50.9142 27.6916 52.7624C25.2181 55.0598 25.552 61.2588 27.568 64.2107C28.7553 65.5326 30.9815 66.6107 32.3543 66.4054C32.8985 66.1615 32.8861 65.5968 32.9356 65.0321C32.985 63.9797 32.9479 62.7989 32.9603 61.6181C32.9108 59.539 33.084 56.5229 32.8243 54.8929L32.7872 54.7132V54.7261Z"
            stroke="currentColor"
            strokeWidth="1.62"
            strokeMiterlimit="10"
          />
          <path
            d="M79.0547 54.7261C79.3762 52.6469 82.3569 50.9142 84.1502 52.7624C86.6237 55.0598 86.2898 61.2588 84.2739 64.2107C83.0866 65.5326 80.8603 66.6107 79.4875 66.4054C78.9433 66.1615 78.9557 65.5968 78.9062 65.0321C78.8568 63.9797 78.8939 62.7989 78.8815 61.6181C78.931 59.539 78.7578 56.5229 79.0176 54.8929L79.0547 54.7132V54.7261Z"
            stroke="currentColor"
            strokeWidth="1.62"
            strokeMiterlimit="10"
          />
          <path
            d="M33.0215 46.7304C33.207 55.8171 32.2794 64.0312 34.4809 72.7329C36.8184 81.794 45.1914 89.0711 55.0361 89.6487C61.7271 90.0466 68.4181 86.6069 72.6107 81.5887C80.5509 71.3725 78.6462 57.4214 78.7204 45.5239"
            stroke="currentColor"
            strokeWidth="1.62"
            strokeMiterlimit="10"
          />
          <path
            d="M3.77132 123.236C3.83316 120.31 3.5858 117.204 4.01867 114.29C4.85968 107.783 14.8652 103.805 23.5721 101.649C26.8743 100.737 29.521 99.9416 32.2791 98.9918C35.2102 97.9137 37.1149 97.9779 40.3181 99.6592C41.9507 100.493 44.0408 101.61 46.1062 102.342C51.8696 104.369 58.1153 104.742 64.0024 102.765C67.7498 101.674 71.0149 98.7095 74.614 98.1062C77.4709 97.6955 80.5258 98.5939 83.2219 99.2228C87.6125 100.339 91.1868 101.225 95.1321 102.906C107.648 107.899 108.094 114.534 107.562 123.236"
            stroke="currentColor"
            strokeWidth="1.62"
            strokeMiterlimit="10"
          />
          <path
            d="M43.5592 86.1191C43.5592 86.1191 44.5857 95.1032 39.1562 99.1589"
            stroke="currentColor"
            strokeWidth="1.62"
            strokeMiterlimit="10"
          />
          <path
            d="M67.9728 86.1191C67.9728 86.1191 66.9463 95.1032 72.3757 99.1589"
            stroke="currentColor"
            strokeWidth="1.62"
            strokeMiterlimit="10"
          />
        </g>
        <defs>
          <clipPath id="clip0_636_1536">
            <rect width="111.78" height="123.352" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: '멘티',
    desc: '(유학/취업준비생)',
  },
] as const

export const DOMAIN_LIST = [
  { parentDomain: '디자인', subDomains: ['UX/UX', '그래픽', '브랜드', '제품', '공간', '전시', '패션'] },
  { parentDomain: '시각 예술', subDomains: ['회화', '사진', '일러스트', '조각', '공간', '전시', '패션'] },
  { parentDomain: '공예', subDomains: ['금속', '유리', '도자기', '섬유', '가죽'] },
  { parentDomain: '모션/영상 디자인', subDomains: ['애니메이션', '영상 편집', '모션그래픽', 'VFX'] },
  {
    parentDomain: '게임/인터렉티브 디자인',
    subDomains: [
      '게임 UI/UX 디자인',
      '인터랙션 디자인',
      'XR 인터페이스',
      '배경 아트워크',
      '레벨 디자인',
      '게임 애니메이션',
    ],
  },
  {
    parentDomain: '통합 예술',
    subDomains: ['미디어 아트', '설치 미술', '인터랙티브 아트', '퍼포먼스 아트', '사운드 아트'],
  },
] as const

export const COUNTRY_LIST = [
  { imagePath: '/country/US.png', name: '미국' },
  { imagePath: '/country/GB.png', name: '영국' },
  { imagePath: '/country/DE.png', name: '독일' },
  { imagePath: '/country/FR.png', name: '프랑스' },
  { imagePath: '/country/CA.png', name: '캐나다' },
  { imagePath: '/country/JP.png', name: '일본' },
] as const
