import { FaAngleDoubleRight } from "react-icons/fa";

const Expierence = ({ company, dates, duties, title, id }) => {
  return (
    <article className="jobs-info">
      <div className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {duties.map((duty, index) => (
          <div key={index} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        ))}
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </article>
  );
};

export default Expierence;
