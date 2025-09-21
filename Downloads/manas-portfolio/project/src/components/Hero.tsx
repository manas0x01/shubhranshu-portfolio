import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { smoothScrollTo } from '../utils/smoothScroll';
import profileImage from '../assets/images/manas.jpg';

const roles = [personalInfo.role, "Machine Learning Engineer", "Deep Learning Learner", "Problem Solver"];

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const handleResumeDownload = async () => {
    try {
      // First, try to fetch the file to check if it exists
      const response = await fetch(personalInfo.resumeUrl);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'manas-saxena-resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } else {
        console.error('Resume file not found');
        alert('Resume file not found. Please contact for a copy.');
      }
    } catch (error) {
      console.error('Error downloading resume:', error);
      window.open(personalInfo.resumeUrl, '_blank');
    }
  };

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : currentRole.slice(0, prev.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
      {/* Dynamic Tech Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/30" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute inset-0">
        {[
          'import numpy as np',
          'model.fit(X_train, y_train)',
          'from sklearn import datasets',
          'def neural_network():',
          'tensorflow.keras.layers',
          'accuracy: 0.97',
          'loss: 0.03',
          'epochs: 100',
          '> python train.py',
          'git commit -m "feat"',
          'npm run build',
          'docker run -d app'
        ].map((code, i) => (
          <motion.div
            key={i}
            className="absolute text-xs md:text-sm font-mono text-green-400/30 dark:text-green-400/20 whitespace-nowrap"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight
              ],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 15 + (i * 2),
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5
            }}
          >
            {code}
          </motion.div>
        ))}
      </div>

      {/* ML/AI Floating Icons */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`ml-${i}`}
            className="absolute text-blue-400/20 dark:text-blue-400/10"
            animate={{
              x: [0, 200, 0],
              y: [0, -150, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${12 + Math.random() * 8}px`
            }}
          >
            {['⚡', '🤖', '🧠', '💻', '⚙️', '📊', '🔬', '🎯'][i % 8]}
          </motion.div>
        ))}
      </div>

      {/* Binary Rain Effect */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`binary-${i}`}
            className="absolute font-mono text-xs text-green-400/20 dark:text-green-400/10"
            animate={{
              y: [-100, window.innerHeight + 100]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
            style={{
              left: `${Math.random() * 100}%`,
            }}
          >
            {Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
          </motion.div>
        ))}
      </div>

      {/* Terminal Windows */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`terminal-${i}`}
            className="absolute bg-gray-800/10 backdrop-blur-sm rounded-lg border border-green-400/20 p-3 w-64 h-32"
            initial={{ 
              x: Math.random() * (window.innerWidth - 256),
              y: Math.random() * (window.innerHeight - 128),
              opacity: 0 
            }}
            animate={{
              x: [
                Math.random() * (window.innerWidth - 256),
                Math.random() * (window.innerWidth - 256)
              ],
              y: [
                Math.random() * (window.innerHeight - 128),
                Math.random() * (window.innerHeight - 128)
              ],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-red-400/50" />
              <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
              <div className="w-2 h-2 rounded-full bg-green-400/50" />
            </div>
            <div className="text-xs font-mono text-green-400/60 space-y-1">
              <div>$ python model.py</div>
              <div>Training model...</div>
              <div className="text-blue-400/60">Accuracy: {(85 + Math.random() * 15).toFixed(1)}%</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Neural Network Nodes */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-3 h-3 rounded-full bg-purple-400/20 dark:bg-purple-400/10"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3
            }}
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
          >
            {/* Connection lines */}
            <div className="absolute inset-0">
              {[...Array(2)].map((_, j) => (
                <div
                  key={j}
                  className="absolute w-16 h-px bg-gradient-to-r from-purple-400/20 to-transparent"
                  style={{
                    transform: `rotate(${j * 45 + Math.random() * 90}deg)`,
                    transformOrigin: 'left center'
                  }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Large profile picture */}
          <div className="flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] relative">
                <motion.img
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-700 shadow-2xl"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2 rounded-full border-2 border-dashed border-blue-400/50"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 rounded-full border border-dotted border-purple-400/30"
                />
              </div>
            </motion.div>
          </div>

          {/* Right side - Text content */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            >
              I am{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 h-12"
            >
              <span>{displayText}</span>
              <span className="animate-pulse">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-gray-400 max-w-lg leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={handleResumeDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </motion.button>
              <motion.button
                onClick={() => smoothScrollTo('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all"
              >
                <Mail className="mr-2" size={20} />
                Contact Me
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="cursor-pointer"
          onClick={() => smoothScrollTo('projects')}
        >
          <ChevronDown className="text-gray-400 dark:text-gray-600" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}