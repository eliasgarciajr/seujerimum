import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Instagram } from "lucide-react";

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
}

interface InstagramFeedProps {
  username: string;
  instagramUrl: string;
  limit?: number;
  customImages?: string[];
}

export function InstagramFeed({ username, instagramUrl, limit = 4, customImages }: InstagramFeedProps) {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Para integração real com Instagram API:
    // 1. Crie uma conta no Meta for Developers (developers.facebook.com)
    // 2. Configure o Instagram Graph API
    // 3. Obtenha seu Access Token
    // 4. Crie um endpoint backend para fazer as chamadas (para proteger seu token)
    // 5. Substitua a função mockFetchInstagramPosts pela chamada real

    // Exemplo de chamada real (deve ser feita em um backend):
    // const response = await fetch(
    //   `https://graph.instagram.com/me/media?fields=id,media_url,permalink,caption&access_token=${YOUR_ACCESS_TOKEN}`
    // );

    mockFetchInstagramPosts(username, limit, customImages);
  }, [username, limit, customImages]);

  // Função mock - Substitua pela chamada real à API do Instagram
  const mockFetchInstagramPosts = async (username: string, limit: number, customImages?: string[]) => {
    setLoading(true);

    // Simulando delay de API
    await new Promise(resolve => setTimeout(resolve, 500));

    // Se customImages for fornecido, use-as
    if (customImages && customImages.length > 0) {
      const customPosts: InstagramPost[] = customImages.map((image, index) => ({
        id: `${index + 1}`,
        media_url: image,
        permalink: instagramUrl,
        caption: `Post do Instagram ${index + 1}`
      }));
      setPosts(customPosts.slice(0, limit));
      setLoading(false);
      return;
    }

    // Dados mock - em produção, viriam da API do Instagram
    const mockPosts: InstagramPost[] = [
      {
        id: "1",
        media_url: "https://images.unsplash.com/photo-1760421124157-3ee024d3bf00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwYXVkaWVuY2UlMjBoYW5kcyUyMHVwJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzc0ODgyMzkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        permalink: instagramUrl,
        caption: "Post do Instagram 1"
      },
      {
        id: "2",
        media_url: "https://images.unsplash.com/photo-1583376102242-5a6aad625ce5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMGVsZWN0cm9uaWMlMjBtdXNpYyUyMG5pZ2h0Y2x1YnxlbnwxfHx8fDE3NzQ4NDQ3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
        permalink: instagramUrl,
        caption: "Post do Instagram 2"
      },
      {
        id: "3",
        media_url: "https://images.unsplash.com/photo-1761114905078-163aa92141c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHZlbnVlJTIwc3BhY2UlMjBwYXJ0eSUyMGxpZ2h0c3xlbnwxfHx8fDE3NzQ4ODIzOTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        permalink: instagramUrl,
        caption: "Post do Instagram 3"
      },
      {
        id: "4",
        media_url: "https://images.unsplash.com/photo-1767969457898-51d5e9cf81d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwbXVzaWMlMjBiYW5kJTIwcGVyZm9ybWFuY2UlMjBzdGFnZXxlbnwxfHx8fDE3NzQ4ODIzOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        permalink: instagramUrl,
        caption: "Post do Instagram 4"
      }
    ];

    setPosts(mockPosts.slice(0, limit));
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: limit }).map((_, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg bg-gray-800 animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {posts.map((post, index) => (
        <motion.a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={post.media_url}
            alt={post.caption || `Instagram post ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#ff6b35]/0 group-hover:bg-[#ff6b35]/30 transition-all duration-300 flex items-center justify-center">
            <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={40} />
          </div>
        </motion.a>
      ))}
    </div>
  );
}
