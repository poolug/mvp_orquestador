console.log("Script de datos para orquestador - Versión 2.0");

// =======================================================================
// Columnas: ID_CLIENTE, NOMBRE_CLIENTE, APELLIDO_PATERNO, APELLIDO_MATERNO,
//   SEXO, EDAD, AREAFONO1, COMUNA, REGION, PRODUCTO, CAMPANA, FECHABASE,
//   SEGMENTO, AFINIDAD, MONTO_REPACTACION, TASA, PLAZO_SUGERIDO,
//   PROPENSION_COLOR, PROVEEDOR, PRIORIZACION, PLAN_COBRANZA
// =======================================================================
// ── ZONAS ───────────────────────────────────────────────────────────────
const zonas = ["Zona Norte", "Zona Sur", "Zona Centro", "Zona Oriente"];

// ── GRUPOS ──────────────────────────────────────────────────────────────
const grupos = [
  "Jumbo La Serena", "Jumbo Los Angeles", "Easy Valparaiso", "Paris Plaza Vespucio",
  "Grupo Empresas", "Grupo Riesgo", "Grupo Elite", "Grupo Recovery"
];

// ── SUCURSALES ───────────────────────────────────────────────────────────
const sucursales = [
  "Sucursal Santiago", "Sucursal Las Condes", "Sucursal Providencia",
  "Sucursal Viña del Mar", "Sucursal Concepción", "Sucursal Temuco",
  "Sucursal Rancagua", "Sucursal Talca", "Sucursal Puerto Montt",
  "Sucursal Antofagasta", "Sucursal Iquique", "Sucursal Copiapó",
  "Sucursal Chillán", "Sucursal Valdivia", "Sucursal Osorno",
  "Sucursal Punta Arenas", "Sucursal Maipú", "Sucursal Ñuñoa",
  "Sucursal Quilicura", "Sucursal La Florida"
];

// ── EJECUTIVOS POR SUCURSAL ──────────────────────────────────────────────
// Nombres reales basados en el patrón del CSV (NOMBRE_CLIENTE + APELLIDO_PATERNO)
const ejecutivosPorSucursal = {
  "Sucursal Santiago": ["Carlos Mendoza", "Ana Torres", "Patricia Muñoz", "Jorge Salinas"],
  "Sucursal Las Condes": ["Diego Herrera", "Claudia Vargas", "Felipe Araya"],
  "Sucursal Providencia": ["Valentina Rojas", "Andrés Fuentes"],
  "Sucursal Viña del Mar": ["Daniela Pinto", "Lorena Campos", "Tomás Pereira"],
  "Sucursal Concepción": ["Paola Espinoza", "Mauricio Torres", "Cristina Vega"],
  "Sucursal Temuco": ["Javiera Sepúlveda", "Gonzalo Díaz"],
  "Sucursal Rancagua": ["Ignacio Mena", "María Silva", "Jorge Navarro"],
  "Sucursal Talca": ["Rosa Gutiérrez", "Pablo Contreras"],
  "Sucursal Puerto Montt": ["Sofía Ramírez", "Luis Fernández"],
  "Sucursal Antofagasta": ["Camila Ortiz", "Sebastián Vera", "Natalia Bravo"],
  "Sucursal Iquique": ["Rodrigo Pizarro", "Carmen López"],
  "Sucursal Copiapó": ["Alejandro Ramos", "Francisca Soto"],
  "Sucursal Chillán": ["Tomás Vega", "Catalina Moreno"],
  "Sucursal Valdivia": ["Esteban Flores", "Bárbara Jiménez"],
  "Sucursal Osorno": ["Nicolás Castro", "Pilar Medina"],
  "Sucursal Punta Arenas": ["Matías Robles", "Isidora Cárdenas"],
  "Sucursal Maipú": ["Héctor Alvarado", "Gloria Peña", "César Molina"],
  "Sucursal Ñuñoa": ["Constanza Ruiz", "David Araya"],
  "Sucursal Quilicura": ["Fernanda Salinas", "Alexis Núñez"],
  "Sucursal La Florida": ["Mónica Carrasco", "Eduardo Tapia", "Vanessa Cid"],
};

// ── USUARIOS POR SUCURSAL ────────────────────────────────────────────────
// Licencias: Ejecutivo, Jefe, Zonal
// Los ejecutivos de cada sucursal coinciden con ejecutivosPorSucursal
const usuariosPorSucursal = {
  "Sucursal Santiago": [
    { id: 1, nombre: "Carlos Mendoza", licencia: "Ejecutivo", zona: "Zona Centro", grupo: "Jumbo La Serena" },
    { id: 2, nombre: "Ana Torres", licencia: "Ejecutivo", zona: "Zona Centro", grupo: "Jumbo La Serena" },
    { id: 3, nombre: "Patricia Muñoz", licencia: "Ejecutivo", zona: "Zona Centro", grupo: "Paris Plaza Vespucio" },
    { id: 4, nombre: "Jorge Salinas", licencia: "Ejecutivo", zona: "Zona Centro", grupo: "Jumbo La Serena" },
    { id: 5, nombre: "Roberto Sánchez", licencia: "Jefe", zona: "Zona Centro", grupo: "Jumbo La Serena" },
  ],
  "Sucursal Las Condes": [
    { id: 6, nombre: "Diego Herrera", licencia: "Ejecutivo", zona: "Zona Oriente", grupo: "Grupo Elite" },
    { id: 7, nombre: "Claudia Vargas", licencia: "Ejecutivo", zona: "Zona Oriente", grupo: "Grupo Elite" },
    { id: 8, nombre: "Felipe Araya", licencia: "Ejecutivo", zona: "Zona Oriente", grupo: "Grupo Elite" },
    { id: 9, nombre: "Marcelo Reyes", licencia: "Jefe", zona: "Zona Oriente", grupo: "Grupo Elite" },
  ],
  "Sucursal Providencia": [
    { id: 10, nombre: "Valentina Rojas", licencia: "Ejecutivo", zona: "Zona Centro", grupo: "Jumbo Los Angeles" },
    { id: 11, nombre: "Andrés Fuentes", licencia: "Ejecutivo", zona: "Zona Centro", grupo: "Jumbo Los Angeles" },
    { id: 12, nombre: "Felipe Castillo", licencia: "Jefe", zona: "Zona Centro", grupo: "Jumbo Los Angeles" },
  ],
  "Sucursal Viña del Mar": [
    { id: 13, nombre: "Daniela Pinto", licencia: "Ejecutivo", zona: "Zona Norte", grupo: "Jumbo La Serena" },
    { id: 14, nombre: "Lorena Campos", licencia: "Ejecutivo", zona: "Zona Norte", grupo: "Jumbo La Serena" },
    { id: 15, nombre: "Tomás Pereira", licencia: "Ejecutivo", zona: "Zona Norte", grupo: "Jumbo La Serena" },
    { id: 16, nombre: "Héctor Morales", licencia: "Jefe", zona: "Zona Norte", grupo: "Jumbo La Serena" },
    { id: 17, nombre: "Catalina Zurita", licencia: "Zonal", zona: "Zona Norte", grupo: "Jumbo La Serena" },
  ],
  "Sucursal Concepción": [
    { id: 18, nombre: "Paola Espinoza", licencia: "Ejecutivo", zona: "Zona Sur", grupo: "Jumbo Los Angeles" },
    { id: 19, nombre: "Mauricio Torres", licencia: "Ejecutivo", zona: "Zona Sur", grupo: "Jumbo Los Angeles" },
    { id: 20, nombre: "Cristina Vega", licencia: "Ejecutivo", zona: "Zona Sur", grupo: "Jumbo Los Angeles" },
    { id: 21, nombre: "Cristián Lagos", licencia: "Jefe", zona: "Zona Sur", grupo: "Jumbo Los Angeles" },
  ],
  "Sucursal Temuco": [
    { id: 22, nombre: "Javiera Sepúlveda", licencia: "Ejecutivo", zona: "Zona Sur", grupo: "Grupo Recovery" },
    { id: 23, nombre: "Gonzalo Díaz", licencia: "Ejecutivo", zona: "Zona Sur", grupo: "Grupo Recovery" },
    { id: 24, nombre: "Camila Ibáñez", licencia: "Jefe", zona: "Zona Sur", grupo: "Grupo Recovery" },
  ],
  "Sucursal Rancagua": [
    { id: 25, nombre: "Ignacio Mena", licencia: "Ejecutivo", zona: "Zona Centro", grupo: "Easy Valparaiso" },
    { id: 26, nombre: "María Silva", licencia: "Ejecutivo", zona: "Zona Centro", grupo: "Easy Valparaiso" },
    { id: 27, nombre: "Jorge Navarro", licencia: "Ejecutivo", zona: "Zona Centro", grupo: "Easy Valparaiso" },
    { id: 28, nombre: "Pilar Venegas", licencia: "Jefe", zona: "Zona Centro", grupo: "Easy Valparaiso" },
  ],
  "Sucursal Talca": [
    { id: 29, nombre: "Rosa Gutiérrez", licencia: "Ejecutivo", zona: "Zona Centro", grupo: "Easy Valparaiso" },
    { id: 30, nombre: "Pablo Contreras", licencia: "Ejecutivo", zona: "Zona Centro", grupo: "Easy Valparaiso" },
    { id: 31, nombre: "Eduardo Leiva", licencia: "Jefe", zona: "Zona Centro", grupo: "Easy Valparaiso" },
  ],
  "Sucursal Puerto Montt": [
    { id: 32, nombre: "Sofía Ramírez", licencia: "Ejecutivo", zona: "Zona Sur", grupo: "Jumbo Los Angeles" },
    { id: 33, nombre: "Luis Fernández", licencia: "Ejecutivo", zona: "Zona Sur", grupo: "Jumbo Los Angeles" },
    { id: 34, nombre: "Sandra Acuña", licencia: "Jefe", zona: "Zona Sur", grupo: "Jumbo Los Angeles" },
  ],
  "Sucursal Antofagasta": [
    { id: 35, nombre: "Camila Ortiz", licencia: "Ejecutivo", zona: "Zona Norte", grupo: "Grupo Riesgo" },
    { id: 36, nombre: "Sebastián Vera", licencia: "Ejecutivo", zona: "Zona Norte", grupo: "Grupo Riesgo" },
    { id: 37, nombre: "Natalia Bravo", licencia: "Ejecutivo", zona: "Zona Norte", grupo: "Grupo Riesgo" },
    { id: 38, nombre: "Alejandro Núñez", licencia: "Jefe", zona: "Zona Norte", grupo: "Grupo Riesgo" },
    { id: 39, nombre: "Beatriz Aldea", licencia: "Zonal", zona: "Zona Norte", grupo: "Grupo Riesgo" },
  ],
  "Sucursal Iquique": [
    { id: 40, nombre: "Rodrigo Pizarro", licencia: "Ejecutivo", zona: "Zona Norte", grupo: "Jumbo La Serena" },
    { id: 41, nombre: "Carmen López", licencia: "Ejecutivo", zona: "Zona Norte", grupo: "Jumbo La Serena" },
    { id: 42, nombre: "Manuel Cid", licencia: "Jefe", zona: "Zona Norte", grupo: "Jumbo La Serena" },
  ],
  "Sucursal Copiapó": [
    { id: 43, nombre: "Alejandro Ramos", licencia: "Ejecutivo", zona: "Zona Norte", grupo: "Grupo Riesgo" },
    { id: 44, nombre: "Francisca Soto", licencia: "Ejecutivo", zona: "Zona Norte", grupo: "Grupo Riesgo" },
    { id: 45, nombre: "Víctor Ponce", licencia: "Jefe", zona: "Zona Norte", grupo: "Grupo Riesgo" },
  ],
  "Sucursal Chillán": [
    { id: 46, nombre: "Tomás Vega", licencia: "Ejecutivo", zona: "Zona Sur", grupo: "Jumbo Los Angeles" },
    { id: 47, nombre: "Catalina Moreno", licencia: "Ejecutivo", zona: "Zona Sur", grupo: "Jumbo Los Angeles" },
    { id: 48, nombre: "Renato Ibarra", licencia: "Jefe", zona: "Zona Sur", grupo: "Jumbo Los Angeles" },
  ],
  "Sucursal Valdivia": [
    { id: 49, nombre: "Esteban Flores", licencia: "Ejecutivo", zona: "Zona Sur", grupo: "Grupo Recovery" },
    { id: 50, nombre: "Bárbara Jiménez", licencia: "Ejecutivo", zona: "Zona Sur", grupo: "Grupo Recovery" },
    { id: 51, nombre: "Ingrid Saavedra", licencia: "Jefe", zona: "Zona Sur", grupo: "Grupo Recovery" },
  ],
  "Sucursal Osorno": [
    { id: 52, nombre: "Nicolás Castro", licencia: "Ejecutivo", zona: "Zona Sur", grupo: "Jumbo Los Angeles" },
    { id: 53, nombre: "Pilar Medina", licencia: "Ejecutivo", zona: "Zona Sur", grupo: "Jumbo Los Angeles" },
    { id: 54, nombre: "Jaime Espejo", licencia: "Jefe", zona: "Zona Sur", grupo: "Jumbo Los Angeles" },
  ],
  "Sucursal Punta Arenas": [
    { id: 55, nombre: "Matías Robles", licencia: "Ejecutivo", zona: "Zona Sur", grupo: "Grupo Recovery" },
    { id: 56, nombre: "Isidora Cárdenas", licencia: "Ejecutivo", zona: "Zona Sur", grupo: "Grupo Recovery" },
    { id: 57, nombre: "Patricia Cea", licencia: "Jefe", zona: "Zona Sur", grupo: "Grupo Recovery" },
  ],
  "Sucursal Maipú": [
    { id: 58, nombre: "Héctor Alvarado", licencia: "Ejecutivo", zona: "Zona Centro", grupo: "Easy Valparaiso" },
    { id: 59, nombre: "Gloria Peña", licencia: "Ejecutivo", zona: "Zona Centro", grupo: "Easy Valparaiso" },
    { id: 60, nombre: "César Molina", licencia: "Ejecutivo", zona: "Zona Centro", grupo: "Easy Valparaiso" },
    { id: 61, nombre: "Adriana Fuentes", licencia: "Jefe", zona: "Zona Centro", grupo: "Easy Valparaiso" },
  ],
  "Sucursal Ñuñoa": [
    { id: 62, nombre: "Constanza Ruiz", licencia: "Ejecutivo", zona: "Zona Oriente", grupo: "Paris Plaza Vespucio" },
    { id: 63, nombre: "David Araya", licencia: "Ejecutivo", zona: "Zona Oriente", grupo: "Paris Plaza Vespucio" },
    { id: 64, nombre: "Rodrigo Blanc", licencia: "Jefe", zona: "Zona Oriente", grupo: "Paris Plaza Vespucio" },
  ],
  "Sucursal Quilicura": [
    { id: 65, nombre: "Fernanda Salinas", licencia: "Ejecutivo", zona: "Zona Norte", grupo: "Easy Valparaiso" },
    { id: 66, nombre: "Alexis Núñez", licencia: "Ejecutivo", zona: "Zona Norte", grupo: "Easy Valparaiso" },
    { id: 67, nombre: "Andrea Meza", licencia: "Jefe", zona: "Zona Norte", grupo: "Easy Valparaiso" },
    { id: 68, nombre: "Gabriel Leiva", licencia: "Zonal", zona: "Zona Norte", grupo: "Easy Valparaiso" },
  ],
  "Sucursal La Florida": [
    { id: 69, nombre: "Mónica Carrasco", licencia: "Ejecutivo", zona: "Zona Oriente", grupo: "Grupo Elite" },
    { id: 70, nombre: "Eduardo Tapia", licencia: "Ejecutivo", zona: "Zona Oriente", grupo: "Grupo Elite" },
    { id: 71, nombre: "Vanessa Cid", licencia: "Ejecutivo", zona: "Zona Oriente", grupo: "Grupo Elite" },
    { id: 72, nombre: "Rodrigo Espinoza", licencia: "Jefe", zona: "Zona Oriente", grupo: "Grupo Elite" },
  ],
};

