import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Moon, Flame, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const vibes = [
  { id: "night-drive", label: "Night Drive", icon: Moon, desc: "Chill beats, dark roads" },
  { id: "party", label: "Party", icon: Flame, desc: "Loud, wild, unhinged" },
  { id: "chill", label: "Chill", icon: Coffee, desc: "Laid back, easy vibes" },
] as const;

const CreateRoom = () => {
  const navigate = useNavigate();
  const [selectedVibe, setSelectedVibe] = useState<string | null>(null);
  const [playerName, setPlayerName] = useState("");

  const handleCreate = () => {
    if (!selectedVibe || !playerName.trim()) return;
    // Generate a mock room code
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    navigate(`/lobby/${code}?host=true&vibe=${selectedVibe}&name=${encodeURIComponent(playerName)}`);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="w-full max-w-md">
        <button
          onClick={() => navigate("/")}
          className="mb-8 flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="font-body text-sm">Back</span>
        </button>

        <h1 className="mb-2 font-display text-4xl font-black text-foreground">
          CREATE <span className="text-primary text-glow-primary">ROOM</span>
        </h1>
        <p className="mb-8 font-body text-muted-foreground">Pick a vibe. Set the tone.</p>

        {/* Name input */}
        <div className="mb-8">
          <label className="mb-2 block font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Your Name
          </label>
          <input
            type="text"
            maxLength={16}
            placeholder="DJ Shadow..."
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            className="h-12 w-full rounded-lg border border-border bg-secondary/50 px-4 font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
        </div>

        {/* Vibe selection */}
        <label className="mb-3 block font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Choose Vibe
        </label>
        <div className="mb-8 flex flex-col gap-3">
          {vibes.map((vibe) => {
            const Icon = vibe.icon;
            const isSelected = selectedVibe === vibe.id;
            return (
              <button
                key={vibe.id}
                onClick={() => setSelectedVibe(vibe.id)}
                className={`flex items-center gap-4 rounded-xl border p-4 text-left transition-all duration-200 ${
                  isSelected
                    ? "border-primary bg-primary/10 glow-primary"
                    : "border-border bg-secondary/30 hover:border-primary/30"
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg ${
                    isSelected ? "bg-primary/20" : "bg-secondary"
                  }`}
                >
                  <Icon className={`h-6 w-6 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <div>
                  <div className="font-display text-lg font-bold text-foreground">{vibe.label}</div>
                  <div className="font-body text-sm text-muted-foreground">{vibe.desc}</div>
                </div>
              </button>
            );
          })}
        </div>

        <Button
          variant="hero"
          size="xl"
          className="w-full"
          onClick={handleCreate}
          disabled={!selectedVibe || !playerName.trim()}
        >
          Create Room
        </Button>
      </div>
    </div>
  );
};

export default CreateRoom;
