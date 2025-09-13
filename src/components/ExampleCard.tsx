import React from 'react'

interface ExampleCardProps {
  title: string
  description: string
  variant?: 'default' | 'elevated' | 'muted'
  size?: 'sm' | 'md' | 'lg'
}

export const ExampleCard: React.FC<ExampleCardProps> = ({ 
  title, 
  description, 
  variant = 'default',
  size = 'md'
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'elevated':
        return 'bg-elevated shadow-lg'
      case 'muted':
        return 'bg-muted'
      default:
        return 'bg-surface shadow-md'
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'p-4'
      case 'lg':
        return 'p-8'
      default:
        return 'p-6'
    }
  }

  return (
    <div className={`
      ${getVariantClasses()}
      ${getSizeClasses()}
      border border-default rounded-lg
      transition-all duration-200
      hover:shadow-lg
    `}>
      <h3 className="text-xl font-semibold text-primary mb-2">
        {title}
      </h3>
      <p className="text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  )
}

// Example usage component
export const UtilityExamples: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Typography Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary mb-6">Typography Examples</h2>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-primary">Heading 1</h1>
          <h2 className="text-3xl font-semibold text-primary">Heading 2</h2>
          <h3 className="text-2xl font-medium text-primary">Heading 3</h3>
          <p className="text-base text-secondary">Regular paragraph text</p>
          <p className="text-sm text-muted">Small muted text</p>
        </div>
      </section>

      {/* Layout Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary mb-6">Layout Examples</h2>
        
        {/* Flexbox Layout */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-primary mb-4">Flexbox Layout</h3>
          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent-primary rounded-full"></div>
              <div>
                <h4 className="font-semibold text-primary">User Name</h4>
                <p className="text-sm text-secondary">user@example.com</p>
              </div>
            </div>
            <button className="btn-primary">Edit Profile</button>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-primary mb-4">Grid Layout</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ExampleCard 
              title="Card 1" 
              description="This is a sample card with default styling"
            />
            <ExampleCard 
              title="Card 2" 
              description="This card has elevated styling"
              variant="elevated"
            />
            <ExampleCard 
              title="Card 3" 
              description="This card has muted styling"
              variant="muted"
            />
          </div>
        </div>
      </section>

      {/* Button Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary mb-6">Button Examples</h2>
        <div className="flex flex-wrap gap-4">
          <button className="btn-primary">Primary Button</button>
          <button className="btn-secondary">Secondary Button</button>
          <button className="btn-ghost">Ghost Button</button>
          <button className="btn-primary" disabled>Disabled Button</button>
        </div>
      </section>

      {/* Spacing Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary mb-6">Spacing Examples</h2>
        <div className="bg-muted p-6 rounded-lg">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-primary mb-2">Margin Examples</h3>
            <div className="space-y-2">
              <div className="bg-surface p-2 rounded">No margin</div>
              <div className="bg-surface p-2 rounded m-2">Margin 2</div>
              <div className="bg-surface p-2 rounded m-4">Margin 4</div>
              <div className="bg-surface p-2 rounded m-6">Margin 6</div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-primary mb-2">Padding Examples</h3>
            <div className="space-y-2">
              <div className="bg-surface rounded">No padding</div>
              <div className="bg-surface p-2 rounded">Padding 2</div>
              <div className="bg-surface p-4 rounded">Padding 4</div>
              <div className="bg-surface p-6 rounded">Padding 6</div>
            </div>
          </div>
        </div>
      </section>

      {/* Status Examples */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary mb-6">Status Examples</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-surface rounded-lg border border-default">
            <div className="w-8 h-8 bg-status-success rounded-full mx-auto mb-2"></div>
            <p className="text-sm font-medium text-primary">Success</p>
          </div>
          <div className="text-center p-4 bg-surface rounded-lg border border-default">
            <div className="w-8 h-8 bg-status-warning rounded-full mx-auto mb-2"></div>
            <p className="text-sm font-medium text-primary">Warning</p>
          </div>
          <div className="text-center p-4 bg-surface rounded-lg border border-default">
            <div className="w-8 h-8 bg-status-error rounded-full mx-auto mb-2"></div>
            <p className="text-sm font-medium text-primary">Error</p>
          </div>
          <div className="text-center p-4 bg-surface rounded-lg border border-default">
            <div className="w-8 h-8 bg-status-info rounded-full mx-auto mb-2"></div>
            <p className="text-sm font-medium text-primary">Info</p>
          </div>
        </div>
      </section>
    </div>
  )
}
