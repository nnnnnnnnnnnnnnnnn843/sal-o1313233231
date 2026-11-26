const services = [
  {
    id: 'corte-infantil',
    name: 'Corte Infantil',
    category: 'Cortes',
    price: 'R$ 25',
    duration: '40 min',
    icon: '✂️',
    accent: '#fa9481',
    description: 'Corte pensado para deixar os pequenos confortáveis e felizes.'
  },
  {
    id: 'corte-adulto',
    name: 'Corte Adulto',
    category: 'Cortes',
    price: 'R$ 45',
    duration: '50 min',
    icon: '💇',
    accent: '#c394cb',
    description: 'Corte com lavagem e finalização para mães, pais e responsáveis.'
  },
  {
    id: 'progressiva',
    name: 'Progressiva',
    category: 'Tratamentos',
    price: 'R$ 160',
    duration: '2h30',
    icon: '✨',
    accent: '#c394cb',
    description: 'Alinhamento dos fios para um cabelo mais liso e com brilho. Valor pode variar conforme o comprimento.'
  },
  {
    id: 'botox',
    name: 'Botox Capilar',
    category: 'Tratamentos',
    price: 'R$ 130',
    duration: '2h',
    icon: '💆',
    accent: '#69c7be',
    description: 'Tratamento para hidratar, alinhar e reduzir o volume dos fios.'
  },
  {
    id: 'penteados',
    name: 'Penteados',
    category: 'Beleza',
    price: 'R$ 100',
    duration: '1h',
    icon: '🎀',
    accent: '#fcd770',
    description: 'Penteados para festas, eventos e momentos especiais.'
  },
  {
    id: 'trancas',
    name: 'Tranças',
    category: 'Beleza',
    price: 'R$ 130',
    duration: '1h',
    icon: '🪮',
    accent: '#fa9481',
    description: 'Tranças criativas e estilosas para diferentes ocasiões.'
  },
  {
    id: 'lavagem',
    name: 'Lavagem',
    category: 'Cuidados',
    price: 'R$ 60',
    duration: '30 min',
    icon: '🫧',
    accent: '#69c7be',
    description: 'Lavagem completa dos cabelos com cuidado e delicadeza.'
  },
  {
    id: 'escova',
    name: 'Escova',
    category: 'Cuidados',
    price: 'R$ 60',
    duration: '50 min',
    icon: '💇',
    accent: '#c394cb',
    description: 'Escova para deixar os cabelos alinhados e bem finalizados.'
  },
  {
    id: 'cronograma',
    name: 'Cronograma',
    category: 'Cuidados',
    price: 'R$ 100',
    duration: '40 min',
    icon: '🕗​',
    accent: '#fa9481',
    description: 'Cuidados e tratamento capilar.'
  }
];

