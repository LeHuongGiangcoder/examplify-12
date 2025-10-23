import { ExamOverview } from "@/components/ExamOverview";
import { QuestionTable } from "@/components/QuestionTable";
import { DetailedExamResult } from "@/types/exam";

export const ExamResult = () => {
  // TODO: Fetch actual exam result data
  const examResult: DetailedExamResult = {
    // ... mock data
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