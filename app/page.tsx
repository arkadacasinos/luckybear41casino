import Image from 'next/image'

const REF_URL = 'https://comboflo.site/aeaofj2k27'

export default function Page() {
  return (
    <div className="lb41-layout">
      {/* Mobile Drawer (CSS :target based) */}
      <div id="lb-drawer" className="hidden target:flex fixed inset-0 z-50">
        <a href="#!" className="fixed inset-0 bg-black/80 backdrop-blur-xs" aria-label="Закрыть меню" />
        <aside className="relative w-72 max-w-[85vw] bg-[#0e1424] border-r border-white/10 h-full flex flex-col p-4 z-10 overflow-y-auto">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <a href={REF_URL} className="flex items-center gap-2.5 text-white font-extrabold text-lg tracking-wider">
              <span className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-blue-600/30 border border-blue-400/40">
                <Image src="/images/bear-logo.png" alt="Lucky Bear Casino" width={32} height={32} className="object-contain" priority />
              </span>
              <span>LUCKY<span className="text-blue-500">BEAR</span></span>
            </a>
            <a href="#!" className="p-2 text-slate-400 hover:text-white text-xl leading-none" aria-label="Закрыть">✕</a>
          </div>

          <div className="flex gap-1.5 my-4 p-1 bg-[#141b2e] rounded-lg">
            <a href={REF_URL} className="lb41-tab-btn lb41-tab-active">Казино</a>
            <a href={REF_URL} className="lb41-tab-btn lb41-tab-inactive">Спорт</a>
          </div>

          <nav className="flex flex-col gap-1">
            <a href={REF_URL} className="lb41-nav-item lb41-nav-active">
              <span className="w-5 text-center">🏠</span>
              <span>Главная</span>
            </a>
            <a href={REF_URL} className="lb41-nav-item">
              <span className="w-5 text-center">🎰</span>
              <span>Слоты</span>
            </a>
            <a href={REF_URL} className="lb41-nav-item">
              <span className="w-5 text-center">⚡</span>
              <span>Быстрые игры</span>
            </a>
            <a href={REF_URL} className="lb41-nav-item">
              <span className="w-5 text-center">🔥</span>
              <span>Популярные</span>
            </a>
            <a href={REF_URL} className="lb41-nav-item">
              <span className="w-5 text-center">🎁</span>
              <span>Покупка Бонуса</span>
            </a>
            <a href={REF_URL} className="lb41-nav-item">
              <span className="w-5 text-center">✨</span>
              <span>Новинки</span>
            </a>
            <a href={REF_URL} className="lb41-nav-item">
              <span className="w-5 text-center">🎥</span>
              <span>Live-игры</span>
            </a>
          </nav>

          <div className="my-4 border-t border-white/5" />

          <nav className="flex flex-col gap-1">
            <a href={REF_URL} className="lb41-nav-item">
              <span className="w-5 text-center">📢</span>
              <span>Пригласить</span>
            </a>
            <a href={REF_URL} className="lb41-nav-item">
              <span className="w-5 text-center">⭐</span>
              <span>Бонусы</span>
            </a>
            <a href={REF_URL} className="lb41-nav-item">
              <span className="w-5 text-center">💳</span>
              <span>Пополнить</span>
            </a>
            <a href={REF_URL} className="lb41-nav-item">
              <span className="w-5 text-center">👤</span>
              <span>Профиль</span>
            </a>
          </nav>

          <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <div className="flex gap-2">
              <a href={REF_URL} className="w-7 h-7 rounded-md bg-[#141b2e] flex items-center justify-center hover:text-white">VK</a>
              <a href={REF_URL} className="w-7 h-7 rounded-md bg-[#141b2e] flex items-center justify-center hover:text-white">𝕏</a>
              <a href={REF_URL} className="w-7 h-7 rounded-md bg-[#141b2e] flex items-center justify-center hover:text-white">IG</a>
            </div>
            <span className="flex items-center gap-1.5 px-2 py-1 bg-[#141b2e] rounded border border-white/5">
              <span>🇷🇺</span>
              <span className="font-semibold text-slate-200">RU</span>
            </span>
          </div>
        </aside>
      </div>

      {/* Desktop Sidebar (Left Rail) */}
      <aside className="lb41-sidebar">
        <div className="p-4 border-b border-white/5">
          <a href={REF_URL} className="flex items-center gap-2.5 text-white font-extrabold text-base tracking-wider">
            <span className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-blue-600/30 border border-blue-400/40 shrink-0">
              <Image src="/images/bear-logo.png" alt="Lucky Bear Casino" width={32} height={32} className="object-contain" priority />
            </span>
            <span className="text-white tracking-wide">LUCKY<span className="text-blue-500">BEAR</span></span>
          </a>
        </div>

        <div className="p-3">
          <div className="flex gap-1.5 p-1 bg-[#141b2e] rounded-lg">
            <a href={REF_URL} className="lb41-tab-btn lb41-tab-active">Казино</a>
            <a href={REF_URL} className="lb41-tab-btn lb41-tab-inactive">Спорт</a>
          </div>
        </div>

        <nav className="flex flex-col gap-0.5 px-2 py-1">
          <a href={REF_URL} className="lb41-nav-item lb41-nav-active">
            <span className="text-base">🏠</span>
            <span>Главная</span>
          </a>
          <a href={REF_URL} className="lb41-nav-item">
            <span className="text-base">🎰</span>
            <span>Слоты</span>
          </a>
          <a href={REF_URL} className="lb41-nav-item">
            <span className="text-base">⚡</span>
            <span>Быстрые игры</span>
          </a>
          <a href={REF_URL} className="lb41-nav-item">
            <span className="text-base">🔥</span>
            <span>Популярные</span>
          </a>
          <a href={REF_URL} className="lb41-nav-item">
            <span className="text-base">🎁</span>
            <span>Покупка Бонуса</span>
          </a>
          <a href={REF_URL} className="lb41-nav-item">
            <span className="text-base">✨</span>
            <span>Новинки</span>
          </a>
          <a href={REF_URL} className="lb41-nav-item">
            <span className="text-base">🎥</span>
            <span>Live-игры</span>
          </a>
        </nav>

        <div className="my-2 border-t border-white/5 mx-3" />

        <nav className="flex flex-col gap-0.5 px-2 py-1">
          <a href={REF_URL} className="lb41-nav-item">
            <span className="text-base">📢</span>
            <span>Пригласить</span>
          </a>
          <a href={REF_URL} className="lb41-nav-item">
            <span className="text-base">⭐</span>
            <span>Бонусы</span>
          </a>
          <a href={REF_URL} className="lb41-nav-item">
            <span className="text-base">💳</span>
            <span>Пополнить</span>
          </a>
          <a href={REF_URL} className="lb41-nav-item">
            <span className="text-base">👤</span>
            <span>Профиль</span>
          </a>
        </nav>

        <div className="mt-auto p-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
          <div className="flex gap-1.5">
            <a href={REF_URL} className="w-6 h-6 rounded bg-[#141b2e] flex items-center justify-center hover:text-white text-[10px]">VK</a>
            <a href={REF_URL} className="w-6 h-6 rounded bg-[#141b2e] flex items-center justify-center hover:text-white text-[10px]">𝕏</a>
            <a href={REF_URL} className="w-6 h-6 rounded bg-[#141b2e] flex items-center justify-center hover:text-white text-[10px]">IG</a>
          </div>
          <span className="flex items-center gap-1.5 px-2 py-1 bg-[#141b2e] rounded border border-white/5 cursor-pointer">
            <span>🇷🇺</span>
            <span className="font-semibold text-slate-200 text-[11px]">RU</span>
            <span className="text-[9px] text-slate-500">▼</span>
          </span>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="lb41-main">
        {/* Top Header */}
        <header className="lb41-header">
          <div className="flex items-center gap-2">
            {/* Mobile Hamburger Button */}
            <a href="#lb-drawer" className="lg:hidden p-2 rounded-lg bg-[#141b2e] text-slate-300 hover:text-white" aria-label="Открыть меню">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </a>

            {/* Mobile Brand */}
            <a href={REF_URL} className="lg:hidden flex items-center gap-2 text-white font-bold text-sm">
              <span className="w-7 h-7 rounded-md overflow-hidden bg-blue-600/30 border border-blue-400/40 flex items-center justify-center">
                <Image src="/images/bear-logo.png" alt="Lucky Bear" width={28} height={28} priority />
              </span>
              <span>LUCKY<span className="text-blue-500">BEAR</span></span>
            </a>

            {/* Desktop Navigation Badges */}
            <div className="hidden lg:flex items-center gap-2">
              <a href={REF_URL} className="lb41-pill-btn">
                <span>🎟️</span>
                <span>Призовой пул</span>
              </a>
              <a href={REF_URL} className="lb41-pill-btn">
                <span>🕒</span>
                <span>История</span>
              </a>
              <a href={REF_URL} className="lb41-pill-btn">
                <span>🤍</span>
                <span>Избранное</span>
              </a>
              <a href={REF_URL} className="lb41-pill-btn">
                <span>🎁</span>
                <span>Промокод</span>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a href={REF_URL} className="lb41-btn-primary text-xs sm:text-sm px-3 sm:px-4.5 py-2">
              <span className="hidden sm:inline">Зарегистрировать / Войти</span>
              <span className="sm:hidden">Войти</span>
            </a>
          </div>
        </header>

        {/* Hero Section (exact replica of Screen 2) */}
        <section className="p-3 sm:p-5 flex flex-col gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4">
            {/* Big Main Banner: Бонус до 360% за депозит! */}
            <a
              href={REF_URL}
              className="lg:col-span-8 relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c1c38] via-[#0b1428] to-[#070b16] border border-blue-500/20 p-6 sm:p-8 flex flex-col justify-between min-h-[300px] sm:min-h-[380px] lb41-card-hover group"
            >
              {/* Radial glow background */}
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

              {/* Text content */}
              <div className="relative z-20 max-w-md">
                <span className="text-xl sm:text-3xl font-black text-white tracking-tight drop-shadow-md block mb-1">
                  Бонус до
                </span>
                <div className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-sky-200 via-blue-400 to-blue-600 drop-shadow-[0_10px_25px_rgba(37,99,235,0.6)] my-1">
                  360%
                </div>
                <span className="text-xl sm:text-3xl font-black text-white tracking-tight drop-shadow-md block mt-1">
                  за депозит!
                </span>
              </div>

              {/* Action pill in banner */}
              <div className="relative z-20 mt-6 sm:mt-8">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-600/40 group-hover:bg-blue-500 transition-all">
                  Забрать Бонус 360% →
                </span>
              </div>

              {/* Character Illustration with smooth edge blend */}
              <div className="absolute right-0 bottom-0 top-0 w-3/4 sm:w-1/2 max-w-[420px] pointer-events-none flex items-end justify-end overflow-hidden opacity-40 sm:opacity-100 z-10">
                <Image
                  src="/images/hero-banner.png"
                  alt="Lucky Bear Casino Бонус 360%"
                  width={420}
                  height={420}
                  className="object-contain object-bottom max-h-full drop-shadow-2xl [mask-image:linear-gradient(to_right,transparent_0%,black_30%)]"
                  priority
                />
              </div>
            </a>

            {/* Right Column (2 stacked promo cards) */}
            <div className="lg:col-span-4 flex flex-col gap-3 sm:gap-4">
              {/* Top Promo Card: 5,000,000 ₽ */}
              <a
                href={REF_URL}
                className="relative flex-1 rounded-2xl overflow-hidden bg-gradient-to-br from-[#121c33] to-[#0c1322] border border-white/10 p-5 flex flex-col justify-between min-h-[160px] lb41-card-hover group"
              >
                <div className="relative z-10 max-w-[200px]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    ЕЖЕДНЕВНО РАЗЫГРЫВАЕТСЯ БОЛЕЕ
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-amber-400 drop-shadow-[0_2px_10px_rgba(251,191,36,0.3)] flex items-center gap-1.5 font-sans">
                    <span>5,000,000</span>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-amber-400 inline-block shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M7 3h6c2.76 0 5 2.24 5 5s-2.24 5-5 5H10v2h4v2h-4v4H7v-4H5v-2h2v-2H5v-2h2V3zm3 7h3c1.1 0 2-.9 2-2s-.9-2-2-2h-3v4z" />
                    </svg>
                  </div>
                  <span className="inline-block mt-2 text-xs font-semibold px-2.5 py-1 rounded-md bg-[#1a2642] text-blue-400 border border-blue-500/20">
                    Акция Lucky Bonus
                  </span>
                </div>

                <div className="absolute right-2 bottom-2 top-2 w-32 sm:w-36 pointer-events-none flex items-center justify-end">
                  <Image
                    src="/images/lucky-bonus.png"
                    alt="Ежедневный розыгрыш Lucky Bonus"
                    width={160}
                    height={160}
                    className="object-contain max-h-full drop-shadow-lg"
                    priority
                  />
                </div>
              </a>

              {/* Bottom Promo Card: Твои FS уже ждут */}
              <a
                href={REF_URL}
                className="relative flex-1 rounded-2xl overflow-hidden bg-gradient-to-br from-[#121c33] to-[#0c1322] border border-white/10 p-5 flex flex-col justify-between min-h-[160px] lb41-card-hover group"
              >
                <div className="relative z-10 max-w-[200px]">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                    Твои FS уже ждут
                  </h3>
                  <p className="text-[11px] text-slate-300 leading-tight mb-3">
                    Просто пополни счёт - и получи бесплатные FS
                  </p>
                  <span className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white font-bold text-xs shadow-md shadow-blue-600/30 group-hover:bg-blue-500 transition-all">
                    Получить FS
                  </span>
                </div>

                <div className="absolute right-2 bottom-1 top-1 w-32 sm:w-36 pointer-events-none flex items-end justify-end">
                  <Image
                    src="/images/freespins-girl.png"
                    alt="Бесплатные фриспины Lucky Bear"
                    width={160}
                    height={160}
                    className="object-contain max-h-full drop-shadow-lg"
                    priority
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Filter Bar / Categories (exact replica) */}
          <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1 pt-2 no-scrollbar">
            <div className="flex items-center gap-1.5 shrink-0">
              <a href={REF_URL} className="lb41-pill-btn lb41-pill-active">
                <span>::</span>
                <span>Все</span>
              </a>
              <a href={REF_URL} className="lb41-pill-btn">
                <span>🍒</span>
                <span>Слоты</span>
              </a>
              <a href={REF_URL} className="lb41-pill-btn">
                <span>⚡</span>
                <span>Быстрые игры</span>
              </a>
              <a href={REF_URL} className="lb41-pill-btn">
                <span>🔥</span>
                <span>Популярные</span>
              </a>
              <a href={REF_URL} className="lb41-pill-btn">
                <span>🎁</span>
                <span>Покупка Бонуса</span>
              </a>
              <a href={REF_URL} className="lb41-pill-btn">
                <span>🌙</span>
                <span>Новинки</span>
              </a>
              <a href={REF_URL} className="lb41-pill-btn">
                <span>🎮</span>
              </a>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a href={REF_URL} className="w-9 h-9 rounded-lg bg-[#141b2e] border border-white/5 flex items-center justify-center text-slate-300 hover:text-white" aria-label="Поиск">
                🔍
              </a>
              <a href={REF_URL} className="lb41-pill-btn">
                <span>▦</span>
                <span>Провайдеры</span>
                <span className="text-[10px] text-slate-400">▼</span>
              </a>
            </div>
          </div>

          {/* Slots Section Header */}
          <div className="flex items-center justify-between pt-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">🍒</span>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-wide">
                Слоты
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <a href={REF_URL} className="hover:text-blue-400 font-semibold transition-colors">Все</a>
              <div className="flex gap-1">
                <a href={REF_URL} className="w-6 h-6 rounded bg-[#141b2e] flex items-center justify-center hover:bg-white/10 text-slate-300">‹</a>
                <a href={REF_URL} className="w-6 h-6 rounded bg-[#141b2e] flex items-center justify-center hover:bg-white/10 text-slate-300">›</a>
              </div>
            </div>
          </div>

          {/* Slots Grid (7 slots from screen 2) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2.5 sm:gap-3">
            {/* Slot 1: GEMSTONES GOLD */}
            <a href={REF_URL} className="group relative rounded-xl overflow-hidden bg-[#121c33] border border-white/5 aspect-[3/4] lb41-card-hover flex flex-col">
              <img src="/slots/gemstones-gold.png" alt="GEMSTONES GOLD слот" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-2.5">
                <span className="text-xs font-extrabold text-white leading-tight drop-shadow">GEMSTONES GOLD</span>
                <span className="text-[10px] text-amber-400 font-medium">PGSOFT</span>
              </div>
              <div className="absolute inset-0 bg-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">▶</span>
              </div>
            </a>

            {/* Slot 2: CROWN COINS */}
            <a href={REF_URL} className="group relative rounded-xl overflow-hidden bg-[#121c33] border border-white/5 aspect-[3/4] lb41-card-hover flex flex-col">
              <img src="/slots/crown-coins.png" alt="CROWN COINS слот" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-2.5">
                <span className="text-xs font-extrabold text-white leading-tight drop-shadow">CROWN COINS</span>
                <span className="text-[10px] text-amber-400 font-medium">ENDORPHINA</span>
              </div>
              <div className="absolute inset-0 bg-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">▶</span>
              </div>
            </a>

            {/* Slot 3: WILD BOUNTY SHOWDOWN */}
            <a href={REF_URL} className="group relative rounded-xl overflow-hidden bg-[#121c33] border border-white/5 aspect-[3/4] lb41-card-hover flex flex-col">
              <img src="/slots/wild-bounty.png" alt="WILD BOUNTY SHOWDOWN слот" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-2.5">
                <span className="text-xs font-extrabold text-white leading-tight drop-shadow">WILD BOUNTY</span>
                <span className="text-[10px] text-amber-400 font-medium">PGSOFT</span>
              </div>
              <div className="absolute inset-0 bg-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">▶</span>
              </div>
            </a>

            {/* Slot 4: FORTUNE GARUDA 1000 */}
            <a href={REF_URL} className="group relative rounded-xl overflow-hidden bg-[#121c33] border border-white/5 aspect-[3/4] lb41-card-hover flex flex-col">
              <img src="/slots/fortune-garuda.png" alt="FORTUNE GARUDA 1000 слот" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-2.5">
                <span className="text-xs font-extrabold text-white leading-tight drop-shadow">GARUDA 1000</span>
                <span className="text-[10px] text-amber-400 font-medium">PRAGMATIC</span>
              </div>
              <div className="absolute inset-0 bg-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">▶</span>
              </div>
            </a>

            {/* Slot 5: ANUBIS WRATH */}
            <a href={REF_URL} className="group relative rounded-xl overflow-hidden bg-[#121c33] border border-white/5 aspect-[3/4] lb41-card-hover flex flex-col">
              <img src="/slots/anubis-wrath.png" alt="ANUBIS WRATH слот" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-2.5">
                <span className="text-xs font-extrabold text-white leading-tight drop-shadow">ANUBIS WRATH</span>
                <span className="text-[10px] text-amber-400 font-medium">PGSOFT</span>
              </div>
              <div className="absolute inset-0 bg-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">▶</span>
              </div>
            </a>

            {/* Slot 6: SWEET BONANZA 2500 */}
            <a href={REF_URL} className="group relative rounded-xl overflow-hidden bg-[#121c33] border border-white/5 aspect-[3/4] lb41-card-hover flex flex-col">
              <img src="/slots/sweet-bonanza.png" alt="SWEET BONANZA 2500 слот" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-2.5">
                <span className="text-xs font-extrabold text-white leading-tight drop-shadow">SWEET BONANZA</span>
                <span className="text-[10px] text-amber-400 font-medium">PRAGMATIC</span>
              </div>
              <div className="absolute inset-0 bg-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">▶</span>
              </div>
            </a>

            {/* Slot 7: 3 COIN PEACOCK */}
            <a href={REF_URL} className="group relative rounded-xl overflow-hidden bg-[#121c33] border border-white/5 aspect-[3/4] lb41-card-hover flex flex-col col-span-2 sm:col-span-1">
              <img src="/slots/3coin-peacock.png" alt="3 COIN PEACOCK слот" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-2.5">
                <span className="text-xs font-extrabold text-white leading-tight drop-shadow">3 COIN PEACOCK</span>
                <span className="text-[10px] text-amber-400 font-medium">PRAGMATIC</span>
              </div>
              <div className="absolute inset-0 bg-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">▶</span>
              </div>
            </a>
          </div>
        </section>

        {/* SEO Text Block below first screen (300-400 words with all 14 keywords) */}
        <section className="p-3 sm:p-5 flex flex-col gap-6 max-w-5xl mx-auto w-full mt-4">
          <div className="rounded-2xl bg-[#0e1424] border border-white/5 p-6 sm:p-8 flex flex-col gap-6 text-slate-300 leading-relaxed text-sm sm:text-base">
            <article className="flex flex-col gap-6" id="about-casino">
              {/* Block 1 */}
              <div className="flex flex-col gap-2.5" id="section-1">
                <h2 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
                  <span className="text-blue-500">🐻</span>
                  <span>Lucky Bear Casino Официальный Сайт: Преимущества и Вход</span>
                </h2>
                <p>
                  Добро пожаловать в Lucky Bear Casino — популярный лицензионный игровой клуб нового поколения. Посещая Lucky Bear Casino официальный сайт, каждый пользователь открывает для себя огромную коллекцию сертифицированных слотов и настольных развлечений от ведущих провайдеров мира. Современный портал Lucky Bear казино создан для максимального комфорта гемблеров: удобная навигация, быстрый вход в личный кабинет, щедрый приветственный бонус до 360% на депозит и моментальные выплаты без скрытых комиссий.
                </p>
              </div>

              {/* Block 2 */}
              <div className="flex flex-col gap-2.5" id="section-2">
                <h2 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
                  <span className="text-blue-500">🎰</span>
                  <span>Лаки Бир Казино Онлайн: Игровые Автоматы и Рабочее Зеркало</span>
                </h2>
                <p>
                  Для всех ценителей ярких слотов Лаки Бир Казино онлайн подготовило тысячи захватывающих аппаратов с высоким процентом отдачи RTP. Если основной домен временно недоступен из-за блокировок сетевых провайдеров, на помощь приходит рабочее Лаки Бир Казино зеркало, дублирующее все функции платформы в полном объеме. Авторизовавшись через Лаки Бир Казино зеркало, вы сохраняете полный доступ к депозитам, активным бонусам и истории ставок. В надежном клубе Лаки Бир Казино безопасность персональных данных гарантируется современными протоколами шифрования SSL.
                </p>
              </div>

              {/* Block 3 */}
              <div className="flex flex-col gap-2.5" id="section-3">
                <h2 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
                  <span className="text-blue-500">🛡️</span>
                  <span>Luckybear Casino Зеркало и Официальный Доступ Без Блокировок</span>
                </h2>
                <p>
                  Быстрый и стабильный доступ гарантирует проверенное Luckybear Casino зеркало, обновляемое каждый день для бесперебойной игры 24/7. Международный бренд Luckybear Casino завоевал доверие миллионов игроков благодаря безупречной репутации и кристально честным розыгрышам. Выбирая Luckybear Casino официальный ресурс, пользователи получают доступ к регулярным турнирам с призовым фондом более 5 000 000 рублей. Полнофункциональный Luckybear Casino официальный сайт отлично оптимизирован для смартфонов на iOS и Android, а также для десктопных компьютеров.
                </p>
              </div>

              {/* Block 4 */}
              <div className="flex flex-col gap-2.5" id="section-4">
                <h2 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
                  <span className="text-blue-500">🎁</span>
                  <span>Лакибир Казино Официальный Сайт: Бонусы До 360% и Выплаты</span>
                </h2>
                <p>
                  Лицензированный Лакибир Казино официальный сайт открывает перед игроками широкие горизонты честных азартных развлечений. В Лакибир Казино вы найдете классические слоты, инновационные краш-игры, европейскую рулетку и трансляции с живыми дилерами в формате высокой четкости. Переходя на Лаки Бир Казино официальный сайт, новички легко активируют бесплатные вращения и щедрые промокоды. Наш Лаки Бир Казино официальный сервис обеспечивает круглосуточную клиентскую поддержку в онлайн-чате, а удобный Лаки Бир Казино сайт позволяет пополнять баланс банковскими картами, электронными кошельками и криптовалютой.
                </p>
              </div>

              {/* Block 5 */}
              <div className="flex flex-col gap-2.5" id="section-5">
                <h2 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
                  <span className="text-blue-500">🚀</span>
                  <span>Регистрация в Лаки Бир Казино Сайт и Быстрый Старт</span>
                </h2>
                <p>
                  Создать аккаунт в системе можно буквально за пару минут. Достаточно открыть Лаки Бир Казино сайт, указать электронную почту или номер мобильного телефона и придумать надежный пароль для входа. После быстрой регистрации каждый участник Lucky Bear Casino может внести стартовый депозит и получить солидный пакет фриспинов. Присоединяйтесь к сообществу победителей Luckybear Casino уже сегодня и испытайте удачу в лучших игровых автоматах!
                </p>
              </div>
            </article>

            {/* Quick CTA Banner in Article */}
            <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-r from-blue-900/40 via-blue-800/20 to-transparent border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
              <div className="flex flex-col">
                <span className="text-white font-bold text-base sm:text-lg">Готовы сорвать куш прямо сейчас?</span>
                <span className="text-slate-400 text-xs sm:text-sm">Заберите 360% бонус за депозит и бесплатные вращения</span>
              </div>
              <a href={REF_URL} className="lb41-btn-primary shrink-0 w-full sm:w-auto text-center">
                Перейти в Казино →
              </a>
            </div>
          </div>

          {/* Footer with SEO Navigation Hashtags */}
          <footer className="mt-4 pt-6 border-t border-white/5 flex flex-col gap-4 text-xs text-slate-500">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-slate-400 font-semibold mr-1">Теги и быстрый поиск:</span>
              <a href="#section-1" className="px-2.5 py-1 rounded bg-[#141b2e] hover:text-blue-400 border border-white/5 transition-colors">#luckybearcasino</a>
              <a href="#section-3" className="px-2.5 py-1 rounded bg-[#141b2e] hover:text-blue-400 border border-white/5 transition-colors">#luckybearcasinoзеркало</a>
              <a href="#section-1" className="px-2.5 py-1 rounded bg-[#141b2e] hover:text-blue-400 border border-white/5 transition-colors">#luckybearcasinoофициальный</a>
              <a href="#section-1" className="px-2.5 py-1 rounded bg-[#141b2e] hover:text-blue-400 border border-white/5 transition-colors">#luckybearcasinoофициальныйсайт</a>
              <a href="#section-1" className="px-2.5 py-1 rounded bg-[#141b2e] hover:text-blue-400 border border-white/5 transition-colors">#luckybearказино</a>
              <a href="#section-2" className="px-2.5 py-1 rounded bg-[#141b2e] hover:text-blue-400 border border-white/5 transition-colors">#лакибирказино</a>
              <a href="#section-4" className="px-2.5 py-1 rounded bg-[#141b2e] hover:text-blue-400 border border-white/5 transition-colors">#лакибирказинозеркало</a>
              <a href="#section-2" className="px-2.5 py-1 rounded bg-[#141b2e] hover:text-blue-400 border border-white/5 transition-colors">#лакибирказиноонлайн</a>
              <a href="#section-4" className="px-2.5 py-1 rounded bg-[#141b2e] hover:text-blue-400 border border-white/5 transition-colors">#лакибирказиноофициальный</a>
              <a href="#section-4" className="px-2.5 py-1 rounded bg-[#141b2e] hover:text-blue-400 border border-white/5 transition-colors">#лакибирказиноофициальныйсайт</a>
              <a href="#section-5" className="px-2.5 py-1 rounded bg-[#141b2e] hover:text-blue-400 border border-white/5 transition-colors">#лакибирказиносайт</a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 border-t border-white/5">
              <span>© 2026 Lucky Bear Casino. Все права защищены. 18+</span>
              <span>Лицензионные игровые автоматы онлайн</span>
            </div>
          </footer>
        </section>

        {/* Floating Support & Bonus Widget */}
        <aside className="fixed bottom-20 right-4 z-30 flex flex-col gap-2.5 pointer-events-auto">
          <a
            href={REF_URL}
            className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 text-white flex items-center justify-center shadow-xl shadow-blue-500/40 hover:scale-110 transition-transform"
            aria-label="Онлайн поддержка 24/7"
            title="Поддержка 24/7"
          >
            🎧
          </a>
        </aside>

        {/* Mobile Fixed Bottom Navigation Bar */}
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0e1424] border-t border-white/10 px-3 py-2 flex items-center justify-around text-[11px] font-medium text-slate-400">
          <a href={REF_URL} className="flex flex-col items-center gap-1 text-blue-500">
            <span className="text-base leading-none">🏠</span>
            <span>Главная</span>
          </a>
          <a href={REF_URL} className="flex flex-col items-center gap-1 hover:text-white">
            <span className="text-base leading-none">🎰</span>
            <span>Слоты</span>
          </a>
          <a href={REF_URL} className="flex flex-col items-center gap-1 hover:text-white">
            <span className="text-base leading-none">⭐</span>
            <span>Бонусы</span>
          </a>
          <a href={REF_URL} className="flex flex-col items-center gap-1 hover:text-white">
            <span className="text-base leading-none">💳</span>
            <span>Касса</span>
          </a>
          <a href={REF_URL} className="flex flex-col items-center gap-1 hover:text-white">
            <span className="text-base leading-none">👤</span>
            <span>Профиль</span>
          </a>
        </nav>
      </main>
    </div>
  )
}
