import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MockExams from "./pages/MockExams";
import TopicPractice from "./pages/TopicPractice";
import { ExamResult } from "./pages/ExamResult";
import NotFound from "./pages/NotFound";
import DetailedPerformance from "./components/DetailedPerformance"; // Import the new component
import TopicPracticeSpace from "./pages/TopicPracticeSpace"; // Import the new component
import TopicReview from "./pages/TopicReview"; // Add this import

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mock-exams" element={<MockExams />} />
          <Route path="/topic-practice" element={<TopicPractice />} />
          <Route path="/topic-review/:topicId" element={<TopicReview />} /> {/* New route */}
          <Route path="/exam/:examId/result" element={<ExamResult />} />
          <Route path="/exam/:examId/performance" element={<DetailedPerformance />} />
          <Route path="/topic/:topicId" element={<TopicPracticeSpace />} /> {/* New route */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
