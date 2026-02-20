import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const RoleReveal = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const role = searchParams.get("role") || "keeper";
  const isSaboteur = role === "saboteur";

  const [phase, setPhase] = useState<"loading" | "reveal" | "ready">("loading");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("reveal"), 1500);
    const t2 = setTimeout(() => setPhase("ready"), 3500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      {phase === "loading" && (
        <div className="flex flex-col items-center gap-4 animate-fade-in">
          <div className="h-16 w-16 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
          <p className="font-display text-lg font-semibold text-muted-foreground">
            Assigning roles...
          </p>
        </div>
      )}

      {phase === "reveal" && (
        <div className="flex flex-col items-center gap-6 text-center animate-dramatic-reveal">
          <div
            className={`flex h-32 w-32 items-center justify-center rounded-full text-6xl ${
              isSaboteur ? "bg-accent/20 glow-accent" : "bg-primary/20 glow-primary"
            }`}
          >
            {isSaboteur ? "🎭" : "🎧"}
          </div>
          <div>
            <div className="mb-2 font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              You are the
            </div>
            <h1
              className={`font-display text-5xl font-black sm:text-7xl ${
                isSaboteur ? "text-accent text-glow-accent" : "text-primary text-glow-primary"
              }`}
            >
              {isSaboteur ? "SABOTEUR" : "VIBE"}
            </h1>
            <h2
              className={`font-display text-3xl font-black sm:text-5xl ${
                isSaboteur ? "text-accent/70" : "text-primary/70"
              }`}
            >
              {isSaboteur ? "DJ" : "KEEPER"}
            </h2>
          </div>
          <p className="max-w-xs font-body text-muted-foreground">
            {isSaboteur
              ? "Sabotage the playlist. Add off-vibe songs. Don't get caught."
              : "Keep the vibe alive. Watch for suspicious song choices. Vote out the saboteur."}
          </p>
        </div>
      )}

      {phase === "ready" && (
        <div className="flex flex-col items-center gap-6 text-center">
          <div
            className={`flex h-24 w-24 items-center justify-center rounded-full text-5xl ${
              isSaboteur ? "bg-accent/20" : "bg-primary/20"
            }`}
          >
            {isSaboteur ? "🎭" : "🎧"}
          </div>
          <h2
            className={`font-display text-3xl font-black ${
              isSaboteur ? "text-accent" : "text-primary"
            }`}
          >
            {isSaboteur ? "SABOTEUR DJ" : "VIBE KEEPER"}
          </h2>
          <button
            onClick={() => navigate(`/game?role=${role}`)}
            className={`mt-4 rounded-xl px-10 py-4 font-display text-lg font-bold uppercase tracking-wider transition-all hover:scale-105 ${
              isSaboteur
                ? "bg-accent text-accent-foreground glow-accent"
                : "bg-primary text-primary-foreground glow-primary"
            }`}
          >
            Let's Go
          </button>
        </div>
      )}
    </div>
  );
};

export default RoleReveal;
