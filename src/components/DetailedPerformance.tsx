import { useParams, useNavigate } from "react-router-dom"; // Added useNavigate
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui Button is available
import { Badge } from "@/components/ui/badge"; // Added for level badge

// Mock data (replace with actual data fetching based on examId)
// Updated to include a single level per topic to match topic practice structure
const mockTopicPerformance = [
  { topic: "Calculus", level: 1, accuracy: 75 },
  { topic: "Logarithms", level: 1, accuracy: 90 },
  { topic: "Geometry", level: 1, accuracy: 60 },
  { topic: "Complex Numbers", level: 1, accuracy: 45 },
  // Add more topics as needed
];

export default function DetailedPerformance() {
  const { examId } = useParams<{ examId: string }>();
  const navigate = useNavigate();

  // In a real scenario, fetch detailed data using examId here

  const handlePractice = (topic: string) => {
    navigate(`/topic-practice?topic=${encodeURIComponent(topic)}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Detailed Performance for Exam {examId}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Radar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Radar</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={mockTopicPerformance}>
                <PolarGrid />
                <PolarAngleAxis dataKey="topic" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar name="Accuracy" dataKey="accuracy" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Right: Full Topic Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Full Topic Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {mockTopicPerformance.map((item, index) => (
                <li key={index} className="border-b pb-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{item.topic}</span>
                      <Badge variant="secondary" className="text-xs">
                        Level {item.level}
                      </Badge>
                      <span className="text-muted-foreground">({item.accuracy}% Accuracy)</span>
                    </div>
                    <Button variant="link" size="sm" onClick={() => handlePractice(item.topic)}>
                      Practice
                    </Button>
                  </div>
                  {/* Add more details like correct/incorrect counts, tips, etc. */}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}