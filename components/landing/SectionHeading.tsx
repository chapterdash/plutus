export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverted = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverted?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p
        className={`font-mono text-[11px] font-semibold uppercase tracking-[0.18em] ${
          inverted ? "text-white/45" : "text-zinc-500"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl ${
          inverted ? "text-white" : "text-zinc-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-7 sm:text-lg ${
            inverted ? "text-white/52" : "text-zinc-500"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