// Helper: obtener todos los usuarios como array plano
function getTodosUsuarios() {
  return Object.entries(usuariosPorSucursal).flatMap(([suc, users]) =>
    users.map(u => ({ ...u, sucursal: suc }))
  );
}

// ── LICENCIAS ────────────────────────────────────────────────────────────
const licencias = ["Ejecutivo", "Jefe", "Zonal"];

// ── REGISTROS POR PRODUCTO ───────────────────────────────────────────────
// Campos basados en columnas del CSV:
//   id_cliente    → ID_CLIENTE
//   nombre        → NOMBRE_CLIENTE + APELLIDO_PATERNO + APELLIDO_MATERNO
//   sexo          → SEXO (M/F)
//   edad          → EDAD
//   telefono      → AREAFONO1
//   comuna        → COMUNA
//   region        → REGION (número de región)
//   producto      → PRODUCTO
//   campana       → CAMPANA
//   asignacion    → FECHABASE (usado para filtros)
//   segmento      → SEGMENTO (Tramo_RDR / Tramo_A / Tramo_B)
//   afinidad      → AFINIDAD (1-5)
//   monto         → MONTO_REPACTACION (monto principal para asignación)
//   tasa          → TASA
//   plazo         → PLAZO_SUGERIDO (meses)
//   propension    → PROPENSION_COLOR (V=Verde / A=Amarillo / R=Rojo)
//   proveedor     → PROVEEDOR
//   priorizacion  → PRIORIZACION
//   plan_cobranza → PLAN_COBRANZA
const registrosPorProducto = {

  // ─── CONSOLIDACIÓN ──────────────────────────────────────────────────
  "CONSOLIDACIÓN": [
    {
      id: 1, id_cliente: 324682946, nombre: "Jesús Pérez Marcano", sexo: "M", edad: 37, telefono: "934642662", comuna: "Santiago", region: 13,
      producto: "CONSOLIDACIÓN", campana: "REPA", asignacion: "15-04-2026", segmento: "Tramo_RDR", afinidad: 3, monto: 1040491, tasa: "3.30%", plazo: 36, propension: "V", proveedor: "IBR CHILE", priorizacion: 7635, plan_cobranza: 2
    },
    {
      id: 2, id_cliente: 2555900, nombre: "María Díaz Cornejo", sexo: "F", edad: 58, telefono: "988542880", comuna: "La Serena", region: 4,
      producto: "CONSOLIDACIÓN", campana: "REPA", asignacion: "15-04-2026", segmento: "Tramo_A", afinidad: 4, monto: 3843231, tasa: "1.98%", plazo: 48, propension: "V", proveedor: "IBR CHILE", priorizacion: 29043, plan_cobranza: 2
    },
    {
      id: 3, id_cliente: 8821340, nombre: "Carlos González Ruiz", sexo: "M", edad: 45, telefono: "912345678", comuna: "Maipú", region: 13,
      producto: "CONSOLIDACIÓN", campana: "REPA", asignacion: "15-04-2026", segmento: "Tramo_B", afinidad: 2, monto: 750000, tasa: "4.10%", plazo: 24, propension: "A", proveedor: "IBR CHILE", priorizacion: 3210, plan_cobranza: 1
    },
    {
      id: 4, id_cliente: 5543210, nombre: "Ana Rodríguez Soto", sexo: "F", edad: 32, telefono: "956781234", comuna: "Providencia", region: 13,
      producto: "CONSOLIDACIÓN", campana: "REPA", asignacion: "15-04-2026", segmento: "Tramo_RDR", afinidad: 5, monto: 2150000, tasa: "2.75%", plazo: 36, propension: "V", proveedor: "IBR CHILE", priorizacion: 15400, plan_cobranza: 2
    },
    {
      id: 5, id_cliente: 7712389, nombre: "Luis Martínez Flores", sexo: "M", edad: 50, telefono: "978654321", comuna: "Pudahuel", region: 13,
      producto: "CONSOLIDACIÓN", campana: "REPA", asignacion: "16-04-2026", segmento: "Tramo_A", afinidad: 3, monto: 1875000, tasa: "3.50%", plazo: 36, propension: "A", proveedor: "IBR CHILE", priorizacion: 9870, plan_cobranza: 2
    },
    {
      id: 6, id_cliente: 3398754, nombre: "Carmen López Herrera", sexo: "F", edad: 41, telefono: "934512890", comuna: "Las Condes", region: 13,
      producto: "CONSOLIDACIÓN", campana: "REPA", asignacion: "16-04-2026", segmento: "Tramo_B", afinidad: 1, monto: 480000, tasa: "4.80%", plazo: 18, propension: "R", proveedor: "IBR CHILE", priorizacion: 1500, plan_cobranza: 1
    },
    {
      id: 7, id_cliente: 9901234, nombre: "Jorge Sánchez Pérez", sexo: "M", edad: 29, telefono: "967123456", comuna: "Ñuñoa", region: 13,
      producto: "CONSOLIDACIÓN", campana: "REPA", asignacion: "16-04-2026", segmento: "Tramo_RDR", afinidad: 4, monto: 3200000, tasa: "2.50%", plazo: 48, propension: "V", proveedor: "IBR CHILE", priorizacion: 22100, plan_cobranza: 2
    },
    {
      id: 8, id_cliente: 4456789, nombre: "Rosa Torres Medina", sexo: "F", edad: 55, telefono: "945678901", comuna: "La Florida", region: 13,
      producto: "CONSOLIDACIÓN", campana: "REPA", asignacion: "17-04-2026", segmento: "Tramo_A", afinidad: 2, monto: 960000, tasa: "3.90%", plazo: 24, propension: "A", proveedor: "IBR CHILE", priorizacion: 5200, plan_cobranza: 1
    },
    {
      id: 9, id_cliente: 6623891, nombre: "Pablo García Vega", sexo: "M", edad: 38, telefono: "989012345", comuna: "Quilicura", region: 13,
      producto: "CONSOLIDACIÓN", campana: "REPA", asignacion: "17-04-2026", segmento: "Tramo_B", afinidad: 3, monto: 1320000, tasa: "3.20%", plazo: 36, propension: "V", proveedor: "IBR CHILE", priorizacion: 8900, plan_cobranza: 2
    },
    {
      id: 10, id_cliente: 1187654, nombre: "Elena Ramírez Contreras", sexo: "F", edad: 46, telefono: "912098765", comuna: "Viña del Mar", region: 5,
      producto: "CONSOLIDACIÓN", campana: "REPA", asignacion: "17-04-2026", segmento: "Tramo_RDR", afinidad: 5, monto: 4750000, tasa: "1.75%", plazo: 60, propension: "V", proveedor: "IBR CHILE", priorizacion: 31500, plan_cobranza: 2
    },
    {
      id: 11, id_cliente: 2234567, nombre: "Miguel Flores Castro", sexo: "M", edad: 33, telefono: "956701234", comuna: "Concepción", region: 8,
      producto: "CONSOLIDACIÓN", campana: "REPA", asignacion: "22-04-2026", segmento: "Tramo_A", afinidad: 3, monto: 1100000, tasa: "3.40%", plazo: 36, propension: "A", proveedor: "IBR CHILE", priorizacion: 7200, plan_cobranza: 2
    },
    {
      id: 12, id_cliente: 8876543, nombre: "Claudia Morales Jiménez", sexo: "F", edad: 48, telefono: "978231456", comuna: "Temuco", region: 9,
      producto: "CONSOLIDACIÓN", campana: "REPA", asignacion: "22-04-2026", segmento: "Tramo_B", afinidad: 2, monto: 620000, tasa: "4.50%", plazo: 18, propension: "R", proveedor: "IBR CHILE", priorizacion: 2100, plan_cobranza: 1
    },
    {
      id: 13, id_cliente: 3345678, nombre: "Roberto Castro Espinoza", sexo: "M", edad: 42, telefono: "934321098", comuna: "Rancagua", region: 6,
      producto: "CONSOLIDACIÓN", campana: "REPA", asignacion: "22-04-2026", segmento: "Tramo_RDR", afinidad: 4, monto: 2800000, tasa: "2.90%", plazo: 48, propension: "V", proveedor: "IBR CHILE", priorizacion: 18700, plan_cobranza: 2
    },
    {
      id: 14, id_cliente: 7789012, nombre: "Valentina Jiménez Rojas", sexo: "F", edad: 27, telefono: "967890123", comuna: "Talca", region: 7,
      producto: "CONSOLIDACIÓN", campana: "REPA", asignacion: "25-04-2026", segmento: "Tramo_A", afinidad: 3, monto: 1450000, tasa: "3.15%", plazo: 36, propension: "V", proveedor: "IBR CHILE", priorizacion: 9500, plan_cobranza: 2
    },
    {
      id: 15, id_cliente: 5512345, nombre: "Felipe Rojas Fuentes", sexo: "M", edad: 51, telefono: "945012345", comuna: "Puerto Montt", region: 10,
      producto: "CONSOLIDACIÓN", campana: "REPA", asignacion: "25-04-2026", segmento: "Tramo_B", afinidad: 1, monto: 390000, tasa: "5.00%", plazo: 12, propension: "R", proveedor: "IBR CHILE", priorizacion: 1200, plan_cobranza: 1
    },
    {
      id: 16, id_cliente: 9945678, nombre: "Daniela Fuentes Vargas", sexo: "F", edad: 36, telefono: "989234567", comuna: "Antofagasta", region: 2,
      producto: "CONSOLIDACIÓN", campana: "REPA", asignacion: "25-04-2026", segmento: "Tramo_RDR", afinidad: 5, monto: 5100000, tasa: "1.60%", plazo: 60, propension: "V", proveedor: "IBR CHILE", priorizacion: 34200, plan_cobranza: 2
    },
    {
      id: 17, id_cliente: 1156789, nombre: "Andrés Vargas Pinto", sexo: "M", edad: 44, telefono: "912345670", comuna: "Iquique", region: 1,
      producto: "CONSOLIDACIÓN", campana: "REPA", asignacion: "28-04-2026", segmento: "Tramo_A", afinidad: 2, monto: 870000, tasa: "3.80%", plazo: 24, propension: "A", proveedor: "IBR CHILE", priorizacion: 4300, plan_cobranza: 1
    },
    {
      id: 18, id_cliente: 6689012, nombre: "Patricia Muñoz Araya", sexo: "F", edad: 53, telefono: "956890123", comuna: "Copiapó", region: 3,
      producto: "CONSOLIDACIÓN", campana: "REPA", asignacion: "28-04-2026", segmento: "Tramo_B", afinidad: 3, monto: 1230000, tasa: "3.30%", plazo: 36, propension: "A", proveedor: "IBR CHILE", priorizacion: 8100, plan_cobranza: 2
    },
    {
      id: 19, id_cliente: 2267890, nombre: "Ignacio Cortés Navarro", sexo: "M", edad: 31, telefono: "978012345", comuna: "Chillán", region: 16,
      producto: "CONSOLIDACIÓN", campana: "REPA", asignacion: "28-04-2026", segmento: "Tramo_RDR", afinidad: 4, monto: 3600000, tasa: "2.20%", plazo: 48, propension: "V", proveedor: "IBR CHILE", priorizacion: 24000, plan_cobranza: 2
    },
    {
      id: 20, id_cliente: 8834567, nombre: "Sofía Bravo Sepúlveda", sexo: "F", edad: 39, telefono: "934678901", comuna: "Valdivia", region: 14,
      producto: "CONSOLIDACIÓN", campana: "REPA", asignacion: "28-04-2026", segmento: "Tramo_A", afinidad: 3, monto: 1580000, tasa: "3.00%", plazo: 36, propension: "V", proveedor: "IBR CHILE", priorizacion: 10500, plan_cobranza: 2
    },
    {
      id: 21, id_cliente: 1198765, nombre: "Ricardo Martínez Silva", sexo: "M", edad: 47, telefono: "945678123", comuna: "Osorno", region: 15,
      producto: "CONSOLIDACIÓN", campana: "REPA", asignacion: "29-04-2026", segmento: "Tramo_B", afinidad: 1, monto: 450000, tasa: "4.70%", plazo: 18, propension: "R", proveedor: "IBR CHILE", priorizacion: 1800, plan_cobranza: 1
    },
    {
      id: 22, id_cliente: 6678901, nombre: "María González Fuentes", sexo: "F", edad: 42, telefono: "989012670", comuna: "Punta Arenas", region: 12,
      producto: "CONSOLIDACIÓN", campana: "REPA", asignacion: "29-04-2026", segmento: "Tramo_RDR", afinidad: 5, monto: 4200000, tasa: "1.90%", plazo: 60, propension: "V", proveedor: "IBR CHILE", priorizacion: 25200, plan_cobranza: 2
    },
    {
      id: 23, id_cliente: 3345671, nombre: "Jorge Ramírez Castillo", sexo: "M", edad: 36, telefono: "912345678", comuna: "Maipú", region: 13,
      producto: "CONSOLIDACIÓN", campana: "REPA", asignacion: "29-04-2026", segmento: "Tramo_A", afinidad: 2, monto: 780000, tasa: "4.20%", plazo: 24, propension: "A", proveedor: "IBR CHILE", priorizacion: 3600, plan_cobranza: 1
    }
  ],

  // ─── HIPOTECARIO ────────────────────────────────────────────────────
  "HIPOTECARIO": [
    {
      id: 1, id_cliente: 3312456, nombre: "Marcela Soto Gutiérrez", sexo: "F", edad: 42, telefono: "956712345", comuna: "Santiago", region: 13,
      producto: "HIPOTECARIO", campana: "HIPOTECARIO", asignacion: "15-04-2026", segmento: "Tramo_RDR", afinidad: 3, monto: 12500000, tasa: "5.80%", plazo: 120, propension: "V", proveedor: "IBR CHILE", priorizacion: 85000, plan_cobranza: 3
    },
    {
      id: 2, id_cliente: 7723456, nombre: "Rodrigo Pizarro Mena", sexo: "M", edad: 48, telefono: "978912345", comuna: "Las Condes", region: 13,
      producto: "HIPOTECARIO", campana: "HIPOTECARIO", asignacion: "15-04-2026", segmento: "Tramo_A", afinidad: 4, monto: 8900000, tasa: "6.10%", plazo: 96, propension: "V", proveedor: "IBR CHILE", priorizacion: 62000, plan_cobranza: 3
    },
    {
      id: 3, id_cliente: 5534567, nombre: "Isidora Cárdenas Robles", sexo: "F", edad: 35, telefono: "912678901", comuna: "Providencia", region: 13,
      producto: "HIPOTECARIO", campana: "HIPOTECARIO", asignacion: "15-04-2026", segmento: "Tramo_B", afinidad: 2, monto: 6400000, tasa: "6.50%", plazo: 84, propension: "A", proveedor: "IBR CHILE", priorizacion: 44000, plan_cobranza: 2
    },
    {
      id: 4, id_cliente: 9956789, nombre: "Fernando Alvarado Peña", sexo: "M", edad: 55, telefono: "945234567", comuna: "Viña del Mar", region: 5,
      producto: "HIPOTECARIO", campana: "HIPOTECARIO", asignacion: "15-04-2026", segmento: "Tramo_RDR", afinidad: 5, monto: 19800000, tasa: "5.20%", plazo: 180, propension: "V", proveedor: "IBR CHILE", priorizacion: 138000, plan_cobranza: 3
    },
    {
      id: 5, id_cliente: 1178901, nombre: "Gabriela Medina Castro", sexo: "F", edad: 38, telefono: "989456789", comuna: "Concepción", region: 8,
      producto: "HIPOTECARIO", campana: "HIPOTECARIO", asignacion: "16-04-2026", segmento: "Tramo_A", afinidad: 3, monto: 15700000, tasa: "5.60%", plazo: 144, propension: "V", proveedor: "IBR CHILE", priorizacion: 109000, plan_cobranza: 3
    },
    {
      id: 6, id_cliente: 4489012, nombre: "Héctor Espejo Leiva", sexo: "M", edad: 61, telefono: "912890123", comuna: "Santiago", region: 13,
      producto: "HIPOTECARIO", campana: "HIPOTECARIO", asignacion: "16-04-2026", segmento: "Tramo_B", afinidad: 2, monto: 9200000, tasa: "6.30%", plazo: 96, propension: "A", proveedor: "IBR CHILE", priorizacion: 64000, plan_cobranza: 2
    },
    {
      id: 7, id_cliente: 7790123, nombre: "Cecilia Tapia Flores", sexo: "F", edad: 44, telefono: "956534789", comuna: "Maipú", region: 13,
      producto: "HIPOTECARIO", campana: "HIPOTECARIO", asignacion: "16-04-2026", segmento: "Tramo_RDR", afinidad: 4, monto: 20000000, tasa: "5.10%", plazo: 180, propension: "V", proveedor: "IBR CHILE", priorizacion: 140000, plan_cobranza: 3
    },
    {
      id: 8, id_cliente: 2289012, nombre: "Alejandro Ruiz Morales", sexo: "M", edad: 52, telefono: "978345678", comuna: "La Florida", region: 13,
      producto: "HIPOTECARIO", campana: "HIPOTECARIO", asignacion: "17-04-2026", segmento: "Tramo_A", afinidad: 3, monto: 11300000, tasa: "5.90%", plazo: 120, propension: "V", proveedor: "IBR CHILE", priorizacion: 79000, plan_cobranza: 3
    },
    {
      id: 9, id_cliente: 6690123, nombre: "Lorena Salinas Contreras", sexo: "F", edad: 29, telefono: "934456789", comuna: "Temuco", region: 9,
      producto: "HIPOTECARIO", campana: "HIPOTECARIO", asignacion: "17-04-2026", segmento: "Tramo_B", afinidad: 1, monto: 7100000, tasa: "6.70%", plazo: 72, propension: "R", proveedor: "IBR CHILE", priorizacion: 49000, plan_cobranza: 2
    },
    {
      id: 10, id_cliente: 3378901, nombre: "Ricardo Vega Jara", sexo: "M", edad: 47, telefono: "967012345", comuna: "Rancagua", region: 6,
      producto: "HIPOTECARIO", campana: "HIPOTECARIO", asignacion: "17-04-2026", segmento: "Tramo_RDR", afinidad: 5, monto: 16500000, tasa: "5.30%", plazo: 156, propension: "V", proveedor: "IBR CHILE", priorizacion: 115000, plan_cobranza: 3
    },
    {
      id: 11, id_cliente: 8867890, nombre: "Andrea Molina Reyes", sexo: "F", edad: 36, telefono: "945123456", comuna: "Antofagasta", region: 2,
      producto: "HIPOTECARIO", campana: "HIPOTECARIO", asignacion: "22-04-2026", segmento: "Tramo_A", afinidad: 3, monto: 13200000, tasa: "5.70%", plazo: 132, propension: "V", proveedor: "IBR CHILE", priorizacion: 92000, plan_cobranza: 3
    },
    {
      id: 12, id_cliente: 5567890, nombre: "Nicolás Fuentes Díaz", sexo: "M", edad: 53, telefono: "989678901", comuna: "Puerto Montt", region: 10,
      producto: "HIPOTECARIO", campana: "HIPOTECARIO", asignacion: "22-04-2026", segmento: "Tramo_B", afinidad: 2, monto: 8100000, tasa: "6.40%", plazo: 84, propension: "A", proveedor: "IBR CHILE", priorizacion: 56000, plan_cobranza: 2
    },
    {
      id: 13, id_cliente: 1156901, nombre: "Fernanda Araya Torres", sexo: "F", edad: 40, telefono: "912234567", comuna: "Valdivia", region: 14,
      producto: "HIPOTECARIO", campana: "HIPOTECARIO", asignacion: "22-04-2026", segmento: "Tramo_RDR", afinidad: 4, monto: 18400000, tasa: "5.15%", plazo: 168, propension: "V", proveedor: "IBR CHILE", priorizacion: 128000, plan_cobranza: 3
    },
    {
      id: 14, id_cliente: 9912345, nombre: "Matías Ibarra Soto", sexo: "M", edad: 34, telefono: "956789012", comuna: "Quilicura", region: 13,
      producto: "HIPOTECARIO", campana: "HIPOTECARIO", asignacion: "25-04-2026", segmento: "Tramo_A", afinidad: 3, monto: 10500000, tasa: "6.00%", plazo: 108, propension: "V", proveedor: "IBR CHILE", priorizacion: 73000, plan_cobranza: 3
    },
    {
      id: 15, id_cliente: 4423456, nombre: "Camila Ponce Espinoza", sexo: "F", edad: 57, telefono: "978567890", comuna: "Ñuñoa", region: 13,
      producto: "HIPOTECARIO", campana: "HIPOTECARIO", asignacion: "25-04-2026", segmento: "Tramo_B", afinidad: 2, monto: 7800000, tasa: "6.55%", plazo: 72, propension: "A", proveedor: "IBR CHILE", priorizacion: 54000, plan_cobranza: 2
    },
    {
      id: 16, id_cliente: 7745678, nombre: "Eduardo Cea Rojas", sexo: "M", edad: 43, telefono: "934567891", comuna: "Punta Arenas", region: 12,
      producto: "HIPOTECARIO", campana: "HIPOTECARIO", asignacion: "25-04-2026", segmento: "Tramo_RDR", afinidad: 5, monto: 22000000, tasa: "5.00%", plazo: 180, propension: "V", proveedor: "IBR CHILE", priorizacion: 154000, plan_cobranza: 3
    },
    {
      id: 17, id_cliente: 2256789, nombre: "Pilar Castillo Navarro", sexo: "F", edad: 50, telefono: "967234567", comuna: "Osorno", region: 10,
      producto: "HIPOTECARIO", campana: "HIPOTECARIO", asignacion: "28-04-2026", segmento: "Tramo_A", afinidad: 3, monto: 9600000, tasa: "6.05%", plazo: 108, propension: "V", proveedor: "IBR CHILE", priorizacion: 67000, plan_cobranza: 3
    },
    {
      id: 18, id_cliente: 8890123, nombre: "Sebastián Ortega Vargas", sexo: "M", edad: 46, telefono: "945890123", comuna: "Iquique", region: 1,
      producto: "HIPOTECARIO", campana: "HIPOTECARIO", asignacion: "28-04-2026", segmento: "Tramo_B", afinidad: 2, monto: 6700000, tasa: "6.60%", plazo: 72, propension: "R", proveedor: "IBR CHILE", priorizacion: 46000, plan_cobranza: 2
    },
    {
      id: 19, id_cliente: 3334567, nombre: "Verónica Henríquez Rojas", sexo: "F", edad: 37, telefono: "989012346", comuna: "Copiapó", region: 3,
      producto: "HIPOTECARIO", campana: "HIPOTECARIO", asignacion: "28-04-2026", segmento: "Tramo_RDR", afinidad: 4, monto: 14800000, tasa: "5.45%", plazo: 144, propension: "V", proveedor: "IBR CHILE", priorizacion: 103000, plan_cobranza: 3
    },
    {
      id: 20, id_cliente: 6612345, nombre: "Gustavo Lara Sepúlveda", sexo: "M", edad: 60, telefono: "912012345", comuna: "Chillán", region: 16,
      producto: "HIPOTECARIO", campana: "HIPOTECARIO", asignacion: "28-04-2026", segmento: "Tramo_A", afinidad: 3, monto: 11700000, tasa: "5.85%", plazo: 120, propension: "V", proveedor: "IBR CHILE", priorizacion: 81000, plan_cobranza: 3
    },
  ],

  // ─── CONSUMO ────────────────────────────────────────────────────────
  "CONSUMO": [
    {
      id: 1, id_cliente: 5501234, nombre: "Natalia Bravo Ortiz", sexo: "F", edad: 24, telefono: "934901234", comuna: "Santiago", region: 13,
      producto: "CONSUMO", campana: "CONSUMO", asignacion: "15-04-2026", segmento: "Tramo_B", afinidad: 2, monto: 500000, tasa: "7.50%", plazo: 18, propension: "A", proveedor: "IBR CHILE", priorizacion: 3100, plan_cobranza: 1
    },
    {
      id: 2, id_cliente: 8812345, nombre: "Javier Mena Silva", sexo: "M", edad: 31, telefono: "967345678", comuna: "Maipú", region: 13,
      producto: "CONSUMO", campana: "CONSUMO", asignacion: "15-04-2026", segmento: "Tramo_A", afinidad: 3, monto: 720000, tasa: "6.90%", plazo: 24, propension: "V", proveedor: "IBR CHILE", priorizacion: 4500, plan_cobranza: 1
    },
    {
      id: 3, id_cliente: 2223456, nombre: "Macarena Vidal Campos", sexo: "F", edad: 26, telefono: "945567890", comuna: "Quilicura", region: 13,
      producto: "CONSUMO", campana: "CONSUMO", asignacion: "15-04-2026", segmento: "Tramo_B", afinidad: 1, monto: 350000, tasa: "8.20%", plazo: 12, propension: "R", proveedor: "IBR CHILE", priorizacion: 2000, plan_cobranza: 1
    },
    {
      id: 4, id_cliente: 7734567, nombre: "Cristóbal Saavedra Jara", sexo: "M", edad: 40, telefono: "978678901", comuna: "La Florida", region: 13,
      producto: "CONSUMO", campana: "CONSUMO", asignacion: "15-04-2026", segmento: "Tramo_RDR", afinidad: 4, monto: 1100000, tasa: "6.20%", plazo: 36, propension: "V", proveedor: "IBR CHILE", priorizacion: 7200, plan_cobranza: 2
    },
    {
      id: 5, id_cliente: 4445678, nombre: "Bárbara Rojas Peña", sexo: "F", edad: 47, telefono: "912789012", comuna: "Viña del Mar", region: 5,
      producto: "CONSUMO", campana: "CONSUMO", asignacion: "16-04-2026", segmento: "Tramo_A", afinidad: 3, monto: 650000, tasa: "7.10%", plazo: 24, propension: "A", proveedor: "IBR CHILE", priorizacion: 4100, plan_cobranza: 1
    },
    {
      id: 6, id_cliente: 9967890, nombre: "Claudio Fuentes Gutiérrez", sexo: "M", edad: 22, telefono: "956890124", comuna: "Concepción", region: 8,
      producto: "CONSUMO", campana: "CONSUMO", asignacion: "16-04-2026", segmento: "Tramo_B", afinidad: 1, monto: 280000, tasa: "9.00%", plazo: 12, propension: "R", proveedor: "IBR CHILE", priorizacion: 1700, plan_cobranza: 1
    },
    {
      id: 7, id_cliente: 1189012, nombre: "Tamara Núñez Morales", sexo: "F", edad: 35, telefono: "989123456", comuna: "Temuco", region: 9,
      producto: "CONSUMO", campana: "CONSUMO", asignacion: "16-04-2026", segmento: "Tramo_RDR", afinidad: 4, monto: 980000, tasa: "6.40%", plazo: 30, propension: "V", proveedor: "IBR CHILE", priorizacion: 6300, plan_cobranza: 2
    },
    {
      id: 8, id_cliente: 6623457, nombre: "Roberto Herrera Ibarra", sexo: "M", edad: 54, telefono: "912234568", comuna: "Rancagua", region: 6,
      producto: "CONSUMO", campana: "CONSUMO", asignacion: "17-04-2026", segmento: "Tramo_A", afinidad: 2, monto: 430000, tasa: "7.70%", plazo: 18, propension: "A", proveedor: "IBR CHILE", priorizacion: 2700, plan_cobranza: 1
    },
    {
      id: 9, id_cliente: 3356789, nombre: "Valeria Espinoza Torres", sexo: "F", edad: 28, telefono: "956345679", comuna: "Talca", region: 7,
      producto: "CONSUMO", campana: "CONSUMO", asignacion: "17-04-2026", segmento: "Tramo_B", afinidad: 3, monto: 610000, tasa: "7.30%", plazo: 24, propension: "V", proveedor: "IBR CHILE", priorizacion: 3900, plan_cobranza: 1
    },
    {
      id: 10, id_cliente: 8878901, nombre: "Rodrigo Castillo Díaz", sexo: "M", edad: 43, telefono: "978456790", comuna: "Antofagasta", region: 2,
      producto: "CONSUMO", campana: "CONSUMO", asignacion: "17-04-2026", segmento: "Tramo_RDR", afinidad: 5, monto: 2300000, tasa: "5.90%", plazo: 42, propension: "V", proveedor: "IBR CHILE", priorizacion: 15000, plan_cobranza: 2
    },
    {
      id: 11, id_cliente: 5590123, nombre: "Gloria Leiva Soto", sexo: "F", edad: 49, telefono: "934012346", comuna: "Puerto Montt", region: 10,
      producto: "CONSUMO", campana: "CONSUMO", asignacion: "22-04-2026", segmento: "Tramo_A", afinidad: 2, monto: 750000, tasa: "7.00%", plazo: 24, propension: "A", proveedor: "IBR CHILE", priorizacion: 4700, plan_cobranza: 1
    },
    {
      id: 12, id_cliente: 2201234, nombre: "Diego Reyes Contreras", sexo: "M", edad: 20, telefono: "967789012", comuna: "Iquique", region: 1,
      producto: "CONSUMO", campana: "CONSUMO", asignacion: "22-04-2026", segmento: "Tramo_B", afinidad: 1, monto: 190000, tasa: "9.50%", plazo: 6, propension: "R", proveedor: "IBR CHILE", priorizacion: 1100, plan_cobranza: 1
    },
    {
      id: 13, id_cliente: 7712346, nombre: "Paola Carrera Vega", sexo: "F", edad: 33, telefono: "945901234", comuna: "Copiapó", region: 3,
      producto: "CONSUMO", campana: "CONSUMO", asignacion: "22-04-2026", segmento: "Tramo_RDR", afinidad: 3, monto: 1750000, tasa: "6.10%", plazo: 36, propension: "V", proveedor: "IBR CHILE", priorizacion: 11500, plan_cobranza: 2
    },
    {
      id: 14, id_cliente: 4434568, nombre: "Mauricio Araya Campos", sexo: "M", edad: 39, telefono: "989234568", comuna: "Valdivia", region: 14,
      producto: "CONSUMO", campana: "CONSUMO", asignacion: "25-04-2026", segmento: "Tramo_A", afinidad: 4, monto: 880000, tasa: "6.80%", plazo: 30, propension: "V", proveedor: "IBR CHILE", priorizacion: 5600, plan_cobranza: 1
    },
    {
      id: 15, id_cliente: 9978902, nombre: "Francisca Pinto Medina", sexo: "F", edad: 30, telefono: "912678902", comuna: "Osorno", region: 10,
      producto: "CONSUMO", campana: "CONSUMO", asignacion: "25-04-2026", segmento: "Tramo_B", afinidad: 2, monto: 410000, tasa: "8.00%", plazo: 18, propension: "A", proveedor: "IBR CHILE", priorizacion: 2500, plan_cobranza: 1
    },
    {
      id: 16, id_cliente: 1145679, nombre: "Gonzalo Bravo García", sexo: "M", edad: 56, telefono: "956123457", comuna: "Chillán", region: 16,
      producto: "CONSUMO", campana: "CONSUMO", asignacion: "25-04-2026", segmento: "Tramo_RDR", afinidad: 4, monto: 3400000, tasa: "5.70%", plazo: 48, propension: "V", proveedor: "IBR CHILE", priorizacion: 22500, plan_cobranza: 2
    },
    {
      id: 17, id_cliente: 6656790, nombre: "Isabel Cárdenas Fuentes", sexo: "F", edad: 25, telefono: "978345679", comuna: "Punta Arenas", region: 12,
      producto: "CONSUMO", campana: "CONSUMO", asignacion: "28-04-2026", segmento: "Tramo_A", afinidad: 3, monto: 560000, tasa: "7.20%", plazo: 24, propension: "V", proveedor: "IBR CHILE", priorizacion: 3500, plan_cobranza: 1
    },
    {
      id: 18, id_cliente: 3312347, nombre: "Antonio Melo Rojas", sexo: "M", edad: 62, telefono: "934901235", comuna: "Ñuñoa", region: 13,
      producto: "CONSUMO", campana: "CONSUMO", asignacion: "28-04-2026", segmento: "Tramo_B", afinidad: 1, monto: 230000, tasa: "8.80%", plazo: 12, propension: "R", proveedor: "IBR CHILE", priorizacion: 1400, plan_cobranza: 1
    },
    {
      id: 19, id_cliente: 8823458, nombre: "Soledad Navarro Herrera", sexo: "F", edad: 44, telefono: "967890124", comuna: "Las Condes", region: 13,
      producto: "CONSUMO", campana: "CONSUMO", asignacion: "28-04-2026", segmento: "Tramo_RDR", afinidad: 5, monto: 2100000, tasa: "5.95%", plazo: 42, propension: "V", proveedor: "IBR CHILE", priorizacion: 14000, plan_cobranza: 2
    },
    {
      id: 20, id_cliente: 5545680, nombre: "Emilio Figueroa Castro", sexo: "M", edad: 37, telefono: "945345680", comuna: "Providencia", region: 13,
      producto: "CONSUMO", campana: "CONSUMO", asignacion: "28-04-2026", segmento: "Tramo_A", afinidad: 3, monto: 790000, tasa: "6.95%", plazo: 30, propension: "A", proveedor: "IBR CHILE", priorizacion: 5000, plan_cobranza: 1
    },
    {
      id: 21, id_cliente: 1234567, nombre: "Cliente Ejemplo", sexo: "M", edad: 40, telefono: "987654321", comuna: "Santiago", region: 13,
      producto: "CONSUMO", campana: "CONSUMO", asignacion: "28-04-2026", segmento: "Tramo_B", afinidad: 4, monto: 1500000, tasa: "5.50%", plazo: 36, propension: "V", proveedor: "IBR CHILE", priorizacion: 10000, plan_cobranza: 2
    },
    {
      id: 22, id_cliente: 7654321, nombre: "Cliente Ejemplo 2", sexo: "F", edad: 30, telefono: "912345678", comuna: "Maipú", region: 13,
      producto: "CONSUMO", campana: "CONSUMO", asignacion: "28-04-2026", segmento: "Tramo_A", afinidad: 2, monto: 600000, tasa: "7.00%", plazo: 24, propension: "A", proveedor: "IBR CHILE", priorizacion: 4000, plan_cobranza: 1
    }
  ],

  // ─── EMPRESAS ───────────────────────────────────────────────────────
  "EMPRESAS": [
    {
      id: 1, id_cliente: 9901235, nombre: "Constructora Los Andes", sexo: "E", edad: 0, telefono: "223456789", comuna: "Santiago", region: 13,
      producto: "EMPRESAS", campana: "EMPRESAS", asignacion: "15-04-2026", segmento: "Tramo_A", afinidad: 5, monto: 18500000, tasa: "4.20%", plazo: 60, propension: "V", proveedor: "IBR CHILE", priorizacion: 129000, plan_cobranza: 3
    },
    {
      id: 2, id_cliente: 1178902, nombre: "Inversiones del Norte SpA", sexo: "E", edad: 0, telefono: "223567890", comuna: "Antofagasta", region: 2,
      producto: "EMPRESAS", campana: "EMPRESAS", asignacion: "15-04-2026", segmento: "Tramo_RDR", afinidad: 4, monto: 7300000, tasa: "4.80%", plazo: 48, propension: "V", proveedor: "IBR CHILE", priorizacion: 51000, plan_cobranza: 3
    },
    {
      id: 3, id_cliente: 4489013, nombre: "Agrícola Sur Ltda.", sexo: "E", edad: 0, telefono: "223678901", comuna: "Temuco", region: 9,
      producto: "EMPRESAS", campana: "EMPRESAS", asignacion: "15-04-2026", segmento: "Tramo_B", afinidad: 2, monto: 5200000, tasa: "5.10%", plazo: 36, propension: "A", proveedor: "IBR CHILE", priorizacion: 36000, plan_cobranza: 2
    },
    {
      id: 4, id_cliente: 7756790, nombre: "Transportes Patagonia", sexo: "E", edad: 0, telefono: "223789012", comuna: "Punta Arenas", region: 12,
      producto: "EMPRESAS", campana: "EMPRESAS", asignacion: "15-04-2026", segmento: "Tramo_A", afinidad: 3, monto: 14600000, tasa: "4.40%", plazo: 54, propension: "V", proveedor: "IBR CHILE", priorizacion: 102000, plan_cobranza: 3
    },
    {
      id: 5, id_cliente: 2290124, nombre: "Minera Atacama S.A.", sexo: "E", edad: 0, telefono: "223890123", comuna: "Copiapó", region: 3,
      producto: "EMPRESAS", campana: "EMPRESAS", asignacion: "16-04-2026", segmento: "Tramo_RDR", afinidad: 5, monto: 20000000, tasa: "4.00%", plazo: 60, propension: "V", proveedor: "IBR CHILE", priorizacion: 140000, plan_cobranza: 3
    },
    {
      id: 6, id_cliente: 6634569, nombre: "Pesca Artesanal Chiloé", sexo: "E", edad: 0, telefono: "223012346", comuna: "Puerto Montt", region: 10,
      producto: "EMPRESAS", campana: "EMPRESAS", asignacion: "16-04-2026", segmento: "Tramo_B", afinidad: 2, monto: 4800000, tasa: "5.30%", plazo: 36, propension: "A", proveedor: "IBR CHILE", priorizacion: 33000, plan_cobranza: 2
    },
    {
      id: 7, id_cliente: 3367891, nombre: "Viña Santa Catalina", sexo: "E", edad: 0, telefono: "223123457", comuna: "Rancagua", region: 6,
      producto: "EMPRESAS", campana: "EMPRESAS", asignacion: "16-04-2026", segmento: "Tramo_A", afinidad: 4, monto: 9800000, tasa: "4.60%", plazo: 48, propension: "V", proveedor: "IBR CHILE", priorizacion: 68000, plan_cobranza: 3
    },
    {
      id: 8, id_cliente: 8845680, nombre: "Inmobiliaria Pacífico SA", sexo: "E", edad: 0, telefono: "223234568", comuna: "Viña del Mar", region: 5,
      producto: "EMPRESAS", campana: "EMPRESAS", asignacion: "17-04-2026", segmento: "Tramo_RDR", afinidad: 5, monto: 30000000, tasa: "3.90%", plazo: 72, propension: "V", proveedor: "IBR CHILE", priorizacion: 210000, plan_cobranza: 3
    },
    {
      id: 9, id_cliente: 5512347, nombre: "Tecnologías Bio-Bio", sexo: "E", edad: 0, telefono: "223345679", comuna: "Concepción", region: 8,
      producto: "EMPRESAS", campana: "EMPRESAS", asignacion: "17-04-2026", segmento: "Tramo_B", afinidad: 3, monto: 6300000, tasa: "4.95%", plazo: 42, propension: "A", proveedor: "IBR CHILE", priorizacion: 44000, plan_cobranza: 2
    },
    {
      id: 10, id_cliente: 2223457, nombre: "Retail Maule Express", sexo: "E", edad: 0, telefono: "223456790", comuna: "Talca", region: 7,
      producto: "EMPRESAS", campana: "EMPRESAS", asignacion: "17-04-2026", segmento: "Tramo_A", afinidad: 4, monto: 12400000, tasa: "4.30%", plazo: 54, propension: "V", proveedor: "IBR CHILE", priorizacion: 86000, plan_cobranza: 3
    },
    {
      id: 11, id_cliente: 7790124, nombre: "Hotelería Sur Austral", sexo: "E", edad: 0, telefono: "223567891", comuna: "Valdivia", region: 14,
      producto: "EMPRESAS", campana: "EMPRESAS", asignacion: "22-04-2026", segmento: "Tramo_RDR", afinidad: 4, monto: 16900000, tasa: "4.10%", plazo: 60, propension: "V", proveedor: "IBR CHILE", priorizacion: 118000, plan_cobranza: 3
    },
    {
      id: 12, id_cliente: 4423457, nombre: "Forestal Los Ríos SpA", sexo: "E", edad: 0, telefono: "223678902", comuna: "Osorno", region: 10,
      producto: "EMPRESAS", campana: "EMPRESAS", asignacion: "22-04-2026", segmento: "Tramo_B", afinidad: 2, monto: 5600000, tasa: "5.20%", plazo: 36, propension: "A", proveedor: "IBR CHILE", priorizacion: 39000, plan_cobranza: 2
    },
    {
      id: 13, id_cliente: 9978903, nombre: "Clínica Iquique Salud", sexo: "E", edad: 0, telefono: "223789013", comuna: "Iquique", region: 1,
      producto: "EMPRESAS", campana: "EMPRESAS", asignacion: "22-04-2026", segmento: "Tramo_A", afinidad: 5, monto: 22500000, tasa: "4.05%", plazo: 66, propension: "V", proveedor: "IBR CHILE", priorizacion: 157000, plan_cobranza: 3
    },
    {
      id: 14, id_cliente: 1145680, nombre: "Constructora Quilicura", sexo: "E", edad: 0, telefono: "223890124", comuna: "Quilicura", region: 13,
      producto: "EMPRESAS", campana: "EMPRESAS", asignacion: "25-04-2026", segmento: "Tramo_RDR", afinidad: 3, monto: 8500000, tasa: "4.70%", plazo: 48, propension: "V", proveedor: "IBR CHILE", priorizacion: 59000, plan_cobranza: 3
    },
    {
      id: 15, id_cliente: 6656791, nombre: "Logística Santiago Norte", sexo: "E", edad: 0, telefono: "223012347", comuna: "Maipú", region: 13,
      producto: "EMPRESAS", campana: "EMPRESAS", asignacion: "25-04-2026", segmento: "Tramo_B", afinidad: 1, monto: 3900000, tasa: "5.50%", plazo: 30, propension: "R", proveedor: "IBR CHILE", priorizacion: 27000, plan_cobranza: 2
    },
    {
      id: 16, id_cliente: 3345679, nombre: "Exportadora Ñuble SA", sexo: "E", edad: 0, telefono: "223123458", comuna: "Chillán", region: 16,
      producto: "EMPRESAS", campana: "EMPRESAS", asignacion: "25-04-2026", segmento: "Tramo_A", afinidad: 4, monto: 11200000, tasa: "4.35%", plazo: 54, propension: "V", proveedor: "IBR CHILE", priorizacion: 78000, plan_cobranza: 3
    },
    {
      id: 17, id_cliente: 8823459, nombre: "Laboratorios Bio-Farma", sexo: "E", edad: 0, telefono: "223234569", comuna: "Las Condes", region: 13,
      producto: "EMPRESAS", campana: "EMPRESAS", asignacion: "28-04-2026", segmento: "Tramo_RDR", afinidad: 5, monto: 28000000, tasa: "3.95%", plazo: 72, propension: "V", proveedor: "IBR CHILE", priorizacion: 196000, plan_cobranza: 3
    },
    {
      id: 18, id_cliente: 5545681, nombre: "Centro Médico Araucanía", sexo: "E", edad: 0, telefono: "223345680", comuna: "Temuco", region: 9,
      producto: "EMPRESAS", campana: "EMPRESAS", asignacion: "28-04-2026", segmento: "Tramo_A", afinidad: 3, monto: 13800000, tasa: "4.25%", plazo: 60, propension: "V", proveedor: "IBR CHILE", priorizacion: 96000, plan_cobranza: 3
    },
    {
      id: 19, id_cliente: 2212348, nombre: "Turismo Patagónico Ltda.", sexo: "E", edad: 0, telefono: "223456791", comuna: "Punta Arenas", region: 12,
      producto: "EMPRESAS", campana: "EMPRESAS", asignacion: "28-04-2026", segmento: "Tramo_B", afinidad: 2, monto: 4100000, tasa: "5.40%", plazo: 36, propension: "A", proveedor: "IBR CHILE", priorizacion: 28500, plan_cobranza: 2
    },
    {
      id: 20, id_cliente: 7778903, nombre: "Energía Solar Atacama", sexo: "E", edad: 0, telefono: "223567892", comuna: "Copiapó", region: 3,
      producto: "EMPRESAS", campana: "EMPRESAS", asignacion: "28-04-2026", segmento: "Tramo_RDR", afinidad: 5, monto: 25000000, tasa: "4.00%", plazo: 66, propension: "V", proveedor: "IBR CHILE", priorizacion: 175000, plan_cobranza: 3
    },
  ],
};

