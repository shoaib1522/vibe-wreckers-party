import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const RoleReveal = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const role = searchParams.get("role") || "keeper";
  const isSaboteur = role === "saboteur";

  const [phase, setPhase] = useState<"loading" | "reveal" | "ready">("loading");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("reveal"), 2000);
    const t2 = setTimeout(() => setPhase("ready"), 4500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      {phase === "loading" && (
        <div className="flex flex-col items-center gap-6 animate-fade-in">
          <div className="relative">
            <div className="h-20 w-20 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
            <span className="absolute inset-0 flex items-center justify-center text-3xl">⚔️</span>
          </div>
          <p className="font-display text-2xl text-foreground animate-pulse">
            Assigning Roles...
          </p>
          <p className="font-body text-sm text-muted-foreground">
            Choosing who will betray the squad 💀
          </p>
        </div>
      )}

      {phase === "reveal" && (
        <div className="flex flex-col items-center gap-6 text-center animate-dramatic-reveal">
          {/* Big icon */}
          <div
            className={`flex h-36 w-36 items-center justify-center rounded-full text-7xl ${
              isSaboteur
                ? "bg-accent/20 border-4 border-accent animate-war-pulse"
                : "bg-battle-green/20 border-4 border-battle-green glow-green"
            }`}
          >
            {isSaboteur ? "💀" : "🛡️"}
          </div>

          {/* Role text */}
          <div>
            <div className="mb-2 font-display text-lg text-muted-foreground">
              YOU ARE THE
            </div>
            <h1
              className={`font-display text-6xl sm:text-8xl leading-none ${
                isSaboteur ? "text-accent text-glow-accent" : "text-primary text-glow-primary"
              }`}
            >
              {isSaboteur ? "SABOTEUR" : "VIBE"}
            </h1>
            <h2
              className={`font-display text-4xl sm:text-5xl ${
                isSaboteur ? "text-accent/70" : "text-primary/70"
              }`}
            >
              {isSaboteur ? "☠️ SPY ☠️" : "⚔️ WARRIOR ⚔️"}
            </h2>
          </div>

          <p className="max-w-xs font-body text-secondary-foreground">
            {isSaboteur
              ? "Infiltrate the playlist. Drop vibe-killing tracks. Survive undetected. 🎭"
              : "Defend the vibe. Spot the imposter. Vote them out before it's too late. 🔍"}
          </p>
        </div>
      )}

      {phase === "ready" && (
        <div className="flex flex-col items-center gap-6 text-center animate-bounce-in">
          <div
            className={`flex h-24 w-24 items-center justify-center rounded-full text-5xl ${
              isSaboteur ? "bg-accent/20 border-3 border-accent" : "bg-battle-green/20 border-3 border-battle-green"
            }`}
          >
            {isSaboteur ? "💀" : "🛡️"}
          </div>
          <h2
            className={`font-display text-3xl ${
              isSaboteur ? "text-accent" : "text-primary"
            }`}
          >
            {isSaboteur ? "SABOTEUR SPY" : "VIBE WARRIOR"}
          </h2>
          <button
            onClick={() => navigate(`/game?role=${role}`)}
            className={`rounded-2xl px-12 py-5 font-display text-xl transition-all ${
              isSaboteur
                ? "bg-accent text-accent-foreground btn-3d-red"
                : "bg-primary text-primary-foreground btn-3d"
            }`}
          >
            {isSaboteur ? "🎭 Begin Infiltration" : "⚔️ Enter Battle"}
          </button>
        </div>
      )}
    </div>
  );
};

export default RoleReveal;
