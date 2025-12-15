import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../../components/Card';
import Button from '../../../components/Button';

const RecipeList = ({ recipes }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
                <Card key={recipe.id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
                    {/* NUEVO: Imagen de portada */}
                    <div className="h-48 w-full overflow-hidden bg-gray-200">
                        <img
                            src={recipe.image || "https://placehold.co/400x300?text=Sin+Imagen"}
                            alt={recipe.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-6 flex-1">
                        <div className="flex justify-between items-start mb-4">
                            <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                                {recipe.category}
                            </span>
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${recipe.difficulty === 'Fácil' ? 'text-green-600 bg-green-100' :
                                recipe.difficulty === 'Media' ? 'text-yellow-600 bg-yellow-100' :
                                    'text-red-600 bg-red-100'
                                }`}>
                                {recipe.difficulty}
                            </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2">{recipe.title}</h3>
                        <p className="text-gray-500 text-sm mb-4">
                            Una deliciosa opción para tu menú de {recipe.category.toLowerCase()}.
                        </p>
                    </div>

                    <div className="p-6 pt-0 mt-auto border-t border-gray-100 bg-gray-50/50">
                        <Link to={`/recipe/${recipe.id}`} className="block mt-4">
                            <Button variant="primary" className="w-full justify-center">
                                Ver Receta
                            </Button>
                        </Link>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default RecipeList;