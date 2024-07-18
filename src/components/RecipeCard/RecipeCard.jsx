import React from 'react';

const BASE_IMAGE_URL = 'https://cook.jules-giraud.xyz'; // Préfixe pour les images

const RecipeCard = ({ title, description, price = 0, image, dishes }) => {
    const imageUrl = `${BASE_IMAGE_URL}${image}`; // Concaténer le préfixe avec le chemin d'image

    return (
        <div className="p-4 bg-white shadow-lg rounded-lg">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="mt-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-gray-700">{description}</p>
                <p className="text-indigo-600 font-bold">${price.toFixed(2)}</p>
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-semibold">Dishes:</h3>
                {dishes && dishes.length > 0 ? (
                    <ul>
                        {dishes.map((dish) => (
                            <li key={dish.id} className="mt-2">
                                <p className="font-semibold">{dish.title}</p>
                                <p>{dish.description}</p>
                                <p>Preparation Time: {dish.timePrepare} minutes</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No dishes available.</p>
                )}
            </div>
        </div>
    );
};

export default RecipeCard;
