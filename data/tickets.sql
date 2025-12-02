INSERT INTO tickets
(customer_id, title, description, completed, tech, created_at, updated_at)
VALUES
-- Customer 1: Carlos Ramírez
(1, 'Problema con impresora', 'La impresora no responde al enviar documentos.', false, 'Unassigned', NOW(), NOW()),
(1, 'Correo no funciona', 'El usuario no puede enviar ni recibir correos.', true, 'Marcos Díaz', NOW(), NOW()),
(1, 'Actualización de software', 'Solicita actualización de Office a la versión más reciente.', false, 'Unassigned', NOW(), NOW()),
(1, 'Lentitud en el equipo', 'La computadora tarda demasiado en arrancar.', true, 'Andrea Torres', NOW(), NOW()),

-- Customer 2: Ana Gutiérrez
(2, 'Problema de WiFi', 'No logra conectarse a la red inalámbrica.', false, 'Unassigned', NOW(), NOW()),
(2, 'Pantalla azul', 'La laptop muestra pantalla azul al iniciar.', true, 'Luis Herrera', NOW(), NOW()),
(2, 'Instalar impresora', 'Necesita agregar impresora de red.', false, 'Unassigned', NOW(), NOW()),

-- Customer 3: Luis Martínez
(3, 'Backup requerido', 'Solicita respaldo completo de su equipo.', true, 'Roberto Álvarez', NOW(), NOW()),
(3, 'Reemplazo de monitor', 'El monitor actual parpadea constantemente.', false, 'Unassigned', NOW(), NOW()),
(3, 'Error en sistema contable', 'El sistema arroja error al generar reportes.', false, 'Karla Ruiz', NOW(), NOW()),
(3, 'Limpieza de malware', 'Posible infección por virus después de abrir un archivo sospechoso.', true, 'Andrea Torres', NOW(), NOW()),

-- Customer 4: María Santos
(4, 'Configuración de correo móvil', 'Quiere agregar su cuenta al celular.', true, 'Luis Herrera', NOW(), NOW()),
(4, 'No detecta USB', 'El equipo no reconoce memorias USB.', false, 'Unassigned', NOW(), NOW()),
(4, 'Restablecer contraseña', 'Olvidó contraseña del sistema interno.', true, 'Sofía Martínez', NOW(), NOW()),
(4, 'Corte de energía', 'PC no enciende tras apagón del edificio.', false, 'Unassigned', NOW(), NOW()),

-- Customer 5: Jorge Hernández
(5, 'Problemas con VPN', 'No puede conectarse a la red remota.', true, 'Eduardo Paredes', NOW(), NOW()),
(5, 'Duplicados en base de datos', 'Ve registros duplicados al consultar clientes.', false, 'Unassigned', NOW(), NOW()),
(5, 'Instalar Java', 'Requiere Java 17 para un software específico.', true, 'Marcos Díaz', NOW(), NOW()),
(5, 'Actualización de drivers', 'Solicita actualización de controladores.', false, 'Unassigned', NOW(), NOW()),

-- Customer 6: Elena Vega
(6, 'Problema con audio', 'El equipo no reproduce sonido.', false, 'Unassigned', NOW(), NOW()),
(6, 'Restablecer perfil', 'Error al cargar perfil de Windows.', true, 'Roberto Álvarez', NOW(), NOW()),
(6, 'Capacitación en Teams', 'Pide ayuda para usar Microsoft Teams.', true, 'Karla Ruiz', NOW(), NOW()),
(6, 'Impresora atascada', 'Papel atorado en la impresora.', false, 'Unassigned', NOW(), NOW()),

-- Customer 7: Raúl Castillo
(7, 'Error en navegador', 'Páginas no cargan correctamente.', true, 'Sofía Martínez', NOW(), NOW()),
(7, 'Cargar certificado digital', 'Necesita agregar certificado al navegador.', false, 'Unassigned', NOW(), NOW()),
(7, 'Configurar doble monitor', 'Desea habilitar doble pantalla.', true, 'Luis Herrera', NOW(), NOW()),
(7, 'Problema con teclado', 'Algunas teclas no responden.', false, 'Unassigned', NOW(), NOW()),

-- Customer 8: Patricia Luna
(8, 'Coppy no imprime a color', 'La impresora solo saca documentos en blanco y negro.', false, 'Unassigned', NOW(), NOW()),
(8, 'Error en Excel', 'Macros no funcionan correctamente.', true, 'Marcos Díaz', NOW(), NOW()),
(8, 'Configurar acceso remoto', 'Solicita acceso remoto desde casa.', true, 'Eduardo Paredes', NOW(), NOW()),
(8, 'Cliente VPN expira', 'Solicita renovar certificado VPN.', false, 'Unassigned', NOW(), NOW()),

-- Customer 9: Fernando Ortiz
(9, 'Lentitud general', 'Equipo muy lento incluso para abrir carpetas.', false, 'Unassigned', NOW(), NOW()),
(9, 'Instalar software CAD', 'Requiere AutoCAD versión 2024.', true, 'Karla Ruiz', NOW(), NOW()),
(9, 'Problema con mouse', 'El ratón pierde conexión intermitente.', true, 'Andrea Torres', NOW(), NOW()),
(9, 'Agregar impresora por IP', 'Necesita impresora de red.', false, 'Unassigned', NOW(), NOW()),

-- Customer 10: Lucía Pérez
(10, 'Correo saturado', 'Bandeja de entrada llena, no recibe correos.', true, 'Sofía Martínez', NOW(), NOW()),
(10, 'Problema con cámara', 'Cámara no funciona en videollamadas.', false, 'Unassigned', NOW(), NOW()),
(10, 'Solicita cambio de equipo', 'Laptop tiene más de 6 años y presenta fallas constantes.', false, 'Unassigned', NOW(), NOW()),
(10, 'Error en firma electrónica', 'Firma no aparece en documentos PDF.', true, 'Luis Herrera', NOW(), NOW());
