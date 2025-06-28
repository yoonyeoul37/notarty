import { Search, Building2, Users, MapPin, Briefcase, Calendar, Play, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <h1 className="text-3xl font-bold text-white">노터리</h1>
                <span className="ml-3 text-sm text-gray-300">전문직 사무실 구인구직</span>
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/jobs/new" className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                구인등록
              </Link>
              <Link href="/applicants/new" className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                구직등록
              </Link>
              <button className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                로그인
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-2 rounded-md text-sm font-medium transition-colors">
                회원가입
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 to-gray-900/90 z-10"></div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Main Content */}
        <div className="relative z-20 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              전문직 사무실
              <br />
              <span className="text-primary-400">구인구직 플랫폼</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              변호사, 법무사, 세무사, 회계사, 관세사, 변리사 사무실에서 일하는 
              <br />
              사무직원들의 전문 구인구직 플랫폼입니다.
            </p>
            
            {/* Play Button */}
            <div className="flex justify-center mb-12">
              <button className="group flex items-center space-x-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-gray-900 ml-1" />
                </div>
                <span className="text-lg font-medium">소개 영상 보기</span>
              </button>
            </div>
          </div>

          {/* Main Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* 구인 카드 */}
            <div className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">구인</h3>
                <p className="text-gray-300 mb-6 text-lg">
                  사무실에서 필요한 사무직원을 찾아보세요
                </p>
                <Link href="/jobs/new" className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
                  <span>구인공고 등록</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* 구직 카드 */}
            <div className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">구직</h3>
                <p className="text-gray-300 mb-6 text-lg">
                  전문직 사무실에서 일하고 싶은 분들
                </p>
                <Link href="/applicants/new" className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
                  <span>구직 등록</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="relative bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">원하는 조건으로 검색해보세요</h3>
            <p className="text-lg text-gray-600">지역, 직종, 경력을 선택하여 맞는 공고를 찾아보세요</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg">
                    <option>지역 선택</option>
                    <option>서울</option>
                    <option>부산</option>
                    <option>대구</option>
                    <option>인천</option>
                    <option>광주</option>
                    <option>대전</option>
                    <option>울산</option>
                  </select>
                </div>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg">
                    <option>직종 선택</option>
                    <option>변호사 사무실</option>
                    <option>법무사 사무실</option>
                    <option>세무사 사무실</option>
                    <option>회계사 사무실</option>
                    <option>관세사 사무실</option>
                    <option>변리사 사무실</option>
                  </select>
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg">
                    <option>경력 선택</option>
                    <option>신입</option>
                    <option>1-3년</option>
                    <option>3-5년</option>
                    <option>5년 이상</option>
                  </select>
                </div>
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-medium text-lg flex items-center justify-center transition-colors">
                  <Search className="h-6 w-6 mr-2" />
                  검색
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-primary-600 mb-2">1,234</div>
              <div className="text-gray-600 text-lg">등록된 사무실</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-primary-600 mb-2">5,678</div>
              <div className="text-gray-600 text-lg">등록된 구직자</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-primary-600 mb-2">9,876</div>
              <div className="text-gray-600 text-lg">성공 매칭</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Jobs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900">최신 구인공고</h3>
            <div className="flex space-x-4">
              <Link href="/jobs/new" className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl text-sm font-medium transition-colors">
                구인공고 등록
              </Link>
              <button className="text-primary-600 hover:text-primary-700 font-medium text-lg">
                더보기 →
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Job Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">변호사 사무실 사무직원</h4>
                  <p className="text-gray-600">서울 강남구</p>
                </div>
                <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-medium">신입가능</span>
              </div>
              <div className="space-y-3 mb-6">
                <p className="text-gray-600">• 송달업무, 송무업무 보조</p>
                <p className="text-gray-600">• 고객 응대 및 사무 보조</p>
                <p className="text-gray-600 font-medium">• 월급 250만원 ~ 300만원</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">2시간 전</span>
                <Link href="/jobs/1" className="text-primary-600 hover:text-primary-700 font-medium">
                  상세보기
                </Link>
              </div>
            </div>

            {/* Job Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">세무사 사무실 회계보조</h4>
                  <p className="text-gray-600">서울 서초구</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">경력우대</span>
              </div>
              <div className="space-y-3 mb-6">
                <p className="text-gray-600">• 회계업무 보조</p>
                <p className="text-gray-600">• 세무신고 서류 작성</p>
                <p className="text-gray-600 font-medium">• 월급 300만원 ~ 350만원</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">5시간 전</span>
                <Link href="/jobs/2" className="text-primary-600 hover:text-primary-700 font-medium">
                  상세보기
                </Link>
              </div>
            </div>

            {/* Job Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">법무사 사무실 행정직원</h4>
                  <p className="text-gray-600">부산 해운대구</p>
                </div>
                <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-medium">신입가능</span>
              </div>
              <div className="space-y-3 mb-6">
                <p className="text-gray-600">• 행정업무 및 고객 응대</p>
                <p className="text-gray-600">• 서류 정리 및 관리</p>
                <p className="text-gray-600 font-medium">• 월급 220만원 ~ 250만원</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">1일 전</span>
                <Link href="/jobs/3" className="text-primary-600 hover:text-primary-700 font-medium">
                  상세보기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">노터리</h3>
              <p className="text-gray-300 text-sm">
                전문직 사무실 구인구직 플랫폼
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">서비스</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>구인공고 등록</li>
                <li>구직자 등록</li>
                <li>매칭 서비스</li>
                <li>커뮤니티</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">지원</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>고객센터</li>
                <li>이용약관</li>
                <li>개인정보처리방침</li>
                <li>자주묻는질문</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">연락처</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>이메일: contact@notarty.com</li>
                <li>전화: 02-1234-5678</li>
                <li>주소: 서울시 강남구</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-300">
            © 2024 노터리. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
