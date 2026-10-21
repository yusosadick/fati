import {
  Category,
  Layer,
  Profile2User,
  Calendar,
  Star1,
  Setting2,
  ArrowDown2,
  MedalStar,
} from "iconsax-react";
import Logo from "./Logo";
import { AnalyticsIcon, MessagesIcon, HelpIcon, LogoutIcon } from "./icons";

const MAIN = [
  { label: "Dashboard", icon: Category, active: true },
  { label: "Analytics", icon: AnalyticsIcon },
  { label: "Projects", icon: Layer, chevron: true },
  { label: "Customers", icon: Profile2User, chevron: true },
  { label: "Messages", icon: MessagesIcon, badge: 2 },
  { label: "Calendars", icon: Calendar },
];

const GENERAL = [
  { label: "Feedback", icon: Star1 },
  { label: "Help Desk", icon: HelpIcon, chevron: true },
  { label: "Settings", icon: Setting2, chevron: true },
  { label: "Log Out", icon: LogoutIcon, danger: true },
];

function NavItem({ label, icon: Icon, active, chevron, badge, danger }) {
  const tone = active
    ? "bg-brand text-[#fde8b3] font-semibold"
    : danger
      ? "text-[#d6363f] font-medium"
      : "text-ink-soft font-medium";
  return (
    <a
      href="#"
      className={`flex h-[34px] items-center rounded-[10px] pl-[14px] pr-[10px] text-[11px] [&_svg_*]:[stroke-width:1.7] ${tone}`}
    >
      <Icon
        size={16}
        variant={active ? "Bold" : "Linear"}
        color="currentColor"
        className={`mr-[9.3px] shrink-0 ${active || danger ? "" : "text-[#43403c]"}`}
      />
      <span className="flex-1">{label}</span>
      {chevron && <ArrowDown2 size={13} color="#8a867f" className="mr-[3px]" />}
      {badge && (
        <span className="mr-[3px] flex h-[14.3px] w-[14.3px] items-center justify-center rounded-full bg-[#e8404f] text-[8.5px] font-semibold text-white">
          {badge}
        </span>
      )}
    </a>
  );
}

export default function Sidebar() {
  return (
    <aside className="sticky top-[18px] h-[calc(100vh/var(--z)-36px)] min-h-[684px] w-[196px] shrink-0 rounded-[22px] border border-white/45 bg-gradient-to-b from-[#fff8ee]/40 to-white/30 shadow-[0_1px_2px_rgba(80,55,20,.04),0_12px_32px_-16px_rgba(80,55,20,.14)]">
      <div className="flex items-center gap-[7.3px] px-[14.7px] pt-[14.3px]">
        <Logo />
        <span className="text-[17.4px] font-medium tracking-[-0.2px] text-ink">
          Fati
        </span>
      </div>

      <p className="mt-[25.7px] px-[13.3px] text-[11.2px] font-medium leading-[14px] text-black">
        Main Menu
      </p>
      <nav className="mt-[10px] flex flex-col gap-[5.4px] px-[13.7px]">
        {MAIN.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </nav>

      <p className="mt-[24px] px-[13.3px] text-[11.2px] font-medium leading-[14px] text-black">
        General
      </p>
      <nav className="mt-[10px] flex flex-col gap-[5.4px] px-[13.7px]">
        {GENERAL.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </nav>

      <div className="absolute inset-x-[8px] bottom-[8px] h-[120px] rounded-[14px] bg-[#f3dfbd]/20">
        <MedalStar size={21} variant="Bold" color="#e17200" className="absolute left-[10px] top-[10px]" />
        <span className="absolute left-[39px] top-[11px] text-[14px] font-semibold leading-[18px] text-ink">PRO</span>
        <p className="absolute left-[11.3px] top-[39.9px] text-[9.9px] leading-[14px] text-ink-soft">
          Upgrade to Pro for advanced
          <br />
          tools and analytics.
        </p>
        <button
          type="button"
          className="absolute left-[11.3px] top-[81px] h-[28px] w-[149px] rounded-[8px] bg-[#2a2827] text-[9.9px] font-semibold text-white"
        >
          Upgrade Now
        </button>
      </div>
    </aside>
  );
}
