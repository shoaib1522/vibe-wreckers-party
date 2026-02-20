import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Moon, Flame, Coffee, Swords } from "lucide-react";
import { Button } from "@/components/ui/button";

const vibes = [
  { id: "night-drive", label: "Night Raid", icon: Moon, desc: "Stealth mode. Dark beats.", emoji: "🌙" },
  { id: "party", label: "Full Assault", icon: Flame, desc: "Maximum chaos. No survivors.", emoji: "💥" },
  { id: "chill", label: "Cold War", icon: Coffee, desc: "Slow burn. Silent kills.", emoji: "🧊" },
] as const;

const CreateRoom = () => {
  const navigate = useNavigate();
  const [selectedVibe, setSelectedVibe] = useState<string | null>(null);
  const [playerName, setPlayerName] = useState("");

  const handleCreate = () => {
    if (!selectedVibe || !playerName.trim()) return;
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    navigate(`/lobby/${code}?host=true&vibe=${selectedVibe}&name=${encodeURIComponent(playerName)}`);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="w-full max-w-md">
        <button
          onClick={() => navigate("/")}
          className="mb-6 flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="font-body text-sm">Retreat</span>
        </button>

        <h1 className="mb-1 font-display text-5xl text-foreground">
          CREATE <span className="text-primary text-glow-primary">BATTLE</span> ⚔️
        </h1>
        <p className="mb-8 font-body text-muted-foreground">Choose your battlefield. Name your warrior.</p>

        {/* Name */}
        <div className="mb-6">
          <label className="mb-2 block font-display text-sm text-primary">
            🎖️ Warrior Name
          </label>
          <input
            type="text"
            maxLength={16}
            placeholder="xX_BeatSlayer_Xx"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            className="h-12 w-full rounded-xl border-2 border-border bg-card px-4 font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
        </div>

        {/* Vibe selection */}
        <label className="mb-3 block font-display text-sm text-primary">
          🗺️ Battle Mode
        </label>
        <div className="mb-8 flex flex-col gap-3">
          {vibes.map((vibe) => {
            const isSelected = selectedVibe === vibe.id;
            return (
              <button
                key={vibe.id}
                onClick={() => setSelectedVibe(vibe.id)}
                className={`flex items-center gap-4 rounded-xl border-2 p-4 text-left transition-all duration-150 ${
                  isSelected
                    ? "border-primary bg-primary/10 btn-3d"
                    : "border-border bg-card hover:border-primary/30 hover:scale-[1.02]"
                }`}
              >
                <span className="text-3xl">{vibe.emoji}</span>
                <div>
                  <div className="font-display text-xl text-foreground">{vibe.label}</div>
                  <div className="font-body text-sm text-muted-foreground">{vibe.desc}</div>
                </div>
                {isSelected && <span className="ml-auto text-xl">✅</span>}
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
          <Swords className="mr-2 h-5 w-5" />
          Deploy Squad
        </Button>
      </div>
    </div>
  );
};

export default CreateRoom;
