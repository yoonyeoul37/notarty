"use client";

import { Building2, MapPin, Calendar, DollarSign, FileText, Users } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function NewJobPage() {
  const [salaryType, setSalaryType] = useState('fixed');

  const handleSalaryTypeChange = (type: string) => {
    setSalaryType(type);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <h1 className="text-2xl font-bold text-primary-800">노터리</h1>
                <span className="ml-2 text-sm text-gray-600">전문직 사무실 구인구직</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/jobs/new" className="text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                구인등록
              </Link>
              <Link href="/applicants/new" className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                구직등록
              </Link>
              <button className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                로그인
              </button>
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                회원가입
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">구인공고 등록</h2>
            <p className="text-gray-600">사무실에서 필요한 사무직원을 찾아보세요.</p>
          </div>

          <form className="space-y-6">
            {/* 사무실 정보 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Building2 className="h-5 w-5 mr-2 text-primary-600" />
                사무실 정보
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    사무실명 *
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="예: 김변호사 법무법인"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    직종 *
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option>직종 선택</option>
                    <option>변호사 사무실</option>
                    <option>법무사 사무실</option>
                    <option>세무사 사무실</option>
                    <option>회계사 사무실</option>
                    <option>관세사 사무실</option>
                    <option>변리사 사무실</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    지역 *
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    상세주소
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="예: 강남구 테헤란로 123"
                  />
                </div>
              </div>
            </div>

            {/* 구인 정보 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2 text-primary-600" />
                구인 정보
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      모집인원 *
                    </label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="1"
                      min="1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      경력요구사항 *
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                      <option>경력 선택</option>
                      <option>신입</option>
                      <option>1-3년</option>
                      <option>3-5년</option>
                      <option>5년 이상</option>
                      <option>경력무관</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    급여 *
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-6">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="salary-type"
                          value="fixed"
                          className="text-primary-600 focus:outline-none focus:ring-primary-500 mr-2"
                          checked={salaryType === 'fixed'}
                          onChange={() => handleSalaryTypeChange('fixed')}
                        />
                        <span className="text-sm text-gray-700">급여 범위 설정</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="salary-type"
                          value="negotiable"
                          className="text-primary-600 focus:outline-none focus:ring-primary-500 mr-2"
                          checked={salaryType === 'negotiable'}
                          onChange={() => handleSalaryTypeChange('negotiable')}
                        />
                        <span className="text-sm text-gray-700">협의후결정</span>
                      </label>
                    </div>
                    <div id="salary-range" className={`flex space-x-2 ${salaryType === 'negotiable' ? 'hidden' : ''}`}>
                      <input
                        type="number"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="최소"
                        disabled={salaryType === 'negotiable'}
                      />
                      <span className="flex items-center text-gray-500">~</span>
                      <input
                        type="number"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="최대"
                        disabled={salaryType === 'negotiable'}
                      />
                      <select 
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        disabled={salaryType === 'negotiable'}
                      >
                        <option>만원</option>
                        <option>천원</option>
                      </select>
                    </div>
                    {salaryType === 'negotiable' && (
                      <div className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-md">
                        채용 후 협의를 통해 급여를 결정합니다.
                      </div>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      근무형태 *
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                      <option>근무형태 선택</option>
                      <option>정규직</option>
                      <option>계약직</option>
                      <option>인턴</option>
                      <option>아르바이트</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      근무지역
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="예: 서울 강남구"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 업무 내용 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="h-5 w-5 mr-2 text-primary-600" />
                업무 내용
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    주요 업무 *
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="예: 송달업무, 송무업무 보조, 고객 응대, 사무 보조 등"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    자격요건
                  </label>
                  <div className="space-y-4">
                    {/* 체크박스 옵션들 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <label className="flex items-center cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:outline-none focus:ring-primary-500 mr-2" />
                        <span className="text-sm text-gray-700">컴퓨터 활용 가능 (한글, 엑셀 등)</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:outline-none focus:ring-primary-500 mr-2" />
                        <span className="text-sm text-gray-700">고객 응대 경험</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:outline-none focus:ring-primary-500 mr-2" />
                        <span className="text-sm text-gray-700">사무업무 경험</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:outline-none focus:ring-primary-500 mr-2" />
                        <span className="text-sm text-gray-700">성실하고 책임감 있는 분</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:outline-none focus:ring-primary-500 mr-2" />
                        <span className="text-sm text-gray-700">원활한 의사소통 능력</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:outline-none focus:ring-primary-500 mr-2" />
                        <span className="text-sm text-gray-700">장기근무 가능자</span>
                      </label>
                    </div>
                    {/* 직접 입력란 */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        추가 자격요건 (선택사항)
                      </label>
                      <textarea
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="위에 없는 특별한 자격요건이 있다면 입력해주세요"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    우대사항
                  </label>
                  <div className="space-y-4">
                    {/* 체크박스 옵션들 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <label className="flex items-center cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:outline-none focus:ring-primary-500 mr-2" />
                        <span className="text-sm text-gray-700">변호사 사무실 경험</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:outline-none focus:ring-primary-500 mr-2" />
                        <span className="text-sm text-gray-700">세무사 사무실 경험</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:outline-none focus:ring-primary-500 mr-2" />
                        <span className="text-sm text-gray-700">법무사 사무실 경험</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:outline-none focus:ring-primary-500 mr-2" />
                        <span className="text-sm text-gray-700">회계사 사무실 경험</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:outline-none focus:ring-primary-500 mr-2" />
                        <span className="text-sm text-gray-700">관련 자격증 보유</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:outline-none focus:ring-primary-500 mr-2" />
                        <span className="text-sm text-gray-700">외국어 가능 (영어, 중국어 등)</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:outline-none focus:ring-primary-500 mr-2" />
                        <span className="text-sm text-gray-700">회계 프로그램 사용 경험</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:outline-none focus:ring-primary-500 mr-2" />
                        <span className="text-sm text-gray-700">법률 업무 관련 경험</span>
                      </label>
                    </div>
                    {/* 직접 입력란 */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        추가 우대사항 (선택사항)
                      </label>
                      <textarea
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="위에 없는 특별한 우대사항이 있다면 입력해주세요"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 근무 조건 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary-600" />
                근무 조건
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    근무시간
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="예: 09:00 ~ 18:00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    근무일
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="예: 월~금"
                  />
                </div>
              </div>
            </div>

            {/* 연락처 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">연락처 정보</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    담당자명 *
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="담당자 이름"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="010-1234-5678"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>
              </div>
            </div>

            {/* 구직자 배려 안내 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-800">
                    <strong>구직자 배려 안내:</strong> 채용이 완료되면 구직자들의 효율적인 정보 접근을 위해 
                    <span className="font-semibold text-blue-900"> 공고를 마감해주시기 바랍니다.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* 결제 안내 */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-800">
                    <strong>결제 안내:</strong> 구인공고 등록은 
                    <span className="font-semibold text-green-900"> 1주일 무료 체험</span> 후 
                    <span className="font-semibold text-green-900"> 월 29,000원</span>부터 시작됩니다.
                    <br />
                    <span className="text-xs text-green-600 mt-1 block">
                      • 1주일 무료 체험 후 자동 결제 시작 (언제든지 취소 가능)
                      • 월간/분기/연간 플랜 선택 가능
                      • 만족하지 않으시면 30일 내 환불 보장
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* 버튼 */}
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <div className="flex justify-center space-x-4">
                <button
                  type="button"
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  임시저장
                </button>
                <button
                  type="button"
                  onClick={() => window.location.href = '/payment'}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold border border-blue-600"
                >
                  결제하고 공고 등록하기
                </button>
              </div>
              <p className="text-xs text-gray-500 text-center">
                * 결제 후 1주일 무료 체험이 시작됩니다.
              </p>
            </div>
          </form>
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