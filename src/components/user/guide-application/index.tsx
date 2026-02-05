"use client";
import { useState } from "react";
import { mockGuideApplications } from "@/mock/guide-applications";
import UserHeader from "../UserHeader";
import SuccessMessage from "./SuccessMessage";
import ApplicationForm from "./ApplicationForm";
import ApplicationDetails from "./ApplicationDetails";
import NotFoundApplication from "./NotFoundApplication";

export default function GuideApplicationPage() {
  const [activeTab, setActiveTab] = useState<"status" | "new">("status");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  // Get user's application if exists
  const userApplication = mockGuideApplications.find(
    (app) => app.userId === "user",
  );

  return (
    <main className="grow">
      {/* Header */}
      <UserHeader
        title="Become a Guide"
        subTitle="Share your expertise and earn by guiding travelers"
      />

      {/* Content */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-2 sm:px-4">
          {/* Tabs */}
          <div className="flex gap-4 mb-4 sm:mb-8 border-b border-border">
            <button
              onClick={() => setActiveTab("status")}
              className={`px-4 py-3 font-medium transition border-b-2 ${
                activeTab === "status"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Status
            </button>
            {!userApplication && (
              <button
                onClick={() => setActiveTab("new")}
                className={`px-4 py-3 font-medium transition border-b-2 ${
                  activeTab === "new"
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                Application
              </button>
            )}
          </div>

          {/* Success Message */}
          {submitSuccess && <SuccessMessage />}

          {/* Application Status */}
          {activeTab === "status" && (
            <div>
              {userApplication ? (
                <ApplicationDetails userApplication={userApplication} />
              ) : (
                <NotFoundApplication />
              )}
            </div>
          )}

          {/* New Application Form */}
          {activeTab === "new" && !userApplication && <ApplicationForm />}
        </div>
      </section>
    </main>
  );
}
