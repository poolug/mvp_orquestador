// =========================
// DATA
// =========================

const grupos = [
  "Grupo Norte","Grupo Sur","Grupo Centro","Grupo Premium",
  "Grupo Empresas","Grupo Riesgo","Grupo Elite","Grupo Recovery"
];

const sucursales = [
  "Sucursal Santiago","Sucursal Las Condes","Sucursal Providencia",
  "Sucursal Viña del Mar","Sucursal Concepción","Sucursal Temuco",
  "Sucursal Rancagua","Sucursal Talca","Sucursal Puerto Montt",
  "Sucursal Antofagasta","Sucursal Iquique","Sucursal Copiapó",
  "Sucursal Chillán","Sucursal Valdivia","Sucursal Osorno",
  "Sucursal Punta Arenas","Sucursal Maipú","Sucursal Ñuñoa",
  "Sucursal Quilicura","Sucursal La Florida"
];

const ejecutivosPorSucursal = {
  "Sucursal Santiago":     ["Ejecutivo 1","Ejecutivo 2","Ejecutivo 3","Ejecutivo 4"],
  "Sucursal Las Condes":   ["Ejecutivo 1","Ejecutivo 2","Ejecutivo 3"],
  "Sucursal Providencia":  ["Ejecutivo 1","Ejecutivo 2"],
  "Sucursal Viña del Mar": ["Ejecutivo 1","Ejecutivo 2","Ejecutivo 3"],
  "Sucursal Concepción":   ["Ejecutivo 1","Ejecutivo 2"],
  "Sucursal Temuco":       ["Ejecutivo 1","Ejecutivo 2"],
  "Sucursal Rancagua":     ["Ejecutivo 1","Ejecutivo 2","Ejecutivo 3"],
  "Sucursal Talca":        ["Ejecutivo 1","Ejecutivo 2"],
  "Sucursal Puerto Montt": ["Ejecutivo 1","Ejecutivo 2"],
  "Sucursal Antofagasta":  ["Ejecutivo 1","Ejecutivo 2","Ejecutivo 3"],
};

// ─── REGISTROS POR PRODUCTO ────────────────────────────────────────────────
const registrosPorProducto = {
  "CONSOLIDACIÓN": [
    { id:1, producto:"CONSOLIDACIÓN", asignacion:"15-04-2026", monto:1250000,  segmento:"Tramo_RDR" },
    { id:2, producto:"CONSOLIDACIÓN", asignacion:"15-04-2026", monto:980000,   segmento:"Tramo_RDR" },
    { id:3, producto:"CONSOLIDACIÓN", asignacion:"15-04-2026", monto:2100000,  segmento:"Tramo_A"   },
    { id:4, producto:"CONSOLIDACIÓN", asignacion:"15-04-2026", monto:540000,   segmento:"Tramo_B"   },
    { id:5, producto:"CONSOLIDACIÓN", asignacion:"16-04-2026", monto:4750000,  segmento:"Tramo_A"   },
    { id:6, producto:"CONSOLIDACIÓN", asignacion:"16-04-2026", monto:890000,   segmento:"Tramo_RDR" },
    { id:7, producto:"CONSOLIDACIÓN", asignacion:"17-04-2026", monto:3200000,  segmento:"Tramo_B"   },
    { id:8, producto:"CONSOLIDACIÓN", asignacion:"17-04-2026", monto:7600000,  segmento:"Tramo_A"   },
  ],
  "HIPOTECARIO": [
    { id:1, producto:"HIPOTECARIO",   asignacion:"15-04-2026", monto:12500000, segmento:"Tramo_RDR" },
    { id:2, producto:"HIPOTECARIO",   asignacion:"15-04-2026", monto:8900000,  segmento:"Tramo_A"   },
    { id:3, producto:"HIPOTECARIO",   asignacion:"16-04-2026", monto:19800000, segmento:"Tramo_RDR" },
    { id:4, producto:"HIPOTECARIO",   asignacion:"16-04-2026", monto:6400000,  segmento:"Tramo_B"   },
    { id:5, producto:"HIPOTECARIO",   asignacion:"17-04-2026", monto:15700000, segmento:"Tramo_A"   },
    { id:6, producto:"HIPOTECARIO",   asignacion:"17-04-2026", monto:9200000,  segmento:"Tramo_B"   },
    { id:7, producto:"HIPOTECARIO",   asignacion:"18-04-2026", monto:20000000, segmento:"Tramo_RDR" },
    { id:8, producto:"HIPOTECARIO",   asignacion:"18-04-2026", monto:11300000, segmento:"Tramo_A"   },
  ],
  "CONSUMO": [
    { id:1, producto:"CONSUMO",       asignacion:"15-04-2026", monto:500000,   segmento:"Tramo_B"   },
    { id:2, producto:"CONSUMO",       asignacion:"15-04-2026", monto:720000,   segmento:"Tramo_B"   },
    { id:3, producto:"CONSUMO",       asignacion:"16-04-2026", monto:1100000,  segmento:"Tramo_RDR" },
    { id:4, producto:"CONSUMO",       asignacion:"16-04-2026", monto:650000,   segmento:"Tramo_A"   },
    { id:5, producto:"CONSUMO",       asignacion:"17-04-2026", monto:2300000,  segmento:"Tramo_B"   },
    { id:6, producto:"CONSUMO",       asignacion:"17-04-2026", monto:980000,   segmento:"Tramo_RDR" },
    { id:7, producto:"CONSUMO",       asignacion:"18-04-2026", monto:1750000,  segmento:"Tramo_A"   },
    { id:8, producto:"CONSUMO",       asignacion:"18-04-2026", monto:3400000,  segmento:"Tramo_B"   },
  ],
  "EMPRESAS": [
    { id:1, producto:"EMPRESAS",      asignacion:"15-04-2026", monto:18500000, segmento:"Tramo_A"   },
    { id:2, producto:"EMPRESAS",      asignacion:"15-04-2026", monto:7300000,  segmento:"Tramo_RDR" },
    { id:3, producto:"EMPRESAS",      asignacion:"16-04-2026", monto:14600000, segmento:"Tramo_A"   },
    { id:4, producto:"EMPRESAS",      asignacion:"16-04-2026", monto:9800000,  segmento:"Tramo_B"   },
    { id:5, producto:"EMPRESAS",      asignacion:"17-04-2026", monto:20000000, segmento:"Tramo_A"   },
    { id:6, producto:"EMPRESAS",      asignacion:"17-04-2026", monto:5600000,  segmento:"Tramo_RDR" },
    { id:7, producto:"EMPRESAS",      asignacion:"18-04-2026", monto:12400000, segmento:"Tramo_B"   },
    { id:8, producto:"EMPRESAS",      asignacion:"18-04-2026", monto:16900000, segmento:"Tramo_A"   },
  ],
};

