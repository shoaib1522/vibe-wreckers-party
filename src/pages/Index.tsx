import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swords, Users, Zap, Shield, Crosshair } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const navigate = useNavigate();
  const [joinCode, setJoinCode] = useState("");
  const [showJoin, setShowJoin] = useState(false);

  const handleJoin = () => {
    if (joinCode.length === 6) {
      navigate(`/lobby/${joinCode}`);
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      </div>

      {/* Floating emojis */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {["💣", "🎵", "⚔️", "🔥", "💀", "🎸", "🛡️", "🎯"].map((emoji, i) => (
          <span
            key={i}
            className="absolute text-3xl opacity-20 animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + i * 0.2}s`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        {/* Title */}
        <div className="animate-slam-down">
          <div className="mb-3 flex items-center justify-center gap-2">
            <Swords className="h-8 w-8 text-accent" />
            <span className="font-display text-lg text-accent">⚡ MUSIC WARFARE ⚡</span>
            <Swords className="h-8 w-8 text-accent" />
          </div>
          <h1 className="font-display text-7xl text-foreground sm:text-9xl leading-none" style={{ WebkitTextStroke: '2px hsl(25, 95%, 35%)' }}>
            VIBE
            <br />
            <span className="text-primary text-glow-primary">CHECK</span>
          </h1>
          <p className="mt-4 max-w-sm font-body text-base text-secondary-foreground">
            Someone's <span className="font-bold text-accent">sabotaging</span> the playlist.
            <br />
            Hunt them down. <span className="font-bold text-primary">No mercy.</span> 💥
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <Button variant="hero" size="xl" onClick={() => navigate("/create")}>
            <Swords className="mr-2 h-6 w-6" />
            Create Battle
          </Button>

          {!showJoin ? (
            <Button variant="outline" size="lg" onClick={() => setShowJoin(true)}>
              <Crosshair className="mr-1 h-4 w-4" />
              Join Fight
            </Button>
          ) : (
            <div className="flex items-center gap-2">
              <input
                type="text"
                maxLength={6}
                placeholder="CODE"
                value={joinCode}
                onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                className="h-12 w-36 rounded-xl border-2 border-primary/40 bg-card px-4 text-center font-display text-2xl tracking-[0.3em] text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                autoFocus
              />
              <Button variant="default" size="lg" onClick={handleJoin} disabled={joinCode.length !== 6}>
                ⚔️ GO
              </Button>
            </div>
          )}
        </div>

        {/* Feature cards */}
        <div className="mt-6 grid max-w-md grid-cols-3 gap-4 animate-slide-up" style={{ animationDelay: "0.5s" }}>
          {[
            { icon: "🎵", label: "Load Ammo", sub: "Queue songs" },
            { icon: "🕵️", label: "Hunt Spy", sub: "Find saboteur" },
            { icon: "💣", label: "Nuke 'Em", sub: "Vote them out" },
          ].map((f) => (
            <div key={f.label} className="battle-card flex flex-col items-center gap-2 p-4 hover:scale-105 transition-transform cursor-default">
              <span className="text-3xl animate-float">{f.icon}</span>
              <span className="font-display text-sm text-primary">{f.label}</span>
              <span className="font-body text-xs text-muted-foreground">{f.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
