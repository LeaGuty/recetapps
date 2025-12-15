/* eslint-disable no-undef */

describe('Recetapps - Flujos de Usuario E2E', () => {
    // Configuración inicial antes de cada prueba [cite: 275]
    beforeEach(() => {
        // Visitamos la URL donde corre tu Vite (ajusta el puerto si es distinto a 5173) [cite: 276]
        cy.visit('http://localhost:5173');
    });

    // PRUEBA 1: Ver el listado (Lectura)
    it('Debe cargar la página y mostrar las recetas disponibles', () => {
        // Validamos que el título principal sea visible [cite: 284, 285]
        cy.contains('h1', 'Recetas Disponibles').should('be.visible');

        // Validamos que MSW esté entregando datos (Pastel y Cazuela)
        cy.contains('Pastel de Chocolate').should('be.visible');
        cy.contains('Cazuela de Vacuno').should('be.visible');
    });

    // PRUEBA 2: Navegación al detalle
    it('Debe navegar al detalle de una receta al hacer clic', () => {
        // Simulamos clic en el botón "Ver Receta" del pastel [cite: 293]
        // .first() asegura que clickeamos el primero si hay varios
        cy.contains('Ver Receta').click();

        // Validamos que la URL cambió
        cy.url().should('include', '/recipe/');

        // Validamos que estamos viendo los ingredientes [cite: 296]
        cy.contains('h3', 'Ingredientes').should('be.visible');
        cy.contains('Harina').should('be.visible');
    });

    // PRUEBA 3: Crear una receta nueva (Flujo Completo)
    it('Debe permitir crear una nueva receta y verla en la lista', () => {
        // 1. Ir al formulario
        cy.contains('Nueva Receta').click();
        cy.contains('h2', 'Nueva Receta').should('be.visible');

        // 2. Llenar el formulario (Simulación de usuario) [cite: 68]
        // Usamos selectores por atributo name para ser precisos
        cy.get('input[name="title"]').type('Sopaipillas Pasadas');
        cy.get('input[name="time"]').type('45 mins');
        cy.get('select[name="difficulty"]').select('Media');
        cy.get('select[name="category"]').select('Postres');
        cy.get('input[name="description"]').type('Clásico chileno de invierno');

        // Ingredientes dinámicos
        cy.get('input[placeholder="Ej: Harina"]').type('Zapallo y Harina');
        cy.get('input[placeholder="Ej: 2 tazas"]').type('1 kg');

        // Preparación
        cy.get('textarea[name="method"]').type('Freír sopaipillas y pasar por chancaca.');

        // 3. Enviar
        cy.contains('button', 'Guardar Receta').click();

        // 4. Validar resultado (Redirección y aparición en lista)
        cy.contains('h1', 'Recetas Disponibles').should('be.visible');
        cy.contains('Sopaipillas Pasadas').should('be.visible');
    });

    // PRUEBA 4: Navegación de retorno
    it('Debe permitir volver del detalle al inicio', () => {
        cy.contains('Ver Receta').click();
        cy.contains('Volver al listado').click();

        // Confirmamos que estamos de vuelta en el home
        cy.contains('Recetas Disponibles').should('be.visible');
    });
});