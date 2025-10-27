import { QuestionResult } from "@/types/exam";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface QuestionTableProps {
  questions: QuestionResult[];
}

export const QuestionTable = ({ questions }: QuestionTableProps) => {
  const [notes, setNotes] = useState(questions.map(q => q.notes || "")); // State cho ghi chú dynamic

  const handleNoteChange = (index: number, value: string) => {
    const newNotes = [...notes];
    newNotes[index] = value;
    setNotes(newNotes);
    // Ở đây có thể thêm logic lưu (ví dụ: lưu vào localStorage hoặc API), nhưng hiện tại chỉ local state
  };

  return (
    <div className="space-y-4">
      {questions.map((question, index) => (
        <Card key={question.id} className="bg-muted/50">
          <CardContent className="p-4 space-y-4">
            {/* Số câu hỏi */}
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Câu hỏi #{index + 1}</h3>
              <Badge variant={question.isCorrect ? "success" : "destructive"}>
                {question.isCorrect ? "Đúng" : "Sai"}
              </Badge>
            </div>

            {/* Nội dung câu hỏi */}
            <p className="text-base">{question.content}</p>

            {/* Đáp án chọn và đáp án đúng */}
            <div className="text-sm text-muted-foreground">
              <p>Đáp án bạn chọn: {question.options[question.userAnswer]}</p>
              <p>Đáp án đúng: {question.options[question.correctAnswer]}</p>
            </div>

            {/* Giải thích nếu sai */}
            {!question.isCorrect && question.explanation && (
              <div className="bg-background p-3 rounded-md border">
                <p className="font-semibold mb-1">Giải thích:</p>
                <p>{question.explanation}</p>
              </div>
            )}

            {/* Phần ghi chú (dynamic textarea) */}
            <div className="space-y-1">
              <p className="font-semibold">Ghi chú:</p>
              <Textarea
                value={notes[index]}
                onChange={(e) => handleNoteChange(index, e.target.value)}
                placeholder="Thêm ghi chú của bạn..."
                rows={3}
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};