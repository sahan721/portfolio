"use client";

import Container from "@/components/ui/Container";

const navItems = [
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Education",
  "Contact",
];

export default function Navbar() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      const yOffset = -80; // navbar height
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <Container>
        <nav className="flex items-center justify-between h-20">
          <h1 className="text-2xl font-bold text-white">
            Sahan<span className="text-blue-500">.</span>
          </h1>

          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleScroll(item.toLowerCase())}
                  className="text-slate-300 hover:text-blue-500 transition-colors"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}