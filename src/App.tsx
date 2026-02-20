import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CreateRoom from "./pages/CreateRoom";
import Lobby from "./pages/Lobby";
import RoleReveal from "./pages/RoleReveal";
import GamePage from "./pages/GamePage";
import RoundEnd from "./pages/RoundEnd";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/create" element={<CreateRoom />} />
          <Route path="/lobby/:roomCode" element={<Lobby />} />
          <Route path="/reveal" element={<RoleReveal />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/round-end" element={<RoundEnd />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
