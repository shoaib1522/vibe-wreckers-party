import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Plus, MessageCircle, AlertTriangle, SkipForward, VolumeX, Bomb } from "lucide-react";
import { Button } from "@/components/ui/button";
import VibeMeter from "@/components/game/VibeMeter";
import SongQueue from "@/components/game/SongQueue";
import ChatPanel from "@/components/game/ChatPanel";
import VotingOverlay from "@/components/game/VotingOverlay";
import AddSongModal from "@/components/game/AddSongModal";

const GamePage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const role = searchParams.get("role") || "keeper";
  const isSaboteur = role === "saboteur";

  const [showChat, setShowChat] = useState(false);
  const [showVoting, setShowVoting] = useState(false);
  const [showAddSong, setShowAddSong] = useState(false);
  const [vibeLevel, setVibeLevel] = useState(75);

  const currentSong = {
    title: "Midnight City",
    artist: "M83",
    addedBy: "VibeQueen420",
    progress: 65,
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      {/* Now Playing */}
      <div className="border-b-2 border-primary/20 bg-card px-4 py-3">
        <div className="mx-auto flex max-w-lg items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-3xl battle-card">
            🎵
          </div>
          <div className="flex-1 min-w-0">
            <div className="truncate font-display text-base text-foreground">
              {currentSong.title}
            </div>
            <div className="truncate font-body text-xs text-muted-foreground">
              {currentSong.artist} · 🎯 {currentSong.addedBy}
            </div>
            <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${currentSong.progress}%` }}
              />
            </div>
          </div>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <SkipForward className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Main */}
      <div className="mx-auto flex w-full max-w-lg flex-1 flex-col px-4 py-5">
        <VibeMeter level={vibeLevel} />

        <div className="mt-5 flex-1">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-display text-base text-primary">🎯 Ammo Queue</h3>
            <span className="font-display text-sm text-muted-foreground">4 loaded</span>
          </div>
          <SongQueue />
        </div>

        {/* Saboteur Controls */}
        {isSaboteur && (
          <div className="mt-4 rounded-2xl border-2 border-accent/40 bg-accent/10 p-4">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-lg">💀</span>
              <span className="font-display text-sm text-accent">
                SECRET WEAPONS
              </span>
            </div>
            <div className="flex gap-2">
              <Button variant="saboteur" size="sm" onClick={() => setVibeLevel((v) => Math.max(0, v - 15))}>
                <VolumeX className="mr-1 h-3 w-3" />
                Kill Audio
              </Button>
              <Button variant="saboteur" size="sm" onClick={() => setVibeLevel((v) => Math.max(0, v - 15))}>
                <Bomb className="mr-1 h-3 w-3" />
                Vibe Bomb
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom bar */}
      <div className="sticky bottom-0 border-t-2 border-primary/20 bg-card px-4 py-3">
        <div className="mx-auto flex max-w-lg items-center justify-between">
          <Button variant="glass" size="sm" onClick={() => setShowChat(!showChat)}>
            <MessageCircle className="mr-1 h-4 w-4" />
            Comms
          </Button>

          <Button
            variant="hero"
            size="default"
            className="rounded-full px-7"
            onClick={() => setShowAddSong(true)}
          >
            <Plus className="mr-1 h-5 w-5" />
            Load Ammo
          </Button>

          <Button variant="destructive" size="sm" onClick={() => setShowVoting(true)}>
            <AlertTriangle className="mr-1 h-4 w-4" />
            🚨 Vote
          </Button>
        </div>
      </div>

      {showChat && <ChatPanel onClose={() => setShowChat(false)} />}
      {showVoting && (
        <VotingOverlay onClose={() => { setShowVoting(false); navigate("/round-end"); }} />
      )}
      {showAddSong && <AddSongModal onClose={() => setShowAddSong(false)} />}
    </div>
  );
};

export default GamePage;
