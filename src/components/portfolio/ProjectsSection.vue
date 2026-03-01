<template>
  <section id="projects" class="section-projects q-py-xl">
    <div class="container">
      <div class="section-header text-center q-mb-xl" data-aos="fade-up">
        <h2 class="text-h3 text-weight-bold text-primary q-mb-md">Projetos</h2>
        <p class="text-h6 text-grey-4">Confira abaixo alguns dos meus projetos</p>
      </div>
      <TransitionGroup
        name="projects-list"
        tag="div"
        class="row q-col-gutter-lg q-mt-xl projects-row"
      >
        <div
          v-for="(proj, index) in projetosVisiveis"
          :key="proj.id"
          class="col-12 col-md-6 col-lg-4"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <q-card class="project-card full-height" flat bordered>
            <div class="project-card-image-wrap">
              <q-carousel v-model="proj.slide" arrows control-color="primary" class="rounded-borders" height="200px">
                <q-carousel-slide v-for="(img, i) in proj.images" :key="i" :name="i" class="column no-wrap flex-center">
                  <q-img :src="img" fit="cover" class="full-width full-height" />
                </q-carousel-slide>
              </q-carousel>
              <q-btn
                flat
                round
                dense
                color="primary"
                icon="zoom_in"
                class="project-card-zoom-btn"
                aria-label="Ampliar"
                @click="$emit('open-modal', proj)"
              />
            </div>
            <q-card-section class="q-pt-none">
              <div class="text-h6 text-weight-bold text-grey-9 q-mb-sm">{{ proj.titulo }}</div>
              <p class="text-body2 text-grey-7 q-mb-sm"><strong>Descrição:</strong> {{ proj.descricao }}</p>
              <p class="text-caption text-grey-7 q-mb-sm"><strong>Tecnologias:</strong> {{ proj.tecnologias }}</p>
              <q-chip :color="proj.status === 'Finalizado' ? 'positive' : 'warning'" size="sm" text-color="white">{{ proj.status }}</q-chip>
            </q-card-section>
            <q-card-actions>
              <div class="row justify-center full-width q-pb-md">
                <q-btn unelevated rounded color="primary" no-caps :href="proj.link" target="_blank" label="Ver mais" icon="open_in_new" />
              </div>
            </q-card-actions>
          </q-card>
        </div>
      </TransitionGroup>
      <div class="row justify-center q-mt-xl" v-if="projetos.length > 3" data-aos="fade-up">
        <q-btn
          flat
          class="chevron-btn"
          round
          color="primary"
          :icon="mostrarMais ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          :class="mostrarMais ? 'chevron-btn chevron-bounce-up' : 'chevron-btn chevron-bounce-down'"
          aria-label="Ver mais projetos"
          @click="$emit('update:mostrarMais', !mostrarMais)"
        />
      </div>
      <div class="text-center q-mt-xl" data-aos="fade-up">
        <q-btn size="xl" flat color="primary" no-caps href="https://github.com/Jarlez?tab=repositories" target="_blank" label="Repositórios no GitHub" icon="code" />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  projetos: { type: Array, required: true },
  projetosVisiveis: { type: Array, required: true },
  mostrarMais: { type: Boolean, default: false }
})

defineEmits(['update:mostrarMais', 'open-modal'])
</script>

<style scoped lang="scss">
.section-projects {
  background: #1a1a1a;
}

/* Transição suave ao expandir/recolher os projetos */
.projects-row {
  position: relative;
}

.projects-list-enter-active,
.projects-list-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.projects-list-enter-from,
.projects-list-leave-to {
  opacity: 0;
  transform: translateY(-16px);
}

.projects-list-leave-active {
  position: absolute;
  left: 0;
  right: 0;
}

.projects-list-move {
  transition: transform 0.35s ease;
}

.project-card {
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid rgba(0, 255, 255, 0.2);
  min-width: 0; /* permite o card encolher em telas pequenas */
}

/* Área da imagem: relativa para posicionar o botão lupa; evita overflow em telas pequenas */
.project-card-image-wrap {
  position: relative;
  max-width: 100%;
  overflow: hidden;
  min-width: 0; /* permite o flex/grid encolher o conteúdo */
}

.project-card-image-wrap .q-carousel {
  max-width: 100%;
  width: 100%;
}

.project-card-image-wrap .q-carousel__slide {
  min-width: 0;
}

.project-card-image-wrap .q-img {
  max-width: 100%;
  object-fit: cover;
}

/* Botão lupa: canto superior direito, por cima das imagens */
.project-card-zoom-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5) !important;
  color: white !important;
}

.project-card-zoom-btn:hover {
  background: rgba(0, 0, 0, 0.7) !important;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 255, 255, 0.15);
}

/* Botão da seta: ícone maior */
.chevron-btn {
  width: 64px;
  height: 64px;
  font-size: 48px;
}

.chevron-btn .q-icon {
  font-size: 48px;
}

/* Seta para baixo: pulsa pra baixo e volta */
.chevron-bounce-down {
  animation: chevron-bounce-down 1.2s ease-in-out infinite;
}

@keyframes chevron-bounce-down {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(12px);
  }
}

.chevron-btn {
  width: 80px !important;
  height: 80px !important;
  min-width: 80px !important;
  max-width: 80px !important;
  min-height: 80px !important;
  max-height: 80px !important;
}

/* Seta para cima: pulsa pra cima e volta */
.chevron-bounce-up {
  animation: chevron-bounce-up 1.2s ease-in-out infinite;
}

@keyframes chevron-bounce-up {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}
</style>
