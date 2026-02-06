'use client';
import Image from "next/image";
import Link from "next/link";

import React, { useState } from 'react';

interface BlogPost {
  id: number;
  slug?: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  readingTime?: string;
  image: string;
  color: string;
}

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Weight Management', 'PCOD Care', 'Diabetes Management', 'Success Stories', 'Nutrition Tips'];

  const posts: BlogPost[] = [
    {
      id: 1,
      slug: 'understanding-pcod-nutrition-strategies',
      category: 'PCOD/PCOS Care',
      date: 'Jan 27, 2026',
      title: 'Understanding PCOD: Nutrition Strategies That Actually Work',
      excerpt: 'Discover evidence-based nutrition strategies that help manage PCOD symptoms naturally. Learn what to eat, what to avoid, and how personalized meal planning can make a real difference.',
      readingTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800',
      color: 'bg-green-100 text-[#217328]'
    },
    {
      id: 2,
      slug: 'monthly-home-visits-nutrition-care-benefits',
      category: 'Nutrition Tips',
      date: 'Feb 6, 2026',
      title: 'Why Monthly Home Visits Make Nutrition Care More Effective',
      excerpt: 'Discover why monthly home visits from a qualified dietician in Gurugram deliver better results than clinic-based nutrition care. Expert insights on effective, convenient nutrition monitoring.',
      readingTime: '9 min read',
      image: '/monthly-home-visits-nutrition-care-benefits.jpg',
      color: 'bg-green-100 text-[#217328]'
    },
    {
      id: 3,
      slug: 'how-to-choose-right-dietitian-health-goals',
      category: 'Nutrition Tips',
      date: 'Feb 6, 2026',
      title: 'How to Choose the Right Nutritionist Dietician Near Me for Your Health Goals',
      excerpt: 'Discover how to find a dietician near me who aligns with your health goals. Learn key factors to consider when selecting a qualified nutritionist dietician for personalized nutrition care.',
      readingTime: '7 min read',
      image: '/how-to-choose-right-dietitian-health-goals.jpg',
      color: 'bg-green-100 text-[#217328]'
    }
  ];

  const filteredPosts = activeCategory === 'All'
    ? posts
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="bg-white min-h-screen pt-[60px]">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=1920"
            alt="Healthy Food Background"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#1E1B4B]/80 backdrop-blur-[2px]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <nav className="flex justify-center items-center gap-2 mb-6 text-[11px] font-bold tracking-[0.2em] uppercase">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-[#217328]">/</span>
            <span className="text-[#217328]">Blog</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            Our <span className="text-[#217328]">Blog</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Expert Nutrition Insights, Tips & Success Stories for Your Health Journey from the top dietitians near me.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-4">Latest Insights</h2>
          <div className="w-20 h-1 bg-[#217328] mx-auto rounded-full"></div>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all ${activeCategory === cat
                ? 'bg-[#217328] text-white shadow-lg shadow-[#217328]/40'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col sm:flex-row"
            >
              {/* Image Container */}
              <div className="sm:w-2/5 relative overflow-hidden h-64 sm:h-auto">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm ${post.color}`}>
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="sm:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-gray-400 text-xs font-bold mb-4 uppercase tracking-tighter">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                    {post.readingTime && (
                      <>
                        <span className="mx-1">•</span>
                        {post.readingTime}
                      </>
                    )}
                  </div>
                  <h3 className="text-xl font-extrabold text-[#1E293B] mb-4 leading-snug group-hover:text-[#217328] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <Link
                  href={post.slug ? `/blog/${post.slug}` : `/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-[#217328] font-black text-xs uppercase tracking-[0.2em] group/btn"
                >
                  Read More
                  <span className="group-hover/btn:translate-x-2 transition-transform">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No articles found in this category. Check back soon!</p>
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#217328] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#ffffff] mb-6">Ready to Start Your Own Success Story?</h2>
          <p className="text-[#ffffff] mb-10 text-lg max-w-xl mx-auto">
            Get personalized nutrition care that actually works with the best nutritionists near me. Book your session today.
          </p>
          <Link
  href="/contact"
  className="bg-[#ffffff] hover:bg-[#ffffff]/80 text-[#217328] px-12 py-4 rounded-2xl font-black text-sm tracking-widest uppercase transition-all shadow-xl shadow-[#217328]/40 active:scale-95 inline-block"
>
  Get Started
</Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
