import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-2" />
          <h1 className="text-2xl font-bold">Trang không tìm thấy</h1>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground mb-4">
            Xin lỗi, trang bạn đang tìm kiếm không tồn tại. Hãy kiểm tra lại URL hoặc quay về trang chính.
          </p>
          <Button onClick={() => window.location.href = "/"}>Quay về trang chủ</Button>
        </CardContent>
      </Card>
    </div>
  );
}