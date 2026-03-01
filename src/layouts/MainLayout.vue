<template>
  <q-layout view="lHh Lpr lFf">

    <!-- Navbar -->
    <q-header class="navbar-transition" :class="[scrolled ? 'bg-dark' : 'bg-transparent']">
      <q-toolbar
        class="text-white q-py-sm"
        :class="[$q.screen.lt.md ? 'justify-between' : 'justify-evenly']"
      >
        <!--Logo (com contain para não cortar)-->
        <div>
          <q-img
            class="cursor-pointer"
            :src="ImgLogoForm"
            width="80px"
            @click="$router.push('/')"
            contain
          />
        </div>

        <!-- Menu principal -->
        <div class="row items-center q-gutter-sm" v-if="$q.screen.gt.sm">
          <q-btn
            flat
            no-caps
            size="18px"
            label="Início"
            color="white"
            @click="scrollToSection('home')"
          />
          <q-btn
            flat
            no-caps
            size="18px"
            label="Projetos"
            color="white"
            @click="scrollToSection('projects')"
          />
          <q-btn
            flat
            no-caps
            size="18px"
            label="Sobre mim"
            color="white"
            @click="scrollToSection('aboutMe')"
          />
          <q-btn
            flat
            no-caps
            size="18px"
            label="Habilidades"
            color="white"
            @click="scrollToSection('ability')"
          />
          <q-btn
            flat
            no-caps
            size="18px"
            label="Contato"
            color="white"
            @click="scrollToSection('contact')"
          />
        </div>

        <!-- Ações -->
        <div></div>

        <!-- Botão hamburguer (mobile) -->
        <q-btn
          v-if="$q.screen.lt.md"
          flat
          round
          color="white"
          icon="menu"
          size="lg"
          @click="drawer = !drawer"
        />
      </q-toolbar>
    </q-header>
    <!-- Drawer menu lateral (mobile) -->
    <q-drawer
      :no-swipe-open="true"
      class="bg-white"
      content-class="drawer-transition"
      v-model="drawer"
      side="right"
      overlay
      behavior="mobile"
    >
      <div class="q-pa-md" style="position: relative">
        <q-btn
          flat
          round
          unelevated
          icon="close"
          size="md"
          color="grey-9"
          style="position: absolute; top: 10px; right: 10px"
          @click="drawer = false"
        />
      </div>

      <div class="column items-center text-center q-px-md q-pt-lg">
        <q-btn
          flat
          no-caps
          class="full-width"
          label="Início"
          color="grey-9"
          @click="scrollToSection('home')"
        />
        <q-btn
          flat
          no-caps
          class="full-width"
          label="Projetos"
          color="grey-9"
          @click="scrollToSection('projects')"
        />
        <q-btn
          flat
          no-caps
          class="full-width"
          label="Sobre mim"
          color="grey-9"
          @click="scrollToSection('aboutMe')"
        />
        <q-btn
          flat
          no-caps
          class="full-width"
          label="Habilidades"
          color="grey-9"
          @click="scrollToSection('ability')"
        />
        <q-btn
          flat
          no-caps
          class="full-width"
          label="Contato"
          color="grey-9"
          @click="scrollToSection('contact')"
        />
      </div>
    </q-drawer>
    <!-- Botão flutuante -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const drawer = ref(false);
const scrolled = ref(false);

const scrollThreshold = 20;

function onScroll() {
  scrolled.value = window.scrollY > scrollThreshold;
}

onMounted(() => {
  window.scrollTo(0, 0); // força topo
  window.addEventListener("scroll", onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});

import ImgLogoForm from "src/public/img/JSlogo.png";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
  drawer.value = false;
};

</script>

<style lang="scss">
.q-page-container {
  padding-top: 0 !important;
}

/* Transição suave na mudança de cor da navbar (transparente ↔ scroll) */
.navbar-transition.q-header,
.navbar-transition.q-header .q-toolbar {
  transition: background-color 0.5s ease;
}
</style>