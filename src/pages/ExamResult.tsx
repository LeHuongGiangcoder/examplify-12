import { TopicPerformance } from "@/components/TopicPerformance";
import { ExamOverview } from "@/components/ExamOverview";
import { QuestionTable } from "@/components/QuestionTable";
import { DetailedExamResult } from "@/types/exam";

export const ExamResult = () => {
  const examResult: DetailedExamResult = {
    examId: "THPT-2024-01",
    score: 8.5,
    correctAnswers: 42,
    totalQuestions: 50,
    accuracyRate: 0.84,
    weakTopics: ["Logarit", "Số phức"],
    completedAt: new Date(),
    timeSpent: 85,
    averageTimePerQuestion: 102,
    questions: [
      {
        id: "q1",
        content: "Tìm đạo hàm của hàm số f(x) = x² + 3x + 2",
        options: ["2x + 3", "x² + 3", "2x", "3"],
        correctAnswer: 0,
        userAnswer: 0,
        isCorrect: true,
        timeSpent: 45,
        topicTag: "Đạo hàm",
        difficulty: "foundation",
        explanation: "", // Không cần giải thích nếu đúng
        notes: "" // Ghi chú ban đầu rỗng
      },
      {
        id: "q2",
        content: "Giải phương trình: log₂(x + 3) = 4",
        options: ["13", "16", "19", "22"],
        correctAnswer: 0,
        userAnswer: 2,
        isCorrect: false,
        timeSpent: 120,
        topicTag: "Logarit",
        difficulty: "core",
        explanation: "Đáp án đúng là 13 vì 2^4 = 16, nên x + 3 = 16, x = 13.",
        notes: "" // Ghi chú ban đầu rỗng
      },
      {
        id: "q3",
        content: "Tìm diện tích tam giác với các đỉnh tại (0,0), (4,0), và (0,3)",
        options: ["6", "12", "8", "10"],
        correctAnswer: 0,
        userAnswer: 0,
        isCorrect: true,
        timeSpent: 90,
        topicTag: "Hình không gian",
        difficulty: "foundation",
        explanation: "",
        notes: ""
      },
      {
        id: "q4",
        content: "Giải phương trình phức: z² + 4z + 13 = 0",
        options: ["-2 + 3i", "-2 - 3i", "2 + 3i", "2 - 3i"],
        correctAnswer: 0,
        userAnswer: 1,
        isCorrect: false,
        timeSpent: 180,
        topicTag: "Số phức",
        difficulty: "challenge",
        explanation: "Nghiệm là z = -2 ± 3i, sử dụng công thức nghiệm phương trình bậc 2.",
        notes: ""
      },
      {
        id: "q5",
        content: "Tìm giới hạn khi x tiến tới vô cực: lim(x→∞) (x² + 2x + 1)/(x² + 1)",
        options: ["1", "2", "0", "∞"],
        correctAnswer: 0,
        userAnswer: 0,
        isCorrect: true,
        timeSpent: 150,
        topicTag: "Đạo hàm",
        difficulty: "core",
        explanation: "",
        notes: ""
      }
    ],
    topicPerformance: [
      {
        topicTag: "Đạo hàm",
        correctCount: 12,
        totalCount: 15,
        accuracyRate: 0.8
      },
      {
        topicTag: "Logarit",
        correctCount: 8,
        totalCount: 12,
        accuracyRate: 0.67
      },
      {
        topicTag: "Hình không gian",
        correctCount: 10,
        totalCount: 12,
        accuracyRate: 0.83
      },
      {
        topicTag: "Số phức",
        correctCount: 5,
        totalCount: 8,
        accuracyRate: 0.625
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Kết quả {examResult.examId}</h1>
        <p className="text-muted-foreground">
          Hoàn thành vào {examResult.completedAt.toLocaleDateString()}
        </p>
      </div>

      <div className="space-y-8">
        {/* Topic Performance ở đầu (giữ nguyên) */}
        <TopicPerformance result={examResult} />
        
        {/* Phần dual layout: Tổng quan bên trái (3/10), Chi tiết câu hỏi bên phải (7/10) */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
          {/* Bên trái: Tổng quan */}
          <div className="md:col-span-3">
            <h2 className="text-2xl font-semibold mb-4">Tổng quan</h2> {/* Thêm tiêu đề nếu cần */}
            <ExamOverview result={examResult} />
          </div>
          
          {/* Bên phải: Chi tiết câu hỏi */}
          <div className="md:col-span-7">
            <h2 className="text-2xl font-semibold mb-4">Chi tiết Câu hỏi</h2>
            <QuestionTable questions={examResult.questions} />
          </div>
        </div>
      </div>
    </div>
  );
};