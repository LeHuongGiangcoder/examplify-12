export interface Question {
  id: string;
  content: string;
  options: string[];
  correctAnswer: number;
  topicTag: string;
  difficulty: "foundation" | "core" | "challenge" | "comprehensive";
}

export interface Exam {
  id: string;
  year: number;
  title: string;
  totalQuestions: number;
  duration: number; // in minutes
  questions: Question[];
}

export interface Topic {
  id: string;
  name: string;
  tag: string;
  description: string;
  icon: string;
  color: string;
  levels: TopicLevel[];
}

export interface TopicLevel {
  id: string;
  level: number;
  name: string;
  difficulty: "foundation" | "core" | "challenge" | "comprehensive";
  questionsCount: number;
  completionRate?: number;
}

export interface UserProgress {
  topicId: string;
  levelId: string;
  completionRate: number;
  correctAnswers: number;
  totalAnswers: number;
  masteryRate: number;
}

export interface ExamResult {
  examId: string;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  accuracyRate: number;
  weakTopics: string[];
  completedAt: Date;
}
