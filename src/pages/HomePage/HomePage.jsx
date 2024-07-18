// import card_background from '../../assets/card-background-home.svg';
import Grid from "../../components/Grid/Grid";
import Recipes from "../../libs/Recipes";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
// import getAllMenu from "../../api/apiMenu";

const HomePage = () => {
  const data = Recipes();

  return (
    <main className="min-h-[calc(100vh-376px)] md:min-h-[calc(100vh-256px)] xl:min-h-[calc(100vh-208px)]">
      <Grid title="Qu'allons-nous commander aujourd'hui ?">
        {data &&
          data.length &&
          data.map((item, index) => <RecipeCard key={index} {...item} />)}
      </Grid>
    </main>
  );
};

export default HomePage;
