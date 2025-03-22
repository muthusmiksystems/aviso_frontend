import Billing from "./Billing";
import FaqSection from "./FaqSection";
import Footer from "../../components/common/Footer";
import ConnectUS from "../home/Connectus";
import CommunitySection from "./Community";

export default function () {
  return (
    <main className="min-h-screen ">
      <div className="px-8">
        <FaqSection />
        <Billing />
        <CommunitySection />
        <ConnectUS />
      </div>

      <Footer />
    </main>
  );
}
