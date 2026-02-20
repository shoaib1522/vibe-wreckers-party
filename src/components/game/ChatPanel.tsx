import { X } from "lucide-react";

interface ChatPanelProps {
  onClose: () => void;
}

const messages = [
  { id: 1, user: "BassHead", text: "This playlist is fire 🔥", time: "2m ago" },
  { id: 2, user: "VibeQueen", text: "Who added Baby Shark??", time: "1m ago" },
  { id: 3, user: "DJ Chaos", text: "Wasn't me lol", time: "45s ago" },
  { id: 4, user: "You", text: "That's exactly what a saboteur would say...", time: "20s ago" },
];

const ChatPanel = ({ onClose }: ChatPanelProps) => {
  return (
    <div className="fixed inset-x-0 bottom-16 z-40 mx-auto max-w-lg px-4 animate-slide-up">
      <div className="glass rounded-xl border border-border">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <span className="font-display text-sm font-bold text-foreground">Chat</span>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="max-h-60 overflow-y-auto p-4">
          <div className="flex flex-col gap-3">
            {messages.map((msg) => (
              <div key={msg.id}>
                <div className="flex items-center gap-2">
                  <span className="font-display text-xs font-bold text-primary">{msg.user}</span>
                  <span className="font-body text-xs text-muted-foreground">{msg.time}</span>
                </div>
                <p className="font-body text-sm text-foreground">{msg.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-border p-3">
          <input
            type="text"
            placeholder="Type a message..."
            className="h-9 w-full rounded-lg border border-border bg-secondary/50 px-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;
