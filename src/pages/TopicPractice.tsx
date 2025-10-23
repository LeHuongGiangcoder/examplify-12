import { useState } from "react";
import { TopicCard } from "@/components/TopicCard";
import { mockTopics } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TopicPractice = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTopics = mockTopics.filter(
    (topic) =>
      topic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const popularTags = ["#Functions", "#Derivatives", "#Logarithms", "#Geometry"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-3">
            Topic Practice
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Master each topic at your own pace. Start with foundations and progress to comprehensive challenges.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search topics or question types..."
              className="pl-10 h-12 shadow-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Popular Tags */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Popular:
            </span>
            {popularTags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => setSearchQuery(tag.replace("#", ""))}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Highlight Box */}
        <div className="bg-gradient-primary rounded-xl p-6 mb-8 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/20 rounded-lg">
              <Star className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">
                Recommended for You
              </h3>
              <p className="text-white/90 mb-3">
                Based on your recent performance, we suggest focusing on Functions (Level 3) and Derivatives (Level 2)
              </p>
              <div className="flex gap-2">
                <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                  Personalized
                </Badge>
                <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                  Adaptive
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
            All Topics
            <span className="text-sm font-normal text-muted-foreground">
              ({filteredTopics.length} topics)
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTopics.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicPractice;
