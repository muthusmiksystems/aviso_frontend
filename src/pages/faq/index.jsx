import Billing from "./Billing";
import FaqSection from "./FaqSection";
import Footer from "../../components/common/Footer";
import ConnectUS from "../home/Connectus";
import CommunitySection from "./Community";
import FaqBanner from "./FaqBanner";

export default function () {
  return (
    <main className="min-h-screen ">
      <FaqBanner />
      <div className="px-8 mt-12 md:mt-28">
        <FaqSection />
        <Billing />
        <CommunitySection />
        <ConnectUS />
      </div>

      <Footer />
    </main>
  );
}
