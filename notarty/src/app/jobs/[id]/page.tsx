import Link from 'next/link';

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  // 실제로는 resolvedParams.id를 사용해서 데이터를 가져와야 합니다
  const jobData = {
    id: resolvedParams.id,
    title: "변호사 사무실 사무직원",
    office: "김변호사 법무법인",
    logo: "/window.svg", // 예시 로고
    location: "서울 강남구",
    salary: "250만원 ~ 300만원",
    experience: "신입 가능",
    education: "고등학교 졸업 이상",
    workType: "정규직",
    workLocation: "사무실",
    description: `
변호사 사무실에서 근무할 사무직원을 모집합니다.

【주요 업무】
• 송달업무 및 송무업무 보조
• 고객 응대 및 상담
• 서류 정리 및 관리
• 법원 제출 서류 작성 보조
• 기타 사무 보조 업무

【자격 요건】
• 고등학교 졸업 이상
• 컴퓨터 활용 능력 (한글, 엑셀, 워드)
• 성실하고 책임감 있는 분
• 신입 가능 (사무직 경험자 우대)

【근무 조건】
• 근무시간: 월~금 09:00~18:00
• 근무형태: 정규직
• 급여: 250만원 ~ 300만원 (경력에 따라 협의)
• 복리후생: 4대보험, 퇴직연금, 점심식대

【우대사항】
• 법무사무실 경험자
• 컴퓨터 자격증 보유자
• 운전면허 보유자

지원하실 분은 이력서와 자기소개서를 첨부하여 이메일로 보내주시기 바랍니다.
    `,
    contact: {
      name: "김변호사",
      phone: "02-1234-5678",
      email: "recruit@lawfirm.com",
      address: "서울시 강남구 테헤란로 123, 456호"
    },
    benefits: [
      "4대보험",
      "퇴직연금",
      "점심식대",
      "경조사 지원",
      "교육비 지원"
    ],
    requirements: [
      "고등학교 졸업 이상",
      "컴퓨터 활용 능력",
      "성실하고 책임감 있는 분",
      "신입 가능"
    ],
    preferred: [
      "법무사무실 경험자",
      "컴퓨터 자격증 보유자",
      "운전면허 보유자"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <Link href="/" className="text-blue-600 hover:text-blue-700 mb-2 inline-block">
                ← 메인으로
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">구인 상세</h1>
            </div>
            <Link 
              href="/jobs/new"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              구인 등록
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Job Summary Card */}
            <div className="bg-white rounded-lg shadow p-8 mb-8">
              <div className="flex items-start space-x-6">
                <img 
                  src={jobData.logo} 
                  alt="회사 로고" 
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{jobData.title}</h1>
                  <p className="text-xl text-gray-600 mb-4">{jobData.office}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {jobData.location}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                      {jobData.salary}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                      </svg>
                      {jobData.experience}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="bg-white rounded-lg shadow p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">업무 내용</h2>
              <div className="prose max-w-none">
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {jobData.description}
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-lg shadow p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">자격 요건</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">필수 요건</h3>
                  <ul className="space-y-2">
                    {jobData.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">우대사항</h3>
                  <ul className="space-y-2">
                    {jobData.preferred.map((pref, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{pref}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-lg shadow p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">복리후생</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {jobData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">연락처 정보</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">담당자</p>
                    <p className="font-medium text-gray-900">{jobData.contact.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">전화번호</p>
                    <p className="font-medium text-gray-900">{jobData.contact.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">이메일</p>
                    <p className="font-medium text-gray-900">{jobData.contact.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">주소</p>
                    <p className="font-medium text-gray-900">{jobData.contact.address}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="bg-white rounded-lg shadow p-6">
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium">
                    지원하기
                  </button>
                  <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-200 transition-colors font-medium">
                    관심 등록
                  </button>
                  <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-200 transition-colors font-medium">
                    공유하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 