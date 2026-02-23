import { useParams } from "react-router-dom";
import articles from "../data/articles.json";
import Tag from "../components/Tag.jsx";
import { Helmet } from "react-helmet";

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <div className="p-6">Artikel tidak ditemukan</div>;

  // 👉 variabel harus di sini (bukan di dalam return)
  const siteName = "Mugen News";
  const baseUrl = "https://mugen-news.vercel.app/";
  const url = `${baseUrl}/${article.slug}`;

  return (
    <>
      <Helmet>
        <title>{article.title} | {siteName}</title>

        <meta name="description" content={article.summary} />
        <meta name="keywords" content={article.tags.join(", ")} />

        <link rel="canonical" href={url} />

        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.summary} />
        <meta property="og:image" content={article.image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={siteName} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.summary} />
        <meta name="twitter:image" content={article.image} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: article.title,
            image: [article.image],
            datePublished: new Date().toISOString(),
            dateModified: new Date().toISOString(),
            author: {
              "@type": "Person",
              name: "Admin"
            },
            publisher: {
              "@type": "Organization",
              name: siteName,
              logo: {
                "@type": "ImageObject",
                url: `${baseUrl}/logo.png`
              }
            }
          })}
        </script>
      </Helmet>

      <div className="max-w-3xl mx-auto px-6 py-8 pt-[120px]">
        {/* Hero */}
        <div className="w-full mb-8">
          <img
            src={article.image || "/default-header.jpg"}
            alt={article.title}
            onError={(e) => (e.target.src = "/default-header.jpg")}
            className="w-full h-[400px] object-cover rounded-lg shadow-md"
          />
        </div>

        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

        <div className="flex gap-2 mb-6 flex-wrap">
          {article.tags.map((tag, i) => (
            <Tag key={i} label={tag} />
          ))}
        </div>

        <div className="prose max-w-none text-gray-800">
          {article.content.map((block, i) => {
            switch (block.type) {
              case "p":
                return <p key={i}>{block.text}</p>;

              case "img":
                return <img key={i} src={block.src} alt={block.alt} />;

              case "h2":
                return <h2 key={i}>{block.text}</h2>;

              case "quote":
                return <blockquote key={i}>{block.text}</blockquote>;

              case "source":
                return (
                  <footer key={i}>
                    <p>{block.text}</p>
                    <ul>
                      {block.links.map((link, idx) => (
                        <li key={idx}>
                          <a href={link.href} target="_blank" rel="noopener noreferrer">
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
    </>
  );
}