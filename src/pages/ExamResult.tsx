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
    weakTopics: ["Logarithms", "Complex Numbers"],
    completedAt: new Date(),
    timeSpent: 85,
    averageTimePerQuestion: 102,
    questions: [
      {
        id: "q1",
        content: "Find the derivative of f(x) = x² + 3x + 2",
        options: ["2x + 3", "x² + 3", "2x", "3"],
        correctAnswer: 0,
        userAnswer: 0,
        isCorrect: true,
        timeSpent: 45,
        topicTag: "Calculus",
        difficulty: "foundation"
      },
      {
        id: "q2",
        content: "Solve the equation: log₂(x + 3) = 4",
        options: ["13", "16", "19", "22"],
        correctAnswer: 0,
        userAnswer: 2,
        isCorrect: false,
        timeSpent: 120,
        topicTag: "Logarithms",
        difficulty: "core"
      },
      {
        id: "q3",
        content: "Find the area of a triangle with vertices at (0,0), (4,0), and (0,3)",
        options: ["6", "12", "8", "10"],
        correctAnswer: 0,
        userAnswer: 0,
        isCorrect: true,
        timeSpent: 90,
        topicTag: "Geometry",
        difficulty: "foundation"
      },
      {
        id: "q4",
        content: "Solve the complex equation: z² + 4z + 13 = 0",
        options: ["-2 + 3i", "-2 - 3i", "2 + 3i", "2 - 3i"],
        correctAnswer: 0,
        userAnswer: 1,
        isCorrect: false,
        timeSpent: 180,
        topicTag: "Complex Numbers",
        difficulty: "challenge"
      },
      {
        id: "q5",
        content: "Find the limit as x approaches infinity: lim(x→∞) (x² + 2x + 1)/(x² + 1)",
        options: ["1", "2", "0", "∞"],
        correctAnswer: 0,
        userAnswer: 0,
        isCorrect: true,
        timeSpent: 150,
        topicTag: "Calculus",
        difficulty: "core"
      }
    ],
    topicPerformance: [
      {
        topicTag: "Calculus",
        correctCount: 12,
        totalCount: 15,
        accuracyRate: 0.8
      },
      {
        topicTag: "Logarithms",
        correctCount: 8,
        totalCount: 12,
        accuracyRate: 0.67
      },
      {
        topicTag: "Geometry",
        correctCount: 10,
        totalCount: 12,
        accuracyRate: 0.83
      },
      {
        topicTag: "Complex Numbers",
        correctCount: 5,
        totalCount: 8,
        accuracyRate: 0.625
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{examResult.examId} Results</h1>
        <p className="text-muted-foreground">
          Completed on {examResult.completedAt.toLocaleDateString()}
        </p>
      </div>

      <div className="space-y-8">
        <ExamOverview result={examResult} />
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Question Details</h2>
          <QuestionTable questions={examResult.questions} />
        </div>
      </div>
    </div>
  );
};