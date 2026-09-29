# 🌱 COMUNIDAGRO — Site Institucional

Site institucional fictício para uma ONG de agricultura urbana e sustentável, desenvolvido como atividade acadêmica da disciplina **Desenvolvimento Front-End para Web**, do curso de **Ciência da Computação**.

🔗 **Site no ar (GitHub Pages):** [lucasjosebs.github.io/site-institucional-ong](https://lucasjosebs.github.io/site-institucional-ong/)
🔗 **Repositório:** [github.com/lucasjosebs/site-institucional-ong](https://github.com/lucasjosebs/site-institucional-ong)

---

## 📖 Sobre o projeto

A COMUNIDAGRO é uma organização fictícia dedicada a levar práticas agrícolas sustentáveis para comunidades urbanas e periféricas, com foco em hortas comunitárias em escolas e creches municipais, doação de mudas frutíferas e capacitação de famílias interessadas em cultivo doméstico.

O projeto foi construído em **HTML5, CSS3 e JavaScript (ES Modules)**, como proposta didática para consolidar, em etapas sucessivas, conceitos de:

- HTML semântico
- Design system com CSS Custom Properties
- Layout responsivo com CSS Grid e Flexbox
- Interatividade avançada com CSS (pseudo-classes, `:checked`, `:has()`) combinada a JavaScript
- Navegação estilo *Single Page Application* (SPA) com a History API
- Geração dinâmica de conteúdo via templates em JavaScript
- Validação de formulário, máscaras de campo e persistência local com `localStorage`

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
├── js/
│   ├── main.js                 # Ponto de entrada: inicializa rotas, formulário e projetos
│   ├── router.js                # Navegação SPA (History API) e re-renderização do <main>
│   ├── projetos.js              # Fonte de dados dos projetos e geração dos cards via template
│   └── formulario.js            # Validação, máscaras de campo e persistência do cadastro
└── index.html                  # Página inicial (Sobre a ONG)
```

## 📄 Páginas

| Página                   | Descrição                                                                                                                      |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| **`index.html`**         | Apresentação institucional: quem é a ONG, desde quando atua, quem impacta e objetivos futuros.                                 |
| **`html/projetos.html`** | Catálogo de projetos organizados por status (Realizado / Em Andamento / Futuro), gerados dinamicamente via JavaScript, com cards detalhados e modal de "Saiba mais". |
| **`html/cadastro.html`** | Formulário de cadastro de voluntários e doadores, com validação nativa, máscaras de campo, feedback visual e persistência local. |

## 🎨 Design System

O projeto segue um sistema de design centralizado em **CSS Custom Properties** (`:root`), garantindo consistência visual e manutenção simplificada:

- **Paleta de cores** — 9 variáveis semânticas (não nomeadas pela cor em si, mas pela função): `--color-primary`, `--color-secundary-title`, `--color-background`, `--color-text-main`, `--color-text-header-footer`, `--color-text-muted`, `--color-border-hover`, `--color-accent-border`, `--color-sucesso`, `--color-erro`, `--color-alert`.
- **Tipografia** — combinação de `Francois One` (títulos, identidade visual) e `Times New Roman` (corpo de texto), com escala de 6 tamanhos (`--text-xs` a `--text-2xl`).
- **Espaçamento modular** — escala baseada em múltiplos de `0.5rem` (`--space-1` a `--space-8`), aplicada de forma consistente em margens, paddings e gaps.

## 📐 Layout responsivo

- **CSS Grid** — sistema de 12 colunas nos cards de projetos (`html/projetos.html`), com `grid-column: span N` ajustado por breakpoint, sem alterar a estrutura base do container.
- **Flexbox** — utilizado para alinhamentos unidimensionais: cabeçalho, rodapé, navegação, galeria de imagens e componentes de cartão.
- **6 breakpoints** cobrindo desde monitores ultrawide (`min-width: 1600px`) até smartphones pequenos (`max-width: 480px`).

## 🧩 Componentes interativos

Parte da interatividade é resolvida **somente com CSS**, usando a técnica de checkbox oculto (`:checked`) combinada com a pseudo-classe `:has()`; a navegação entre páginas, a geração de conteúdo e o formulário são resolvidos em **JavaScript**:

- **Menu hambúrguer** responsivo para dispositivos móveis, com animação das linhas em X (CSS).
- **Menu dropdown** no item "Projetos", com submenu de âncoras (Realizados / Em Andamento / Futuros) — versão desktop via `:hover` e versão mobile via checkbox dedicado (CSS).
- **Modal** de detalhamento ("Saiba mais") em cada card de projeto, com overlay e fechamento pelo botão "×" (CSS).
- **Badges** de categorização de status nos cards.
- **Alert box** de erro no formulário de cadastro, exibido apenas quando a validação falha (JavaScript).
- **Toast** de notificação de sucesso, acionado automaticamente após o envio válido do formulário e fechado sozinho após alguns segundos (JavaScript).

## 🧭 Navegação SPA (Single Page Application)

A navegação entre `index.html`, `projetos.html` e `cadastro.html` acontece sem recarregar a página, através de `js/router.js`:

- Os links do menu são interceptados por delegação de evento (`document.addEventListener("click", ...)`), e o comportamento padrão de recarregamento é bloqueado com `preventDefault()`.
- A **History API** (`history.pushState` / `history.replaceState` / evento `popstate`) atualiza a URL do navegador e mantém o histórico de navegação (incluindo os botões voltar/avançar) sem recarregar o documento.
- O conteúdo da página de destino é buscado com `fetch`, convertido em um documento navegável com `DOMParser`, e apenas o `<main>` correspondente é extraído e injetado no `<main>` da página atual — o `header`, o `nav` e o `footer` permanecem fixos.
- Links com âncora (ex: `projetos.html#andamento`) são tratados separadamente: após a injeção do conteúdo, a página rola até o elemento correspondente.

## 🧱 Templates dinâmicos

Os cards de projetos (`html/projetos.html`) não são mais escritos manualmente no HTML: em `js/projetos.js`, cada projeto é um objeto (categoria, id, status, título e descrição) em um array central. A função `carregarProjetosDinamicos()` percorre esse array, gera a marcação de cada card com *template literals* e injeta o resultado logo após o título de cada seção (`insertAdjacentHTML`). Isso elimina a repetição de HTML entre o card e o modal de cada projeto, e é reexecutada a cada navegação SPA até `projetos.html`, garantindo que os cards sejam sempre recriados a partir da mesma fonte de dados.

## ✅ Formulário e validação

O formulário de cadastro (`cadastro.html`) combina validação nativa do HTML5 (`pattern`, `required`, `type`) com lógica em `js/formulario.js`:

- `form.checkValidity()` decide se o envio segue adiante ou se o alerta de erro é exibido e a página rola até ele.
- Máscaras de campo aplicadas em tempo real nos campos de **CPF** e **CEP**, formatando o valor digitado conforme o usuário digita.
- Em caso de sucesso, os dados do formulário são coletados com `FormData`, convertidos em objeto e salvos em uma lista no `localStorage` (`comunidagro_cadastros`), simulando a persistência de um cadastro.
- O toast de confirmação é ativado programaticamente e fechado automaticamente após alguns segundos.
- Feedback visual complementar via pseudo-classes CSS: `:focus`, `:valid` / `:invalid` combinadas com `:not(:placeholder-shown)`, e estados `:hover`, `:active` e `:disabled` no botão de envio.

## 🛠️ Tecnologias utilizadas

- **HTML5** — marcação semântica (`header`, `nav`, `main`, `section`, `article`, `figure`, `address`, `footer`).
- **CSS3** — Custom Properties, Grid, Flexbox, `:has()`, `@media`, `@starting-style`.
- **JavaScript (ES Modules)** — `fetch`, `DOMParser`, History API, delegação de eventos, template literals, `localStorage`.
- **AOS (Animate On Scroll)** — biblioteca externa para animações de entrada dos elementos.
- **Google Fonts** — Francois One e Bebas Neue.

## 👨‍💻 Autor

Desenvolvido por **Lucas** como atividade avaliativa da disciplina de Desenvolvimento Front-End para Web — curso de Ciência da Computação.

---

*Este é um projeto acadêmico fictício. Todos os dados de contato, CNPJ e informações institucionais da COMUNIDAGRO são ilustrativos.*