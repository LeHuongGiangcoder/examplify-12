import { DetailedExamResult } from "@/types/exam";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Target, Trophy, Brain } from "lucide-react";

interface ExamOverviewProps {
  result: DetailedExamResult;
}

export const ExamOverview = ({ result }: ExamOverviewProps) => {
  return (
    <div className="space-y-6">
      {/* Tổng quan Điểm số và Thời gian thực hiện */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="pt-6 flex flex-col items-center gap-2">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Trophy className="h-6 w-6 text-primary" />
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Điểm số</p>
              <h3 className="text-2xl font-bold">{result.score.toFixed(1)}/10</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 flex flex-col items-center gap-2">
            <div className="p-3 bg-accent/10 rounded-lg">
              <Clock className="h-6 w-6 text-accent" />
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Thời gian thực hiện</p>
              <h3 className="text-2xl font-bold">{result.timeSpent} phút</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Danh sách số câu hỏi và kết quả đúng/sai */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Danh sách câu hỏi</h3>
        <ul className="space-y-2">
          {result.questions.map((question, index) => (
            <li key={question.id} className="flex justify-between items-center p-2 bg-muted/50 rounded-md">
              <span>Câu {index + 1}</span>
              <span className={`font-bold ${question.isCorrect ? 'text-success' : 'text-destructive'}`}>
                {question.isCorrect ? 'Đúng' : 'Sai'}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};