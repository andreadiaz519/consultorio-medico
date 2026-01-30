const API = "http://localhost:3000/patients";

let editId = null;
let isSaving = false;

/* ELEMENTOS */
const openFormBtn = document.getElementById("openForm");
const formSection = document.getElementById("formSection");
const saveBtn = document.getElementById("savePatient");
const cancelBtn = document.getElementById("cancel");
const patientsList = document.getElementById("patientsList");
const emptyState = document.getElementById("emptyState");
const toast = document.getElementById("toast");

/* INPUTS */
const nombre = document.getElementById("nombre");
const tipoDocumento = document.getElementById("tipoDocumento");
const documento = document.getElementById("documento");
const telefono = document.getElementById("telefono");
const edad = document.getElementById("edad");
const diagnostico = document.getElementById("diagnostico");

/* TOAST */
function showToast(msg, type = "success") {
  const colors = {
    success: "bg-emerald-600",
    error: "bg-rose-600",
    info: "bg-sky-600"
  };

  toast.textContent = msg;
  toast.className = `
    fixed top-5 right-5 z-50
    max-w-sm rounded-2xl shadow-lg
    px-4 py-3 text-sm text-white
    ${colors[type]}
    opacity-0 translate-y-2
    transition-all duration-300
  `;
  toast.classList.remove("hidden");

  setTimeout(() => toast.classList.remove("opacity-0","translate-y-2"), 50);
  setTimeout(() => toast.classList.add("opacity-0","translate-y-2"), 2600);
  setTimeout(() => toast.classList.add("hidden"), 3000);
}

/* FORM */
openFormBtn.onclick = () => {
  editId = null;
  clearForm();
  formSection.classList.remove("hidden");
};

cancelBtn.onclick = () => {
  clearForm();
  formSection.classList.add("hidden");
};

/* GUARDAR */
saveBtn.onclick = async () => {
  if (isSaving) return;
  isSaving = true;

  const patient = {
    nombre: nombre.value.trim(),
    tipoDocumento: tipoDocumento.value.trim(),
    documento: documento.value.trim(),
    telefono: telefono.value.trim(),
    edad: Number(edad.value),
    diagnostico: diagnostico.value.trim()
  };

  if (!patient.nombre || !patient.documento) {
    showToast("Por favor completa nombre y documento 📝", "error");
    isSaving = false;
    return;
  }

  const method = editId ? "PUT" : "POST";
  const url = editId ? `${API}/${editId}` : API;

  try {
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patient)
    });

    if (!res.ok) throw new Error();

    showToast(
      editId ? "Paciente actualizado correctamente ✨" :
               "Paciente registrado con éxito 💚",
      "success"
    );

    clearForm();
    formSection.classList.add("hidden");
    editId = null;
    loadPatients();

  } catch {
    showToast("No se pudo guardar el paciente 😥", "error");
  }

  isSaving = false;
};

/* LISTAR */
async function loadPatients() {
  const res = await fetch(API);
  const data = await res.json();

  patientsList.innerHTML = "";

  if (data.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  data.forEach(p => {
    const tr = document.createElement("tr");
    tr.className = "border-b hover:bg-slate-50";

    tr.innerHTML = `
      <td class="p-4">${p.nombre}</td>
      <td class="p-4 text-center">${p.documento}</td>
      <td class="p-4 text-center">${p.telefono}</td>
      <td class="p-4 text-center">${p.edad}</td>
      <td class="p-4">${p.diagnostico}</td>
      <td class="p-4 text-center space-x-2">
        <button
          onclick="editPatient(${p.id})"
          class="bg-amber-400 hover:bg-amber-500
                 text-white px-3 py-1 rounded-lg">
          ✏️
        </button>
        <button
          onclick="deletePatient(${p.id})"
          class="bg-rose-500 hover:bg-rose-600
                 text-white px-3 py-1 rounded-lg">
          🗑️
        </button>
      </td>
    `;

    patientsList.appendChild(tr);
  });
}

/* EDITAR */
function editPatient(id) {
  fetch(API)
    .then(res => res.json())
    .then(data => {
      const p = data.find(x => x.id === id);
      if (!p) return;

      editId = id;
      formSection.classList.remove("hidden");

      nombre.value = p.nombre;
      tipoDocumento.value = p.tipoDocumento;
      documento.value = p.documento;
      telefono.value = p.telefono;
      edad.value = p.edad;
      diagnostico.value = p.diagnostico;

      showToast("Editando paciente ✏️", "info");
    });
}

/* ELIMINAR */
function deletePatient(id) {
  if (!confirm("¿Deseas eliminar este paciente?")) return;

  fetch(`${API}/${id}`, { method: "DELETE" })
    .then(() => {
      showToast("Paciente eliminado 🗑️", "success");
      loadPatients();
    });
}

/* LIMPIAR */
function clearForm() {
  nombre.value = "";
  tipoDocumento.value = "";
  documento.value = "";
  telefono.value = "";
  edad.value = "";
  diagnostico.value = "";
}

/* INIT */
loadPatients();
