import { Exam, Topic, Question } from "@/types/exam";

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
  },
  {
    id: "logarithms",
    name: "Logarithms",
    tag: "Logarit",
    description: "Explore exponential and logarithmic relationships",
    icon: "🔢",
    color: "bg-secondary",
    levels: [
      { id: "lg-1", level: 1, name: "Foundation", difficulty: "foundation", questionsCount: 18, completionRate: 70 },
      { id: "lg-2", level: 2, name: "Core", difficulty: "core", questionsCount: 22, completionRate: 40 },
      { id: "lg-3", level: 3, name: "Challenge", difficulty: "challenge", questionsCount: 18, completionRate: 15 },
      { id: "lg-4", level: 4, name: "Comprehensive", difficulty: "comprehensive", questionsCount: 12, completionRate: 0 },
    ],
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

export const mockExams: Exam[] = [
  {
    id: "exam-2024",
    year: 2024,
    title: "THPT National Exam 2024",
    totalQuestions: 50,
    duration: 90,
    questions: [],
  },
  {
    id: "exam-2023",
    year: 2023,
    title: "THPT National Exam 2023",
    totalQuestions: 50,
    duration: 90,
    questions: [],
  },
  {
    id: "exam-2022",
    year: 2022,
    title: "THPT National Exam 2022",
    totalQuestions: 50,
    duration: 90,
    questions: [],
  },
  {
    id: "exam-2021",
    year: 2021,
    title: "THPT National Exam 2021",
    totalQuestions: 50,
    duration: 90,
    questions: [],
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
