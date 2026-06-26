interface SectionTitleProps {
  eyebrow: string;
  title: string;
}

export default function SectionTitle({
  eyebrow,
  title,
}: SectionTitleProps) {
  return (
    <div className="mb-12">
      <p className="text-blue-500 font-medium mb-2">
        {eyebrow}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        {title}
      </h2>

      <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
    </div>
  );
}