const ICON = name => `style="--i:url(../icons/${name}.svg)"`;

// Add a project by adding an entry here.
const PROJECTS = [
  {
    id: 'fitracker',
    name: 'fitracker',
    icon: 'fitracker',
    image: 'assets/img/projects/fitracker.webp',
    alt: 'The fitracker app on a phone, adding an expense',
    desc: 'An offline-first phone app for the networth ledger you keep in Google Sheets. The sheet is the only database.',
    site: 'https://fitracker.unixwars.com',
    github: 'https://github.com/unixwars/fitracker',
  },
  {
    id: 'boutique',
    name: 'Spanish Boutique',
    icon: 'boutique',
    image: 'assets/img/projects/boutique.svg',
    alt: 'Spanish Boutique logo',
    desc: 'The teaching platform behind Spanish Boutique: students book classes, tutors run them, billing and reminders look after themselves.',
    site: 'https://spanish-boutique.com',
  },
  {
    id: 'substacker',
    name: 'substacker',
    icon: 'substacker',
    image: 'assets/img/projects/substacker.webp',
    alt: 'Substacker: your Substack workflow, streamlined',
    desc: 'Back up a Substack publication as static files, then read, search and browse it offline if you want.',
    site: 'https://unixwars.github.io/substacker',
    github: 'https://github.com/unixwars/substacker',
  },
  {
    id: 'devbox',
    name: 'devbox',
    icon: 'devbox',
    image: 'assets/img/projects/devbox.webp',
    alt: 'devbox logo',
    desc: 'One rootless-Podman devcontainer for every local project, with Claude Code inside and the keys to the castle out of the agent’s reach.',
    github: 'https://github.com/unixwars/devbox',
  },
];

const link = (href, icon, label, name) =>
  `<a class="btn" href="${href}" target="_blank" rel="noopener" aria-label="${label}: ${name}">` +
  `<span class="ico" ${ICON(icon)}></span>${label}</a>`;

function renderTiles() {
  document.getElementById('tiles').innerHTML = PROJECTS.map(p => `
    <article class="tile" id="${p.id}">
      <div class="media"><img src="${p.image}" alt="${p.alt}" loading="lazy"></div>
      <div class="body">
        <h3><img class="pico" src="assets/img/projects/${p.icon}-icon.svg" alt="" width="32" height="32">${p.name}</h3>
        <p>${p.desc}</p>
        <div class="links">
          ${p.site ? link(p.site, 'globe', 'Website', p.name) : ''}
          ${p.github ? link(p.github, 'github', 'GitHub', p.name) : ''}
        </div>
      </div>
    </article>`).join('');
}

function setupTheme() {
  const root = document.documentElement;
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    try { localStorage.setItem('uw-theme', next); } catch (e) {}
  });
}

renderTiles();
setupTheme();
document.getElementById('year').textContent = new Date().getFullYear();
