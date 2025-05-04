
import React from "react";

export const jobPositions = [
  {
    title: "Software Engineer",
    company: "Tech Innovators Inc",
    requiredSkills: ["Java", "Python", "SQL", "Git"],
    description: "Full-cycle software development"
  },
  {
    title: "Frontend Developer",
    company: "Web Solutions Ltd",
    requiredSkills: ["HTML", "CSS", "JavaScript", "React", "Git"],
    description: "Creating responsive web applications"
  },
  {
    title: "Backend Developer",
    company: "Server Logic Corp",
    requiredSkills: ["Python", "Java", "SQL", "NoSQL", "PHP"],
    description: "Building robust server applications"
  },
  {
    title: "QA Engineer",
    company: "Quality First Ltd",
    requiredSkills: ["Python", "SQL", "Git", "Testing"],
    description: "Ensuring software quality"
  },
  {
    title: "Full Stack Developer",
    company: "Tech Solutions Inc",
    requiredSkills: ["Python", "Java", "HTML", "CSS", "SQL"],
    description: "End-to-end application development"
  },
  {
    title: "Data Scientist",
    company: "Analytics Corp",
    requiredSkills: ["Python", "SQL", "NumPy", "Pandas"],
    description: "Data analysis and modeling"
  },
  {
    title: "Cloud Developer",
    company: "Cloud Tech Ltd",
    requiredSkills: ["Azure", "Python", "SQL", "Git"],
    description: "Cloud infrastructure development"
  }
];

export const calculateMatchPercentage = (candidateSkills, requiredSkills) => {
  const matchedSkills = requiredSkills.filter(skill => 
    candidateSkills.includes(skill)
  );
  return Math.round((matchedSkills.length / requiredSkills.length) * 100);
};

export const getMatchedJobs = (extractedSkills) => {
  return jobPositions
    .map(job => ({
      ...job,
      match: calculateMatchPercentage(extractedSkills, job.requiredSkills)
    }))
    .sort((a, b) => b.match - a.match);
};
