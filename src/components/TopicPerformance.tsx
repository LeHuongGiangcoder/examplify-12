import { DetailedExamResult } from "@/types/exam";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";

interface TopicPerformanceProps {
  result: DetailedExamResult;
}

export const TopicPerformance = ({ result }: TopicPerformanceProps) => {
  const navigate = useNavigate();
  const { examId } = useParams<{ examId: string }>();

  const getMasteryColor = (accuracyRate: number) => {
    if (accuracyRate < 0.5) return "text-red-500"; // Thấp
    if (accuracyRate < 0.8) return "text-yellow-500"; // Trung bình
    return "text-green-500"; // Cao
  };

  const handleViewDetails = () => {
    navigate(`/exam/${examId}/performance`);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Hiệu suất theo Chủ đề</CardTitle>
        <Button variant="outline" size="sm" onClick={handleViewDetails}>
          Xem Chi tiết Hiệu suất
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {result.topicPerformance.map((topic) => (
            <div key={topic.topicTag} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{topic.topicTag}</span>
                <span className={`font-bold ${getMasteryColor(topic.accuracyRate)}`}>
                  {topic.correctCount}/{topic.totalCount} đúng
                </span>
              </div>
              <Progress value={topic.accuracyRate * 100} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};