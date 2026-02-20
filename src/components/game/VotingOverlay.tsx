import { useState, useEffect } from "react";

interface VotingOverlayProps {
  onClose: () => void;
}

const players = [
  { id: "1", name: "DJ Chaos", avatar: "🔥" },
  { id: "2", name: "VibeQueen", avatar: "✨" },
  { id: "3", name: "BassHead", avatar: "🎵" },
];

const VotingOverlay = ({ onClose }: VotingOverlayProps) => {
  const [voted, setVoted] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(15);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm">
      <div className="w-full max-w-sm px-6 text-center animate-scale-in">
        <div className="mb-2 font-display text-xs font-semibold uppercase tracking-widest text-destructive">
          🚨 Emergency Vote
        </div>
        <h2 className="mb-6 font-display text-3xl font-black text-foreground">
          Who is the <span className="text-accent text-glow-accent">Saboteur</span>?
        </h2>

        {/* Timer */}
        <div className="mb-6 font-display text-5xl font-black text-primary text-glow-primary animate-count-tick">
          {timeLeft}
        </div>

        {/* Player buttons */}
        <div className="flex flex-col gap-3">
          {players.map((p) => (
            <button
              key={p.id}
              onClick={() => !revealed && setVoted(p.id)}
              disabled={revealed}
              className={`flex items-center gap-3 rounded-xl border-2 p-4 transition-all ${
                voted === p.id
                  ? "border-primary bg-primary/10 glow-primary"
                  : "border-border bg-secondary/30 hover:border-primary/40"
              } ${revealed && p.id === "1" ? "border-accent glow-accent" : ""}`}
            >
              <span className="text-2xl">{p.avatar}</span>
              <span className="flex-1 text-left font-display font-bold text-foreground">
                {p.name}
              </span>
              {revealed && p.id === "1" && (
                <span className="font-display text-xs font-bold text-accent">SABOTEUR!</span>
              )}
              {voted === p.id && !revealed && (
                <span className="font-display text-xs font-bold text-primary">YOUR VOTE</span>
              )}
            </button>
          ))}
        </div>

        {revealed && (
          <p className="mt-6 font-body text-sm text-vibe-good animate-fade-in">
            ✅ The saboteur was caught!
          </p>
        )}
      </div>
    </div>
  );
};

export default VotingOverlay;
