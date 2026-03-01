<template>
  <section id="home" class="hero-section flex column " :style="{ backgroundImage: `url(${heroBg})` }">
    <div class="col flex flex-center column text-center">
      <div class="text-h4 text-primary text-weight-bold" data-aos="fade-up" data-aos-delay="0">
        PORTFÓLIO
      </div>
      <div class="text-white text-weight-bold" style="font-size: 4.5rem;" data-aos="fade-up" data-aos-delay="100">
        JARLES SAYHARE
      </div>
      <div class="text-h6 text-grey-4 q-pb-xl" data-aos="fade-up" data-aos-delay="200">
        DESENVOLVEDOR FRONT-END & DESIGNER GRÁFICO
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        <q-btn
          size="18px"
          label="Saiba mais"
          color="primary"
          outline
          no-caps
          rounded
          class=" q-px-lg"
          unelevated
          :to="{ path: '/', hash: '#aboutMe' }"
        />
      </div>
    </div>
    <div class="row q-gutter-x-xl justify-center q-pb-xl hero-social" data-aos="fade-up" data-aos-delay="400">
      <a
        href="https://github.com/Jarlez"
        target="_blank"
        rel="noopener noreferrer"
        class="hero-social-link"
        aria-label="GitHub"
      >
        <span
          class="hero-social-icon"
          style="--icon: url(/img/svg/githubIcon.svg)"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/jarlessayhare7/"
        target="_blank"
        rel="noopener noreferrer"
        class="hero-social-link"
        aria-label="LinkedIn"
      >
        <span
          class="hero-social-icon"
          style="--icon: url(/img/svg/linkedinIcon.svg)"
        />
      </a>
      <a
        href="https://www.behance.net/jarlessayhare1"
        target="_blank"
        rel="noopener noreferrer"
        class="hero-social-link"
        aria-label="Behance"
      >
        <span
          class="hero-social-icon"
          style="--icon: url(/img/svg/behanceIcon.svg)"
        />
      </a>
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]" class="float-top-btn">
      <q-btn
        fab
        color="primary"
        class="fab-scroll-top"
        :to="{ path: '/', hash: '#home' }"
        aria-label="Voltar ao topo"
      >
        <q-icon name="keyboard_arrow_up" size="28px" class="q-pa-none" color="white" />
      </q-btn>
    </q-page-sticky>
  </section>
</template>

<script setup>

import heroBg from 'src/public/img/planodefundo.webp'

</script>

<style scoped lang="scss">
.hero-section {
  min-height: 100vh;
  background-size: cover;
  background-position: center;
}

/* Ícones como máscara: uma imagem (branca), cor muda no hover com CSS */
.hero-social-link {
  display: inline-flex;
  text-decoration: none;
}

.hero-social-icon {
  width: 40px;
  height: 40px;
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

.hero-social-link:hover .hero-social-icon {
  background-color: var(--q-primary);
}

/* Botão flutuante sempre acima do conteúdo (cards, imagens, etc.) */
.float-top-btn {
  z-index: 9999;
}

/* Tamanho fixo do botão: não cresce com o ícone */
.fab-scroll-top {
  width: 48px !important;
  height: 48px !important;
  min-width: 48px !important;
  max-width: 48px !important;
  min-height: 48px !important;
  max-height: 48px !important;
  padding: 0 !important;
}
</style>
