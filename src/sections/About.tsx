import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <SectionTitle
          eyebrow="About Me"
          title="Get to know me"
        />

        <div className="grid md:grid-cols-2 gap-10">
          {/* About Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Professional Summary
            </h3>

            <p className="text-slate-400 leading-relaxed">
              I am a Computer Science undergraduate at APIIT
              University with a strong passion for full-stack
              development, cloud technologies, and software
              engineering. I enjoy building scalable applications
              and solving real-world problems through technology.
            </p>
          </div>

          {/* Career Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Career Objective
            </h3>

            <p className="text-slate-400 leading-relaxed">
              My objective is to become a highly skilled Software
              Engineer while continuously improving my technical
              expertise in modern web technologies, cloud
              computing, and artificial intelligence.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}