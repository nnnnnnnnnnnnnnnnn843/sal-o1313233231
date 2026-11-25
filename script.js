const services = [
  {
    id: 'corte-cronograma',
    name: 'Corte Cronograma',
    price: 'R$ 80',
    duration: '1h',
    icon: '✂️',
    accent: '#fa9481',
    description: 'Corte com cronograma capilar em 3 etapas: nutrição, reconstrução e nutrição.'
  },
  {
    id: 'progressiva',
    name: 'Progressiva',
    price: 'R$ 120',
    duration: '2h',
    icon: '✨',
    accent: '#c394cb',
    description: 'Alinhamento dos fios para um cabelo mais liso, leve e com brilho.'
  },
  {
    id: 'botox',
    name: 'Botox Capilar',
    price: 'R$ 100',
    duration: '1h30',
    icon: '💆',
    accent: '#69c7be',
    description: 'Tratamento para hidratar, alinhar e deixar os fios mais macios.'
  },
  {
    id: 'penteados',
    name: 'Penteados',
    price: 'R$ 65',
    duration: '45 min',
    icon: '🎀',
    accent: '#fcd770',
    description: 'Penteados para deixar o visual ainda mais bonito em qualquer ocasião.'
  },
  {
    id: 'trancas',
    name: 'Tranças',
    price: 'R$ 70',
    duration: '1h',
    icon: '🪮',
    accent: '#fa9481',
    description: 'Tranças criativas e estilosas para diferentes ocasiões.'
  },
  {
    id: 'lavagem',
    name: 'Lavagem',
    price: 'R$ 35',
    duration: '30 min',
    icon: '🫧',
    accent: '#69c7be',
    description: 'Lavagem completa dos cabelos com cuidado e delicadeza.'
  },
  {
    id: 'escova',
    name: 'Escova',
    price: 'R$ 60',
    duration: '40 min',
    icon: '💇',
    accent: '#c394cb',
    description: 'Escova para deixar os cabelos alinhados, leves e bem finalizados.'
  }
];


const professionals = [
  {
    name: 'Ana Clara',
    role: 'Especialista em beleza infantil',
    emoji: '👩🏻‍🎨',
    a: '#fcd770',
    b: '#fa9481',
    tags: ['Cortes', 'Penteados', 'Tranças']
  },
  {
    name: 'Carlos Henrique',
    role: 'Cabeleireiro',
    emoji: '💇🏻‍♂️',
    a: '#69c7be',
    b: '#fcd770',
    tags: ['Progressiva', 'Botox', 'Escova']
  }
];


/* =========================
   RENDERIZAR SERVIÇOS
========================= */

function renderServices() {
  const serviceGrid = document.querySelector('#services-grid');

  if (!serviceGrid) return;

  serviceGrid.innerHTML = services.map(service => `
    <article class="service-card" style="--accent:${service.accent}">
      
      <div class="service-icon">
        ${service.icon}
      </div>

      <h3>${service.name}</h3>

      <p>
        ${service.description}
      </p>

      <div class="service-info">
        <span>${service.duration}</span>
        <strong>${service.price}</strong>
      </div>

    </article>
  `).join('');
}


/* =========================
   RENDERIZAR PROFISSIONAIS
========================= */

function renderProfessionals() {
  const professionalGrid =
    document.querySelector('#professionals-grid');

  if (!professionalGrid) return;

  professionalGrid.innerHTML = professionals.map(professional => `
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
            <span>${tag}</span>
          `).join('')}
        </div>

      </div>

    </article>
  `).join('');
}


/* =========================
   PREENCHER AGENDAMENTO
========================= */

function populateAppointment() {

  const serviceSelect =
    document.querySelector('#service');

  const professionalSelect =
    document.querySelector('#professional');


  /* Serviços */

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


  /* Profissionais */

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
   VALIDAR DATA
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


    /* Verificação */

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


    /* Encontrar serviço */

    const selectedService =
      services.find(service =>
        service.id === serviceId
      );


    /* Encontrar profissional */

    const selectedProfessional =
      professionals.find(person =>
        person.name === professional
      );


    /* Data formatada */

    const formattedDate =
      date.split('-').reverse().join('/');


    /* Mostrar confirmação */

    const confirmation =
      document.querySelector('#confirmation');

    if (confirmation) {

      confirmation.hidden = false;

      confirmation.innerHTML = `
        <div class="confirmation-content">

          <h3>🎉 Agendamento solicitado!</h3>

          <p>
            Obrigado, <strong>${name}</strong>!
          </p>

          <p>
            Seu horário foi solicitado com os seguintes dados:
          </p>

          <div class="confirmation-details">

            <p>
              <strong>Serviço:</strong>
              ${selectedService?.name || serviceId}
            </p>

            <p>
              <strong>Profissional:</strong>
              ${selectedProfessional?.name || professional}
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
        `Serviço: ${selectedService?.name || serviceId}\n` +
        `Profissional: ${professional}\n` +
        `Data: ${formattedDate}\n` +
        `Horário: ${time}`
      );

    }

    /* Limpar formulário */

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


  /* Fecha o menu ao clicar em um link */

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
  O Instagram fica no index.html.

  Para colocar como atalho no menu,
  você pode adicionar:

  <a
    href="https://www.instagram.com/pentepula/"
    target="_blank"
  >
    Instagram
  </a>
*/


/* =========================
   INICIAR SITE
========================= */

document.addEventListener('DOMContentLoaded', function() {

  renderServices();

  renderProfessionals();

  populateAppointment();

  setupDateValidation();

  setupBooking();

  setupMobileMenu();

});
