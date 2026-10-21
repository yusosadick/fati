import { SidebarLeft, ArrowLeft2, ArrowRight2, Lock1, Add, Copy } from "iconsax-react";
import { BRAND } from "./config";

function Reload({ className = "" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#6b6a69" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M13 8a5 5 0 1 1-1.700-3.750M12 1.800v2.700H9.300" />
    </svg>
  );
}

function DownloadCircle({ className = "" }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#55524e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <circle cx="10" cy="10" r="8.500" />
      <path d="M10 5.500v8M6.800 10.600 10 13.800l3.200-3.200" />
    </svg>
  );
}

function ShieldHalf() {
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" aria-hidden>
      <path d="M8 1 2 3.2v5.1c0 3.5 2.4 6.3 6 7.7 3.6-1.4 6-4.2 6-7.7V3.2L8 1Z" stroke="#6b6a69" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M8 1v15c3.6-1.4 6-4.2 6-7.7V3.2L8 1Z" fill="#6b6a69" />
    </svg>
  );
}

/**
 * Safari-style window. Anything passed as children fills the viewport area and
 * fades out at the bottom edge (that is how the reference crops the dashboard).
 */
export default function BrowserFrame({ children }) {
  return (
    <div
      className="relative mx-auto h-[250px] w-full max-w-[1280px] overflow-hidden rounded-t-[24px] border border-b-0 border-black/[.06] bg-white [mask-image:linear-gradient(to_bottom,#000_62%,transparent_100%)] sm:h-[400px] lg:h-[570px] xl:h-[680px]"
      role="group"
      aria-label="Product preview"
    >
      <div className="relative h-[52px] bg-white" aria-hidden>
        <div className="absolute left-3 top-[20px] flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#fe5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <SidebarLeft size={22} color="#6b6a69" className="absolute left-[95px] top-[15px] hidden lg:block" />
        <ArrowLeft2 size={20} color="#55524e" className="absolute left-[154px] top-[16px] hidden lg:block" />
        <ArrowRight2 size={20} color="#b9b8b6" className="absolute left-[186px] top-[16px] hidden lg:block" />
        <span className="absolute left-[320px] top-[17px] hidden lg:block">
          <ShieldHalf />
        </span>
        <div className="absolute inset-y-[12px] left-[72px] right-3 flex items-center justify-center gap-[6px] rounded-md bg-fog text-[12px] tracking-[-0.005em] text-[#55524e] sm:left-[130px] lg:left-[349px] lg:right-[348px]">
          <Lock1 size={12} variant="Bold" color="#55524e" />
          {BRAND.toLowerCase()}.ai
          <Reload className="absolute right-[6px] top-[6px]" />
        </div>
        <DownloadCircle className="absolute right-[78px] top-[16px] hidden lg:block" />
        <Add size={22} color="#55524e" className="absolute right-[45px] top-[15px] hidden lg:block" />
        <Copy size={20} color="#55524e" className="absolute right-[14px] top-[16px] hidden lg:block" />
      </div>
      {/* Dashboard mounts here. */}
      <div data-slot="dashboard" className="absolute inset-x-0 bottom-0 top-[52px] bg-fog">
        {children}
      </div>
    </div>
  );
}
