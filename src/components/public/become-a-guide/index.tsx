"use client"; 
import BecomeAGuideHero from "./Hero";
import BecomeAGuideBenefits from "./Benefits";
import BecomeAGuideRequirements from "./Requirements";
import BecomeAGuideApplicationForm from "./ApplicationForm";
import BecomeAGuideFAQ from "./FAQ";

function BecomeAGuidePage() {
  return (
    <main className="grow">
      {/* Hero Section */}
      <BecomeAGuideHero />

      {/* Benefits Section */}
      <BecomeAGuideBenefits />

      {/* Requirements Section */}
      <BecomeAGuideRequirements />

      {/* Application Form Section */}
      <BecomeAGuideApplicationForm />

      {/* FAQ Section */}
      <BecomeAGuideFAQ />
    </main>
  );
}
export default BecomeAGuidePage;
