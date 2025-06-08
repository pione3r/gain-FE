import Chat from '@/components/icons/chat'
import Face from '@/components/icons/face'
import Like from '@/components/icons/like'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface MentorProfilePageParams {
  mentorId: string
}

export default async function MentorProfilePage({ params }: { params: MentorProfilePageParams }) {
  const { mentorId } = await params
  const mentor = {
    id: mentorId,
    name: '정민주',
    title: 'Google UX/UI 디자이너',
    hashTags: ['UX/UI', '미국', '취업'],
    profileImage: '/mentor1.png',
    cumulativeMenteeCount: 34,
    responseTime: '월–금 19:00~22:00 (KST 기준)',
  }

  const portpolio = [
    {
      id: 1,
      mentorId: mentorId,
      title: '포트폴리오1',
    },
    {
      id: 2,
      mentorId: mentorId,
      title: '포트폴리오2',
    },
    {
      id: 3,
      mentorId: mentorId,
      title: '포트폴리오3',
    },
    {
      id: 4,
      mentorId: mentorId,
      title: '포트폴리오4',
    },
  ]

  return (
    <div className="w-ful flex flex-col items-center justify-center py-10 lg:py-20">
      <div className="grid w-full max-w-[1024px] grid-cols-1 flex-col gap-4 px-8 lg:grid-cols-3">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <div className="flex w-full flex-col items-center gap-4 lg:flex-row">
            <div className="relative aspect-square h-44 w-44">
              <Image src={mentor.profileImage} alt={mentor.name} fill className="object-cover" />
            </div>
            <div className="relative flex min-h-44 w-full flex-col justify-between gap-2">
              <h1 className="text-4xl font-medium">{mentor.name}</h1>
              <p className="text-xl font-medium text-[#5A5A5A]">{mentor.title}</p>
              <div className="flex space-x-2">
                {mentor.hashTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#5A5A5A] px-2 py-1 text-xs text-nowrap text-[#5A5A5A]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-0">
                <div className="mb-1 flex flex-row items-center gap-2">
                  <Face />
                  <p className="text-xs text-[#5A5A5A]">누적 멘티수: {mentor.cumulativeMenteeCount}</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <Chat />
                  <p className="text-xs text-[#5A5A5A]">응답 가능 시간: {mentor.responseTime}</p>
                </div>
                <span className="text-[0.5rem] text-pretty text-[#5A5A5A]">
                  *전 세계 다양한 지역에 계신 멘토님들과 연결되므로, 시차로 인해 응답까지 시간이 소요될 수 있습니다.
                </span>
              </div>
              <div className="absolute top-0 right-0">
                <Like width={30} height={28} />
              </div>
              <div className="flex justify-end lg:absolute lg:right-0 lg:bottom-0">
                <Button className="h-auto border border-[#5A5A5A] px-4 py-1" size="sm">
                  <p className="text-sm">문의하기</p>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-red-100">
            <h1 className="text-2xl font-medium">멘토링 후기</h1>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-medium">소개</h1>
            <div className="h-40 w-full bg-slate-100 text-transparent">소개글</div>
          </div>
          <div className="flex flex-col gap-4 bg-red-100 lg:flex-row">
            <div className="flex-1">
              <h1 className="text-2xl font-medium">경력</h1>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-medium">학력</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-medium">나를 대표하는 포트폴리오</h1>
          <div className="flex flex-col items-center justify-center gap-4">
            {portpolio.map((item) => (
              <div key={item.id} className="h-40 w-full bg-slate-100 text-transparent">
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
