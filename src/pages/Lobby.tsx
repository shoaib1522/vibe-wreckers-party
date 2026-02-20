import { useState, useEffect } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { Copy, Check, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const joiningPlayers = [
  { id: "2", name: "xX_Chaos_Xx", avatar: "🔥", rank: "Corporal" },
  { id: "3", name: "VibeQueen420", avatar: "👑", rank: "Sergeant" },
  { id: "4", name: "BassDropper", avatar: "💣", rank: "Private" },
];

const Lobby = () => {
  const { roomCode } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const isHost = searchParams.get("host") === "true";
  const vibe = searchParams.get("vibe") || "party";
  const playerName = searchParams.get("name") || "Soldier";

  const [players, setPlayers] = useState([{ id: "1", name: playerName, avatar: "⚔️", rank: "Commander" }]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timers = joiningPlayers.map((p, i) =>
      setTimeout(() => setPlayers((prev) => [...prev, p]), (i + 1) * 1200)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const copyCode = () => {
    navigator.clipboard.writeText(roomCode || "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="w-full max-w-md text-center">
        {/* Header */}
        <div className="mb-2 font-display text-sm text-accent">🏴 WAR ROOM 🏴</div>

        {/* Room code */}
        <button
          onClick={copyCode}
          className="group mb-2 inline-flex items-center gap-3 rounded-2xl border-2 border-primary/30 bg-card px-8 py-4 transition-all hover:border-primary btn-3d"
        >
          <span className="font-display text-5xl text-primary text-glow-primary tracking-[0.4em]">
            {roomCode}
          </span>
          {copied ? (
            <Check className="h-6 w-6 text-battle-green" />
          ) : (
            <Copy className="h-6 w-6 text-muted-foreground group-hover:text-primary" />
          )}
        </button>
        <p className="mb-6 font-body text-sm text-muted-foreground">
          Share this code to recruit soldiers 📡
        </p>

        {/* Battle mode badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border-2 border-border bg-card px-5 py-2">
          <span className="text-lg">
            {vibe === "night-drive" ? "🌙" : vibe === "party" ? "💥" : "🧊"}
          </span>
          <span className="font-display text-sm text-primary">
            {vibe === "night-drive" ? "Night Raid" : vibe === "party" ? "Full Assault" : "Cold War"}
          </span>
        </div>

        {/* Squad */}
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="font-display text-base text-foreground">
              SQUAD: {players.length}/8
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {players.map((player, i) => (
              <div
                key={player.id}
                className="battle-card flex items-center gap-3 p-3 animate-bounce-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="text-2xl">{player.avatar}</span>
                <div className="text-left">
                  <div className="font-display text-sm text-foreground">{player.name}</div>
                  <div className="font-body text-xs text-primary">{player.rank}</div>
                </div>
              </div>
            ))}
            {Array.from({ length: Math.max(0, 4 - players.length) }).map((_, i) => (
              <div
                key={`empty-${i}`}
                className="flex items-center justify-center rounded-xl border-2 border-dashed border-border p-3"
              >
                <span className="font-body text-sm text-muted-foreground">⏳ Recruiting...</span>
              </div>
            ))}
          </div>
        </div>

        {isHost && (
          <Button
            variant="hero"
            size="xl"
            className="w-full"
            onClick={() => navigate(`/reveal?role=${Math.random() > 0.7 ? "saboteur" : "keeper"}`)}
            disabled={players.length < 2}
          >
            🚀 Launch Attack
          </Button>
        )}
      </div>
    </div>
  );
};

export default Lobby;
