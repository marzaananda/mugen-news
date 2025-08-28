import articles from "../data/articles.json";
import ArticleCard from "../components/ArticleCard.jsx";

export default function Home() {
  return (
    <div className="px-6 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
