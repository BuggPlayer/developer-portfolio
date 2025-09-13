'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Palette, 
  Type, 
  Square, 
  Circle, 
  Triangle, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Info,
  Sun,
  Moon,
  Eye,
  Contrast,
  Layers,
  Zap
} from 'lucide-react'

export default function ThemeHandbook() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 dark:bg-slate-900/80 dark:border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Palette className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                Theme Handbook
              </h1>
            </div>
            <button
              onClick={toggleDarkMode}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {isDarkMode ? 'Light' : 'Dark'} Mode
              </span>
            </button>
          </div>
        </div>
      </header>

      <div className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-8" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              🎨 Visual Theme Cheat Sheet
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              A comprehensive visual guide to theming principles. Every element follows semantic naming and consistent design tokens.
            </p>
          </motion.div>

          {/* Foundation vs Semantic */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Square className="w-6 h-6 mr-3 text-blue-600" />
              1. Foundation vs Semantic Colors
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">❌ Foundation (Raw Colors)</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded bg-[#6200ee]"></div>
                    <code className="text-sm text-slate-600 dark:text-slate-300">#6200ee</code>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded bg-[#0d0d0d]"></div>
                    <code className="text-sm text-slate-600 dark:text-slate-300">#0d0d0d</code>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded bg-[#ff6b6b]"></div>
                    <code className="text-sm text-slate-600 dark:text-slate-300">#ff6b6b</code>
                  </div>
                </div>
                <p className="text-sm text-red-600 dark:text-red-400 mt-4">Never use raw colors in components!</p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">✅ Semantic (Role-Based)</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded bg-blue-600"></div>
                    <code className="text-sm text-slate-600 dark:text-slate-300">accent.primary</code>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded bg-slate-900 dark:bg-slate-100"></div>
                    <code className="text-sm text-slate-600 dark:text-slate-300">text.primary</code>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded bg-red-500"></div>
                    <code className="text-sm text-slate-600 dark:text-slate-300">status.error</code>
                  </div>
                </div>
                <p className="text-sm text-green-600 dark:text-green-400 mt-4">Always use semantic tokens!</p>
              </div>
            </div>
          </motion.section>

          {/* Backgrounds */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Layers className="w-6 h-6 mr-3 text-blue-600" />
              2. Background Hierarchy
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Canvas</h4>
                <div className="w-full h-16 rounded bg-slate-50 dark:bg-slate-900 border-2 border-dashed border-slate-300 dark:border-slate-600 flex items-center justify-center">
                  <span className="text-xs text-slate-500 dark:text-slate-400">Full page</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2">bg.canvas</p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Surface</h4>
                <div className="w-full h-16 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                  <span className="text-xs text-slate-500 dark:text-slate-400">Cards, modals</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2">bg.surface</p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Muted</h4>
                <div className="w-full h-16 rounded bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center">
                  <span className="text-xs text-slate-500 dark:text-slate-400">Toolbars, inputs</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2">bg.muted</p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Elevated</h4>
                <div className="w-full h-16 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg flex items-center justify-center">
                  <span className="text-xs text-slate-500 dark:text-slate-400">Menus, dialogs</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2">bg.elevated</p>
              </div>
            </div>
          </motion.section>

          {/* Text Hierarchy */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Type className="w-6 h-6 mr-3 text-blue-600" />
              3. Text Hierarchy
            </h3>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="space-y-6">
                <div>
                  <h4 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Primary Text</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">text.primary - Highest contrast, most important</p>
                </div>
                
                <div>
                  <h5 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-2">Secondary Text</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-300">text.secondary - Subtitles, less important</p>
                </div>
                
                <div>
                  <p className="text-base text-slate-500 dark:text-slate-400 mb-2">Muted Text</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">text.muted - Hints, placeholders</p>
                </div>
                
                <div className="bg-blue-600 dark:bg-blue-500 p-4 rounded-lg">
                  <p className="text-white text-base font-medium">Inverse Text</p>
                  <p className="text-blue-100 text-sm">text.inverse - For dark-on-light backgrounds</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Buttons */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Circle className="w-6 h-6 mr-3 text-blue-600" />
              4. Button States
            </h3>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white">Primary Button</h4>
                  <div className="space-y-2">
                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">
                      Default
                    </button>
                    <button className="w-full bg-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition-colors">
                      Hover
                    </button>
                    <button className="w-full bg-blue-800 text-white px-4 py-2 rounded-lg font-medium active:bg-blue-900 transition-colors">
                      Active
                    </button>
                    <button className="w-full bg-slate-300 text-slate-500 px-4 py-2 rounded-lg font-medium cursor-not-allowed">
                      Disabled
                    </button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white">Secondary Button</h4>
                  <div className="space-y-2">
                    <button className="w-full border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-lg font-medium">
                      Default
                    </button>
                    <button className="w-full border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                      Hover
                    </button>
                    <button className="w-full border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-lg font-medium active:bg-blue-100 dark:active:bg-blue-900/30 transition-colors">
                      Active
                    </button>
                    <button className="w-full border-2 border-slate-300 text-slate-400 px-4 py-2 rounded-lg font-medium cursor-not-allowed">
                      Disabled
                    </button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white">Ghost Button</h4>
                  <div className="space-y-2">
                    <button className="w-full text-blue-600 dark:text-blue-400 px-4 py-2 rounded-lg font-medium">
                      Default
                    </button>
                    <button className="w-full text-blue-600 dark:text-blue-400 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                      Hover
                    </button>
                    <button className="w-full text-blue-600 dark:text-blue-400 px-4 py-2 rounded-lg font-medium active:bg-blue-100 dark:active:bg-blue-900/30 transition-colors">
                      Active
                    </button>
                    <button className="w-full text-slate-400 px-4 py-2 rounded-lg font-medium cursor-not-allowed">
                      Disabled
                    </button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white">Danger Button</h4>
                  <div className="space-y-2">
                    <button className="w-full bg-red-500 text-white px-4 py-2 rounded-lg font-medium">
                      Default
                    </button>
                    <button className="w-full bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
                      Hover
                    </button>
                    <button className="w-full bg-red-700 text-white px-4 py-2 rounded-lg font-medium active:bg-red-800 transition-colors">
                      Active
                    </button>
                    <button className="w-full bg-slate-300 text-slate-500 px-4 py-2 rounded-lg font-medium cursor-not-allowed">
                      Disabled
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Status Colors */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Triangle className="w-6 h-6 mr-3 text-blue-600" />
              5. Status Colors (Traffic Lights 🚦)
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Success</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">status.success</p>
                <div className="mt-3 w-full h-3 rounded bg-green-500"></div>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Warning</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">status.warning</p>
                <div className="mt-3 w-full h-3 rounded bg-yellow-500"></div>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                <XCircle className="w-12 h-12 text-red-500 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Error</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">status.error</p>
                <div className="mt-3 w-full h-3 rounded bg-red-500"></div>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                <Info className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Info</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">status.info</p>
                <div className="mt-3 w-full h-3 rounded bg-blue-500"></div>
              </div>
            </div>
          </motion.section>

          {/* Borders & Focus */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Square className="w-6 h-6 mr-3 text-blue-600" />
              6. Borders & Focus States
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Default Border</h4>
                <div className="space-y-4">
                  <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                    <p className="text-slate-600 dark:text-slate-300">Neutral gray border</p>
                  </div>
                  <div className="p-4 border-2 border-slate-300 dark:border-slate-600 rounded-lg">
                    <p className="text-slate-600 dark:text-slate-300">Slightly stronger border</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Focus Border</h4>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Focus me for blue border"
                    className="w-full p-4 border border-slate-200 dark:border-slate-700 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-colors"
                  />
                  <button className="px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-colors">
                    Focus me
                  </button>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Typography Scale */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Type className="w-6 h-6 mr-3 text-blue-600" />
              7. Typography Scale
            </h3>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Heading 1</h1>
                  <code className="text-sm text-slate-600 dark:text-slate-300">text-4xl font-bold</code>
                </div>
                <div>
                  <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-2">Heading 2</h2>
                  <code className="text-sm text-slate-600 dark:text-slate-300">text-3xl font-semibold</code>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">Heading 3</h3>
                  <code className="text-sm text-slate-600 dark:text-slate-300">text-2xl font-semibold</code>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-slate-900 dark:text-white mb-2">Heading 4</h4>
                  <code className="text-sm text-slate-600 dark:text-slate-300">text-xl font-medium</code>
                </div>
                <div>
                  <p className="text-base text-slate-700 dark:text-slate-200 mb-2">Body text - This is the default paragraph text size and weight.</p>
                  <code className="text-sm text-slate-600 dark:text-slate-300">text-base</code>
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">Small text - Used for captions, labels, and secondary information.</p>
                  <code className="text-sm text-slate-600 dark:text-slate-300">text-sm</code>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Spacing & Radii */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Zap className="w-6 h-6 mr-3 text-blue-600" />
              8. Spacing & Radii Scale
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Spacing Scale</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-4 bg-blue-500"></div>
                    <span className="text-sm text-slate-600 dark:text-slate-300">4px - p-1</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-4 bg-blue-500"></div>
                    <span className="text-sm text-slate-600 dark:text-slate-300">8px - p-2</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-4 bg-blue-500"></div>
                    <span className="text-sm text-slate-600 dark:text-slate-300">12px - p-3</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-500"></div>
                    <span className="text-sm text-slate-600 dark:text-slate-300">16px - p-4</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-4 bg-blue-500"></div>
                    <span className="text-sm text-slate-600 dark:text-slate-300">24px - p-6</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Border Radius Scale</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-8 bg-blue-500 rounded-sm"></div>
                    <span className="text-sm text-slate-600 dark:text-slate-300">rounded-sm (2px)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-8 bg-blue-500 rounded"></div>
                    <span className="text-sm text-slate-600 dark:text-slate-300">rounded (4px)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-8 bg-blue-500 rounded-md"></div>
                    <span className="text-sm text-slate-600 dark:text-slate-300">rounded-md (6px)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-8 bg-blue-500 rounded-lg"></div>
                    <span className="text-sm text-slate-600 dark:text-slate-300">rounded-lg (8px)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-8 bg-blue-500 rounded-xl"></div>
                    <span className="text-sm text-slate-600 dark:text-slate-300">rounded-xl (12px)</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Accessibility */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Contrast className="w-6 h-6 mr-3 text-blue-600" />
              9. Accessibility Guidelines
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                  <Contrast className="w-5 h-5 mr-2 text-green-500" />
                  Contrast
                </h4>
                <div className="space-y-2">
                  <div className="p-3 bg-slate-900 text-white rounded text-sm">
                    ✅ WCAG AA: 4.5:1
                  </div>
                  <div className="p-3 bg-slate-600 text-white rounded text-sm">
                    ✅ WCAG AA: 4.5:1
                  </div>
                  <div className="p-3 bg-slate-400 text-slate-900 rounded text-sm">
                    ❌ Too low contrast
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-blue-500" />
                  Focus Rings
                </h4>
                <div className="space-y-2">
                  <button className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
                    Focus me
                  </button>
                  <button className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                    Keyboard accessible
                  </button>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                  <Circle className="w-5 h-5 mr-2 text-purple-500" />
                  Color + Meaning
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <span className="text-sm">Error</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Success</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <XCircle className="w-4 h-4 text-red-500" />
                    <span className="text-sm">Never color alone</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Summary */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                📌 Quick Reference Summary
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">🎨 Colors</h4>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                    <li>• Backgrounds = paper layers</li>
                    <li>• Text = ink hierarchy</li>
                    <li>• Primary = main crayon</li>
                    <li>• Secondary = helper crayon</li>
                    <li>• Status = traffic lights</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">⚡ Interactions</h4>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                    <li>• States = moods (4 states)</li>
                    <li>• Borders = outlines</li>
                    <li>• Elevation = shadows</li>
                    <li>• Focus = accessibility</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">📏 Consistency</h4>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                    <li>• Typography = rhythm</li>
                    <li>• Spacing = scale</li>
                    <li>• Radii = harmony</li>
                    <li>• Tokens = dictionary</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white dark:bg-slate-800 rounded-lg border border-blue-200 dark:border-blue-700">
                <p className="text-center font-semibold text-slate-900 dark:text-white">
                  ⚡ Rule of thumb: <span className="text-blue-600 dark:text-blue-400">Design once with tokens, apply everywhere with semantics.</span>
                </p>
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  )
}