// ─── MEMORIA GLOBAL ────────────────────────────────────────────────────────
let memoriaAsignaciones = {};   // { "Sucursal X": 120 }
let memoriaEjecutivos   = {};   // { "Sucursal X": { "Ejecutivo 1": 50 } }
let totalRegistros      = 1000;
let registrosFiltrados = [];

const licencias = ["Ejecutivo", "Jefe", "Zonal"];

const zonas = ["Zona Norte", "Zona Sur", "Zona Centro", "Zona Oriente"];

const usuariosPorSucursal = {
  "Sucursal Santiago": [
    { id:1, nombre:"Carlos Mendoza",   licencia:"Ejecutivo", zona:"Zona Centro", grupo:"Grupo Norte"  },
    { id:2, nombre:"Ana Torres",       licencia:"Ejecutivo", zona:"Zona Centro", grupo:"Grupo Norte"  },
    { id:3, nombre:"Roberto Sánchez",  licencia:"Jefe",      zona:"Zona Centro", grupo:"Grupo Norte"  },
    { id:4, nombre:"Patricia Muñoz",   licencia:"Ejecutivo", zona:"Zona Centro", grupo:"Grupo Premium"},
  ],
  "Sucursal Las Condes": [
    { id:5, nombre:"Diego Herrera",    licencia:"Ejecutivo", zona:"Zona Oriente", grupo:"Grupo Elite"   },
    { id:6, nombre:"Claudia Vargas",   licencia:"Ejecutivo", zona:"Zona Oriente", grupo:"Grupo Elite"   },
    { id:7, nombre:"Marcelo Reyes",    licencia:"Jefe",      zona:"Zona Oriente", grupo:"Grupo Elite"   },
  ],
  "Sucursal Providencia": [
    { id:8,  nombre:"Valentina Rojas", licencia:"Ejecutivo", zona:"Zona Centro", grupo:"Grupo Sur"    },
    { id:9,  nombre:"Felipe Castillo", licencia:"Jefe",      zona:"Zona Centro", grupo:"Grupo Sur"    },
  ],
  "Sucursal Viña del Mar": [
    { id:10, nombre:"Daniela Pinto",   licencia:"Ejecutivo", zona:"Zona Norte", grupo:"Grupo Norte"  },
    { id:11, nombre:"Andrés Fuentes",  licencia:"Ejecutivo", zona:"Zona Norte", grupo:"Grupo Norte"  },
    { id:12, nombre:"Lorena Campos",   licencia:"Jefe",      zona:"Zona Norte", grupo:"Grupo Norte"  },
    { id:13, nombre:"Héctor Morales",  licencia:"Zonal",     zona:"Zona Norte", grupo:"Grupo Norte"  },
  ],
  "Sucursal Concepción": [
    { id:14, nombre:"Paola Espinoza",  licencia:"Ejecutivo", zona:"Zona Sur", grupo:"Grupo Sur"    },
    { id:15, nombre:"Cristián Lagos",  licencia:"Jefe",      zona:"Zona Sur", grupo:"Grupo Sur"    },
  ],
  "Sucursal Temuco": [
    { id:16, nombre:"Javiera Sepúlveda",licencia:"Ejecutivo", zona:"Zona Sur", grupo:"Grupo Recovery"},
    { id:17, nombre:"Gonzalo Díaz",    licencia:"Jefe",      zona:"Zona Sur", grupo:"Grupo Recovery"},
  ],
  "Sucursal Antofagasta": [
    { id:18, nombre:"Camila Ortiz",    licencia:"Ejecutivo", zona:"Zona Norte", grupo:"Grupo Riesgo" },
    { id:19, nombre:"Sebastián Vera",  licencia:"Ejecutivo", zona:"Zona Norte", grupo:"Grupo Riesgo" },
    { id:20, nombre:"Natalia Bravo",   licencia:"Zonal",     zona:"Zona Norte", grupo:"Grupo Riesgo" },
  ],
  "Sucursal Rancagua": [
    { id:21, nombre:"Ignacio Mena",    licencia:"Ejecutivo", zona:"Zona Centro", grupo:"Grupo Centro" },
    { id:22, nombre:"María Silva",     licencia:"Jefe",      zona:"Zona Centro", grupo:"Grupo Centro" },
    { id:23, nombre:"Jorge Navarro",   licencia:"Ejecutivo", zona:"Zona Centro", grupo:"Grupo Centro" },
  ],
};

// Helper: obtener todos los usuarios como array plano
function getTodosUsuarios(){
  return Object.entries(usuariosPorSucursal).flatMap(([suc, users]) =>
    users.map(u => ({ ...u, sucursal: suc }))
  );
}

// =========================
// INIT
// =========================

$(document).ready(function(){
  renderListas();
  poblarSelectorSucursal();
  poblarSelectorSucursalMJ();

  // Cambio de producto → reset total y memoria
  $("#producto").change(function(){
    totalRegistros = parseInt($(this).val());
    memoriaAsignaciones = {};
    memoriaEjecutivos   = {};
    $("#totalRegistros").text(totalRegistros);
    actualizarTotales();

    // Limpiar seleccionados
    $("#gruposSeleccionados").html(`
      <div class="empty-state">
        <i class="bi bi-diagram-3 fs-1"></i>
        <div class="mt-2">No hay grupos seleccionados</div>
      </div>`);
    $("#sucursalesSeleccionadas").html(`
      <div class="empty-state">
        <i class="bi bi-building fs-1"></i>
        <div class="mt-2">No hay sucursales seleccionadas</div>
      </div>`);
    renderListas();
  });

  $("#buscarGrupo").on("keyup", function(){
    filtrarLista($(this).val(), grupos, "#listaGrupos", "grupo");
  });

  $("#buscarSucursal").on("keyup", function(){
    filtrarLista($(this).val(), sucursales, "#listaSucursales", "sucursal");
  });

  $("#guardarGrupo").click(function(){
    mostrarResumen("grupo");
  });

  $("#guardarSucursal").click(function(){
    const assigned = calcularTotalAsignado();
    if(assigned === 0){
      customAlert("⚠️ Debes ingresar al menos una sucursal con registros.");
      return;
    }
    guardarEnMemoria();
    mostrarResumen("sucursal");
  });
});

