import Like from '@/components/icons/like'
import Star from '@/components/icons/star'
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
    <div className="flex w-full flex-col items-center justify-center py-20">
      <div className="flex w-full max-w-[1024px] flex-col items-center space-y-8 px-8">
        <h1 className="text-center text-3xl font-medium text-pretty">멘티님에게 맞는 TOP 3 추천</h1>
        <p className="text-center font-medium text-pretty text-[#BFC1C2]">
          <span>1:1 멘토링으로 나의 포트폴리오 방향부터 디테일까지 리뷰를 받아 보세요.</span>
          <br />
          <span className="text-[#FF7A59]">미국 + UX/UI </span>
          <span>관심을 기준으로 적합한 추천을 받아보세요.</span>
        </p>
        <div className="grid gap-4 lg:grid-cols-2">
          {data.map((mentor) => (
            <div
              key={mentor.id}
              className="flex w-full max-w-md flex-col gap-4 rounded-lg border border-[#767676] bg-white p-6"
            >
              <div className="relative flex justify-between gap-4">
                <div className="relative h-24 w-24">
                  <Image src={mentor.profileImage} alt={mentor.name} fill className="object-cover" />
                </div>
                <div className="flex flex-auto flex-col justify-between">
                  <span className="text-xl font-semibold">{mentor.name}</span>
                  <span className="text-lg font-semibold text-pretty text-[#767676]">{mentor.title}</span>
                  <div className="flex space-x-2">
                    {mentor.hashTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#767676] px-3 py-1 text-sm text-nowrap text-[#767676]"
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
                <div className="text-sm font-medium text-[#767676]">&quot;{mentor.reviewContent}&quot;</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
