import svgPaths from "./svg-wkjkyyug98";
import imgChatGptImage102025014741Photoroom1 from "figma:asset/b5080bf3506b3870630ea0fdd4c2d0a4b5b81aa2.png";

function TelegramLogomark() {
  return (
    <div className="absolute inset-[5.56%]" data-name="Telegram Logomark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Telegram Logomark">
          <path d={svgPaths.p29cd0740} fill="var(--fill-0, white)" id="Element" />
          <path clipRule="evenodd" d={svgPaths.p2b34170} fill="var(--fill-0, black)" fillRule="evenodd" id="Element_2" />
        </g>
      </svg>
    </div>
  );
}

function TelegramLogomark1() {
  return (
    <div className="absolute left-[calc(50%-106.5px)] overflow-clip size-[45px] top-[calc(50%-127.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="Telegram Logomark">
      <TelegramLogomark />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[calc(50%+0.5px)] top-[390px] translate-x-[-50%]">
      <p className="[text-underline-position:from-font] absolute decoration-solid font-['Roboto:Medium',sans-serif] font-medium leading-[normal] left-[897px] text-[24px] text-nowrap text-white top-[399px] underline whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        me@kopenkoff.ru
      </p>
      <TelegramLogomark1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-1/2 top-[237px] translate-x-[-50%]">
      <div className="absolute bg-[#101010] h-[266px] left-[598px] rounded-[12px] top-[237px] w-[724px]" />
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[1.3] left-[calc(50%+0.5px)] text-[28px] text-center text-white top-[278px] translate-x-[-50%] w-[561px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Мой сайт пока не готов, но я уже принимаю заказы на дизайн
      </p>
      <Group1 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-neutral-950 relative size-full" data-name="Демо">
      <p className="absolute font-['Ambidexter:Regular',sans-serif] leading-[normal] left-[calc(50%-71px)] not-italic text-[32px] text-nowrap text-white top-[48px] whitespace-pre">kopenkoff</p>
      <Group />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.8016992211341858)+(var(--transform-inner-height)*0.5977277159690857)))] items-center justify-center left-[1197px] top-[386px] w-[calc(1px*((var(--transform-inner-height)*0.8016992211341858)+(var(--transform-inner-width)*0.5977277159690857)))]" style={{ "--transform-inner-width": "129.96875", "--transform-inner-height": "195.03125" } as React.CSSProperties}>
        <div className="flex-none rotate-[53.293deg]">
          <div className="h-[195.04px] relative w-[129.976px]" data-name="ChatGPT Image 10 июн. 2025 г., 01_47_41-Photoroom 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgChatGptImage102025014741Photoroom1} />
          </div>
        </div>
      </div>
    </div>
  );
}