import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Topic } from "@/types/exam";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface TopicCardProps {
  topic: Topic;
}

export const TopicCard = ({ topic }: TopicCardProps) => {
  const navigate = useNavigate();
  const avgCompletion = Math.round(
    topic.levels.reduce((sum, level) => sum + (level.completionRate || 0), 0) / topic.levels.length
  );

  return (
    <Card 
      className="cursor-pointer group hover:scale-[1.02] transition-all duration-300"
      onClick={() => navigate(`/topic/${topic.id}`)}
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
            <span className="font-medium text-primary">{avgCompletion}%</span>
          </div>
          <Progress value={avgCompletion} variant="gradient" />
        </div>
        <div className="flex gap-2 flex-wrap pt-2">
          {topic.levels.map((level) => (
            <Badge
              key={level.id}
              variant={(level.completionRate || 0) > 70 ? "success" : "secondary"}
              className="text-xs"
            >
              Lv{level.level}: {level.completionRate || 0}%
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