// ── MEMORIA GLOBAL ───────────────────────────────────────────────────────
let estadoPorProducto = {}; // Guarda { asignaciones: {}, ejecutivos: {}, grupos: {}, atencion: {} } por producto
let memoriaAsignaciones = {};   // Referencia activa (sucursales)
let memoriaEjecutivos = {};   // Referencia activa (ejecutivos por sucursal)
let memoriaGrupos = {};   // Referencia activa (grupos)
let memoriaAtencion = {};   // Referencia activa (estados atencion: id_cliente -> estado)
let totalRegistros = 1000;
let registrosFiltrados = [];

function initMemoriaProducto(prod) {
  if (!estadoPorProducto[prod]) {
    estadoPorProducto[prod] = { asignaciones: {}, ejecutivos: {}, grupos: {}, atencion: {} };
  }
  memoriaAsignaciones = estadoPorProducto[prod].asignaciones;
  memoriaEjecutivos = estadoPorProducto[prod].ejecutivos;
  memoriaGrupos = estadoPorProducto[prod].grupos;
  memoriaAtencion = estadoPorProducto[prod].atencion;
}

// =======================================================================
// INIT
// =======================================================================

// inicializarApp se llama desde index.html una vez que todas las vistas parciales
// han sido cargadas en el DOM mediante fetch()
function inicializarApp() {
  poblarSelectorProducto();
  renderListas();
  poblarSelectorSucursal();
  poblarSelectorSucursalMJ();

  // Cambio de producto → restaurar memoria para el producto
  $("#producto").change(function () {
    totalRegistros = parseInt($(this).val());
    const prod = $("#producto option:selected").text();

    initMemoriaProducto(prod);

    $("#totalRegistros").text(totalRegistros);
    actualizarTotales();

    // Limpiar vistas de orquestador (vamos a recrear según la memoria si existen sucursales o grupos)
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

    // Restaurar selecciones de grupos si existen en memoria
    Object.keys(memoriaGrupos).forEach(g => {
      agregarSeleccion(g, "grupo");
    });

    // Restaurar selecciones de sucursales si existen en memoria
    Object.keys(memoriaAsignaciones).forEach(s => {
      agregarSeleccion(s, "sucursal");
    });

    // Resetear las vistas dependientes para mantener consistencia
    $("#sucursalActiva").val("");
    cargarVistaSucursal();

    $("#mjSucursalActiva").val("");
    mjActualizarRegistros();

    $("#mFiltroProducto").val("");
    mCargarFechas();

    renderListas();
  });

  $("#buscarGrupo").on("keyup", function () {
    filtrarLista($(this).val(), grupos, "#listaGrupos", "grupo");
  });

  $("#buscarSucursal").on("keyup", function () {
    filtrarLista($(this).val(), sucursales, "#listaSucursales", "sucursal");
  });

  $("#guardarGrupo").click(function () {
    guardarEnMemoria();
    mostrarResumen("grupo");
  });

  $("#guardarSucursal").click(function () {
    const assigned = calcularTotalAsignado();
    if (assigned === 0) {
      customAlert("⚠️ Debes ingresar al menos una sucursal con registros.");
      return;
    }
    guardarEnMemoria();
    mostrarResumen("sucursal");
  });
}

