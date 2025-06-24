import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="flex w-full flex-col divide-y divide-[#767676] bg-[#06243B] px-6 py-12 text-gray-300 md:px-10 lg:px-20">
      {/* <div className="mx-auto flex max-w-7xl divide-solid divide-gray-500 bg-amber-600 px-6 py-10 md:py-16"> */}
      <div className="flex flex-col gap-8 pb-8 md:flex-row">
        <Link href="/">
          <Image src="/logo-white.png" alt="GAIN 로고" width={150} height={60} />
        </Link>
        <div className="flex-auto">
          <div className="flex flex-col space-x-8 py-2 md:flex-row">
            <h3 className="font-medium text-white">GAIN</h3>
            <h3 className="font-medium text-white">Why</h3>
            <h3 className="font-medium text-white">News Room</h3>
            <h3 className="font-medium text-white">Company</h3>
          </div>
          <p className="divide-x divide-[#767676] text-sm text-[#767676]">
            <span className="pr-2">대표이사 : 땡땡땡</span>
            <span className="pl-2">사업자등록번호 : 123-45-67890</span>
          </p>
          <p className="divide-x divide-[#767676] text-sm text-[#767676]">
            <span className="pr-2">Tel : 010-4845-9274</span>
            <span className="pl-2">E-mail : gain-mentoring@gmail.com</span>
          </p>
          <p className="text-sm text-[#767676]">
            <span>경기도 의정부시 민락동 123-45번지</span>
          </p>
        </div>
        <div>
          <ul className="flex divide-x-2 divide-[#767676] text-sm">
            <li className="pr-2">
              <Link href="/privacy">개인정보처리방침</Link>
            </li>
            <li className="pl-2">
              <Link href="/email-policy" className="text-[#767676]">
                이메일무단수집금지
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-8 text-right text-sm text-[#767676]">
        <p>COPYRIGHT © 2025 GAIN. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  )
}
