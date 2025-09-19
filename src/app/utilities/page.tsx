'use client'

import Link from 'next/link'
import { UtilityExamples } from '../../components/ExampleCard'

export default function UtilitiesPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 dark:bg-slate-900/80 dark:border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">U</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                Utility Classes
              </h1>
            </div>
            <Link
              href="/"
              className="px-4 py-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
            >
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <UtilityExamples />
      </main>
    </div>
  )
}
