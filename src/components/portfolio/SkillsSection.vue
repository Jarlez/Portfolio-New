<template>
  <section id="skills" class="section-skills q-py-xl">
    <div class="container">
      <div class="row q-col-gutter-lg justify-center">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="col-6 col-sm-4 col-md-2 skill-col"
          data-aos="fade-up"
          :data-aos-delay="index * 80"
        >
          <q-card class="skill-card text-center q-pa-md" flat bordered>
            <q-icon :name="skill.icon" size="40px" color="grey-5" class="q-mb-sm" />
            <div class="text-h4 text-weight-bold text-white q-pt-sm">{{ skill.valor }}</div>
            <div class="text-caption text-primary q-pt-sm">{{ skill.label }}</div>
          </q-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  skills: { type: Array, required: true }
})
</script>

<style scoped lang="scss">
.section-skills {
   background: #1a1a1a;
}

/* Em mobile (e em geral): coluna flex para os cards da mesma linha terem altura igual */
.skill-col {
  display: flex;
  flex-direction: column;
}

.skill-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  transition: all 0.2s;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #1e1e1e;
}

.skill-card:hover {
  border-color: var(--q-primary);
  box-shadow: 0 4px 12px rgba(0, 255, 255, 0.1);
}
</style>
