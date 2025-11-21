import { TelegramIcon } from "./components/TelegramIcon";
import imgCursorImage from "figma:asset/b5080bf3506b3870630ea0fdd4c2d0a4b5b81aa2.png";

export default function App() {
  return (
    <div className="bg-neutral-950 min-h-screen w-full flex flex-col items-center relative overflow-hidden">
      {/* Header */}
      <header className="pt-8 sm:pt-12 pb-8">
        <div className="bg-white rounded-full mx-[60px] sm:mx-[80px] py-0.5 px-8 sm:px-12">
          <h1 className="font-['Ambidexter:Regular',sans-serif] text-black text-[28px] sm:text-[32px] md:text-[36px] text-center">
            kopenkoff
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-[724px] relative">
          {/* Card */}
          <div className="bg-[#101010] rounded-xl p-6 sm:p-8 md:p-10 lg:p-12">
            {/* Text Content */}
            <p className="font-['Roboto:Medium',sans-serif] font-medium text-white text-center text-[20px] sm:text-[24px] md:text-[26px] lg:text-[28px] leading-[1.3] mb-8 sm:mb-10 md:mb-12" style={{ fontVariationSettings: "'wdth' 100" }}>
              Мой сайт пока не готов, но я уже принимаю заказы на дизайн
            </p>

            {/* Contact Section */}
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <a 
                href="https://t.me/gkopenkov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Telegram"
              >
                <TelegramIcon className="size-[36px] sm:size-[40px] md:size-[45px] flex-shrink-0" />
              </a>
              <a 
                href="mailto:me@kopenkoff.ru" 
                className="font-['Roboto:Medium',sans-serif] font-medium text-white text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] underline hover:opacity-80 transition-opacity break-all sm:break-normal"
                style={{ fontVariationSettings: "'wdth' 100", textUnderlinePosition: "from-font" }}
              >
                me@kopenkoff.ru
              </a>
            </div>
          </div>

          {/* Decorative Cursor Image - Hidden on mobile */}
          <div className="hidden lg:block absolute -right-[80px] xl:-right-[40px] -bottom-[60px] pointer-events-none">
            <div className="relative" style={{ transform: "rotate(53.293deg)" }}>
              <img 
                src={imgCursorImage} 
                alt="" 
                className="w-[100px] h-[150px] xl:w-[130px] xl:h-[195px] object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}