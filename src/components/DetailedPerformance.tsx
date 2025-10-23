import { useParams } from "react-router-dom";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data (replace with actual data fetching based on examId)
const mockTopicPerformance = [
  { topic: "Calculus", accuracy: 75 },
  { topic: "Logarithms", accuracy: 90 },
  { topic: "Geometry", accuracy: 60 },
  { topic: "Complex Numbers", accuracy: 45 },
  // Add more topics as needed
];

export default function DetailedPerformance() {
  const { examId } = useParams<{ examId: string }>();

  // In a real scenario, fetch detailed data using examId here

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

        {/* Right: Full Topic Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Full Topic Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {mockTopicPerformance.map((item, index) => (
                <li key={index} className="border-b pb-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{item.topic}</span>
                    <span>{item.accuracy}% Accuracy</span>
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