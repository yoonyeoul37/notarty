'use client';

import { Search, Building2, Users, MapPin, Briefcase, Calendar, Play, ArrowRight, TrendingUp, Star, Clock, Shield, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [expandedCards, setExpandedCards] = useState<{[key: string]: boolean}>({});

  const toggleCard = (cardId: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

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

      {/* Hero Section with Image Background */}
      <div className="relative h-96 flex items-center justify-center overflow-hidden">
        {/* Image Background */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/business-4189129_1280.jpg')",
            filter: "grayscale(50%) brightness(0.3)"
          }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <p className="text-lg md:text-xl mb-6 text-gray-200">
            전문직 사무실 구인구직의 새로운 기준
          </p>
          <p className="text-base md:text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
            변호사, 세무사, 회계사 등 전문직 사무실과<br />
            전문 사무직원이 함께 성장하는 미래를 만듭니다.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/jobs/new">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg text-base font-semibold transition-colors flex items-center justify-center space-x-2">
                <Building2 className="h-4 w-4" />
                <span>구인등록</span>
              </button>
            </Link>
            <Link href="/applicants/new">
              <button className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg text-base font-semibold transition-colors flex items-center justify-center space-x-2">
                <Users className="h-4 w-4" />
                <span>구직등록</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              왜 노터리를 선택해야 할까요?
            </h2>
            <p className="text-lg text-gray-600">
              전문직 사무실에 특화된 서비스로 더 나은 매칭을 제공합니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Search className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">정확한 매칭</h3>
              <p className="text-sm text-gray-600">
                전문직 사무실 특성에 맞는 정확한 인재 매칭 서비스
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">신뢰성</h3>
              <p className="text-sm text-gray-600">
                검증된 전문직 사무실과 신뢰할 수 있는 구직자
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">효율성</h3>
              <p className="text-sm text-gray-600">
                빠르고 효율적인 구인구직 프로세스
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              합리적인 요금제
            </h2>
            <p className="text-lg text-gray-600">
              1주일 무료 체험으로 시작하세요
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Clock className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-bold text-blue-900">1주일 무료 체험</h3>
            </div>
            <p className="text-blue-800 text-base text-center mb-4">
              모든 플랜에 <span className="font-bold">1주일 무료 체험</span>이 포함됩니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <h4 className="font-bold text-gray-900 mb-1">월간 플랜</h4>
                <p className="text-xl font-bold text-primary-600 mb-1">29,000원</p>
                <p className="text-xs text-gray-600">월</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border-2 border-primary-500">
                <h4 className="font-bold text-gray-900 mb-1">분기 플랜</h4>
                <p className="text-xl font-bold text-primary-600 mb-1">79,000원</p>
                <p className="text-xs text-gray-600">3개월</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <h4 className="font-bold text-gray-900 mb-1">연간 플랜</h4>
                <p className="text-xl font-bold text-primary-600 mb-1">290,000원</p>
                <p className="text-xs text-gray-600">년</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/payment">
              <button className="bg-primary-600 hover:bg-primary-700 text-black px-6 py-3 rounded-lg text-base font-semibold transition-colors">
                요금제 자세히 보기
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-8 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              노터리 현황
            </h2>
            <p className="text-lg text-blue-100">
              전문직 사무실 구인구직의 새로운 기준
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-blue-100">등록된 사무실</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">2,000+</div>
              <div className="text-sm text-blue-100">등록된 구직자</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">1,500+</div>
              <div className="text-sm text-blue-100">성공 매칭</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-sm text-blue-100">만족도</div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Jobs Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              최신 구인공고
            </h2>
            <p className="text-lg text-gray-600">
              전문직 사무실에서 찾는 인재를 만나보세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Job Card 1 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 group overflow-hidden">
              {/* 회사 사진 */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/business-4189129_1280.jpg"
                  alt="회사 사진"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              
              {/* 카드 내용 */}
              <div className="p-6">
                {/* 헤더 */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">변호사 사무실</span>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-600">서울 강남구</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">변호사 사무실 사무직원</h4>
                    <p className="text-sm text-gray-600">김앤파트너스 법률사무소</p>
                  </div>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded font-medium ml-4">신입가능</span>
                </div>

                {/* 급여 정보 */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-500">연봉</span>
                  <span className="text-xs font-medium text-gray-700">2,500만원 ~ 3,000만원</span>
                </div>
                
                {/* 업무 내용 - 기본 2줄, 호버시 전체 표시 */}
                <div className="mb-4 overflow-hidden transition-all duration-300 group-hover:h-auto h-12">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-700">• 송달업무, 송무업무 보조</p>
                    <p className="text-sm text-gray-700">• 컴퓨터 활용 가능, 고객 응대 경험</p>
                    {/* 호버시에만 보이는 추가 내용 */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm text-gray-700">• 성실하고 책임감 있는 분</p>
                      <p className="text-sm text-gray-700">• 원활한 의사소통 능력</p>
                      <p className="text-sm text-gray-700">• 장기근무 가능자</p>
                      <p className="text-sm text-gray-700">• 변호사 사무실 경험</p>
                      <p className="text-sm text-gray-700">• 관련 자격증 보유</p>
                      <p className="text-sm text-gray-700">• 법률 업무 관련 경험</p>
                    </div>
                  </div>
                </div>

                {/* 하단 */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs text-gray-500">2시간 전 등록</span>
                  </div>
                  <Link href="/jobs/1" className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                    상세보기
                  </Link>
                </div>
              </div>
            </div>

            {/* Job Card 2 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 group overflow-hidden">
              {/* 회사 사진 */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/business-4189129_1280.jpg"
                  alt="회사 사진"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              
              {/* 카드 내용 */}
              <div className="p-6">
                {/* 헤더 */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">세무사 사무실</span>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-600">서울 서초구</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">세무사 사무실 회계보조</h4>
                    <p className="text-sm text-gray-600">한국세무회계 사무소</p>
                  </div>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded font-medium ml-4">경력우대</span>
                </div>

                {/* 급여 정보 */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-500">연봉</span>
                  <span className="text-xs font-medium text-gray-700">3,000만원 ~ 3,500만원</span>
                </div>
                
                {/* 업무 내용 - 기본 2줄, 호버시 전체 표시 */}
                <div className="mb-4 overflow-hidden transition-all duration-300 group-hover:h-auto h-12">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-700">• 회계업무 보조, 세무신고 서류 작성</p>
                    <p className="text-sm text-gray-700">• 사무업무 경험, 회계 프로그램 사용</p>
                    {/* 호버시에만 보이는 추가 내용 */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm text-gray-700">• 컴퓨터 활용 가능 (한글, 엑셀 등)</p>
                      <p className="text-sm text-gray-700">• 세무사 사무실 경험</p>
                      <p className="text-sm text-gray-700">• 관련 자격증 보유</p>
                    </div>
                  </div>
                </div>

                {/* 하단 */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs text-gray-500">5시간 전 등록</span>
                  </div>
                  <Link href="/jobs/2" className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                    상세보기
                  </Link>
                </div>
              </div>
            </div>

            {/* Job Card 3 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 group overflow-hidden">
              {/* 회사 사진 */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/business-4189129_1280.jpg"
                  alt="회사 사진"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              
              {/* 카드 내용 */}
              <div className="p-6">
                {/* 헤더 */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">법무사 사무실</span>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-600">부산 해운대구</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">법무사 사무실 행정직원</h4>
                    <p className="text-sm text-gray-600">부산종합법무사 사무소</p>
                  </div>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded font-medium ml-4">신입가능</span>
                </div>

                {/* 급여 정보 */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-500">연봉</span>
                  <span className="text-xs font-medium text-gray-700">2,200만원 ~ 2,500만원</span>
                </div>
                
                {/* 업무 내용 - 기본 2줄, 호버시 전체 표시 */}
                <div className="mb-4 overflow-hidden transition-all duration-300 group-hover:h-auto h-12">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-700">• 행정업무 및 고객 응대</p>
                    <p className="text-sm text-gray-700">• 컴퓨터 활용 가능, 성실하고 책임감</p>
                    {/* 호버시에만 보이는 추가 내용 */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm text-gray-700">• 장기근무 가능자</p>
                      <p className="text-sm text-gray-700">• 원활한 의사소통 능력</p>
                      <p className="text-sm text-gray-700">• 법무사 사무실 경험</p>
                    </div>
                  </div>
                </div>

                {/* 하단 */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs text-gray-500">1일 전 등록</span>
                  </div>
                  <Link href="/jobs/3" className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                    상세보기
                  </Link>
                </div>
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