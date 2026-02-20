const songs = [
  { id: 1, title: "Blinding Lights", artist: "The Weeknd", addedBy: "BassDropper", emoji: "🌟", threat: false },
  { id: 2, title: "Baby Shark", artist: "Pinkfong", addedBy: "xX_Chaos_Xx", emoji: "🦈", threat: true },
  { id: 3, title: "Levitating", artist: "Dua Lipa", addedBy: "VibeQueen420", emoji: "🪩", threat: false },
  { id: 4, title: "Starboy", artist: "The Weeknd", addedBy: "You", emoji: "⭐", threat: false },
];

const SongQueue = () => {
  return (
    <div className="flex flex-col gap-2">
      {songs.map((song, i) => (
        <div
          key={song.id}
          className={`flex items-center gap-3 rounded-xl p-3 transition-all ${
            song.threat
              ? "border-2 border-accent/40 bg-accent/10 animate-shake"
              : "battle-card"
          }`}
        >
          <span className="font-display text-lg text-primary w-6 text-center">{i + 1}</span>
          <span className="text-2xl">{song.emoji}</span>
          <div className="flex-1 min-w-0">
            <div className="truncate font-display text-sm text-foreground">
              {song.title}
            </div>
            <div className="truncate font-body text-xs text-muted-foreground">
              {song.artist} · 🎯 {song.addedBy}
            </div>
          </div>
          {song.threat && (
            <span className="font-display text-xs text-accent animate-pulse">⚠️ SUS</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default SongQueue;
