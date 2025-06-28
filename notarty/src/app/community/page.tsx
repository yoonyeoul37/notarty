"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function CommunityPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['전체', '일반', '업무', '정보공유', '질문', '잡담'];
  
  const posts = [
    {
      id: 1,
      title: '변호사 사무실에서 일하는 분들 계신가요?',
      author: '사무직원A',
      category: '일반',
      likes: 15,
      comments: 8,
      views: 120,
      date: '2024-01-15'
    },
    {
      id: 2,
      title: '세무사 사무실 업무 팁 공유합니다',
      author: '경험자B',
      category: '정보공유',
      likes: 23,
      comments: 12,
      views: 89,
      date: '2024-01-14'
    },
    {
      id: 3,
      title: '특허사무소 면접 준비 어떻게 하시나요?',
      author: '구직자C',
      category: '질문',
      likes: 7,
      comments: 15,
      views: 156,
      date: '2024-01-13'
    },
    {
      id: 4,
      title: '회계사무소 근무 후기',
      author: '현직자D',
      category: '업무',
      likes: 31,
      comments: 6,
      views: 203,
      date: '2024-01-12'
    },
    {
      id: 5,
      title: '오늘 점심 뭐 드셨나요?',
      author: '사무직원E',
      category: '잡담',
      likes: 5,
      comments: 3,
      views: 45,
      date: '2024-01-11'
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === '전체' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const postsPerPage = 10;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">커뮤니티</h1>
              <p className="text-gray-600 mt-2">전문사무실 직원들의 소통 공간</p>
            </div>
            <Link 
              href="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              메인으로
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">카테고리</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Write */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="제목 또는 작성자로 검색..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  글쓰기
                </button>
              </div>
            </div>

            {/* Posts List */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  게시글 목록 ({filteredPosts.length}개)
                </h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {currentPosts.map((post) => (
                  <div key={post.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {post.category}
                          </span>
                          <Link 
                            href={`/community/${post.id}`}
                            className="text-lg font-medium text-gray-900 hover:text-blue-600 cursor-pointer"
                          >
                            {post.title}
                          </Link>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{post.author}</span>
                          <span>{post.date}</span>
                          <span>조회 {post.views}</span>
                          <span>좋아요 {post.likes}</span>
                          <span>댓글 {post.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages >= 1 && (
                <div className="px-6 py-4 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-2">
                    <button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      이전
                    </button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-2 text-sm border rounded-md ${
                          currentPage === page
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                    
                    <button
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      다음
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 