// Helper: obtener registros del producto activo
function getRegistrosActivos(){
  const prod = $("#producto option:selected").text();
  return registrosPorProducto[prod] || [];
}

// Helper: formatear monto CLP
function fmtMonto(n){
  return "$" + n.toLocaleString("es-CL");
}

// =========================
// TABS
// =========================

function cambiarTab(tab){
  $("#vistaOrquestador, #vistaJefe, #vistaMantenedor, #vistaMantenedorJefe").hide();
  $(".nav-link").removeClass("active");

  if(tab === "orquestador"){
    $("#vistaOrquestador").show();
    $("#tab-orquestador").addClass("active");

  } else if(tab === "jefe"){
    guardarEnMemoria();
    $("#vistaJefe").show();
    $("#tab-jefe").addClass("active");
    actualizarMemoriaJefe();

  } else if(tab === "mantenedor"){
    guardarEnMemoria();
    $("#vistaMantenedor").show();
    $("#tab-mantenedor").addClass("active");
    iniciarMantenedor();

  } else if(tab === "mantenedorJefe"){
    guardarEnMemoria();
    $("#vistaMantenedorJefe").show();
    $("#tab-mantenedor-jefe").addClass("active");
    mjActualizarRegistros();
  }
}

// =========================
// RENDER LISTAS ORQUESTADOR
// =========================

function renderListas(){
  renderItems(grupos,     "#listaGrupos",     "grupo");
  renderItems(sucursales, "#listaSucursales", "sucursal");
}

function renderItems(data, container, tipo){
  let html = "";
  data.forEach(item => {
    const isSelected = $(`[data-item="${item}"]`).length > 0;
    html += `
      <button class="list-group-item list-group-item-action ${isSelected ? 'active' : ''}"
        onclick="agregarSeleccion('${item}','${tipo}')">${item}
      </button>`;
  });
  $(container).html(html);
}

function filtrarLista(texto, data, container, tipo){
  const filtrados = data.filter(i => i.toLowerCase().includes(texto.toLowerCase()));
  renderItems(filtrados, container, tipo);
}

// =========================
// AGREGAR / ELIMINAR
// =========================

function agregarSeleccion(nombre, tipo){
  const container  = tipo === "grupo" ? "#gruposSeleccionados"   : "#sucursalesSeleccionadas";
  const lista      = tipo === "grupo" ? "#listaGrupos"           : "#listaSucursales";
  const claseInput = tipo === "grupo" ? "grupo-input"            : "sucursal-input";

  if($(`[data-item="${nombre}"]`).length) return; // ya existe

  // Marcar en lista
  $(`${lista} button`).each(function(){
    if($(this).text().trim() === nombre)
      $(this).addClass("active");
  });

  $(`${container} .empty-state`).remove();

  const valorPrevio = (tipo === "sucursal" && memoriaAsignaciones[nombre])
    ? memoriaAsignaciones[nombre] : 0;

  const html = `
    <div class="selected-item" data-item="${nombre}">
      <div class="row align-items-center">
        <div class="col-md-5 mb-2">
          <span class="badge-custom">${nombre}</span>
        </div>
        <div class="col-md-4 mb-2">
          <input type="number" min="0" value="${valorPrevio}"
            class="form-control ${claseInput}"
            data-name="${nombre}"
            placeholder="Cantidad registros"
            oninput="actualizarTotales()">
        </div>
        <div class="col-md-3 text-end">
          <button class="btn btn-outline-danger btn-remove"
            onclick="eliminarSeleccion('${nombre}')">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>`;

  $(container).append(html);
  actualizarTotales();
}

function eliminarSeleccion(nombre){
  $(`[data-item="${nombre}"]`).remove();

  $("#listaGrupos button, #listaSucursales button").each(function(){
    if($(this).text().trim() === nombre) $(this).removeClass("active");
  });

  delete memoriaAsignaciones[nombre];
  validarEmpty();
  actualizarTotales();
}

function validarEmpty(){
  if($("#gruposSeleccionados .selected-item").length === 0){
    $("#gruposSeleccionados").html(`
      <div class="empty-state">
        <i class="bi bi-diagram-3 fs-1"></i>
        <div class="mt-2">No hay grupos seleccionados</div>
      </div>`);
  }
  if($("#sucursalesSeleccionadas .selected-item").length === 0){
    $("#sucursalesSeleccionadas").html(`
      <div class="empty-state">
        <i class="bi bi-building fs-1"></i>
        <div class="mt-2">No hay sucursales seleccionadas</div>
      </div>`);
  }
}

// =========================
// TOTALES ORQUESTADOR
// =========================

function calcularTotalAsignado(){
  let total = 0;
  $(".grupo-input, .sucursal-input").each(function(){
    total += parseInt($(this).val()) || 0;
  });
  return total;
}

function actualizarTotales(){
  const totalAsignado = calcularTotalAsignado();
  const restante      = totalRegistros - totalAsignado;

  // Validar exceso → revertir
  if(totalAsignado > totalRegistros){
    const exceso = totalAsignado - totalRegistros;
    const $last  = $(".grupo-input, .sucursal-input")
      .filter(function(){ return (parseInt($(this).val()) || 0) > 0; }).last();
    $last.val(Math.max(0, (parseInt($last.val()) || 0) - exceso));

    alert(`⚠️ No puedes asignar más de ${totalRegistros.toLocaleString()} registros en total.\nSe ajustó el valor automáticamente.`);
    actualizarTotales();
    return;
  }

  $("#asignados").text(totalAsignado.toLocaleString());
  $("#sinAsignar").text(restante.toLocaleString());

  if(restante <= 0){
    $("#sinAsignar").removeClass("remaining-danger").addClass("remaining-success");
  } else {
    $("#sinAsignar").removeClass("remaining-success").addClass("remaining-danger");
  }
}

