import clsx from "clsx";

const levels = ["light", "medium", "medium-dark", "dark"];
const labels: Record<string, string> = {
  light: "Light",
  medium: "Medium",
  "medium-dark": "Med-Dark",
  dark: "Dark",
};

export default function RoastIndicator({ level }: { level: string }) {
  const idx = levels.indexOf(level);
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {levels.map((l, i) => (
          <div
            key={l}
            className={clsx(
              "w-3 h-3 rounded-full transition-colors",
              i <= idx ? "bg-caramel" : "bg-oat-dark"
            )}
          />
        ))}
      </div>
      <span className="text-xs font-sans text-mist">{labels[level]}</span>
    </div>
  );
}
