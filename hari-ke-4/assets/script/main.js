let projects = [
  {
    name: "DocLab",
    startDate: "2023-01-01",
    endDate: "2023-01-31",
    description:
      "Doclab adalah aplikasi untuk menemukan doctor terdekat dan membuat janji secara online.",
    technologies: ["Node Js", "React Js"],
    image:
      "assets/images/doclab.png",
  },
  {
    name: "CozyNestt",
    startDate: "2023-02-01",
    endDate: "2023-02-28",
    description:
      "aplikasi e-commerce untuk fashion yang dibuat secara tradisional dengan tampilan kekinian.",
    technologies: ["Next Js", "TypeScript"],
    image:
      "assets/images/cozynestt-ecommerce.png",
  },
  {
    name: "Grilli",
    startDate: "2023-03-01",
    endDate: "2023-03-31",
    description:
      "restaurant website dengan menu makanan & minuman tradsional yang resepnya diinovasikan dengan cita rasa modern",
    technologies: ["Node Js", "TypeScript"],
    image:
     "assets/images/grilli-restaurant.png",
  },
  {
    name: "Travella",
    startDate: "2023-04-01",
    endDate: "2023-04-30",
    description:
      "Travella adalah aplikasi travel yang menyediakan berbagai paket wisata menarik",
    technologies: ["React Js"],
    image:
      "assets/images/travella.png",
  },
  {
    name: "Wealth Home",
    startDate: "2023-05-01",
    endDate: "2023-05-31",
    description:
      "Wealth Home adalah platform real estate yang memudahkan pengguna dalam mencari dan membeli properti impian mereka.",
    technologies: ["Node Js", "Next Js", "React Js", "TypeScript"],
    image:
     "assets/images/wealth-home-real-estate.png",
  },
];

// DOM Elements
const projectsContainer = document.getElementById("root");
const submitBtn = document.getElementById("submitBtn");
const uploadImage = document.getElementById("uploadImage");

let selectedImage = "";

// Render project cards
function renderProjects() {
  projectsContainer.innerHTML = "";

  projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "col-12 col-md-4 mb-4";

    card.innerHTML = `
            <div class="card bg-dark border-light">
                <img src="${
                  project.image
                }" class="card-img-top" style="height:200px; object-fit:cover;">
                <div class="card-body text-light">
                    <h5 class="card-title">${project.name}</h5>
                    <p class="card-text small text-muted">
                        ${new Date(project.startDate).toLocaleDateString(
                          "id-ID"
                        )} -
                        ${new Date(project.endDate).toLocaleDateString("id-ID")}
                    </p>
                    <p class="card-text">${project.description}</p>
                    <p class="card-text small">Technologies: ${project.technologies.join(
                      ", "
                    )}</p>
                    <a href="#" class="btn btn-secondary btn-sm">Edit</a>
                    <a href="#" class="btn btn-danger btn-sm">Delete</a>
                </div>
            </div>
        `;

    projectsContainer.appendChild(card);
  });
}
  renderProjects();
  
// Handle image upload
uploadImage.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    selectedImage = URL.createObjectURL(file);
  }
});

// Submit form
submitBtn.addEventListener("click", () => {
  const projectName = document.getElementById("projectName").value.trim();
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;
  const description = document.getElementById("description").value.trim();
  const technologies = [
    ...document.querySelectorAll(".tech-checkbox:checked"),
  ].map((checkbox) => checkbox.value);

  // Validation
  if (!projectName || !startDate || !endDate || technologies.length === 0) {
    alert(
      "Formnya diisi semua yaa, minimal harus ada nama project, tanggal mulai, tanggal selesai, dan teknologi yang digunakan lah Boss!"
    );
    return;
  }

  // Create object
  const newProjectObject = {
    name: projectName,
    startDate,
    endDate,
    description: description || "Tidak ada deskripsi",
    technologies,
    image: selectedImage || "https://via.placeholder.com/300x200",
  };

  console.log("Data Proyek Baru:", newProjectObject);
  alert("Project added succesfully!");

  projects.push(newProjectObject);
  renderProjects();

  // Reset form
  document.getElementById("projectName").value = "";
  document.getElementById("startDate").value = "";
  document.getElementById("endDate").value = "";
  document.getElementById("description").value = "";
  document
    .querySelectorAll(".tech-checkbox")
    .forEach((c) => (c.checked = false));
  uploadImage.value = "";
  selectedImage = "";
});

// Initial render






