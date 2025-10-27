import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { BookOpen, Target, TrendingUp, Award, Users, Zap } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Target,
      title: "Phòng Thi Thử",
      description: "Luyện tập với định dạng kỳ thi quốc gia thực tế dưới điều kiện thời gian",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: BookOpen,
      title: "Luyện Tập Chủ Đề",
      description: "Làm chủ từng chủ đề qua các mức độ khó dần",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: TrendingUp,
      title: "Học Tập Thích Ứng",
      description: "Gợi ý dựa trên AI theo hiệu suất của bạn",
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      icon: Award,
      title: "Theo Dõi Hiệu Suất",
      description: "Phân tích chi tiết và hình ảnh hóa tiến độ",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
  ];

  const stats = [
    { icon: Users, value: "10,000+", label: "Học Sinh Hoạt Động" },
    { icon: BookOpen, value: "5,000+", label: "Câu Hỏi Luyện Tập" },
    { icon: Award, value: "95%", label: "Tỷ Lệ Thành Công" },
    { icon: Zap, value: "24/7", label: "Có Sẵn" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroBanner})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
        
        <div className="container relative mx-auto px-4 py-20 md:py-32 max-w-7xl">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
              Chuẩn Bị Thi Toán 12
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Nền tảng luyện tập thông minh cho học sinh lớp 12 chuẩn bị cho Kỳ thi THPT Quốc gia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                variant="hero"
                size="xl"
                onClick={() => navigate("/mock-exams")}
                className="group"
              >
                Bắt Đầu Thi Thử
                <Target className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => navigate("/topic-practice")}
              >
                Duyệt Chủ Đề
                <BookOpen className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <stat.icon className="h-8 w-8 mx-auto text-primary" />
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tại Sao Chọn Chuẩn Bị Thi Toán 12?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mọi thứ bạn cần để vượt qua kỳ thi quốc gia với sự tự tin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className={`p-3 rounded-lg ${feature.bgColor} shrink-0`}>
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sẵn Sàng Bắt Đầu Hành Trình Của Bạn?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Tham gia cùng hàng ngàn học sinh đạt được mục tiêu kỳ thi
          </p>
          <Button
            variant="secondary"
            size="xl"
            onClick={() => navigate("/topic-practice")}
            className="shadow-xl hover:shadow-2xl"
          >
            Bắt Đầu Miễn Phí
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
