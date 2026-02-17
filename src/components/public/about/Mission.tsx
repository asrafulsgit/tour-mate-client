
const AboutMission = () => {
  return (
   <section className="py-8 sm:py-16 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-2 sm:px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center">
              <div>
                <h2 className="heading text-2xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-6">
                  Our Story
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-2 sm:mb-4 leading-relaxed">
                  TourMate was founded in 2025 with a simple vision: to revolutionize the way people travel and experience new destinations.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground mb-2 sm:mb-4 leading-relaxed">
                  We started as a small team of travel enthusiasts frustrated by impersonal tour experiences and inflated prices. We wanted to create a platform that would directly connect travelers with local guides—real people who could share authentic, personalized experiences.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Today, TourMate has grown into a thriving community of over 50,000 travelers and 2,500 verified guides across Asia, providing life-changing experiences and creating economic opportunities for local communities.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center bg-primary/10 rounded-lg p-4 sm:p-8 text-center">
                  <div className="text-2xl sm:text-4xl font-bold text-primary sm:mb-2">2025</div>
                  <p className="text-foreground font-medium">Founded</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-accent/10 rounded-lg p-4 sm:p-8 text-center">
                  <div className="text-2xl sm:text-4xl font-bold text-accent sm:mb-2">1+</div>
                  <p className="text-foreground font-medium">Years Operating</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-primary/10 rounded-lg p-4 sm:p-8 text-center">
                  <div className="text-2xl sm:text-4xl font-bold text-primary sm:mb-2">1K+</div>
                  <p className="text-foreground font-medium">Travelers</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-accent/10 rounded-lg p-4 sm:p-8 text-center">
                  <div className="text-2xl sm:text-4xl font-bold text-accent sm:mb-2">8+</div>
                  <p className="text-foreground font-medium">Guides</p>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default AboutMission
