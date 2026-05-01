"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Maximize2, Minimize2, X, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { About, Skills, Projects, Contact } from './CommandOutputs';

type HistoryItem = {
  command: string;
  output: React.ReactNode;
  id: number;
  dir: string;
};

export default function TerminalUI() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [input, setInput] = useState('');
  const [isBooting, setIsBooting] = useState(true);
  const [currentDir, setCurrentDir] = useState('~');
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Record<string, () => React.ReactNode> = {
    help: () => (
      <div className="grid grid-cols-2 gap-2 text-gray-400">
        <div>about</div><div>- user bio</div>
        <div>projects</div><div>- view work</div>
        <div>skills</div><div>- tech stack</div>
        <div>contact</div><div>- reach out</div>
        <div>clear</div><div>- clear screen</div>
      </div>
    ),
    about: () => <About />,
    skills: () => <Skills />,
    projects: () => <Projects />,
    contact: () => <Contact />,
    clear: () => {
      setHistory([]);
      return null;
    },
    ls: () => {
      if (currentDir === '~/projects') {
        return (
          <div className="flex flex-wrap gap-4 text-blue-400 font-bold">
            <span>mlops-pipeline.exe</span>
            <span>crypto-stream.sh</span>
            <span>aws-infra.tf</span>
            <span>api-platform.ts</span>
            <span>rag-chatbot.py</span>
          </div>
        );
      }
      return (
        <div className="flex gap-4 text-blue-400 font-bold">
          <span>about.md</span>
          <span>projects/</span>
          <span>skills.sh</span>
          <span>contact.log</span>
        </div>
      );
    },
  };

  const handleCd = (path: string) => {
    const target = path.trim();
    if (target === 'projects' || target === './projects') {
      setCurrentDir('~/projects');
      return null;
    } else if (target === '..' || target === '~' || target === '/') {
      setCurrentDir('~');
      return null;
    } else if (target === '.') {
      return null;
    } else {
      return <div className="text-red-400">cd: no such file or directory: {target}</div>;
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isBooting]);

  useEffect(() => {
    const timer = setTimeout(() => setIsBooting(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    let output: React.ReactNode;
    if (cmd.startsWith('cd ')) {
      output = handleCd(cmd.substring(3));
    } else if (cmd === 'cd') {
      setCurrentDir('~');
      output = null;
    } else if (commands[cmd]) {
      output = commands[cmd]();
    } else if (cmd === '') {
      output = null;
    } else if (cmd.startsWith('./') || cmd.includes('.tf') || cmd.includes('.sh')) {
        output = <div className="text-red-400">Error: Project binary found but execution requires sudo. (Just kidding, coming soon!)</div>;
    } else {
      output = <div className="text-red-400">Command not found: {cmd}. Type 'help' for assistance.</div>;
    }

    if (output !== undefined) {
      setHistory(prev => [...prev, { 
        command: cmd, 
        output, 
        id: Date.now(),
        dir: currentDir 
      }]);
    }
    setInput('');
  };

  const focusInput = () => inputRef.current?.focus();

  const hints = ['about', 'projects', 'skills', 'contact'];

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center p-4 md:p-8 font-mono overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl h-[80vh] bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col relative"
        onClick={focusInput}
      >
        {/* Terminal Header */}
        <div className="bg-white/5 border-b border-white/10 p-3 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
          </div>
          <div className="flex items-center gap-2 text-white/40 text-xs">
            <Terminal size={14} />
            <span>guest@casper-justus.dev — -bash</span>
          </div>
          <div className="w-12" /> {/* Spacer */}
        </div>

        {/* Terminal Content */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10"
        >
          {isBooting ? (
            <div className="space-y-1">
              <p className="text-white/60">casper@nairobi:~$ ssh guest@casper-justus.dev</p>
              <p className="text-white/40">Connecting to casper-justus.dev...</p>
              <p className="text-white/40">Authenticating...</p>
              <p className="text-green-400">Welcome to the Homelab. Type 'help' to see available commands.</p>
            </div>
          ) : (
            <>
              <div className="space-y-1">
                <p className="text-green-400">Welcome to the Homelab. Type 'help' to see available commands.</p>
              </div>
              
              {history.map((item) => (
                <div key={item.id} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">guest@casper-justus</span>
                    <span className="text-white/40">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white/40">$</span>
                    <span className="text-white">{item.command}</span>
                  </div>
                  {item.output && (
                    <div className="pl-2">
                      {item.output}
                    </div>
                  )}
                </div>
              ))}

              {/* Active Command Line */}
              <form onSubmit={handleCommand} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">guest@casper-justus</span>
                  <span className="text-white/40">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white/40">$</span>
                  <input
                    ref={inputRef}
                    autoFocus
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-white caret-white"
                    spellCheck={false}
                    autoComplete="off"
                  />
                </div>
              </form>
            </>
          )}
        </div>

        {/* Footer Hints */}
        {!isBooting && (
          <div className="bg-white/5 border-t border-white/10 p-4">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs text-white/30 mr-2 uppercase tracking-widest">Quick Commands:</span>
              {hints.map((hint) => (
                <button
                  key={hint}
                  onClick={() => {
                    setInput(hint);
                    // Trigger enter simulation
                    setTimeout(() => {
                        const event = new Event('submit', { bubbles: true, cancelable: true });
                        document.querySelector('form')?.dispatchEvent(event);
                    }, 10);
                  }}
                  className="px-3 py-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-white/60 transition-all active:scale-95"
                >
                  {hint}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Status Bar */}
        <div className="bg-blue-600 text-[10px] text-white px-3 py-1 flex justify-between items-center font-bold">
          <div className="flex gap-4">
            <span>API: ONLINE</span>
            <span>PING: 12ms</span>
          </div>
          <div className="flex gap-4">
            <span>MEM: 1.2GB/16GB</span>
            <span>CPU: 4%</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
