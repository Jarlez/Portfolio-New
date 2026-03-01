<template>
  <footer class="bg-dark text-white">
    <div class="q-pt-none q-pb-lg" data-aos="fade-up">
      <div class="container row items-center justify-center q-gutter-lg">
        <div class="footer-brand">
          <img :src="logoJs" alt="JS" class="footer-logo" />
        </div>
        <div class="footer-separator bg-white gt-xs" aria-hidden="true" />
        <div class="column flex flex-center q-gutter-sm">
          <p class="text-primary text-weight-bold text-h6 q-my-none">
            Onde me encontrar ?
          </p>
          <div class="row items-center q-gutter-lg q-pt-sm">
            <a
              v-for="item in socialLinks"
              :key="item.label"
              :href="item.href"
              target="_blank"
              rel="noopener noreferrer"
              class="footer-social-link"
              :aria-label="item.label"
            >
              <span
                class="footer-social-icon"
                :style="{ '--icon': `url(${item.icon})` }"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom q-pa-md text-center" data-aos="fade-up">
      <p class="text-caption text-white q-my-none">
        Copyright © {{ currentYear }} - Jarles Sayhare
      </p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import logoJs from "src/public/img/JSlogo.png";

const currentYear = computed(() => new Date().getFullYear());

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Jarlez", icon: "/img/svg/githubIcon.svg" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jarlessayhare7/", icon: "/img/svg/linkedinIcon.svg" },
  { label: "Behance", href: "https://www.behance.net/jarlessayhare1", icon: "/img/svg/behanceIcon.svg" },
];
</script>

<style scoped lang="scss">
/* Logo: altura e filtro para branco no fundo escuro */
.footer-logo {
  height: 70px;
  width: auto;
  display: block;
  filter: brightness(0) invert(1);
}

.footer-brand {
  flex-shrink: 0;
}

/* Linha vertical: Quasar não tem utilitário para 1px × altura */
.footer-separator {
  width: 1px;
  min-height: 70px;
  flex-shrink: 0;
}

/* Ícones em máscara (mesmo estilo HeroSection): branco → primary no hover */
.footer-social-link {
  display: inline-flex;
}

.footer-social-icon {
  width: 32px;
  height: 32px;
  background-color: #fff;
  mask-image: var(--icon);
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-image: var(--icon);
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  transition: background-color 0.2s ease;
}

.footer-social-link:hover .footer-social-icon {
  background-color: var(--q-primary);
}

/* Borda superior: Quasar não tem utilitário para essa borda específica */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
