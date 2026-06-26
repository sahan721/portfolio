import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <Container>
        <SectionTitle
          eyebrow="Contact"
          title="Let's Work Together"
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">
                Email
              </h3>

              <p className="text-slate-400">
                nimnakasahan6@gmail.com
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">
                LinkedIn
              </h3>

              <p className="text-slate-400">
                linkedin.com/in/sahan-pinnagaspitiya-931042325
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">
                GitHub
              </h3>

              <p className="text-slate-400">
                github.com/sahan721
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6">
            <div>
              <label className="block mb-2">Name</label>

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2">Email</label>

              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2">Message</label>

              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500 resize-none"
              />
            </div>

            <button
              className="w-full bg-blue-600 hover:bg-blue-700 transition-colors py-3 rounded-xl font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}