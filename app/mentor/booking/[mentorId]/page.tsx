export default function MentorBookingPage({ params }: { params: { mentorId: string } }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-20">
      <h1 className="text-3xl font-medium text-pretty">멘토 예약 페이지</h1>
      <p className="mt-4 text-lg text-gray-600">멘토 ID: {params.mentorId}</p>
      {/* 여기에 멘토 프로필 관련 컴포넌트를 추가하세요 */}
    </div>
  )
}