// =========================
// MEMORIA
// =========================

function guardarEnMemoria(){
  $(".sucursal-input").each(function(){
    const nombre = $(this).data("name");
    const valor  = parseInt($(this).val()) || 0;
    if(valor > 0) memoriaAsignaciones[nombre] = valor;
    else delete memoriaAsignaciones[nombre];
  });
}

// =========================
// JEFE SUCURSAL
// =========================

function poblarSelectorSucursal(){
  let opts = `<option value="">-- Seleccione sucursal --</option>`;
  sucursales.forEach(s => { opts += `<option value="${s}">${s}</option>`; });
  $("#sucursalActiva").html(opts);
}

function actualizarMemoriaJefe(){
  const sucursal  = $("#sucursalActiva").val();
  const registros = sucursal ? (memoriaAsignaciones[sucursal] || 0) : 0;

  $("#totalJefe").text(registros.toLocaleString());
  $("#productoJefe").text(sucursal ? "Producto: " + $("#producto option:selected").text() : "");
}

function cargarVistaSucursal(){
  actualizarMemoriaJefe();
  registrosFiltrados = getRegistrosActivos(); // reset filtros al cambiar sucursal

  const sucursal = $("#sucursalActiva").val();
  if(!sucursal){
    $("#listaEjecutivos").html(`
      <div class="empty-state">
        <i class="bi bi-people fs-1"></i>
        <div class="mt-2">Seleccione una sucursal para ver sus ejecutivos</div>
      </div>`);
    $("#resumenJefeCard").hide();
    $("#msgExito").hide();
    return;
  }

  const registros = memoriaAsignaciones[sucursal] || 0;
  if(registros === 0){
    alert(`⚠️ La sucursal "${sucursal}" no tiene registros asignados desde el Orquestador.`);
  }

  const ejecutivos = ejecutivosPorSucursal[sucursal]
    || Array.from({length:2}, (_,i) => `Ejecutivo ${i+1}`);

  renderEjecutivos(ejecutivos);
  $("#resumenJefeCard").hide();
  $("#msgExito").hide();
}

function renderEjecutivos(lista){
  if(lista.length === 0){
    $("#listaEjecutivos").html(`
      <div class="empty-state">
        <i class="bi bi-people fs-1"></i>
        <div class="mt-2">No se encontraron ejecutivos</div>
      </div>`);
    return;
  }

  const sucursal  = $("#sucursalActiva").val();
  const totalRegs = registrosFiltrados.length > 0
    ? registrosFiltrados.length
    : (memoriaAsignaciones[sucursal] || 0);

  let html = "";
  lista.forEach(ej => {
    const valorPrevio = (memoriaEjecutivos[sucursal] && memoriaEjecutivos[sucursal][ej])
      ? memoriaEjecutivos[sucursal][ej] : 0;
    const idSafe = ej.replace(/ /g,"_");

    html += `
      <div class="ejecutivo-row">
        <div class="row align-items-center">
          <div class="col-md-4">
            <div class="ejecutivo-nombre">
              <i class="bi bi-person-circle me-2" style="color:var(--primary);"></i>${ej}
            </div>
          </div>
          <div class="col-md-3">
            <label class="small text-muted mb-1">Cantidad de Registros</label>
            <input type="number" min="0" value="${valorPrevio}"
              class="form-control ejecutivo-input"
              data-ejecutivo="${ej}"
              oninput="calcularSinAsignarJefe()">
          </div>
          <div class="col-md-3">
            <label class="small text-muted mb-1">Monto estimado</label>
            <div class="fw-bold text-success" id="monto-${idSafe}">
              ${fmtMonto(calcularMontoEjecutivo(ej, valorPrevio, totalRegs))}
            </div>
          </div>
          <div class="col-md-2 text-end">
            <span class="badge bg-light text-dark border" id="pct-${idSafe}" style="font-size:13px;">0%</span>
          </div>
        </div>
      </div>`;
  });

  $("#listaEjecutivos").html(html);
  calcularSinAsignarJefe();
}

// Calcula monto proporcional según registros asignados al ejecutivo
function calcularMontoEjecutivo(ej, cantRegistros, totalRegistrosDisponibles){
  const regs = registrosFiltrados.length > 0 ? registrosFiltrados : getRegistrosActivos();
  if(!regs.length || !cantRegistros) return 0;

  // Tomar los primeros N registros proporcionales
  const proporcion = Math.min(cantRegistros, regs.length);
  const regsEj     = regs.slice(0, proporcion);
  return regsEj.reduce((sum, r) => sum + r.monto, 0);
}

function filtrarEjecutivos(){
  const texto    = $("#buscarEjecutivo").val().toLowerCase();
  const sucursal = $("#sucursalActiva").val();
  if(!sucursal) return;
  const todos     = ejecutivosPorSucursal[sucursal] || [];
  const filtrados = todos.filter(e => e.toLowerCase().includes(texto));
  renderEjecutivos(filtrados);
}

