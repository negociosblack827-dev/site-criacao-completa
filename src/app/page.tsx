"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Image, 
  Video, 
  Mic, 
  Copy, 
  Code, 
  MessageCircle,
  User,
  Settings,
  LogOut,
  Download,
  History,
  Upload,
  Play,
  Pause,
  RotateCcw,
  Redo,
  Share2,
  Globe,
  Zap,
  Bot,
  X,
  Chrome,
  FileText,
  Headphones,
  Wand2,
  Sparkles,
  Save,
  FolderOpen,
  Edit3,
  Trash2,
  Star,
  Award,
  CreditCard,
  Shield,
  Bell,
  Palette,
  Languages,
  Camera,
  Mic2,
  Volume2,
  Search,
  Filter,
  Grid,
  List,
  Plus,
  Minus,
  MoreHorizontal,
  ExternalLink,
  RefreshCw,
  Clock,
  TrendingUp,
  Target,
  Layers,
  Move,
  CornerDownLeft,
  CornerDownRight,
  MessageSquare,
  Send,
  Paperclip,
  Smile,
  Hash,
  AtSign,
  Phone,
  Mail as MailIcon,
  Key,
  Eye as EyeIcon,
  EyeOff as EyeOffIcon,
  UserPlus,
  Users,
  Calendar,
  MapPin,
  Link,
  Bookmark,
  Heart,
  ThumbsUp,
  Share,
  Flag,
  MoreVertical,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Check,
  AlertCircle,
  Info,
  HelpCircle,
  Loader,
  Maximize,
  Minimize,
  FullScreen,
  Compress,
  ZoomIn,
  ZoomOut,
  RotateCw,
  FlipHorizontal,
  FlipVertical,
  Crop,
  Scissors,
  PaintBucket,
  Brush,
  Eraser,
  Type,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Subscript,
  Superscript,
  Quote,
  Code2,
  Terminal,
  Database,
  Server,
  Cloud,
  CloudUpload,
  CloudDownload,
  Wifi,
  WifiOff,
  Battery,
  BatteryLow,
  Signal,
  Bluetooth,
  Usb,
  HardDrive,
  Cpu,
  Memory,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Desktop,
  Watch,
  Gamepad2,
  Headset,
  Speaker,
  Microphone,
  VideoIcon,
  CameraIcon,
  ImageIcon,
  FileIcon,
  FolderIcon,
  ArchiveIcon,
  PackageIcon,
  BoxIcon,
  ShoppingCartIcon,
  ShoppingBagIcon,
  CreditCardIcon,
  DollarSignIcon,
  EuroIcon,
  PoundSterlingIcon,
  YenIcon,
  BitcoinIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  BarChartIcon,
  LineChartIcon,
  PieChartIcon,
  ActivityIcon,
  PulseIcon,
  ZapIcon,
  FlashIcon,
  SunIcon,
  MoonIcon,
  StarIcon,
  CloudIcon,
  RainCloudIcon,
  SnowIcon,
  WindIcon,
  ThermometerIcon,
  UmbrellaIcon,
  CompassIcon,
  MapIcon,
  NavigationIcon,
  RouteIcon,
  CarIcon,
  TruckIcon,
  BusIcon,
  TrainIcon,
  PlaneIcon,
  ShipIcon,
  BikeIcon,
  WalkIcon,
  RunIcon,
  SwimIcon,
  FitnessIcon,
  HeartIcon,
  PlusIcon,
  MinusIcon,
  XIcon,
  CheckIcon,
  SlashIcon,
  EqualsIcon,
  PercentIcon,
  HashIcon,
  AtSignIcon,
  DollarIcon,
  PoundIcon,
  EuroSignIcon,
  YenSignIcon,
  IndianRupeeIcon,
  RussianRubleIcon,
  WonIcon,
  FrancIcon,
  LiraIcon,
  PesoIcon,
  RealIcon,
  KronaIcon,
  RandIcon,
  RinggitIcon,
  RupeeIcon,
  ShekelIcon,
  TurkishLiraIcon,
  HryvniaIcon,
  ManatIcon,
  TengeIcon,
  SomIcon,
  LariIcon,
  DramIcon,
  RielIcon,
  KipIcon,
  TugrikIcon,
  NgultrumIcon,
  RufiyaaIcon,
  TalaIcon,
  VatuIcon,
  PulaIcon,
  LilangeniIcon,
  MalotiIcon,
  NairaIcon,
  CediIcon,
  DalasIcon,
  LeoneIcon,
  LibraIcon,
  DinarIcon,
  RiyalIcon,
  DirhamIcon,
  RialIcon,
  TomanIcon,
  AfghaniIcon,
  SomoniIcon,
  ManatIcon as ManatIcon2,
  LekIcon,
  DenarIcon,
  KunaIcon,
  ForintIcon,
  ZlotyIcon,
  KorunaIcon,
  LeuIcon,
  LevIcon,
  LitasIcon,
  LatsIcon,
  KroonIcon,
  MarkkaIcon,
  PuntIcon,
  PesetaIcon,
  EscudoIcon,
  FrancoIcon,
  LireIcon,
  GuilderIcon,
  SchillingIcon,
  DrachmaIcon,
  CypriotPoundIcon,
  MalteseIcon,
  SlovakKorunaIcon,
  TolarIcon,
  EstonianKroonIcon,
  LatvianLatsIcon,
  LithuanianLitasIcon
} from "lucide-react";

// Componente da Logo GeneioAI
function GeneioAILogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className="flex items-center space-x-3">
      <div className={`${className} relative`}>
        <img 
          src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/f9cc87b4-637e-4d07-8057-1732c3b596ff.png" 
          alt="GeneioAI Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        GeneioAI
      </span>
    </div>
  );
}

