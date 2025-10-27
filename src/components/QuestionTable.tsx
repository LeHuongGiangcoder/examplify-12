import { QuestionResult } from "@/types/exam";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle } from "lucide-react";
import { Textarea } from "@/components/ui/textarea"; // Thêm nếu cần hộp ghi chú editable

interface QuestionTableProps {
  questions: QuestionResult[];
}

export const QuestionTable = ({ questions }: QuestionTableProps) => {
  return (
    <div className="space-y-4">
      {questions.map((question, index) => (
        <Card key={question.id} className="bg-muted/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium">Câu hỏi #{index + 1}</h3>
              <Badge variant={question.isCorrect ? "success" : "destructive"}>
                {question.isCorrect ? "Đúng" : "Sai"}
              </Badge>
            </div>
            <p className="mb-2">{question.content}</p>
            <div className="text-sm text-muted-foreground mb-2">
              Câu trả lời của bạn: {question.options[question.userAnswer]} | Đáp án đúng: {question.options[question.correctAnswer]}
            </div>
            {!question.isCorrect && (
              <div className="mt-4 bg-background p-3 rounded-md border">
                <p className="font-semibold mb-1">Ghi chú/Giải thích:</p>
                <p>(Mock: Hãy ôn lại khái niệm {question.topicTag} để cải thiện.)</p>
                {/* Nếu muốn editable: <Textarea placeholder="Thêm ghi chú..." /> */}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};