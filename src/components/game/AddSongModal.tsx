import { useState } from "react";
import { X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AddSongModalProps {
  onClose: () => void;
}

const suggestions = [
  { id: 1, title: "Bohemian Rhapsody", artist: "Queen", emoji: "👑" },
  { id: 2, title: "Get Lucky", artist: "Daft Punk", emoji: "🤖" },
  { id: 3, title: "Superstition", artist: "Stevie Wonder", emoji: "🎹" },
  { id: 4, title: "Mr. Brightside", artist: "The Killers", emoji: "🌞" },
  { id: 5, title: "Lose Yourself", artist: "Eminem", emoji: "🎤" },
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
      <div className="w-full max-w-lg glass rounded-t-2xl border-t border-border animate-slide-up">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <span className="font-display text-sm font-bold text-foreground">Add Song</span>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-4">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for a song..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-10 w-full rounded-lg border border-border bg-secondary/50 pl-10 pr-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              autoFocus
            />
          </div>

          <div className="max-h-64 overflow-y-auto">
            <div className="flex flex-col gap-2">
              {filtered.map((song) => (
                <button
                  key={song.id}
                  onClick={onClose}
                  className="flex items-center gap-3 rounded-lg p-3 text-left transition-all hover:bg-secondary/50"
                >
                  <span className="text-xl">{song.emoji}</span>
                  <div>
                    <div className="font-display text-sm font-semibold text-foreground">
                      {song.title}
                    </div>
                    <div className="font-body text-xs text-muted-foreground">{song.artist}</div>
                  </div>
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
