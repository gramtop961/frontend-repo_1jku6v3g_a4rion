import React from 'react';

const posts = [
  {
    id: 1,
    title: 'From idea to impact: the art of thoughtful writing',
    excerpt:
      'Turn sparks of curiosity into compelling narratives people love to read.',
    image:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    category: 'Writing',
  },
  {
    id: 2,
    title: 'Interfaces that feel like magic: motion for UI',
    excerpt: 'Use subtle movement to guide focus and create delightful moments.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    category: 'Design',
  },
  {
    id: 3,
    title: 'Building in public: lessons from community-led products',
    excerpt:
      'Transparency builds trust. Here’s how to share progress the right way.',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
    category: 'Product',
  },
  {
    id: 4,
    title: 'Focus rituals for deep work in a noisy world',
    excerpt:
      'Practical techniques to protect attention and ship your best work.',
    image:
      'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1200&auto=format&fit=crop',
    category: 'Wellness',
  },
  {
    id: 5,
    title: 'Understanding LLMs without the math',
    excerpt:
      'A practical introduction to large language models for builders.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    category: 'AI',
  },
  {
    id: 6,
    title: 'The craft of editing: making every word count',
    excerpt:
      'Great writing is rewriting. Here’s a framework for crisp stories.',
    image:
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop',
    category: 'Writing',
  },
  {
    id: 7,
    title: 'Inclusive design as a product advantage',
    excerpt:
      'Design for everyone and you’ll unlock new markets and loyalty.',
    image:
      'https://images.unsplash.com/photo-1529336953121-4ca0a0f5c7b5?q=80&w=1200&auto=format&fit=crop',
    category: 'Design',
  },
  {
    id: 8,
    title: 'Calm productivity: finding momentum without burnout',
    excerpt: 'Sustainable systems for long-term creative output.',
    image:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
    category: 'Wellness',
  },
];

const PostsGrid = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-sky-600 font-semibold">Trending</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Latest insights</h2>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <article key={post.id} className="group overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="inline-flex items-center rounded-full bg-sky-50 text-sky-700 px-3 py-1 text-xs font-medium">
                  {post.category}
                </span>
                <h3 className="mt-3 text-base font-semibold leading-snug text-gray-900 line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
                <div className="mt-4">
                  <button className="text-sm font-medium text-gray-900 hover:text-sky-700">Read more →</button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Subscribe banner */}
        <div id="subscribe" className="mt-14 overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-r from-indigo-50 via-sky-50 to-white">
          <div className="px-6 py-10 sm:px-10">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-widest text-indigo-600 font-semibold">Newsletter</p>
              <h3 className="mt-2 text-2xl font-bold text-gray-900">Join 15,000+ readers — get the best ideas in your inbox</h3>
              <p className="mt-2 text-sm text-gray-600">
                A short weekly email packed with practical insights across tech, design and culture.
              </p>
            </div>
            <form className="mt-6 flex max-w-xl flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-400"
              />
              <button type="submit" className="rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-black/90">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostsGrid;
