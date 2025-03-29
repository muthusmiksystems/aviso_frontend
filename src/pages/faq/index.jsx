import Billing from "./Billing";
import FaqSection from "./FaqSection";
import ConnectUS from "../home/Connectus";
import CommunitySection from "./Community";
import FaqBanner from "./FaqBanner";

export default function () {
  return (
    <main className="min-h-screen font-[OmnesArabic]">
      <FaqBanner />
      <div className="px-8 mt-12 md:mt-28">
        <FaqSection />
        <Billing />
        <CommunitySection />
      </div>
      <div className="mt-28">
        <ConnectUS />
      </div>
    </main>
  );
}
