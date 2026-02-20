import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const RoundEnd = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="w-full max-w-md text-center">
        {/* Reveal */}
        <div className="mb-4 animate-dramatic-reveal">
          <div className="mb-2 font-display text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            The Saboteur was
          </div>
          <div className="mb-2 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent/20 text-4xl glow-accent">
              🔥
            </div>
          </div>
          <h1 className="font-display text-4xl font-black text-accent text-glow-accent">
            DJ Chaos
          </h1>
        </div>

        {/* Stats */}
        <div className="mb-8 mt-8 grid grid-cols-3 gap-3">
          {[
            { label: "Vibe Score", value: "72%", color: "text-vibe-good" },
            { label: "Songs Played", value: "12", color: "text-primary" },
            { label: "Votes Cast", value: "8", color: "text-accent" },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-4">
              <div className={`font-display text-2xl font-black ${stat.color}`}>{stat.value}</div>
              <div className="font-body text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Most chaotic moment */}
        <div className="mb-8 glass rounded-xl p-4">
          <div className="mb-2 font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            🌪️ Most Chaotic Moment
          </div>
          <p className="font-body text-sm text-foreground">
            When <span className="text-accent font-semibold">DJ Chaos</span> queued "Baby Shark" right after "Blinding Lights"
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <Button variant="hero" size="xl" className="w-full" onClick={() => navigate("/reveal?role=keeper")}>
            Play Again
          </Button>
          <Button variant="outline" size="lg" className="w-full" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoundEnd;