function calcularSinAsignarJefe(){
  const sucursal = $("#sucursalActiva").val();
  const total    = memoriaAsignaciones[sucursal] || 0;
  let   asignado = 0;

  $(".ejecutivo-input").each(function(){
    asignado += parseInt($(this).val()) || 0;
  });

  if(asignado > total && total > 0){
    const exceso = asignado - total;
    const $last  = $(".ejecutivo-input")
      .filter(function(){ return (parseInt($(this).val())||0) > 0; }).last();
    $last.val(Math.max(0, (parseInt($last.val())||0) - exceso));
    alert(`⚠️ No puedes superar los ${total.toLocaleString()} registros de esta sucursal.`);
    calcularSinAsignarJefe();
    return;
  }

  const restante = total - asignado;
  $("#sinAsignarJefe").text(restante.toLocaleString());
  $("#sinAsignarJefe").css("color", restante <= 0 ? "var(--success)" : "var(--danger)");

  // Actualizar porcentaje y monto en tiempo real
  const regs = registrosFiltrados.length > 0 ? registrosFiltrados : getRegistrosActivos();

  $(".ejecutivo-input").each(function(){
    const ej   = $(this).data("ejecutivo");
    const val  = parseInt($(this).val()) || 0;
    const pct  = total > 0 ? Math.round((val / total) * 100) : 0;
    const safe = ej ? ej.replace(/ /g,"_") : "";

    if(safe){
      $(`#pct-${safe}`).text(pct + "%");

      // Monto proporcional
      const monto = calcularMontoEjecutivo(ej, val, total);
      $(`#monto-${safe}`).text(fmtMonto(monto));
    }
  });
}

function guardarAsignacionJefe(){
  const sucursal = $("#sucursalActiva").val();
  if(!sucursal){ alert("⚠️ Seleccione una sucursal primero."); return; }

  const total    = memoriaAsignaciones[sucursal] || 0;
  let   asignado = 0;
  $(".ejecutivo-input").each(function(){ asignado += parseInt($(this).val()) || 0; });

  if(total === 0){ alert("⚠️ Esta sucursal no tiene registros asignados desde el Orquestador."); return; }
  if(asignado === 0){ alert("⚠️ Debes asignar al menos un registro a un ejecutivo."); return; }
  if(asignado < total){
    const ok = confirm(`⚠️ Quedan ${(total-asignado).toLocaleString()} registros sin asignar.\n¿Deseas guardar de todas formas?`);
    if(!ok) return;
  }

  if(!memoriaEjecutivos[sucursal]) memoriaEjecutivos[sucursal] = {};

  const regs  = registrosFiltrados.length > 0 ? registrosFiltrados : getRegistrosActivos();
  let   tbody = "";
  let   usados = 0;

  $(".ejecutivo-input").each(function(){
    const ej  = $(this).data("ejecutivo");
    const val = parseInt($(this).val()) || 0;
    memoriaEjecutivos[sucursal][ej] = val;

    // Monto: sumar registros correspondientes en orden
    const regsEj = regs.slice(usados, usados + val);
    const monto  = regsEj.reduce((s,r) => s + r.monto, 0);
    usados += val;

    const clase = val > 0 ? "estado-asignado" : "estado-pendiente";
    const label = val > 0 ? "Asignado"        : "Pendiente";

    tbody += `
      <tr>
        <td><strong>${ej}</strong></td>
        <td class="text-center">${val.toLocaleString()}</td>
        <td class="text-success fw-bold">${fmtMonto(monto)}</td>
        <td><span class="estado-badge ${clase}">${label}</span></td>
      </tr>`;
  });

  $("#tablaResumenJefe").html(tbody);
  $("#resumenJefeCard").show();
  $("#msgExito").show();
  setTimeout(() => $("#msgExito").fadeOut(600), 3000);
  $("html,body").animate({ scrollTop: $("#resumenJefeCard").offset().top - 20 }, 400);
}

function aplicarFiltrosMonto(){
  const min = parseInt($("#filtroMontoMin").val()) || 0;
  const max = parseInt($("#filtroMontoMax").val()) || Infinity;
  const todos = getRegistrosActivos();

  registrosFiltrados = todos.filter(r => r.monto >= min && r.monto <= max);

  // Actualizar badge de total con los registros filtrados
  const totalFiltrado = registrosFiltrados.length;
  $("#totalJefe").text(totalFiltrado.toLocaleString());

  // Re-renderizar tabla de ejecutivos si hay sucursal seleccionada
  const suc = $("#sucursalActiva").val();
  if(suc){
    const ejecutivos = ejecutivosPorSucursal[suc]
      || Array.from({length:2}, (_,i) => `Ejecutivo ${i+1}`);
    renderEjecutivos(ejecutivos);
  }
}

function borrarFiltros(){
  $("#buscarEjecutivo").val("");
  $("#filtroMontoMin").val("");
  $("#filtroMontoMax").val("");
  registrosFiltrados = getRegistrosActivos();

  // Restaurar total original desde memoria
  const suc    = $("#sucursalActiva").val();
  const total  = memoriaAsignaciones[suc] || 0;
  $("#totalJefe").text(total.toLocaleString());

  const ejecutivos = suc
    ? (ejecutivosPorSucursal[suc] || [])
    : [];
  renderEjecutivos(ejecutivos);
}

// =========================
// RESUMEN ORQUESTADOR
// =========================

function mostrarResumen(tipo){
  const producto = $("#producto option:selected").text();
  const totalAsi = calcularTotalAsignado();
  const restante = totalRegistros - totalAsi;

  let html = `
    <div class="mb-3">
      <span class="badge bg-primary px-3 py-2 fs-6">${producto}</span>
    </div>`;

  if(tipo === "grupo"){
    html += `<h6 class="fw-bold mb-3 text-primary">Distribución por Grupos</h6>`;
    $(".grupo-input").each(function(){
      const val = parseInt($(this).val()) || 0;
      const nom = $(this).data("name");
      html += `
        <div class="summary-card">
          <div class="d-flex justify-content-between align-items-center">
            <strong>${nom}</strong>
            <span class="badge bg-primary">${val.toLocaleString()} registros</span>
          </div>
        </div>`;
    });
  } else {
    html += `<h6 class="fw-bold mb-3 text-success">Distribución Manual por Sucursales</h6>`;
    let hayDatos = false;
    $(".sucursal-input").each(function(){
      const val = parseInt($(this).val()) || 0;
      const nom = $(this).data("name");
      if(val > 0){
        hayDatos = true;
        const pct = Math.round((val / totalRegistros) * 100);
        html += `
          <div class="summary-card">
            <div class="d-flex justify-content-between align-items-center mb-1">
              <strong>${nom}</strong>
              <span class="badge bg-success">${val.toLocaleString()} reg. (${pct}%)</span>
            </div>
            <div class="progress" style="height:6px;">
              <div class="progress-bar bg-success" style="width:${pct}%"></div>
            </div>
          </div>`;
      }
    });
    if(!hayDatos) html += `<p class="text-muted">No hay sucursales con registros asignados.</p>`;
  }

  html += `
    <hr>
    <div class="row text-center g-2">
      <div class="col-4">
        <div class="counter-box">
          <div class="counter-title">Total</div>
          <div class="counter-number">${totalRegistros.toLocaleString()}</div>
        </div>
      </div>
      <div class="col-4">
        <div class="counter-box">
          <div class="counter-title">Asignados</div>
          <div class="counter-number text-success">${totalAsi.toLocaleString()}</div>
        </div>
      </div>
      <div class="col-4">
        <div class="counter-box">
          <div class="counter-title">Sin Asignar</div>
          <div class="counter-number ${restante > 0 ? 'remaining-danger' : 'remaining-success'}">
            ${restante.toLocaleString()}
          </div>
        </div>
      </div>
    </div>`;

  $("#contenidoResumen").html(html);
  new bootstrap.Modal(document.getElementById("modalResumen")).show();
}

