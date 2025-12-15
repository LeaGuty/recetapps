import React, { useState } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import TextArea from '../../../components/TextArea';
import Select from '../../../components/Select';
import Card from '../../../components/Card';

const RecipeForm = ({ onSubmit, isLoading }) => {
    // Estado para los datos básicos
    const [formData, setFormData] = useState({
        title: '',
        image: '',
        description: '',
        time: '',
        difficulty: 'Fácil',
        category: 'Platos Principales',
        method: ''
    });

    // Estado especial para la lista de ingredientes (Array de objetos)
    const [ingredients, setIngredients] = useState([
        { name: '', quantity: '' } // Empezamos con una fila vacía
    ]);

    // Maneja cambios en inputs normales
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Maneja cambios en la lista de ingredientes
    const handleIngredientChange = (index, field, value) => {
        const newIngredients = [...ingredients];
        newIngredients[index][field] = value;
        setIngredients(newIngredients);
    };

    // Agregar una nueva fila de ingrediente
    const addIngredient = () => {
        setIngredients([...ingredients, { name: '', quantity: '' }]);
    };

    // Eliminar una fila de ingrediente
    const removeIngredient = (index) => {
        const newIngredients = ingredients.filter((_, i) => i !== index);
        setIngredients(newIngredients);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Unimos todo para enviar
        onSubmit({ ...formData, ingredients });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <Card className="p-6 space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 border-b pb-4">Nueva Receta</h2>

                {/* Información Básica */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Título de la receta" name="title" value={formData.title} onChange={handleChange} required />
                    {/* NUEVO INPUT */}
                    <Input
                        label="URL de la imagen (http://...)"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="https://ejemplo.com/foto.jpg"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Tiempo (ej: 30 mins)" name="time" value={formData.time} onChange={handleChange} required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Select
                        label="Dificultad"
                        name="difficulty"
                        value={formData.difficulty}
                        onChange={handleChange}
                        options={[
                            { value: 'Fácil', label: 'Fácil' },
                            { value: 'Media', label: 'Media' },
                            { value: 'Difícil', label: 'Difícil' }
                        ]}
                    />
                    <Select
                        label="Categoría"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        options={[
                            { value: 'Desayuno', label: 'Desayuno' },
                            { value: 'Platos Principales', label: 'Platos Principales' },
                            { value: 'Postres', label: 'Postres' }
                        ]}
                    />
                </div>

                <Input label="Descripción Corta" name="description" value={formData.description} onChange={handleChange} required />

                {/* Sección Dinámica de Ingredientes */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ingredientes</label>
                    {ingredients.map((ing, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                            <div className="flex-1">
                                <Input
                                    placeholder="Ej: Harina"
                                    value={ing.name}
                                    onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
                                    required
                                />
                            </div>
                            <div className="w-1/3">
                                <Input
                                    placeholder="Ej: 2 tazas"
                                    value={ing.quantity}
                                    onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
                                    required
                                />
                            </div>
                            {ingredients.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeIngredient(index)}
                                    className="text-red-500 hover:text-red-700 px-2 pb-4 font-bold text-xl"
                                >
                                    ×
                                </button>
                            )}
                        </div>
                    ))}
                    <Button type="button" variant="secondary" onClick={addIngredient} className="mt-2 text-sm">
                        + Agregar otro ingrediente
                    </Button>
                </div>

                <TextArea label="Pasos de preparación" name="method" value={formData.method} onChange={handleChange} required />

                <div className="pt-4 flex gap-4">
                    <Button type="submit" variant="primary" className="w-full">
                        {isLoading ? 'Guardando...' : 'Guardar Receta'}
                    </Button>
                </div>
            </Card>
        </form>
    );
};

export default RecipeForm;
