import { Book, Briefcase, Medal } from "@boxicons/react";

const Stats = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`stats shadow gap-5 ${className}`}>
      <div className="stat place-items-center">
        <div className="stat-title text-primary">
          <Briefcase />
        </div>
        <div className="stat-value">3+</div>
        <div className="stat-desc">Years Experience</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title text-primary">
          <Medal />
        </div>
        <div className="stat-value">20+</div>
        <div className="stat-desc">Projects Completed</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title text-primary">
          <Book />
        </div>
        <div className="stat-value">1000+</div>
        <div className="stat-desc">Study Hours</div>
      </div>
    </div>
  );
};

export default Stats;
