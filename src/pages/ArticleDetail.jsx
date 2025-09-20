import { useParams } from "react-router-dom";
import articles from "../data/articles.json";
import Tag from "../components/Tag.jsx"; 
export default function ArticleDetail() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) return <div className="p-6">Artikel tidak ditemukan</div>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-8 pt-[120px]">
      <img 
        src={article.image} 
        alt={article.title} 
        className="w-full h-64 object-cover rounded-xl mb-6" 
      />
      
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

      {/* gunakan komponen Tag di sini */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {article.tags.map((tag, i) => (
          <Tag key={i} label={tag} />
        ))}
      </div>

      <div 
        className="prose whitespace-pre-line" 
        dangerouslySetInnerHTML={{ __html: article.content }} 
      />
    </div>
  );
}
