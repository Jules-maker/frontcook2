import Article from './Article';
const Articles = () => {
  const articles = [
    { title: 'titre 1', content: 'contenu 1', publish: true },
    { title: 'titre 2', content: 'contenu 2', publish: false },
    { title: 'titre 3', content: 'contenu 3', publish: true },
  ];
    
  return (
    <div>
      <h1>Articles</h1>
      {articles.filter(i =>i.publish).map((article) => {
        return (
          <Article key={article.title} article={article} />
        );
      })}
    </div>
  );
}

export default Articles;