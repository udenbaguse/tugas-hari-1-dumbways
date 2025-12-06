export let selectedImage = "";

export function handleFormSubmit(projects, renderProjects, selectedImage) {
  const submitBtn = document.getElementById("submitBtn");
  const uploadImage = document.getElementById("uploadImage");

  uploadImage.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      selectedImage = URL.createObjectURL(file);
    }
  });

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
    } else {
      alert("Data project berhasil ditambahkan!");
    }

    const id = projects.length + 1;
    // Create object
    const newProjectObject = {
      id,
      name: projectName,
      startDate,
      endDate,
      description,
      technologies,
      image: selectedImage,
    };

    console.log("Data Proyek Baru:", newProjectObject);

    projects.push(newProjectObject);
    renderProjects(projects, document.getElementById("root"));

    // local storage
    localStorage.setItem("projects", JSON.stringify(projects));

    // Reset form
    document.getElementById("projectName").value = "";
    document.getElementById("startDate").value = "";
    document.getElementById("endDate").value = "";
    document.getElementById("description").value = "";
    document
      .querySelectorAll(".tech-checkbox")
      .forEach((c) => (c.checked = false));
    uploadImage.value = "";
  });
}