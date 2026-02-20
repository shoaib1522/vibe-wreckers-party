interface VibeMeterProps {
  level: number;
}

const VibeMeter = ({ level }: VibeMeterProps) => {
  const getColor = () => {
    if (level > 60) return "bg-vibe-good";
    if (level > 30) return "bg-vibe-mid";
    return "bg-vibe-bad";
  };

  const getGlow = () => {
    if (level > 60) return "shadow-[0_0_20px_hsl(140_70%_50%/0.4)]";
    if (level > 30) return "shadow-[0_0_20px_hsl(45_90%_55%/0.4)]";
    return "shadow-[0_0_20px_hsl(0_80%_55%/0.4)]";
  };

  const getLabel = () => {
    if (level > 80) return "🔥 FIRE";
    if (level > 60) return "✨ VIBING";
    if (level > 40) return "😐 MID";
    if (level > 20) return "😬 SUS";
    return "💀 DEAD";
  };

  return (
    <div className="glass rounded-xl p-4">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-display text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Vibe Meter
        </span>
        <span className="font-display text-sm font-bold text-foreground">{getLabel()}</span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className={`h-full rounded-full transition-all duration-700 ${getColor()} ${getGlow()}`}
          style={{ width: `${level}%` }}
        />
      </div>
      <div className="mt-1 text-right font-body text-xs text-muted-foreground">{level}%</div>
    </div>
  );
};

export default VibeMeter;
