import { useState } from "react";
import articles from "../data/articles.json";
import ArticleCard from "../components/ArticleCard.jsx";
import LoadMoreButton from "../components/LoadMoreButton.jsx";

export default function Home() {
  const [visibleArticles, setVisibleArticles] = useState(0); // awalnya kosong

  const handleLoadMore = () => {
    setVisibleArticles(prev => prev + 4);
  };

  // Headline artikel
  const headlineArticle = articles[0];

  return (
    <div className="px-6 py-8 pt-[120px]">
      {/* Layout Headline + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Headline dalam card */}
        <div className="lg:col-span-2">
          <a href={`/article/${headlineArticle.slug}`}>
            <div className="rounded-lg shadow-lg overflow-hidden cursor-pointer">
              <img
                src={headlineArticle.image}
                alt={headlineArticle.title}
                className="w-full h-[450px] object-cover"
              />
              <div className="p-6 bg-white">
                <h1 className="text-3xl font-bold mb-4">{headlineArticle.title}</h1>
                <p className="text-lg text-gray-600">{headlineArticle.summary}</p>
              </div>
            </div>
          </a>
        </div>

        {/* Sidebar Artikel Terbaru */}
        <div>
          <h2 className="font-bold text-lg mb-4">ARTIKEL TERBARU</h2>
          <div className="space-y-4">
            {articles.slice(1, 5).map(article => (
              <a
                key={article.id}
                href={`/article/${article.slug}`}
                className="flex items-center gap-3 p-2 rounded-md shadow hover:shadow-md transition cursor-pointer"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                />
                <div>
                  <h3 className="font-semibold text-sm leading-tight">{article.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Grid artikel lainnya */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {articles.slice(5, 5 + visibleArticles).map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {/* Tombol Load More */}
      {visibleArticles < articles.length - 5 && (
        <LoadMoreButton onClick={handleLoadMore} />
      )}
    </div>
  );
}
