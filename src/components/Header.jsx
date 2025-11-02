import React, { useState } from 'react';
import { Menu, X, BookOpen, Search } from 'lucide-react';

const NavLink = ({ children }) => (
  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
    {children}
  </a>
);

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative overflow-hidden">
      {/* Navbar */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-indigo-600 to-sky-500 flex items-center justify-center text-white">
                <BookOpen size={18} />
              </div>
              <span className="text-xl font-semibold tracking-tight">Insight Press</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <NavLink>Home</NavLink>
              <NavLink>Blogs</NavLink>
              <NavLink>About</NavLink>
              <NavLink>Contact</NavLink>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <button className="group hidden sm:flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-sm text-gray-600 hover:border-gray-300 hover:bg-gray-50">
                <Search size={16} className="text-gray-400 group-hover:text-gray-600" />
                <span>Search</span>
              </button>
              <button className="rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black/90">
                Sign In
              </button>
            </div>

            <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden rounded-md p-2 hover:bg-gray-100">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4">
              <NavLink>Home</NavLink>
              <NavLink>Blogs</NavLink>
              <NavLink>About</NavLink>
              <NavLink>Contact</NavLink>
              <button className="mt-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black/90 w-max">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Hero */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-0 bg-gradient-to-br from-indigo-50 via-sky-50 to-white" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/60 px-3 py-1 text-xs text-indigo-700 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                Fresh perspectives, every day
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
                Discover ideas that move the world
              </h1>
              <p className="mt-5 max-w-2xl text-base sm:text-lg text-gray-600 leading-relaxed">
                Insight Press is a modern publication for curious minds — exploring technology, design, culture and the future of work. Read, learn, and share your own perspective.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#featured" className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/90">
                  Read Now
                </a>
                <a href="#subscribe" className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                  Subscribe
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-500/10 to-sky-500/10 border border-gray-100 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop"
                  alt="Insightful reading"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
