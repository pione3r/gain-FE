import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="col-span-1">
            <Link href="/">
              <Image src="/logo-white.png" alt="GAIN 로고" width={150} height={60} />
            </Link>
          </div>

          {/* <div className="col-span-2">
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-white font-medium mb-3">회사 정보</h3>
                <ul className="space-y-2 text-sm">
                  <li>대표이사 : 땡땡땡</li>
                  <li>사업자등록번호 : 123-45-67890</li>
                  <li>Tel : 010-4845-9274</li>
                  <li>E-mail : gain-mentoring@gmail.com</li>
                  <li>경기도 의정부시 민락동 123-456번지</li>
                </ul>
              </div>

              <div>
                <ul className="flex gap-4s text-sm">
                  <li>
                    <Link href="/privacy" className="hover:text-white">
                      개인정보처리방침
                    </Link>
                  </li>
                  <li>
                    <Link href="/email-policy" className="hover:text-white">
                      이메일무단수집금지
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-right text-sm text-gray-500">
          <p>COPYRIGHT © 2025 GAIN. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
}
