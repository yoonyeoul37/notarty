"use client";

import { CheckCircle, CreditCard, Calendar, Star, Shield, Users, Clock } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function PaymentPage() {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const plans = [
    {
      id: 'monthly',
      name: '월간 플랜',
      price: '29,000원',
      period: '월',
      originalPrice: '39,000원',
      discount: '25% 할인',
      features: [
        '무제한 구인공고 등록',
        '1주일 무료 체험',
        '실시간 지원자 관리',
        '이메일 알림 서비스',
        '통계 대시보드'
      ]
    },
    {
      id: 'quarterly',
      name: '분기 플랜',
      price: '79,000원',
      period: '3개월',
      originalPrice: '117,000원',
      discount: '32% 할인',
      features: [
        '무제한 구인공고 등록',
        '1주일 무료 체험',
        '실시간 지원자 관리',
        '이메일 알림 서비스',
        '통계 대시보드',
        '우선 순위 노출',
        '전용 고객 지원'
      ]
    },
    {
      id: 'yearly',
      name: '연간 플랜',
      price: '290,000원',
      period: '년',
      originalPrice: '468,000원',
      discount: '38% 할인',
      features: [
        '무제한 구인공고 등록',
        '1주일 무료 체험',
        '실시간 지원자 관리',
        '이메일 알림 서비스',
        '통계 대시보드',
        '우선 순위 노출',
        '전용 고객 지원',
        '맞춤형 컨설팅',
        '브랜드 페이지'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <h1 className="text-2xl font-bold text-blue-800">노터리</h1>
                <span className="ml-2 text-sm text-gray-600">전문직 사무실 구인구직</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/jobs/new" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                구인등록
              </Link>
              <Link href="/applicants/new" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                구직등록
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 헤더 섹션 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            구인광고 등록 서비스
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            전문직 사무실에 최적화된 구인 서비스로 우수한 인재를 만나보세요
          </p>
          
          {/* 무료 체험 안내 */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Clock className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-blue-900">1주일 무료 체험</h2>
            </div>
            <p className="text-blue-800 text-lg">
              모든 플랜에 <span className="font-bold">1주일 무료 체험</span>이 포함됩니다.
            </p>
          </div>
        </div>

        {/* 플랜 선택 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">플랜 선택</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-lg border-2 p-6 transition-all ${
                  selectedPlan === plan.id
                    ? 'border-blue-500 shadow-xl'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {plan.id === 'yearly' && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      인기
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-gray-500 line-through">{plan.originalPrice}</span>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-bold">
                      {plan.discount}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-3 px-4 rounded-xl font-semibold transition-colors ${
                    selectedPlan === plan.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {selectedPlan === plan.id ? '선택됨' : '선택하기'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 결제 방법 선택 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">결제 방법</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
                paymentMethod === 'card'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setPaymentMethod('card')}
            >
              <div className="flex items-center space-x-3">
                <CreditCard className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">신용카드</h3>
                  <p className="text-sm text-gray-600">Visa, MasterCard, JCB 등</p>
                </div>
              </div>
            </div>
            
            <div
              className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
                paymentMethod === 'transfer'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setPaymentMethod('transfer')}
            >
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">계좌이체</h3>
                  <p className="text-sm text-gray-600">안전한 온라인 뱅킹</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 결제 정보 입력 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">결제 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                카드 번호
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                만료일
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CVC
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="123"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                카드 소유자명
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="홍길동"
              />
            </div>
          </div>
        </div>

        {/* 결제 요약 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">결제 요약</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600">선택한 플랜</span>
              <span className="font-semibold text-gray-900">
                {plans.find(p => p.id === selectedPlan)?.name}
              </span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600">플랜 금액</span>
              <span className="font-semibold text-gray-900">
                {plans.find(p => p.id === selectedPlan)?.price}
              </span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600">1주일 무료 체험</span>
              <span className="text-green-600 font-semibold">무료</span>
            </div>
            <div className="flex justify-between items-center py-3 text-lg font-bold">
              <span className="text-gray-900">총 결제 금액</span>
              <span className="text-blue-600">
                {plans.find(p => p.id === selectedPlan)?.price}
              </span>
            </div>
          </div>
        </div>

        {/* 결제 버튼 */}
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-xl font-bold text-lg shadow-lg transition-colors">
            결제 완료하고 구인공고 등록하기
          </button>
        </div>

        {/* 보안 및 안내 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">보안 결제</h3>
            <p className="text-gray-600 text-sm">SSL 암호화로 안전한 결제</p>
          </div>
          <div className="text-center">
            <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">전용 지원</h3>
            <p className="text-gray-600 text-sm">24/7 고객 지원 서비스</p>
          </div>
          <div className="text-center">
            <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">만족 보장</h3>
            <p className="text-gray-600 text-sm">30일 환불 보장</p>
          </div>
        </div>
      </div>
    </div>
  );
} 