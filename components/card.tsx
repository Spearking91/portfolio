import Link from "next/link";
import Reveal from "./reveal";
import { getWebsitePreviewUrl } from "@/lib/preview";

interface props {
    id: number;
    slug: string;
    title: string;
    year: string;
    summary: string;
    description: string;
    stack: string[];
    liveUrl?: string;
}

const Card = ({ id, slug, title,year, summary,liveUrl, stack}: props) => {
    const previewUrl = liveUrl
              ? getWebsitePreviewUrl(liveUrl)
              : null;

  return (
    <Reveal key={slug} delay={id * 80}>
      <Link
        href={`/projects/${slug}`}
        className="card h-full overflow-hidden bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        {previewUrl && (
          <figure className="aspect-[16/10] w-full overflow-hidden bg-base-300">
            <img
              src={previewUrl}
              alt={`${title} live website screenshot`}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
            />
          </figure>
        )}

        <div className="card-body">
          <p className="text-xs font-semibold text-primary">{year}</p>
          <h2 className="card-title">{title}</h2>
          <p>{summary}</p>
          <div className="card-actions mt-2">
            {stack.map((tag) => (
              <div key={tag} className="badge badge-outline">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </Link>
    </Reveal>
  );
};

export default Card;
