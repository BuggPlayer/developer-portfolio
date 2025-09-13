# 🎨 Theme Handbook - Visual Design System

A comprehensive visual cheat-sheet and implementation guide for consistent theming across web projects.

## 📋 Table of Contents

1. [Quick Reference](#quick-reference)
2. [Semantic Color System](#semantic-color-system)
3. [Component Guidelines](#component-guidelines)
4. [Implementation Examples](#implementation-examples)
5. [Accessibility Standards](#accessibility-standards)

## 🚀 Quick Reference

### Core Principles

- **Foundation vs. Semantic**: Never use raw colors (`#6200ee`) in components. Always use semantic tokens (`accent.primary`)
- **Background Hierarchy**: Canvas < Surface < Muted < Elevated
- **Text Hierarchy**: Primary > Secondary > Muted > Inverse
- **Button States**: Default, Hover, Active, Disabled (all 4 required)
- **Status Colors**: Universal meanings (Success=Green, Error=Red, Warning=Yellow, Info=Blue)

### Visual Cheat Sheet

Visit `/theme-handbook` to see the interactive visual demonstration of all theming principles.

## 🎨 Semantic Color System

### Foundation Colors
```css
/* Blue Palette */
--color-blue-50: #eff6ff;
--color-blue-100: #dbeafe;
--color-blue-200: #bfdbfe;
--color-blue-300: #93c5fd;
--color-blue-400: #60a5fa;
--color-blue-500: #3b82f6;
--color-blue-600: #2563eb;  /* Primary */
--color-blue-700: #1d4ed8;
--color-blue-800: #1e40af;
--color-blue-900: #1e3a8a;

/* Slate Palette */
--color-slate-50: #f8fafc;
--color-slate-100: #f1f5f9;
--color-slate-200: #e2e8f0;
--color-slate-300: #cbd5e1;
--color-slate-400: #94a3b8;
--color-slate-500: #64748b;
--color-slate-600: #475569;
--color-slate-700: #334155;
--color-slate-800: #1e293b;
--color-slate-900: #0f172a;
```

### Semantic Tokens (Light Mode)
```css
/* Backgrounds */
--bg-canvas: var(--color-slate-50);      /* Full page background */
--bg-surface: #ffffff;                   /* Cards, modals */
--bg-muted: var(--color-slate-100);      /* Toolbars, inputs */
--bg-elevated: #ffffff;                  /* Menus, dialogs */

/* Text */
--text-primary: var(--color-slate-900);  /* Most important text */
--text-secondary: var(--color-slate-700); /* Subtitles */
--text-muted: var(--color-slate-500);    /* Hints, placeholders */
--text-inverse: #ffffff;                 /* Dark-on-light text */

/* Accents */
--accent-primary: var(--color-blue-600); /* Brand color */
--accent-secondary: var(--color-slate-600); /* Helper color */

/* Status */
--status-success: var(--color-green-500);
--status-warning: var(--color-yellow-500);
--status-error: var(--color-red-500);
--status-info: var(--color-blue-500);

/* Borders */
--border-default: var(--color-slate-200);
--border-focus: var(--color-blue-500);
```

### Dark Mode Tokens
```css
.dark {
  --bg-canvas: var(--color-slate-900);
  --bg-surface: var(--color-slate-800);
  --bg-muted: var(--color-slate-700);
  --bg-elevated: var(--color-slate-800);
  
  --text-primary: #ffffff;
  --text-secondary: var(--color-slate-200);
  --text-muted: var(--color-slate-400);
  --text-inverse: var(--color-slate-900);
  
  --accent-primary: var(--color-blue-400);
  --accent-secondary: var(--color-slate-300);
  
  --border-default: var(--color-slate-700);
  --border-focus: var(--color-blue-400);
}
```

## 🧩 Component Guidelines

### Buttons

#### Primary Button
```css
.btn-primary {
  background-color: var(--accent-primary);
  color: var(--text-inverse);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-primary:hover { opacity: 0.9; }
.btn-primary:active { opacity: 0.8; }
.btn-primary:disabled { 
  background-color: var(--color-slate-300);
  color: var(--color-slate-500);
  cursor: not-allowed;
}
```

#### Secondary Button
```css
.btn-secondary {
  border: 2px solid var(--accent-primary);
  color: var(--accent-primary);
  background: transparent;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-secondary:hover {
  background-color: var(--color-blue-50);
}
```

#### Ghost Button
```css
.btn-ghost {
  color: var(--accent-primary);
  background: transparent;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-ghost:hover {
  background-color: var(--color-blue-50);
}
```

### Text Hierarchy

```css
/* Headings */
h1 { font-size: 2.25rem; font-weight: 700; color: var(--text-primary); }
h2 { font-size: 1.875rem; font-weight: 600; color: var(--text-primary); }
h3 { font-size: 1.5rem; font-weight: 600; color: var(--text-primary); }
h4 { font-size: 1.25rem; font-weight: 500; color: var(--text-primary); }

/* Body Text */
.text-primary { color: var(--text-primary); }
.text-secondary { color: var(--text-secondary); }
.text-muted { color: var(--text-muted); }
.text-inverse { color: var(--text-inverse); }
```

### Backgrounds

```css
.bg-canvas { background-color: var(--bg-canvas); }
.bg-surface { background-color: var(--bg-surface); }
.bg-muted { background-color: var(--bg-muted); }
.bg-elevated { 
  background-color: var(--bg-elevated);
  box-shadow: var(--shadow-lg);
}
```

### Status Indicators

```css
.status-success { color: var(--status-success); }
.status-warning { color: var(--status-warning); }
.status-error { color: var(--status-error); }
.status-info { color: var(--status-info); }

.bg-status-success { background-color: var(--status-success); }
.bg-status-warning { background-color: var(--status-warning); }
.bg-status-error { background-color: var(--status-error); }
.bg-status-info { background-color: var(--status-info); }
```

## 📐 Spacing & Typography Scale

### Spacing Scale
```css
/* Consistent 4px base unit */
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
```

### Border Radius Scale
```css
--radius-sm: 0.125rem;  /* 2px */
--radius: 0.25rem;      /* 4px */
--radius-md: 0.375rem;  /* 6px */
--radius-lg: 0.5rem;    /* 8px */
--radius-xl: 0.75rem;   /* 12px */
--radius-2xl: 1rem;     /* 16px */
```

### Typography Scale
```css
.text-xs { font-size: 0.75rem; line-height: 1rem; }    /* 12px */
.text-sm { font-size: 0.875rem; line-height: 1.25rem; } /* 14px */
.text-base { font-size: 1rem; line-height: 1.5rem; }    /* 16px */
.text-lg { font-size: 1.125rem; line-height: 1.75rem; } /* 18px */
.text-xl { font-size: 1.25rem; line-height: 1.75rem; }  /* 20px */
.text-2xl { font-size: 1.5rem; line-height: 2rem; }     /* 24px */
.text-3xl { font-size: 1.875rem; line-height: 2.25rem; } /* 30px */
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; }  /* 36px */
```

## ♿ Accessibility Standards

### Contrast Requirements
- **WCAG AA**: 4.5:1 contrast ratio for normal text
- **WCAG AAA**: 7:1 contrast ratio for enhanced accessibility
- **Large Text**: 3:1 contrast ratio (18pt+ or 14pt+ bold)

### Focus Management
```css
.focus-ring {
  outline: none;
  ring: 2px solid var(--color-blue-200);
  ring-offset: 2px;
}

/* Dark mode focus */
.dark .focus-ring {
  ring-color: var(--color-blue-800);
}
```

### Color Independence
- Never rely on color alone to convey meaning
- Always pair color with icons, text, or patterns
- Test with color blindness simulators

## 🛠️ Implementation Examples

### React Component Example
```tsx
import React from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant, 
  children, 
  disabled = false, 
  onClick 
}) => {
  const baseClasses = "px-4 py-2 rounded-lg font-medium transition-colors focus-ring";
  
  const variantClasses = {
    primary: "bg-accent-primary text-inverse hover:opacity-90 disabled:bg-slate-300 disabled:text-slate-500",
    secondary: "border-2 border-accent-primary text-accent-primary hover:bg-blue-50 disabled:border-slate-300 disabled:text-slate-400",
    ghost: "text-accent-primary hover:bg-blue-50 disabled:text-slate-400"
  };
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
```

### CSS Custom Properties Example
```css
/* Component using semantic tokens */
.card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-surface);
}

.card-title {
  color: var(--text-primary);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: var(--space-2);
}

.card-description {
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.5;
}
```

## 🎯 Best Practices

### Do's ✅
- Use semantic color tokens consistently
- Implement all 4 button states (default, hover, active, disabled)
- Test with both light and dark modes
- Maintain consistent spacing and typography scales
- Ensure WCAG AA compliance
- Use focus rings for keyboard navigation

### Don'ts ❌
- Never use raw hex colors in components
- Don't skip disabled states
- Avoid inconsistent spacing (7px, 13px, etc.)
- Don't rely on color alone for meaning
- Avoid hardcoded values
- Don't ignore accessibility requirements

## 🔄 Dark Mode Implementation

### CSS Custom Properties Approach
```css
/* Light mode (default) */
:root {
  --bg-canvas: #f8fafc;
  --text-primary: #0f172a;
  /* ... other tokens */
}

/* Dark mode */
.dark {
  --bg-canvas: #0f172a;
  --text-primary: #ffffff;
  /* ... other tokens */
}
```

### JavaScript Toggle
```javascript
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
}

// Initialize from localStorage
if (localStorage.getItem('darkMode') === 'true') {
  document.documentElement.classList.add('dark');
}
```

## 📊 Design Token Management

### Token Categories
1. **Foundation**: Raw color values, spacing units, typography scales
2. **Semantic**: Role-based tokens (bg.primary, text.secondary)
3. **Component**: Component-specific tokens (button.primary, card.elevated)
4. **Platform**: Platform-specific adaptations (mobile, desktop)

### Token Naming Convention
```
category.property.state.variant
```

Examples:
- `color.text.primary`
- `spacing.padding.small`
- `typography.heading.large`
- `shadow.elevation.high`

## 🚀 Getting Started

1. **Copy the CSS variables** from `globals.css` to your project
2. **Use semantic classes** instead of utility classes where possible
3. **Test both light and dark modes** during development
4. **Validate accessibility** with automated tools
5. **Document your custom tokens** for team consistency

## 📚 Additional Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Design Tokens W3C Spec](https://design-tokens.github.io/community-group/format/)
- [Tailwind CSS Design System](https://tailwindcss.com/docs/design-system)

---

**Remember**: Design once with tokens, apply everywhere with semantics! 🎨