// Componente do Robô 3D Animado (versão simplificada)
function AnimatedRobot() {
  return (
    <div className="relative h-full flex items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative"
      >
        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
          <Bot className="w-16 h-16 text-white" />
        </div>
        
        {/* Efeito de brilho */}
        <motion.div
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-xl"
        />
        
        {/* Partículas flutuantes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, -40, -20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 2) * 20}%`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

// Modal de Confirmação de Saída
function LogoutConfirmModal({ isOpen, onClose, onConfirm }: { 
  isOpen: boolean; 
  onClose: () => void; 
  onConfirm: () => void; 
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-3xl p-8 w-full max-w-md relative shadow-2xl"
      >
        {/* Ícone de Alerta */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
            <LogOut className="w-8 h-8 text-red-600" />
          </div>
        </div>

        {/* Título e Mensagem */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Confirmar Saída
          </h2>
          <p className="text-gray-600">
            Tem certeza de que deseja sair? Você precisará fazer login novamente para acessar suas ferramentas.
          </p>
        </div>

        {/* Botões */}
        <div className="flex space-x-4">
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 py-3 px-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all"
          >
            Cancelar
          </motion.button>
          <motion.button
            onClick={onConfirm}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 py-3 px-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all"
          >
            Sim, Sair
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

// Modal de Criação de Conta
function CreateAccountModal({ isOpen, onClose, onLogin }: { 
  isOpen: boolean; 
  onClose: () => void; 
  onLogin: () => void; 
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    
    setIsCreating(true);
    // Simular criação de conta
    setTimeout(() => {
      setIsCreating(false);
      onClose();
      onLogin();
    }, 2000);
  };

  const handleGoogleLogin = async () => {
    setIsCreating(true);
    // Simular login com Google
    setTimeout(() => {
      setIsCreating(false);
      onClose();
      onLogin();
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-3xl p-8 w-full max-w-md relative shadow-2xl"
      >
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Título */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Criar Conta
          </h2>
          <p className="text-gray-600">
            Junte-se ao GeneioAI
          </p>
        </div>

        {/* Botão Google */}
        <motion.button
          onClick={handleGoogleLogin}
          disabled={isCreating}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mb-6 py-3 px-4 bg-white border-2 border-gray-300 rounded-xl hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          <Chrome className="w-5 h-5 mr-3 text-blue-600" />
          <span className="font-semibold text-gray-700">
            {isCreating ? "Conectando..." : "Continuar com Google"}
          </span>
        </motion.button>

        {/* Divisor */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">ou</span>
          </div>
        </div>

        {/* Formulário de Criação */}
        <form onSubmit={handleCreateAccount} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nome Completo
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Seu nome completo"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="seu@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Senha
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirmar Senha
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={isCreating}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isCreating ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                Criando conta...
              </div>
            ) : (
              "Criar Conta"
            )}
          </motion.button>
        </form>

        {/* Termos */}
        <p className="text-xs text-gray-500 text-center mt-4">
          Ao criar uma conta, você concorda com nossos{" "}
          <button className="text-blue-600 hover:text-blue-700 transition-colors">
            Termos de Uso
          </button>
          {" "}
          e{" "}
          <button className="text-blue-600 hover:text-blue-700 transition-colors">
            Política de Privacidade
          </button>
        </p>
      </motion.div>
    </div>
  );
}

// Componente de Login
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular autenticação
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1500);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
          {/* Lado esquerdo - Robô 3D */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-96 lg:h-[500px] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative h-full rounded-3xl overflow-hidden">
              <AnimatedRobot />
            </div>
          </motion.div>

          {/* Lado direito - Formulário de Login */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
          >
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <GeneioAILogo className="w-16 h-16" />
              </div>
              <p className="text-gray-300">
                Sua plataforma completa de criação com IA
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">
                  Senha
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Entrando...
                  </div>
                ) : (
                  "Entrar"
                )}
              </motion.button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Não tem uma conta?{" "}
                <button 
                  onClick={() => setShowCreateModal(true)}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Criar conta
                </button>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal de Criação de Conta */}
      <AnimatePresence>
        {showCreateModal && (
          <CreateAccountModal
            isOpen={showCreateModal}
            onClose={() => setShowCreateModal(false)}
            onLogin={onLogin}
          />
        )}
      </AnimatePresence>
    </>
  );
}

// Componente do Dashboard Principal
function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState("novidades");
  const [user] = useState({ 
    name: "João Silva", 
    nickname: "joao_dev", 
    email: "joao.silva@email.com",
    memberSince: "Janeiro 2024",
    totalProjects: 47,
    creditsUsed: 12850,
    favoriteTools: ["Imagem/Vídeo", "Chat GPT"],
    lastLogin: "Hoje às 14:30",
    accountType: "Pro"
  });
  const [showSettings, setShowSettings] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [credits, setCredits] = useState(2450);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleLogoutConfirm = () => {
    setShowLogoutModal(false);
    onLogout();
  };

  const tabs = [
    {
      id: "novidades",
      name: "Novidades",
      icon: Sparkles,
      description: "Últimas atualizações e recursos"
    },
    {
      id: "image-video",
      name: "Imagem/Vídeo",
      icon: Image,
      description: "Gere imagens e vídeos incríveis com IA"
    },
    {
      id: "audio-tts",
      name: "Áudio/TTS",
      icon: Mic,
      description: "Transforme texto em áudio com vozes naturais"
    },
    {
      id: "clone-site",
      name: "Clonar Site",
      icon: Copy,
      description: "Clone e edite sites existentes"
    },
    {
      id: "create-site",
      name: "Criar Site/App",
      icon: Code,
      description: "Crie sites e apps do zero"
    },
    {
      id: "chat-gpt",
      name: "Chat GPT",
      icon: MessageCircle,
      description: "Chat inteligente com IA"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <GeneioAILogo />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Barra de Créditos */}
              <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 px-4 py-2 rounded-full border border-yellow-200">
                <Star className="w-4 h-4 text-yellow-600" />
                <span className="text-sm font-semibold text-yellow-800">
                  {credits.toLocaleString()} créditos
                </span>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <User className="w-4 h-4" />
                <span>{user.name}</span>
              </div>
              <button 
                onClick={() => setShowSettings(true)}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Settings className="w-5 h-5" />
              </button>
              <button
                onClick={handleLogoutClick}
                className="p-2 text-gray-400 hover:text-red-600 transition-colors"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navegação por Tabs */}
        <div className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-6 rounded-2xl border-2 transition-all text-left ${
                  activeTab === tab.id
                    ? "border-blue-500 bg-blue-50 shadow-lg"
                    : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
                }`}
              >
                <tab.icon className={`w-8 h-8 mb-3 ${
                  activeTab === tab.id ? "text-blue-600" : "text-gray-600"
                }`} />
                <h3 className={`font-semibold mb-1 ${
                  activeTab === tab.id ? "text-blue-900" : "text-gray-900"
                }`}>
                  {tab.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {tab.description}
                </p>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Conteúdo das Tabs */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden"
          >
            {activeTab === "novidades" && <NovidadesTab />}
            {activeTab === "image-video" && <ImageVideoTab />}
            {activeTab === "audio-tts" && <AudioTTSTab />}
            {activeTab === "clone-site" && <CloneSiteTab />}
            {activeTab === "create-site" && <CreateSiteTab />}
            {activeTab === "chat-gpt" && <ChatGPTTab />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal de Configurações */}
      <AnimatePresence>
        {showSettings && (
          <UserSettingsModal 
            isOpen={showSettings} 
            onClose={() => setShowSettings(false)}
            user={user}
          />
        )}
      </AnimatePresence>

      {/* Modal de Confirmação de Saída */}
      <AnimatePresence>
        {showLogoutModal && (
          <LogoutConfirmModal
            isOpen={showLogoutModal}
            onClose={() => setShowLogoutModal(false)}
            onConfirm={handleLogoutConfirm}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// Nova Tab de Novidades
function NovidadesTab() {
  const novidades = [
    {
      id: 1,
      title: "🚀 Gerador de Vídeo 4K Ultra HD",
      description: "Crie vídeos em resolução 4K com qualidade cinematográfica usando nossa nova IA avançada.",
      date: "15 Dez 2024",
      category: "Imagem/Vídeo",
      isNew: true,
      features: [
        "Resolução 4K nativa (3840x2160)",
        "60 FPS para movimentos suaves",
        "Suporte a HDR para cores vibrantes",
        "Renderização 10x mais rápida",
        "Efeitos visuais profissionais integrados"
      ]
    },
    {
      id: 2,
      title: "🎨 Templates de Site Premium",
      description: "Mais de 200 novos templates profissionais para diferentes nichos e indústrias.",
      date: "12 Dez 2024",
      category: "Criar Site/App",
      isNew: true,
      features: [
        "Templates para E-commerce, SaaS, Portfolio",
        "Design responsivo automático",
        "Otimização SEO integrada",
        "Animações e micro-interações",
        "Compatibilidade com todas as telas"
      ]
    },
    {
      id: 3,
      title: "🤖 Chat GPT-4 Turbo Integrado",
      description: "Agora com GPT-4 Turbo para respostas mais rápidas e precisas em todas as ferramentas.",
      date: "10 Dez 2024",
      category: "Chat GPT",
      isNew: true,
      features: [
        "Respostas 3x mais rápidas",
        "Contexto de até 128k tokens",
        "Suporte a múltiplos idiomas",
        "Análise de código avançada",
        "Integração com todas as ferramentas"
      ]
    },
    {
      id: 4,
      title: "🎤 Clonagem de Voz Ultra Realista",
      description: "Clone qualquer voz com apenas 30 segundos de áudio de referência.",
      date: "8 Dez 2024",
      category: "Áudio/TTS",
      isNew: false,
      features: [
        "Clonagem com 30s de áudio",
        "Preservação de sotaque e entonação",
        "Suporte a 40+ idiomas",
        "Controle de emoções na voz",
        "Qualidade de estúdio profissional"
      ]
    },
    {
      id: 5,
      title: "🌐 Hospedagem Automática",
      description: "Publique seus sites e apps diretamente em domínio próprio com um clique.",
      date: "5 Dez 2024",
      category: "Clonar Site",
      isNew: false,
      features: [
        "Deploy automático em segundos",
        "SSL gratuito incluído",
        "CDN global para velocidade",
        "Backup automático diário",
        "Domínio personalizado gratuito"
      ]
    },
    {
      id: 6,
      title: "📱 App Mobile em Desenvolvimento",
      description: "Em breve: acesse todas as ferramentas direto do seu smartphone.",
      date: "1 Dez 2024",
      category: "Geral",
      isNew: false,
      features: [
        "Interface otimizada para mobile",
        "Sincronização em tempo real",
        "Notificações push inteligentes",
        "Modo offline para edições",
        "Disponível para iOS e Android"
      ]
    }
  ];

  const estatisticas = [
    { label: "Usuários Ativos", valor: "50.000+", icone: Users, cor: "text-blue-600" },
    { label: "Projetos Criados", valor: "2.5M+", icone: FolderOpen, cor: "text-green-600" },
    { label: "Imagens Geradas", valor: "10M+", icone: Image, cor: "text-purple-600" },
    { label: "Horas de Áudio", valor: "100K+", icone: Headphones, cor: "text-orange-600" }
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Novidades e Atualizações</h2>
        <p className="text-gray-600">Descubra os últimos recursos e melhorias da plataforma</p>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {estatisticas.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icone className={`w-8 h-8 ${stat.cor}`} />
              <span className="text-2xl font-bold text-gray-900">{stat.valor}</span>
            </div>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Lista de Novidades */}
      <div className="space-y-6">
        {novidades.map((novidade, index) => (
          <motion.div
            key={novidade.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{novidade.title}</h3>
                  {novidade.isNew && (
                    <span className="px-2 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-xs font-medium rounded-full border border-green-200">
                      NOVO
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-3">{novidade.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {novidade.date}
                  </span>
                  <span className="flex items-center">
                    <Target className="w-4 h-4 mr-1" />
                    {novidade.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Lista de Features */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
              <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-blue-600" />
                Principais Recursos
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {novidade.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-700">
                    <Check className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  Ver Detalhes
                </button>
                <button className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm flex items-center">
                  <Play className="w-4 h-4 mr-1" />
                  Experimentar
                </button>
              </div>
              <div className="flex space-x-1">
                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-purple-600 transition-colors">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Roadmap Futuro */}
      <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <TrendingUp className="w-6 h-6 mr-3 text-purple-600" />
          Próximas Atualizações
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              titulo: "IA de Edição Automática",
              descricao: "Edição inteligente de vídeos com IA",
              prazo: "Q1 2025",
              icone: Wand2
            },
            {
              titulo: "Colaboração em Tempo Real",
              descricao: "Trabalhe em equipe nos projetos",
              prazo: "Q2 2025",
              icone: Users
            },
            {
              titulo: "API Pública",
              descricao: "Integre nossas ferramentas em seus apps",
              prazo: "Q2 2025",
              icone: Code2
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-purple-200">
              <item.icone className="w-8 h-8 text-purple-600 mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">{item.titulo}</h4>
              <p className="text-sm text-gray-600 mb-3">{item.descricao}</p>
              <span className="text-xs text-purple-600 font-medium bg-purple-100 px-2 py-1 rounded-full">
                {item.prazo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Componente da Tab Imagem/Vídeo
function ImageVideoTab() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedItems, setGeneratedItems] = useState<any[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showHistory, setShowHistory] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simular geração
    setTimeout(() => {
      const newItem = {
        id: Date.now(),
        type: Math.random() > 0.5 ? "image" : "video",
        prompt,
        url: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=600&fit=crop",
        createdAt: new Date(),
        variations: [],
        improvements: []
      };
      setGeneratedItems(prev => [newItem, ...prev]);
      setIsGenerating(false);
      setPrompt("");
      
      // Gerar sugestões automáticas
      setAiSuggestions([
        "Adicionar mais contraste e saturação",
        "Criar versão em estilo cartoon",
        "Gerar variação com iluminação dourada",
        "Aplicar filtro vintage"
      ]);
    }, 3000);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Simular upload de referência
      console.log("Arquivo de referência carregado:", file.name);
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Gerador de Imagem/Vídeo</h2>
        <p className="text-gray-600">Crie imagens e vídeos incríveis usando inteligência artificial</p>
      </div>

      {/* Área de Geração */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Descreva o que você quer criar
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ex: Um gato fofo usando óculos de sol em uma praia tropical ao pôr do sol..."
              className="w-full h-32 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>
          
          <div className="flex flex-wrap gap-4">
            <motion.button
              onClick={handleGenerate}
              disabled={!prompt.trim() || isGenerating}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center"
            >
              {isGenerating ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                  Gerando...
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 mr-2" />
                  Gerar
                </>
              )}
            </motion.button>
            
            <label className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors flex items-center cursor-pointer">
              <Upload className="w-4 h-4 mr-2" />
              Upload Referência
              <input
                type="file"
                accept="image/*,video/*,.pdf,.doc,.docx"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
            
            <button 
              onClick={() => setShowHistory(!showHistory)}
              className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors flex items-center"
            >
              <History className="w-4 h-4 mr-2" />
              Histórico
            </button>
          </div>
        </div>
      </div>

      {/* Sugestões de IA */}
      {aiSuggestions.length > 0 && (
        <div className="mb-8 p-6 bg-yellow-50 rounded-2xl border border-yellow-200">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3 flex items-center">
            <Sparkles className="w-5 h-5 mr-2" />
            Sugestões de Melhoria da IA
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {aiSuggestions.map((suggestion, index) => (
              <button
                key={index}
                className="p-3 bg-white rounded-lg text-left hover:bg-yellow-100 transition-colors border border-yellow-200"
              >
                <span className="text-sm text-gray-700">{suggestion}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Galeria de Resultados */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {generatedItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 group"
          >
            <div className="aspect-video bg-gray-100 relative">
              <img
                src={item.url}
                alt={item.prompt}
                className="w-full h-full object-cover"
              />
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white bg-black/50 rounded-full p-3" />
                </div>
              )}
              
              {/* Overlay com ações */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors">
                  <Wand2 className="w-4 h-4" />
                </button>
                <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors">
                  <Edit3 className="w-4 h-4" />
                </button>
                <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.prompt}</p>
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs text-gray-500">
                  {item.createdAt.toLocaleDateString()}
                </span>
                <div className="flex space-x-1">
                  <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-green-600 transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-purple-600 transition-colors">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Botões de ação */}
              <div className="flex space-x-2">
                <button className="flex-1 px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm flex items-center justify-center">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Variações
                </button>
                <button className="flex-1 px-3 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm flex items-center justify-center">
                  <RefreshCw className="w-3 h-3 mr-1" />
                  Continuar
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {generatedItems.length === 0 && (
        <div className="text-center py-12">
          <Image className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">Nenhuma imagem ou vídeo gerado ainda</p>
          <p className="text-sm text-gray-400">Comece digitando uma descrição acima</p>
        </div>
      )}
    </div>
  );
}

// Componente da Tab Áudio/TTS
function AudioTTSTab() {
  const [text, setText] = useState("");
  const [selectedVoice, setSelectedVoice] = useState("pt-BR-female-1");
  const [isGenerating, setIsGenerating] = useState(false);
  const [audioHistory, setAudioHistory] = useState<any[]>([]);
  const [voiceSettings, setVoiceSettings] = useState({
    speed: 1,
    pitch: 0,
    volume: 80
  });
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);

  const voices = [
    { id: "pt-BR-female-1", name: "Ana (Feminina)", language: "Português", accent: "Brasileiro" },
    { id: "pt-BR-male-1", name: "Carlos (Masculino)", language: "Português", accent: "Brasileiro" },
    { id: "en-US-female-1", name: "Sarah (Female)", language: "English", accent: "American" },
    { id: "en-US-male-1", name: "John (Male)", language: "English", accent: "American" },
    { id: "es-ES-female-1", name: "María (Femenino)", language: "Español", accent: "Español" },
    { id: "fr-FR-female-1", name: "Sophie (Féminin)", language: "Français", accent: "Français" }
  ];

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simular geração de áudio
    setTimeout(() => {
      const newAudio = {
        id: Date.now(),
        text: text.substring(0, 50) + "...",
        fullText: text,
        voice: voices.find(v => v.id === selectedVoice)?.name,
        duration: "0:45",
        createdAt: new Date(),
        settings: { ...voiceSettings },
        url: "#" // URL do áudio gerado
      };
      setAudioHistory(prev => [newAudio, ...prev]);
      setIsGenerating(false);
      setText("");
      
      // Gerar sugestões de entonação
      setAiSuggestions([
        "Adicionar pausa dramática no meio",
        "Aumentar ênfase nas palavras-chave",
        "Criar versão mais emotiva",
        "Aplicar tom mais profissional"
      ]);
    }, 2000);
  };

  const handleReferenceUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Arquivo de referência de voz carregado:", file.name);
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Áudio e Text-to-Speech</h2>
        <p className="text-gray-600">Transforme texto em áudio com vozes naturais e realistas</p>
      </div>

      {/* Área de Geração */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 mb-8">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Texto para converter em áudio
              </label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Digite o texto que você quer transformar em áudio..."
                className="w-full h-40 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Selecionar Voz
              </label>
              <select
                value={selectedVoice}
                onChange={(e) => setSelectedVoice(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {voices.map((voice) => (
                  <option key={voice.id} value={voice.id}>
                    {voice.name} - {voice.language} ({voice.accent})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Configurações Avançadas</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Velocidade: {voiceSettings.speed}x
                  </label>
                  <input 
                    type="range" 
                    min="0.5" 
                    max="2" 
                    step="0.1" 
                    value={voiceSettings.speed}
                    onChange={(e) => setVoiceSettings(prev => ({ ...prev, speed: parseFloat(e.target.value) }))}
                    className="w-full" 
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Tom: {voiceSettings.pitch > 0 ? '+' : ''}{voiceSettings.pitch}
                  </label>
                  <input 
                    type="range" 
                    min="-10" 
                    max="10" 
                    step="1" 
                    value={voiceSettings.pitch}
                    onChange={(e) => setVoiceSettings(prev => ({ ...prev, pitch: parseInt(e.target.value) }))}
                    className="w-full" 
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Volume: {voiceSettings.volume}%
                  </label>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    step="5" 
                    value={voiceSettings.volume}
                    onChange={(e) => setVoiceSettings(prev => ({ ...prev, volume: parseInt(e.target.value) }))}
                    className="w-full" 
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Referência de Voz</h3>
              <label className="block w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer hover:border-green-400 transition-colors">
                <Upload className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                <span className="text-sm text-gray-600">Carregar áudio/vídeo de referência</span>
                <input
                  type="file"
                  accept="audio/*,video/*"
                  onChange={handleReferenceUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-6">
          <motion.button
            onClick={handleGenerate}
            disabled={!text.trim() || isGenerating}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center"
          >
            {isGenerating ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                Gerando Áudio...
              </>
            ) : (
              <>
                <Mic className="w-4 h-4 mr-2" />
                Gerar Áudio
              </>
            )}
          </motion.button>
          
          <button className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors flex items-center">
            <Volume2 className="w-4 h-4 mr-2" />
            Testar Voz
          </button>
        </div>
      </div>

      {/* Sugestões de Entonação */}
      {aiSuggestions.length > 0 && (
        <div className="mb-8 p-6 bg-green-50 rounded-2xl border border-green-200">
          <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
            <Headphones className="w-5 h-5 mr-2" />
            Sugestões de Entonação da IA
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {aiSuggestions.map((suggestion, index) => (
              <button
                key={index}
                className="p-3 bg-white rounded-lg text-left hover:bg-green-100 transition-colors border border-green-200"
              >
                <span className="text-sm text-gray-700">{suggestion}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Histórico de Áudios */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">Histórico de Áudios</h3>
        {audioHistory.map((audio) => (
          <motion.div
            key={audio.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-gray-900 mb-1">{audio.text}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <span>Voz: {audio.voice}</span>
                  <span>Duração: {audio.duration}</span>
                  <span>{audio.createdAt.toLocaleDateString()}</span>
                </div>
                
                {/* Controles de áudio */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors">
                      <Play className="w-4 h-4" />
                    </button>
                    <div className="w-32 h-2 bg-gray-200 rounded-full">
                      <div className="w-1/3 h-full bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-500">0:15 / {audio.duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 ml-4">
                <button className="p-3 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200 transition-colors">
                  <Sparkles className="w-5 h-5" />
                </button>
                <button className="p-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors">
                  <Download className="w-5 h-5" />
                </button>
                <button className="p-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="p-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {audioHistory.length === 0 && (
        <div className="text-center py-12">
          <Mic className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">Nenhum áudio gerado ainda</p>
          <p className="text-sm text-gray-400">Comece digitando um texto acima</p>
        </div>
      )}
    </div>
  );
}

// Componente da Tab Clonar Site
function CloneSiteTab() {
  const [url, setUrl] = useState("");
  const [isCloning, setIsCloning] = useState(false);
  const [clonedSites, setClonedSites] = useState<any[]>([]);
  const [selectedSite, setSelectedSite] = useState<any>(null);
  const [showMiniChat, setShowMiniChat] = useState(false);
  const [undoStack, setUndoStack] = useState<any[]>([]);
  const [redoStack, setRedoStack] = useState<any[]>([]);

  const handleClone = async () => {
    setIsCloning(true);
    // Simular clonagem
    setTimeout(() => {
      const newSite = {
        id: Date.now(),
        originalUrl: url,
        title: "Site Clonado",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        status: "ready",
        createdAt: new Date(),
        editHistory: [],
        selectedElements: []
      };
      setClonedSites(prev => [newSite, ...prev]);
      setIsCloning(false);
      setUrl("");
    }, 4000);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      console.log("Arquivos carregados:", Array.from(files).map(f => f.name));
    }
  };

  const handleUndo = () => {
    if (undoStack.length > 0) {
      const lastAction = undoStack[undoStack.length - 1];
      setRedoStack(prev => [...prev, lastAction]);
      setUndoStack(prev => prev.slice(0, -1));
    }
  };

  const handleRedo = () => {
    if (redoStack.length > 0) {
      const nextAction = redoStack[redoStack.length - 1];
      setUndoStack(prev => [...prev, nextAction]);
      setRedoStack(prev => prev.slice(0, -1));
    }
  };

  return (
    <div className="p-8 relative">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Clonar Site</h2>
        <p className="text-gray-600">Clone qualquer site e edite com ferramentas visuais avançadas</p>
      </div>

      {/* Área de Clonagem */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 mb-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              URL do site para clonar
            </label>
            <div className="flex gap-4">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://exemplo.com"
                className="flex-1 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <motion.button
                onClick={handleClone}
                disabled={!url.trim() || isCloning}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl hover:from-orange-700 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center"
              >
                {isCloning ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Clonando...
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Clonar
                  </>
                )}
              </motion.button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <label className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center text-sm cursor-pointer">
              <Upload className="w-4 h-4 mr-2" />
              Upload Arquivos (HTML, CSS, JS, Imagens)
              <input
                type="file"
                multiple
                accept=".html,.css,.js,.png,.jpg,.jpeg,.gif,.svg"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center text-sm">
              <History className="w-4 h-4 mr-2" />
              Histórico
            </button>
          </div>
        </div>
      </div>

      {/* Sites Clonados */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {clonedSites.map((site) => (
          <motion.div
            key={site.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="aspect-video bg-gray-100 relative group">
              <img
                src={site.thumbnail}
                alt={site.title}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay de seleção de elementos */}
              <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                  <span className="text-xs text-gray-700">Clique para selecionar elementos</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{site.title}</h3>
                  <p className="text-sm text-gray-500">{site.originalUrl}</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  {site.status === "ready" ? "Pronto" : "Processando"}
                </span>
              </div>

              {/* Ferramentas de Edição */}
              <div className="flex flex-wrap gap-2 mb-4">
                <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm flex items-center">
                  <Code className="w-3 h-3 mr-1" />
                  Editar
                </button>
                <button 
                  onClick={handleUndo}
                  disabled={undoStack.length === 0}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm flex items-center disabled:opacity-50"
                >
                  <RotateCcw className="w-3 h-3 mr-1" />
                  Undo
                </button>
                <button 
                  onClick={handleRedo}
                  disabled={redoStack.length === 0}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm flex items-center disabled:opacity-50"
                >
                  <Redo className="w-3 h-3 mr-1" />
                  Redo
                </button>
                <button 
                  onClick={() => setShowMiniChat(!showMiniChat)}
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors text-sm flex items-center"
                >
                  <MessageSquare className="w-3 h-3 mr-1" />
                  Chat IA
                </button>
              </div>

              {/* Sugestões Automáticas */}
              <div className="mb-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <h4 className="text-sm font-medium text-yellow-800 mb-2 flex items-center">
                  <Sparkles className="w-4 h-4 mr-1" />
                  Sugestões da IA
                </h4>
                <div className="space-y-1">
                  <button className="block w-full text-left text-xs text-yellow-700 hover:text-yellow-900 transition-colors">
                    • Melhorar SEO do título e meta descrições
                  </button>
                  <button className="block w-full text-left text-xs text-yellow-700 hover:text-yellow-900 transition-colors">
                    • Otimizar layout para mobile
                  </button>
                  <button className="block w-full text-left text-xs text-yellow-700 hover:text-yellow-900 transition-colors">
                    • Atualizar copywriting do header
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">
                  {site.createdAt.toLocaleDateString()}
                </span>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                    <Globe className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-purple-600 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mini Chat Lateral */}
      <AnimatePresence>
        {showMiniChat && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed right-4 top-1/2 transform -translate-y-1/2 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50"
          >
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="font-semibold text-gray-900">Chat com IA</h3>
              <button 
                onClick={() => setShowMiniChat(false)}
                className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex-1 p-4 h-64 overflow-y-auto">
              <div className="space-y-3">
                <div className="bg-gray-100 rounded-lg p-3">
                  <p className="text-sm text-gray-700">Como posso ajudar com a edição do seu site?</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Digite sua mensagem..."
                  className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {clonedSites.length === 0 && (
        <div className="text-center py-12">
          <Copy className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">Nenhum site clonado ainda</p>
          <p className="text-sm text-gray-400">Cole uma URL acima para começar</p>
        </div>
      )}
    </div>
  );
}

// Componente da Tab Criar Site/App
function CreateSiteTab() {
  const [projectName, setProjectName] = useState("");
  const [projectType, setProjectType] = useState("website");
  const [isCreating, setIsCreating] = useState(false);
  const [projects, setProjects] = useState<any[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState("modern");
  const [showMiniChat, setShowMiniChat] = useState(false);
  const [undoStack, setUndoStack] = useState<any[]>([]);
  const [redoStack, setRedoStack] = useState<any[]>([]);

  const templates = [
    { id: "modern", name: "Moderno", preview: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop" },
    { id: "classic", name: "Clássico", preview: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop" },
    { id: "minimal", name: "Minimalista", preview: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop" },
    { id: "creative", name: "Criativo", preview: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop" }
  ];

  const handleCreate = async () => {
    setIsCreating(true);
    // Simular criação
    setTimeout(() => {
      const newProject = {
        id: Date.now(),
        name: projectName,
        type: projectType,
        template: selectedTemplate,
        thumbnail: templates.find(t => t.id === selectedTemplate)?.preview,
        status: "ready",
        createdAt: new Date(),
        editHistory: []
      };
      setProjects(prev => [newProject, ...prev]);
      setIsCreating(false);
      setProjectName("");
    }, 3000);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      console.log("Arquivos base carregados:", Array.from(files).map(f => f.name));
    }
  };

  return (
    <div className="p-8 relative">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Criar Site/App</h2>
        <p className="text-gray-600">Crie sites e aplicativos do zero com ferramentas visuais intuitivas</p>
      </div>

      {/* Área de Criação */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 mb-8">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome do Projeto
              </label>
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Meu Site Incrível"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Projeto
              </label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="website">Site Institucional</option>
                <option value="ecommerce">E-commerce</option>
                <option value="blog">Blog</option>
                <option value="portfolio">Portfólio</option>
                <option value="landing">Landing Page</option>
                <option value="app">Aplicativo Web</option>
                <option value="dashboard">Dashboard</option>
                <option value="saas">SaaS Platform</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload de Arquivos Base
              </label>
              <label className="block w-full p-4 border-2 border-dashed border-gray-300 rounded-xl text-center cursor-pointer hover:border-purple-400 transition-colors">
                <Upload className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                <span className="text-sm text-gray-600">Arraste arquivos ou clique para selecionar</span>
                <input
                  type="file"
                  multiple
                  accept="image/*,video/*,.pdf,.doc,.docx,.psd,.fig,.sketch"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Selecionar Template
              </label>
              <div className="grid grid-cols-2 gap-3">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                      selectedTemplate === template.id
                        ? "border-purple-500 ring-2 ring-purple-200"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={template.preview}
                      alt={template.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">{template.name}</span>
                    </div>
                    {selectedTemplate === template.id && (
                      <div className="absolute top-2 right-2">
                        <Check className="w-4 h-4 text-white bg-purple-500 rounded-full p-0.5" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Sugestões Automáticas da IA</h3>
              <div className="space-y-2">
                <button className="block w-full text-left p-2 text-sm text-gray-700 hover:bg-purple-50 rounded-lg transition-colors">
                  🎨 Layout otimizado para conversão
                </button>
                <button className="block w-full text-left p-2 text-sm text-gray-700 hover:bg-purple-50 rounded-lg transition-colors">
                  📱 Design responsivo automático
                </button>
                <button className="block w-full text-left p-2 text-sm text-gray-700 hover:bg-purple-50 rounded-lg transition-colors">
                  🔍 SEO otimizado desde o início
                </button>
                <button className="block w-full text-left p-2 text-sm text-gray-700 hover:bg-purple-50 rounded-lg transition-colors">
                  ✍️ Copywriting persuasivo gerado por IA
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-6">
          <motion.button
            onClick={handleCreate}
            disabled={!projectName.trim() || isCreating}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center"
          >
            {isCreating ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                Criando...
              </>
            ) : (
              <>
                <Code className="w-4 h-4 mr-2" />
                Criar Projeto
              </>
            )}
          </motion.button>
          
          <button className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors flex items-center">
            <FileText className="w-4 h-4 mr-2" />
            Importar Template
          </button>
        </div>
      </div>

      {/* Projetos Criados */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="aspect-video bg-gray-100 relative group">
              <img
                src={project.thumbnail}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay de edição */}
              <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                  <span className="text-xs text-gray-700">Clique para editar elementos</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{project.name}</h3>
                  <p className="text-sm text-gray-500 capitalize">{project.type}</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  {project.status === "ready" ? "Pronto" : "Processando"}
                </span>
              </div>

              {/* Ferramentas de Edição */}
              <div className="flex flex-wrap gap-2 mb-4">
                <button className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors text-sm flex items-center">
                  <Code className="w-3 h-3 mr-1" />
                  Editar
                </button>
                <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm flex items-center">
                  <RotateCcw className="w-3 h-3 mr-1" />
                  Undo
                </button>
                <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm flex items-center">
                  <Redo className="w-3 h-3 mr-1" />
                  Redo
                </button>
                <button 
                  onClick={() => setShowMiniChat(!showMiniChat)}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm flex items-center"
                >
                  <MessageSquare className="w-3 h-3 mr-1" />
                  Chat IA
                </button>
                <button className="px-3 py-1 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm flex items-center">
                  <Eye className="w-3 h-3 mr-1" />
                  Preview
                </button>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">
                  {project.createdAt.toLocaleDateString()}
                </span>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                    <Globe className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-purple-600 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mini Chat Lateral */}
      <AnimatePresence>
        {showMiniChat && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed right-4 top-1/2 transform -translate-y-1/2 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50"
          >
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="font-semibold text-gray-900">Chat com IA</h3>
              <button 
                onClick={() => setShowMiniChat(false)}
                className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex-1 p-4 h-64 overflow-y-auto">
              <div className="space-y-3">
                <div className="bg-gray-100 rounded-lg p-3">
                  <p className="text-sm text-gray-700">Como posso ajudar com seu projeto?</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Digite sua mensagem..."
                  className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                />
                <button className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {projects.length === 0 && (
        <div className="text-center py-12">
          <Code className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">Nenhum projeto criado ainda</p>
          <p className="text-sm text-gray-400">Comece criando seu primeiro projeto</p>
        </div>
      )}
    </div>
  );
}

// Componente da Tab Chat GPT
function ChatGPTTab() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([
    {
      id: 1,
      type: "assistant",
      content: "Olá! Sou seu assistente de IA. Como posso ajudá-lo hoje?",
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [conversations, setConversations] = useState<any[]>([
    { id: 1, name: "Conversa Atual", messages: 1, lastActivity: new Date() }
  ]);
  const [activeConversation, setActiveConversation] = useState(1);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage("");
    setIsTyping(true);

    // Simular resposta da IA
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        type: "assistant",
        content: "Esta é uma resposta simulada da IA. Em uma implementação real, aqui seria integrada a API do OpenAI para fornecer respostas inteligentes e contextuais baseadas nos arquivos e contexto fornecidos.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        const fileMessage = {
          id: Date.now() + Math.random(),
          type: "user",
          content: `📎 Arquivo enviado: ${file.name}`,
          timestamp: new Date(),
          file: file
        };
        setMessages(prev => [...prev, fileMessage]);
      });
    }
  };

  const handleNewConversation = () => {
    const newConv = {
      id: Date.now(),
      name: `Nova Conversa ${conversations.length + 1}`,
      messages: 0,
      lastActivity: new Date()
    };
    setConversations(prev => [...prev, newConv]);
    setActiveConversation(newConv.id);
    setMessages([{
      id: 1,
      type: "assistant",
      content: "Olá! Como posso ajudá-lo nesta nova conversa?",
      timestamp: new Date()
    }]);
  };

  const handleExportChat = () => {
    const chatText = messages.map(msg => 
      `[${msg.timestamp.toLocaleString()}] ${msg.type === 'user' ? 'Você' : 'IA'}: ${msg.content}`
    ).join('\n');
    
    const blob = new Blob([chatText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chat-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-8 h-[700px] flex">
      {/* Sidebar de Conversas */}
      <div className="w-64 bg-gray-50 rounded-2xl p-4 mr-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-gray-900">Conversas</h3>
          <button 
            onClick={handleNewConversation}
            className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
        <div className="space-y-2">
          {conversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => setActiveConversation(conv.id)}
              className={`w-full p-3 rounded-lg text-left transition-colors ${
                activeConversation === conv.id
                  ? "bg-blue-100 text-blue-900"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              <div className="font-medium text-sm">{conv.name}</div>
              <div className="text-xs text-gray-500">
                {conv.messages} mensagens
              </div>
            </button>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <button 
            onClick={handleExportChat}
            className="w-full p-2 text-sm text-gray-600 hover:text-gray-800 transition-colors flex items-center"
          >
            <Download className="w-4 h-4 mr-2" />
            Exportar Histórico
          </button>
        </div>
      </div>

      {/* Área Principal do Chat */}
      <div className="flex-1 flex flex-col">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Chat GPT</h2>
          <p className="text-gray-600">Converse com IA avançada, envie arquivos, imagens e vídeos</p>
        </div>

        {/* Área de Chat */}
        <div className="flex-1 bg-gray-50 rounded-2xl p-6 mb-6 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-[70%] p-4 rounded-2xl ${
                  msg.type === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-900 shadow-sm border border-gray-200"
                }`}>
                  <p className="text-sm">{msg.content}</p>
                  <span className={`text-xs mt-2 block ${
                    msg.type === "user" ? "text-blue-100" : "text-gray-500"
                  }`}>
                    {msg.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Área de Input */}
        <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm">
          <div className="flex items-end space-x-4">
            <div className="flex-1">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder="Digite sua mensagem..."
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows={3}
              />
            </div>
            
            <div className="flex flex-col space-y-2">
              <label className="p-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors cursor-pointer">
                <Paperclip className="w-5 h-5" />
                <input
                  type="file"
                  multiple
                  accept="image/*,video/*,.pdf,.doc,.docx,.txt,.csv,.json"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
              <motion.button
                onClick={handleSendMessage}
                disabled={!message.trim() || isTyping}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Send className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-3 text-sm text-gray-500">
            <div className="flex space-x-4">
              <button 
                onClick={handleNewConversation}
                className="hover:text-gray-700 transition-colors"
              >
                Nova Conversa
              </button>
              <button className="hover:text-gray-700 transition-colors">
                Histórico Completo
              </button>
              <button 
                onClick={handleExportChat}
                className="hover:text-gray-700 transition-colors"
              >
                Download Histórico
              </button>
            </div>
            <span>Pressione Enter para enviar • Shift+Enter para nova linha</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Modal de Configurações do Usuário
function UserSettingsModal({ isOpen, onClose, user }: { 
  isOpen: boolean; 
  onClose: () => void;
  user: any;
}) {
  const [activeSection, setActiveSection] = useState("profile");
  const [userProfile, setUserProfile] = useState({
    name: user.name,
    nickname: user.nickname,
    email: user.email,
    avatar: ""
  });

  const sections = [
    { id: "profile", name: "Perfil", icon: User },
    { id: "subscription", name: "Assinatura", icon: CreditCard },
    { id: "login", name: "Login & Segurança", icon: Shield },
    { id: "projects", name: "Projetos", icon: FolderOpen },
    { id: "preferences", name: "Preferências", icon: Settings },
    { id: "security", name: "Segurança", icon: Lock },
    { id: "extras", name: "Extras", icon: Star }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-3xl w-full max-w-4xl h-[600px] relative shadow-2xl flex overflow-hidden"
      >
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Sidebar */}
        <div className="w-64 bg-gray-50 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Configurações</h2>
          
          {/* Informações do Usuário no Sidebar */}
          <div className="mb-6 p-4 bg-white rounded-xl border border-gray-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{user.name}</h3>
                <p className="text-sm text-gray-500">@{user.nickname}</p>
              </div>
            </div>
            <div className="space-y-1 text-xs text-gray-600">
              <p>Membro desde: {user.memberSince}</p>
              <p>Projetos: {user.totalProjects}</p>
              <p>Último acesso: {user.lastLogin}</p>
              <p>Conta: {user.accountType}</p>
            </div>
          </div>
          
          <nav className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors text-left ${
                  activeSection === section.id
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <section.icon className="w-5 h-5" />
                <span className="font-medium">{section.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Conteúdo */}
        <div className="flex-1 p-6 overflow-y-auto">
          {activeSection === "profile" && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Perfil do Usuário</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Alterar Foto
                    </button>
                    <p className="text-sm text-gray-500 mt-1">JPG, PNG ou GIF. Máximo 5MB.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                    <input
                      type="text"
                      value={userProfile.name}
                      onChange={(e) => setUserProfile(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome de Usuário</label>
                    <input
                      type="text"
                      value={userProfile.nickname}
                      onChange={(e) => setUserProfile(prev => ({ ...prev, nickname: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={userProfile.email}
                    onChange={(e) => setUserProfile(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Informações Adicionais */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Estatísticas da Conta</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Total de Projetos</span>
                        <FolderOpen className="w-4 h-4 text-blue-600" />
                      </div>
                      <p className="text-2xl font-bold text-gray-900">{user.totalProjects}</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Créditos Usados</span>
                        <Star className="w-4 h-4 text-yellow-600" />
                      </div>
                      <p className="text-2xl font-bold text-gray-900">{user.creditsUsed.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="text-sm text-gray-600">Ferramentas Favoritas:</span>
                    <div className="flex space-x-2 mt-2">
                      {user.favoriteTools.map((tool: string, index: number) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Salvar Alterações
                </button>
              </div>
            </div>
          )}

          {activeSection === "subscription" && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Assinatura e Pagamento</h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">Plano Pro</h4>
                      <p className="text-gray-600">R$ 197/mês</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Ativo</span>
                  </div>
                  <p className="text-gray-700 mb-4">Acesso completo a todas as ferramentas de IA</p>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    Upgrade para Premium (R$ 397)
                  </button>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Histórico de Pagamentos</h4>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">Plano Pro</p>
                          <p className="text-sm text-gray-500">01/12/2024</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">R$ 197,00</p>
                          <p className="text-sm text-green-600">Pago</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Método de Pagamento</h4>
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <CreditCard className="w-8 h-8 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">•••• •••• •••• 1234</p>
                      <p className="text-sm text-gray-500">Expira em 12/26</p>
                    </div>
                    <button className="ml-auto px-3 py-1 text-blue-600 hover:text-blue-700 transition-colors">
                      Alterar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "preferences" && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Preferências</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Tema</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {["Claro", "Escuro", "Automático"].map((theme) => (
                      <button
                        key={theme}
                        className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-colors"
                      >
                        <div className="w-full h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded mb-2"></div>
                        <span className="text-sm font-medium text-gray-700">{theme}</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Idioma</h4>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Português (Brasil)</option>
                    <option>English (US)</option>
                    <option>Español</option>
                    <option>Français</option>
                  </select>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Notificações</h4>
                  <div className="space-y-3">
                    {[
                      "Notificações por email",
                      "Notificações push",
                      "Atualizações de produto",
                      "Dicas e tutoriais"
                    ].map((notification) => (
                      <label key={notification} className="flex items-center space-x-3">
                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" defaultChecked />
                        <span className="text-gray-700">{notification}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "extras" && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Extras</h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-yellow-600" />
                    Conquistas Desbloqueadas
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: "Primeiro Projeto", desc: "Criou seu primeiro projeto", icon: "🎯" },
                      { name: "Gerador Expert", desc: "Gerou 100 imagens", icon: "🎨" },
                      { name: "Voz Perfeita", desc: "Criou 50 áudios", icon: "🎤" },
                      { name: "Web Master", desc: "Clonou 10 sites", icon: "🌐" }
                    ].map((achievement) => (
                      <div key={achievement.name} className="bg-white rounded-lg p-4 border border-yellow-200">
                        <div className="text-2xl mb-2">{achievement.icon}</div>
                        <h5 className="font-medium text-gray-900">{achievement.name}</h5>
                        <p className="text-sm text-gray-600">{achievement.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Star className="w-5 h-5 mr-2 text-purple-600" />
                    Pontos de Fidelidade
                  </h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold text-purple-600">2,450</p>
                      <p className="text-gray-600">pontos disponíveis</p>
                    </div>
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      Resgatar Pontos
                    </button>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Bell className="w-5 h-5 mr-2 text-blue-600" />
                    Novidades e Recursos
                  </h4>
                  <div className="space-y-3">
                    {[
                      "🚀 Novo gerador de vídeo 4K disponível",
                      "🎨 Templates de site atualizados",
                      "🤖 Melhorias no Chat GPT",
                      "📱 App mobile em desenvolvimento"
                    ].map((news, index) => (
                      <div key={index} className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-gray-700">{news}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

// Componente Principal
export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="font-geist-sans">
      {!isLoggedIn ? (
        <LoginScreen onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <Dashboard onLogout={() => setIsLoggedIn(false)} />
      )}
    </div>
  );
}
