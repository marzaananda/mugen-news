import { useParams } from "react-router-dom";
import articles from "../data/articles.json";
import Tag from "../components/Tag.jsx";

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <div className="p-6">Artikel tidak ditemukan</div>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-8 pt-[120px]">
      {/* Hero / Header Gambar Artikel */}
      <div className="w-full mb-8">
        <img
          src={article.image || "/default-header.jpg"}
          alt={article.title}
          onError={(e) => (e.target.src = "/default-header.jpg")}
          className="w-full h-[400px] object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Judul */}
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

      {/* Tag */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {article.tags.map((tag, i) => (
          <Tag key={i} label={tag} />
        ))}
      </div>

      {/* Konten artikel */}
      <div className="prose max-w-none text-gray-800">
        {article.content.map((block, i) => {
          switch (block.type) {
            case "p":
              return (
                <p key={i} className="mb-4 leading-relaxed">
                  {block.text}
                </p>
              );

            case "img":
              return (
                <div key={i} className="my-6 text-center">
                  <img
                    src={block.src}
                    alt={block.alt}
                    className={`rounded-lg shadow-sm mx-auto ${block.class || ""}`}
                    onError={(e) => (e.target.src = "/default-header.jpg")}
                  />
                  {block.caption && (
                    <p className="text-sm text-gray-500 mt-2 italic">
                      {block.caption}
                    </p>
                  )}
                </div>
              );

            case "h2":
              return (
                <h2 key={i} className="text-2xl font-semibold mt-8 mb-4">
                  {block.text}
                </h2>
              );

            case "quote":
              return (
                <blockquote
                  key={i}
                  className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-4"
                >
                  {block.text}
                </blockquote>
              );

            case "source":
              return (
                <footer
                  key={i}
                  className="mt-10 border-t pt-4 text-sm text-gray-500"
                >
                  <p className="mb-2">{block.text}</p>
                  <ul className="space-y-1">
                    {block.links.map((link, idx) => (
                      <li key={idx}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </footer>
              );

            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}
