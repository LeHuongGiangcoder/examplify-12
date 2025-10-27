import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, CheckCircle, XCircle } from "lucide-react";
import { Textarea } from "@/components/ui/textarea"; // Add this import for the textarea component

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

// Mock progress data (user is in only one level at a time, progressing from 1 to 4)
const totalLevels = 4;
const currentLevel = 2; // Example: User is currently in level 2 (only this level is active)
const progressInCurrentLevel = 50; // Example: 50% progress in the current level (levels 3-4 are not shown or active yet)

export default function TopicPracticeSpace() {
  const { topicId } = useParams<{ topicId: string }>();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0); // Mock timer
  const [notes, setNotes] = useState(""); // New state for user notes

  // Mock timer simulation (optional, can be expanded)
  // Use useEffect for real timer if needed

  const handleSubmit = () => {
    setIsSubmitted(true);
    // Mock feedback logic (e.g., check if selectedOption is correct)
    // Upon completion, you could update currentLevel and reset progress if the level is finished
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

        {/* Single Progress Bar for Current Level Only */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-lg font-semibold">Level {currentLevel} / {totalLevels}</span>
            <span className="text-sm text-muted-foreground">{progressInCurrentLevel}% Complete</span>
          </div>
          <Progress value={progressInCurrentLevel} className="h-2" />
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
              <>
                <div className="mt-4 flex items-center gap-2 text-green-500">
                  <CheckCircle className="h-5 w-5" />
                  <span>Correct! (Mock feedback)</span>
                </div>
                <div className="mt-6">
                  <Label htmlFor="notes" className="block mb-2 font-semibold">Ghi chú suy nghĩ của bạn:</Label>
                  <Textarea
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Nhập ghi chú hoặc suy nghĩ của bạn về câu hỏi này..."
                    rows={4}
                  />
                </div>
              </>
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