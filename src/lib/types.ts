// Tipos para o sistema de geração de imagens e vídeos
export interface ImageVideoRequest {
  prompt: string;
  type: 'image' | 'video';
  style?: 'realistic' | 'artistic' | 'cartoon' | 'abstract';
  dimensions?: '1024x1024' | '1024x1792' | '1792x1024' | '1920x1080';
  quality?: 'standard' | 'hd' | '4k';
  duration?: number; // Para vídeos, em segundos
}

export interface ImageVideoResponse {
  id: string;
  url: string;
  prompt: string;
  type: 'image' | 'video';
  style: string;
  dimensions: string;
  quality: string;
  duration?: number;
  createdAt: string;
  processingTime: number;
}

// Tipos para o sistema de áudio/TTS
export interface AudioRequest {
  text: string;
  voice: string;
  speed?: number;
  pitch?: number;
  format?: 'mp3' | 'wav' | 'ogg';
  language?: string;
}

export interface AudioResponse {
  id: string;
  text: string;
  voice: string;
  audioUrl: string;
  duration: number;
  format: string;
  language: string;
  settings: {
    speed: number;
    pitch: number;
  };
  createdAt: string;
  processingTime: number;
}

export interface Voice {
  id: string;
  name: string;
  language: string;
  gender: 'male' | 'female';
  description: string;
}

// Tipos para edição com IA
export interface AIEditRequest {
  action: 'generate' | 'edit' | 'optimize';
  code?: string;
  prompt: string;
  framework?: 'html' | 'react' | 'vue' | 'angular';
  options?: Record<string, any>;
}

export interface AIEditResponse {
  code?: string;
  originalCode?: string;
  editedCode?: string;
  optimizedCode?: string;
  changes?: string[];
  improvements?: string[];
  metrics?: {
    sizeBefore: number;
    sizeAfter: number;
    performanceGain: string;
  };
  framework: string;
  prompt: string;
  createdAt: string;
}

export interface Suggestion {
  type: 'performance' | 'accessibility' | 'seo' | 'design';
  title: string;
  description: string;
  code: string;
}

// Tipos para deploy
export interface DeployRequest {
  projectId: string;
  domain?: string;
  provider?: 'vercel' | 'netlify' | 'aws';
  config?: {
    framework?: string;
    nodeVersion?: string;
    buildCommand?: string;
    outputDirectory?: string;
  };
}

export interface DeployResponse {
  deploymentId: string;
  projectId: string;
  url: string;
  customDomain?: string;
  provider: string;
  status: 'deploying' | 'ready' | 'error';
  createdAt: string;
  estimatedTime: string;
  config: {
    framework: string;
    nodeVersion: string;
    buildCommand: string;
    outputDirectory: string;
  };
}

export interface DNSRecord {
  type: 'CNAME' | 'A' | 'AAAA';
  name: string;
  value: string;
  ttl: number;
}

// Tipos para chat
export interface ChatMessage {
  id: string;
  conversationId: string;
  message: string;
  type: 'user' | 'assistant';
  timestamp: string;
  files?: FileAttachment[];
}

export interface ChatRequest {
  message: string;
  conversationId?: string;
  files?: FileAttachment[];
  context?: ChatMessage[];
}

export interface ChatResponse {
  id: string;
  conversationId: string;
  message: string;
  type: 'assistant';
  timestamp: string;
  tokens: {
    prompt: number;
    completion: number;
    total: number;
  };
  model: string;
  processingTime: number;
}

export interface Conversation {
  id: string;
  title: string;
  lastMessage: string;
  messageCount: number;
  createdAt: string;
  updatedAt: string;
  archived?: boolean;
}

export interface FileAttachment {
  id: string;
  fileName: string;
  fileSize: number;
  fileType: string;
  url?: string;
  analysis?: string;
}

// Tipos para projetos
export interface Project {
  id: string;
  name: string;
  type: 'website' | 'ecommerce' | 'blog' | 'portfolio' | 'landing' | 'app';
  thumbnail: string;
  status: 'creating' | 'ready' | 'error';
  createdAt: string;
  updatedAt: string;
  deployments?: DeployResponse[];
}

export interface ClonedSite {
  id: string;
  originalUrl: string;
  title: string;
  thumbnail: string;
  status: 'cloning' | 'ready' | 'error';
  createdAt: string;
  editHistory?: AIEditResponse[];
}

// Tipos para usuário
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  plan: 'free' | 'pro' | 'enterprise';
  usage: {
    imagesGenerated: number;
    videosGenerated: number;
    audioGenerated: number;
    sitesCloned: number;
    projectsCreated: number;
    chatMessages: number;
  };
  limits: {
    imagesPerMonth: number;
    videosPerMonth: number;
    audioMinutesPerMonth: number;
    sitesPerMonth: number;
    projectsPerMonth: number;
    chatMessagesPerMonth: number;
  };
}

// Tipos para API responses
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  pagination?: {
    limit: number;
    offset?: number;
    total: number;
  };
}

// Tipos para configurações
export interface AppConfig {
  openai: {
    apiKey: string;
    model: string;
  };
  elevenlabs: {
    apiKey: string;
  };
  vercel: {
    token: string;
  };
  supabase: {
    url: string;
    anonKey: string;
  };
}

// Tipos para histórico
export interface HistoryItem {
  id: string;
  type: 'image' | 'video' | 'audio' | 'site' | 'project' | 'chat';
  title: string;
  description?: string;
  thumbnail?: string;
  url?: string;
  createdAt: string;
  metadata?: Record<string, any>;
}

// Tipos para gamificação
export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  points: number;
  unlockedAt?: string;
}

export interface UserStats {
  level: number;
  points: number;
  streak: number;
  achievements: Achievement[];
  badges: string[];
}