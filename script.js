const services = [
  {
    id: 'corte-infantil',
    name: 'Corte Infantil',
    category: 'Cortes',
    price: 'R$ 50',
    duration: '40 min',
    icon: '✂️',
    accent: '#fa9481',
    description: 'Corte pensado para deixar os pequenos confortáveis e felizes.'
  },

  {
    id: 'corte-adulto',
    name: 'Corte Adulto',
    category: 'Cortes',
    price: 'R$ 80',
    duration: '50 min',
    icon: '💇',
    accent: '#c394cb',
    description: 'Corte com lavagem e finalização para mães, pais e responsáveis.'
  },

  {
    id: 'progressiva',
    name: 'Progressiva',
    category: 'Tratamentos',
    price: 'R$ 180',
    duration: '2h30',
    icon: '✨',
    accent: '#c394cb',
    description: 'Alinhamento dos fios para um cabelo mais liso e com brilho. Valor pode variar conforme o comprimento.'
  },

  {
    id: 'botox',
    name: 'Botox Capilar',
    category: 'Tratamentos',
    price: 'R$ 150',
    duration: '2h',
    icon: '💆',
    accent: '#69c7be',
    description: 'Tratamento para hidratar, alinhar e reduzir o volume dos fios.'
  },

  {
    id: 'penteados',
    name: 'Penteados',
    category: 'Beleza',
    price: 'R$ 80',
    duration: '1h',
    icon: '🎀',
    accent: '#fcd770',
    description: 'Penteados para festas, eventos e momentos especiais.'
  },

  {
    id: 'trancas',
    name: 'Tranças',
    category: 'Beleza',
    price: 'R$ 70',
    duration: '1h',
    icon: '🪮',
    accent: '#fa9481',
    description: 'Tranças criativas e estilosas para diferentes ocasiões.'
  },

  {
    id: 'lavagem',
    name: 'Lavagem',
    category: 'Cuidados',
    price: 'R$ 35',
    duration: '30 min',
    icon: '🫧',
    accent: '#69c7be',
    description: 'Lavagem completa dos cabelos com cuidado e delicadeza.'
  },

  {
    id: 'escova',
    name: 'Escova',
    category: 'Cuidados',
    price: 'R$ 70',
    duration: '50 min',
    icon: '💇',
    accent: '#c394cb',
    description: 'Escova para deixar os cabelos alinhados e bem finalizados.'
  }
];


const professionals = [
  {
    name: 'Ana Clara',
    role: 'Especialista em beleza infantil',
    emoji: '👩🏻‍🎨',
    a: '#fcd770',
    b: '#fa9481',
    tags: ['Corte Infantil', 'Penteados', 'Tranças']
  },

  {
    name: 'Carlos Henrique',
    role: 'Cabeleireiro',
    emoji: '💇🏻‍♂️',
    a: '#69c7be',
    b: '#fcd770',
    tags: ['Corte Adulto', 'Progressiva', 'Botox', 'Escova']
  }
];


/* =========================
   SERVIÇOS
========================= */

function renderServices() {

  const serviceGrid =
    document.querySelector('#services-grid');

  if (!serviceGrid) return;


  serviceGrid.innerHTML = `

    <div class="service-category">

      <div class="category-title">
        <span>✂️</span>
        <div>
          <h3>Cortes</h3>
          <p>Para crianças e adultos</p>
        </div>
      </div>

      <div class="card-grid">
        ${services
          .filter(service => service.category === 'Cortes')
          .map(createServiceCard)
          .join('')}
      </div>

    </div>


    <div class="service-category">

      <div class="category-title">
        <span>✨</span>
        <div>
          <h3>Tratamentos</h3>
          <p>Cuidados especiais para os cabelos</p>
        </div>
      </div>

      <div class="card-grid">
        ${services
          .filter(service => service.category === 'Tratamentos')
          .map(createServiceCard)
          .join('')}
      </div>

    </div>


    <div class="service-category">

      <div class="category-title">
        <span>🎀</span>
        <div>
          <h3>Beleza</h3>
          <p>Produções para todos os momentos</p>
        </div>
      </div>

      <div class="card-grid">
        ${services
          .filter(service => service.category === 'Beleza')
          .map(createServiceCard)
          .join('')}
      </div>

    </div>


    <div class="service-category">

      <div class="category-title">
        <span>🫧</span>
        <div>
          <h3>Cuidados</h3>
          <p>Finalização e cuidados dos fios</p>
        </div>
      </div>

      <div class="card-grid">
        ${services
          .filter(service => service.category === 'Cuidados')
          .map(createServiceCard)
          .join('')}
      </div>

    </div>

  `;
}


/* =========================
   CARD DE SERVIÇO
========================= */

function createServiceCard(service) {

  return `

    <article
      class="service-card"
      style="--accent:${service.accent}"
    >

      <div class="service-icon">
        ${service.icon}
      </div>

      <h3>
        ${service.name}
      </h3>

      <p>
        ${service.description}
      </p>

      <div class="service-info">

        <span>
          ${service.duration}
        </span>

        <strong>
          ${service.price}
        </strong>

      </div>

    </article>

  `;
}


/* =========================
   PROFISSIONAIS
========================= */

