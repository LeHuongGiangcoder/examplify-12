import { Exam, Topic, QuestionResult } from "@/types/exam"; // Đảm bảo import QuestionResult nếu chưa có

export const mockTopics: Topic[] = [
  {
    id: "functions",
    name: "Functions",
    tag: "Hàm số",
    description: "Master function analysis, graphs, and transformations",
    icon: "📈",
    color: "bg-gradient-primary",
    levels: [
      { id: "fn-1", level: 1, name: "Foundation", difficulty: "foundation", questionsCount: 20, completionRate: 85 },
      { id: "fn-2", level: 2, name: "Core", difficulty: "core", questionsCount: 25, completionRate: 60 },
      { id: "fn-3", level: 3, name: "Challenge", difficulty: "challenge", questionsCount: 20, completionRate: 30 },
      { id: "fn-4", level: 4, name: "Comprehensive", difficulty: "comprehensive", questionsCount: 15, completionRate: 0 },
    ],
    pastQuestions: [ // Thêm dữ liệu mẫu
      {
        id: "q1",
        content: "Tìm đạo hàm của hàm số f(x) = x² + 3x + 2",
        options: ["2x + 3", "x² + 3", "2x", "3"],
        correctAnswer: 0,
        userAnswer: 0,
        isCorrect: true,
        timeSpent: 45,
        topicTag: "Hàm số",
        difficulty: "foundation",
        explanation: "",
        notes: ""
      },
      {
        id: "q6",
        content: "Biến đổi hàm số y = 2x + 1 thành dạng đồ thị",
        options: ["Đường thẳng", "Parabol", "Hyperbol", "Hình sin"],
        correctAnswer: 0,
        userAnswer: 0,
        isCorrect: true,
        timeSpent: 60,
        topicTag: "Hàm số",
        difficulty: "foundation",
        explanation: "",
        notes: ""
      }
    ]
  },
  {
    id: "derivatives",
    name: "Derivatives",
    tag: "Đạo hàm",
    description: "Understand rates of change and tangent lines",
    icon: "📊",
    color: "bg-gradient-accent",
    levels: [
      { id: "dv-1", level: 1, name: "Foundation", difficulty: "foundation", questionsCount: 20, completionRate: 90 },
      { id: "dv-2", level: 2, name: "Core", difficulty: "core", questionsCount: 25, completionRate: 75 },
      { id: "dv-3", level: 3, name: "Challenge", difficulty: "challenge", questionsCount: 20, completionRate: 45 },
      { id: "dv-4", level: 4, name: "Comprehensive", difficulty: "comprehensive", questionsCount: 15, completionRate: 10 },
    ],
    pastQuestions: [
      {
        id: "q5",
        content: "Tìm giới hạn khi x tiến tới vô cực: lim(x→∞) (x² + 2x + 1)/(x² + 1)",
        options: ["1", "2", "0", "∞"],
        correctAnswer: 0,
        userAnswer: 0,
        isCorrect: true,
        timeSpent: 150,
        topicTag: "Đạo hàm",
        difficulty: "core",
        explanation: "",
        notes: ""
      },
      {
        id: "q7",
        content: "Đạo hàm của f(x) = sin(x) là gì?",
        options: ["cos(x)", "-sin(x)", "tan(x)", "sec(x)"],
        correctAnswer: 0,
        userAnswer: 1,
        isCorrect: false,
        timeSpent: 90,
        topicTag: "Đạo hàm",
        difficulty: "core",
        explanation: "Đạo hàm của sin(x) là cos(x).",
        notes: ""
      }
    ]
  },
  {
    id: "logarithms",
    name: "Logarithms",
    tag: "Logarit",
    description: "Explore exponential and logarithmic relationships",
    icon: "🔢",
    color: "bg-secondary",
    completionRate: 100,
    currentLevel: 4,
    levels: [
      { id: "lg-1", level: 1, name: "Foundation", difficulty: "foundation", questionsCount: 18, completionRate: 100 },
      { id: "lg-2", level: 2, name: "Core", difficulty: "core", questionsCount: 22, completionRate: 100 },
      { id: "lg-3", level: 3, name: "Challenge", difficulty: "challenge", questionsCount: 18, completionRate: 100 },
      { id: "lg-4", level: 4, name: "Comprehensive", difficulty: "comprehensive", questionsCount: 12, completionRate: 100 },
    ],
    pastQuestions: [
      {
        id: "q2",
        content: "Giải phương trình: log₂(x + 3) = 4",
        options: ["13", "16", "19", "22"],
        correctAnswer: 0,
        userAnswer: 2,
        isCorrect: false,
        timeSpent: 120,
        topicTag: "Logarit",
        difficulty: "core",
        explanation: "Đáp án đúng là 13 vì 2^4 = 16, nên x + 3 = 16, x = 13.",
        notes: ""
      },
      {
        id: "q8",
        content: "Tính log10(1000)",
        options: ["2", "3", "4", "10"],
        correctAnswer: 1,
        userAnswer: 1,
        isCorrect: true,
        timeSpent: 30,
        topicTag: "Logarit",
        difficulty: "foundation",
        explanation: "",
        notes: ""
      }
    ]
  },
  {
    id: "geometry",
    name: "Spatial Geometry",
    tag: "Hình học không gian",
    description: "3D shapes, volumes, and spatial reasoning",
    icon: "📐",
    color: "bg-success",
    levels: [
      { id: "gm-1", level: 1, name: "Foundation", difficulty: "foundation", questionsCount: 20, completionRate: 65 },
      { id: "gm-2", level: 2, name: "Core", difficulty: "core", questionsCount: 25, completionRate: 35 },
      { id: "gm-3", level: 3, name: "Challenge", difficulty: "challenge", questionsCount: 20, completionRate: 10 },
      { id: "gm-4", level: 4, name: "Comprehensive", difficulty: "comprehensive", questionsCount: 15, completionRate: 0 },
    ],
    pastQuestions: [
      {
        id: "q3",
        content: "Tìm diện tích tam giác với các đỉnh tại (0,0), (4,0), và (0,3)",
        options: ["6", "12", "8", "10"],
        correctAnswer: 0,
        userAnswer: 0,
        isCorrect: true,
        timeSpent: 90,
        topicTag: "Hình học không gian",
        difficulty: "foundation",
        explanation: "",
        notes: ""
      },
      {
        id: "q9",
        content: "Thể tích hình cầu bán kính r=2",
        options: ["(4/3)π*8", "4π", "8π", "(4/3)π*4"],
        correctAnswer: 0,
        userAnswer: 0,
        isCorrect: true,
        timeSpent: 120,
        topicTag: "Hình học không gian",
        difficulty: "core",
        explanation: "",
        notes: ""
      }
    ]
  },
  {
    id: "integrals",
    name: "Integrals",
    tag: "Tích phân",
    description: "Calculate areas and accumulation",
    icon: "∫",
    color: "bg-warning",
    levels: [
      { id: "int-1", level: 1, name: "Foundation", difficulty: "foundation", questionsCount: 20, completionRate: 55 },
      { id: "int-2", level: 2, name: "Core", difficulty: "core", questionsCount: 25, completionRate: 25 },
      { id: "int-3", level: 3, name: "Challenge", difficulty: "challenge", questionsCount: 20, completionRate: 5 },
      { id: "int-4", level: 4, name: "Comprehensive", difficulty: "comprehensive", questionsCount: 15, completionRate: 0 },
    ],
    pastQuestions: [
      {
        id: "q10",
        content: "Tích phân của f(x) = 2x từ 0 đến 1",
        options: ["1", "2", "0", "4"],
        correctAnswer: 0,
        userAnswer: 0,
        isCorrect: true,
        timeSpent: 100,
        topicTag: "Tích phân",
        difficulty: "foundation",
        explanation: "",
        notes: ""
      }
    ]
  },
  {
    id: "probability",
    name: "Probability",
    tag: "Xác suất",
    description: "Statistical analysis and probability theory",
    icon: "🎲",
    color: "bg-accent",
    levels: [
      { id: "pr-1", level: 1, name: "Foundation", difficulty: "foundation", questionsCount: 18, completionRate: 80 },
      { id: "pr-2", level: 2, name: "Core", difficulty: "core", questionsCount: 22, completionRate: 50 },
      { id: "pr-3", level: 3, name: "Challenge", difficulty: "challenge", questionsCount: 18, completionRate: 20 },
      { id: "pr-4", level: 4, name: "Comprehensive", difficulty: "comprehensive", questionsCount: 12, completionRate: 0 },
    ],
  },
];

