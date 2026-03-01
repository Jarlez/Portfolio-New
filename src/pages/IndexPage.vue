<template>
  <div>
    <HeroSection />

    <ProjectsSection
      :projetos="projetos"
      :projetos-visiveis="projetosVisiveis"
      v-model:mostrar-mais="mostrarMais"
      @open-modal="abrirModalProjeto"
    />

    <AboutSection />

    <AbilitySection :habilidades="habilidades" />

    <SkillsSection :skills="skills" />

    <ContactSection />

    <FooterSection />

    <!-- Modal projeto -->
    <q-dialog
      v-model="modalProjeto"
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card v-if="projetoModal" class="bg-dark text-white">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ projetoModal.titulo }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-carousel
            v-model="projetoModal.slide"
            arrows
            control-color="primary"
            class="rounded-borders"
            height="60vh"
          >
            <q-carousel-slide
              v-for="(img, i) in projetoModal.images"
              :key="i"
              :name="i"
              class="column no-wrap flex-center"
            >
              <q-img :src="img" fit="contain" class="full-width full-height" />
            </q-carousel-slide>
          </q-carousel>
          <p class="text-body2 q-mt-md">{{ projetoModal.descricao }}</p>
          <q-btn
            flat
            color="primary"
            no-caps
            :href="projetoModal.link"
            target="_blank"
            label="Ver no GitHub"
            icon="open_in_new"
            class="q-mt-sm"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "src/components/portfolio/HeroSection.vue";
import ProjectsSection from "src/components/portfolio/ProjectsSection.vue";
import AboutSection from "src/components/portfolio/AboutSection.vue";
import AbilitySection from "src/components/portfolio/AbilitySection.vue";
import SkillsSection from "src/components/portfolio/SkillsSection.vue";
import ContactSection from "src/components/portfolio/ContactSection.vue";
import FooterSection from "src/components/portfolio/FooterSection.vue";

const mostrarMais = ref(false);

const projetos = ref([
  {
    id: 1,
    titulo: "Portfólio",
    descricao:
      "Meu site portfólio onde coloquei em prática todo o conhecimento que tenho. Foco em responsividade e boas práticas.",
    tecnologias: "Vue.js 3, Quasar, Vite, Sass",
    status: "Finalizado",
    link: "https://github.com/Jarlez/Portfolio",
    images: [
      "src/public/img/portfolio.png",
      "src/public/img/portfolio1.png",
      "src/public/img/portfolio2.png",
      "src/public/img/portfolio3.png",
      "src/public/img/portfolio4.png",
      "src/public/img/portfolio5.png",
    ],
    slide: 0,
  },
  {
    id: 2,
    titulo: "Hands-ON",
    descricao: "Dashboard feito na minha pós graduação. É um sistema com CRUD de alunos e disciplinas.",
    tecnologias: "HTML5, CSS3, JavaScript e JSON server",
    status: "Finalizado",
    link: "https://github.com/Jarlez/hands-on",
    images: [
      "src/public/img/handson.png",
      "src/public/img/handson1.png",
      "src/public/img/handson2.png",
      "src/public/img/handson3.png",
      "src/public/img/handson4.png",
    ],
    slide: 0,
  },
  {
    id: 3,
    titulo: "Health plus+",
    descricao:
      "Projeto que une calculadoras IMC e TMB e que mostra dicas personalizadas com base no resultado do usuário.",
    tecnologias: "HTML5, CSS3, JavaScript",
    status: "Em desenvolvimento",
    link: "https://github.com/Jarlez/calculadoraIMC-TMB",
    images: [
      "src/public/img/calculadora.png",
      "src/public/img/calculadora1.png",
      "src/public/img/calculadora2.png",
      "src/public/img/calculadora3.png",
    ],
    slide: 0,
  },
  {
    id: 4,
    titulo: "Login screen LOL",
    descricao:
      "Clone da tela de login do League of Legends. Foco em formulário e modal com animações.",
    tecnologias: "HTML5, CSS3, JavaScript",
    status: "Finalizado",
    link: "https://github.com/Jarlez/league-of-legends-login-screen",
    images: [
      "src/public/img/lol.png",
      "src/public/img/lol1.png",
      "src/public/img/lol2.png",
      "src/public/img/lol3.png",
      "src/public/img/lol4.png",
    ],
    slide: 0,
  },
  {
    id: 5,
    titulo: "Estacione Aqui!",
    descricao:
      "Sistema de gerenciamento para estacionamento: controle de clientes mensalistas e veículos.",
    tecnologias: "React.js, Tailwind CSS",
    status: "Em desenvolvimento",
    link: "https://github.com/Jarlez/estacione-aqui",
    images: ["src/public/img/producao.png"],
    slide: 0,
  },
  {
    id: 6,
    titulo: "Projeto Rotas",
    descricao:
      "Três mini projetos: conversor de números romanos, jogo da vida e divisor de conta de restaurante.",
    tecnologias: "HTML5, CSS3, JavaScript",
    status: "Finalizado",
    link: "https://github.com/Jarlez/Rota-das-oficinas",
    images: ["src/public/img/producao.png"],
    slide: 0,
  },
]);

