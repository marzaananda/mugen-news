export default function ArticleCard({ article }) {
  return (
    <a href={`/article/${article.slug}`} className="block rounded-lg shadow-lg overflow-hidden transition hover:shadow-xl">
      <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-bold text-lg mb-2">{article.title}</h2>
        <p className="text-sm text-gray-600">{article.summary}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {article.tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 bg-white rounded-full text-xs">{tag}</span>
          ))}
        </div>
      </div>
    </a>
  );
}
