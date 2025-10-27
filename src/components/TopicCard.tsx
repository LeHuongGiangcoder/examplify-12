import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Topic } from "@/types/exam";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Add this import if not present

interface TopicCardProps {
  topic: Topic;
}

export const TopicCard = ({ topic }: TopicCardProps) => {
  const navigate = useNavigate();
  const completion = topic.completionRate || 0;

  return (
    <Card 
      className="cursor-pointer group hover:scale-[1.02] transition-all duration-300"
      onClick={() => navigate(`/topic/${topic.id}`)} // Existing navigation
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{topic.icon}</span>
            <div>
              <CardTitle className="text-lg">{topic.name}</CardTitle>
              <Badge variant="outline" className="mt-1">{topic.tag}</Badge>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <CardDescription>{topic.description}</CardDescription>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Overall Progress</span>
            <span className="font-medium text-primary">{completion}%</span>
          </div>
          <Progress value={completion} variant="gradient" />
        </div>
        {/* Removed multi-level badges; now showing only a single level badge */}
        <div className="flex gap-2 flex-wrap pt-2">
          <Badge
            variant={completion > 70 ? "success" : "secondary"}
            className="text-xs"
          >
            Level {topic.currentLevel || 1}: {completion}%
          </Badge>
        </div>
        
        {/* New button for reviewing past questions */}
        <Button 
          variant="outline" 
          size="sm" 
          className="mt-4 w-full"
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click
            navigate(`/topic-review/${topic.id}`);
          }}
        >
          Xem lại câu hỏi đã làm
        </Button>
      </CardContent>
    </Card>
  );
};
