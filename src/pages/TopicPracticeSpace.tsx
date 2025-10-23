import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, CheckCircle, XCircle } from "lucide-react";

// Mock data for a sample question (replace with real data based on topicId)
const mockQuestion = {
  title: "Câu hỏi 1",
  content: "Chọn A, B, C hoặc D cho câu hỏi mẫu này, ví dụ: Tìm giá trị của x nếu 2x + 3 = 7.",
  options: [
    { value: "A", label: "x = 2" },
    { value: "B", label: "x = 3" },
    { value: "C", label: "x = 4" },
    { value: "D", label: "x = 5" },
  ],
};

// Mock levels data (4 levels with progress)
const mockLevels = [
  { level: 1, progress: 75 },
  { level: 2, progress: 50 },
  { level: 3, progress: 30 },
  { level: 4, progress: 10 },
];

export default function TopicPracticeSpace() {
  const { topicId } = useParams<{ topicId: string }>();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0); // Mock timer

  // Mock timer simulation (optional, can be expanded)
  // Use useEffect for real timer if needed

  const handleSubmit = () => {
    setIsSubmitted(true);
    // Mock feedback logic (e.g., check if selectedOption is correct)
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header with Topic and Controls */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">{topicId} Practice</h1>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">Previous</Button>
            <Button variant="outline" size="sm">Next</Button>
            <Clock className="h-5 w-5" />
            <span>{timeElapsed} sec</span>
          </div>
        </div>

        {/* 4-Level Progress Bars */}
        <div className="mb-6 space-y-4">
          <h3 className="text-lg font-semibold">Progress by Level</h3>
          <div className="grid grid-cols-4 gap-4">
            {mockLevels.map((level) => (
              <div key={level.level} className="space-y-2">
                <span className="text-sm text-muted-foreground">Level {level.level}</span>
                <Progress value={level.progress} className="h-2" />
                <span className="text-xs text-center block">{level.progress}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Question Card */}
        <Card className="bg-white shadow-lg">
          <CardHeader className="bg-primary text-white rounded-t-lg">
            <h2 className="text-xl font-semibold">{mockQuestion.title}</h2>
          </CardHeader>
          <CardContent className="p-6">
            <p className="mb-6 text-lg">{mockQuestion.content}</p>
            <RadioGroup value={selectedOption ?? ""} onValueChange={setSelectedOption}>
              {mockQuestion.options.map((option) => (
                <div key={option.value} className="flex items-center space-x-2 mb-4">
                  <RadioGroupItem value={option.value} id={option.value} disabled={isSubmitted} />
                  <Label htmlFor={option.value}>{option.value}: {option.label}</Label>
                </div>
              ))}
            </RadioGroup>
            <Button onClick={handleSubmit} disabled={!selectedOption || isSubmitted} className="mt-4">
              Submit
            </Button>
            {isSubmitted && (
              <div className="mt-4 flex items-center gap-2 text-green-500">
                <CheckCircle className="h-5 w-5" />
                <span>Correct! (Mock feedback)</span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Footer Navigation */}
        <div className="flex justify-end mt-6">
          <Button variant="secondary">Exit Practice</Button>
        </div>
      </div>
    </div>
  );
}