import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RecipeForm from '../features/recipes/components/RecipeForm';

describe('RecipeForm Component', () => {
    test('Debe permitir ingresar datos, agregar ingredientes y enviar', async () => {
        const mockOnSubmit = jest.fn();
        render(<RecipeForm onSubmit={mockOnSubmit} isLoading={false} />);

        // 1. Llenamos los datos básicos
        fireEvent.change(screen.getByLabelText(/Título de la receta/i), { target: { value: 'Pan Casero' } });
        fireEvent.change(screen.getByLabelText(/Tiempo/i), { target: { value: '60 mins' } });
        fireEvent.change(screen.getByLabelText(/Descripción Corta/i), { target: { value: 'Rico pan' } });
        fireEvent.change(screen.getByLabelText(/Pasos de preparación/i), { target: { value: 'Amasar y hornear' } });

        // 2. Interactuamos con los ingredientes (Lógica dinámica)
        // Llenamos el primer ingrediente (que ya existe por defecto)
        const inputsIngrediente = screen.getAllByPlaceholderText(/Ej: Harina/i);
        const inputsCantidad = screen.getAllByPlaceholderText(/Ej: 2 tazas/i);

        fireEvent.change(inputsIngrediente[0], { target: { value: 'Harina' } });
        fireEvent.change(inputsCantidad[0], { target: { value: '1kg' } });

        // Agregamos un SEGUNDO ingrediente (Botón "+")
        const btnAgregar = screen.getByText(/\+ Agregar otro ingrediente/i);
        fireEvent.click(btnAgregar);

        // Verificamos que ahora hay 2 filas de inputs
        const inputsIngredienteNuevos = screen.getAllByPlaceholderText(/Ej: Harina/i);
        expect(inputsIngredienteNuevos).toHaveLength(2);

        // Llenamos el segundo ingrediente
        fireEvent.change(inputsIngredienteNuevos[1], { target: { value: 'Sal' } });
        const inputsCantidadNuevos = screen.getAllByPlaceholderText(/Ej: 2 tazas/i);
        fireEvent.change(inputsCantidadNuevos[1], { target: { value: '1 cdta' } });

        // 3. Enviamos el formulario
        const btnGuardar = screen.getByText(/Guardar Receta/i);
        fireEvent.click(btnGuardar);

        // 4. Verificamos que se envió todo correctamente
        expect(mockOnSubmit).toHaveBeenCalledTimes(1);
        expect(mockOnSubmit).toHaveBeenCalledWith(expect.objectContaining({
            title: 'Pan Casero',
            ingredients: [
                { name: 'Harina', quantity: '1kg' },
                { name: 'Sal', quantity: '1 cdta' }
            ]
        }));
    });
});