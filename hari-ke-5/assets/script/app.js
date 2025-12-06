import { projects } from "./projectsData.js";
import { renderProjects } from "./render.js";
import { handleFormSubmit, selectedImage } from "./formHandler.js";

// DOM Elements
const projectsContainer = document.getElementById("root");
const uploadImage = document.getElementById("uploadImage");

// Fungsi inisialisasi untuk mengatur event listener dan render awal
function initializeApp() {
  // Render proyek awal
  renderProjects(projects, projectsContainer);

  // Menangani pengiriman formulir
  handleFormSubmit(projects, renderProjects, selectedImage);

  // (Opsional) Tambahkan event listener tambahan jika diperlukan, contoh:
  // uploadImage.addEventListener('change', handleImageUpload);
}

// Panggil fungsi inisialisasi saat dokumen selesai dimuat
document.addEventListener("DOMContentLoaded", initializeApp);