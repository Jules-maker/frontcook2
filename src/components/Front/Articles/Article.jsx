//import ArticleModel from "../../../models/articleModel"; //TODO: vérifier concordance de l'ancien modèle

// const Article = ( {key,title,content,publish}: {key:string,title:string,content:string,publish:boolean} ) => {
    const Article = ( {article}) => {
    return (
        <>
            <div key={article.title}>
                <h2>{article.title}</h2>
                <p>{article.content}</p>
                {article.publish ? <p>Publié</p> : <p>Non publié</p>}
            </div>
        </>
    );
}

export default Article;