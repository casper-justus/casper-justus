import React from 'react';

export const About = () => (
  <div className="space-y-2">
    <p className="text-blue-400">{'{'}</p>
    <div className="pl-4">
      <p><span className="text-purple-400">"name"</span>: <span className="text-green-400">"Justus Njagi"</span>,</p>
      <p><span className="text-purple-400">"location"</span>: <span className="text-green-400">"Nairobi, Kenya"</span>,</p>
      <p><span className="text-purple-400">"role"</span>: <span className="text-green-400">"Software Engineer,Cloud Engineer & SysAdmin"</span>,</p>
      <p><span className="text-purple-400">"specialization"</span>: [<span className="text-green-400">"AWS"</span>, <span className="text-green-400">"Linux Kernels"</span>, <span className="text-green-400">"Docker"</span>, <span className="text-green-400">"AI Pipelines"</span>,<span className="text-green-400">"React"</span>, <span className="text-green-400">"Python"</span>, <span className="text-green-400">"A.I"</span>, <span className="text-green-400">"Fullstack Development"</span>, <span className="text-green-400">"Cloud computing"</span>] </p>
      <p><span className="text-purple-400">"bio"</span>: <span className="text-green-400">"Deep systems knowledge meets modern frontend execution. From low-level kernel tuning to scaling MLOps infrastructure."</span></p>
    </div>
    <p className="text-blue-400">{'}'}</p>
  </div>
);

export const Skills = () => {
  const categories = [
    { label: 'DevOps', skills: ['Terraform', 'Kubernetes', 'Docker', 'AWS'], color: 'bg-blue-500' },
    { label: 'Backend', skills: ['Python', 'Go', 'Node.js', 'PostgreSQL'], color: 'bg-green-500' },
    { label: 'Systems', skills: ['Linux Bash', 'Kernel Tuning', 'Networking'], color: 'bg-yellow-500' },
  ];

  return (
    <div className="space-y-4 py-2">
      <p className="text-gray-400"># User Proficiency </p>
      {categories.map((cat) => (
        <div key={cat.label} className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-md">
          <span className="text-purple-400">{cat.label}:</span>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map(s => (
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
    { id: 'mlops-pipeline.exe', tech: 'Python, Docker, AWS', impact: 'Automated training pipelines for deep learning models.' },
    { id: 'crypto-stream.sh', tech: 'Go, Kafka, Redis', impact: 'Real-time websocket stream for global crypto exchanges.' },
    { id: 'aws-infra.tf', tech: 'Terraform, AWS, GitHub Actions', impact: 'Multi-region disaster recovery infrastructure as code.' },
    { id: 'api-platform.ts', tech: 'Next.js, NestJS, K8s', impact: 'Unified developer portal for internal microservices.' },
    { id: 'rag-chatbot.py', tech: 'LangChain, OpenAI, Pinecone', impact: 'Context-aware RAG system for private documentation.' },
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
                <td className="p-2 border border-gray-800 text-blue-400 font-bold">./{p.id}</td>
                <td className="p-2 border border-gray-800 text-xs text-gray-400">{p.tech}</td>
                <td className="p-2 border border-gray-800 text-sm">{p.impact}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-gray-500 animate-pulse">Tip: Try typing the command name to see details (e.g., ./aws-infra.tf)</p>
      </div>
    </div>
  );
};

export const Contact = () => (
  <div className="space-y-4">
    <div className="space-y-1">
      <p>Email: <a href="mailto:njahjustus@gmail.com" className="text-blue-400 hover:underline">njahjustus@gmail.com</a></p>
      <p>LinkedIn: <a href="#" className="text-blue-400 hover:underline">linkedin.com/in/casper-justus</a></p>
      <p>GitHub: <a href="#" className="text-blue-400 hover:underline">github.com/casper-justus</a></p>
    </div>
    <div className="border border-gray-800 p-4 rounded bg-black/20">
      <p className="text-yellow-400 mb-2">Looking Forward to working with you :) </p>
    </div>
  </div>
);
