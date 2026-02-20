import { useState, useEffect } from "react";

interface VotingOverlayProps {
  onClose: () => void;
}

const players = [
  { id: "1", name: "xX_Chaos_Xx", avatar: "🔥" },
  { id: "2", name: "VibeQueen420", avatar: "👑" },
  { id: "3", name: "BassDropper", avatar: "💣" },
];

const VotingOverlay = ({ onClose }: VotingOverlayProps) => {
  const [voted, setVoted] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(10);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setRevealed(true);
      setTimeout(onClose, 3000);
      return;
    }
    const t = setTimeout(() => setTimeLeft((v) => v - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm">
      <div className="w-full max-w-sm px-6 text-center animate-slam-down">
        {/* Header */}
        <div className="mb-2 text-4xl">🚨</div>
        <div className="mb-1 font-display text-sm text-accent">
          EMERGENCY TRIBUNAL
        </div>
        <h2 className="mb-6 font-display text-4xl text-foreground">
          WHO'S THE <span className="text-accent text-glow-accent">SPY</span>?
        </h2>

        {/* Timer */}
        <div className={`mb-6 font-display text-7xl animate-count-tick ${
          timeLeft <= 3 ? "text-accent text-glow-accent" : "text-primary text-glow-primary"
        }`}>
          {timeLeft}
        </div>

        {/* Player buttons */}
        <div className="flex flex-col gap-3">
          {players.map((p) => (
            <button
              key={p.id}
              onClick={() => !revealed && setVoted(p.id)}
              disabled={revealed}
              className={`flex items-center gap-3 rounded-xl border-2 p-4 transition-all duration-150 ${
                voted === p.id
                  ? "border-primary bg-primary/15 btn-3d"
                  : "border-border bg-card hover:border-primary/40 hover:scale-[1.02]"
              } ${revealed && p.id === "1" ? "border-accent bg-accent/15 btn-3d-red" : ""}`}
            >
              <span className="text-3xl">{p.avatar}</span>
              <span className="flex-1 text-left font-display text-lg text-foreground">
                {p.name}
              </span>
              {revealed && p.id === "1" && (
                <span className="font-display text-sm text-accent">💀 SPY!</span>
              )}
              {voted === p.id && !revealed && (
                <span className="font-display text-xs text-primary">🎯 TARGET</span>
              )}
            </button>
          ))}
        </div>

        {revealed && (
          <div className="mt-6 animate-bounce-in">
            <p className="font-display text-lg text-battle-green">
              ✅ TRAITOR ELIMINATED!
            </p>
            <p className="font-body text-sm text-muted-foreground">The squad survives... for now 💀</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VotingOverlay;
