import { useParams } from "react-router-dom";
import { mockTopics } from "@/data/mockData";
import { QuestionTable } from "@/components/QuestionTable";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TopicReview = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const topic = mockTopics.find((t) => t.id === topicId);

  if (!topic || !topic.pastQuestions) {
    return <div>Không tìm thấy chuyên đề hoặc dữ liệu câu hỏi.</div>;
  }

  const totalQuestions = topic.pastQuestions.length;
  const totalTimeSpent = topic.pastQuestions.reduce((sum, q) => sum + q.timeSpent, 0);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-3xl font-bold mb-8">Xem lại câu hỏi đã làm: {topic.name}</h1>

      <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
        {/* Bên trái: Tổng quan */}
        <div className="md:col-span-3 space-y-6">
          <h2 className="text-2xl font-semibold">Tổng quan</h2>
          
          {/* Card Tổng số câu hỏi */}
          <Card>
            <CardHeader>
              <CardTitle>Tổng số câu hỏi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{totalQuestions}</p>
            </CardContent>
          </Card>
          
          {/* Card Tổng thời gian */}
          <Card>
            <CardHeader>
              <CardTitle>Tổng thời gian đã dành</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{totalTimeSpent} giây</p>
            </CardContent>
          </Card>
          
          {/* Danh sách câu hỏi với đúng/sai */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Danh sách câu hỏi</h3>
            <ul className="space-y-2">
              {topic.pastQuestions.map((q, index) => (
                <li key={q.id} className="flex justify-between items-center">
                  <span>Câu {index + 1}</span>
                  <Badge variant={q.isCorrect ? "success" : "destructive"}>
                    {q.isCorrect ? "Đúng" : "Sai"}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bên phải: Chi tiết câu hỏi */}
        <div className="md:col-span-7">
          <h2 className="text-2xl font-semibold mb-4">Chi tiết câu hỏi</h2>
          <QuestionTable questions={topic.pastQuestions} />
        </div>
      </div>
    </div>
  );
};

export default TopicReview;