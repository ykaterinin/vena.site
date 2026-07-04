import { useState } from "react";
import { Menu, X, User, Heart, ShoppingBag, Plus, ArrowUpRight } from "lucide-react";
import venaLogo from "@/imports/ChatGPT_Image_4____._2026__.__12_58_21-1.png";

/* ─── DATA ─── */
const services = [
  { n: "01", title: "запуск бренда\nпод ключ",             price: "от 40.000₽" },
  { n: "02", title: "разработка сайтов и\ntelegram ботов",  price: "от 15.000₽" },
  { n: "03", title: "разработка\nперсонального\nдизайн проекта", price: "от 10.000₽" },
  { n: "04", title: "дизайн\nодежды",                       price: "от 5.000₽"  },
  { n: "05", title: "видео и фото–\nпродакшн",              price: "от 5.000₽"  },
  { n: "06", title: "производство\nпод ключ",               price: "от 10.000₽" },
  { n: "07", title: "AI creatives и\nгенеративный контент", price: "от 5.000₽"  },
];

/* ─── FOLDER CARD ─── */
function FolderCard({ n, title, price }: { n: string; title: string; price: string }) {
  return (
    <div
      className="relative rounded-[20px] p-6 flex flex-col justify-between cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
      style={{
        background: "#ffffff",
        border: "1px solid #E0E0E0",
        minHeight: 200,
        clipPath: "polygon(0 0, calc(100% - 44px) 0, calc(100% - 44px) 20px, 100% 44px, 100% 100%, 0 100%)",
      }}
    >
      <span
        className="absolute top-3 right-4 text-[2.6rem] font-bold leading-none select-none pointer-events-none"
        style={{ color: "#D0D0D0" }}
      >
        {n}
      </span>
      <div className="flex-1 pt-1">
        <p className="text-[0.92rem] leading-snug font-semibold text-[#111] whitespace-pre-line">
          {title}
        </p>
      </div>
      <p className="text-[0.82rem] mt-4" style={{ color: "#555", fontWeight: 500 }}>
        {price}
      </p>
    </div>
  );
}

