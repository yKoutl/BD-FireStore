const modal = document.getElementById('modal');
const form = document.getElementById('form-agregar');
let editandoId = null;

// Abrir modal para agregar o editar
function abrirModal(med = null) {
  modal.style.display = 'flex';

  if (med) {
    // Esto es para editar
    form.medicamentoId.value = med.medicamentoId;
    form.nombre.value = med.nombre;
    form.stock.value = med.stock;
    form.fechaVencimiento.value = med.fechaVencimiento;
    form.precio.value = med.precio;
    editandoId = med.id;
  } else {
    // Esto es para agregar
    form.reset();
    editandoId = null;
  }
}

// Cerrar modal
function cerrarModal() {
  modal.style.display = 'none';
}

// Esto es para agregar o actualizar un medicamento
form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const url = editandoId ? `/actualizar/${editandoId}` : '/agregar';

  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  cerrarModal();
  cargarMedicamentos();
});

// Esto es para cargar la lista de medicamentos
async function cargarMedicamentos() {
  const res = await fetch('/medicamentos');
  const datos = await res.json();
  const tabla = document.getElementById('tabla-body');
  tabla.innerHTML = '';

  datos.forEach(med => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${med.medicamentoId}</td>
      <td>${med.nombre}</td>
      <td>${med.stock}</td>
      <td>${med.fechaVencimiento}</td>
      <td>${med.precio}</td>
      <td>
        <button onclick='abrirModal(${JSON.stringify(med)})'>Editar</button>
        <button onclick='eliminarMedicamento("${med.id}")'>Eliminar</button>
      </td>
    `;
    tabla.appendChild(tr);
  });
}

// Esto es para eliminar un medicamento
async function eliminarMedicamento(id) {
  if (confirm('¿Estás seguro de eliminar este medicamento?')) {
    await fetch(`/eliminar/${id}`, { method: 'POST' });
    cargarMedicamentos();
  }
}
// Esto es para alternar tema claro/oscuro
document.getElementById("toggle-tema").addEventListener("click", function () {
  document.body.classList.toggle("oscuro");

  const btn = document.getElementById("toggle-tema");
  const modoOscuro = document.body.classList.contains("oscuro");

  btn.textContent = modoOscuro ? "☀️ Modo Claro" : "🌙 Modo Oscuro";
});

// Esto es para cargar al iniciar la página
cargarMedicamentos();
