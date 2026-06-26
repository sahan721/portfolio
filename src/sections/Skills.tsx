import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const skills = {
  Languages: ["JavaScript", "TypeScript", "PHP", "Java", "Python"],
  Frameworks: ["Next.js", "React", "Laravel", "Flutter", "Tailwind CSS"],
  Databases: ["MySQL", "SQLite"],
  Tools: ["Git", "GitHub", "Postman", "AWS", "Docker"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <Container>
        <SectionTitle
          eyebrow="Skills"
          title="Technologies I Work With"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-6">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-slate-800 text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}