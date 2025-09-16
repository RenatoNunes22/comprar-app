# 🛒 Comprar App

Um aplicativo de lista de compras moderno e intuitivo desenvolvido com **React Native** e **Expo Go**. Organize suas compras de forma eficiente com uma interface elegante e funcionalidades completas.

## 📱 Sobre o Projeto

O **Comprar App** é uma solução completa para gerenciamento de listas de compras, permitindo que os usuários:

- ✅ Adicionem itens à lista de compras
- 🔄 Marquem itens como concluídos ou pendentes
- 🗂️ Filtrem itens por status (Pendentes/Concluídos)
- 🗑️ Removam itens individuais ou limpe toda a lista
- 💾 Armazenem dados localmente com persistência

## 🚀 Funcionalidades

### ✨ Principais Recursos

- **Interface Intuitiva**: Design moderno com componentes reutilizáveis
- **Filtros Dinâmicos**: Visualize apenas itens pendentes ou concluídos
- **Estado Vazio Atraente**: Mensagens contextuais quando não há itens
- **Persistência Local**: Dados salvos automaticamente no dispositivo
- **Animações Suaves**: Transições elegantes entre estados
- **Responsivo**: Adaptado para diferentes tamanhos de tela

### 🎯 Funcionalidades Detalhadas

1. **Adicionar Itens**
   - Campo de entrada com validação
   - Botão de adicionar estilizado
   - Geração automática de ID único

2. **Gerenciar Status**
   - Toggle entre pendente/concluído
   - Ícones visuais para cada status
   - Contadores dinâmicos

3. **Filtros Inteligentes**
   - Filtro "Todos" - exibe todos os itens
   - Filtro "Pendentes" - apenas itens não concluídos
   - Filtro "Concluídos" - apenas itens finalizados

4. **Ações de Lista**
   - Remover itens individuais
   - Limpar toda a lista
   - Confirmações visuais

## 🛠️ Stack Tecnológica

### **Frontend**
- **React Native** `0.81.4` - Framework principal
- **Expo** `~54.0.7` - Plataforma de desenvolvimento
- **TypeScript** `~5.9.2` - Tipagem estática
- **React** `19.1.0` - Biblioteca base

### **Componentes e UI**
- **Lucide React Native** `^0.544.0` - Ícones modernos
- **React Native SVG** `15.12.1` - Suporte a SVG
- **Expo Linear Gradient** `^15.0.7` - Gradientes
- **React Native Reanimated** `^4.1.0` - Animações performáticas

### **Armazenamento**
- **AsyncStorage** `2.2.0` - Persistência local de dados

## 📁 Arquitetura do Projeto

```
src/
├── app/
│   └── Home/                 # Tela principal
│       ├── index.tsx         # Componente da Home
│       └── style.ts          # Estilos da Home
├── components/               # Componentes reutilizáveis
│   ├── Button/              # Botão customizado
│   ├── Filter/              # Filtros de status
│   ├── Input/               # Campo de entrada
│   ├── Item/                # Item da lista
│   └── StatusIcon/          # Ícone de status
├── storage/
│   └── itemsStorage.ts      # Gerenciamento de dados
└── types/
    └── FilterStatus.ts      # Tipos TypeScript
```

## 🔧 Instalação e Configuração

### **Pré-requisitos**

- Node.js (versão 16 ou superior)
- npm ou yarn
- Expo CLI
- Expo Go app (para teste em dispositivo físico)

### **Passo a Passo**

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd comprar-app
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm start
# ou
expo start
```

4. **Execute no dispositivo**
   - **Dispositivo físico**: Escaneie o QR code com o Expo Go
   - **Emulador Android**: Pressione `a` no terminal
   - **Simulador iOS**: Pressione `i` no terminal
   - **Web**: Pressione `w` no terminal

## 📱 Como Usar

### **Adicionando Itens**
1. Digite o nome do item no campo de entrada
2. Toque no botão "+" para adicionar à lista
3. O item aparecerá como "Pendente" por padrão

### **Gerenciando Status**
1. Toque no ícone de status ao lado do item
2. O item alternará entre "Pendente" ⏳ e "Concluído" ✅
3. Use os filtros para visualizar categorias específicas

### **Filtros Disponíveis**
- **Todos**: Exibe todos os itens da lista
- **Pendentes**: Mostra apenas itens não concluídos
- **Concluídos**: Exibe apenas itens finalizados

### **Removendo Itens**
- Toque no ícone de lixeira para remover um item específico
- Use "Limpar lista" para remover todos os itens

## 🎨 Design e UX

### **Paleta de Cores**
- **Primária**: Azul (#1978E5)
- **Sucesso**: Verde (#10B981)
- **Neutros**: Cinzas variados
- **Fundos**: Branco e tons suaves

### **Tipografia**
- **Títulos**: Poppins Bold
- **Corpo**: Poppins Regular
- **Detalhes**: Poppins Medium

### **Estados Visuais**
- **Estado Vazio**: Ícone de carrinho com mensagens contextuais
- **Loading**: Indicadores de carregamento suaves
- **Feedback**: Animações de confirmação

## 🔄 Gerenciamento de Estado

O aplicativo utiliza:
- **React Hooks** (useState, useEffect) para estado local
- **AsyncStorage** para persistência de dados
- **Contexto implícito** através de props drilling controlado

### **Estrutura de Dados**

```typescript
type ItemStorage = {
  id: string;           // UUID único
  description: string;  // Nome do item
  status: FilterStatus; // 'pending' | 'done'
  createdAt: Date;     // Data de criação
}
```

## 🧪 Funcionalidades de Storage

### **Operações Disponíveis**
- `get()` - Buscar todos os itens
- `getByStatus()` - Filtrar por status
- `add()` - Adicionar novo item
- `remove()` - Remover item específico
- `clear()` - Limpar toda a lista
- `toggleStatus()` - Alternar status do item

## 🚀 Scripts Disponíveis

```bash
# Iniciar servidor de desenvolvimento
npm start

# Executar no Android
npm run android

# Executar no iOS
npm run ios

# Executar na web
npm run web
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abrir um Pull Request

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através:
- Issues do GitHub
- Email: [seu-email@exemplo.com]

---

**Desenvolvido com ❤️ usando React Native + Expo**