import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeDetail } from '../features/recipes/hooks/useRecipeDetail';
import RecipeDetail from '../features/recipes/components/RecipeDetail';

const DetailPage = () => {
    const { id } = useParams(); // Obtenemos el ID de la URL
    const { recipe, loading, error } = useRecipeDetail(id);

    if (loading) return <div className="text-center py-10">Cargando detalles...</div>;
    if (error) return <div className="text-center py-10 text-red-500">Error: {error.message}</div>;
    if (!recipe) return <div className="text-center py-10">Receta no encontrada</div>;

    return <RecipeDetail recipe={recipe} />;
};

export default DetailPage;