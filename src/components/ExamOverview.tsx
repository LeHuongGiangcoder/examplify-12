import { DetailedExamResult } from "@/types/exam";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Clock, Target, Trophy, Brain } from "lucide-react";

interface ExamOverviewProps {
  result: DetailedExamResult;
}

export const ExamOverview = ({ result }: ExamOverviewProps) => {
  // Function to determine color based on accuracy rate
  const getMasteryColor = (accuracyRate: number) => {
    if (accuracyRate < 0.5) return "text-red-500"; // Low mastery
    if (accuracyRate < 0.8) return "text-yellow-500"; // Medium mastery
    return "text-green-500"; // High mastery
  };

  return (
    <div className="space-y-6">
      {/* Score Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Score</p>
                <h3 className="text-2xl font-bold">{result.score.toFixed(1)}/10</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-success/10 rounded-lg">
                <Target className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Accuracy</p>
                <h3 className="text-2xl font-bold">{(result.accuracyRate * 100).toFixed(1)}%</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Time Spent</p>
                <h3 className="text-2xl font-bold">{result.timeSpent} min</h3>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-warning/10 rounded-lg">
                <Brain className="h-6 w-6 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Avg. Time/Question</p>
                <h3 className="text-2xl font-bold">{result.averageTimePerQuestion.toFixed(1)}s</h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Topic Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Topic Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {result.topicPerformance.map((topic) => (
              <div key={topic.topicTag} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{topic.topicTag}</span>
                  <span className={`font-bold ${getMasteryColor(topic.accuracyRate)}`}>
                    {topic.correctCount}/{topic.totalCount} correct
                  </span>
                </div>
                <Progress value={topic.accuracyRate * 100} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};