const projetosVisiveis = computed(() =>
  mostrarMais.value ? projetos.value : projetos.value.slice(0, 3)
);

const habilidades = ref([
  {
    nome: "Vue.js",
    type: "mdi",
    icon: "mdi-vuejs",
    flipped: false,
    itens: [
      "Composition API",
      "Componentização",
      "Reatividade",
      "Vue Router / Pinia"
    ],
  },
  {
    nome: "React.js",
    type: "mdi",
    icon: "mdi-react",
    flipped: false,
    itens: [
      "Hooks",
      "Componentização",
      "Gerenciamento de estado",
      "Consumo de APIs"
    ],
  },
  {
    nome: "Tailwind CSS",
    type: "devicon",
    icon: "devicon-tailwindcss-plain",
    flipped: false,
    itens: [
      "Utility-first",
      "Responsividade",
      "Customização de tema",
      "Dark mode"
    ],
  },
  {
    nome: "HTML5",
    type: "mdi",
    icon: "mdi-language-html5",
    flipped: false,
    itens: [
      "Semântica",
      "SEO",
      "Acessibilidade",
      "Boas práticas"
    ],
  },
  {
    nome: "CSS3",
    type: "mdi",
    icon: "mdi-language-css3",
    flipped: false,
    itens: [
      "Flexbox & Grid",
      "Responsividade",
      "Animações",
      "Arquitetura CSS"
    ],
  },
  {
    nome: "JavaScript",
    type: "mdi",
    icon: "mdi-language-javascript",
    flipped: false,
    itens: [
      "ES6+",
      "Manipulação do DOM",
      "Promises & Async/Await",
      "Estruturas de dados"
    ],
  },
  {
    nome: "Node.js",
    type: "mdi",
    icon: "mdi-nodejs",
    flipped: false,
    itens: [
      "APIs REST",
      "Express",
      "Middlewares",
      "Integração com banco"
    ],
  },
  {
    nome: "Git",
    type: "mdi",
    icon: "mdi-git",
    flipped: false,
    itens: [
      "Git Flow",
      "Branches",
      "Resolução de conflitos",
      "Versionamento"
    ],
  },
  {
    nome: "GitHub",
    type: "mdi",
    icon: "mdi-github",
    flipped: false,
    itens: [
      "Pull Requests",
      "Code Review",
      "Actions (CI/CD)",
      "Gerenciamento de projetos"
    ],
  },
  {
    nome: "Figma",
    type: "devicon",
    icon: "devicon-figma-plain",
    flipped: false,
    itens: [
      "Protótipos",
      "Wireframes",
      "Design System",
      "UI/UX"
    ],
  },
  {
    nome: "Photoshop",
    type: "devicon",
    icon: "devicon-photoshop-plain",
    flipped: false,
    itens: [
      "Edição de imagens",
      "Tratamento de cores",
      "Tipografia",
      "Identidade visual"
    ],
  },
  {
    nome: "Desenvolvedor",
    type: "mdi",
    icon: "code",
    flipped: false,
    itens: [
      "Front-end moderno",
      "Boas práticas",
      "Performance",
      "Responsividade"
    ],
  }
])


const skills = ref([
  { valor: "30+", label: "Trabalhos realizados", icon: "work" },
  { valor: "10000+", label: "Linhas de código", icon: "code" },
  { valor: "15+", label: "Projetos concluídos", icon: "folder" },
  { valor: "150+", label: "Copos de café", icon: "local_cafe" },
  { valor: "6", label: "Certificados", icon: "card_membership" },
  { valor: "3000+", label: "Horas investidas", icon: "schedule" },
]);

const modalProjeto = ref(false);
const projetoModal = ref(null);

function abrirModalProjeto(proj) {
  projetoModal.value = { ...proj, slide: 0 };
  modalProjeto.value = true;
}

onMounted(() => {
  AOS.init({ duration: 600, once: true, offset: 80 });
});
</script>