/* ─── APP ─── */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#111]" style={{ fontFamily: "'Manrope', sans-serif" }}>

      {/* ══ HEADER ══ */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white"
        style={{ borderTop: "1px solid #111", borderBottom: "1px solid #EAEAEA" }}
      >
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 h-[64px] flex items-center justify-between">

          <button onClick={() => setMenuOpen(!menuOpen)} className="w-9 h-9 flex items-center justify-center transition-opacity hover:opacity-40">
            {menuOpen ? <X size={20} strokeWidth={1.8} /> : <Menu size={20} strokeWidth={1.8} />}
          </button>

          <div className="absolute left-1/2 -translate-x-1/2">
            <img src={venaLogo} alt="Vena" className="h-14 w-auto object-contain select-none" draggable={false} />
          </div>

          <div className="flex items-center gap-5">
            <button className="transition-opacity hover:opacity-40"><User size={19} strokeWidth={1.8} /></button>
            <button className="transition-opacity hover:opacity-40"><Heart size={19} strokeWidth={1.8} /></button>
            <button className="transition-opacity hover:opacity-40"><ShoppingBag size={19} strokeWidth={1.8} /></button>
          </div>
        </div>

        {menuOpen && (
          <div style={{ borderTop: "1px solid #EAEAEA" }}>
            <nav className="max-w-[1320px] mx-auto px-6 md:px-10 py-8">
              {["Работы", "Услуги", "О нас", "Блог", "Контакты"].map((item) => (
                <div key={item} style={{ borderBottom: "1px solid #EAEAEA" }}>
                  <a href="#" className="block py-4 text-2xl text-[#111] transition-opacity hover:opacity-40" style={{ fontWeight: 700 }} onClick={() => setMenuOpen(false)}>
                    {item}
                  </a>
                </div>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* ══ HERO ══ */}
      <section className="pt-[64px] min-h-screen flex flex-col">
        <div className="flex-1 max-w-[1320px] mx-auto px-6 md:px-10 w-full flex flex-col justify-center py-24">
          <p className="text-xs tracking-[0.2em] uppercase text-[#888] mb-10" style={{ fontWeight: 600 }}>
            Creative Agency — Est. 2024
          </p>
          <h1
            className="text-[#111] leading-[0.93] mb-10"
            style={{ fontSize: "clamp(4rem, 11vw, 10rem)", fontWeight: 800, letterSpacing: "-0.04em" }}
          >
            Creative<br />Agency
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-8 mb-12" style={{ borderTop: "1px solid #EAEAEA" }}>
            <p className="text-xs tracking-[0.18em] uppercase text-[#888] sm:mr-auto" style={{ fontWeight: 600 }}>
              Branding · Design · Development · AI Automation
            </p>
            <a
              href="https://t.me/ykaterinin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#111] text-white text-xs tracking-[0.14em] uppercase px-7 py-3.5 rounded-full transition-opacity hover:opacity-70 w-fit"
              style={{ fontWeight: 700 }}
            >
              Start Project <ArrowUpRight size={13} strokeWidth={2.2} />
            </a>
          </div>
          <p className="max-w-[440px] text-[#666] leading-relaxed text-[0.95rem]">
            Мы строим современные бренды, сайты и цифровые продукты,
            которые масштабируют бизнес — с точностью и без компромиссов.
          </p>
        </div>

        <div className="overflow-hidden py-4" style={{ borderTop: "1px solid #EAEAEA" }}>
          <div className="flex gap-16 whitespace-nowrap" style={{ animation: "ticker 24s linear infinite" }}>
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="text-[11px] tracking-[0.2em] uppercase text-[#bbb] shrink-0" style={{ fontWeight: 600 }}>
                Branding · Design · Development · AI Automation · Strategy · Content
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MARQUEE ══ */}
      <section className="py-20" style={{ borderTop: "1px solid #EAEAEA", borderBottom: "1px solid #EAEAEA" }}>
        <div className="max-w-[1320px] mx-auto px-6 md:px-10">
          <p className="text-[#111] leading-none" style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", fontWeight: 800, letterSpacing: "-0.04em" }}>
            НОВАЯ КОЛЛЕКЦИЯ
          </p>
          <p className="text-[#888] text-sm mt-3" style={{ fontWeight: 500 }}>2024 — Agencia creativa</p>
        </div>
      </section>

      {/* ══ СПЕКТР УСЛУГ ══ */}
      <section id="services" className="py-20" style={{ background: "#F5F5F5" }}>
        <div className="max-w-[1320px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-[#111] leading-[0.9] mb-3" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 800, letterSpacing: "-0.04em" }}>
                Спектр услуг
              </h2>
              <p className="text-[#888] text-[0.88rem] max-w-[260px] leading-snug" style={{ fontWeight: 500 }}>
                Весь список услуг, предоставляемых<br />нашим агентством
              </p>
            </div>
            <a
              href="https://t.me/ykaterinin"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start inline-flex items-start gap-3 bg-white text-[#111] rounded-[18px] px-6 py-5 text-[0.85rem] leading-tight uppercase tracking-wide transition-shadow hover:shadow-md"
              style={{ fontWeight: 800, border: "1px solid #E0E0E0", lineHeight: 1.3, letterSpacing: "0.02em" }}
            >
              <span>ЗАПИСЬ<br />НА<br />КОНСУЛЬТАЦИЮ</span>
              <Plus size={18} strokeWidth={2} className="mt-0.5 shrink-0" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {services.map((s) => <FolderCard key={s.n} {...s} />)}
          </div>
        </div>
      </section>

      {/* ══ О НАС ══ */}
      <section className="py-28">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#888] mb-6" style={{ fontWeight: 600 }}>О нас</p>
              <h2
                className="text-[#111] leading-[0.92]"
                style={{ fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 800, letterSpacing: "-0.04em" }}
              >
                Работаем<br />с теми, кто<br />хочет расти
              </h2>
            </div>
            <div>
              <p className="text-[#555] leading-[1.75] text-[1rem] mb-8">
                Vena — агентство для малого и среднего бизнеса, бьюти-сферы, студий, мастеров и предпринимателей, которые хотят выглядеть профессионально и продавать больше. Мы не делаем «просто красиво» — мы строим бренды, которые работают.
              </p>
              <a
                href="https://t.me/venaag"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase text-[#111] transition-opacity hover:opacity-40"
                style={{ fontWeight: 700 }}
              >
                Наш Telegram канал <ArrowUpRight size={13} strokeWidth={2.2} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ ══ */}
      <section className="py-24" style={{ background: "#F5F5F5", borderTop: "1px solid #EAEAEA" }}>
        <div className="max-w-[1320px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#888] mb-4" style={{ fontWeight: 600 }}>Бесплатно</p>
              <h2 className="text-[#111] leading-[0.92]" style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)", fontWeight: 800, letterSpacing: "-0.04em" }}>
                Запись на<br />консультацию
              </h2>
              <p className="text-[#888] mt-4 max-w-[360px] leading-relaxed text-[0.95rem]">
                Разберём ваш проект, определим точки роста и предложим решение — бесплатно, без обязательств.
              </p>
            </div>
            <a
              href="https://t.me/ykaterinin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#111] text-white text-xs tracking-[0.16em] uppercase px-10 py-5 rounded-full transition-opacity hover:opacity-70 self-start md:self-auto whitespace-nowrap"
              style={{ fontWeight: 700 }}
            >
              Написать в Telegram <ArrowUpRight size={13} strokeWidth={2.2} />
            </a>
          </div>
        </div>
      </section>

      {/* ══ CTA DARK ══ */}
      <section className="py-32 bg-[#111]">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-8" style={{ fontWeight: 600 }}>
            Начать проект
          </p>
          <h2
            className="text-white leading-[0.9] mb-12 mx-auto"
            style={{ fontSize: "clamp(3rem, 9vw, 8rem)", fontWeight: 800, letterSpacing: "-0.04em", maxWidth: "14ch" }}
          >
            Твой бренд заслуживает большего
          </h2>
          <a
            href="https://t.me/ykaterinin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#111] text-xs tracking-[0.16em] uppercase px-9 py-4 rounded-full transition-opacity hover:opacity-80"
            style={{ fontWeight: 700 }}
          >
            Начать проект <ArrowUpRight size={13} strokeWidth={2.2} />
          </a>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="py-10 bg-white" style={{ borderTop: "1px solid #EAEAEA" }}>
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <img src={venaLogo} alt="Vena" className="h-16 w-auto object-contain" draggable={false} />
          <p className="text-[11px] tracking-[0.14em] uppercase text-[#bbb]" style={{ fontWeight: 600 }}>
            © 2024 Vena Creative Agency
          </p>
          <div className="flex gap-7">
            <a href="https://www.instagram.com/prod.bykaterinin/" target="_blank" rel="noopener noreferrer" className="text-[11px] tracking-[0.12em] uppercase text-[#888] transition-opacity hover:opacity-50" style={{ fontWeight: 600 }}>
              Instagram
            </a>
            <a href="https://t.me/venaag" target="_blank" rel="noopener noreferrer" className="text-[11px] tracking-[0.12em] uppercase text-[#888] transition-opacity hover:opacity-50" style={{ fontWeight: 600 }}>
              Telegram
            </a>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        ::-webkit-scrollbar { width: 0; height: 0; }
        * { scrollbar-width: none; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}
