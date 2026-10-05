import Link from "next/link";
import React from "react";

const SkillCard = ({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="block hover:aura aura-rainbow focus-visible:outline-none"
    >
      <div className="group card bg-base-100 w-96 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
        <div className="card-body">
          {icon}
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions h-8 justify-end">
            <span className="text-primary text-sm font-medium translate-y-2 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              Learn more
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SkillCard;
