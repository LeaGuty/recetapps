import { http, graphql, HttpResponse, passthrough } from 'msw'

const db = [
    {
        id: "1",
        title: "Pastel de Chocolate",
        difficulty: "Fácil",
        category: "Postres",
        description: "Un delicioso pastel húmedo y esponjoso.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        ingredients: [
            { name: "Harina", quantity: "2 tazas" },
            { name: "Cacao en polvo", quantity: "1/2 taza" },
            { name: "Huevos", quantity: "3 unidades" },
            { name: "Azúcar", quantity: "1 taza" },
            { name: "Leche", quantity: "1 taza" }
        ],
        method: "Mezclar ingredientes secos. Batir huevos y azúcar. Unir todo y hornear a 180°C por 30 mins.",
        time: "45 mins"
    },
    {
        id: "2",
        title: "Cazuela de Vacuno",
        difficulty: "Media",
        category: "Platos Principales",
        description: "Clásico plato chileno para el invierno.",
        image: "https://www.recetasthermomix.cl/wp-content/uploads/cazuela.jpg",
        ingredients: [
            { name: "Carne de Vacuno", quantity: "500g" },
            { name: "Papas", quantity: "4 medianas" },
            { name: "Zapallo", quantity: "1 trozo grande" },
            { name: "Choclo", quantity: "2 trozos" },
            { name: "Arroz", quantity: "1/4 taza" }
        ],
        method: "Sellar la carne. Cocer con agua y verduras duras. Agregar arroz y papas al final.",
        time: "90 mins"
    }
];

export const handlers = [
    // --- API REST ---
    http.get('/api/recipes', () => {
        return HttpResponse.json(db.map(recipe => ({
            id: recipe.id,
            title: recipe.title,
            difficulty: recipe.difficulty,
            category: recipe.category,
            image: recipe.image
        })));
    }),

    http.post('/api/recipes', async ({ request }) => {
        const newRecipe = await request.json();
        const recipeWithId = { ...newRecipe, id: String(db.length + 1) };
        db.push(recipeWithId);
        return HttpResponse.json(recipeWithId, { status: 201 });
    }),

    // --- API GRAPHQL ---
    graphql.query('GetRecipe', ({ variables }) => {
        const { id } = variables;
        const recipe = db.find(r => r.id === id);

        if (!recipe) {
            return HttpResponse.json({ errors: [{ message: 'Receta no encontrada' }] });
        }

        return HttpResponse.json({
            data: {
                recipe: {
                    id: recipe.id,
                    title: recipe.title,
                    description: recipe.description,
                    image: recipe.image,
                    difficulty: recipe.difficulty,
                    time: recipe.time,
                    method: recipe.method,
                    ingredients: recipe.ingredients
                }
            }
        });
    }),

    // --- REGLA MAESTRA PARA IMÁGENES ---
    // Intercepta CUALQUIER petición que empiece con http/https y termine en extensiones de imagen
    http.get('**/*.{jpg,jpeg,png,gif,webp,svg}', () => passthrough()),

    // Intercepta explícitamente los servicios de imágenes externas comunes
    http.get('https://images.unsplash.com/*', () => passthrough()),
    http.get('https://placehold.co/*', () => passthrough()),
    http.get('https://via.placeholder.com/*', () => passthrough()),
]