// =========================
// MANTENEDOR CASA MATRIZ
// =========================

// Poblar selectores de filtros de tabla al entrar a la vista
function iniciarMantenedor(){
  // Zonas
  let optsZona = `<option value="">Todas las zonas</option>`;
  zonas.forEach(z => { optsZona += `<option>${z}</option>`; });
  $("#filtroTablaZona").html(optsZona);

  // Sucursales
  let optsSuc = `<option value="">Todas las sucursales</option>`;
  Object.keys(usuariosPorSucursal).forEach(s => { optsSuc += `<option>${s}</option>`; });
  $("#filtroTablaSucursal").html(optsSuc);

  // Licencias
  let optsLic = `<option value="">Todas las licencias</option>`;
  licencias.forEach(l => { optsLic += `<option>${l}</option>`; });
  $("#filtroTablaLicencia").html(optsLic);

  renderTablaUsuarios();
}

function renderTablaUsuarios(){
  const zonaFiltro     = $("#filtroTablaZona").val();
  const sucFiltro      = $("#filtroTablaSucursal").val();
  const licFiltro      = $("#filtroTablaLicencia").val();

  let usuarios = getTodosUsuarios();

  if(zonaFiltro) usuarios = usuarios.filter(u => u.zona === zonaFiltro);
  if(sucFiltro)  usuarios = usuarios.filter(u => u.sucursal === sucFiltro);
  if(licFiltro)  usuarios = usuarios.filter(u => u.licencia === licFiltro);

  if(!usuarios.length){
    $("#tbodyUsuarios").html(`
      <tr>
        <td colspan="7" class="text-center text-muted py-4">
          <i class="bi bi-search me-1"></i>No se encontraron usuarios
        </td>
      </tr>`);
    return;
  }

  const licBadge = {
    "Ejecutivo": "bg-primary",
    "Jefe":      "bg-warning text-dark",
    "Zonal":     "bg-success",
  };

  $("#tbodyUsuarios").html(
    usuarios.map((u,i) => `
      <tr class="${u.activo === false ? 'table-secondary text-muted' : ''}">
        <td class="text-center">${i+1}</td>
        <td><strong>${u.nombre}</strong></td>
        <td>
          <span class="badge ${licBadge[u.licencia] || 'bg-secondary'}">
            ${u.licencia}
          </span>
        </td>
        <td>${u.zona}</td>
        <td>${u.grupo}</td>
        <td>${u.sucursal}</td>
        <td class="text-center">
          ${u.activo === false
            ? `<span class="estado-badge estado-pendiente">Inactivo</span>`
            : `<span class="estado-badge estado-asignado">Activo</span>`}
        </td>
      </tr>`
    ).join("")
  );
}

function limpiarFiltrosTabla(){
  $("#filtroTablaZona, #filtroTablaSucursal, #filtroTablaLicencia")
    .prop("selectedIndex", 0);
  renderTablaUsuarios();
}

// ─── MODAL CREAR ────────────────────────────────────────────────────────────

function abrirModalCrear(){
  // Licencias
  let optsLic = `<option value="">-- Seleccione licencia --</option>`;
  licencias.forEach(l => { optsLic += `<option>${l}</option>`; });
  $("#crearLicencia").html(optsLic);

  // Zonas
  let optsZona = `<option value="">-- Seleccione zona --</option>`;
  zonas.forEach(z => { optsZona += `<option>${z}</option>`; });
  $("#crearZona").html(optsZona);

  // Reset dependientes
  $("#crearGrupo").html(`<option value="">-- Seleccione zona primero --</option>`);
  $("#crearSucursal").html(`<option value="">-- Seleccione grupo primero --</option>`);
  $("#crearNombre").val("");

  new bootstrap.Modal(document.getElementById("modalCrearUsuario")).show();
}

function filtrarGruposModal(ctx){
  const prefix = ctx === "crear" ? "crear" : "baja";
  const zona   = $(`#${prefix}Zona`).val();

  // Grupos disponibles (todos por ahora, podría filtrarse por zona)
  const optsBase = ctx === "crear"
    ? `<option value="">-- Seleccione grupo --</option>`
    : `<option value="">-- Todos los grupos --</option>`;

  let opts = optsBase;
  grupos.forEach(g => { opts += `<option>${g}</option>`; });
  $(`#${prefix}Grupo`).html(opts);

  if(ctx === "crear"){
    $("#crearSucursal").html(`<option value="">-- Seleccione grupo primero --</option>`);
  } else {
    filtrarUsuariosBaja();
  }
}

function filtrarSucursalesModal(ctx){
  const prefix = ctx === "crear" ? "crear" : "baja";
  const optsBase = ctx === "crear"
    ? `<option value="">-- Seleccione sucursal --</option>`
    : `<option value="">-- Todas las sucursales --</option>`;

  let opts = optsBase;
  Object.keys(usuariosPorSucursal).forEach(s => { opts += `<option>${s}</option>`; });
  $(`#${prefix}Sucursal`).html(opts);

  if(ctx === "baja") filtrarUsuariosBaja();
}

