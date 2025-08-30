import { useState } from "react";
import articles from "../data/articles.json";
import ArticleCard from "../components/ArticleCard.jsx";
import LoadMoreButton from "../components/LoadMoreButton.jsx";

export default function Home() {
  const [visibleArticles, setVisibleArticles] = useState(6);

  const handleLoadMore = () => {
    setVisibleArticles((prev) => prev + 6); // Menambah artikel yang tampil
  };

  // Menampilkan artikel utama di bagian atas
  const headlineArticle = articles[0]; // Anggap artikel pertama adalah headline

  return (
    <div className="px-6 py-8 pt-[120px]">
      {/* Layout Headline dan Sidebar Artikel Terbaru */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Kolom Utama - Headline */}
        <div className="lg:col-span-2">
          <div className="mb-12">
            <img
              src={headlineArticle.image}
              alt={headlineArticle.title}
              className="w-full h-[450px] object-cover mb-4"
            />
            <h1 className="text-3xl font-bold mb-4">{headlineArticle.title}</h1>
            <p className="text-lg text-gray-600">{headlineArticle.summary}</p>
          </div>
        </div>

        {/* Kolom Kanan - Artikel Terbaru */}
        <div className="space-y-6">
          <h2 className="font-bold text-lg">ARTIKEL TERBARU</h2>
          {articles.slice(1, 5).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>

      {/* Layout Artikel Lainnya - Grid 4 Kolom */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {articles.slice(5, visibleArticles).map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {/* Load More Button */}
      {visibleArticles < articles.length && (
        <LoadMoreButton onClick={handleLoadMore} />
      )}
    </div>
  );
}
