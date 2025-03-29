const job = {
  "jobs": [
    ...Array.from({ length: 25 }, (_, i) => ({
      "_id": `6605081ad7a1b3a4c5f2a2${i + 1}`,
      "refnum": `JOB123${50 + i}`,
      "jobtype": `6605081bd7a1b3a4c5f2a3${i % 5 + 1}06`,
      "countryid": `6605081cd7a1b3a4c5f2a4${i % 5 + 1}06`,
      "salary_range": `${40000 + i * 1000}-${70000 + i * 1000}`,
      "small_description": `Job ${i + 1} description in an innovative company`,
      "status": "Active",
      "createddate": new Date(2025, (i % 12), 10).toISOString(),
      "createdat": new Date(2025, (i % 12), 10).toISOString(),
      "estimated_vacancies": Math.floor(Math.random() * 5) + 1,
      "qualification_ids": [`6605081dd7a1b3a4c5f2a5${i % 5 + 1}06`],
      "long_description": `Detailed description for Job ${i + 1}`,
      "industry_type": `6605081fd7a1b3a4c5f2a7${i % 5 + 1}06`
    }))
  ],
  "jobtypes": [
    {
      "_id": "6605081bd7a1b3a4c5f2a3106",
      "categoryid": "6605081gd7a1b3a4c5f2a8103",
      "categoryname": "AI & Machine Learning",
      "title": "AI Research Scientist",
      "description": "Develop AI models and deep learning algorithms",
      "salary_range": "75000-100000",
      "status": "Active"
    },
    {
      "_id": "6605081bd7a1b3a4c5f2a3206",
      "categoryid": "6605081gd7a1b3a4c5f2a8203",
      "categoryname": "Design & Creativity",
      "title": "Graphic Designer",
      "description": "Creates visual concepts, UI/UX, and branding materials",
      "salary_range": "45000-60000",
      "status": "Active"
    },
    {
      "_id": "6605081bd7a1b3a4c5f2a3306",
      "categoryid": "6605081gd7a1b3a4c5f2a8303",
      "categoryname": "Software Development",
      "title": "Software Engineer",
      "description": "Builds and maintains software applications",
      "salary_range": "70000-90000",
      "status": "Active"
    },
    {
      "_id": "6605081bd7a1b3a4c5f2a3406",
      "categoryid": "6605081gd7a1b3a4c5f2a8403",
      "categoryname": "Marketing & Sales",
      "title": "Digital Marketing Specialist",
      "description": "Plans and executes digital marketing campaigns",
      "salary_range": "50000-70000",
      "status": "Active"
    },
    {
      "_id": "6605081bd7a1b3a4c5f2a3506",
      "categoryid": "6605081gd7a1b3a4c5f2a8503",
      "categoryname": "Finance & Accounting",
      "title": "Financial Analyst",
      "description": "Analyzes financial data and trends",
      "salary_range": "60000-85000",
      "status": "Active"
    }
  ],
  "categories": [
    {
      "_id": "6605081gd7a1b3a4c5f2a8103",
      "categoryname": "AI & Machine Learning",
      "status": "Active"
    },
    {
      "_id": "6605081gd7a1b3a4c5f2a8203",
      "categoryname": "Design & Creativity",
      "status": "Active"
    },
    {
      "_id": "6605081gd7a1b3a4c5f2a8303",
      "categoryname": "Software Development",
      "status": "Active"
    },
    {
      "_id": "6605081gd7a1b3a4c5f2a8403",
      "categoryname": "Marketing & Sales",
      "status": "Active"
    },
    {
      "_id": "6605081gd7a1b3a4c5f2a8503",
      "categoryname": "Finance & Accounting",
      "status": "Active"
    }
  ],
  "industrytypes": [
    {
      "_id": "6605081fd7a1b3a4c5f2a7106",
      "name": "Artificial Intelligence",
      "description": "AI research, machine learning, and automation",
      "status": "Active"
    },
    {
      "_id": "6605081fd7a1b3a4c5f2a7206",
      "name": "Design & Media",
      "description": "Graphic design, UI/UX, and digital marketing",
      "status": "Active"
    },
    {
      "_id": "6605081fd7a1b3a4c5f2a7306",
      "name": "Software & IT",
      "description": "Software engineering, development, and IT services",
      "status": "Active"
    },
    {
      "_id": "6605081fd7a1b3a4c5f2a7406",
      "name": "Marketing & Advertising",
      "description": "Digital marketing, SEO, and advertising strategies",
      "status": "Active"
    },
    {
      "_id": "6605081fd7a1b3a4c5f2a7506",
      "name": "Finance & Banking",
      "description": "Investment analysis, banking, and financial consulting",
      "status": "Active"
    }
  ]
};

export default job;
