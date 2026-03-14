# 🎵 Spotify Clone

Aplicação **Full Stack** inspirada no Spotify que permite explorar artistas e músicas e reproduzir previews das faixas através de uma API própria.

O projeto foi desenvolvido com **React no frontend** e **Node.js + Express no backend**, utilizando **MongoDB** para armazenamento das informações.

---

## 🚀 Tecnologias Utilizadas

### Frontend

* React
* Vite
* JavaScript
* CSS

### Backend

* Node.js
* Express

### Banco de Dados

* MongoDB

### Ferramentas

* Git
* GitHub
* ESLint

---

## ⚙️ Funcionalidades

* Listagem de artistas
* Listagem de músicas
* Reprodução de preview das músicas
* Consumo de API REST própria
* Integração entre frontend e backend
* Estrutura separada entre **interface e API**

---

## 🏗️ Estrutura do Projeto

```
spotify-clone
 ├ FrontEnd
 │   ├ dist
 │   ├ src
 │   │   ├ assets
 │   │   ├ API
 │   │   ├ componentes
 │   │   ├ database
 │   │   ├ logo
 │   │   ├ pages
 │   │   ├ App.jsx
 │   │   ├ main.jsx
 │   │   └ index.css
 │   ├ index.html
 │   ├ vite.config.js
 │   └ package.json
 │
 ├ BackEnd
 │   ├ API
 │   │   ├ connect.js
 │   │   ├ insertMany.js
 │   │   └ server.js
 │   └ package.json
```

O projeto é dividido em duas partes principais:

* **Frontend** responsável pela interface e interação do usuário
* **Backend** responsável pela API e comunicação com o banco de dados

---


## 📦 Como executar o projeto

Clone o repositório:

```
git clone https://github.com/IgorViniciusG/SpotifyClone
```

Entre na pasta do projeto:

```
cd SpotifyClone
```

Instale as dependências:

```
npm run build
```

Inicie o servidor:

```
npm start
```

---

⚙️ Scripts do Projeto

Script da raiz
```
"scripts": {
  "build": "npm install --prefix BackEnd && npm install --prefix FrontEnd && npm run build --prefix FrontEnd",
  "start": "npm run start --prefix BackEnd"
}
```

Esses scripts permitem instalar as dependências do frontend e backend automaticamente e iniciar a aplicação.


---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido para praticar:

* Desenvolvimento **Full Stack**
* Criação de **APIs REST**
* Integração entre **React e Node.js**
* Estruturação de aplicações separando frontend e backend
* Manipulação de dados utilizando **MongoDB**

---

## 👨‍💻 Autor

**Igor Vinicius Gonçalves da Silva**

GitHub
https://github.com/IgorViniciusG

LinkedIn
https://www.linkedin.com/in/igorvn-silva/
