/**
 * Utilitários para integração com APIs de IA
 * 
 * Este arquivo contém funções helper para facilitar a integração
 * com diferentes APIs de IA e serviços externos.
 */

import { 
  ImageVideoRequest, 
  ImageVideoResponse, 
  AudioRequest, 
  AudioResponse,
  AIEditRequest,
  AIEditResponse,
  ChatRequest,
  ChatResponse,
  DeployRequest,
  DeployResponse,
  APIResponse 
} from './types';

// Base URL da API
const API_BASE = '/api';

/**
 * Função genérica para fazer requests à API
 */
async function apiRequest<T>(
  endpoint: string, 
  options: RequestInit = {}
): Promise<APIResponse<T>> {
  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Erro na requisição');
    }

    return data;
  } catch (error) {
    console.error(`Erro na API ${endpoint}:`, error);
    throw error;
  }
}

/**
 * API para geração de imagens e vídeos
 */
export const imageVideoAPI = {
  // Gerar nova imagem ou vídeo
  generate: async (request: ImageVideoRequest): Promise<APIResponse<ImageVideoResponse>> => {
    return apiRequest<ImageVideoResponse>('/image-video', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  },

  // Buscar histórico
  getHistory: async (userId: string, limit = 10, offset = 0): Promise<APIResponse<ImageVideoResponse[]>> => {
    return apiRequest<ImageVideoResponse[]>(`/image-video?userId=${userId}&limit=${limit}&offset=${offset}`);
  },

  // Download de arquivo
  download: async (url: string, filename: string): Promise<void> => {
    const response = await fetch(url);
    const blob = await response.blob();
    
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(downloadUrl);
  },
};

/**
 * API para áudio e TTS
 */
export const audioAPI = {
  // Gerar áudio
  generate: async (request: AudioRequest): Promise<APIResponse<AudioResponse>> => {
    return apiRequest<AudioResponse>('/audio', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  },

  // Buscar vozes disponíveis
  getVoices: async (): Promise<APIResponse<any[]>> => {
    return apiRequest<any[]>('/audio', {
      method: 'OPTIONS',
    });
  },

  // Buscar histórico
  getHistory: async (userId: string, limit = 10): Promise<APIResponse<AudioResponse[]>> => {
    return apiRequest<AudioResponse[]>(`/audio?userId=${userId}&limit=${limit}`);
  },
};

/**
 * API para edição com IA
 */
export const aiEditAPI = {
  // Executar edição
  edit: async (request: AIEditRequest): Promise<APIResponse<AIEditResponse>> => {
    return apiRequest<AIEditResponse>('/ai-edit', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  },

  // Buscar histórico de edições
  getHistory: async (projectId: string, limit = 10): Promise<APIResponse<AIEditResponse[]>> => {
    return apiRequest<AIEditResponse[]>(`/ai-edit?projectId=${projectId}&limit=${limit}`);
  },

  // Obter sugestões
  getSuggestions: async (code: string, context?: string): Promise<APIResponse<any[]>> => {
    return apiRequest<any[]>('/ai-edit', {
      method: 'PATCH',
      body: JSON.stringify({ code, context }),
    });
  },
};

/**
 * API para deploy
 */
export const deployAPI = {
  // Fazer deploy
  deploy: async (request: DeployRequest): Promise<APIResponse<DeployResponse>> => {
    return apiRequest<DeployResponse>('/deploy', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  },

  // Verificar status do deploy
  getStatus: async (deploymentId: string): Promise<APIResponse<any>> => {
    return apiRequest<any>(`/deploy?deploymentId=${deploymentId}`);
  },

  // Buscar histórico de deploys
  getHistory: async (projectId: string): Promise<APIResponse<any[]>> => {
    return apiRequest<any[]>(`/deploy?projectId=${projectId}`);
  },

  // Configurar domínio personalizado
  configureDomain: async (deploymentId: string, domain: string): Promise<APIResponse<any>> => {
    return apiRequest<any>('/deploy', {
      method: 'PUT',
      body: JSON.stringify({ deploymentId, domain }),
    });
  },

  // Remover deployment
  remove: async (deploymentId: string): Promise<APIResponse<any>> => {
    return apiRequest<any>(`/deploy?deploymentId=${deploymentId}`, {
      method: 'DELETE',
    });
  },
};

/**
 * API para chat
 */
export const chatAPI = {
  // Enviar mensagem
  sendMessage: async (request: ChatRequest): Promise<APIResponse<ChatResponse>> => {
    return apiRequest<ChatResponse>('/chat', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  },

  // Buscar mensagens da conversa
  getMessages: async (conversationId: string): Promise<APIResponse<any[]>> => {
    return apiRequest<any[]>(`/chat?conversationId=${conversationId}`);
  },

  // Buscar conversas do usuário
  getConversations: async (userId: string): Promise<APIResponse<any[]>> => {
    return apiRequest<any[]>(`/chat?userId=${userId}`);
  },

  // Atualizar conversa
  updateConversation: async (conversationId: string, updates: any): Promise<APIResponse<any>> => {
    return apiRequest<any>('/chat', {
      method: 'PUT',
      body: JSON.stringify({ conversationId, ...updates }),
    });
  },

  // Remover conversa
  deleteConversation: async (conversationId: string): Promise<APIResponse<any>> => {
    return apiRequest<any>(`/chat?conversationId=${conversationId}`, {
      method: 'DELETE',
    });
  },

  // Upload de arquivo
  uploadFile: async (file: File, conversationId: string): Promise<APIResponse<any>> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('conversationId', conversationId);

    return fetch(`${API_BASE}/chat`, {
      method: 'PATCH',
      body: formData,
    }).then(res => res.json());
  },
};

/**
 * Utilitários para formatação
 */
export const formatUtils = {
  // Formatar duração em segundos para string legível
  formatDuration: (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  },

  // Formatar tamanho de arquivo
  formatFileSize: (bytes: number): string => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    if (bytes === 0) return '0 Bytes';
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
  },

  // Formatar data relativa
  formatRelativeTime: (date: string): string => {
    const now = new Date();
    const past = new Date(date);
    const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

    if (diffInSeconds < 60) return 'Agora mesmo';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} min atrás`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} h atrás`;
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} dias atrás`;
    
    return past.toLocaleDateString('pt-BR');
  },

  // Truncar texto
  truncateText: (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  },
};

/**
 * Utilitários para validação
 */
export const validationUtils = {
  // Validar URL
  isValidUrl: (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },

  // Validar email
  isValidEmail: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Validar domínio
  isValidDomain: (domain: string): boolean => {
    const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
    return domainRegex.test(domain);
  },

  // Validar tipo de arquivo
  isValidFileType: (file: File, allowedTypes: string[]): boolean => {
    return allowedTypes.some(type => file.type.startsWith(type));
  },

  // Validar tamanho de arquivo
  isValidFileSize: (file: File, maxSizeInMB: number): boolean => {
    const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
    return file.size <= maxSizeInBytes;
  },
};

/**
 * Utilitários para localStorage
 */
export const storageUtils = {
  // Salvar no localStorage
  save: (key: string, value: any): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Erro ao salvar no localStorage:', error);
    }
  },

  // Carregar do localStorage
  load: <T>(key: string, defaultValue: T): T => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Erro ao carregar do localStorage:', error);
      return defaultValue;
    }
  },

  // Remover do localStorage
  remove: (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Erro ao remover do localStorage:', error);
    }
  },

  // Limpar localStorage
  clear: (): void => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Erro ao limpar localStorage:', error);
    }
  },
};

/**
 * Constantes da aplicação
 */
export const APP_CONSTANTS = {
  // Limites de arquivo
  MAX_FILE_SIZE_MB: 10,
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
  ALLOWED_VIDEO_TYPES: ['video/mp4', 'video/webm', 'video/mov'],
  ALLOWED_AUDIO_TYPES: ['audio/mp3', 'audio/wav', 'audio/ogg'],
  ALLOWED_DOCUMENT_TYPES: ['application/pdf', 'text/plain', 'application/msword'],

  // Configurações de geração
  DEFAULT_IMAGE_SIZE: '1024x1024',
  DEFAULT_VIDEO_DURATION: 30,
  DEFAULT_AUDIO_VOICE: 'pt-BR-female-1',

  // URLs e endpoints
  SUPPORT_EMAIL: 'suporte@aicreativestudio.com',
  DOCUMENTATION_URL: 'https://docs.aicreativestudio.com',
  GITHUB_URL: 'https://github.com/aicreativestudio',

  // Chaves do localStorage
  STORAGE_KEYS: {
    USER_PREFERENCES: 'ai_studio_preferences',
    RECENT_PROJECTS: 'ai_studio_recent_projects',
    CHAT_HISTORY: 'ai_studio_chat_history',
    GENERATION_HISTORY: 'ai_studio_generation_history',
  },
};