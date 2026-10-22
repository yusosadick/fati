import Landing from "@/components/landing/Landing";

// Page-level metadata for the landing route (the root layout is left untouched).
export const metadata = {
  title: "Fati: business management and CRM platform",
  description:
    "Fati is a business management and CRM platform in development by FATI ENTERPRISE, for business owners and growing companies. Explore the interface preview.",
};

export default function Page() {
  return <Landing />;
}
