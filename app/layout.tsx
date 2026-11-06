import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="bg-[#0b101b]">
      <head>
        <meta name="yandex-verification" content="983d2fa3291e3c2d" />
        <meta charSet="utf-8" />
        <title>Lucky Bear Casino Официальный Сайт | Вход и Рабочее Зеркало Лаки Бир Казино Онлайн</title>
        <meta name="description" content="Официальный сайт Lucky Bear Casino: актуальное рабочее зеркало Лаки Бир Казино, быстрый вход, моментальные выплаты и бонус до 360% на депозит. Играйте в топовые слоты Luckybear Casino онлайн 24/7!" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://luckybear41casino.vercel.app" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lucky Bear Casino Официальный Сайт | Вход и Рабочее Зеркало Лаки Бир Казино Онлайн" />
        <meta property="og:description" content="Официальный сайт Lucky Bear Casino: актуальное рабочее зеркало Лаки Бир Казино, быстрый вход, моментальные выплаты и бонус до 360% на депозит. Играйте в топовые слоты Luckybear Casino онлайн 24/7!" />
        <meta property="og:url" content="https://luckybear41casino.vercel.app" />
        <meta property="og:site_name" content="Lucky Bear Casino" />
        <meta property="og:image" content="https://luckybear41casino.vercel.app/images/hero-banner.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lucky Bear Casino Официальный Сайт | Вход и Рабочее Зеркало Лаки Бир Казино Онлайн" />
        <meta name="twitter:description" content="Официальный сайт Lucky Bear Casino: актуальное рабочее зеркало Лаки Бир Казино, быстрый вход, моментальные выплаты и бонус до 360% на депозит." />
        <meta name="twitter:image" content="https://luckybear41casino.vercel.app/images/hero-banner.png" />
        <meta name="theme-color" content="#0b101b" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="shortcut icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body className="antialiased bg-[#0b101b] text-slate-100 font-sans">
        {children}
      </body>
    </html>
  )
}
