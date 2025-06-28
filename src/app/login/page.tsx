"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    // 실제 로그인 로직은 API 연동 필요
    if (!form.email || !form.password) {
      setError("이메일과 비밀번호를 모두 입력해주세요.");
      setLoading(false);
      return;
    }
    // 데모: 이메일/비번이 admin@notarty.com / 1234면 성공
    if (form.email === "admin@notarty.com" && form.password === "1234") {
      window.location.href = "/";
    } else {
      setError("이메일 또는 비밀번호가 올바르지 않습니다.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 px-8 py-10 w-full max-w-md">
        <h1 className="text-2xl font-bold text-[#1a2341] mb-6 text-center">로그인</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">이메일</label>
            <input 
              type="email" 
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors" 
              placeholder="이메일을 입력하세요" 
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">비밀번호</label>
            <input 
              type="password" 
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition-colors" 
              placeholder="비밀번호를 입력하세요" 
              required 
            />
          </div>
          {error && <div className="text-red-600 text-sm text-center">{error}</div>}
          <button 
            type="submit" 
            className="w-full bg-[#1a2341] hover:bg-[#2563eb] text-white py-3 rounded-xl font-bold text-lg transition-colors disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "로그인 중..." : "로그인"}
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-500">
          아직 회원이 아니신가요?{' '}
          <Link href="/signup" className="text-primary-600 hover:underline font-semibold">회원가입</Link>
        </div>
      </div>
    </div>
  );
} 