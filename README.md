# 🚀 BuzzFeedClone

![TypeScript](https://img.shields.io/badge/TypeScript-74.7%25-blue)
![CSS](https://img.shields.io/badge/CSS-14.4%25-purple)
![HTML](https://img.shields.io/badge/HTML-10.9%25-orange)
![Status](https://img.shields.io/badge/Status-Concluído-yellow)

## 📱 Visão Geral

BuzzFeedClone é uma réplica moderna do famoso site BuzzFeed, desenvolvida com TypeScript e Angular. Este projeto recria a experiência interativa de conteúdos virais, quizzes divertidos e artigos envolventes que tornaram o BuzzFeed tão popular.

## ✨ Funcionalidades

- **Feed de Conteúdo Personalizado**: Algoritmo que aprende as preferências do usuário
- **Quizzes Interativos**: Crie e compartilhe quizzes com resultados compartilháveis
- **Sistema de Votação**: Upvote/downvote em conteúdos
- **Comentários**: Sistema completo de comentários e respostas
- **Design Responsivo**: Experiência perfeita em dispositivos móveis e desktop
- **Modo Escuro**: Alternância entre tema claro e escuro
- **Compartilhamento Social**: Integração com principais redes sociais

## 🛠️ Tecnologias Utilizadas

- **Frontend**:
  - Angular 16
  - TypeScript
  - SCSS/CSS
  - Bootstrap 5
  - RxJS

- **Backend**:
  - Node.js
  - Express
  - MongoDB
  - Mongoose

- **Ferramentas**:
  - Docker
  - Jest (Testes)
  - ESLint/Prettier
  - GitHub Actions (CI/CD)

## 📂 Estrutura do Projeto

```
buzzfeedclone/
├── .vscode/                  # Configurações do VS Code
├── src/                      # Código fonte principal
│   ├── app/                  # Componentes Angular
│   │   ├── components/       # Componentes reutilizáveis
│   │   ├── pages/            # Páginas da aplicação
│   │   ├── services/         # Serviços HTTP e lógica de negócios
│   │   ├── models/           # Interfaces e tipos
│   │   └── shared/           # Componentes e utilidades compartilhadas
│   ├── assets/               # Imagens, fontes e recursos estáticos
│   ├── environments/         # Configurações de ambiente
│   └── styles/               # Estilos globais e temas
├── server/                   # Código backend (API)
│   ├── controllers/          # Controladores de rotas
│   ├── models/               # Modelos de dados (Mongoose)
│   ├── routes/               # Definições de rotas API
│   ├── middleware/           # Middleware personalizado
│   ├── config/               # Configurações do servidor
│   └── server.ts             # Ponto de entrada do servidor
├── .editorconfig             # Configurações do editor
├── .gitignore                # Arquivos ignorados pelo Git
├── angular.json              # Configuração do Angular
├── package.json              # Dependências e scripts
├── package-lock.json         # Versões exatas das dependências
├── tsconfig.json             # Configuração do TypeScript
├── tsconfig.app.json         # Configuração TS específica para app
├── tsconfig.spec.json        # Configuração TS para testes
└── README.md                 # Documentação do projeto
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (v16+)
- Angular CLI
- MongoDB (local ou Atlas)
- Git

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/mauriciogonrails/BuzzFeedClone.git
   cd BuzzFeedClone
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` baseado no `.env.example`
   - Configure sua conexão MongoDB e outras variáveis necessárias

4. Execute o servidor backend:
   ```bash
   npm run server
   ```

5. Em outro terminal, inicie o frontend:
   ```bash
   npm start
   ```

6. Acesse a aplicação em `http://localhost:4200`

### Usando Docker

```bash
# Construa as imagens
docker-compose build

# Execute os containers
docker-compose up
```

## 📝 Funcionalidades Planejadas

- [ ] Sistema de autenticação (login social e tradicional)
- [ ] Criação de conteúdo por usuários
- [ ] Sistema de notificações em tempo real
- [ ] Perfis de usuário personalizáveis
- [ ] Dashboard para análise de engajamento
- [ ] API pública para desenvolvedores

## 🧪 Testes

```bash
# Execute os testes unitários
npm run test

# Execute os testes e2e
npm run e2e

# Verificação de linting
npm run lint
```

## 📱 Capturas de Tela

*Capturas de tela serão adicionadas conforme o desenvolvimento avança*

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📜 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

## 📞 Contato

Para dúvidas ou sugestões:
- GitHub: [mauriciogonrails](https://github.com/mauriciogonrails)

---

⭐ Não se esqueça de dar uma estrela se você gostou deste projeto! ⭐

Inspirado pelo [BuzzFeed](https://www.buzzfeed.com), mas desenvolvido de forma independente sem qualquer afiliação oficial.