function poblarSelectorProducto() {
  const $select = $("#producto");
  $select.empty();

  Object.keys(registrosPorProducto).forEach(producto => {
    const cantidad = registrosPorProducto[producto].length;
    $select.append(`<option value="${cantidad}">${producto}</option>`);
  });

  // Inicializar memoria para el primer producto cargado
  const prodInicial = $("#producto option:first").text();
  initMemoriaProducto(prodInicial);

  // Set totalRegistros to match the first option
  totalRegistros = parseInt($select.val()) || 0;
  $("#totalRegistros").text(totalRegistros);
  actualizarTotales();
}

// Helper: obtener registros del producto activo
function getRegistrosActivos() {
  const prod = $("#producto option:selected").text();
  return registrosPorProducto[prod] || [];
}

// Helper: formatear monto CLP
function fmtMonto(n) {
  return "$" + n.toLocaleString("es-CL");
}

// =======================================================================
// TABS
// =======================================================================

function cambiarTab(tab) {
  $("#vistaOrquestador, #vistaJefe, #vistaMantenedor, #vistaMantenedorJefe, #vistaEjecutivo").hide();
  $(".nav-link").removeClass("active");

  if (tab === "orquestador") {
    $("#vistaOrquestador").show();
    $("#tab-orquestador").addClass("active");

  } else if (tab === "jefe") {
    guardarEnMemoria();
    $("#vistaJefe").show();
    $("#tab-jefe").addClass("active");
    actualizarMemoriaJefe();

  } else if (tab === "mantenedor") {
    guardarEnMemoria();
    $("#vistaMantenedor").show();
    $("#tab-mantenedor").addClass("active");
    iniciarMantenedor();

  } else if (tab === "mantenedorJefe") {
    guardarEnMemoria();
    $("#vistaMantenedorJefe").show();
    $("#tab-mantenedor-jefe").addClass("active");
    mjActualizarRegistros();

  } else if (tab === "ejecutivo") {
    guardarEnMemoria();
    $("#vistaEjecutivo").show();
    $("#tab-ejecutivo").addClass("active");
    poblarSelectorEjecutivoAtencion();
  }
}

