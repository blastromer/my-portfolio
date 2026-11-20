import { Icon, type IconName } from "@/components/icons";

const stats: { icon: IconName; value: string; label: string }[] = [
  { icon: "clock", value: "12+", label: "Years in Software Engineering" },
  { icon: "rocket", value: "140K+", label: "Marketplace Items Managed" },
  { icon: "layers", value: "3+", label: "Years Microservices" },
  { icon: "nodes", value: "3+", label: "Years Kafka" },
];

export function Stats() {
  return (
    <section aria-label="Experience highlights" className="mx-auto w-full max-w-[1180px] px-5 py-3">
      <ul className="grid grid-cols-2 divide-x divide-y divide-line overflow-hidden rounded-2xl border border-line bg-card shadow-[0_18px_40px_rgb(3_6_22/0.18)] lg:grid-cols-4 lg:divide-y-0">
        {stats.map((stat) => (
          <li key={stat.label} className="flex flex-col items-center gap-1 px-3 py-5 text-center">
            <Icon name={stat.icon} className="size-4 text-[#b7a6ff]" />
            <strong className="text-2xl tracking-tight">{stat.value}</strong>
            <span className="max-w-[18ch] text-xs text-muted">{stat.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
