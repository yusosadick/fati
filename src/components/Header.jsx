import { SearchNormal1, Notification, Share, ArrowDown2 } from "iconsax-react";
import Card from "./Card";
import { ProfileAvatar } from "./Avatar";

function IconButton({ children, dot }) {
  return (
    <button
      type="button"
      className="relative flex h-[32px] w-[33.5px] items-center justify-center rounded-[10px] bg-white/25"
    >
      {children}
      {dot && (
        <span className="absolute right-[9.5px] top-[7.5px] h-[5px] w-[5px] rounded-full bg-[#e8404f] ring-[1.5px] ring-[#fbe7e5]" />
      )}
    </button>
  );
}

export default function Header() {
  return (
    <Card className="flex h-[56px] items-center justify-between pl-[13px] pr-[13px]">
      <div>
        <h1 className="text-[17.15px] font-medium leading-[22px] tracking-[-0.2px] text-ink">
          Welcome Back, Bennett
        </h1>
      </div>

      <div className="flex items-center gap-[8px]">
        <div className="flex h-[32px] w-[202.5px] items-center justify-between rounded-[10px] bg-white/25 pl-[12px] pr-[11px]">
          <span className="text-[9.7px] text-ink-soft">
            Search something here...
          </span>
          <SearchNormal1 size={17} color="#1f1e1b" />
        </div>
        <IconButton dot>
          <Notification size={16} color="#1f1e1b" />
        </IconButton>
        <IconButton>
          <Share size={16} color="#1f1e1b" />
        </IconButton>
        <div className="flex h-[32px] w-[133.5px] items-center gap-[6px] rounded-[10px] bg-white/25 pl-[4px] pr-[11px]">
          <ProfileAvatar size={28} />
          <div className="flex-1 pt-[2px] leading-[10px]">
            <p className="text-[8.5px] font-semibold text-ink">Smith Bennett</p>
            <p className="mt-[0.5px] text-[7px] text-ink-mute">smith@gmail.com</p>
          </div>
          <ArrowDown2 size={10} color="#8a867f" />
        </div>
      </div>
    </Card>
  );
}
