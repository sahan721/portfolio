import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const education = [
  {
    degree: "BSc (Hons) Computer Science",
    institution: "APIIT Sri Lanka / Staffordshire University",
    period: "2023 - Present",
    description:
      "Currently pursuing a degree in Computer Science with a focus on software engineering, web development, and modern technologies.",
  },
  {
    degree: "G.C.E Advanced Level",
    institution: "Combined Mathematics Stream",
    period: "Completed",
    description:
      "Completed Advanced Level studies with a strong foundation in mathematics and analytical problem solving.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24">
      <Container>
        <SectionTitle
          eyebrow="Education"
          title="Academic Background"
        />

        <div className="space-y-8">
          {education.map((item) => (
            <div
              key={item.degree}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    {item.degree}
                  </h3>

                  <p className="text-blue-500 mb-4">
                    {item.institution}
                  </p>

                  <p className="text-slate-400">
                    {item.description}
                  </p>
                </div>

                <span className="text-slate-400 whitespace-nowrap">
                  {item.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}