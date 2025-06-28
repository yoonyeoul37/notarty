"use client";

import { MessageCircle, Users, TrendingUp, Calendar, ThumbsUp, MessageSquare, Search, Plus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    { id: 'all', name: '전체', count: 156 },
    { id: 'question', name: '질문', count: 42 },
    { id: 'info', name: '정보공유', count: 38 },
    { id: 'daily', name: '일상', count: 29 },
    { id: 'career', name: '커리어', count: 25 },
    { id: 'humor', name: '유머', count: 22 }
  ];

  const posts = [
    {
      id: 1,
      title: "변호사 사무실에서 일하는 분들 계신가요?",
      content: "새로 입사한 변호사 사무실에서 일하게 되었는데, 처음이라 많이 어색하네요. 선배님들의 조언 부탁드립니다!",
      author: "사무직원A",
      category: "question",
      likes: 15,
      comments: 8,
      views: 234,
      createdAt: "2시간 전",
      isHot: true
    },
    {
      id: 2,
      title: "세무사 사무실 연봉 협상 팁 공유",
      content: "3년차 세무사 사무실에서 연봉 협상을 성공적으로 마쳤습니다. 어떤 점들을 준비했는지 공유해드릴게요.",
      author: "경력자B",
      category: "info",
      likes: 32,
      comments: 12,
      views: 567,
      createdAt: "5시간 전",
      isHot: true
    },
    {
      id: 3,
      title: "회계사 사무실에서 가장 중요한 스킬은?",
      content: "회계사 사무실에서 일하면서 느낀 가장 중요한 스킬들을 정리해봤습니다. 여러분은 어떻게 생각하시나요?",
      author: "회계사무원C",
      category: "career",
      likes: 28,
      comments: 15,
      views: 445,
      createdAt: "1일 전",
      isHot: false
    },
    {
      id: 4,
      title: "법무사 사무실 일상 공유",
      content: "오늘도 바쁜 하루였지만, 동료들과 함께 커피 마시며 힐링하는 시간을 가졌어요. 여러분의 일상은 어떠신가요?",
      author: "법무사무원D",
      category: "daily",
      likes: 18,
      comments: 6,
      views: 189,
      createdAt: "1일 전",
      isHot: false
    },
    {
      id: 5,
      title: "관세사 사무실 면접 후기",
      content: "관세사 사무실 면접을 봤는데, 예상과 달리 실무 중심으로 질문이 나왔어요. 면접 준비하시는 분들 참고하세요!",
      author: "구직자E",
      category: "info",
      likes: 45,
      comments: 20,
      views: 789,
      createdAt: "2일 전",
      isHot: true
    },
    {
      id: 6,
      title: "변리사 사무실에서 일하는 분들 모여요",
      content: "변리사 사무실에서 일하는 분들이 계시면 인사드려요! 서로 정보도 공유하고 도움도 주고받았으면 좋겠어요.",
      author: "변리사무원F",
      category: "daily",
      likes: 22,
      comments: 9,
      views: 312,
      createdAt: "3일 전",
      isHot: false
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const postsPerPage = 10;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

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
              <Link href="/jobs/new" className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                구인등록
              </Link>
              <Link href="/applicants/new" className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                구직등록
              </Link>
              <Link href="/community" className="text-primary-600 font-medium px-3 py-2 rounded-md text-sm">
                커뮤니티
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            사무실 근무자 커뮤니티
          </h1>
          <p className="text-xl text-gray-600">
            전문직 사무실에서 일하는 분들과 정보를 공유하고 소통해보세요
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <Users className="h-8 w-8 text-primary-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">1,234</div>
            <div className="text-gray-600">활성 회원</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">5,678</div>
            <div className="text-gray-600">총 게시글</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <MessageSquare className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">12,345</div>
            <div className="text-gray-600">총 댓글</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">89</div>
            <div className="text-gray-600">오늘 게시글</div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="게시글 검색..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            <Link href="/community/new">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors">
                <Plus className="h-5 w-5" />
                <span>글쓰기</span>
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:w-64">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">카테고리</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex justify-between items-center px-3 py-2 rounded-lg text-left transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-primary-100 text-primary-700 font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="text-sm text-gray-500">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>
            {/* 배너 광고 칸 3개 */}
            <div className="mt-6 flex flex-col gap-4">
              <div className="w-full aspect-square bg-gray-100 rounded-xl shadow flex items-center justify-center">
                <span className="text-gray-400 text-lg">배너 광고 1</span>
              </div>
              <div className="w-full aspect-square bg-gray-100 rounded-xl shadow flex items-center justify-center">
                <span className="text-gray-400 text-lg">배너 광고 2</span>
              </div>
              <div className="w-full aspect-square bg-gray-100 rounded-xl shadow flex items-center justify-center">
                <span className="text-gray-400 text-lg">배너 광고 3</span>
              </div>
            </div>
          </div>

          {/* Main Content - Posts */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* Posts Header */}
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  {selectedCategory === 'all' ? '전체 게시글' : categories.find(c => c.id === selectedCategory)?.name + ' 게시글'}
                </h2>
              </div>

              {/* Posts List */}
              <div className="divide-y divide-gray-200">
                {currentPosts.map((post) => (
                  <div key={post.id} className="p-3 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            post.category === 'question' ? 'bg-blue-100 text-blue-700' :
                            post.category === 'info' ? 'bg-green-100 text-green-700' :
                            post.category === 'daily' ? 'bg-purple-100 text-purple-700' :
                            post.category === 'career' ? 'bg-orange-100 text-orange-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {categories.find(c => c.id === post.category)?.name}
                          </span>
                          {post.isHot && (
                            <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                              HOT
                            </span>
                          )}
                        </div>
                        <Link href={`/community/${post.id}`}>
                          <h3 className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors mb-1">
                            {post.title}
                          </h3>
                        </Link>
                        {/* <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.content}</p> */}
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-4">
                            <span>{post.author}</span>
                            <span>{post.createdAt}</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <ThumbsUp className="h-4 w-4" />
                              <span>{post.likes}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageSquare className="h-4 w-4" />
                              <span>{post.comments}</span>
                            </div>
                            <span>조회 {post.views}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="px-6 py-4 border-t border-gray-200">
                <div className="flex justify-center">
                  <nav className="flex space-x-2">
                    <button
                      className="px-3 py-2 text-gray-500 hover:text-gray-700 rounded-lg"
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                    >
                      이전
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => (
                      <button
                        key={i + 1}
                        className={`px-3 py-2 rounded-lg ${currentPage === i + 1 ? 'bg-primary-600 text-white' : 'text-gray-700 hover:text-gray-900'}`}
                        onClick={() => setCurrentPage(i + 1)}
                      >
                        {i + 1}
                      </button>
                    ))}
                    <button
                      className="px-3 py-2 text-gray-500 hover:text-gray-700 rounded-lg"
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                    >
                      다음
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 