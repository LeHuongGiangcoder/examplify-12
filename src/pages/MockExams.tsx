import { ExamCategoryCard } from "@/components/ExamCategoryCard";
import { examCategories } from "@/data/mockData";
import { Trophy, Target, Clock, GraduationCap } from "lucide-react";

const MockExams = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3">
            Mock Exam Room
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Practice with real exam formats. Test your skills under actual exam conditions and track your progress.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-card rounded-lg p-6 shadow-md border border-border">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-primary/10">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Best Score</p>
                <p className="text-2xl font-bold text-foreground">8.5/10</p>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-md border border-border">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-accent/10">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Exams Taken</p>
                <p className="text-2xl font-bold text-foreground">12</p>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-md border border-border">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-success/10">
                <Clock className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Avg. Time</p>
                <p className="text-2xl font-bold text-foreground">78 min</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-card rounded-xl p-6 border border-border shadow-md mb-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-muted-foreground">
                Hover over each category to see all available exam years. Each exam simulates real test conditions with 50 questions in 90 minutes.
              </p>
            </div>
          </div>
        </div>

        {/* Exam Categories Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Exam Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {examCategories.map((category) => (
              <ExamCategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockExams;
