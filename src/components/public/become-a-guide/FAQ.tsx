
const commonQuestions = [
            {
              q: "How long does approval take?",
              a: "Most applications are reviewed within 48 hours. You'll receive an email with next steps.",
            },
            {
              q: "Do I need prior experience?",
              a: "Not necessarily. We value passion and local knowledge. Training and support are provided.",
            },
            {
              q: "Can I work part-time?",
              a: "Absolutely! Set your own schedule and only work the tours you want to lead.",
            }
          ]

const BecomeAGuideFAQ = () => {

  return (
    <section className="py-8 sm:py-16 ">
      <div className="max-w-4xl mx-auto px-2 sm:px-4">
        <h2 className="text-2xl font-bold text-foreground mb-6 sm:mb-12 text-center">
          Common Questions
        </h2>

        <div className="space-y-3 sm:space-y-6">
          {commonQuestions.map((item, idx) => (
            <div key={idx} className="border border-border rounded-lg p-4 sm:p-6">
              <h3 className="font-semibold text-foreground mb-1 sm:mb-2">{item.q}</h3>
              <p className=" text-sm sm:text-base text-muted-foreground">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BecomeAGuideFAQ;
