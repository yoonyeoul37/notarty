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

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* 회사 정보 */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <h3 className="text-2xl font-bold text-white">노터리</h3>
                <span className="ml-3 text-sm text-gray-300">전문직 사무실 구인구직</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                변호사, 세무사, 회계사 등 전문직 사무실과 전문 사무직원이 함께 성장하는 
                미래를 만듭니다.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>

            {/* 서비스 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">서비스</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/jobs/new" className="hover:text-white transition-colors">구인등록</a></li>
                <li><a href="/applicants/new" className="hover:text-white transition-colors">구직등록</a></li>
                <li><a href="/community" className="hover:text-white transition-colors">커뮤니티</a></li>
                <li><a href="/payment" className="hover:text-white transition-colors">요금제</a></li>
              </ul>
            </div>

            {/* 고객지원 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">고객지원</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">고객센터</a></li>
                <li><a href="#" className="hover:text-white transition-colors">자주묻는질문</a></li>
                <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
                <li><a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></li>
              </ul>
            </div>
          </div>

          {/* 하단 정보 */}
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                <p>&copy; 2024 노터리. All rights reserved.</p>
              </div>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">이용약관</a>
                <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
                <a href="#" className="hover:text-white transition-colors">쿠키 정책</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 