function confirmarCrearUsuario(){
  const licencia  = $("#crearLicencia").val();
  const zona      = $("#crearZona").val();
  const grupo     = $("#crearGrupo").val();
  const sucursal  = $("#crearSucursal").val();
  const nombre    = $("#crearNombre").val().trim();

  // Validaciones
  if(!licencia){ alert("⚠️ Seleccione una licencia."); return; }
  if(!zona)    { alert("⚠️ Seleccione una zona.");     return; }
  if(!grupo)   { alert("⚠️ Seleccione un grupo.");     return; }
  if(!sucursal){ alert("⚠️ Seleccione una sucursal."); return; }
  if(!nombre)  { alert("⚠️ Ingrese el nombre del usuario."); return; }

  // Agregar a la data en memoria
  const nuevoId = getTodosUsuarios().length + 1;
  const nuevoUsuario = { id: nuevoId, nombre, licencia, zona, grupo, activo: true };

  if(!usuariosPorSucursal[sucursal]) usuariosPorSucursal[sucursal] = [];
  usuariosPorSucursal[sucursal].push(nuevoUsuario);

  bootstrap.Modal.getInstance(document.getElementById("modalCrearUsuario")).hide();
  renderTablaUsuarios();

  // Toast de éxito
  mostrarToastExito(`✅ Usuario "${nombre}" creado como ${licencia} en ${sucursal}.`);
}

// ─── MODAL BAJA ─────────────────────────────────────────────────────────────

function abrirModalBaja(){
  // Zonas
  let optsZona = `<option value="">-- Todas las zonas --</option>`;
  zonas.forEach(z => { optsZona += `<option>${z}</option>`; });
  $("#bajaZona").html(optsZona);

  // Grupos
  let optsGrupo = `<option value="">-- Todos los grupos --</option>`;
  grupos.forEach(g => { optsGrupo += `<option>${g}</option>`; });
  $("#bajaGrupo").html(optsGrupo);

  // Sucursales
  let optsSuc = `<option value="">-- Todas las sucursales --</option>`;
  Object.keys(usuariosPorSucursal).forEach(s => { optsSuc += `<option>${s}</option>`; });
  $("#bajaSucursal").html(optsSuc);

  filtrarUsuariosBaja();

  new bootstrap.Modal(document.getElementById("modalBajaUsuario")).show();
}

function filtrarUsuariosBaja(){
  const zona     = $("#bajaZona").val();
  const grupo    = $("#bajaGrupo").val();
  const sucursal = $("#bajaSucursal").val();

  let usuarios = getTodosUsuarios().filter(u => u.activo !== false);

  if(zona)     usuarios = usuarios.filter(u => u.zona     === zona);
  if(grupo)    usuarios = usuarios.filter(u => u.grupo    === grupo);
  if(sucursal) usuarios = usuarios.filter(u => u.sucursal === sucursal);

  let opts = `<option value="">-- Seleccione usuario --</option>`;
  usuarios.forEach(u => {
    opts += `<option value="${u.id}">${u.nombre} · ${u.licencia} · ${u.sucursal}</option>`;
  });
  $("#bajaUsuarioSelect").html(opts);
  $("#bajaUsuarioInfo").hide();

  $("#bajaUsuarioSelect").off("change").on("change", function(){
    $("#bajaUsuarioInfo").toggle(!!$(this).val());
  });
}

function confirmarBajaUsuario(){
  const userId = parseInt($("#bajaUsuarioSelect").val());
  if(!userId){ alert("⚠️ Seleccione un usuario para dar de baja."); return; }

  // Marcar como inactivo en memoria
  let encontrado = null;
  Object.values(usuariosPorSucursal).forEach(lista => {
    const u = lista.find(u => u.id === userId);
    if(u){ u.activo = false; encontrado = u; }
  });

  if(!encontrado){ alert("⚠️ Usuario no encontrado."); return; }

  bootstrap.Modal.getInstance(document.getElementById("modalBajaUsuario")).hide();
  renderTablaUsuarios();
  mostrarToastExito(`✅ Usuario "${encontrado.nombre}" dado de baja correctamente.`);
}

// ─── TOAST GENÉRICO ─────────────────────────────────────────────────────────

function mostrarToastExito(msg){
  // Reutiliza un div flotante simple
  let $toast = $("#toastGlobal");
  if(!$toast.length){
    $("body").append(`
      <div id="toastGlobal" style="
        position:fixed; bottom:28px; right:28px; z-index:9999;
        background:#166534; color:white; border-radius:12px;
        padding:14px 22px; font-weight:600; font-size:14px;
        box-shadow:0 4px 20px rgba(0,0,0,.2); display:none;">
      </div>`);
    $toast = $("#toastGlobal");
  }
  $toast.text(msg).fadeIn(200);
  setTimeout(() => $toast.fadeOut(500), 3500);
}

// =========================
// MANTENEDOR - FILTROS Y REASIGNACIÓN
// =========================

// Carga fechas únicas del producto seleccionado
function mCargarFechas(){
  const prod  = $("#mFiltroProducto").val();
  const regs  = registrosPorProducto[prod] || [];
  const fechas = [...new Set(regs.map(r => r.asignacion))].sort();

  let opts = `<option value="">-- Todas las fechas --</option>`;
  fechas.forEach(f => { opts += `<option>${f}</option>`; });
  $("#mFiltroAsignacion").html(opts);

  // Limpiar tabla y cantidad
  $("#mTbodyRegistros").html(`
    <tr><td colspan="5" class="text-center text-muted py-4">
      <i class="bi bi-search me-1"></i>Aplique filtros para ver datos
    </td></tr>`);
  $("#mBadgeCantidad").hide();
  $("#mCantidadRegistros").val("");
}

