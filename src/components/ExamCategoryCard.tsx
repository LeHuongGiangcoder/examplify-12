import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExamCategory } from "@/types/exam";
import { ChevronRight, Clock, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ExamCategoryCardProps {
  category: ExamCategory;
}

export const ExamCategoryCard = ({ category }: ExamCategoryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <Card 
      className="relative overflow-hidden group transition-all duration-500 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Content - Always Visible */}
      <div className={cn(
        "transition-all duration-500",
        isHovered ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
      )}>
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <span className="text-5xl">{category.icon}</span>
              <div>
                <CardTitle className="text-2xl">{category.name}</CardTitle>
                <Badge variant="accent" className="mt-2">
                  {category.exams.length} exams available
                </Badge>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{category.description}</CardDescription>
          <div className="flex gap-4 mt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>50 questions</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>90 minutes</span>
            </div>
          </div>
        </CardContent>
      </div>

      {/* Hover Content - Exam List */}
      <div className={cn(
        "absolute inset-0 p-6 transition-all duration-500 overflow-hidden",
        isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{category.icon}</span>
          <h3 className="text-xl font-semibold text-foreground">{category.name}</h3>
        </div>
        
        <div className="space-y-2 h-[calc(100%-80px)] overflow-y-auto pr-2 custom-scrollbar">
          {category.exams.map((exam) => (
            <Button
              key={exam.id}
              variant="outline"
              className="w-full justify-between group/item hover:bg-primary/10 hover:border-primary transition-all"
              onClick={() => navigate(`/exam/${exam.id}`)}
            >
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="font-mono">
                  {exam.year}
                </Badge>
                <span className="font-medium">{exam.title}</span>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground group-hover/item:text-primary group-hover/item:translate-x-1 transition-all" />
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
};
