import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/portfolioData';

// Technology icons mapping
const techIcons: Record<string, string> = {
  // ML/AI Technologies
  'Python': '🐍',
  'TensorFlow': '🧠',
  'PyTorch': '🔥',
  'Scikit-learn': '🤖',
  'OpenCV': '👁️',
  'Keras': '⚡',
  'Pandas': '🐼',
  'NumPy': '📊',
  'Matplotlib': '📈',
  'Jupyter': '📓',
  
  // Full Stack Technologies
  'React': '⚛️',
  'JavaScript': '💛',
  'TypeScript': '💙',
  'Node.js': '💚',
  'GO': '🔷',
  'HTML': '🧡',
  'CSS': '💜',
  'React Native': '📱',
  'Next.js': '▲',
  
  // Databases
  'MySQL': '🐬',
  'MongoDB': '🍃',
  'Redis': '🔴',
  
  // Tools & Technologies
  'Git': '📂',
  'Docker': '🐳',
  'AWS': '☁️',
  'VS Code': '💻',
  'Postman': '📮',
  'Firebase': '🔥',
  'REST API': '🔗',
  'Webpack': '📦',
  'FAST API': '🔗'
};

const allTechStack = [
  // ML/AI Stack
  'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Keras', 
  'Pandas', 'NumPy', 'Matplotlib', 'Jupyter',
  
  // Full Stack
  'React', 'JavaScript', 'TypeScript', 'Node.js', 'GO', 'HTML', 'CSS', 
  'React Native', 'Next.js', 'Vue.js',
  
  // Databases
  'MySQL', 'MongoDB', 'PostgreSQL', 'Redis', 'SQLite',
  
  // Tools
  'Git', 'Docker', 'AWS', 'Linux', 'VS Code', 'Postman', 'Firebase', 
  'GraphQL', 'REST API', 'Webpack'
];

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [iconsRef, iconsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Technology Icons Section */}
        <motion.div
          ref={iconsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={iconsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Technologies I Work With
          </h3>
          
          {/* Grid Layout for Better Alignment */}
          <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-8 max-w-6xl mx-auto mb-12">
            {allTechStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0, y: 50 }}
                animate={iconsInView ? { 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                } : {}}
                transition={{ 
                  delay: index * 0.03,
                  type: "spring",
                  stiffness: 100,
                  damping: 8
                }}
                className="flex flex-col items-center justify-center group cursor-pointer"
                whileHover={{ 
                  scale: 1.15,
                  y: -5,
                  transition: { 
                    type: "spring", 
                    stiffness: 400,
                    damping: 10
                  }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 shadow-lg group-hover:shadow-xl transition-all duration-300"
                  animate={{
                    rotate: [0, 2, 0, -2, 0],
                  }}
                  transition={{
                    duration: 4 + (index % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1
                  }}
                >
                  {/* Animated Border */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ padding: '2px' }}
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl" />
                  </motion.div>

                  {/* Icon */}
                  <motion.div 
                    className="relative z-10 text-4xl md:text-5xl lg:text-6xl filter drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300"
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 2 + (index % 2),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                  >
                    {techIcons[tech] || '⚙️'}
                  </motion.div>

                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Technology Name */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={iconsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.03 }}
                  className="mt-3 text-center"
                >
                  <span className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    {tech}
                  </span>
                </motion.div>

                {/* Hover Ripple Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-blue-400/10 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ 
                    scale: 1.2,
                    opacity: [0, 0.3, 0],
                    transition: { duration: 0.6 }
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Additional Animated Elements */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {['ML', 'AI', 'Deep Learning', 'Computer Vision', 'Neural Networks', 'Full Stack', 'React Native'].map((tag, index) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0 }}
                animate={iconsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium"
              >
                {tag}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}