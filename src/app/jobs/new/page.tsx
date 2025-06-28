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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="예: 김변호사 법무법인"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    직종 *
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent">
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
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent">
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="1"
                      min="1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      경력요구사항 *
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent">
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
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        id="salary-fixed"
                        name="salary-type"
                        value="fixed"
                        className="text-primary-600 focus:ring-primary-500"
                        checked={salaryType === 'fixed'}
                        onChange={() => handleSalaryTypeChange('fixed')}
                      />
                      <label htmlFor="salary-fixed" className="text-sm text-gray-700">
                        급여 범위 설정
                      </label>
                      <input
                        type="radio"
                        id="salary-negotiable"
                        name="salary-type"
                        value="negotiable"
                        className="text-primary-600 focus:ring-primary-500"
                        checked={salaryType === 'negotiable'}
                        onChange={() => handleSalaryTypeChange('negotiable')}
                      />
                      <label htmlFor="salary-negotiable" className="text-sm text-gray-700">
                        협의후결정
                      </label>
                    </div>
                    <div id="salary-range" className={`flex space-x-2 ${salaryType === 'negotiable' ? 'hidden' : ''}`}>
                      <input
                        type="number"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="최소"
                        disabled={salaryType === 'negotiable'}
                      />
                      <span className="flex items-center text-gray-500">~</span>
                      <input
                        type="number"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="최대"
                        disabled={salaryType === 'negotiable'}
                      />
                      <select 
                        className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent">
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">컴퓨터 활용 가능 (한글, 엑셀 등)</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">고객 응대 경험</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">사무업무 경험</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">성실하고 책임감 있는 분</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">원활한 의사소통 능력</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">장기근무 가능자</span>
                      </label>
                    </div>
                    {/* 직접 입력란 */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        추가 자격요건 (선택사항)
                      </label>
                      <textarea
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">변호사 사무실 경험</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">세무사 사무실 경험</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">법무사 사무실 경험</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">회계사 사무실 경험</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">관련 자격증 보유</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">외국어 가능 (영어, 중국어 등)</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">회계 프로그램 사용 경험</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className="ml-2 text-sm text-gray-700">법률 업무 관련 경험</span>
                      </label>
                    </div>
                    {/* 직접 입력란 */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        추가 우대사항 (선택사항)
                      </label>
                      <textarea
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="예: 09:00 ~ 18:00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    근무일
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="담당자 이름"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="010-1234-5678"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  임시저장
                </button>
                <Link href="/payment">
                  <button
                    type="button"
                    className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                  >
                    결제하고 공고 등록하기
                  </button>
                </Link>
              </div>
              <p className="text-xs text-gray-500 text-center">
                * 결제 후 1주일 무료 체험이 시작됩니다.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 