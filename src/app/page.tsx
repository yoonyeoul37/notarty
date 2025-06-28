import { Search, Building2, Users, MapPin, Briefcase, Calendar, Play, ArrowRight, TrendingUp, Star, Clock, Shield } from 'lucide-react';
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
                <span className="ml-3 text-sm text-gray-300">전문직 사무실 구인구직의 새로운 기준</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/jobs/new" className="text-white hover:text-primary-200 px-3 py-2 rounded-md text-sm font-medium">
                구인등록
              </Link>
              <Link href="/applicants/new" className="text-white hover:text-primary-200 px-3 py-2 rounded-md text-sm font-medium">
                구직등록
              </Link>
              <Link href="/community" className="text-white hover:text-primary-200 px-3 py-2 rounded-md text-sm font-medium">
                커뮤니티
              </Link>
              <Link href="/login" className="bg-[#1a2341] hover:bg-[#2563eb] text-white px-4 py-2 rounded-md text-sm font-bold shadow-lg border border-[#1a2341]">로그인</Link>
              <Link href="/signup" className="bg-[#1a2341] hover:bg-[#2563eb] text-white px-4 py-2 rounded-md text-sm font-bold shadow-lg border border-[#1a2341]">회원가입</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Video Background */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/office-video.mp4" type="video/mp4" />
          {/* Fallback background if video doesn't load */}
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            노터리
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            전문직 사무실 구인구직의 새로운 기준
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
            변호사, 세무사, 회계사 등 전문직 사무실과<br />
            전문 사무직원이 함께 성장하는 미래를 만듭니다.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/jobs/new">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                <Building2 className="h-5 w-5" />
                <span>구인등록</span>
              </button>
            </Link>
            <Link href="/applicants/new">
              <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                <Users className="h-5 w-5" />
                <span>구직등록</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              왜 노터리를 선택해야 할까요?
            </h2>
            <p className="text-xl text-gray-600">
              전문직 사무실에 특화된 서비스로 더 나은 매칭을 제공합니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">정확한 매칭</h3>
              <p className="text-gray-600">
                전문직 사무실 특성에 맞는 
                <br />
                정확한 인재 매칭 서비스
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">신뢰성</h3>
              <p className="text-gray-600">
                검증된 전문직 사무실과 
                <br />
                신뢰할 수 있는 구직자
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">효율성</h3>
              <p className="text-gray-600">
                빠르고 효율적인 
                <br />
                구인구직 프로세스
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              합리적인 요금제
            </h2>
            <p className="text-xl text-gray-600">
              1주일 무료 체험으로 시작하세요
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Clock className="h-8 w-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-blue-900">1주일 무료 체험</h3>
            </div>
            <p className="text-blue-800 text-lg text-center mb-6">
              모든 플랜에 <span className="font-bold">1주일 무료 체험</span>이 포함됩니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 text-center">
                <h4 className="font-bold text-gray-900 mb-2">월간 플랜</h4>
                <p className="text-2xl font-bold text-primary-600 mb-2">29,000원</p>
                <p className="text-sm text-gray-600">월</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center border-2 border-primary-500">
                <h4 className="font-bold text-gray-900 mb-2">분기 플랜</h4>
                <p className="text-2xl font-bold text-primary-600 mb-2">79,000원</p>
                <p className="text-sm text-gray-600">3개월</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <h4 className="font-bold text-gray-900 mb-2">연간 플랜</h4>
                <p className="text-2xl font-bold text-primary-600 mb-2">290,000원</p>
                <p className="text-sm text-gray-600">년</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/payment">
              <button className="bg-primary-600 hover:bg-primary-700 text-black px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                요금제 자세히 보기
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              노터리 현황
            </h2>
            <p className="text-xl text-primary-100">
              지금까지의 성과를 확인해보세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white font-semibold text-lg">등록된 사무실</div>
              <div className="text-blue-200 text-sm mt-1">변호사, 세무사, 회계사 등</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">2,000+</div>
              <div className="text-white font-semibold text-lg">등록된 구직자</div>
              <div className="text-blue-200 text-sm mt-1">전문 사무직원</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">1,500+</div>
              <div className="text-white font-semibold text-lg">성공 매칭</div>
              <div className="text-blue-200 text-sm mt-1">채용 완료 건수</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-white font-semibold text-lg">만족도</div>
              <div className="text-blue-200 text-sm mt-1">고객 만족도</div>
            </div>
          </div>
        </div>
      </div>

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
