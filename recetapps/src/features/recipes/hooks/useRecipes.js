import { useState, useEffect } from 'react';
import axios from 'axios';

export const useRecipes = () => {
    const [recipes, setRecipes] = useState([]); // Donde guardamos las recetas
    const [loading, setLoading] = useState(true); // Para mostrar "Cargando..."
    const [error, setError] = useState(null); // Por si falla algo

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                // Esta petición será interceptada por MSW
                const response = await axios.get('/api/recipes');
                setRecipes(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, []);

    return { recipes, loading, error };
};