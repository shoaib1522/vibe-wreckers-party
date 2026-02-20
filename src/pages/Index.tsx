import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Music, Users, Zap } from "lucide-react";
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
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      </div>

      {/* Animated equalizer bars */}
      <div className="absolute bottom-0 left-0 right-0 z-0 flex items-end justify-center gap-1 pb-0 opacity-20">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="w-1.5 rounded-t bg-primary"
            style={{
              height: `${Math.random() * 60 + 10}px`,
              animation: `equalizer ${0.8 + Math.random() * 0.8}s ease-in-out infinite`,
              animationDelay: `${i * 0.05}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        {/* Logo / Title */}
        <div className="animate-slide-up">
          <div className="mb-4 flex items-center justify-center gap-3">
            <Music className="h-10 w-10 text-primary" />
            <Zap className="h-6 w-6 text-accent" />
          </div>
          <h1 className="font-display text-6xl font-black tracking-tight text-foreground sm:text-8xl">
            VIBE
            <span className="text-primary text-glow-primary">CHECK</span>
          </h1>
          <p className="mt-4 max-w-md font-body text-lg text-muted-foreground">
            Someone is sabotaging the playlist.
            <br />
            <span className="text-accent">Find them before the vibe dies.</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <Button variant="hero" size="xl" onClick={() => navigate("/create")}>
            <Users className="mr-2 h-5 w-5" />
            Create Room
          </Button>

          {!showJoin ? (
            <Button variant="outline" size="lg" onClick={() => setShowJoin(true)}>
              Join Room
            </Button>
          ) : (
            <div className="flex items-center gap-2">
              <input
                type="text"
                maxLength={6}
                placeholder="ROOM CODE"
                value={joinCode}
                onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                className="h-12 w-40 rounded-lg border border-primary/30 bg-secondary/50 px-4 text-center font-display text-xl font-bold tracking-[0.3em] text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:glow-primary"
                autoFocus
              />
              <Button
                variant="default"
                size="lg"
                onClick={handleJoin}
                disabled={joinCode.length !== 6}
              >
                GO
              </Button>
            </div>
          )}
        </div>

        {/* Features */}
        <div
          className="mt-8 grid max-w-lg grid-cols-3 gap-6 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { icon: "🎵", label: "Queue Songs" },
            { icon: "🕵️", label: "Find the Spy" },
            { icon: "🗳️", label: "Vote Them Out" },
          ].map((f) => (
            <div key={f.label} className="flex flex-col items-center gap-2 glass rounded-xl p-4">
              <span className="text-2xl">{f.icon}</span>
              <span className="font-display text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                {f.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
