import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const RoundEnd = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="w-full max-w-md text-center">
        {/* Victory header */}
        <div className="mb-2 font-display text-lg text-primary animate-bounce-in">
          🏆 BATTLE COMPLETE 🏆
        </div>

        {/* Saboteur reveal */}
        <div className="mb-6 animate-dramatic-reveal">
          <div className="mb-1 font-display text-sm text-muted-foreground">
            THE TRAITOR WAS
          </div>
          <div className="mb-3 flex justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-accent/20 text-5xl border-4 border-accent animate-war-pulse">
              🔥
            </div>
          </div>
          <h1 className="font-display text-5xl text-accent text-glow-accent">
            xX_Chaos_Xx
          </h1>
          <p className="mt-1 font-display text-sm text-muted-foreground">💀 ELIMINATED 💀</p>
        </div>

        {/* Stats */}
        <div className="mb-6 grid grid-cols-3 gap-3">
          {[
            { label: "Vibe Score", value: "72%", emoji: "🛡️", color: "text-battle-green" },
            { label: "Songs Fired", value: "12", emoji: "🎵", color: "text-primary" },
            { label: "Votes Cast", value: "8", emoji: "🗳️", color: "text-accent" },
          ].map((stat) => (
            <div key={stat.label} className="battle-card p-4">
              <div className="text-2xl mb-1">{stat.emoji}</div>
              <div className={`font-display text-3xl ${stat.color}`}>{stat.value}</div>
              <div className="font-body text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Chaotic moment */}
        <div className="mb-8 battle-card p-4">
          <div className="mb-2 font-display text-sm text-accent">
            💥 MOST CHAOTIC MOMENT 💥
          </div>
          <p className="font-body text-sm text-foreground">
            When <span className="font-bold text-accent">xX_Chaos_Xx</span> queued "Baby Shark" 
            right after "Blinding Lights" 🦈💀
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <Button variant="hero" size="xl" className="w-full" onClick={() => navigate("/reveal?role=keeper")}>
            ⚔️ Rematch
          </Button>
          <Button variant="outline" size="lg" className="w-full" onClick={() => navigate("/")}>
            🏠 Base Camp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoundEnd;
