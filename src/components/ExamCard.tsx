import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Exam } from "@/types/exam";
import { Clock, FileText, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ExamCardProps {
  exam: Exam;
}

export const ExamCard = ({ exam }: ExamCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              {exam.title}
            </CardTitle>
            <CardDescription className="mt-2">National University Entrance Exam</CardDescription>
          </div>
          <Badge variant="accent" className="text-sm">
            {exam.year}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <FileText className="h-4 w-4" />
            <span>{exam.totalQuestions} questions</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{exam.duration} minutes</span>
          </div>
        </div>
        <Button 
          variant="gradient" 
          className="w-full"
          onClick={() => navigate(`/exam/${exam.id}`)}
        >
          Start Mock Exam
        </Button>
      </CardContent>
    </Card>
  );
};
