export default function TermsOfServicePage() {
  return (
    <main className="grow">
      {/* Hero Section */}
      <section className="py-8 sm:py-16 bg-linear-to-b from-primary/10 to-background border-b border-border">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Terms of Service
          </h1>
          <p className="text-muted-foreground">Last updated: January 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 sm:py-16">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 prose prose-invert">
          <div className="space-y-4 sm:space-y-8">
            {/* Section */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                By accessing and using TourMate, you agree to be bound by these
                Terms of Service. If you do not agree to any part of these
                terms, you may not use our service.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-4">
                2. Use License
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-2 sm:mb-4">
                Permission is granted to temporarily download one copy of the
                materials on TourMate for personal, non-commercial viewing only.
                Under this license, you may not:
              </p>
              <ul className="text-sm sm:text-base sm:space-y-3 text-muted-foreground">
                <li>• Modify or copy the materials</li>
                <li>• Use the materials for commercial purposes</li>
                <li>• Attempt to reverse engineer any software</li>
                <li>• Remove copyright or proprietary notices</li>
                <li>• Transfer materials to another person or server</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-4">
                3. Disclaimer
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                The materials on TourMate are provided on an “as is” basis.
                TourMate makes no warranties, expressed or implied, including
                fitness for a particular purpose or non-infringement.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-4">
                4. Limitations
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                In no event shall TourMate be liable for damages including loss
                of data, profit, or business interruption arising from use of
                the platform.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-4">
                5. Accuracy of Materials
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                TourMate does not guarantee that materials are accurate,
                complete, or current. Changes may be made at any time without
                notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-4">
                6. User Responsibilities
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-2 sm:mb-4">
                You agree to:
              </p>
              <ul className="text-sm sm:text-base sm:space-y-3 text-muted-foreground">
                <li>• Provide accurate account information</li>
                <li>• Keep your credentials secure</li>
                <li>• Be responsible for all account activity</li>
                <li>• Follow applicable laws and regulations</li>
                <li>• Respect other users</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-4">
                7. Booking & Cancellation
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Bookings cancelled up to 14 days before the tour date receive a
                full refund. Later cancellations may receive partial or no
                refund depending on timing.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-4">
                8. Payment Terms
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Payments are processed via third-party providers. You authorize
                TourMate to charge your selected payment method.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-4">
                9. Termination
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                TourMate may suspend or terminate accounts that violate these
                terms without prior notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-4">
                10. Contact Information
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Questions about these Terms can be sent to legal@tourmate.com or
                via our contact page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
