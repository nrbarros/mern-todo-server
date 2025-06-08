# MERN Todo API

Back-end de uma aplicação de lista de tarefas (Todo List), desenvolvido com **Node.js**, **Express** e **MongoDB**.

Deploy disponível em:  
🔗 [https://mern-todo-server-o2tm.onrender.com](https://mern-todo-server-o2tm.onrender.com)

---

## 🧰 Tecnologias

- Node.js
- Express
- MongoDB (via Mongoose)
- Dotenv
- Render (Deploy)
- CORS

---

## ⚙️ Instalação local

### 1. Clone o repositório

```bash
git clone https://github.com/nrbarros/mern-todo-server.git
cd mern-todo-server
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

> ⚠️ **Nunca suba seu `.env` no GitHub.** O arquivo já está no `.gitignore`.

### 4. Rode o servidor

```bash
npm run dev
```

> A API estará disponível em: `http://localhost:5000/api/todos`

---

## 📦 Rotas da API

| Método | Rota              | Descrição                        |
|--------|-------------------|----------------------------------|
| GET    | `/api/todos`      | Lista todos os todos             |
| POST   | `/api/todos`      | Cria um novo todo                |
| DELETE | `/api/todos/:id`  | Deleta um todo pelo ID           |
| PUT    | `/api/todos/:id`  | Atualiza o campo `completed`     |

---

## 🌐 Deploy em produção

Este projeto foi implantado usando [Render](https://render.com/):

- Tipo: Web Service
- Build command: `npm install`
- Start command: `node index.js` (ou `npm start`)
- Variáveis de ambiente configuradas diretamente no dashboard da Render

---

## ✅ Status

🟢 Projeto em funcionamento.  
🔄 Próximos passos: Integração com front-end (React).

---

## 📄 Licença

MIT © [Natan Barros](https://github.com/nrbarros)