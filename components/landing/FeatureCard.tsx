import type { LucideIcon } from "lucide-react";

export function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  index: string;
}) {
  return (
    <article className="group relative min-h-52 border-b border-zinc-200 p-6 transition-colors hover:bg-zinc-50 sm:p-7 lg:border-b-0 lg:border-r lg:last:border-r-0">
      <div className="flex items-start justify-between">
        <span className="flex size-10 items-center justify-center rounded-xl bg-zinc-950 text-white transition-transform group-hover:-translate-y-1">
          <Icon className="size-4.5" strokeWidth={1.8} />
        </span>
        <span className="font-mono text-[10px] text-zinc-400">{index}</span>
      </div>
      <h3 className="mt-8 text-base font-semibold tracking-[-0.02em]">{title}</h3>
      <p className="mt-2 max-w-[250px] text-sm leading-6 text-zinc-500">
        {description}
      </p>
    </article>
  );
}
