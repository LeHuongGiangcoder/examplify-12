import { QuestionResult } from "@/types/exam";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle } from "lucide-react";

interface QuestionTableProps {
  questions: QuestionResult[];
}

export const QuestionTable = ({ questions }: QuestionTableProps) => {
  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Question</TableHead>
            <TableHead>Topic</TableHead>
            <TableHead>Your Answer</TableHead>
            <TableHead>Correct Answer</TableHead>
            <TableHead>Time Spent</TableHead>
            <TableHead className="w-[100px]">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {questions.map((question, index) => (
            <TableRow key={question.id}>
              <TableCell className="font-medium">#{index + 1}</TableCell>
              <TableCell>
                <Badge variant="outline">{question.topicTag}</Badge>
              </TableCell>
              <TableCell>{question.options[question.userAnswer]}</TableCell>
              <TableCell>{question.options[question.correctAnswer]}</TableCell>
              <TableCell>{question.timeSpent}s</TableCell>
              <TableCell>
                {question.isCorrect ? (
                  <CheckCircle2 className="h-5 w-5 text-success" />
                ) : (
                  <XCircle className="h-5 w-5 text-destructive" />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};