const professionals = [
  {
    name: 'Ana Clara',
    role: 'Especialista em beleza infantil',
    photo: 'assets/profissionais/ana-clara.jpg',
    a: '#fcd770',
    b: '#fa9481',
    tags: ['Corte Infantil', 'Penteados', 'Tranças']
  },
  {
    name: 'Carlos Henrique',
    role: 'Cabeleireiro',
    photo: 'assets/profissionais/carlos-henrique.jpg',
    a: '#69c7be',
    b: '#fcd770',
    tags: ['Corte Infantil', 'Corte Adulto', 'Progressiva', 'Botox', 'Penteados', 'Tranças', 'Lavagem', 'Escova']
  },
  {
    name: 'Beatriz Souza',
    role: 'Cabeleireira',
    photo: 'assets/profissionais/beatriz-souza.jpg',
    a: '#69c7be',
    b: '#c394cb',
    tags: ['Corte Infantil', 'Corte Adulto', 'Progressiva', 'Botox', 'Penteados', 'Tranças', 'Lavagem', 'Escova']
  },
  {
    name: 'Mariana Alves',
    role: 'Especialista em penteados',
    photo: 'assets/profissionais/mariana-alves.jpg',
    a: '#fa9481',
    b: '#fcd770',
    tags: ['Corte Infantil', 'Corte Adulto', 'Progressiva', 'Botox', 'Penteados', 'Tranças', 'Lavagem', 'Escova']
  },
  {
    name: 'Gabriel Martins',
    role: 'Cabeleireiro',
    photo: 'assets/profissionais/gabriel-martins.jpg',
    a: '#c394cb',
    b: '#69c7be',
    tags: ['Corte Infantil', 'Corte Adulto', 'Progressiva', 'Botox', 'Penteados', 'Tranças', 'Lavagem', 'Escova']
  },
  {
    name: 'Juliana Costa',
    role: 'Especialista em cuidados capilares',
    photo: 'assets/profissionais/juliana-costa.jpg',
    a: '#fcd770',
    b: '#69c7be',
    tags: ['Corte Infantil', 'Corte Adulto', 'Progressiva', 'Botox', 'Penteados', 'Tranças', 'Lavagem', 'Escova']
  },
  {
    name: 'Rafael Oliveira',
    role: 'Cabeleireiro',
    photo: 'assets/profissionais/rafael-oliveira.jpg',
    a: '#fa9481',
    b: '#c394cb',
    tags: ['Corte Infantil', 'Corte Adulto', 'Progressiva', 'Botox', 'Penteados', 'Tranças', 'Lavagem', 'Escova']
  },
  {
    name: 'Larissa Ferreira',
    role: 'Especialista em beleza infantil',
    photo: 'assets/profissionais/larissa-ferreira.jpg',
    a: '#69c7be',
    b: '#fa9481',
    tags: ['Corte Infantil', 'Corte Adulto', 'Progressiva', 'Botox', 'Penteados', 'Tranças', 'Lavagem', 'Escova']
  },
  {
    name: 'Pedro Henrique',
    role: 'Cabeleireiro',
    photo: 'assets/profissionais/pedro-henrique.jpg',
    a: '#c394cb',
    b: '#fcd770',
    tags: ['Corte Infantil', 'Corte Adulto', 'Progressiva', 'Botox', 'Penteados', 'Tranças', 'Lavagem', 'Escova']
  },
  {
    name: 'Camila Rodrigues',
    role: 'Especialista em penteados e tranças',
    photo: 'assets/profissionais/camila-rodrigues.jpg',
    a: '#fa9481',
    b: '#69c7be',
    tags: ['Corte Infantil', 'Corte Adulto', 'Progressiva', 'Botox', 'Penteados', 'Tranças', 'Lavagem', 'Escova']
  },
  {
    name: 'Lucas Mendes',
    role: 'Cabeleireiro',
    photo: 'assets/profissionais/lucas-mendes.jpg',
    a: '#fcd770',
    b: '#c394cb',
    tags: ['Corte Infantil', 'Corte Adulto', 'Progressiva', 'Botox', 'Penteados', 'Tranças', 'Lavagem', 'Escova']
  },
  {
    name: 'Isabela Rocha',
    role: 'Especialista em beleza',
    photo: 'assets/profissionais/isabela-rocha.jpg',
    a: '#69c7be',
    b: '#fcd770',
    tags: ['Corte Infantil', 'Corte Adulto', 'Progressiva', 'Botox', 'Penteados', 'Tranças', 'Lavagem', 'Escova']
  },
  {
    name: 'Matheus Lima',
    role: 'Cabeleireiro',
    photo: 'assets/profissionais/matheus-lima.jpg',
    a: '#c394cb',
    b: '#fa9481',
    tags: ['Corte Infantil', 'Corte Adulto', 'Progressiva', 'Botox', 'Penteados', 'Tranças', 'Lavagem', 'Escova']
  },
  {
    name: 'Sofia Martins',
    role: 'Especialista em beleza infantil',
    photo: 'assets/profissionais/sofia-martins.jpg',
    a: '#fcd770',
    b: '#69c7be',
    tags: ['Corte Infantil', 'Corte Adulto', 'Progressiva', 'Botox', 'Penteados', 'Tranças', 'Lavagem', 'Escova']
  },
  {
    name: 'Bruno Almeida',
    role: 'Cabeleireiro',
    photo: 'assets/profissionais/bruno-almeida.jpg',
    a: '#fa9481',
    b: '#c394cb',
    tags: ['Corte Infantil', 'Corte Adulto', 'Progressiva', 'Botox', 'Penteados', 'Tranças', 'Lavagem', 'Escova']
  }
];

