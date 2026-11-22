import { items, TimelineItem } from "@/app/data/portfolio";




const CheckIcon = ({ filled = true }: { filled?: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={`h-5 w-5 ${filled ? "text-primary" : ""}`}
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
);

const Card = ({ title, date, org, description, tags, newTag }: TimelineItem) => (
  <div className="card bg-base-100">
    <div className="card-body">
      <p className="text-xs font-semibold text-primary mb-2">{date}</p>
      <h2 className="card-title">
        {title}
        {newTag && <div className="badge badge-secondary">NEW</div>}
      </h2>
      {org && <p className="text-sm opacity-70">{org}</p>}
      <p>{description}</p>
      <div className="card-actions justify-start">
        {tags.map((tag) => (
          <div key={tag} className="badge badge-outline">
            {tag}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Timeline = () => {
  return (
    <ul className="timeline timeline-vertical">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const onStart = index % 2 === 0;

        return (
          <li key={`${item.title}-${item.date}`}>
            {index > 0 && <hr className="bg-primary" />}
            <div
              className={`${onStart ? "timeline-start" : "timeline-end"} timeline-box aura aura-rainbow p-1`}
            >
              <Card {...item} />
            </div>
            <div className="timeline-middle">
              <CheckIcon filled />
            </div>
            {!isLast && <hr className="bg-primary" />}
          </li>
        );
      })}
    </ul>
  );
};

export default Timeline;
