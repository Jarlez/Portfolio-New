<template>
  <section id="aboutMe" class="q-py-xl bg-grey-10">
    <div class="container">
      <div class="section-header text-center q-mb-xl" data-aos="fade-up">
        <h2 class="text-h3 text-weight-bold text-primary q-mb-md">Sobre mim</h2>
        <p class="text-h6 text-grey-4">
          Leia abaixo uma breve descrição. Para mais detalhes acesse meu
          <a href="https://www.linkedin.com/in/jarlessayhare7/" target="_blank" class="text-primary">LinkedIn</a>
        </p>
      </div>
      <div class="row items-center q-col-gutter-xl justify-center q-my-xl">
        <div class="col-12 col-md-5 flex justify-center" data-aos="fade-right">
          <q-img src="src/public/img/profile.png" alt="Jarles Sayhare" />
        </div>
        <div class="col-12 col-md-6" data-aos="fade-left">
          <div class="text-h5 text-weight-bold text-primary q-mb-lg">Quem sou?</div>
          <div class="text-h4 text-white q-mb-sm">Jarles Sayhare</div>
          <div class="text-h6 text-grey-4 q-mb-md">Desenvolvedor Front-end & UI/UX</div>
          <div class="text-body1 text-grey-5">
           Olá, sou Jarles Sayhare, <span class="text-bold text-white"> Desenvolvedor Front-end </span> especializado em <span class="text-bold text-white">Vue.js</span> e <span class="text-bold text-white">Quasar Framework</span>. Tenho formação em desenvolvimento full-stack, e meu foco principal é na criação de interfaces web modernas, eficientes e responsivas. Com experiência também em <span class="text-bold text-white">Design gráfico</span> e <span class="text-bold text-white"> UI/UX </span>, trago uma visão completa para a entrega de soluções centradas no usuário. Atualmente, estou aprofundando meus conhecimentos em testes de software, buscando elevar a qualidade e a usabilidade dos projetos que desenvolvo.
          </div>
          <q-btn
            label="Currículo"
            color="primary"
            outline
            no-caps
            rounded
            class="q-mt-lg q-px-lg"
            href="src/public/download/jarles-curriculo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            icon="description"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped lang="scss">

a {
  text-decoration: none;
}
</style>
