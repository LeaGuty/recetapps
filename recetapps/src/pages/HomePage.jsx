import React from 'react';
import { useRecipes } from '../features/recipes/hooks/useRecipes';
import RecipeList from '../features/recipes/components/RecipeList';

const HomePage = () => {
    const { recipes, loading, error } = useRecipes();

    if (loading) {
        return <div className="text-center py-10 text-gray-500">Cargando recetas...</div>;
    }

    if (error) {
        return <div className="text-center py-10 text-red-500">Error al cargar las recetas.</div>;
    }

    return (
        <div>
            <div className="mb-8 text-center sm:text-left">
                <h1 className="text-3xl font-bold text-gray-900">Recetas Disponibles</h1>
                <p className="mt-2 text-gray-600">Explora nuestra colección de platos deliciosos.</p>
            </div>

            {recipes.length > 0 ? (
                <RecipeList recipes={recipes} />
            ) : (
                <p className="text-center text-gray-500">No hay recetas disponibles.</p>
            )}
        </div>
    );
};

export default HomePage;