const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Main Profile Payload
app.get('/api/profile', (req, res) => {
  res.json({
    name: "Faizan",
    title: "FULL-STACK & ENGINEER",
    subtitle: "Building scalable backend architectures, automated data pipelines, and responsive web applications with precision.",
    status: "Available for Engineering Roles",
    metrics: [
      { value: "3+", label: "Core Tech" },
      { value: "5+", label: "Projects" },
      { value: "Fresher", label: "Years Exp" }
    ],
    skills: {
      Languages: ["Python", "JavaScript", "TypeScript", "SQL"],
      Backend: ["Node.js", "Express", "FastAPI", "MongoDB", "PostgreSQL"],
      Frontend: ["React", "Tailwind CSS", "HTML5/CSS3"],
      Tools: ["Git", "Docker", "AWS", "Linux"]
    },
    projects: [
      {
        id: 1,
        title: "Ticket Integration Pipeline",
        description: "Built a type-safe Express.js backend system using TypeScript generics and partial update handlers for issue management.",
        tech: ["Python", "TypeScript", "PostgreSQL", "MongoDB", "Linux"],
        liveUrl: "#",
        githubUrl: "https://github.com/faizan"
      },
      {
        id: 2,
        title: "Data Automation Tool",
        description: "Developed an asynchronous Python automation tool that ingests server logs and generates real-time system health reports.",
        tech: ["TypeScript", "MERN", "Git", "Docker", "AWS", "Linux"],
        liveUrl: "#",
        githubUrl: "https://github.com/faizan"
      }
    ]
  });
});

// Contact Route
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`📩 Message Received from ${name} (${email}): ${message}`);
  res.json({ success: true, message: "Message received! Faizan will get back to you shortly." });
});

app.listen(PORT, () => {
  console.log(`🚀 Express backend running on http://localhost:${PORT}`);
});