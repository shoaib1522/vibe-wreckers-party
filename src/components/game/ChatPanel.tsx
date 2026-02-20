import { X } from "lucide-react";

interface ChatPanelProps {
  onClose: () => void;
}

const messages = [
  { id: 1, user: "BassDropper", text: "This playlist is absolutely fire rn 🔥🔥", time: "2m" },
  { id: 2, user: "VibeQueen420", text: "Who tf added Baby Shark?? 💀", time: "1m" },
  { id: 3, user: "xX_Chaos_Xx", text: "wasn't me bro fr fr no cap", time: "45s" },
  { id: 4, user: "You", text: "that's EXACTLY what a spy would say... 🤨", time: "20s" },
  { id: 5, user: "BassDropper", text: "VOTE THEM OUT 🚨🚨🚨", time: "5s" },
];

const ChatPanel = ({ onClose }: ChatPanelProps) => {
  return (
    <div className="fixed inset-x-0 bottom-16 z-40 mx-auto max-w-lg px-4 animate-slide-up">
      <div className="battle-card overflow-hidden">
        <div className="flex items-center justify-between border-b-2 border-primary/20 px-4 py-3">
          <span className="font-display text-base text-primary">📡 Squad Comms</span>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="max-h-60 overflow-y-auto p-4">
          <div className="flex flex-col gap-3">
            {messages.map((msg) => (
              <div key={msg.id}>
                <div className="flex items-center gap-2">
                  <span className="font-display text-xs text-primary">{msg.user}</span>
                  <span className="font-body text-xs text-muted-foreground">{msg.time}</span>
                </div>
                <p className="font-body text-sm text-foreground">{msg.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t-2 border-primary/20 p-3">
          <input
            type="text"
            placeholder="Type intel..."
            className="h-10 w-full rounded-xl border-2 border-border bg-secondary/50 px-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;
