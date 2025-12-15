import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RecipeList from '../features/recipes/components/RecipeList';

const mockRecipes = [
    { id: '1', title: 'Pastel Test', category: 'Postres', difficulty: 'Fácil', image: '' },
    { id: '2', title: 'Cazuela Test', category: 'Platos', difficulty: 'Media', image: '' }
];

describe('RecipeList Component', () => {
    test('Debe renderizar una tarjeta por cada receta recibida', () => {
        render(
            <BrowserRouter>
                <RecipeList recipes={mockRecipes} />
            </BrowserRouter>
        );

        // Verificamos comportamiento de unidad individual 
        expect(screen.getByText('Pastel Test')).toBeInTheDocument();
        expect(screen.getByText('Cazuela Test')).toBeInTheDocument();

        // Si hay 2 recetas, debe haber 2 botones de "Ver Receta"
        const buttons = screen.getAllByText(/Ver Receta/i);
        expect(buttons).toHaveLength(2);
    });
});