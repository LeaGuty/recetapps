import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../../components/Card';
import Button from '../../../components/Button';

const RecipeDetail = ({ recipe }) => {
    return (
        <div className="max-w-4xl mx-auto">
            {/* Botón para volver atrás */}
            <Link to="/" className="inline-block mb-6">
                <Button variant="secondary">← Volver al listado</Button>
            </Link>

            <Card className="overflow-hidden">
                {/* Encabezado */}
                {/* NUEVO: Imagen de portada */}
                <div className="h-48 w-full overflow-hidden bg-gray-200">
                    <img
                        src={recipe.image || "https://placehold.co/800x400?text=Sin+Imagen"}
                        alt={recipe.title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="bg-blue-600 p-8 text-white">
                    <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
                    <div className="flex gap-4 text-blue-100 text-sm font-medium">
                        <span>{recipe.time}</span>
                        <span>{recipe.difficulty}</span>
                    </div>
                </div>

                <div className="p-8 grid md:grid-cols-3 gap-8">

                    {/* Columna Izquierda: Ingredientes */}
                    <div className="md:col-span-1 bg-gray-50 p-6 rounded-xl h-fit">
                        <h3 className="font-bold text-gray-900 text-lg mb-4 border-b pb-2">
                            Ingredientes
                        </h3>
                        <ul className="space-y-3">
                            {recipe.ingredients.map((ing, index) => (
                                <li key={index} className="flex justify-between text-sm">
                                    <span className="text-gray-700">{ing.name}</span>
                                    <span className="font-semibold text-blue-600">{ing.quantity}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Columna Derecha: Preparación */}
                    <div className="md:col-span-2">
                        <h3 className="font-bold text-gray-900 text-lg mb-4 border-b pb-2">
                            Preparación
                        </h3>
                        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                            {recipe.method}
                        </p>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default RecipeDetail;
