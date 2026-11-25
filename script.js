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
    role: 'Especialista em beleza',
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

const serviceGrid = document.querySelector('#serviceGrid');
const professionalGrid = document.querySelector('#professionalGrid');
const serviceSelect = document.querySelector('#serviceSelect');
const professionalSelect = document.querySelector('#professionalSelect');

function renderServices() {
  if (!serviceGrid) return;

  serviceGrid.innerHTML = services.map(service => `
    <article class="service-card" style="--accent:${service.accent}">
      <div class="service-icon">${service.icon}</div>
      <h3>${service.name}</h3>
      <p>${service.description}</p>

      <div class="service-info">
        <span>${service.duration}</span>
        <strong>${service.price}</strong>
      </div>
    </article>
  `).join('');
}

function renderProfessionals() {
  if (!professionalGrid) return;

  professionalGrid.innerHTML = professionals.map(professional => `
    <article class="professional-card">
      <div
        class="professional-avatar"
        style="background: linear-gradient(135deg, ${professional.a}, ${professional.b})"
      >
        ${professional.emoji}
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
  const form = document.querySelector('#bookingForm');

  if (!form) return;

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.querySelector('#name')?.value.trim();
    const service = document.querySelector('#serviceSelect')?.value;
    const professional = document.querySelector('#professionalSelect')?.value;
    const date = document.querySelector('#date')?.value;
    const time = document.querySelector('#time')?.value;

    if (!name || !service || !professional || !date || !time) {
      alert('Preencha todos os campos para realizar o agendamento.');
      return;
    }

    const selectedService = services.find(item => item.id === service);

    alert(
      `Agendamento solicitado com sucesso!\n\n` +
      `Nome: ${name}\n` +
      `Serviço: ${selectedService?.name || service}\n` +
      `Profissional: ${professional}\n` +
      `Data: ${date}\n` +
      `Horário: ${time}`
    );

    form.reset();
  });
}

function setupMobileMenu() {
  const menuButton = document.querySelector('#menuButton');
  const nav = document.querySelector('#mainNav');

  if (!menuButton || !nav) return;

  menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
}

renderServices();
renderProfessionals();
populateAppointment();
setupDateValidation();
setupBooking();
setupMobileMenu();
