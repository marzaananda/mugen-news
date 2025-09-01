import { useParams } from "react-router-dom";
import articles from "../data/articles.json";
import ArticleCard from "../components/ArticleCard.jsx";

export default function TagPage() {
  const { tag } = useParams();
  const filteredArticles = articles.filter(a => 
    a.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 pt-[120px]">
      <h1 className="text-2xl font-bold mb-6">
        Artikel dengan tag: <span className="text-blue-600">{tag}</span>
      </h1>

      {filteredArticles.length === 0 ? (
        <p>Tidak ada artikel dengan tag ini.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
