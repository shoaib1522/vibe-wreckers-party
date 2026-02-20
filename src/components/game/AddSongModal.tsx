import { useState } from "react";
import { X, Search } from "lucide-react";

interface AddSongModalProps {
  onClose: () => void;
}

const suggestions = [
  { id: 1, title: "Bohemian Rhapsody", artist: "Queen", emoji: "👑", power: "💥 High Impact" },
  { id: 2, title: "Get Lucky", artist: "Daft Punk", emoji: "🤖", power: "✨ Vibe Boost" },
  { id: 3, title: "Superstition", artist: "Stevie Wonder", emoji: "🎹", power: "🛡️ Shield Up" },
  { id: 4, title: "Mr. Brightside", artist: "The Killers", emoji: "🌞", power: "⚔️ Rally Cry" },
  { id: 5, title: "Lose Yourself", artist: "Eminem", emoji: "🎤", power: "💣 Nuke" },
];

const AddSongModal = ({ onClose }: AddSongModalProps) => {
  const [query, setQuery] = useState("");

  const filtered = suggestions.filter(
    (s) =>
      s.title.toLowerCase().includes(query.toLowerCase()) ||
      s.artist.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-background/80 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-t-2xl border-t-2 border-primary/30 bg-card animate-slide-up">
        <div className="flex items-center justify-between border-b-2 border-primary/20 px-4 py-3">
          <span className="font-display text-base text-primary">🎵 Load Ammo</span>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search weapons..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-11 w-full rounded-xl border-2 border-border bg-secondary/50 pl-10 pr-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              autoFocus
            />
          </div>

          <div className="max-h-64 overflow-y-auto">
            <div className="flex flex-col gap-2">
              {filtered.map((song) => (
                <button
                  key={song.id}
                  onClick={onClose}
                  className="flex items-center gap-3 rounded-xl p-3 text-left transition-all hover:bg-secondary/50 hover:scale-[1.02] battle-card"
                >
                  <span className="text-2xl">{song.emoji}</span>
                  <div className="flex-1">
                    <div className="font-display text-sm text-foreground">{song.title}</div>
                    <div className="font-body text-xs text-muted-foreground">{song.artist}</div>
                  </div>
                  <span className="font-display text-xs text-primary">{song.power}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSongModal;
