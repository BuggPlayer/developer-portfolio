import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Semantic color tokens
        'canvas': 'var(--bg-canvas)',
        'surface': 'var(--bg-surface)',
        'muted': 'var(--bg-muted)',
        'elevated': 'var(--bg-elevated)',
        'primary': {
          DEFAULT: 'var(--text-primary)',
          'secondary': 'var(--text-secondary)',
          'muted': 'var(--text-muted)',
          'inverse': 'var(--text-inverse)',
        },
        'accent': {
          'primary': 'var(--accent-primary)',
          'secondary': 'var(--accent-secondary)',
        },
        'status': {
          'success': 'var(--status-success)',
          'warning': 'var(--status-warning)',
          'error': 'var(--status-error)',
          'info': 'var(--status-info)',
        },
        'border': {
          'default': 'var(--border-default)',
          'focus': 'var(--border-focus)',
        }
      },
      boxShadow: {
        'elevated': 'var(--shadow-lg)',
        'surface': 'var(--shadow-md)',
        'muted': 'var(--shadow-sm)',
      },
      spacing: {
        '1': '0.25rem',   // 4px
        '2': '0.5rem',    // 8px
        '3': '0.75rem',   // 12px
        '4': '1rem',      // 16px
        '6': '1.5rem',    // 24px
        '8': '2rem',      // 32px
        '12': '3rem',     // 48px
        '16': '4rem',     // 64px
      },
      borderRadius: {
        'sm': '0.125rem',  // 2px
        'DEFAULT': '0.25rem', // 4px
        'md': '0.375rem',  // 6px
        'lg': '0.5rem',    // 8px
        'xl': '0.75rem',   // 12px
        '2xl': '1rem',     // 16px
      }
    },
  },
  plugins: [],
}

export default config
