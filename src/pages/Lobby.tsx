import { useState, useEffect } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { Copy, Check, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockPlayers = [
  { id: "1", name: "You", avatar: "🎧" },
];

const joiningPlayers = [
  { id: "2", name: "DJ Chaos", avatar: "🔥" },
  { id: "3", name: "VibeQueen", avatar: "✨" },
  { id: "4", name: "BassHead", avatar: "🎵" },
];

const Lobby = () => {
  const { roomCode } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const isHost = searchParams.get("host") === "true";
  const vibe = searchParams.get("vibe") || "party";
  const playerName = searchParams.get("name") || "Player";

  const [players, setPlayers] = useState([{ ...mockPlayers[0], name: playerName }]);
  const [copied, setCopied] = useState(false);

  // Simulate players joining
  useEffect(() => {
    const timers = joiningPlayers.map((p, i) =>
      setTimeout(() => {
        setPlayers((prev) => [...prev, p]);
      }, (i + 1) * 1500)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const copyCode = () => {
    navigator.clipboard.writeText(roomCode || "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const startGame = () => {
    navigate(`/reveal?role=${Math.random() > 0.7 ? "saboteur" : "keeper"}`);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="w-full max-w-md text-center">
        {/* Room code */}
        <div className="mb-2 font-display text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Room Code
        </div>
        <button
          onClick={copyCode}
          className="group mb-2 inline-flex items-center gap-3 rounded-xl border border-primary/30 bg-secondary/50 px-6 py-3 transition-all hover:border-primary hover:glow-primary"
        >
          <span className="font-display text-4xl font-black tracking-[0.4em] text-primary text-glow-primary">
            {roomCode}
          </span>
          {copied ? (
            <Check className="h-5 w-5 text-vibe-good" />
          ) : (
            <Copy className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
          )}
        </button>
        <p className="mb-8 font-body text-sm text-muted-foreground">
          Share this code with your friends
        </p>

        {/* Vibe badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5">
          <span className="text-sm">
            {vibe === "night-drive" ? "🌙" : vibe === "party" ? "🔥" : "☕"}
          </span>
          <span className="font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {vibe.replace("-", " ")} mode
          </span>
        </div>

        {/* Players */}
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="font-display text-sm font-semibold text-muted-foreground">
              {players.length} / 8 Players
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {players.map((player, i) => (
              <div
                key={player.id}
                className="glass flex items-center gap-3 rounded-xl p-3 animate-scale-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="text-2xl">{player.avatar}</span>
                <div className="text-left">
                  <div className="font-display text-sm font-bold text-foreground">{player.name}</div>
                  {player.id === "1" && (
                    <div className="font-body text-xs text-primary">
                      {isHost ? "Host" : "You"}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {/* Empty slots */}
            {Array.from({ length: Math.max(0, 4 - players.length) }).map((_, i) => (
              <div
                key={`empty-${i}`}
                className="flex items-center justify-center rounded-xl border border-dashed border-border p-3"
              >
                <span className="font-body text-sm text-muted-foreground">Waiting...</span>
              </div>
            ))}
          </div>
        </div>

        {isHost && (
          <Button
            variant="hero"
            size="xl"
            className="w-full"
            onClick={startGame}
            disabled={players.length < 2}
          >
            Start Game
          </Button>
        )}
      </div>
    </div>
  );
};

export default Lobby;
