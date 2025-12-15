import { useState, useEffect } from 'react';
import axios from 'axios';

export const useRecipeDetail = (id) => {
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                // Petición GraphQL: Pedimos exactamente los campos que necesitamos
                // Nota cómo pedimos 'ingredients' y dentro 'name' y 'quantity'
                const query = `
                query GetRecipe($id: ID!) {
                    recipe(id: $id) {
                    id
                    title
                    description
                    image
                    difficulty
                    time
                    method
                    ingredients {
                        name
                        quantity
                    }
                    }
                }
                `;

                const response = await axios.post('/graphql', {
                    query,
                    variables: { id }
                });

                // GraphQL a veces devuelve errores dentro de 'data.errors'
                if (response.data.errors) {
                    throw new Error(response.data.errors[0].message);
                }

                setRecipe(response.data.data.recipe);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchRecipe();
        }
    }, [id]);

    return { recipe, loading, error };
};