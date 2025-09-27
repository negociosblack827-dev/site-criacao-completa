# 🤖 AI Creative Studio

**Plataforma completa de criação com IA** - Geração de imagens/vídeos, áudio/TTS, clonagem de sites, criação de apps e chat inteligente.

## 🚀 Funcionalidades Principais

### 🎨 **Imagem/Vídeo**
- **Geração com IA**: Crie imagens e vídeos usando prompts de texto
- **Sugestões Automáticas**: IA sugere melhorias e variações após geração
- **Upload de Referência**: Carregue fotos, vídeos ou documentos como base
- **Histórico Detalhado**: Acesse, continue edições e faça download de projetos anteriores
- **Variações Inteligentes**: Gere múltiplas versões do mesmo conceito

### 🎤 **Áudio / Text-to-Speech**
- **Vozes Naturais**: Múltiplas vozes em português, inglês, espanhol e francês
- **Configurações Avançadas**: Controle velocidade, tom e volume
- **Sugestões de Entonação**: IA sugere melhorias na expressividade
- **Referência de Voz**: Upload de áudio/vídeo para criar tom personalizado
- **Exportação Flexível**: Baixe em múltiplos formatos para outros projetos
- **Histórico Completo**: Acesse e reedite gravações anteriores

### 🌐 **Clonar Site**
- **Clonagem por URL**: Clone qualquer site inserindo a URL
- **Upload de Arquivos**: Carregue HTML, CSS, JS e imagens diretamente
- **Seleção de Elementos**: Edite partes específicas do site clonado
- **Undo/Redo Avançado**: Navegue entre edições com controle total
- **Mini Chat IA**: Converse com IA durante a edição em tempo real
- **Sugestões Automáticas**: IA sugere melhorias de layout, SEO e copywriting
- **Hospedagem Direta**: Publique em domínio próprio com um clique
- **Histórico de Versões**: Restaure qualquer versão anterior do projeto

### 💻 **Criar Site/App**
- **Templates Inteligentes**: Escolha entre designs modernos, clássicos e criativos
- **Upload de Base**: Use imagens, vídeos ou documentos como inspiração
- **Edição Visual**: Selecione e edite elementos específicos do projeto
- **Undo/Redo Completo**: Controle total sobre todas as modificações
- **Chat IA Integrado**: Assistente em tempo real durante o desenvolvimento
- **Sugestões Automáticas**: IA recomenda templates, layouts e otimizações SEO
- **Copywriting IA**: Geração automática de textos persuasivos
- **Hospedagem Própria**: Publique diretamente em seu domínio
- **Versionamento**: Histórico completo com restauração de versões

### 💬 **Chat GPT**
- **IA Avançada**: Conversas inteligentes e contextuais
- **Upload Multimídia**: Envie imagens, vídeos e arquivos para contextualizar
- **Múltiplas Conversas**: Gerencie várias conversas simultaneamente
- **Histórico Completo**: Acesse e continue conversas anteriores
- **Export de Dados**: Baixe histórico de conversas em formato texto
- **Integração Total**: IA entende contexto de outros projetos da plataforma

### ⚙️ **Configurações de Usuário**

#### 👤 **Perfil**
- Nome/Apelido editável
- Email de contato
- Alteração de senha
- Upload de foto de perfil/avatar 3D

#### 💳 **Assinatura e Pagamento**
- Visualização do plano atual (R$197 ou R$397)
- Botão de upgrade entre planos
- Histórico completo de pagamentos
- Alteração de método de pagamento
- Status detalhado da assinatura

#### 🔐 **Login e Segurança**
- Alteração de email de login
- Redefinição de senha
- Autenticação de dois fatores (2FA)
- Histórico de logins
- Configurações de compartilhamento

#### 📁 **Projetos**
- Lista de projetos recentes
- Duplicar, renomear e deletar projetos
- Continuar edição de onde parou
- Download rápido de arquivos

