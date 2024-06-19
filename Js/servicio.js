function mostrarFormAgregarEmpresa(){
    var mostrarFormulario = document.getElementById("agregarFormularioEmpresa");
    mostrarFormulario.style.display = "block";
}
function ocultarFormAgregarEmpresa(){
    var mostrarFormulario = document.getElementById("agregarFormularioEmpresa");
    mostrarFormulario.style.display = "none";
}
function mostrarFormAgregarDelegado(){
    var mostrarFormulario = document.getElementById("agregarFormularioDelegado");
    mostrarFormulario.style.display = "block";
}
function ocultarFormAgregarDelegado(){
    var mostrarFormulario = document.getElementById("agregarFormularioDelegado");
    mostrarFormulario.style.display = "none";
}

function mostrarTablaDatosGuardados(){
    var mostrarTabla = document.getElementById("datos-guardados");
    mostrarTabla.style.display = "block";
}
function ocultarTablaDatosGuardados(){
    var mostrarTabla = document.getElementById("datos-guardados");
    mostrarTabla.style.display = "none";
}

function mostrarFormActualizar(){
    var mostrarFormulario = document.getElementById("updateModal");
    mostrarFormulario.style.display = "block";
}
function ocultarFormActualizar(){
    var mostrarFormulario = document.getElementById("updateModal");
    mostrarFormulario.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    const addForm = document.getElementById("aggForm");
    const updateForm = document.getElementById("actualizarForm");
    const tableBody = document.getElementById("tableBody");
    let updateIndex = -1;

    // Load records from local storage on page load
    loadRecords();

    addForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const email = document.getElementById("email").value;
        const residuos = document.getElementById("residuos").value;
        const semanas = document.getElementById("semanas").value;
        addRecord(name, age, email, residuos, semanas);
        addForm.reset();
    });

    updateForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("updateName").value;
        const age = document.getElementById("updateAge").value;
        const email = document.getElementById("updateEmail").value;
        const residuos = document.getElementById("updateResiduos").value;
        const semanas = document.getElementById("updateSemanas").value;
        updateRecord(updateIndex, name, age, email, residuos, semanas);
        $('#updateModal').modal('hide');
    });

    function addRecord(name, age, email, residuos, semanas) {
        const records = getRecords();
        records.push({ name, age, email, residuos, semanas });
        saveRecords(records);
        loadRecords();
    }

    function updateRecord(index, name, age, email, residuos, semanas) {
        const records = getRecords();
        records[index] = { name, age, email, residuos, semanas };
        saveRecords(records);
        loadRecords();
    }

    function deleteRecord(index) {
        const records = getRecords();
        records.splice(index, 1);
        saveRecords(records);
        loadRecords();
    }

    function getRecords() {
        const records = localStorage.getItem("records");
        return records ? JSON.parse(records) : [];
    }

    function saveRecords(records) {
        localStorage.setItem("records", JSON.stringify(records));
    }

    function loadRecords() {
        const records = getRecords();
        tableBody.innerHTML = "";
        records.forEach((record, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${record.name}</td>
                <td>${record.age}</td>
                <td>${record.email}</td>
                <td>${record.residuos}</td>
                <td>${record.semanas}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editRecord(${index})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteRecord(${index})">Borrar</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }

    window.editRecord = function (index) {
        const records = getRecords();
        const record = records[index];
        document.getElementById("updateName").value = record.name;
        document.getElementById("updateAge").value = record.age;
        document.getElementById("updateEmail").value = record.email;
        document.getElementById("updateResiduos").value = record.residuos;
        document.getElementById("updateSemanas").value = record.semanas;
        updateIndex = index;
        $('#updateModal').modal('show');
    };

    window.deleteRecord = function (index) {
        if (confirm("¿Estas seguro que deseas eliminar este registro?")) {
            deleteRecord(index);
        }
    };
});
