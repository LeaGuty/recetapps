import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const useCreateRecipe = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Para redirigir al usuario después de guardar

    const createRecipe = async (recipeData) => {
        setLoading(true);
        setError(null);
        try {
            // Enviamos los datos (POST) a nuestro mock
            await axios.post('/api/recipes', recipeData);

            // Si todo sale bien, volvemos a la página de inicio
            navigate('/');
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { createRecipe, loading, error };
};