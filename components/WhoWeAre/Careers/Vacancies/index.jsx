// components/Hiring.jsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Vacancies() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // Simulated API call (replace later)
        const res = await new Promise((resolve) =>
          setTimeout(() => {
            resolve([
              {
                id: 1,
                title: "Senior Community Fundraising Manager",
                desc: "As Senior Community Fundraising Manager you will lead a team to grow income raised through community supporters, including individuals, local groups, schools and corporate organisations. and manage our volunteering programme.",
                location: "Onsite - Lagos, Nigeria",
                type: "Full-time, Permanent",
                link: "/career/senior-community-fundraising-manager",
              },
            ]);
          }, 1000)
        );

        setJobs(Array.isArray(res) ? res : []);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError(true);
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  /* -------------------- STATES -------------------- */

  if (loading) {
    return (
      
      <div className=" text-primary p-10 space-y-6mt-10 grid gap-6 lg:h-[100vh]">
        <div>
          
          <h2
            className="text-2xl lg:text-4xl font-bold"
          >
            View vacancies
          </h2>

        </div>
        <p className="text-left text-primary text-g opacity-80">
          Loading available opportunities…
        </p>
      </div>

    );
  }

  if (error) {
    return (
      
      <div className=" text-primary p-10 space-y-6mt-10 grid gap-6 lg:h-[100vh]">
        <div>
          
          <h2
            className="text-2xl lg:text-4xl font-bold"
          >
            View vacancies
          </h2>

        </div>

        <div className="text-center text-primary space-y-3">
          <p className="text-lg font-medium">
          Unable to load vacancies right now
          </p>
          <p className="text-sm text-primary/70">
            Please try again later or reach out directly.
          </p>
        </div>
      </div>
    );
  }

  /* -------------------- FALLBACK (NO JOBS) -------------------- */

  if (jobs.length === 0) {
    return (
      <div className=" text-primary p-10 space-y-6 lg:h-[100vh]">

        <h2
          className="text-2xl lg:text-4xl font-bold"
        >
          View vacancies
        </h2>
        {/* <Image
          src="/images/hiring/empty.svg"
          alt="No vacancies"
          width={280}
          height={200}
          className="mx-auto"
        /> */}

        <h3 className="text-xl font-semibold">
          No open vacancies at the moment
        </h3>

        <p className="text-sm text-primary/80">
          Gracespring Health Foundation is not actively hiring right now,
          but we welcome expressions of interest.
        </p>

        <a
          href="/contact"
          className="inline-block mt-4 px-6 py-3 rounded-xl bg-primary text-[#1A4ED1] font-medium hover:bg-blue-50 transition"
        >
          Submit Your Interest →
        </a>
      </div>
    );
  }

  /* -------------------- JOB LIST -------------------- */

  return (
    <div className=" text-primary p-2 pb-[3rem] lg:p-10 space-y-6mt-10 lg:h-[100vh] flex flex-col gap-10">

      <div
        className="mt-10"
      >
        
        <h2
          className="text-2xl lg:text-4xl font-bold"
        >
          View vacancies
        </h2>

      </div>
      {jobs.map((job, i) => (
        <motion.div
          key={job.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: i * 0.1 }}
          viewport={{ once: true }}
          className=" p-6 rounded-2xl shadow-md hover:shadow-xl transition text-primary border border-primary/20 grid lg:flex justify-between lg:w-[90%] lg:py-[4rem] mt-3 lg:mt-10 gap-3"
        >
          <div
            className=" lg:w-[70%] space-y-6 "
          >

            <div>

              <h3 className="text-xl lg:text-[1.7rem] font-semibold ">
                {job.title}
              </h3>

            </div>

            <div
              className="lg:w-[80%]"
            >
              
              <p className="text-md font-semibold leading-6">
                {job.desc}
              </p>

            </div>


           



          </div>
          
          <div
            className=" w-fit"
          >
            <div className="text-left">
              <Link
                href={job.link}
                className="inline-block bg-primary hover:bg-transparent px-5 lg:px-7 py-4 lg:py-3 rounded-full text-md text-white hover:text-primary border-2 hover:border-primary font-extrabold transition-colors duration-300"
              >

                Find out more
                <span className="mx-1" aria-hidden>→</span>
                
              </Link>
            </div>


          </div>

        </motion.div>
      ))}

    </div>
  );
}
