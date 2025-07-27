document.addEventListener('DOMContentLoaded', function() {
  // Initialize Material for MkDocs enhanced features
  
  // Enhanced button styling for grid cards
  const enhanceButtons = () => {
    const buttons = document.querySelectorAll('.md-button');
    buttons.forEach(button => {
      // Ensure proper styling inheritance
      if (button.classList.contains('md-button--primary')) {
        button.style.backgroundColor = 'var(--sqware-primary)';
        button.style.borderColor = 'var(--sqware-primary)';
        button.style.color = '#ffffff';
      } else {
        button.style.borderColor = 'var(--sqware-primary)';
        button.style.color = 'var(--sqware-primary)';
      }
      
      // Enhanced hover effects
      button.addEventListener('mouseenter', function() {
        if (this.classList.contains('md-button--primary')) {
          this.style.backgroundColor = 'var(--sqware-primary-hover)';
          this.style.borderColor = 'var(--sqware-primary-hover)';
        } else {
          this.style.backgroundColor = 'var(--sqware-primary)';
          this.style.color = '#ffffff';
        }
      });
      
      button.addEventListener('mouseleave', function() {
        if (this.classList.contains('md-button--primary')) {
          this.style.backgroundColor = 'var(--sqware-primary)';
          this.style.borderColor = 'var(--sqware-primary)';
        } else {
          this.style.backgroundColor = 'transparent';
          this.style.color = 'var(--sqware-primary)';
        }
      });
    });
  };
  
  // Enhanced card interactions
  const enhanceCards = () => {
    const cards = document.querySelectorAll('.grid.cards > *');
    cards.forEach(card => {
      // Add focus and keyboard navigation support
      if (!card.hasAttribute('tabindex')) {
        card.setAttribute('tabindex', '0');
      }
      
      // Improve accessibility
      const cardTitle = card.querySelector('h3, h4, strong');
      if (cardTitle && !card.hasAttribute('aria-label')) {
        card.setAttribute('aria-label', cardTitle.textContent.trim());
      }
      
      // Enhanced keyboard navigation
      card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          const link = this.querySelector('a');
          if (link) {
            e.preventDefault();
            link.click();
          }
        }
      });
      
      // Smooth hover animations
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        this.style.borderColor = 'var(--sqware-primary)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '';
        this.style.borderColor = 'var(--sqware-border)';
      });
    });
  };
  
  // Enhanced icon handling for Material icons
  const enhanceIcons = () => {
    const icons = document.querySelectorAll('svg.twemoji');
    icons.forEach(icon => {
      // Ensure proper sizing and positioning
      if (icon.closest('.grid.cards')) {
        icon.style.width = '2rem';
        icon.style.height = '2rem';
        icon.style.marginRight = '0.5rem';
      }
      
      // Add proper alt text for accessibility
      if (!icon.getAttribute('alt') && !icon.getAttribute('aria-label')) {
        const title = icon.getAttribute('title') || '';
        if (title) {
          icon.setAttribute('aria-label', title);
        }
      }
    });
  };
  
  // Color scheme handling
  const handleColorScheme = () => {
    // Respect user's color scheme preference
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply appropriate styling based on current scheme
    const currentScheme = document.body.getAttribute('data-md-color-scheme');
    if (currentScheme === 'slate' || prefersDarkMode) {
      document.documentElement.style.setProperty('--md-primary-fg-color', 'var(--sqware-text-heading)');
    }
    
    // Listen for color scheme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      // Update styling when system preference changes
      if (e.matches) {
        document.documentElement.style.setProperty('--md-primary-fg-color', 'var(--sqware-text-heading)');
      }
    });
  };
  
  // Performance optimizations
  const optimizePerformance = () => {
    // Lazy load images in cards
    const images = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        });
      });
      
      images.forEach(img => imageObserver.observe(img));
    }
    
    // Optimize scroll performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Any scroll-based enhancements can go here
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
  };
  
  // Accessibility enhancements
  const enhanceAccessibility = () => {
    // Focus management
    document.querySelectorAll('a, button, [tabindex]').forEach(element => {
      element.addEventListener('focus', function() {
        this.style.outline = '2px solid var(--sqware-primary)';
        this.style.outlineOffset = '2px';
      });
      
      element.addEventListener('blur', function() {
        this.style.outline = '';
        this.style.outlineOffset = '';
      });
    });
    
    // Improve form accessibility
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      input.addEventListener('focus', function() {
        this.style.borderColor = 'var(--sqware-primary)';
        this.style.outline = '2px solid var(--sqware-primary)';
        this.style.outlineOffset = '2px';
      });
      
      input.addEventListener('blur', function() {
        this.style.borderColor = '';
        this.style.outline = '';
        this.style.outlineOffset = '';
      });
    });
  };
  
  // Handle reduced motion preferences
  const handleReducedMotion = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      document.body.classList.add('reduced-motion');
      
      // Disable transitions and animations
      const style = document.createElement('style');
      style.textContent = `
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `;
      document.head.appendChild(style);
    }
  };
  
  // High contrast mode support
  const handleHighContrast = () => {
    if (window.matchMedia('(forced-colors: active)').matches) {
      document.body.classList.add('high-contrast');
    }
    
    window.matchMedia('(forced-colors: active)').addEventListener('change', (e) => {
      if (e.matches) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
    });
  };
  
  // Mobile optimizations
  const optimizeMobile = () => {
    if (window.innerWidth <= 768) {
      // Enhance mobile touch interactions
      const cards = document.querySelectorAll('.grid.cards > *');
      cards.forEach(card => {
        card.addEventListener('touchstart', function() {
          this.style.transform = 'translateY(-1px)';
          this.style.opacity = '0.9';
        }, { passive: true });
        
        card.addEventListener('touchend', function() {
          setTimeout(() => {
            this.style.transform = '';
            this.style.opacity = '';
          }, 150);
        }, { passive: true });
      });
      
      // Improve button touch targets
      const buttons = document.querySelectorAll('.md-button');
      buttons.forEach(button => {
        button.style.minHeight = '44px'; // Accessibility guideline
        button.style.minWidth = '44px';
      });
    }
  };
  
  // Initialize all enhancements
  enhanceButtons();
  enhanceCards();
  enhanceIcons();
  handleColorScheme();
  optimizePerformance();
  enhanceAccessibility();
  handleReducedMotion();
  handleHighContrast();
  optimizeMobile();
  
  // Handle window resize
  window.addEventListener('resize', () => {
    optimizeMobile();
  }, { passive: true });
  
  // Re-enhance dynamically added content
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        // Re-run enhancements for new content
        enhanceButtons();
        enhanceCards();
        enhanceIcons();
      }
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}); 