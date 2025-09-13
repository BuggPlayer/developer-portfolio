# 🎨 Complete Utility Classes Reference

A comprehensive collection of standardized CSS utility classes for consistent styling across your entire application.

## 📋 Table of Contents

1. [Layout Utilities](#layout-utilities)
2. [Spacing Utilities](#spacing-utilities)
3. [Flexbox Utilities](#flexbox-utilities)
4. [Grid Utilities](#grid-utilities)
5. [Typography Utilities](#typography-utilities)
6. [Border Utilities](#border-utilities)
7. [Shadow Utilities](#shadow-utilities)
8. [Position Utilities](#position-utilities)
9. [Display Utilities](#display-utilities)
10. [Width & Height Utilities](#width--height-utilities)
11. [Overflow Utilities](#overflow-utilities)
12. [Cursor Utilities](#cursor-utilities)
13. [Transition Utilities](#transition-utilities)
14. [Semantic Color Classes](#semantic-color-classes)

---

## 🏗️ Layout Utilities

### Container Classes
```css
.container          /* Responsive container with padding */
.container-sm       /* Max-width: 640px */
.container-md       /* Max-width: 768px */
.container-lg       /* Max-width: 1024px */
.container-xl       /* Max-width: 1280px */
.container-2xl      /* Max-width: 1536px */
.container-max      /* Max-width: 80rem */
```

### Section Classes
```css
.section           /* Padding: 4rem top/bottom */
.section-sm        /* Padding: 2rem top/bottom */
.section-lg        /* Padding: 6rem top/bottom */
.section-xl        /* Padding: 8rem top/bottom */
.section-padding   /* Responsive padding with horizontal */
```

---

## 📏 Spacing Utilities

### Margin Classes
```css
.m-0, .m-1, .m-2, .m-3, .m-4, .m-6, .m-8, .m-12, .m-16, .m-20, .m-24, .m-auto
.mx-0, .mx-1, .mx-2, .mx-3, .mx-4, .mx-6, .mx-8, .mx-auto
.my-0, .my-1, .my-2, .my-3, .my-4, .my-6, .my-8, .my-12, .my-16
```

### Padding Classes
```css
.p-0, .p-1, .p-2, .p-3, .p-4, .p-6, .p-8, .p-12, .p-16, .p-20, .p-24
.px-0, .px-1, .px-2, .px-3, .px-4, .px-6, .px-8, .px-12, .px-16
.py-0, .py-1, .py-2, .py-3, .py-4, .py-6, .py-8, .py-12, .py-16, .py-20, .py-24
```

**Spacing Scale:**
- `0` = 0
- `1` = 0.25rem (4px)
- `2` = 0.5rem (8px)
- `3` = 0.75rem (12px)
- `4` = 1rem (16px)
- `6` = 1.5rem (24px)
- `8` = 2rem (32px)
- `12` = 3rem (48px)
- `16` = 4rem (64px)
- `20` = 5rem (80px)
- `24` = 6rem (96px)

---

## 🔄 Flexbox Utilities

### Display & Direction
```css
.flex              /* display: flex */
.inline-flex       /* display: inline-flex */
.flex-col          /* flex-direction: column */
.flex-row          /* flex-direction: row */
.flex-wrap         /* flex-wrap: wrap */
.flex-nowrap       /* flex-wrap: nowrap */
```

### Justify Content
```css
.justify-start     /* justify-content: flex-start */
.justify-end       /* justify-content: flex-end */
.justify-center    /* justify-content: center */
.justify-between   /* justify-content: space-between */
.justify-around    /* justify-content: space-around */
.justify-evenly    /* justify-content: space-evenly */
```

### Align Items
```css
.items-start       /* align-items: flex-start */
.items-end         /* align-items: flex-end */
.items-center      /* align-items: center */
.items-baseline    /* align-items: baseline */
.items-stretch     /* align-items: stretch */
```

### Align Self
```css
.self-start        /* align-self: flex-start */
.self-end          /* align-self: flex-end */
.self-center       /* align-self: center */
.self-baseline     /* align-self: baseline */
.self-stretch      /* align-self: stretch */
```

### Flex Properties
```css
.flex-1            /* flex: 1 1 0% */
.flex-auto         /* flex: 1 1 auto */
.flex-initial      /* flex: 0 1 auto */
.flex-none         /* flex: none */
.flex-grow         /* flex-grow: 1 */
.flex-shrink       /* flex-shrink: 1 */
.flex-shrink-0     /* flex-shrink: 0 */
```

### Gap
```css
.gap-0, .gap-1, .gap-2, .gap-3, .gap-4, .gap-6, .gap-8, .gap-12, .gap-16
```

---

## 📐 Grid Utilities

### Grid Display
```css
.grid              /* display: grid */
.grid-cols-1       /* 1 column */
.grid-cols-2       /* 2 columns */
.grid-cols-3       /* 3 columns */
.grid-cols-4       /* 4 columns */
.grid-cols-6       /* 6 columns */
.grid-cols-12      /* 12 columns */
```

### Column Span
```css
.col-span-1        /* span 1 column */
.col-span-2        /* span 2 columns */
.col-span-3        /* span 3 columns */
.col-span-4        /* span 4 columns */
.col-span-6        /* span 6 columns */
.col-span-12       /* span 12 columns */
```

---

## ✍️ Typography Utilities

### Font Sizes
```css
.text-xs           /* 0.75rem (12px) */
.text-sm           /* 0.875rem (14px) */
.text-base         /* 1rem (16px) */
.text-lg           /* 1.125rem (18px) */
.text-xl           /* 1.25rem (20px) */
.text-2xl          /* 1.5rem (24px) */
.text-3xl          /* 1.875rem (30px) */
.text-4xl          /* 2.25rem (36px) */
.text-5xl          /* 3rem (48px) */
.text-6xl          /* 3.75rem (60px) */
.text-7xl          /* 4.5rem (72px) */
```

### Font Weights
```css
.font-thin         /* 100 */
.font-extralight   /* 200 */
.font-light        /* 300 */
.font-normal       /* 400 */
.font-medium       /* 500 */
.font-semibold     /* 600 */
.font-bold         /* 700 */
.font-extrabold    /* 800 */
.font-black        /* 900 */
```

### Text Alignment
```css
.text-left         /* text-align: left */
.text-center       /* text-align: center */
.text-right        /* text-align: right */
.text-justify      /* text-align: justify */
```

### Line Height
```css
.leading-none      /* line-height: 1 */
.leading-tight     /* line-height: 1.25 */
.leading-snug      /* line-height: 1.375 */
.leading-normal    /* line-height: 1.5 */
.leading-relaxed   /* line-height: 1.625 */
.leading-loose     /* line-height: 2 */
```

---

## 🔲 Border Utilities

### Border Width
```css
.border-0          /* border-width: 0 */
.border            /* border-width: 1px */
.border-2          /* border-width: 2px */
.border-4          /* border-width: 4px */
.border-8          /* border-width: 8px */
```

### Border Radius
```css
.rounded-none      /* border-radius: 0 */
.rounded-sm        /* border-radius: 0.125rem */
.rounded           /* border-radius: 0.25rem */
.rounded-md        /* border-radius: 0.375rem */
.rounded-lg        /* border-radius: 0.5rem */
.rounded-xl        /* border-radius: 0.75rem */
.rounded-2xl       /* border-radius: 1rem */
.rounded-3xl       /* border-radius: 1.5rem */
.rounded-full      /* border-radius: 9999px */
```

---

## 🌟 Shadow Utilities

```css
.shadow-none       /* box-shadow: none */
.shadow-sm         /* subtle shadow */
.shadow            /* small shadow */
.shadow-md         /* medium shadow */
.shadow-lg         /* large shadow */
.shadow-xl         /* extra large shadow */
.shadow-2xl        /* 2x large shadow */
```

---

## 📍 Position Utilities

### Position
```css
.static            /* position: static */
.fixed             /* position: fixed */
.absolute          /* position: absolute */
.relative          /* position: relative */
.sticky            /* position: sticky */
```

### Z-Index
```css
.z-0, .z-10, .z-20, .z-30, .z-40, .z-50
```

---

## 👁️ Display Utilities

```css
.block             /* display: block */
.inline-block      /* display: inline-block */
.inline            /* display: inline */
.hidden            /* display: none */
```

---

## 📐 Width & Height Utilities

### Width
```css
.w-auto, .w-full, .w-screen, .w-min, .w-max, .w-fit
.w-0, .w-1, .w-2, .w-3, .w-4, .w-6, .w-8, .w-12, .w-16, .w-20, .w-24, .w-32, .w-40, .w-48, .w-56, .w-64
```

### Height
```css
.h-auto, .h-full, .h-screen, .h-min, .h-max, .h-fit
.h-0, .h-1, .h-2, .h-3, .h-4, .h-6, .h-8, .h-12, .h-16, .h-20, .h-24, .h-32, .h-40, .h-48, .h-56, .h-64
```

---

## 🌊 Overflow Utilities

### Overflow
```css
.overflow-auto     /* overflow: auto */
.overflow-hidden   /* overflow: hidden */
.overflow-visible  /* overflow: visible */
.overflow-scroll   /* overflow: scroll */
```

### Overflow X/Y
```css
.overflow-x-auto, .overflow-x-hidden, .overflow-x-visible, .overflow-x-scroll
.overflow-y-auto, .overflow-y-hidden, .overflow-y-visible, .overflow-y-scroll
```

---

## 🖱️ Cursor Utilities

```css
.cursor-auto           /* cursor: auto */
.cursor-default        /* cursor: default */
.cursor-pointer        /* cursor: pointer */
.cursor-wait           /* cursor: wait */
.cursor-text           /* cursor: text */
.cursor-move           /* cursor: move */
.cursor-help           /* cursor: help */
.cursor-not-allowed    /* cursor: not-allowed */
```

---

## ⚡ Transition Utilities

### Transition Properties
```css
.transition-none       /* transition-property: none */
.transition-all        /* transition-property: all */
.transition            /* standard transition properties */
.transition-colors     /* color transitions only */
.transition-opacity    /* opacity transitions only */
.transition-shadow     /* shadow transitions only */
.transition-transform  /* transform transitions only */
```

### Duration
```css
.duration-75, .duration-100, .duration-150, .duration-200, .duration-300, .duration-500, .duration-700, .duration-1000
```

### Easing
```css
.ease-linear           /* linear timing */
.ease-in               /* ease-in timing */
.ease-out              /* ease-out timing */
.ease-in-out           /* ease-in-out timing */
```

---

## 🎨 Semantic Color Classes

### Backgrounds
```css
.bg-canvas         /* var(--bg-canvas) */
.bg-surface        /* var(--bg-surface) */
.bg-muted          /* var(--bg-muted) */
.bg-elevated       /* var(--bg-elevated) */
```

### Text Colors
```css
.text-primary      /* var(--text-primary) */
.text-secondary    /* var(--text-secondary) */
.text-muted        /* var(--text-muted) */
.text-inverse      /* var(--text-inverse) */
```

### Accent Colors
```css
.accent-primary    /* var(--accent-primary) */
.accent-secondary  /* var(--accent-secondary) */
.bg-accent-primary /* background: var(--accent-primary) */
.border-accent-primary /* border: var(--accent-primary) */
```

### Status Colors
```css
.status-success    /* var(--status-success) */
.status-warning    /* var(--status-warning) */
.status-error      /* var(--status-error) */
.status-info       /* var(--status-info) */
.bg-status-success /* background: var(--status-success) */
.bg-status-warning /* background: var(--status-warning) */
.bg-status-error   /* background: var(--status-error) */
.bg-status-info    /* background: var(--status-info) */
```

### Border Colors
```css
.border-default    /* var(--border-default) */
.border-focus      /* var(--border-focus) */
```

---

## 🚀 Usage Examples

### Card Component
```html
<div class="bg-surface border border-default rounded-lg shadow-md p-6">
  <h3 class="text-xl font-semibold text-primary mb-2">Card Title</h3>
  <p class="text-secondary">Card description text</p>
</div>
```

### Button Component
```html
<button class="btn-primary px-6 py-3 rounded-lg font-medium transition-colors">
  Primary Button
</button>
```

### Layout Grid
```html
<div class="container mx-auto px-4">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="bg-surface p-4 rounded-lg">Item 1</div>
    <div class="bg-surface p-4 rounded-lg">Item 2</div>
    <div class="bg-surface p-4 rounded-lg">Item 3</div>
  </div>
</div>
```

### Flexbox Layout
```html
<div class="flex items-center justify-between p-4">
  <h1 class="text-2xl font-bold text-primary">Title</h1>
  <button class="btn-secondary">Action</button>
</div>
```

---

## 📝 Best Practices

1. **Consistency**: Always use these utility classes instead of custom CSS
2. **Semantic Colors**: Use semantic color classes for theming
3. **Responsive**: Combine with responsive prefixes when needed
4. **Performance**: These classes are optimized and cached
5. **Maintainability**: Easy to update globally by changing the CSS variables

---

## 🔧 Customization

All spacing, colors, and other values can be customized by modifying the CSS variables in `globals.css`. This ensures consistency across your entire application while maintaining flexibility.

**Example:**
```css
:root {
  --bg-canvas: #ffffff;        /* Change canvas background */
  --accent-primary: #3b82f6;   /* Change primary accent color */
}
```

---

**Remember**: These utility classes provide a complete design system foundation. Use them consistently for maintainable, scalable styling! 🎨✨