function renderProfessionals() {

  const professionalGrid =
    document.querySelector('#professionals-grid');

  if (!professionalGrid) return;


  professionalGrid.innerHTML =
    professionals.map(professional => `

      <article class="professional-card">

        <div
          class="professional-avatar"
          style="
            background: linear-gradient(
              135deg,
              ${professional.a},
              ${professional.b}
            );
          "
        >
          ${professional.emoji}
        </div>


        <div class="professional-info">

          <h3>
            ${professional.name}
          </h3>

          <p>
            ${professional.role}
          </p>


          <div class="professional-tags">

            ${professional.tags.map(tag => `
              <span>
                ${tag}
              </span>
            `).join('')}

          </div>

        </div>

      </article>

    `).join('');
}


/* =========================
   AGENDAMENTO
========================= */

function populateAppointment() {

  const serviceSelect =
    document.querySelector('#service');

  const professionalSelect =
    document.querySelector('#professional');


  /* SERVIÇOS */

  if (serviceSelect) {

    serviceSelect.innerHTML = `

      <option value="">
        Escolha um serviço
      </option>

      ${services.map(service => `

        <option value="${service.id}">
          ${service.name} — ${service.price}
        </option>

      `).join('')}

    `;
  }


  /* PROFISSIONAIS */

  if (professionalSelect) {

    professionalSelect.innerHTML = `

      <option value="">
        Escolha um profissional
      </option>

      ${professionals.map(professional => `

        <option value="${professional.name}">
          ${professional.name}
        </option>

      `).join('')}

    `;
  }
}


/* =========================
   DATA
========================= */

function setupDateValidation() {

  const dateInput =
    document.querySelector('#date');

  if (!dateInput) return;


  const today = new Date();

  const year =
    today.getFullYear();

  const month =
    String(today.getMonth() + 1)
      .padStart(2, '0');

  const day =
    String(today.getDate())
      .padStart(2, '0');


  dateInput.min =
    `${year}-${month}-${day}`;
}


/* =========================
   AGENDAMENTO
========================= */

function setupBooking() {

  const form =
    document.querySelector('#booking-form');

  if (!form) return;


  form.addEventListener('submit', function(event) {

    event.preventDefault();


    const name =
      document.querySelector('#name')?.value.trim();

    const whatsapp =
      document.querySelector('#whatsapp')?.value.trim();

    const email =
      document.querySelector('#email')?.value.trim();

    const serviceId =
      document.querySelector('#service')?.value;

    const professional =
      document.querySelector('#professional')?.value;

    const date =
      document.querySelector('#date')?.value;

    const time =
      document.querySelector('#time')?.value;


    if (
      !name ||
      !whatsapp ||
      !serviceId ||
      !professional ||
      !date ||
      !time
    ) {

      alert(
        'Preencha todos os campos obrigatórios para realizar o agendamento.'
      );

      return;
    }


    const selectedService =
      services.find(service =>
        service.id === serviceId
      );


    const formattedDate =
      date.split('-').reverse().join('/');


    const confirmation =
      document.querySelector('#confirmation');


    if (confirmation) {

      confirmation.hidden = false;

      confirmation.innerHTML = `

        <div class="confirmation-content">

          <h3>
            🎉 Agendamento solicitado!
          </h3>

          <p>
            Obrigado, <strong>${name}</strong>!
          </p>

          <div class="confirmation-details">

            <p>
              <strong>Serviço:</strong>
              ${selectedService?.name}
            </p>

            <p>
              <strong>Profissional:</strong>
              ${professional}
            </p>

            <p>
              <strong>Data:</strong>
              ${formattedDate}
            </p>

            <p>
              <strong>Horário:</strong>
              ${time}
            </p>

            <p>
              <strong>WhatsApp:</strong>
              ${whatsapp}
            </p>

            ${
              email
                ? `<p><strong>E-mail:</strong> ${email}</p>`
                : ''
            }

          </div>

        </div>

      `;


      confirmation.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });

    } else {

      alert(
        `Agendamento solicitado com sucesso!\n\n` +
        `Nome: ${name}\n` +
        `Serviço: ${selectedService?.name}\n` +
        `Profissional: ${professional}\n` +
        `Data: ${formattedDate}\n` +
        `Horário: ${time}`
      );

    }


    form.reset();

  });
}


/* =========================
   MENU MOBILE
========================= */

function setupMobileMenu() {

  const menuButton =
    document.querySelector('.menu-btn');

  const nav =
    document.querySelector('.nav');

  if (!menuButton || !nav) return;


  menuButton.addEventListener('click', function() {

    const isOpen =
      nav.classList.toggle('open');

    menuButton.setAttribute(
      'aria-expanded',
      isOpen ? 'true' : 'false'
    );

  });


  nav.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', function() {

      nav.classList.remove('open');

      menuButton.setAttribute(
        'aria-expanded',
        'false'
      );

    });

  });
}


/* =========================
   INSTAGRAM
========================= */

/*
  O Instagram pode ser colocado
  no menu do index.html:

  <a
    href="https://www.instagram.com/pentepula/"
    target="_blank"
  >
    Instagram
  </a>
*/


/* =========================
   INICIAR
========================= */

document.addEventListener(
  'DOMContentLoaded',
  function() {

    renderServices();

    renderProfessionals();

    populateAppointment();

    setupDateValidation();

    setupBooking();

    setupMobileMenu();

  }
);
