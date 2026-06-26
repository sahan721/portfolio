export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-xl font-bold">
              Sahan<span className="text-blue-500">.</span>
            </h3>

            <p className="text-slate-400 text-sm mt-2">
              Building modern digital experiences.
            </p>
          </div>

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Sahan Nimnaka. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}