function mBuscarRegistros(){
  const prod   = $("#mFiltroProducto").val();
  const fecha  = $("#mFiltroAsignacion").val();
  const orden  = $("#mFiltroOrdenMonto").val();

  if(!prod){
    alert("⚠️ Seleccione un producto primero.");
    return;
  }

  let regs = [...(registrosPorProducto[prod] || [])];

  // Filtrar por fecha si está seleccionada
  if(fecha) regs = regs.filter(r => r.asignacion === fecha);

  // Ordenar por monto
  regs.sort((a,b) => orden === "asc" ? a.monto - b.monto : b.monto - a.monto);

  // Mostrar cantidad
  $("#mCantidadRegistros").val(regs.length);
  $("#mBadgeCantidad").text(`${regs.length} registros`).show();
  $("#checkTodos").prop("checked", false);

  if(!regs.length){
    $("#mTbodyRegistros").html(`
      <tr><td colspan="5" class="text-center text-muted py-4">
        Sin registros para los filtros seleccionados
      </td></tr>`);
    return;
  }

  $("#mTbodyRegistros").html(
    regs.map(r => `
      <tr>
        <td class="text-center">
          <input type="checkbox" class="form-check-input mcheck">
        </td>
        <td>${r.producto}</td>
        <td>${r.asignacion}</td>
        <td class="text-success fw-bold">${fmtMonto(r.monto)}</td>
        <td><span class="badge bg-light text-dark border">${r.segmento}</span></td>
      </tr>`
    ).join("")
  );
}

function toggleCheckTodos(el){
  $(".mcheck").prop("checked", $(el).is(":checked"));
}

function mLimpiarFiltros(){
  $("#mFiltroProducto, #mFiltroAsignacion").prop("selectedIndex", 0);
  $("#mFiltroOrdenMonto").val("asc");
  $("#mCantidadRegistros").val("");
  $("#mBadgeCantidad").hide();
  $("#checkTodos").prop("checked", false);
  $("#mFiltroAsignacion").html(`<option value="">-- Seleccione producto --</option>`);
  $("#mTbodyRegistros").html(`
    <tr><td colspan="5" class="text-center text-muted py-4">
      <i class="bi bi-search me-1"></i>Aplique filtros para ver datos
    </td></tr>`);
}

// ─── TABLA REASIGNACIÓN ─────────────────────────────────────────────────────

function mAgregarFilaReasignacion(){
  $("#mFilaVacia").remove();

  const optsZona = zonas.map(z => `<option>${z}</option>`).join("");

  // Sucursales según zona (se actualizan al cambiar zona)
  const optsSuc = Object.keys(usuariosPorSucursal)
    .map(s => `<option>${s}</option>`).join("");

  const rowId = `mRow_${Date.now()}`;

  $("#mTbodyReasignacion").append(`
    <tr id="${rowId}">
      <td class="text-center">
        <input type="checkbox" class="form-check-input" checked>
      </td>
      <td>
        <select class="form-select form-select-sm msel-zona"
          onchange="mActualizarSucursales(this, '${rowId}')">
          <option value="">-- Zona --</option>
          ${optsZona}
        </select>
      </td>
      <td>
        <select class="form-select form-select-sm msel-sucursal"
          onchange="mActualizarEjecutivos(this, '${rowId}')">
          <option value="">-- Sucursal --</option>
          ${optsSuc}
        </select>
      </td>
      <td>
        <select class="form-select form-select-sm msel-ejecutivo">
          <option value="">-- Ejecutivo --</option>
        </select>
      </td>
      <td class="text-center">
        <button class="btn btn-outline-danger btn-sm py-0 px-1 btn-eliminar-fila-m">
          <i class="bi bi-trash"></i>
        </button>
      </td>
    </tr>`);
}

// Al cambiar zona → filtrar sucursales de esa zona
function mActualizarSucursales(sel, rowId){
  const zona    = $(sel).val();
  const $row    = $(`#${rowId}`);
  const $selSuc = $row.find(".msel-sucursal");
  const $selEj  = $row.find(".msel-ejecutivo");

  // Filtrar sucursales cuyos usuarios pertenecen a esa zona
  let sucs = Object.keys(usuariosPorSucursal);
  if(zona){
    sucs = sucs.filter(s =>
      usuariosPorSucursal[s].some(u => u.zona === zona)
    );
  }

  let opts = `<option value="">-- Sucursal --</option>`;
  sucs.forEach(s => { opts += `<option>${s}</option>`; });
  $selSuc.html(opts);
  $selEj.html(`<option value="">-- Ejecutivo --</option>`);
}

// Al cambiar sucursal → cargar ejecutivos de esa sucursal
function mActualizarEjecutivos(sel, rowId){
  const sucursal = $(sel).val();
  const $selEj   = $(`#${rowId}`).find(".msel-ejecutivo");

  const ejecutivos = ejecutivosPorSucursal[sucursal] || [];
  let opts = `<option value="">-- Ejecutivo --</option>`;
  ejecutivos.forEach(e => { opts += `<option>${e}</option>`; });
  $selEj.html(opts);
}

function mReasignar(){
  const filas = $("#mTbodyReasignacion tr:not(#mFilaVacia)").length;
  if(!filas){
    alert("⚠️ Agrega al menos una fila de reasignación.");
    return;
  }

  // Validar que cada fila tenga zona, sucursal y ejecutivo
  let valido = true;
  $("#mTbodyReasignacion tr:not(#mFilaVacia)").each(function(){
    const zona     = $(this).find(".msel-zona").val();
    const sucursal = $(this).find(".msel-sucursal").val();
    const ejecutivo= $(this).find(".msel-ejecutivo").val();
    if(!zona || !sucursal || !ejecutivo){
      valido = false;
    }
  });

  if(!valido){
    alert("⚠️ Completa Zona, Sucursal y Ejecutivo en todas las filas.");
    return;
  }

  const seleccionados = $(".mcheck:checked").length;
  if(!seleccionados){
    const ok = confirm("⚠️ No hay registros seleccionados en la tabla.\n¿Reasignar de todas formas?");
    if(!ok) return;
  }

  $("#mMsgExito").show();
  setTimeout(() => $("#mMsgExito").fadeOut(600), 3000);
}

$(document).on("click", ".btn-eliminar-fila-m", function(){
  $(this).closest("tr").remove();
  if($("#mTbodyReasignacion tr").length === 0){
    $("#mTbodyReasignacion").html(`
      <tr id="mFilaVacia">
        <td colspan="5" class="text-center text-muted py-3">
          Agregue filas para reasignar
        </td>
      </tr>`);
  }
});