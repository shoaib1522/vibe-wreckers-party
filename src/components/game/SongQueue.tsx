const songs = [
  { id: 1, title: "Blinding Lights", artist: "The Weeknd", addedBy: "BassHead", emoji: "🌟" },
  { id: 2, title: "Baby Shark", artist: "Pinkfong", addedBy: "DJ Chaos", emoji: "🦈", sus: true },
  { id: 3, title: "Levitating", artist: "Dua Lipa", addedBy: "VibeQueen", emoji: "🪩" },
  { id: 4, title: "Starboy", artist: "The Weeknd", addedBy: "You", emoji: "⭐" },
];

const SongQueue = () => {
  return (
    <div className="flex flex-col gap-2">
      {songs.map((song, i) => (
        <div
          key={song.id}
          className={`flex items-center gap-3 rounded-lg p-3 transition-all ${
            song.sus
              ? "border border-accent/20 bg-accent/5"
              : "glass"
          }`}
        >
          <span className="font-display text-sm font-bold text-muted-foreground">{i + 1}</span>
          <span className="text-xl">{song.emoji}</span>
          <div className="flex-1 min-w-0">
            <div className="truncate font-display text-sm font-semibold text-foreground">
              {song.title}
            </div>
            <div className="truncate font-body text-xs text-muted-foreground">
              {song.artist} · {song.addedBy}
            </div>
          </div>
          {song.sus && (
            <span className="font-display text-xs font-bold text-accent">SUS?</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default SongQueue;