export interface ExamCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  exams: Exam[];
}

export const examCategories: ExamCategory[] = [
  {
    id: "thpt",
    name: "THPT National Exam",
    description: "Official National High School Graduation Exam for university entrance",
    icon: "🎓",
    color: "bg-gradient-primary",
    exams: [
      {
        id: "thpt-2024",
        year: 2024,
        title: "THPT National Exam 2024",
        totalQuestions: 50,
        duration: 90,
        questions: [],
      },
      {
        id: "thpt-2023",
        year: 2023,
        title: "THPT National Exam 2023",
        totalQuestions: 50,
        duration: 90,
        questions: [],
      },
      {
        id: "thpt-2022",
        year: 2022,
        title: "THPT National Exam 2022",
        totalQuestions: 50,
        duration: 90,
        questions: [],
      },
      {
        id: "thpt-2021",
        year: 2021,
        title: "THPT National Exam 2021",
        totalQuestions: 50,
        duration: 90,
        questions: [],
      },
      {
        id: "thpt-2020",
        year: 2020,
        title: "THPT National Exam 2020",
        totalQuestions: 50,
        duration: 90,
        questions: [],
      },
    ],
  },
  {
    id: "hsa",
    name: "HSA Test",
    description: "High School Assessment standardized test for academic evaluation",
    icon: "📝",
    color: "bg-gradient-accent",
    exams: [
      {
        id: "hsa-2024",
        year: 2024,
        title: "HSA Test 2024",
        totalQuestions: 50,
        duration: 90,
        questions: [],
      },
      {
        id: "hsa-2023",
        year: 2023,
        title: "HSA Test 2023",
        totalQuestions: 50,
        duration: 90,
        questions: [],
      },
      {
        id: "hsa-2022",
        year: 2022,
        title: "HSA Test 2022",
        totalQuestions: 50,
        duration: 90,
        questions: [],
      },
      {
        id: "hsa-2021",
        year: 2021,
        title: "HSA Test 2021",
        totalQuestions: 50,
        duration: 90,
        questions: [],
      },
      {
        id: "hsa-2020",
        year: 2020,
        title: "HSA Test 2020",
        totalQuestions: 50,
        duration: 90,
        questions: [],
      },
    ],
  },
];

export const sampleQuestions: Question[] = [
  {
    id: "q1",
    content: "Find the derivative of f(x) = 3x² + 2x - 5",
    options: ["6x + 2", "6x - 2", "3x + 2", "6x² + 2x"],
    correctAnswer: 0,
    topicTag: "derivatives",
    difficulty: "foundation",
  },
  {
    id: "q2",
    content: "Calculate log₂(16)",
    options: ["2", "4", "8", "16"],
    correctAnswer: 1,
    topicTag: "logarithms",
    difficulty: "foundation",
  },
];
