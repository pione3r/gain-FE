'use client'
import { useState } from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import Like from '@/components/icons/like'
import Star from '@/components/icons/star'
import { Button } from '@/components/ui/button'
import { X, Plus } from 'lucide-react'
import Image from 'next/image'

type RecommandMentor = {
  id: string
  name: string
  title: string
  hashTags: string[]
  profileImage: string
  starRate: number
  reviewCount: number
  reviewContent: string
}

export default function RecommandPage() {
  const [showAddFilterTooltip, setShowAddFilterTooltip] = useState<boolean>(true)
  const data: RecommandMentor[] = [
    {
      id: '1',
      name: '정민주',
      title: 'Google UX/UI 디자이너',
      hashTags: ['UX/UI', '미국', '취업'],
      profileImage: '/mentor1.png',
      starRate: 4.9,
      reviewCount: 773,
      reviewContent: '현직자가 직접 첨삭해줘서 큰 도움됐어요',
    },
    {
      id: '2',
      name: '이영희',
      title: 'Google UX/UI 디자이너',
      hashTags: ['UX/UI', '미국', '취업'],
      profileImage: '/mentor2.png',
      starRate: 4.9,
      reviewCount: 900,
      reviewContent: '실제로 면접 준비에 큰 도움이 됐어요',
    },
    {
      id: '3',
      name: '박철수',
      title: 'Google UX/UI 디자이너',
      hashTags: ['UX/UI', '미국', '취업'],
      profileImage: '/mentor3.png',
      starRate: 4.7,
      reviewCount: 530,
      reviewContent: '실제 구직자 입장에서 피드백을 해주셔서 좋았어요.',
    },
  ]

  return (
    <div className="w-ful flex flex-col items-center justify-center py-10 lg:py-20">
      <div className="flex w-full max-w-[1024px] flex-col items-center px-8">
        <h1 className="mb-8 text-center text-3xl font-medium text-pretty">멘티님에게 맞는 TOP 3 추천</h1>
        <p className="text-center font-medium text-pretty text-[#BFC1C2]">
          <span>1:1 멘토링으로 나의 포트폴리오 방향부터 디테일까지 리뷰를 받아 보세요.</span>
          <br />
          <span className="text-[#FF7A59]">미국 + UX/UI </span>
          <span>관심을 기준으로 적합한 추천을 받아보세요.</span>
        </p>
        <div className="relative mb-8 flex w-full flex-col items-end">
          {/* 공간은 항상 존재, 내용만 숨김 */}
          <div
            className={cn(
              'relative rounded-xl bg-[#464646] px-4 py-3 text-sm text-white transition-opacity duration-300',
              showAddFilterTooltip ? 'opacity-100' : 'pointer-events-none opacity-0',
            )}
          >
            <button className="absolute top-2 right-2 text-white" onClick={() => setShowAddFilterTooltip(false)}>
              <X className="h-4 w-4" />
            </button>
            <p className="text-xs">TOP 3 추천 결과가 마음에 들지 않나요?</p>
            <p className="text-xs">목표 학교나 회사 등을 추가해 더욱 정밀한 추천을 받아보세요.</p>
            <div className="absolute top-full left-[90%] -ml-2 h-0 w-0 border-x-8 border-t-8 border-x-transparent border-t-[#464646]" />
          </div>

          <Button className="mt-3 w-fit gap-1 border border-[#767676]" size="sm">
            <p className="text-sm">관심 조건 추가하기</p>
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid w-full gap-4 lg:grid-cols-3">
          {data.map((mentor) => (
            <div
              key={mentor.id}
              className="flex w-full flex-col items-center gap-2 rounded-lg border border-[#5A5A5A] bg-white p-6"
            >
              <div className="relative flex justify-between gap-4">
                <div className="relative aspect-square h-22 w-22">
                  <Image src={mentor.profileImage} alt={mentor.name} fill className="object-cover" />
                </div>
                <div className="flex flex-auto flex-col justify-between">
                  <span className="text-lg font-medium">{mentor.name} 멘토</span>
                  <span className="text-sm font-medium text-pretty text-[#767676]">{mentor.title}</span>
                  <div className="flex space-x-2">
                    {mentor.hashTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#767676] px-2 py-1 text-xs text-nowrap text-[#767676]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute top-0 right-0">
                  <Like />
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex w-24 items-center justify-center space-x-1">
                  <Star />
                  <span className="text-sm">{mentor.starRate}</span>
                  <span className="text-sm">({mentor.reviewCount})</span>
                </div>
                <div className="text-xs font-medium text-[#767676]">&quot;{mentor.reviewContent}&quot;</div>
              </div>
              <Link href={`/mentor/profile/${mentor.id}`} className="flex w-full flex-col items-center">
                <Button className="mt-2 w-2/3 rounded-xl bg-[#D9D9D9]" size={'sm'}>
                  프로필 상세 보기기
                </Button>
              </Link>
              <Link href={`/mentor/booking/${mentor.id}`} className="flex w-full flex-col items-center">
                <Button className="w-2/3 rounded-xl bg-[#FF7A59] text-white" size={'sm'}>
                  멘토 매칭 시작
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