function renderServices() {
  const serviceGrid = document.querySelector('#services-grid');
  if (!serviceGrid) return;

  const categories = [
    { id: 'Cortes', icon: '✂️', subtitle: 'Para crianças e adultos' },
    { id: 'Tratamentos', icon: '✨', subtitle: 'Cuidados especiais para os cabelos' },
    { id: 'Beleza', icon: '🎀', subtitle: 'Produções para todos os momentos' },
    { id: 'Cuidados', icon: '🫧', subtitle: 'Finalização e cuidados dos fios' }
  ];

  serviceGrid.innerHTML = categories.map(category => {
    const categoryServices = services.filter(
      service => service.category === category.id
    );

    return `
      <div class="service-category">
        <div class="category-title">
          <span>${category.icon}</span>
          <div>
            <h3>${category.id}</h3>
            <p>${category.subtitle}</p>
          </div>
        </div>

        <div class="card-grid">
          ${categoryServices.map(createServiceCard).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function createServiceCard(service) {
  return `
    <article class="service-card" style="--accent:${service.accent}">
      <div class="service-icon">${service.icon}</div>
      <h3>${service.name}</h3>
      <p>${service.description}</p>
      <div class="service-info">
        <span>${service.duration}</span>
        <strong>${service.price}</strong>
      </div>
    </article>
  `;
}

function renderProfessionals() {
  const professionalGrid = document.querySelector('#professionals-grid');
  if (!professionalGrid) return;

  professionalGrid.innerHTML = professionals.map(professional => `
    <article class="professional-card">
      <div
        class="professional-avatar"
        style="background: linear-gradient(135deg, ${professional.a}, ${professional.b});"
      >
        <img
          src="${professional.photo}"
          alt="Foto de ${professional.name}"
          onerror="this.style.display='none'; this.parentElement.classList.add('no-photo');"
        >
      </div>

      <div class="professional-info">
        <h3>${professional.name}</h3>
        <p>${professional.role}</p>

        <div class="professional-tags">
          ${professional.tags.map(tag => `<span>${tag}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');
}

function populateAppointment() {
  const serviceSelect = document.querySelector('#service');
  const professionalSelect = document.querySelector('#professional');

  if (serviceSelect) {
    serviceSelect.innerHTML = `
      <option value="">Escolha um serviço</option>
      ${services.map(service => `
        <option value="${service.id}">
          ${service.name} — ${service.price}
        </option>
      `).join('')}
    `;
  }

  if (professionalSelect) {
    professionalSelect.innerHTML = `
      <option value="">Escolha um profissional</option>
      ${professionals.map(professional => `
        <option value="${professional.name}">
          ${professional.name}
        </option>
      `).join('')}
    `;
  }
}

function setupDateValidation() {
  const dateInput = document.querySelector('#date');
  if (!dateInput) return;

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  dateInput.min = `${year}-${month}-${day}`;
}

function setupBooking() {
  const form = document.querySelector('#booking-form');
  if (!form) return;

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.querySelector('#name')?.value.trim();
    const whatsapp = document.querySelector('#whatsapp')?.value.trim();
    const email = document.querySelector('#email')?.value.trim();
    const serviceId = document.querySelector('#service')?.value;
    const professional = document.querySelector('#professional')?.value;
    const date = document.querySelector('#date')?.value;
    const time = document.querySelector('#time')?.value;

    if (!name || !whatsapp || !serviceId || !professional || !date || !time) {
      alert('Preencha todos os campos obrigatórios para realizar o agendamento.');
      return;
    }

    const selectedService = services.find(service => service.id === serviceId);
    const formattedDate = date.split('-').reverse().join('/');
    const confirmation = document.querySelector('#confirmation');

    if (confirmation) {
      confirmation.hidden = false;
      confirmation.innerHTML = `
        <div class="confirmation-content">
          <h3>🎉 Agendamento solicitado!</h3>
          <p>Obrigado, <strong>${name}</strong>!</p>

          <div class="confirmation-details">
            <p><strong>Serviço:</strong> ${selectedService?.name || serviceId}</p>
            <p><strong>Profissional:</strong> ${professional}</p>
            <p><strong>Data:</strong> ${formattedDate}</p>
            <p><strong>Horário:</strong> ${time}</p>
            <p><strong>WhatsApp:</strong> ${whatsapp}</p>
            ${email ? `<p><strong>E-mail:</strong> ${email}</p>` : ''}
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

    form.reset();
  });
}

function setupMobileMenu() {
  const menuButton = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav');

  if (!menuButton || !nav) return;

  menuButton.addEventListener('click', function() {
    const isOpen = nav.classList.toggle('open');

    menuButton.setAttribute(
      'aria-expanded',
      isOpen ? 'true' : 'false'
    );
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  renderServices();
  renderProfessionals();
  populateAppointment();
  setupDateValidation();
  setupBooking();
  setupMobileMenu();
});
