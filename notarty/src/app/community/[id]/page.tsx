import Link from 'next/link';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CommunityPostPage({ params }: PageProps) {
  const resolvedParams = await params;

  // 실제로는 resolvedParams.id를 사용해서 데이터를 가져와야 합니다
  const postData = {
    id: resolvedParams.id,
    title: "변호사 사무실에서 일하는 분들 계신가요?",
    author: "사무직원A",
    category: "일반",
    content: `
안녕하세요! 변호사 사무실에서 일하고 계신 분들 계신가요?

저는 현재 변호사 사무실에서 사무직원으로 일하고 있는데, 다른 사무실에서는 어떤 업무를 하고 계신지 궁금해서 글을 남깁니다.

주로 하는 업무는:
- 송달업무 및 송무업무 보조
- 고객 응대 및 상담
- 서류 정리 및 관리
- 법원 제출 서류 작성 보조

이런 업무들을 하고 있는데, 다른 사무실에서는 어떤 업무를 하고 계신지, 그리고 업무 강도나 급여는 어떤지 궁금합니다.

특히 서울 강남구나 서초구에서 일하고 계신 분들의 경험담을 듣고 싶어요!

혹시 비슷한 경험이 있으시거나 조언해주실 수 있는 분들이 계시면 댓글로 답변 부탁드립니다.

감사합니다!
    `,
    likes: 15,
    comments: [
      {
        id: 1,
        author: "경험자B",
        content: "저도 비슷한 업무를 하고 있어요. 송달업무가 가장 힘들었던 것 같아요.",
        date: "2024-01-15 14:30"
      },
      {
        id: 2,
        author: "현직자C",
        content: "서초구에서 일하고 있는데, 업무 강도는 괜찮아요. 급여는 280만원 정도 받고 있어요.",
        date: "2024-01-15 15:45"
      }
    ],
    views: 120,
    date: "2024-01-15"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <Link href="/community" className="text-blue-600 hover:text-blue-700 mb-2 inline-block">
                ← 커뮤니티로 돌아가기
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">커뮤니티</h1>
            </div>
            <Link 
              href="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              메인으로
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Post Content */}
        <div className="bg-white rounded-lg shadow p-8 mb-8">
          {/* Post Header */}
          <div className="border-b border-gray-200 pb-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {postData.category}
                </span>
                <span className="text-sm text-gray-500">{postData.date}</span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>조회 {postData.views}</span>
                <span>좋아요 {postData.likes}</span>
                <span>댓글 {postData.comments.length}</span>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{postData.title}</h1>
            <p className="text-gray-600">작성자: {postData.author}</p>
          </div>

          {/* Post Content */}
          <div className="prose max-w-none">
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
              {postData.content}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                <span>좋아요</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>공유</span>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-blue-600 transition-colors">수정</button>
              <button className="text-red-600 hover:text-red-700 transition-colors">삭제</button>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-white rounded-lg shadow p-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">댓글 ({postData.comments.length})</h3>

          {/* Comment Form */}
          <div className="mb-8">
            <div className="mb-4">
              <textarea
                placeholder="댓글을 작성해주세요..."
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows={4}
              />
            </div>
            <div className="flex justify-end">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                댓글 작성
              </button>
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-6">
            {postData.comments.map((comment) => (
              <div key={comment.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-900">{comment.author}</span>
                    <span className="text-sm text-gray-500">{comment.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-sm text-gray-500 hover:text-blue-600">답글</button>
                    <button className="text-sm text-gray-500 hover:text-red-600">신고</button>
                  </div>
                </div>
                <p className="text-gray-700">{comment.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 