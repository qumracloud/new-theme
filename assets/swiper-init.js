// Enhanced Swiper Initialization Script
document.addEventListener('DOMContentLoaded', function() {
  
  // ===== HERO SWIPER INITIALIZATION =====
  const heroSwiperElement = document.querySelector('.hero-swiper');
  if (heroSwiperElement) {
    const autoplayDelay = parseInt(heroSwiperElement.dataset.autoplayDelay) || 5000;
    const showNavigation = heroSwiperElement.dataset.showNavigation !== 'false';
    const showPagination = heroSwiperElement.dataset.showPagination !== 'false';
    const effect = heroSwiperElement.dataset.effect || 'fade';
    const loop = heroSwiperElement.dataset.loop !== 'false';
    
    const heroSwiper = new Swiper('.hero-swiper', {
      // Core settings
      loop: loop,
      effect: effect,
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 0,
      
      // Fade effect configuration
      fadeEffect: {
        crossFade: true
      },
      
      // Performance optimizations
      preloadImages: false,
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 1,
        checkInView: true
      },
      
      // Autoplay with enhanced controls
      autoplay: {
        delay: autoplayDelay,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        stopOnLastSlide: false,
        reverseDirection: false
      },
      
      // Enhanced navigation
      navigation: showNavigation ? {
        nextEl: '#hero-next',
        prevEl: '#hero-prev',
        hideOnClick: false
      } : false,
      
      // Enhanced pagination
      pagination: showPagination ? {
        el: '.hero-pagination',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3
      } : false,
      
      // Touch and interaction - Mobile optimized
      grabCursor: true,
      allowTouchMove: true,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: true,
      touchStartPreventDefault: false,
      touchMoveStopPropagation: false,
      touchReleaseOnEdges: true,
      resistanceRatio: 0.85,
      
      // Keyboard navigation
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
      },
      
      // Accessibility
      a11y: {
        enabled: true,
        prevSlideMessage: 'الشريحة السابقة',
        nextSlideMessage: 'الشريحة التالية',
        firstSlideMessage: 'هذه هي الشريحة الأولى',
        lastSlideMessage: 'هذه هي الشريحة الأخيرة'
      },
      
      // Responsive breakpoints
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 0
        }
      },
      
      // Events
      on: {
        init: function() {
          console.log('Hero Swiper initialized');
        },
        slideChange: function() {
          // Add any slide change logic here
        }
      }
    });

    // Pause autoplay on hover for better UX
    const heroContainer = document.querySelector('.hero-swiper-container');
    if (heroContainer) {
      heroContainer.addEventListener('mouseenter', () => {
        heroSwiper.autoplay.stop();
      });
      heroContainer.addEventListener('mouseleave', () => {
        heroSwiper.autoplay.start();
      });
    }
  }

  // ===== BANNER SWIPER INITIALIZATION =====
  const bannerSwiperElement = document.querySelector('.banner-swiper');
  if (bannerSwiperElement) {
    const autoplayDelay = parseInt(bannerSwiperElement.dataset.autoplayDelay) || 4000;
    const showNavigation = bannerSwiperElement.dataset.showNavigation !== 'false';
    const showPagination = bannerSwiperElement.dataset.showPagination !== 'false';
    const effect = bannerSwiperElement.dataset.effect || 'slide';
    const loop = bannerSwiperElement.dataset.loop !== 'false';
    
    const bannerSwiper = new Swiper('.banner-swiper', {
      // Core settings
      loop: loop,
      effect: effect,
      speed: 600,
      slidesPerView: 1,
      spaceBetween: 0,
      
      // Performance optimizations
      preloadImages: false,
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 1,
        checkInView: true
      },
      
      // Autoplay with enhanced controls
      autoplay: {
        delay: autoplayDelay,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        stopOnLastSlide: false,
        reverseDirection: false
      },
      
      // Enhanced navigation
      navigation: showNavigation ? {
        nextEl: '#banner-next',
        prevEl: '#banner-prev',
        hideOnClick: false
      } : false,
      
      // Enhanced pagination
      pagination: showPagination ? {
        el: '.banner-pagination',
        clickable: true,
        dynamicBullets: false
      } : false,
      
      // Touch and interaction - Mobile optimized
      grabCursor: true,
      allowTouchMove: true,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: true,
      touchStartPreventDefault: false,
      touchMoveStopPropagation: false,
      touchReleaseOnEdges: true,
      resistanceRatio: 0.85,
      
      // Keyboard navigation
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
      },
      
      // Accessibility
      a11y: {
        enabled: true,
        prevSlideMessage: 'الشريحة السابقة',
        nextSlideMessage: 'الشريحة التالية',
        firstSlideMessage: 'هذه هي الشريحة الأولى',
        lastSlideMessage: 'هذه هي الشريحة الأخيرة'
      },
      
      // Responsive breakpoints
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 0
        }
      },
      
      // Events
      on: {
        init: function() {
          console.log('Banner Swiper initialized');
        },
        slideChange: function() {
          // Add any slide change logic here
        }
      }
    });

    // Pause autoplay on hover for better UX
    const bannerContainer = document.querySelector('.banner-swiper-container');
    if (bannerContainer) {
      bannerContainer.addEventListener('mouseenter', () => {
        bannerSwiper.autoplay.stop();
      });
      bannerContainer.addEventListener('mouseleave', () => {
        bannerSwiper.autoplay.start();
      });
    }
  }

  // ===== MOBILE OPTIMIZATIONS =====
  
  // Mobile-specific optimizations
  if (window.innerWidth <= 768) {
    // Reduce autoplay speed on mobile for better UX
    const mobileHeroSwiper = document.querySelector('.hero-swiper');
    const mobileBannerSwiper = document.querySelector('.banner-swiper');
    
    if (mobileHeroSwiper && window.heroSwiper) {
      window.heroSwiper.autoplay.stop();
      window.heroSwiper.autoplay.start();
    }
    
    if (mobileBannerSwiper && window.bannerSwiper) {
      window.bannerSwiper.autoplay.stop();
      window.bannerSwiper.autoplay.start();
    }
    
    // Add mobile-specific touch handling
    document.addEventListener('touchstart', function(e) {
      if (e.target.closest('.hero-swiper-container, .banner-swiper-container')) {
        e.target.style.touchAction = 'pan-y';
      }
    }, { passive: true });
  }

  // ===== PERFORMANCE OPTIMIZATION =====
  // Intersection Observer for lazy loading
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px 0px', // Load images 50px before they come into view
      threshold: 0.1
    });

    // Observe all images with data-src
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
  
  // ===== MOBILE RESPONSIVE HANDLING =====
  // Handle orientation changes
  window.addEventListener('orientationchange', function() {
    setTimeout(() => {
      if (window.heroSwiper) {
        window.heroSwiper.update();
      }
      if (window.bannerSwiper) {
        window.bannerSwiper.update();
      }
    }, 100);
  });
  
  // Handle window resize
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (window.heroSwiper) {
        window.heroSwiper.update();
      }
      if (window.bannerSwiper) {
        window.bannerSwiper.update();
      }
    }, 250);
  });

  // ===== ENHANCED DRAG EFFECTS =====
  
  // Add drag effects to hero and banner sections
  const heroContainer = document.querySelector('.hero-swiper-container');
  const bannerContainer = document.querySelector('.banner-swiper-container');
  
  // Enhanced drag behavior for hero section
  if (heroContainer) {
    heroContainer.addEventListener('mousedown', function(e) {
      this.style.cursor = 'grabbing';
      // Disable all links during drag
      const links = this.querySelectorAll('a');
      links.forEach(link => {
        link.style.pointerEvents = 'none';
      });
    });
    
    heroContainer.addEventListener('mouseup', function(e) {
      this.style.cursor = 'grab';
      // Re-enable links after drag
      const links = this.querySelectorAll('a');
      links.forEach(link => {
        link.style.pointerEvents = 'auto';
      });
    });
    
    heroContainer.addEventListener('mouseleave', function(e) {
      this.style.cursor = 'grab';
      // Re-enable links when mouse leaves
      const links = this.querySelectorAll('a');
      links.forEach(link => {
        link.style.pointerEvents = 'auto';
      });
    });
  }
  
  // Enhanced drag behavior for banner section
  if (bannerContainer) {
    bannerContainer.addEventListener('mousedown', function(e) {
      this.style.cursor = 'grabbing';
      // Disable all links during drag
      const links = this.querySelectorAll('a');
      links.forEach(link => {
        link.style.pointerEvents = 'none';
      });
    });
    
    bannerContainer.addEventListener('mouseup', function(e) {
      this.style.cursor = 'grab';
      // Re-enable links after drag
      const links = this.querySelectorAll('a');
      links.forEach(link => {
        link.style.pointerEvents = 'auto';
      });
    });
    
    bannerContainer.addEventListener('mouseleave', function(e) {
      this.style.cursor = 'grab';
      // Re-enable links when mouse leaves
      const links = this.querySelectorAll('a');
      links.forEach(link => {
        link.style.pointerEvents = 'auto';
      });
    });
  }
  
  // Disable image drag globally for swiper images
  document.addEventListener('dragstart', function(e) {
    if (e.target.closest('.hero-swiper, .banner-swiper')) {
      e.preventDefault();
      return false;
    }
  });
  
  // Prevent context menu on swiper images
  document.addEventListener('contextmenu', function(e) {
    if (e.target.closest('.hero-swiper, .banner-swiper')) {
      e.preventDefault();
      return false;
    }
  });
});