#### 🎨 **Preferências**
- Tema claro/escuro/personalizado
- Seleção de idioma
- Controle de notificações
- Salvar presets de projeto (estilos, templates)

#### 🛡️ **Segurança**
- Histórico de logins detalhado
- Configuração de compartilhamento de projetos
- Exclusão de conta com confirmação
- Gerenciamento de dados pessoais

#### ⭐ **Extras**
- Sistema de conquistas desbloqueáveis
- Pontos de fidelidade/créditos
- Notificações sobre novidades
- Alertas de novos recursos IA

## 🌟 Funcionalidades Globais

### 🔧 **Ferramentas Avançadas**
- **Multi-select**: Seleção e edição em lote
- **Live Preview**: Visualização em tempo real
- **Drag-and-Drop**: Interface intuitiva em todos os editores
- **Assets Stock**: Integração com banco de imagens, vídeos e ícones
- **Comandos de Voz**: Controle por voz em todas as ferramentas
- **Exportação Universal**: Múltiplas plataformas e formatos

### 🤝 **Colaboração**
- **Edição Colaborativa**: Trabalhe em equipe em tempo real
- **Sistema de Comentários**: Feedback direto nos projetos
- **Compartilhamento Inteligente**: Links seguros para colaboradores

### 🎮 **Gamificação**
- **Sistema de Pontos**: Ganhe pontos usando as ferramentas
- **Conquistas**: Desbloqueie medalhas por marcos alcançados
- **Ranking**: Compare progresso com outros usuários

### 💾 **Backup e Segurança**
- **Salvamento Automático**: Nunca perca seu trabalho
- **Compressão Inteligente**: Otimização automática de mídias
- **Backups Automáticos**: Proteção total dos seus dados
- **Moderação IA**: Verificação automática de conteúdo gerado

## 🛠️ Instalação e Configuração

### 📋 **Pré-requisitos**
- Node.js 18.0.0 ou superior
- npm 8.0.0 ou superior
- Conta no Supabase (opcional, para banco de dados)
- Chaves de API externas (OpenAI, ElevenLabs, etc.)

