import React, { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Expierence from "./components/Expierence";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, steJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      steJobs(newJobs);
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("Oops, something went wrong... Try again!");
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [loading]);

  if (loading) {
    return <Loading />;
  }
  const job = jobs[value];
  return (
    <div className="section">
      <div className="title">
        <h2>Expierence</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, index) => (
            <button
              key={index}
              className={`job-btn ${index === value && "active-btn"}`}
              onClick={() => setValue(index)}
            >
              {job.company}
            </button>
          ))}
        </div>
        <Expierence {...job} />
      </div>
    </div>
  );
};

export default App;
