<template>
  <section id="ability" class="section-ability q-py-xl">
    <div class="container">
      <div class="section-header text-center q-mb-xl" data-aos="fade-up">
        <h2 class="text-h3 text-weight-bold text-primary q-mb-md">
          Habilidades
        </h2>
        <p class="text-h6 text-grey-4">
          Clique nos cards para mais informações
        </p>
      </div>
      <div class="row q-col-gutter-md q-mb-lg">
        <div
          v-for="(hab, index) in habilidades"
          :key="index"
          class="col-6 col-sm-4 col-md-3 col-lg-2"
          data-aos="zoom-in"
          :data-aos-delay="index * 50"
        >
          <q-card
            class="ability-card full-height"
            flat
            bordered
            :class="{ flipped: hab.flipped }"
            @click="hab.flipped = !hab.flipped"
          >
            <div class="ability-inner">
              <div class="ability-front column flex-center q-pa-md">
                <q-icon
                  v-if="hab.type === 'mdi'"
                  :name="hab.icon"
                  size="48px"
                  color="primary"
                />
                <!-- Devicon -->
                <i
                  v-else-if="hab.type === 'devicon'"
                  :class="[hab.icon]"
                  class="text-primary"
                  style="font-size: 48px"
                ></i>

                <div class="text-subtitle2 text-weight-medium q-mt-sm">
                  {{ hab.nome }}
                </div>
              </div>
              <div class="ability-back column flex-center q-pa-md">
                <ul class="q-pl-md text-caption text-white">
                  <li v-for="(item, i) in hab.itens" :key="i">{{ item }}</li>
                </ul>
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  habilidades: { type: Array, required: true },
});
</script>

<style scoped lang="scss">
.section-ability {
  background: #111;
}

.ability-card {
  border-radius: 12px;
  cursor: pointer;
  min-height: 160px;
  perspective: 1000px;
  border: 1px solid rgba(0, 255, 255, 0.2);
  overflow: hidden;
}

.ability-inner {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 160px;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.ability-card.flipped .ability-inner {
  transform: rotateY(180deg);
}

.ability-front,
.ability-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #1a1a1a;
  border-radius: 12px;
}

.ability-back {
  transform: rotateY(180deg);
  background-color: #252525;
}
</style>
