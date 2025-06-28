import { Building2, MapPin, Calendar, DollarSign, FileText, Users, Phone, Mail, Clock, User, Star, Eye, Users as UsersIcon, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  // 실제로는 resolvedParams.id를 사용해서 데이터를 가져와야 합니다
  const jobData = {
    id: resolvedParams.id,
    title: "변호사 사무실 사무직원",
    office: "김변호사 법무법인",
    logo: "/window.svg", // 예시 로고
    companyImage: "/globe.svg", // 회사 이미지
    location: "서울 강남구",
    address: "강남구 테헤란로 123, 4층",
    type: "변호사 사무실",
    experience: "신입가능",
    salary: "250만원 ~ 300만원",
    workType: "정규직",
    workHours: "09:00 ~ 18:00",
    workDays: "월~금",
    headcount: 1,
    contact: {
      name: "김담당",
      phone: "02-1234-5678",
      email: "contact@lawfirm.com"
    },
    mainDuties: [
      "송달업무 및 송무업무 보조",
      "고객 응대 및 상담 보조",
      "사무실 행정업무",
      "서류 정리 및 관리",
      "법원 서류 작성 보조"
    ],
    requirements: [
      "사무용 프로그램 활용 가능자",
      "고객 응대 경험자 우대",
      "책임감 있고 성실한 분"
    ],
    preferred: [
      "법무사 사무실 경험자",
      "관련 자격증 보유자",
      "컴퓨터 활용 능력 우수자"
    ],
    benefits: [
      "4대보험",
      "퇴직연금",
      "점심식대 지원",
      "경조사 지원"
    ],
    postedAt: "2024-06-28",
    deadline: "2024-07-15"
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-[#1a2341] tracking-tight">노터리</h1>
              <span className="ml-2 text-sm text-gray-500">전문직 사무실 구인구직</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/jobs/new" className="text-gray-600 hover:text-[#2563eb] px-3 py-2 rounded-md text-sm font-medium">구인등록</Link>
              <Link href="/applicants/new" className="text-gray-600 hover:text-[#2563eb] px-3 py-2 rounded-md text-sm font-medium">구직등록</Link>
              <button className="text-gray-600 hover:text-[#2563eb] px-3 py-2 rounded-md text-sm font-medium">로그인</button>
              <button className="bg-[#2563eb] hover:bg-[#1a2341] text-white px-4 py-2 rounded-md text-sm font-medium">회원가입</button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* 상단 요약 카드 */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 px-8 py-8 flex flex-col md:flex-row items-center md:items-start md:space-x-8 mb-10">
          <div className="flex-shrink-0 flex flex-col items-center md:items-start w-full md:w-64 mb-6 md:mb-0">
            <div className="w-24 h-24 rounded-2xl bg-[#e5eaf5] flex items-center justify-center mb-4 border border-gray-200">
              <img src={jobData.logo} alt="회사로고" className="w-16 h-16 object-contain" />
            </div>
            <div className="text-xl font-bold text-[#1a2341] mb-1">{jobData.office}</div>
            <div className="text-sm text-gray-500">{jobData.type}</div>
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div>
              <div className="text-2xl font-bold text-[#1a2341] mb-2">{jobData.title}</div>
              <div className="flex items-center text-gray-500 mb-2">
                <MapPin className="h-5 w-5 mr-2 text-[#2563eb]" />
                <span>{jobData.location} | {jobData.address}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="bg-[#e5eaf5] text-[#2563eb] px-3 py-1 rounded-full text-sm font-medium">{jobData.experience}</span>
                <span className="bg-[#f1f5f9] text-gray-700 px-3 py-1 rounded-full text-sm font-medium">{jobData.workType}</span>
              </div>
            </div>
            <div className="flex flex-col space-y-3 justify-center md:items-end">
              <div className="flex items-center text-lg text-[#1a2341] font-semibold">
                <DollarSign className="h-5 w-5 mr-2 text-[#2563eb]" />
                {jobData.salary}
              </div>
              <div className="flex items-center text-gray-500">
                <Calendar className="h-5 w-5 mr-2" />
                {jobData.workDays} / {jobData.workHours}
              </div>
              <button className="mt-2 bg-[#2563eb] hover:bg-[#1a2341] text-white px-8 py-3 rounded-xl font-bold text-lg shadow transition-colors">지원하기</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* 메인 상세 카드 */}
          <div className="lg:col-span-2 space-y-10">
            {/* 회사 소개 섹션 */}
            <div className="bg-white rounded-2xl shadow border border-gray-100 p-8">
              <h2 className="text-xl font-bold text-[#1a2341] mb-6 flex items-center">
                <Building2 className="h-6 w-6 mr-2 text-[#2563eb]" />
                회사 소개
              </h2>
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed mb-4">
                  김변호사 법무법인은 서울 강남구에 위치한 전문 법률사무소로, 쾌적한 근무환경과 체계적인 업무 시스템을 갖추고 있습니다. 
                  신입 및 경력 모두 환영하며, 책임감 있고 성실한 분들의 많은 지원 바랍니다.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-[#2563eb]" />
                    {jobData.address}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-[#2563eb]" />
                    직원 15명
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-[#2563eb]" />
                    설립 2010년
                  </div>
                  <div className="flex items-center">
                    <Building2 className="h-4 w-4 mr-2 text-[#2563eb]" />
                    법무법인
                  </div>
                </div>
              </div>
            </div>

            {/* 주요업무, 자격요건, 우대사항, 복리후생 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-[#1a2341] flex items-center mb-4"><FileText className="h-6 w-6 mr-2 text-[#2563eb]" />주요 업무</h2>
                <ul className="space-y-3">
                  {jobData.mainDuties.map((duty, i) => (
                    <li key={i} className="flex items-start text-gray-700"><CheckCircle className="h-5 w-5 mr-2 text-[#2563eb]" />{duty}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-[#1a2341] flex items-center mb-4"><Users className="h-6 w-6 mr-2 text-[#2563eb]" />자격요건</h2>
                <ul className="space-y-3">
                  {jobData.requirements.map((req, i) => (
                    <li key={i} className="flex items-start text-gray-700"><CheckCircle className="h-5 w-5 mr-2 text-[#2563eb]" />{req}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-[#1a2341] flex items-center mb-4"><Star className="h-6 w-6 mr-2 text-[#2563eb]" />우대사항</h2>
                <ul className="space-y-3">
                  {jobData.preferred.map((pref, i) => (
                    <li key={i} className="flex items-start text-gray-700"><CheckCircle className="h-5 w-5 mr-2 text-[#2563eb]" />{pref}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-[#1a2341] flex items-center mb-4"><DollarSign className="h-6 w-6 mr-2 text-[#2563eb]" />복리후생</h2>
                <ul className="space-y-3">
                  {jobData.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start text-gray-700"><CheckCircle className="h-5 w-5 mr-2 text-[#2563eb]" />{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
            {/* 배너 광고 칸 */}
            <div className="bg-white rounded-2xl shadow border border-gray-100 flex items-center justify-center h-32 mt-8">
              <span className="text-gray-400 text-lg">배너 광고 자리</span>
            </div>
          </div>

          {/* 사이드바 */}
          <div className="space-y-8 lg:sticky lg:top-28">
            {/* 연락처 */}
            <div className="bg-white rounded-2xl shadow border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-[#1a2341] mb-4 flex items-center"><User className="h-5 w-5 mr-2 text-[#2563eb]" />담당자 연락처</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700"><User className="h-4 w-4 mr-2 text-gray-400" />{jobData.contact.name}</div>
                <div className="flex items-center text-gray-700"><Phone className="h-4 w-4 mr-2 text-gray-400" />{jobData.contact.phone}</div>
                <div className="flex items-center text-gray-700"><Mail className="h-4 w-4 mr-2 text-gray-400" />{jobData.contact.email}</div>
              </div>
            </div>
            {/* 공고 정보 */}
            <div className="bg-white rounded-2xl shadow border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-[#1a2341] mb-4 flex items-center"><Eye className="h-5 w-5 mr-2 text-[#2563eb]" />공고 정보</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between"><span>등록일</span><span>{jobData.postedAt}</span></div>
                <div className="flex justify-between"><span>마감일</span><span>{jobData.deadline}</span></div>
                <div className="flex justify-between"><span>조회수</span><span>1,234</span></div>
                <div className="flex justify-between"><span>지원자</span><span>56명</span></div>
              </div>
            </div>
            {/* 관심등록/목록 */}
            <div className="flex flex-col space-y-3">
              <button className="w-full border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#e5eaf5] py-3 rounded-xl font-bold text-lg transition-colors">관심등록</button>
              <Link href="/" className="w-full flex items-center justify-center space-x-2 text-gray-500 hover:text-[#2563eb] py-3 rounded-xl font-bold text-lg border border-gray-200 transition-colors"><ArrowLeft className="h-5 w-5" /><span>목록으로 돌아가기</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 