<template>
  <section id="contact" class="section-contact q-py-xl">
    <div class="container">
      <div class="section-header text-center q-mb-xl" data-aos="fade-up">
        <h2 class="text-h3 text-weight-bold text-primary q-mb-md">Contato</h2>
        <p class="text-h6 text-grey-4">
          Entre em contato e tire suas dúvidas
        </p>
      </div>
      <div class="row q-col-gutter-lg justify-center">
        <div class="col-12 col-sm-6 col-md-4" data-aos="fade-up">
          <a
            href="https://wa.me/5588997328109"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-card-link"
          >
            <q-card
              flat
              bordered
              class="contact-card text-center q-pa-xl full-height"
            >
              <q-icon
                name="mdi-whatsapp"
                size="56px"
                color="white"
                class="q-mb-md"
              />
              <div class="text-h6 text-weight-bold text-primary q-mb-sm">
                WhatsApp
              </div>
              <span class="text-body1 text-white contact-card-value"
                >(88) 99732-8109</span
              >
              <p class="text-caption text-grey-5 q-mt-sm q-mb-none">
                Clique para conversar
              </p>
            </q-card>
          </a>
        </div>
        <div class="col-12 col-sm-6 col-md-4" data-aos="fade-up" data-aos-delay="100">
          <a href="mailto:jarlesdev@outlook.com" class="contact-card-link">
            <q-card
              flat
              bordered
              class="contact-card text-center q-pa-xl full-height"
            >
              <q-icon
                name="mdi-email"
                size="56px"
                color="white"
                class="q-mb-md"
              />
              <div class="text-h6 text-weight-bold text-primary q-mb-sm">
                E-mail
              </div>
              <span class="text-body1 text-white contact-card-value"
                >jarlesdev@outlook.com</span
              >
              <p class="text-caption text-grey-5 q-mt-sm q-mb-none">
                Clique para enviar
              </p>
            </q-card>
          </a>
        </div>
        <div class="col-12 col-sm-6 col-md-4" data-aos="fade-up" data-aos-delay="200">
          <a
            href="https://www.linkedin.com/in/jarlessayhare7/"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-card-link"
          >
            <q-card
              flat
              bordered
              class="contact-card text-center q-pa-xl full-height"
            >
              <q-icon
                name="mdi-linkedin  "
                size="56px"
                color="white"
                class="q-mb-md"
              />
              <div class="text-h6 text-weight-bold text-primary q-mb-sm">
                LinkedIn
              </div>
              <span class="text-body1 text-white contact-card-value"
                >Jarles Sayhare</span
              >
              <p class="text-caption text-grey-5 q-mt-sm q-mb-none">
                Clique para acessar
              </p>
            </q-card>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped lang="scss">
.section-contact {
  background: #111;
}

.contact-card-link,
.contact-card-wrapper {
  display: block;
  text-decoration: none;
  color: inherit;
}

.contact-card {
  border-radius: 20px;
  transition: transform 0.25s ease, box-shadow 0.25s ease,
    border-color 0.25s ease;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #1e1e1e;
}

.contact-card-link:hover .contact-card,
.contact-card-wrapper:hover .contact-card {
  transform: translateY(-6px);
  border-color: var(--q-primary);
  box-shadow: 0 14px 32px rgba(0, 255, 255, 0.18);
}

.contact-card-value {
  transition: opacity 0.2s ease;
}

.contact-card-link:hover .contact-card-value {
  opacity: 0.9;
}
</style>
