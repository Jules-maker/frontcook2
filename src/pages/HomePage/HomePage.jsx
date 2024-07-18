import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from "../../components/Grid/Grid";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { useAuth } from "../../components/Auth/AuthContext";
import BASE_API_URL from '../../config'; // Importer BASE_URL depuis la configuration

const HomePage = () => {
    const { token } = useAuth(); // Utiliser le token du contexte
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BASE_API_URL}/api/menu`, { // Utiliser BASE_URL ici
                    headers: {
                        Authorization: `Bearer ${token}`, // Ajouter le token dans l'en-tête Authorization
                    },
                });
                setData(response.data); // Assumer que la réponse contient les données dans `response.data`
            } catch (error) {
                setError('Failed to fetch data.');
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [token]);

    return (
        <main className="min-h-[calc(100vh-376px)] md:min-h-[calc(100vh-256px)] xl:min-h-[calc(100vh-208px)]">
            <Grid title="Qu'allons-nous commander aujourd'hui ?">
                {error && <p className="text-red-500 text-center">{error}</p>}
                {data && data.length
                    ? data.map((item) => (
                        <RecipeCard
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                            dishes={item.dishes}
                        />
                    ))
                    : <p className="text-center">No data available.</p>}
            </Grid>
        </main>
    );
};

export default HomePage;
