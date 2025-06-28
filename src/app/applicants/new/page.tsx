'use client';

import { User, MapPin, Calendar, DollarSign, FileText, Briefcase, GraduationCap, Phone, Mail, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function NewApplicantPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    gender: '',
    location: '',
    phone: '',
    email: '',
    education: '',
    major: '',
    school: '',
    experience: '',
    jobType: '',
    relatedExperience: '',
    minSalary: '',
    maxSalary: '',
    workType: '',
    workLocation: '',
    introduction: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 필수 필드 검증
    const requiredFields = ['name', 'birthDate', 'gender', 'location', 'phone', 'education', 'experience', 'jobType'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      alert('필수 항목을 모두 입력해주세요.');
      return;
    }

    try {
      // 실제로는 API 호출을 통해 서버에 데이터를 전송
      console.log('구직 등록 데이터:', formData);
      
      // 등록 완료 상태로 변경
      setIsSubmitted(true);
      
      // 3초 후 홈으로 이동
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
      
    } catch (error) {
      console.error('등록 실패:', error);
      alert('등록 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  // 등록 완료 화면
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#f7f9fb] flex items-center justify-center">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 px-12 py-16 text-center max-w-md mx-auto">
          <div className="w-20 h-20 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-[#1a2341] mb-4">구직 등록 완료!</h1>
          <p className="text-gray-600 mb-8">
            구직 등록이 성공적으로 완료되었습니다.<br />
            구인업체들이 여러분의 정보를 확인하고 연락드릴 예정입니다.
          </p>
          <div className="space-y-3 text-sm text-gray-500">
            <p>• 등록된 정보는 구인업체에게 공개됩니다</p>
            <p>• 언제든지 정보를 수정할 수 있습니다</p>
            <p>• 3초 후 홈페이지로 이동합니다</p>
          </div>
          <Link 
            href="/" 
            className="inline-block mt-6 bg-[#2563eb] hover:bg-[#1a2341] text-white px-6 py-3 rounded-xl font-medium transition-colors"
          >
            홈으로 바로가기
          </Link>
        </div>
      </div>
    );
  }

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
              <Link href="/applicants/new" className="text-[#2563eb] px-3 py-2 rounded-md text-sm font-medium">구직등록</Link>
              <button className="text-gray-600 hover:text-[#2563eb] px-3 py-2 rounded-md text-sm font-medium">로그인</button>
              <button className="bg-[#2563eb] hover:bg-[#1a2341] text-white px-4 py-2 rounded-md text-sm font-medium">회원가입</button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* 상단 안내 */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 px-8 py-8 mb-10">
          <div className="text-center">
            <div className="w-20 h-20 rounded-2xl bg-[#e5eaf5] flex items-center justify-center mx-auto mb-6">
              <User className="w-10 h-10 text-[#2563eb]" />
            </div>
            <h1 className="text-3xl font-bold text-[#1a2341] mb-4">구직자 등록</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              전문직 사무실에서 일하고 싶은 분들의 구직 의뇨를 등록하세요. 
              신뢰할 수 있는 구인업체들이 여러분을 기다리고 있습니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* 메인 폼 */}
          <div className="lg:col-span-2 space-y-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* 기본 정보 */}
              <div className="bg-white rounded-2xl shadow border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-[#1a2341] mb-6 flex items-center">
                  <User className="h-6 w-6 mr-3 text-[#2563eb]" />
                  기본 정보
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      이름 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors"
                      placeholder="홍길동"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      생년월일 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      성별 <span className="text-red-500">*</span>
                    </label>
                    <select 
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors"
                      required
                    >
                      <option value="">성별 선택</option>
                      <option value="남성">남성</option>
                      <option value="여성">여성</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      희망 지역 <span className="text-red-500">*</span>
                    </label>
                    <select 
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors"
                      required
                    >
                      <option value="">지역 선택</option>
                      <option value="서울">서울</option>
                      <option value="부산">부산</option>
                      <option value="대구">대구</option>
                      <option value="인천">인천</option>
                      <option value="광주">광주</option>
                      <option value="대전">대전</option>
                      <option value="울산">울산</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      연락처 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors"
                      placeholder="010-1234-5678"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      이메일
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>
              </div>

              {/* 학력 정보 */}
              <div className="bg-white rounded-2xl shadow border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-[#1a2341] mb-6 flex items-center">
                  <GraduationCap className="h-6 w-6 mr-3 text-[#2563eb]" />
                  학력 정보
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      최종학력 <span className="text-red-500">*</span>
                    </label>
                    <select 
                      name="education"
                      value={formData.education}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors"
                      required
                    >
                      <option value="">학력 선택</option>
                      <option value="고등학교 졸업">고등학교 졸업</option>
                      <option value="전문대학 졸업">전문대학 졸업</option>
                      <option value="대학교 졸업">대학교 졸업</option>
                      <option value="대학원 졸업">대학원 졸업</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      전공
                    </label>
                    <input
                      type="text"
                      name="major"
                      value={formData.major}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors"
                      placeholder="예: 경영학과, 법학과"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      졸업학교
                    </label>
                    <input
                      type="text"
                      name="school"
                      value={formData.school}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors"
                      placeholder="예: 서울대학교"
                    />
                  </div>
                </div>
              </div>

              {/* 경력 정보 */}
              <div className="bg-white rounded-2xl shadow border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-[#1a2341] mb-6 flex items-center">
                  <Briefcase className="h-6 w-6 mr-3 text-[#2563eb]" />
                  경력 정보
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      총 경력 <span className="text-red-500">*</span>
                    </label>
                    <select 
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors"
                      required
                    >
                      <option value="">경력 선택</option>
                      <option value="신입">신입</option>
                      <option value="1년 미만">1년 미만</option>
                      <option value="1-3년">1-3년</option>
                      <option value="3-5년">3-5년</option>
                      <option value="5-10년">5-10년</option>
                      <option value="10년 이상">10년 이상</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      희망 직종 <span className="text-red-500">*</span>
                    </label>
                    <select 
                      name="jobType"
                      value={formData.jobType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors"
                      required
                    >
                      <option value="">직종 선택</option>
                      <option value="변호사 사무실">변호사 사무실</option>
                      <option value="법무사 사무실">법무사 사무실</option>
                      <option value="세무사 사무실">세무사 사무실</option>
                      <option value="회계사 사무실">회계사 사무실</option>
                      <option value="관세사 사무실">관세사 사무실</option>
                      <option value="변리사 사무실">변리사 사무실</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    관련 경력
                  </label>
                  <textarea
                    name="relatedExperience"
                    value={formData.relatedExperience}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors"
                    placeholder="예: 법무사 사무실에서 2년간 송달업무, 송무업무 보조 경험"
                  />
                </div>
              </div>

              {/* 희망 조건 */}
              <div className="bg-white rounded-2xl shadow border border-gray-100 p-8">
                <h2 className="text-xl font-bold text-[#1a2341] mb-6 flex items-center">
                  <DollarSign className="h-6 w-6 mr-3 text-[#2563eb]" />
                  희망 조건
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      희망 급여
                    </label>
                    <div className="flex space-x-3">
                      <input
                        type="number"
                        name="minSalary"
                        value={formData.minSalary}
                        onChange={handleInputChange}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors"
                        placeholder="최소"
                      />
                      <span className="flex items-center text-gray-500">~</span>
                      <input
                        type="number"
                        name="maxSalary"
                        value={formData.maxSalary}
                        onChange={handleInputChange}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors"
                        placeholder="최대"
                      />
                      <span className="flex items-center text-gray-500">만원</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        희망 근무형태
                      </label>
                      <select 
                        name="workType"
                        value={formData.workType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors"
                      >
                        <option value="">근무형태 선택</option>
                        <option value="정규직">정규직</option>
                        <option value="계약직">계약직</option>
                        <option value="파트타임">파트타임</option>
                        <option value="인턴">인턴</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        희망 근무지역
                      </label>
                      <select 
                        name="workLocation"
                        value={formData.workLocation}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors"
                      >
                        <option value="">지역 선택</option>
                        <option value="서울 전체">서울 전체</option>
                        <option value="강남구">강남구</option>
                        <option value="서초구">서초구</option>
                        <option value="마포구">마포구</option>
                        <option value="종로구">종로구</option>
                        <option value="중구">중구</option>
                        <option value="기타">기타</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      자기소개
                    </label>
                    <textarea
                      name="introduction"
                      value={formData.introduction}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors"
                      placeholder="자신의 강점, 경험, 희망사항 등을 자유롭게 작성해주세요."
                    />
                  </div>
                </div>
              </div>

              {/* 제출 버튼 */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#2563eb] hover:bg-[#1a2341] text-white px-12 py-4 rounded-xl font-bold text-lg shadow-lg transition-colors"
                >
                  구직 등록하기
                </button>
              </div>
            </form>
          </div>

          {/* 사이드바 */}
          <div className="space-y-8 lg:sticky lg:top-28">
            {/* 등록 안내 */}
            <div className="bg-white rounded-2xl shadow border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-[#1a2341] mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-[#2563eb]" />
                등록 안내
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start">
                  <span className="text-[#2563eb] mr-2 mt-1">•</span>
                  <span>등록된 정보는 구인업체에게 공개됩니다</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#2563eb] mr-2 mt-1">•</span>
                  <span>정확한 정보를 입력해주세요</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#2563eb] mr-2 mt-1">•</span>
                  <span>필수 항목은 반드시 작성해주세요</span>
                </div>
                <div className="flex items-start">
                  <span className="text-[#2563eb] mr-2 mt-1">•</span>
                  <span>등록 후 언제든지 수정 가능합니다</span>
                </div>
              </div>
            </div>

            {/* 연락처 */}
            <div className="bg-white rounded-2xl shadow border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-[#1a2341] mb-4 flex items-center">
                <Phone className="h-5 w-5 mr-2 text-[#2563eb]" />
                문의 연락처
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-[#2563eb]" />
                  <span>02-1234-5678</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-[#2563eb]" />
                  <span>support@notarty.com</span>
                </div>
              </div>
            </div>

            {/* 목록으로 돌아가기 */}
            <div className="bg-white rounded-2xl shadow border border-gray-100 p-6">
              <Link href="/" className="flex items-center justify-center space-x-2 text-gray-500 hover:text-[#2563eb] transition-colors">
                <ArrowLeft className="h-5 w-5" />
                <span className="font-medium">목록으로 돌아가기</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 