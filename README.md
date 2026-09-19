# 🌱 COMUNIDAGRO — Site Institucional

Site institucional fictício para uma ONG de agricultura urbana e sustentável, desenvolvido como atividade acadêmica da disciplina **Desenvolvimento Front-End para Web**, do curso de **Ciência da Computação**.

🔗 **Site no ar (GitHub Pages):** [lucasjosebs.github.io/site-institucional-ong](https://lucasjosebs.github.io/site-institucional-ong/)
🔗 **Repositório:** [github.com/lucasjosebs/site-institucional-ong](https://github.com/lucasjosebs/site-institucional-ong)

---

## 📖 Sobre o projeto

A COMUNIDAGRO é uma organização fictícia dedicada a levar práticas agrícolas sustentáveis para comunidades urbanas e periféricas, com foco em hortas comunitárias em escolas e creches municipais, doação de mudas frutíferas e capacitação de famílias interessadas em cultivo doméstico.

Este projeto foi construído **inteiramente em HTML5 e CSS3**, sem uso de JavaScript, como proposta didática para consolidar conceitos de:

- HTML semântico
- Design systems com CSS Custom Properties
- Layout responsivo com CSS Grid e Flexbox
- Interatividade avançada usando apenas CSS (pseudo-classes, `:checked`, `:has()`)
- Componentes de feedback visual (badges, alertas, modais, toasts)

## 🗂️ Estrutura do projeto

```
pagina_ONG/
├── assets/                     # Imagens e ícones do site
│   ├── fachada.png
│   ├── icon-logo.ico
│   ├── logo.png
│   ├── projeto_horta.png
│   ├── projeto_mudas.png
│   ├── projeto_treinamentos.png
│   ├── projetos_eventos.jpg
│   └── projetos.png
├── css/
│   └── style.css               # Folha de estilos única do projeto
├── html/
│   ├── cadastro.html           # Formulário de voluntários e doadores
│   └── projetos.html           # Projetos realizados, em andamento e futuros
└── index.html                  # Página inicial (Sobre a ONG)
```

## 📄 Páginas

| Página | Descrição |
|---|---|
| **`index.html`** | Apresentação institucional: quem é a ONG, desde quando atua, quem impacta e objetivos futuros. |
| **`html/projetos.html`** | Catálogo de projetos organizados por status (Realizado / Em Andamento / Futuro), com cards detalhados e modal de "Saiba mais". |
| **`html/cadastro.html`** | Formulário de cadastro de voluntários e doadores, com validação nativa e feedback visual. |

## 🎨 Design System

O projeto segue um sistema de design centralizado em **CSS Custom Properties** (`:root`), garantindo consistência visual e manutenção simplificada:

- **Paleta de cores** — 9 variáveis semânticas (não nomeadas pela cor em si, mas pela função): `--color-primary`, `--color-secundary-title`, `--color-background`, `--color-text-main`, `--color-text-header-footer`, `--color-text-muted`, `--color-border-hover`, `--color-accent-border`, `--color-sucesso`, `--color-erro`, `--color-alert`.
- **Tipografia** — combinação de `Francois One` (títulos, identidade visual) e `Times New Roman` (corpo de texto), com escala de 6 tamanhos (`--text-xs` a `--text-2xl`).
- **Espaçamento modular** — escala baseada em múltiplos de `0.5rem` (`--space-1` a `--space-8`), aplicada de forma consistente em margens, paddings e gaps.

## 📐 Layout responsivo

- **CSS Grid** — sistema de 12 colunas nos cards de projetos (`html/projetos.html`), com `grid-column: span N` ajustado por breakpoint, sem alterar a estrutura base do container.
- **Flexbox** — utilizado para alinhamentos unidimensionais: cabeçalho, rodapé, navegação, galeria de imagens e componentes de cartão.
- **6 breakpoints** cobrindo desde monitores ultrawide (`min-width: 1600px`) até smartphones pequenos (`max-width: 480px`).

## 🧩 Componentes interativos (somente CSS)

Toda a interatividade do projeto foi construída **sem JavaScript**, utilizando a técnica de checkbox oculto (`:checked`) combinada com a pseudo-classe `:has()`:

- **Menu hambúrguer** responsivo para dispositivos móveis, com animação das linhas em X.
- **Menu dropdown** no item "Projetos", com submenu de âncoras (Realizados / Em Andamento / Futuros) — versão desktop via `:hover` e versão mobile via checkbox dedicado.
- **Modal** de detalhamento ("Saiba mais") em cada card de projeto, com overlay e fechamento pelo botão "×".
- **Badges** de categorização de status nos cards.
- **Alert box** informativo no formulário de cadastro.
- **Toast** de notificação de sucesso (demonstração manual, já que o acionamento automático por tempo depende de JavaScript, fora do escopo desta etapa).

## ✅ Formulário e validação

O formulário de cadastro (`cadastro.html`) utiliza validação nativa do HTML5 (`pattern`, `required`, `type`) combinada com feedback visual via pseudo-classes CSS:

- `:focus` — destaque de borda e sombra no campo ativo.
- `:valid` / `:invalid` combinadas com `:not(:placeholder-shown)` — evita sinalizar erro antes do usuário interagir com o campo.
- `:hover`, `:active` e `:disabled` no botão de envio, comunicando os estados de interação.

## 🛠️ Tecnologias utilizadas

- **HTML5** — marcação semântica (`header`, `nav`, `main`, `section`, `article`, `figure`, `address`, `footer`).
- **CSS3** — Custom Properties, Grid, Flexbox, `:has()`, `@media`, `@starting-style`.
- **Google Fonts** — Francois One e Bebas Neue.

## 🚧 Limitações conhecidas

Como o projeto está restrito a HTML e CSS nesta etapa da disciplina:

- O botão de envio do formulário possui estilo `:disabled` implementado, mas não é acionado dinamicamente (dependeria de JavaScript para validação condicional).
- O componente Toast é demonstrado manualmente via checkbox; o disparo automático após o envio do formulário e o desaparecimento temporizado ficam previstos para a etapa seguinte da disciplina, com a introdução de JavaScript.

## 👨‍💻 Autor

Desenvolvido por **Lucas** como atividade avaliativa da disciplina de Desenvolvimento Front-End para Web — curso de Ciência da Computação.

---

*Este é um projeto acadêmico fictício. Todos os dados de contato, CNPJ e informações institucionais da COMUNIDAGRO são ilustrativos.*
