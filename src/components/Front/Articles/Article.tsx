import ArticleModel from "../../../models/articleModel";

// const Article = ( {key,title,content,publish}: {key:string,title:string,content:string,publish:boolean} ) => {
    const Article = ( {article}: {article : ArticleModel} ) => {
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