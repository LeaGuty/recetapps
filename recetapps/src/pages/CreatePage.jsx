import React from 'react';
import { useCreateRecipe } from '../features/recipes/hooks/useCreateRecipe';
import RecipeForm from '../features/recipes/components/RecipeForm';

const CreatePage = () => {
    const { createRecipe, loading } = useCreateRecipe();

    return (
        <div>
            <RecipeForm onSubmit={createRecipe} isLoading={loading} />
        </div>
    );
};

export default CreatePage;