// =======================================================================
// RENDER LISTAS ORQUESTADOR
// =======================================================================

function renderListas() {
  renderItems(grupos, "#listaGrupos", "grupo");
  renderItems(sucursales, "#listaSucursales", "sucursal");
}

function renderItems(data, container, tipo) {
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

function filtrarLista(texto, data, container, tipo) {
  const filtrados = data.filter(i => i.toLowerCase().includes(texto.toLowerCase()));
  renderItems(filtrados, container, tipo);
}

// =======================================================================
// AGREGAR / ELIMINAR
// =======================================================================

function agregarSeleccion(nombre, tipo) {
  const container = tipo === "grupo" ? "#gruposSeleccionados" : "#sucursalesSeleccionadas";
  const lista = tipo === "grupo" ? "#listaGrupos" : "#listaSucursales";
  const claseInput = tipo === "grupo" ? "grupo-input" : "sucursal-input";

  if ($(`[data-item="${nombre}"]`).length) return; // ya existe

  $(`${lista} button`).each(function () {
    if ($(this).text().trim() === nombre)
      $(this).addClass("active");
  });

  $(`${container} .empty-state`).remove();

  const valorPrevio = (tipo === "sucursal" && memoriaAsignaciones[nombre])
    ? memoriaAsignaciones[nombre]
    : (tipo === "grupo" && memoriaGrupos[nombre])
      ? memoriaGrupos[nombre] : 0;

  const html = `
    <div class="selected-item" data-item="${nombre}" data-tipo="${tipo}">
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
            onclick="eliminarSeleccion('${nombre}', '${tipo}')">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>`;

  $(container).append(html);
  actualizarTotales();
}

function eliminarSeleccion(nombre, tipo) {
  $(`[data-item="${nombre}"]`).remove();

  $("#listaGrupos button, #listaSucursales button").each(function () {
    if ($(this).text().trim() === nombre) $(this).removeClass("active");
  });

  if (tipo === "grupo") {
    delete memoriaGrupos[nombre];
  } else {
    delete memoriaAsignaciones[nombre];
  }

  validarEmpty();
  actualizarTotales();
}

function validarEmpty() {
  if ($("#gruposSeleccionados .selected-item").length === 0) {
    $("#gruposSeleccionados").html(`
      <div class="empty-state">
        <i class="bi bi-diagram-3 fs-1"></i>
        <div class="mt-2">No hay grupos seleccionados</div>
      </div>`);
  }
  if ($("#sucursalesSeleccionadas .selected-item").length === 0) {
    $("#sucursalesSeleccionadas").html(`
      <div class="empty-state">
        <i class="bi bi-building fs-1"></i>
        <div class="mt-2">No hay sucursales seleccionadas</div>
      </div>`);
  }
}

// =======================================================================
// TOTALES ORQUESTADOR
// =======================================================================

function calcularTotalAsignado() {
  let total = 0;
  $(".grupo-input, .sucursal-input").each(function () {
    total += parseInt($(this).val()) || 0;
  });
  return total;
}

function actualizarTotales() {
  const totalAsignado = calcularTotalAsignado();
  const restante = totalRegistros - totalAsignado;

  if (totalAsignado > totalRegistros) {
    const exceso = totalAsignado - totalRegistros;
    const $last = $(".grupo-input, .sucursal-input")
      .filter(function () { return (parseInt($(this).val()) || 0) > 0; }).last();
    $last.val(Math.max(0, (parseInt($last.val()) || 0) - exceso));

    customAlert(`⚠️ No puedes asignar más de ${totalRegistros.toLocaleString()} registros en total.\nSe ajustó el valor automáticamente.`);
    actualizarTotales();
    return;
  }

  $("#asignados").text(totalAsignado.toLocaleString());
  $("#sinAsignar").text(restante.toLocaleString());

  if (restante <= 0) {
    $("#sinAsignar").removeClass("remaining-danger").addClass("remaining-success");
  } else {
    $("#sinAsignar").removeClass("remaining-success").addClass("remaining-danger");
  }
}

// =======================================================================
// MEMORIA
// =======================================================================

function guardarEnMemoria() {
  $(".sucursal-input").each(function () {
    const nombre = $(this).data("name");
    const valor = parseInt($(this).val()) || 0;
    if (valor > 0) memoriaAsignaciones[nombre] = valor;
    else delete memoriaAsignaciones[nombre];
  });
  $(".grupo-input").each(function () {
    const nombre = $(this).data("name");
    const valor = parseInt($(this).val()) || 0;
    if (valor > 0) memoriaGrupos[nombre] = valor;
    else delete memoriaGrupos[nombre];
  });
}

// =======================================================================
// JEFE SUCURSAL
// =======================================================================

function poblarSelectorSucursal() {
  let opts = `<option value="">-- Seleccione sucursal --</option>`;
  sucursales.forEach(s => { opts += `<option value="${s}">${s}</option>`; });
  $("#sucursalActiva").html(opts);
}

function actualizarMemoriaJefe() {
  const sucursal = $("#sucursalActiva").val();
  const registros = sucursal ? (memoriaAsignaciones[sucursal] || 0) : 0;

  $("#totalJefe").text(registros.toLocaleString());
  $("#productoJefe").text(sucursal ? "Producto: " + $("#producto option:selected").text() : "");
}

function cargarVistaSucursal() {
  actualizarMemoriaJefe();
  registrosFiltrados = getRegistrosActivos();

  const sucursal = $("#sucursalActiva").val();
  if (!sucursal) {
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
  if (registros === 0) {
    customAlert(`⚠️ La sucursal "${sucursal}" no tiene registros asignados desde el Orquestador.`);
  }

  const ejecutivos = ejecutivosPorSucursal[sucursal]
    || Array.from({ length: 2 }, (_, i) => `Ejecutivo ${i + 1}`);

  renderEjecutivos(ejecutivos);
  $("#resumenJefeCard").hide();
  $("#msgExito").hide();
}

function renderEjecutivos(lista) {
  if (lista.length === 0) {
    $("#listaEjecutivos").html(`
      <div class="empty-state">
        <i class="bi bi-people fs-1"></i>
        <div class="mt-2">No se encontraron ejecutivos</div>
      </div>`);
    return;
  }

  const sucursal = $("#sucursalActiva").val();
  const totalRegs = registrosFiltrados.length > 0
    ? registrosFiltrados.length
    : (memoriaAsignaciones[sucursal] || 0);

  let html = "";
  lista.forEach(ej => {
    const valorPrevio = (memoriaEjecutivos[sucursal] && memoriaEjecutivos[sucursal][ej])
      ? memoriaEjecutivos[sucursal][ej] : 0;
    const idSafe = ej.replace(/ /g, "_");

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

function calcularMontoEjecutivo(ej, cantRegistros, totalRegistrosDisponibles) {
  const regs = registrosFiltrados.length > 0 ? registrosFiltrados : getRegistrosActivos();
  if (!regs.length || !cantRegistros) return 0;

  const proporcion = Math.min(cantRegistros, regs.length);
  const regsEj = regs.slice(0, proporcion);
  return regsEj.reduce((sum, r) => sum + r.monto, 0);
}

function filtrarEjecutivos() {
  const texto = $("#buscarEjecutivo").val().toLowerCase();
  const sucursal = $("#sucursalActiva").val();
  if (!sucursal) return;
  const todos = ejecutivosPorSucursal[sucursal] || [];
  const filtrados = todos.filter(e => e.toLowerCase().includes(texto));
  renderEjecutivos(filtrados);
}

function calcularSinAsignarJefe() {
  const sucursal = $("#sucursalActiva").val();
  const total = memoriaAsignaciones[sucursal] || 0;
  let asignado = 0;

  $(".ejecutivo-input").each(function () {
    asignado += parseInt($(this).val()) || 0;
  });

  if (asignado > total && total > 0) {
    const exceso = asignado - total;
    const $last = $(".ejecutivo-input")
      .filter(function () { return (parseInt($(this).val()) || 0) > 0; }).last();
    $last.val(Math.max(0, (parseInt($last.val()) || 0) - exceso));
    customAlert(`⚠️ No puedes superar los ${total.toLocaleString()} registros de esta sucursal.`);
    calcularSinAsignarJefe();
    return;
  }

  const restante = total - asignado;
  $("#sinAsignarJefe").text(restante.toLocaleString());
  $("#sinAsignarJefe").css("color", restante <= 0 ? "var(--success)" : "var(--danger)");

  const regs = registrosFiltrados.length > 0 ? registrosFiltrados : getRegistrosActivos();

  $(".ejecutivo-input").each(function () {
    const ej = $(this).data("ejecutivo");
    const val = parseInt($(this).val()) || 0;
    const pct = total > 0 ? Math.round((val / total) * 100) : 0;
    const safe = ej ? ej.replace(/ /g, "_") : "";

    if (safe) {
      $(`#pct-${safe}`).text(pct + "%");
      const monto = calcularMontoEjecutivo(ej, val, total);
      $(`#monto-${safe}`).text(fmtMonto(monto));
    }
  });
}

function guardarAsignacionJefe() {
  const sucursal = $("#sucursalActiva").val();
  if (!sucursal) { customAlert("⚠️ Seleccione una sucursal primero."); return; }

  const total = memoriaAsignaciones[sucursal] || 0;
  let asignado = 0;
  $(".ejecutivo-input").each(function () { asignado += parseInt($(this).val()) || 0; });

  if (total === 0) { customAlert("⚠️ Esta sucursal no tiene registros asignados desde el Orquestador."); return; }
  if (asignado === 0) { customAlert("⚠️ Debes asignar al menos un registro a un ejecutivo."); return; }

  const ejecutarGuardado = function () {
    if (!memoriaEjecutivos[sucursal]) memoriaEjecutivos[sucursal] = {};

    const regs = registrosFiltrados.length > 0 ? registrosFiltrados : getRegistrosActivos();
    let tbody = "";
    let usados = 0;

    $(".ejecutivo-input").each(function () {
      const ej = $(this).data("ejecutivo");
      const val = parseInt($(this).val()) || 0;
      memoriaEjecutivos[sucursal][ej] = val;

      const regsEj = regs.slice(usados, usados + val);
      const monto = regsEj.reduce((s, r) => s + r.monto, 0);
      usados += val;

      const clase = val > 0 ? "estado-asignado" : "estado-pendiente";
      const label = val > 0 ? "Asignado" : "Pendiente";

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
  };

  if (asignado < total) {
    customConfirm(
      `⚠️ Quedan ${(total - asignado).toLocaleString()} registros sin asignar. ¿Deseas guardar de todas formas?`,
      function (confirmed) { if (confirmed) ejecutarGuardado(); }
    );
  } else {
    ejecutarGuardado();
  }
}

function aplicarFiltrosMonto() {
  const min = parseInt($("#filtroMontoMin").val()) || 0;
  const max = parseInt($("#filtroMontoMax").val()) || Infinity;
  const todos = getRegistrosActivos();

  registrosFiltrados = todos.filter(r => r.monto >= min && r.monto <= max);

  const totalFiltrado = registrosFiltrados.length;
  $("#totalJefe").text(totalFiltrado.toLocaleString());

  const suc = $("#sucursalActiva").val();
  if (suc) {
    const ejecutivos = ejecutivosPorSucursal[suc]
      || Array.from({ length: 2 }, (_, i) => `Ejecutivo ${i + 1}`);
    renderEjecutivos(ejecutivos);
  }
}

function borrarFiltros() {
  $("#buscarEjecutivo").val("");
  $("#filtroMontoMin").val("");
  $("#filtroMontoMax").val("");
  registrosFiltrados = getRegistrosActivos();

  const suc = $("#sucursalActiva").val();
  const total = memoriaAsignaciones[suc] || 0;
  $("#totalJefe").text(total.toLocaleString());

  const ejecutivos = suc
    ? (ejecutivosPorSucursal[suc] || [])
    : [];
  renderEjecutivos(ejecutivos);
}

// =======================================================================
// RESUMEN ORQUESTADOR
// =======================================================================

function mostrarResumen(tipo) {
  const producto = $("#producto option:selected").text();
  const totalAsi = calcularTotalAsignado();
  const restante = totalRegistros - totalAsi;

  let html = `
    <div class="mb-3">
      <span class="badge bg-primary px-3 py-2 fs-6">${producto}</span>
    </div>`;

  if (tipo === "grupo") {
    html += `<h6 class="fw-bold mb-3 text-primary">Distribución por Grupos</h6>`;
    $(".grupo-input").each(function () {
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
    $(".sucursal-input").each(function () {
      const val = parseInt($(this).val()) || 0;
      const nom = $(this).data("name");
      if (val > 0) {
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
    if (!hayDatos) html += `<p class="text-muted">No hay sucursales con registros asignados.</p>`;
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

// =======================================================================
// MANTENEDOR CASA MATRIZ
// =======================================================================

function iniciarMantenedor() {
  let optsZona = `<option value="">Todas las zonas</option>`;
  zonas.forEach(z => { optsZona += `<option>${z}</option>`; });
  $("#filtroTablaZona").html(optsZona);

  let optsSuc = `<option value="">Todas las sucursales</option>`;
  Object.keys(usuariosPorSucursal).forEach(s => { optsSuc += `<option>${s}</option>`; });
  $("#filtroTablaSucursal").html(optsSuc);

  let optsLic = `<option value="">Todas las licencias</option>`;
  licencias.forEach(l => { optsLic += `<option>${l}</option>`; });
  $("#filtroTablaLicencia").html(optsLic);

  renderTablaUsuarios();
}

function renderTablaUsuarios() {
  const zonaFiltro = $("#filtroTablaZona").val();
  const sucFiltro = $("#filtroTablaSucursal").val();
  const licFiltro = $("#filtroTablaLicencia").val();

  let usuarios = getTodosUsuarios();

  if (zonaFiltro) usuarios = usuarios.filter(u => u.zona === zonaFiltro);
  if (sucFiltro) usuarios = usuarios.filter(u => u.sucursal === sucFiltro);
  if (licFiltro) usuarios = usuarios.filter(u => u.licencia === licFiltro);

  if (!usuarios.length) {
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
    "Jefe": "bg-warning text-dark",
    "Zonal": "bg-success",
  };

  $("#tbodyUsuarios").html(
    usuarios.map((u, i) => `
      <tr class="${u.activo === false ? 'table-secondary text-muted' : ''}">
        <td class="text-center">${i + 1}</td>
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

function limpiarFiltrosTabla() {
  $("#filtroTablaZona, #filtroTablaSucursal, #filtroTablaLicencia")
    .prop("selectedIndex", 0);
  renderTablaUsuarios();
}

// ── MODAL CREAR ──────────────────────────────────────────────────────────

function abrirModalCrear() {
  let optsLic = `<option value="">-- Seleccione licencia --</option>`;
  licencias.forEach(l => { optsLic += `<option>${l}</option>`; });
  $("#crearLicencia").html(optsLic);

  let optsZona = `<option value="">-- Seleccione zona --</option>`;
  zonas.forEach(z => { optsZona += `<option>${z}</option>`; });
  $("#crearZona").html(optsZona);

  $("#crearGrupo").html(`<option value="">-- Seleccione zona primero --</option>`);
  $("#crearSucursal").html(`<option value="">-- Seleccione grupo primero --</option>`);
  $("#crearNombre").val("");

  new bootstrap.Modal(document.getElementById("modalCrearUsuario")).show();
}

function filtrarGruposModal(ctx) {
  const prefix = ctx === "crear" ? "crear" : "baja";
  const optsBase = ctx === "crear"
    ? `<option value="">-- Seleccione grupo --</option>`
    : `<option value="">-- Todos los grupos --</option>`;

  let opts = optsBase;
  grupos.forEach(g => { opts += `<option>${g}</option>`; });
  $(`#${prefix}Grupo`).html(opts);

  if (ctx === "crear") {
    $("#crearSucursal").html(`<option value="">-- Seleccione grupo primero --</option>`);
  } else {
    filtrarUsuariosBaja();
  }
}

function filtrarSucursalesModal(ctx) {
  const prefix = ctx === "crear" ? "crear" : "baja";
  const optsBase = ctx === "crear"
    ? `<option value="">-- Seleccione sucursal --</option>`
    : `<option value="">-- Todas las sucursales --</option>`;

  let opts = optsBase;
  Object.keys(usuariosPorSucursal).forEach(s => { opts += `<option>${s}</option>`; });
  $(`#${prefix}Sucursal`).html(opts);

  if (ctx === "baja") filtrarUsuariosBaja();
}

function confirmarCrearUsuario() {
  const licencia = $("#crearLicencia").val();
  const zona = $("#crearZona").val();
  const grupo = $("#crearGrupo").val();
  const sucursal = $("#crearSucursal").val();
  const nombre = $("#crearNombre").val().trim();

  if (!licencia) { customAlert("⚠️ Seleccione una licencia."); return; }
  if (!zona) { customAlert("⚠️ Seleccione una zona."); return; }
  if (!grupo) { customAlert("⚠️ Seleccione un grupo."); return; }
  if (!sucursal) { customAlert("⚠️ Seleccione una sucursal."); return; }
  if (!nombre) { customAlert("⚠️ Ingrese el nombre del usuario."); return; }

  const nuevoId = getTodosUsuarios().length + 1;
  const nuevoUsuario = { id: nuevoId, nombre, licencia, zona, grupo, activo: true };

  if (!usuariosPorSucursal[sucursal]) usuariosPorSucursal[sucursal] = [];
  usuariosPorSucursal[sucursal].push(nuevoUsuario);

  // Si es Ejecutivo, agregarlo a ejecutivosPorSucursal
  if (licencia === "Ejecutivo") {
    if (!ejecutivosPorSucursal[sucursal]) ejecutivosPorSucursal[sucursal] = [];
    ejecutivosPorSucursal[sucursal].push(nombre);
  }

  bootstrap.Modal.getInstance(document.getElementById("modalCrearUsuario")).hide();
  renderTablaUsuarios();
  mostrarToastExito(`✅ Usuario "${nombre}" creado como ${licencia} en ${sucursal}.`);
}

// ── MODAL BAJA ───────────────────────────────────────────────────────────

function abrirModalBaja() {
  let optsZona = `<option value="">-- Todas las zonas --</option>`;
  zonas.forEach(z => { optsZona += `<option>${z}</option>`; });
  $("#bajaZona").html(optsZona);

  let optsGrupo = `<option value="">-- Todos los grupos --</option>`;
  grupos.forEach(g => { optsGrupo += `<option>${g}</option>`; });
  $("#bajaGrupo").html(optsGrupo);

  let optsSuc = `<option value="">-- Todas las sucursales --</option>`;
  Object.keys(usuariosPorSucursal).forEach(s => { optsSuc += `<option>${s}</option>`; });
  $("#bajaSucursal").html(optsSuc);

  filtrarUsuariosBaja();
  new bootstrap.Modal(document.getElementById("modalBajaUsuario")).show();
}

function filtrarUsuariosBaja() {
  const zona = $("#bajaZona").val();
  const grupo = $("#bajaGrupo").val();
  const sucursal = $("#bajaSucursal").val();

  let usuarios = getTodosUsuarios().filter(u => u.activo !== false);

  if (zona) usuarios = usuarios.filter(u => u.zona === zona);
  if (grupo) usuarios = usuarios.filter(u => u.grupo === grupo);
  if (sucursal) usuarios = usuarios.filter(u => u.sucursal === sucursal);

  let opts = `<option value="">-- Seleccione usuario --</option>`;
  usuarios.forEach(u => {
    opts += `<option value="${u.id}">${u.nombre} · ${u.licencia} · ${u.sucursal}</option>`;
  });
  $("#bajaUsuarioSelect").html(opts);
  $("#bajaUsuarioInfo").hide();

  $("#bajaUsuarioSelect").off("change").on("change", function () {
    $("#bajaUsuarioInfo").toggle(!!$(this).val());
  });
}

function confirmarBajaUsuario() {
  const userId = parseInt($("#bajaUsuarioSelect").val());
  if (!userId) { customAlert("⚠️ Seleccione un usuario para dar de baja."); return; }

  let encontrado = null;
  Object.values(usuariosPorSucursal).forEach(lista => {
    const u = lista.find(u => u.id === userId);
    if (u) { u.activo = false; encontrado = u; }
  });

  if (!encontrado) { customAlert("⚠️ Usuario no encontrado."); return; }

  bootstrap.Modal.getInstance(document.getElementById("modalBajaUsuario")).hide();
  renderTablaUsuarios();
  mostrarToastExito(`✅ Usuario "${encontrado.nombre}" dado de baja correctamente.`);
}

// ── TOAST ────────────────────────────────────────────────────────────────

function mostrarToastExito(msg) {
  let $toast = $("#toastGlobal");
  if (!$toast.length) {
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

// =======================================================================
// MANTENEDOR — FILTROS Y REASIGNACIÓN
// =======================================================================

function mCargarFechas() {
  const prod = $("#mFiltroProducto").val();
  const regs = registrosPorProducto[prod] || [];
  const fechas = [...new Set(regs.map(r => r.asignacion))].sort();

  let opts = `<option value="">-- Todas las fechas --</option>`;
  fechas.forEach(f => { opts += `<option>${f}</option>`; });
  $("#mFiltroAsignacion").html(opts);

  $("#mTbodyRegistros").html(`
    <tr><td colspan="5" class="text-center text-muted py-4">
      <i class="bi bi-search me-1"></i>Aplique filtros para ver datos
    </td></tr>`);
  $("#mBadgeCantidad").hide();
  $("#mCantidadRegistros").val("");
}

function mBuscarRegistros() {
  const prod = $("#mFiltroProducto").val();
  const fecha = $("#mFiltroAsignacion").val();
  const orden = $("#mFiltroOrdenMonto").val();

  if (!prod) {
    customAlert("⚠️ Seleccione un producto primero.");
    return;
  }

  let regs = [...(registrosPorProducto[prod] || [])];
  if (fecha) regs = regs.filter(r => r.asignacion === fecha);
  regs.sort((a, b) => orden === "asc" ? a.monto - b.monto : b.monto - a.monto);

  $("#mCantidadRegistros").val(regs.length);
  $("#mBadgeCantidad").text(`${regs.length} registros`).show();
  $("#checkTodos").prop("checked", false);

  if (!regs.length) {
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

function toggleCheckTodos(el) {
  $(".mcheck").prop("checked", $(el).is(":checked"));
}

function mLimpiarFiltros() {
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

// ── TABLA REASIGNACIÓN ───────────────────────────────────────────────────

function mAgregarFilaReasignacion() {
  $("#mFilaVacia").remove();

  const optsZona = zonas.map(z => `<option>${z}</option>`).join("");
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

function mActualizarSucursales(sel, rowId) {
  const zona = $(sel).val();
  const $row = $(`#${rowId}`);
  const $selSuc = $row.find(".msel-sucursal");
  const $selEj = $row.find(".msel-ejecutivo");

  let sucs = Object.keys(usuariosPorSucursal);
  if (zona) {
    sucs = sucs.filter(s =>
      usuariosPorSucursal[s].some(u => u.zona === zona)
    );
  }

  let opts = `<option value="">-- Sucursal --</option>`;
  sucs.forEach(s => { opts += `<option>${s}</option>`; });
  $selSuc.html(opts);
  $selEj.html(`<option value="">-- Ejecutivo --</option>`);
}

function mActualizarEjecutivos(sel, rowId) {
  const sucursal = $(sel).val();
  const $selEj = $(`#${rowId}`).find(".msel-ejecutivo");

  const ejecutivos = ejecutivosPorSucursal[sucursal] || [];
  let opts = `<option value="">-- Ejecutivo --</option>`;
  ejecutivos.forEach(e => { opts += `<option>${e}</option>`; });
  $selEj.html(opts);
}

function mReasignar() {
  const filas = $("#mTbodyReasignacion tr:not(#mFilaVacia)").length;
  if (!filas) { customAlert("⚠️ Agrega al menos una fila de reasignación."); return; }

  let valido = true;
  $("#mTbodyReasignacion tr:not(#mFilaVacia)").each(function () {
    const zona = $(this).find(".msel-zona").val();
    const sucursal = $(this).find(".msel-sucursal").val();
    const ejecutivo = $(this).find(".msel-ejecutivo").val();
    if (!zona || !sucursal || !ejecutivo) valido = false;
  });

  if (!valido) { customAlert("⚠️ Completa Zona, Sucursal y Ejecutivo en todas las filas."); return; }

  const ejecutarReasignacion = function () {
    $("#mMsgExito").show();
    setTimeout(() => $("#mMsgExito").fadeOut(600), 3000);
  };

  const seleccionados = $(".mcheck:checked").length;
  if (!seleccionados) {
    customConfirm(
      "⚠️ No hay registros seleccionados en la tabla. ¿Reasignar de todas formas?",
      function (confirmed) { if (confirmed) ejecutarReasignacion(); }
    );
  } else {
    ejecutarReasignacion();
  }
}

$(document).on("click", ".btn-eliminar-fila-m", function () {
  $(this).closest("tr").remove();
  if ($("#mTbodyReasignacion tr").length === 0) {
    $("#mTbodyReasignacion").html(`
      <tr id="mFilaVacia">
        <td colspan="5" class="text-center text-muted py-3">
          Agregue filas para reasignar
        </td>
      </tr>`);
  }
});

// =======================================================================
// ALERTAS Y CONFIRMACIONES
// =======================================================================

function customAlert(msg) {
  $("#customAlertMessage").text(msg);
  new bootstrap.Modal(document.getElementById("customAlert")).show();
}

function customConfirm(msg, callback) {
  $("#confirmacionMessage").text(msg);
  const modal = new bootstrap.Modal(document.getElementById("confirmacionModal"));
  $("#confirmacionBtn").off("click").on("click", function () {
    callback(true);
    modal.hide();
  });
  $("#confirmacionCancel").off("click").on("click", function () {
    callback(false);
    modal.hide();
  });
  modal.show();
}

// =======================================================================
// MANTENEDOR JEFE DE SUCURSAL
// =======================================================================

function poblarSelectorSucursalMJ() {
  let opts = `<option value="">-- Seleccione sucursal --</option>`;
  sucursales.forEach(s => { opts += `<option value="${s}">${s}</option>`; });
  $("#mjSucursalActiva").html(opts);
}

function mjActualizarRegistros() {
  if ($("#mjSucursalActiva option").length <= 1) {
    poblarSelectorSucursalMJ();
  }

  const suc = $("#mjSucursalActiva").val();
  if (suc) {
    mjCargarEjecutivos(suc);
  } else {
    $("#mjSinAsignar").text(0);
    $("#mjTbodyReasignacion").html(`
      <tr><td colspan="4" class="text-center text-muted py-3">
        Seleccione una sucursal para ver sus ejecutivos
      </td></tr>`);
  }
}

function mjCargarEjecutivos(sucursal) {
  const total = memoriaAsignaciones[sucursal] || 0;
  const ejecutivos = ejecutivosPorSucursal[sucursal]
    || Array.from({ length: 2 }, (_, i) => `Ejecutivo ${i + 1}`);

  $("#mjTotalSucursal").text(total.toLocaleString());

  if (total === 0) {
    customAlert(`⚠️ La sucursal "${sucursal}" no tiene registros asignados desde el Orquestador.`);
  }

  $("#mjTbodyReasignacion").empty();

  ejecutivos.forEach(ej => {
    const asignado = (memoriaEjecutivos[sucursal] && memoriaEjecutivos[sucursal][ej])
      ? memoriaEjecutivos[sucursal][ej] : 0;

    $("#mjTbodyReasignacion").append(`
      <tr>
        <td class="text-center">
          <input type="checkbox" class="form-check-input" checked/>
        </td>
        <td>${ej}</td>
        <td>
          <input type="number" min="0" value="${asignado}"
            class="form-control form-control-sm mj-ejecutivo-input"
            data-ejecutivo="${ej}"
            data-sucursal="${sucursal}"
            oninput="mjValidarExceso()">
        </td>
        <td class="text-center">
          <button class="btn btn-outline-danger btn-sm py-0 px-1 btn-eliminar-fila-mj">
            <i class="bi bi-trash"></i>
          </button>
        </td>
      </tr>`);
  });

  mjValidarExceso();
}

function mjValidarExceso() {
  const sucursal = $("#mjSucursalActiva").val();
  const total = memoriaAsignaciones[sucursal] || 0;
  let asignado = 0;

  $(".mj-ejecutivo-input").each(function () {
    asignado += parseInt($(this).val()) || 0;
  });

  const restante = total - asignado;
  $("#mjSinAsignar")
    .text(restante < 0 ? 0 : restante)
    .css("color", restante <= 0 && total > 0 ? "var(--success)" : "var(--danger)");

  if (asignado > total && total > 0) {
    const exceso = asignado - total;
    const $last = $(".mj-ejecutivo-input")
      .filter(function () { return (parseInt($(this).val()) || 0) > 0; }).last();
    $last.val(Math.max(0, (parseInt($last.val()) || 0) - exceso));
    customAlert(`⚠️ No puedes superar los ${total.toLocaleString()} registros asignados.`);
    mjValidarExceso();
  }
}

function mjBuscarRegistros() {
  const prod = $("#mjFiltroProducto").val();
  const orden = $("#mjFiltroOrden").val();

  if (!prod) { customAlert("⚠️ Seleccione un producto primero."); return; }

  let regs = [...(registrosPorProducto[prod] || [])];
  regs.sort((a, b) => orden === "asc" ? a.monto - b.monto : b.monto - a.monto);

  if (!regs.length) {
    $("#mjTbodyPreview").html(`
      <tr><td colspan="4" class="text-center text-muted py-3">
        Sin registros para el producto seleccionado
      </td></tr>`);
    return;
  }

  $("#mjTbodyPreview").html(
    regs.map(r => `
      <tr>
        <td>${r.producto}</td>
        <td>${r.asignacion}</td>
        <td class="text-success fw-bold">${fmtMonto(r.monto)}</td>
        <td><span class="badge bg-light text-dark border">${r.segmento}</span></td>
      </tr>`
    ).join("")
  );
}

function mjLimpiarFiltros() {
  $("#mjFiltroEstado, #mjFiltroProducto, #mjFiltroOrden").prop("selectedIndex", 0);
  $("#mjTbodyPreview").html(`
    <tr><td colspan="4" class="text-center text-muted py-4">
      <i class="bi bi-search me-1"></i>Aplique filtros para ver datos
    </td></tr>`);
}

function mjAgregarFila() {
  const sucursal = $("#mjSucursalActiva").val();
  if (!sucursal) { customAlert("⚠️ Seleccione una sucursal primero."); return; }

  const ejecutivos = ejecutivosPorSucursal[sucursal]
    || Array.from({ length: 2 }, (_, i) => `Ejecutivo ${i + 1}`);

  const opts = ejecutivos.map(e => `<option value="${e}">${e}</option>`).join("");
  const rowId = `mjRow_${Date.now()}`;

  $("#mjTbodyReasignacion tr:has(td[colspan])").remove();

  $("#mjTbodyReasignacion").append(`
    <tr id="${rowId}">
      <td class="text-center">
        <input type="checkbox" class="form-check-input" checked/>
      </td>
      <td>
        <select class="form-select form-select-sm mj-sel-ejecutivo">
          ${opts}
        </select>
      </td>
      <td>
        <input type="number" min="0" value="0"
          class="form-control form-control-sm mj-ejecutivo-input"
          data-sucursal="${sucursal}"
          oninput="mjValidarExceso()">
      </td>
      <td class="text-center">
        <button class="btn btn-outline-danger btn-sm py-0 px-1 btn-eliminar-fila-mj">
          <i class="bi bi-trash"></i>
        </button>
      </td>
    </tr>`);
}

function mjReasignar() {
  const sucursal = $("#mjSucursalActiva").val();
  if (!sucursal) { customAlert("⚠️ Seleccione una sucursal primero."); return; }

  const total = memoriaAsignaciones[sucursal] || 0;
  let asignado = 0;
  $(".mj-ejecutivo-input").each(function () { asignado += parseInt($(this).val()) || 0; });

  if (total === 0) { customAlert("⚠️ Esta sucursal no tiene registros asignados."); return; }
  if (asignado === 0) { customAlert("⚠️ Ingresa al menos un registro para reasignar."); return; }

  const ejecutarReasignacion = function () {
    if (!memoriaEjecutivos[sucursal]) memoriaEjecutivos[sucursal] = {};

    $(".mj-ejecutivo-input").each(function () {
      const $fila = $(this).closest("tr");
      const $sel = $fila.find(".mj-sel-ejecutivo");
      const ej = $sel.length ? $sel.val() : $(this).data("ejecutivo");
      const val = parseInt($(this).val()) || 0;
      if (ej) memoriaEjecutivos[sucursal][ej] = val;
    });

    $("#mjMsgExito").show();
    setTimeout(() => $("#mjMsgExito").fadeOut(600), 3000);
  };

  if (asignado < total) {
    customConfirm(
      `⚠️ Quedan ${(total - asignado).toLocaleString()} registros sin asignar. ¿Confirmas la reasignación?`,
      function (confirmed) { if (confirmed) ejecutarReasignacion(); }
    );
  } else {
    ejecutarReasignacion();
  }
}

$(document).on("click", ".btn-eliminar-fila-mj", function () {
  $(this).closest("tr").remove();
  if ($("#mjTbodyReasignacion tr").length === 0) {
    $("#mjTbodyReasignacion").html(`
      <tr><td colspan="4" class="text-center text-muted py-3">
        Seleccione una sucursal para ver sus ejecutivos
      </td></tr>`);
  }
  mjValidarExceso();
});

// =======================================================================
// VISTA EJECUTIVO (GESTOR DE ATENCIÓN)
// =======================================================================

function poblarSelectorEjecutivoAtencion() {
  const $select = $("#ejecutivoAtencionActivo");
  $select.html('<option value="">-- Seleccione ejecutivo --</option>');

  // Poblar con todos los ejecutivos y guardar su sucursal en un data attribute
  Object.keys(ejecutivosPorSucursal).forEach(sucursal => {
    ejecutivosPorSucursal[sucursal].forEach(ej => {
      if (!$select.find(`option[value="${ej}"]`).length) {
        $select.append(`<option value="${ej}" data-sucursal="${sucursal}">${ej}</option>`);
      }
    });
  });
}

let atencionRegistrosActuales = [];

function cargarVistaAtencion() {
  const ej = $("#ejecutivoAtencionActivo").val();
  const sucursal = $("#ejecutivoAtencionActivo option:selected").data("sucursal");
  const $tbody = $("#tbodyAtencion");

  if (!ej) {
    $tbody.html('<tr><td colspan="4" class="text-center text-muted py-3">Seleccione un ejecutivo para ver sus registros</td></tr>');
    $("#countPendiente").text("0");
    $("#countGestionado").text("0");
    $("#countCerrado").text("0");
    return;
  }

  const cantidadAsignada = (memoriaEjecutivos[sucursal] && memoriaEjecutivos[sucursal][ej]) ? memoriaEjecutivos[sucursal][ej] : 0;

  if (cantidadAsignada === 0) {
    $tbody.html('<tr><td colspan="4" class="text-center text-muted py-3">El ejecutivo no tiene registros asignados para este producto</td></tr>');
    $("#countPendiente").text("0");
    $("#countGestionado").text("0");
    $("#countCerrado").text("0");
    return;
  }

  // Simular la extracción de registros tal como lo hace el Jefe de Sucursal
  const regs = registrosFiltrados.length > 0 ? registrosFiltrados : getRegistrosActivos();
  let usados = 0;

  const allEj = ejecutivosPorSucursal[sucursal] || [];
  for (let otherEj of allEj) {
    if (otherEj === ej) break;
    if (memoriaEjecutivos[sucursal] && memoriaEjecutivos[sucursal][otherEj]) {
      usados += memoriaEjecutivos[sucursal][otherEj];
    }
  }

  // Resetear el filtro al cambiar de ejecutivo
  $("#filtroAtencionEstado").val("");

  atencionRegistrosActuales = regs.slice(usados, usados + cantidadAsignada);
  renderTablaAtencion();
}

function renderTablaAtencion() {
  let tbody = "";
  let contadores = { Pendiente: 0, Gestionado: 0, Cerrado: 0 };
  const filtroEstado = $("#filtroAtencionEstado").val();

  atencionRegistrosActuales.forEach(r => {
    let estado = memoriaAtencion[r.id_cliente] || "Pendiente";
    contadores[estado]++;

    // Solo renderizar la fila si coincide con el filtro o si no hay filtro activo
    if (filtroEstado && estado !== filtroEstado) return;

    let botonGestionar = "";
    if (estado === "Pendiente") {
      botonGestionar = `<button class="btn btn-sm btn-primary py-0 px-2" onclick="abrirModalLlamada(${r.id_cliente})"><i class="bi bi-telephone"></i> Contactar</button>`;
    } else if (estado === "Gestionado") {
      botonGestionar = `<button class="btn btn-sm btn-success py-0 px-2" onclick="cambiarEstadoAtencion(${r.id_cliente}, 'Cerrado')"><i class="bi bi-pencil-square"></i> Registrar actividad</button>`;
    } else {
      botonGestionar = `<span class="badge bg-secondary"><i class="bi bi-check-circle"></i> Completado</span>`;
    }

    tbody += `
            <tr>
                <td>${r.id_cliente}</td>
                <td>${fmtMonto(r.monto)}</td>
                <td><span class="badge ${estado === 'Pendiente' ? 'bg-warning text-dark' : estado === 'Gestionado' ? 'bg-info' : 'bg-success'}">${estado}</span></td>
                <td>${botonGestionar}</td>
            </tr>
        `;
  });

  if (tbody === "") {
    tbody = `<tr><td colspan="4" class="text-center text-muted py-3">No hay registros para el estado seleccionado</td></tr>`;
  }

  $("#tbodyAtencion").html(tbody);
  $("#countPendiente").text(contadores.Pendiente);
  $("#countGestionado").text(contadores.Gestionado);
  $("#countCerrado").text(contadores.Cerrado);
}

// ── LÓGICA MODAL CREAR REGISTRO ─────────────────────────────────────────

function abrirModalCrearRegistro() {
  // Limpiar campos
  $("#crNombre").val("");
  $("#crRut").val("");
  $("#crCampana").val("");
  $("#crTelefono").val("");
  $("#crMonto").val("");
  $("#crError").hide();
  
  const modal = new bootstrap.Modal(document.getElementById("modalCrearRegistro"));
  modal.show();
}

function guardarNuevoRegistro() {
  const nombre = $("#crNombre").val().trim();
  const rut = $("#crRut").val().trim();
  const campana = $("#crCampana").val().trim();

  if (!nombre || !rut || !campana) {
    $("#crError").show();
    return;
  }
  
  $("#crError").hide();

  // Aquí se podría guardar el registro en la estructura global y volver a renderizar si es necesario.
  // Por ahora, simulamos el éxito:
  
  const modalEl = document.getElementById("modalCrearRegistro");
  const modal = bootstrap.Modal.getInstance(modalEl);
  if (modal) modal.hide();

  customAlert("Registro guardado exitosamente.");
}

function cambiarEstadoAtencion(id_cliente, nuevoEstado) {
  memoriaAtencion[id_cliente] = nuevoEstado;
  renderTablaAtencion();
}

let llamadaActualId = null;

function abrirModalLlamada(id_cliente) {
  const registro = atencionRegistrosActuales.find(r => r.id_cliente === id_cliente);
  if (!registro) return;

  llamadaActualId = id_cliente;
  $("#llamadaNombre").text(registro.nombre);
  $("#llamadaRUT").text(registro.id_cliente);
  $("#llamadaMonto").text(fmtMonto(registro.monto));

  // Resetear formulario
  $("#llamadaTipificacion").val("");
  $("#llamadaObservacion").val("");
  $("#llamadaError").hide();

  const modal = new bootstrap.Modal(document.getElementById('modalLlamada'));
  modal.show();
}

function colgarLlamada() {
  const tipificacion = $("#llamadaTipificacion").val();
  const observacion = $("#llamadaObservacion").val().trim();

  if (!tipificacion || !observacion) {
    $("#llamadaError").show();
    return;
  }

  // Aquí podríamos guardar la observación y tipificación en memoriaAtencion si fuera necesario
  // Por ahora simplemente avanzamos el estado

  const modalEl = document.getElementById('modalLlamada');
  const modal = bootstrap.Modal.getInstance(modalEl);
  modal.hide();

  cambiarEstadoAtencion(llamadaActualId, 'Gestionado');
  llamadaActualId = null;
}