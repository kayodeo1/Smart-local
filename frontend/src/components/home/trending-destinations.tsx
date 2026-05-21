export default function TrendingDestinations() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-2">
            Trending Destinations
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Curated spots based on real-time local activity.
          </p>
        </div>
        <div className="hidden md:flex gap-2">
          <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors cursor-pointer">
            <span className="material-symbols-outlined">arrow_left</span>
          </button>
          <button className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors cursor-pointer">
            <span className="material-symbols-outlined">arrow_right</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-8 group relative rounded-xl overflow-hidden h-[400px] cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Lekki Conservation Centre"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6QBdgCNvLTcLuZFag4fS_No4IJPNOV0n7WoC_HqPiYPstOvCgKX5Q4JhvZirXLSbvIF-f41BbY0jOlh_J5zDD0ochknoOV2JqNj8DJgERuSnlEWjy_4uvTTMqxgQnOpGQhn9EXV2zw7P2puknqMcRClPsjF_AJRBu1BYbDL_21lBTj3LrbnpbIYLO_BKdC9pLB8HHpkMnhkr-W9TE3Horw6HKvxsjqtEsXIE_V8f5T9s5ZVtd03xBCU4nFS-SrvqzULZBe41kVJ5T"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 w-full glass-card border-none bg-white/10 backdrop-blur-md rounded-t-xl rounded-b-none translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-block px-3 py-1 bg-secondary text-on-secondary rounded-full font-label-sm text-label-sm mb-2">
                  98% Match
                </span>
                <h3 className="font-headline-md text-headline-md text-white mb-1">
                  Lekki Conservation Centre
                </h3>
                <p className="font-body-md text-body-md text-white/80 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">
                    location_on
                  </span>{" "}
                  Lagos, Nigeria
                </p>
              </div>
              <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/40 transition-colors cursor-pointer">
                <span className="material-symbols-outlined">bookmark</span>
              </button>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 flex flex-col gap-gutter">
          <div className="group relative rounded-xl overflow-hidden flex-1 cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Nike Art Gallery"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU5qUPpamTSVg_fZjZ8lQtIyGu6W8UkEmJBZTN8IeXLAToxx4sgsTYmOE_GMW0R5d59JmqAf0jrk71JNLmPnMNdGAHjCLEKukuknYMVikghh9iPwnf7C_V9yZyo-TwSCipLcShh5K_RSpSvF-MhCVRu6vqV65Pgt-vMWf8DB4eZMkz0wUpmL0uIxXvn9kbnreaPbFAWUE4WGhM3NlLHmY6RH6VwkCBJKKkauZ9iBN6L_rcDkrpiuuvwWI7gzSrrXK_4mI26Jda_FfG"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 w-full">
              <span className="inline-block px-2 py-0.5 bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-label-sm mb-1">
                92% Match
              </span>
              <h4 className="font-label-md text-label-md text-white font-bold">
                Nike Art Gallery
              </h4>
            </div>
          </div>
          <div className="group relative rounded-xl overflow-hidden flex-1 cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Tarkwa Bay"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWHKuoPkhywp0riNhNGMeqymvjvxvu8aO_Y5hYjtnHQgU3D7QLiQ48THlBBJuJLwE4BEOq9w7e1jrHVOHBQniti6W-lTn0aY4ylN_z1L1XUs4Ax0ufHtZPnBrZwVJQZXLK04iUnRV6vwMJz76WAJKQiiCuoJj8PzhiKGo2aGDOqFqVULPgPVgOD3yTmVgIccHM6nRsw6CkyoWSkMYtvA8BYCkRZSHa3_6anB47Xd_olvoh8cOalDFTcMsUysZz82bnK0aFBngR05DT"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 w-full">
              <span className="inline-block px-2 py-0.5 bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-label-sm mb-1">
                88% Match
              </span>
              <h4 className="font-label-md text-label-md text-white font-bold">
                Tarkwa Bay Beach
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
