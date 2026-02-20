interface VibeMeterProps {
  level: number;
}

const VibeMeter = ({ level }: VibeMeterProps) => {
  const getColor = () => {
    if (level > 60) return "bg-battle-green";
    if (level > 30) return "bg-primary";
    return "bg-accent";
  };

  const getLabel = () => {
    if (level > 80) return "🔥 DOMINATING";
    if (level > 60) return "⚔️ HOLDING STRONG";
    if (level > 40) return "😬 UNDER FIRE";
    if (level > 20) return "💀 CRITICAL";
    return "☠️ DEFEATED";
  };

  const getBarShadow = () => {
    if (level > 60) return "shadow-[0_0_15px_hsl(120_60%_45%/0.4)]";
    if (level > 30) return "shadow-[0_0_15px_hsl(45_100%_55%/0.4)]";
    return "shadow-[0_0_15px_hsl(0_85%_55%/0.4)]";
  };

  return (
    <div className="battle-card p-4">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-display text-sm text-primary">
          🛡️ Vibe Shield
        </span>
        <span className="font-display text-sm text-foreground">{getLabel()}</span>
      </div>
      <div className="h-4 w-full overflow-hidden rounded-full bg-secondary border border-border">
        <div
          className={`h-full rounded-full transition-all duration-700 ${getColor()} ${getBarShadow()}`}
          style={{ width: `${level}%` }}
        />
      </div>
      <div className="mt-1.5 flex justify-between">
        <span className="font-body text-xs text-muted-foreground">HP</span>
        <span className="font-display text-sm text-foreground">{level}/100</span>
      </div>
    </div>
  );
};

export default VibeMeter;
