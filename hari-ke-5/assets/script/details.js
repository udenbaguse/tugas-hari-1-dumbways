// Mendapatkan ID proyek dari URL
const urlParams = new URLSearchParams(window.location.search);
const projectId = parseInt(urlParams.get("id"));

// Mendapatkan proyek dari local storage
let projects = JSON.parse(localStorage.getItem("projects")) || [];

// Mencari proyek berdasarkan ID
const project = projects.find((p) => p.id === projectId);

// Validasi: proyek ditemukan?
if (!project) {
  document.getElementById("projectTitle").textContent = "Project Not Found";
  throw new Error("Project not found!");
}

// Fungsi untuk memformat tanggal
function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

// Fungsi untuk menghitung durasi
function calculateDuration(start, end) {
  const s = new Date(start);
  const e = new Date(end);
  const diff = e - s;
  const day = diff / (1000 * 60 * 60 * 24);
  return `${day} days`;
}

// Memasukkan data ke dokumen HTML
document.getElementById("projectTitle").textContent = project.name;
document.getElementById("projectImage").src = project.image;
document.getElementById("projectDate").textContent = `${formatDate(
  project.startDate
)} - ${formatDate(project.endDate)}`;
document.getElementById("projectDuration").textContent = calculateDuration(
  project.startDate,
  project.endDate
);
document.getElementById("projectDescription").textContent = project.description;

// Merender Teknologi
document.getElementById("techList").innerHTML = project.technologies
  .map((t) => `<span class="badge text-bg-primary me-2">${t}</span>`)
  .join("");