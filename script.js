// ====== EDIT THESE LINKS ======
// Paste the real URLs between the quotes. Empty = the button/link stays hidden.
const LINKS = {
  rag: "https://github.com/Kumari-Anjali-12/hhg-voice-rag",        // GitHub: voice RAG
  ragPost: "https://lnkd.in/p/dS8VsZgC",                           // LinkedIn post: voice RAG / HH Goa
  facechain: "https://github.com/Kumari-Anjali-12/FaceTheChain",   // GitHub: FaceTheChain
  sih2026: "https://lnkd.in/p/dGgwpqpM",                           // LinkedIn post: SIH 2026
  medscribe: "https://github.com/Kumari-Anjali-12/MedScribeAI",   // GitHub: MedScribeAI (private, ongoing)
  mhm: "https://github.com/Kumari-Anjali-12/mental-health-mirror",  // GitHub: Mental Health Mirror
  resume: ""                                                       // e.g. "resume.pdf" (button hidden while empty)
};
// ==============================

const CERTS = [{"t": "Getting Started with Linux Fundamentals (RH104)", "c": "redhat", "u": "https://www.linkedin.com/posts/anjali-kumari-ab0300292_getting-started-with-linux-fundamentals-activity-7387329510574268416-x7sj"}, {"t": "Introduction to OpenShift Applications (DO101)", "c": "redhat", "u": "https://www.linkedin.com/posts/anjali-kumari-ab0300292_introduction-to-openshift-applications-do101-activity-7387691896208384000-uhY3"}, {"t": "Red Hat System Administration I (RH124)", "c": "redhat", "u": "https://www.linkedin.com/posts/anjali-kumari-ab0300292_red-hat-system-administration-i-rh124-activity-7388054273890316288-Jz10"}, {"t": "Red Hat System Administration II (RH134)", "c": "redhat", "u": "https://www.linkedin.com/posts/anjali-kumari-ab0300292_red-hat-system-administration-ii-rh134-activity-7388416658920521728-9sDf"}, {"t": "Red Hat Application Development I: Java EE (AD183)", "c": "redhat", "u": ""}, {"t": "AWS Academy Graduate – Cloud Foundations", "c": "aws", "u": "https://www.linkedin.com/posts/anjali-kumari-ab0300292_aws-academy-graduate-cloud-foundations-activity-7388779064683241472-eBTl"}, {"t": "AWS Academy Graduate – Cloud Architecting", "c": "aws", "u": "https://www.linkedin.com/posts/anjali-kumari-ab0300292_aws-academy-graduate-cloud-architecting-activity-7389141488007315456-a4D5"}, {"t": "Agile Project Management (Google / Coursera)", "c": "agile", "u": "https://www.linkedin.com/posts/anjali-kumari-ab0300292_agile-project-management-activity-7384634236076486657-l-NU"}, {"t": "Agile with Atlassian Jira (Atlassian / Coursera)", "c": "agile", "u": ""}, {"t": "Blockchain Basics (SUNY)", "c": "blockchain", "u": "https://www.linkedin.com/posts/anjali-kumari-ab0300292_blockchain-smartcontracts-dapps-activity-7384838103364014081-fVOc"}, {"t": "Smart Contracts (SUNY)", "c": "blockchain", "u": "https://www.linkedin.com/posts/anjali-kumari-ab0300292_blockchain-smartcontracts-dapps-activity-7384838103364014081-fVOc"}, {"t": "Decentralized Applications (DApps) (SUNY)", "c": "blockchain", "u": "https://www.linkedin.com/posts/anjali-kumari-ab0300292_blockchain-smartcontracts-dapps-activity-7384838103364014081-fVOc"}, {"t": "Blockchain Platforms (SUNY)", "c": "blockchain", "u": "https://www.linkedin.com/posts/anjali-kumari-ab0300292_blockchain-smartcontracts-dapps-activity-7384838103364014081-fVOc"}, {"t": "Blockchain Specialization Certificate (SUNY)", "c": "blockchain", "u": "https://www.linkedin.com/posts/anjali-kumari-ab0300292_blockchain-smartcontracts-dapps-activity-7384838103364014081-fVOc"}];
const LABEL = {redhat:"Red Hat",aws:"AWS",agile:"Agile",blockchain:"Blockchain",ai:"AI"};

document.querySelectorAll('[data-link]').forEach(el => {
  const url = LINKS[el.dataset.link];
  if (url) { el.href = url; el.hidden = false; }
  else if (el.tagName === 'A' && !el.classList.contains('link')) { el.removeAttribute('href'); }
});

const certBox = document.getElementById('certs');
certBox.innerHTML = CERTS.map(c => {
  const tag = c.u ? 'a' : 'div';
  const href = c.u ? ` href="${c.u}" target="_blank"` : '';
  return `<${tag} class="card cert" data-c="${c.c}"${href}><small>${LABEL[c.c]}</small><h3>${c.t}</h3></${tag}>`;
}).join('');

document.querySelectorAll('.filters').forEach(box => {
  const items = () => document.querySelectorAll('#' + box.dataset.target + ' > [data-c]');
  box.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    box.querySelectorAll('button').forEach(x => x.classList.toggle('active', x === b));
    items().forEach(i => i.hidden = !(b.dataset.f === 'all' || i.dataset.c === b.dataset.f));
  });
});

const menuBtn = document.querySelector('.menu-btn'), nav = document.querySelector('nav');
menuBtn.addEventListener('click', () => menuBtn.setAttribute('aria-expanded', nav.classList.toggle('open')));
nav.addEventListener('click', e => { if (e.target.tagName === 'A') nav.classList.remove('open'); });

document.getElementById('yr').textContent = new Date().getFullYear();

const els = document.querySelectorAll('.card, .t-item');
els.forEach(el => el.classList.add('reveal'));
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), {threshold: .08});
  els.forEach(el => io.observe(el));
} else els.forEach(el => el.classList.add('in'));

// ---- scroll progress bar ----
const bar = document.getElementById('bar');
addEventListener('scroll', () => {
  const h = document.documentElement;
  bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
}, {passive: true});

// ---- typing role line ----
const roleEl = document.getElementById('role');
const roles = ['Odoo & AI Developer', 'Custom Odoo 19 Builder', 'Applied AI Engineer'];
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let r = 0, i = roles[0].length, del = true, hold = 20;
  setInterval(() => {
    if (hold > 0) { hold--; return; }
    i += del ? -1 : 1;
    roleEl.textContent = roles[r].slice(0, i);
    if (del && i === 0) { del = false; r = (r + 1) % roles.length; }
    else if (!del && i === roles[r].length) { del = true; hold = 20; }
  }, 90);
}

// ---- count-up stats ----
document.querySelectorAll('[data-n]').forEach(el => {
  const end = +el.dataset.n; let n = 0;
  const t = setInterval(() => { n++; el.textContent = n; if (n >= end) clearInterval(t); }, 90);
});
