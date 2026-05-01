import React from 'react';

export const About = () => (
  <div className="space-y-2">
    <p className="text-blue-400">{'{'}</p>
    <div className="pl-4">
      <p><span className="text-purple-400">"name"</span>: <span className="text-green-400">"Justus Njagi"</span>,</p>
      <p><span className="text-purple-400">"location"</span>: <span className="text-green-400">"Nairobi, Kenya"</span>,</p>
      <p><span className="text-purple-400">"role"</span>: <span className="text-green-400">"Software Engineer, Cloud Engineer & SysAdmin"</span>,</p>
      <p><span className="text-purple-400">"specialization"</span>: [<span className="text-green-400">"AWS"</span>, <span className="text-green-400">"Linux Kernels"</span>, <span className="text-green-400">"Docker"</span>, <span className="text-green-400">"AI Pipelines"</span>, <span className="text-green-400">"React"</span>, <span className="text-green-400">"Python"</span>, <span className="text-green-400">"A.I"</span>, <span className="text-green-400">"Fullstack Development"</span>, <span className="text-green-400">"Cloud computing"</span>]</p>
      <p><span className="text-purple-400">"bio"</span>: <span className="text-green-400">"Deep systems knowledge meets modern frontend execution. From low-level kernel tuning to scaling MLOps infrastructure."</span></p>
    </div>
    <p className="text-blue-400">{'}'}</p>
  </div>
);

export const Skills = () => {
  const categories = [
    {
      label: 'Languages',
      skills: ['TypeScript', 'JavaScript', 'Python', 'Bash/Shell', 'Go', 'SQL'],
      color: 'bg-sky-500',
    },
    {
      label: 'Frontend',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
      color: 'bg-pink-500',
    },
    {
      label: 'DevOps',
      skills: ['Docker', 'Kubernetes', 'Terraform', 'AWS', 'GitHub Actions'],
      color: 'bg-blue-500',
    },
    {
      label: 'Backend',
      skills: ['Node.js', 'NestJS', 'PostgreSQL', 'Redis', 'Kafka'],
      color: 'bg-green-500',
    },
    {
      label: 'Systems',
      skills: ['Linux', 'Kernel Tuning', 'Networking', 'n8n', 'OpenCore'],
      color: 'bg-yellow-500',
    },
    {
      label: 'AI & ML',
      skills: ['LangChain', 'Ollama', 'Gemini API', 'RAG Pipelines', 'OpenAI'],
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="space-y-4 py-2">
      <p className="text-gray-400"># User Proficiency</p>
      {categories.map((cat) => (
        <div key={cat.label} className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-md">
          <span className="text-purple-400">{cat.label}:</span>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((s) => (
              <span key={s} className="px-2 py-0.5 bg-gray-800 border border-gray-700 rounded text-xs">{s}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const Projects = () => {
  const projects = [
    {
      id: 'mlops-pipeline.exe',
      tech: 'Python, Docker, AWS',
      impact: 'Automated training pipelines for deep learning models.',
      repo: 'https://github.com/casper-justus/mlops-churn-pipeline',
    },
    {
      id: 'rag-chatbot.py',
      tech: 'LangChain, Gemini API, Qdrant',
      impact: 'Context-aware RAG system for private documentation.',
      repo: 'https://github.com/casper-justus/rag-chatbot',
    },
    {
      id: 'api-platform.ts',
      tech: 'TypeScript, PostgreSQL, Prisma, JWT',
      impact: 'Production-grade REST API with auth and Jest tests.',
      repo: 'https://github.com/casper-justus/api-platform',
    },
    {
      id: 'aws-infra.tf',
      tech: 'Terraform, AWS, Docker, Prometheus',
      impact: 'Multi-region disaster recovery infrastructure as code.',
      repo: 'https://github.com/casper-justus/aws-fullstack-infra',
    },
    {
      id: 'crypto-stream.sh',
      tech: 'Python, Kafka, PostgreSQL',
      impact: 'Real-time crypto data streaming pipeline.',
      repo: 'https://github.com/casper-justus/crypto-pipeline',
    },
  ];

  return (
    <div className="py-2">
      <div className="grid grid-cols-1 gap-4 mt-2">
        <table className="w-full text-left border-collapse border border-gray-800">
          <thead>
            <tr className="bg-gray-800/50">
              <th className="p-2 border border-gray-800">Command</th>
              <th className="p-2 border border-gray-800">Stack</th>
              <th className="p-2 border border-gray-800">Impact</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.id} className="hover:bg-white/5 cursor-pointer group">
                <td className="p-2 border border-gray-800">
                  {p.repo ? (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 font-bold hover:text-blue-300 hover:underline"
                    >
                      ./{p.id}
                    </a>
                  ) : (
                    <span className="text-blue-400 font-bold">./{p.id}</span>
                  )}
                </td>
                <td className="p-2 border border-gray-800 text-xs text-gray-400">{p.tech}</td>
                <td className="p-2 border border-gray-800 text-sm">{p.impact}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-gray-500 animate-pulse">Tip: Click any project to view the repo on GitHub.</p>
      </div>
    </div>
  );
};

export const Contact = () => (
  <div className="space-y-4">
    <div className="space-y-1">
      <p>Email: <a href="mailto:njahjustus@gmail.com" className="text-blue-400 hover:underline">njahjustus@gmail.com</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/casper-justus" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Linkedin</a></p>
      <p>GitHub: <a href="https://github.com/casper-justus" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Github</a></p>
    </div>
    <div className="border border-gray-800 p-4 rounded bg-black/20">
      <p className="text-yellow-400 mb-2">Looking Forward to working with you :)</p>
    </div>
  </div>
);