### 🚀 **Instalação**

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/ai-creative-studio.git
cd ai-creative-studio
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env.local
```

4. **Execute o projeto localmente**
```bash
npm run dev
```

5. **Acesse no navegador**
```
http://localhost:3000
```

### 🔑 **Configuração de APIs**

#### **OpenAI (Chat GPT, Geração de Imagens)**
```env
OPENAI_API_KEY=sk-...
OPENAI_ORG_ID=org-...
```

#### **ElevenLabs (Text-to-Speech)**
```env
ELEVENLABS_API_KEY=...
ELEVENLABS_VOICE_ID=...
```

#### **Supabase (Banco de Dados)**
```env
NEXT_PUBLIC_SUPABASE_URL=https://...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
```

#### **Vercel (Deploy)**
```env
VERCEL_TOKEN=...
```

## 📚 Como Usar

### 🎨 **Geração de Imagem/Vídeo**

1. **Acesse a aba "Imagem/Vídeo"**
2. **Digite sua descrição** no campo de texto
3. **Clique em "Gerar"** e aguarde o processamento
4. **Visualize o resultado** na galeria
5. **Use as sugestões da IA** para melhorar ou criar variações
6. **Faça download** ou continue editando

### 🎤 **Criação de Áudio**

1. **Vá para "Áudio/TTS"**
2. **Digite o texto** que quer converter
3. **Escolha a voz** e ajuste configurações
4. **Opcionalmente carregue** uma referência de voz
5. **Clique em "Gerar Áudio"**
6. **Ouça o resultado** e faça ajustes se necessário
7. **Exporte** para usar em outros projetos

### 🌐 **Clonagem de Sites**

1. **Entre na aba "Clonar Site"**
2. **Cole a URL** do site que quer clonar
3. **Ou faça upload** de arquivos HTML/CSS
4. **Aguarde a clonagem** ser processada
5. **Use o editor visual** para modificar elementos
6. **Converse com a IA** no mini chat para ajuda
7. **Use Undo/Redo** para navegar entre edições
8. **Publique** em seu domínio quando pronto

### 💻 **Criação de Sites/Apps**

1. **Acesse "Criar Site/App"**
2. **Escolha o tipo** de projeto (site, e-commerce, blog, etc.)
3. **Selecione um template** ou carregue arquivos base
4. **Use o editor visual** para personalizar
5. **Aproveite as sugestões da IA** para otimizações
6. **Teste o preview** em tempo real
7. **Publique** quando satisfeito

### 💬 **Chat com IA**

1. **Vá para "Chat GPT"**
2. **Digite sua mensagem** ou pergunta
3. **Anexe arquivos** se necessário para contexto
4. **Converse naturalmente** com a IA
5. **Crie novas conversas** para tópicos diferentes
6. **Exporte o histórico** quando necessário

## 🔧 Desenvolvimento

### 📁 **Estrutura do Projeto**
```
src/
├── app/                 # Páginas Next.js 15
│   ├── page.tsx        # Página principal
│   ├── layout.tsx      # Layout base
│   └── globals.css     # Estilos globais
├── components/         # Componentes React
│   ├── ui/            # Componentes de interface
│   └── ...
├── lib/               # Utilitários e configurações
│   ├── utils.ts       # Funções utilitárias
│   ├── types.ts       # Definições de tipos
│   └── constants.ts   # Constantes da aplicação
└── hooks/             # Hooks customizados
```

### 🎨 **Tecnologias Utilizadas**
- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca de interface
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Framework CSS utilitário
- **Framer Motion** - Animações fluidas
- **Lucide React** - Ícones modernos
- **Supabase** - Banco de dados e autenticação
- **OpenAI API** - Inteligência artificial
- **ElevenLabs** - Text-to-speech

### 🚀 **Scripts Disponíveis**

```bash
# Desenvolvimento
npm run dev              # Inicia servidor de desenvolvimento
npm run build           # Build de produção
npm run start           # Inicia servidor de produção
npm run lint            # Verifica código com ESLint
npm run type-check      # Verifica tipos TypeScript

# Banco de Dados
npm run db:generate     # Gera tipos do Supabase
npm run db:reset        # Reseta banco de dados
npm run db:migrate      # Executa migrações

# Deploy
npm run deploy:vercel   # Deploy na Vercel
npm run deploy:netlify  # Deploy na Netlify
```

## 🌐 Deploy

### **Vercel (Recomendado)**
1. Conecte seu repositório GitHub
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### **Netlify**
1. Conecte seu repositório
2. Configure build command: `npm run build`
3. Configure publish directory: `.next`

### **Docker**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔒 Segurança

### **Variáveis de Ambiente**
- Nunca commite chaves de API
- Use `.env.local` para desenvolvimento
- Configure variáveis no painel de deploy

### **Autenticação**
- Supabase Auth para login seguro
- JWT tokens para sessões
- 2FA opcional para contas premium

### **Dados do Usuário**
- Criptografia end-to-end
- LGPD/GDPR compliance
- Backup automático seguro

## 🐛 Troubleshooting

### **Problemas Comuns**

#### **Erro de Build**
```bash
# Limpe cache e reinstale
rm -rf .next node_modules
npm install
npm run build
```

#### **Erro de API**
- Verifique se as chaves estão corretas
- Confirme se as APIs estão ativas
- Verifique limites de uso

#### **Erro de Banco**
```bash
# Resete o banco Supabase
npm run db:reset
npm run db:migrate
```

## 📞 Suporte

### **Documentação**
- [Next.js Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [OpenAI API](https://platform.openai.com/docs)

### **Comunidade**
- GitHub Issues para bugs
- Discord para discussões
- Email: contato@aicreativestudio.com

## 📄 Licença

MIT License - veja [LICENSE](LICENSE) para detalhes.

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

---

**Desenvolvido com ❤️ pela equipe AI Creative Studio**

🚀 **Transforme suas ideias em realidade com o poder da IA!**