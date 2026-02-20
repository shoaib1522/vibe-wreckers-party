import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Plus, MessageCircle, AlertTriangle, SkipForward, Volume2, VolumeX } from "lucide-react";
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
    addedBy: "VibeQueen",
    progress: 65,
  };

  const handleCallVote = () => setShowVoting(true);
  const handleSabotage = () => {
    setVibeLevel((v) => Math.max(0, v - 15));
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      {/* Now Playing Bar */}
      <div className="glass border-b border-border px-4 py-3">
        <div className="mx-auto flex max-w-lg items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-2xl">
            🎵
          </div>
          <div className="flex-1 min-w-0">
            <div className="truncate font-display text-sm font-bold text-foreground">
              {currentSong.title}
            </div>
            <div className="truncate font-body text-xs text-muted-foreground">
              {currentSong.artist} · added by {currentSong.addedBy}
            </div>
            {/* Progress bar */}
            <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${currentSong.progress}%` }}
              />
            </div>
          </div>
          <button className="text-muted-foreground hover:text-foreground">
            <SkipForward className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto flex w-full max-w-lg flex-1 flex-col px-4 py-6">
        {/* Vibe Meter */}
        <VibeMeter level={vibeLevel} />

        {/* Song Queue */}
        <div className="mt-6 flex-1">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Up Next
            </h3>
            <span className="font-body text-xs text-muted-foreground">4 songs</span>
          </div>
          <SongQueue />
        </div>

        {/* Saboteur Controls */}
        {isSaboteur && (
          <div className="mt-4 rounded-xl border border-accent/30 bg-accent/5 p-4">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-sm">🎭</span>
              <span className="font-display text-xs font-bold uppercase tracking-wider text-accent">
                Sabotage Controls
              </span>
            </div>
            <div className="flex gap-2">
              <Button variant="saboteur" size="sm" onClick={handleSabotage}>
                <VolumeX className="mr-1 h-3 w-3" />
                Kill Volume
              </Button>
              <Button variant="saboteur" size="sm" onClick={handleSabotage}>
                <SkipForward className="mr-1 h-3 w-3" />
                Skip Song
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom action bar */}
      <div className="glass sticky bottom-0 border-t border-border px-4 py-3">
        <div className="mx-auto flex max-w-lg items-center justify-between">
          <Button variant="glass" size="sm" onClick={() => setShowChat(!showChat)}>
            <MessageCircle className="mr-1 h-4 w-4" />
            Chat
          </Button>

          <Button
            variant="hero"
            size="default"
            className="rounded-full px-6"
            onClick={() => setShowAddSong(true)}
          >
            <Plus className="mr-1 h-4 w-4" />
            Add Song
          </Button>

          <Button variant="glass" size="sm" className="text-destructive" onClick={handleCallVote}>
            <AlertTriangle className="mr-1 h-4 w-4" />
            Vote
          </Button>
        </div>
      </div>

      {/* Overlays */}
      {showChat && <ChatPanel onClose={() => setShowChat(false)} />}
      {showVoting && (
        <VotingOverlay onClose={() => {
          setShowVoting(false);
          navigate("/round-end");
        }} />
      )}
      {showAddSong && <AddSongModal onClose={() => setShowAddSong(false)} />}
    </div>
  );
};

export default GamePage;
