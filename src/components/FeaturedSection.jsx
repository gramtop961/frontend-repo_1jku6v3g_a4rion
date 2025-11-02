import React from 'react';

const featured = [
  {
    id: 1,
    title: 'Design systems that scale with your product',
    category: 'Design',
    image:
      'https://images.unsplash.com/photo-1551292831-023188e78222?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'AI assistants and the future of creative work',
    category: 'Technology',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'The rituals of high-performing remote teams',
    category: 'Culture',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'A practical guide to mindful productivity',
    category: 'Wellness',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop',
  },
];

const FeaturedSection = () => {
  return (
    <section id="featured" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-indigo-600 font-semibold">Featured</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Editors’ picks</h2>
          </div>
          <div className="hidden sm:block text-sm text-gray-500">Swipe to explore</div>
        </div>

        <div className="mt-6 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]" style={{ WebkitOverflowScrolling: 'touch' }}>
          <div className="flex gap-5 min-w-max pr-4" role="list">
            {featured.map((post) => (
              <article
                key={post.id}
                className="relative w-[80%] sm:w-[360px] h-[280px] sm:h-[300px] flex-shrink-0 overflow-hidden rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <img src={post.image} alt={post.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/10 to-transparent" />
                <div className="absolute bottom-0 p-5 text-white">
                  <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
                    {post.category}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold leading-snug">{post.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
