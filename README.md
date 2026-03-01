# Portfólio Jarles Sayhare (Vue + Quasar)

Portfólio modernizado com **Vue 3**, **Quasar** e **Vite**.

## Estrutura

- **Layout**: `src/layouts/MainLayout.vue` — navbar, drawer mobile, footer
- **Página principal**: `src/pages/IndexPage.vue` — Hero, Projetos, Sobre mim, Habilidades, Skills, Contato
- **Estilos**: Quasar (classes utilitárias) + `src/css/app.sass` e variáveis em `quasar-variables.sass`

## Assets (imagens)

Copie as pastas do portfólio antigo para o novo projeto:

1. **Imagens**: copie todo o conteúdo de `Portfolio/img/` para `portfolionew/public/img/`
2. **Currículo** (opcional): copie `Portfolio/download/jarles-curriculo.pdf` para `portfolionew/public/download/`

Assim as imagens dos projetos, logo, perfil e plano de fundo funcionarão corretamente.

## Comandos

```bash
cd portfolionew
npm install
npm run dev
```

Build para produção:

```bash
npm run build
```

Os arquivos gerados ficam em `dist/`.

## Tecnologias

- Vue 3 (Composition API)
- Quasar v2
- Vue Router
- Vite
- AOS (animações)
- Sass
