// JavaScript for Arabic E-commerce Website

document.addEventListener("DOMContentLoaded", function () {
  // Initialize all components
  initializeSearch();
  initializeProductCards();
  initializeFAQ();
  initializeQuantitySelectors();
  initializeCarousel();
  initializeMobileMenu();
  initializeScrollEffects();
  initializeCartFunctionality();
  initializeMobileHeaderToggles();
});

// Search functionality
function initializeSearch() {
  const searchInput = document.querySelector(".search-input");
  const searchButton = document.querySelector(".search-button");

  if (searchInput && searchButton) {
    searchButton.addEventListener("click", function (e) {
      e.preventDefault();
      performSearch(searchInput.value);
    });

    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        performSearch(this.value);
      }
    });

    // Add search suggestions (placeholder functionality)
    searchInput.addEventListener("input", function () {
      // This would typically connect to a search API
      console.log("Searching for:", this.value);
    });
  }
}

function performSearch(query) {
  if (query.trim()) {
    console.log("Performing search for:", query);
    // Here you would typically send the search query to your backend
    // For now, we'll just show an alert
    alert(`البحث عن: ${query}`);
  }
}

// Product cards functionality
function initializeProductCards() {
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((card) => {
    // Add hover effects
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });

    // Add to cart functionality
    const addToCartBtn = card.querySelector(".add-to-cart");
    if (addToCartBtn) {
      addToCartBtn.addEventListener("click", function (e) {
        e.preventDefault();
        addToCart(card);
      });
    }
  });
}

// FAQ accordion functionality
function initializeFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const button = item.querySelector("button");
    const content = item.querySelector(".faq-content");
    const icon = button.querySelector("i");

    if (button && content && icon) {
      button.addEventListener("click", function () {
        const isActive = item.classList.contains("active");

        // Close all other FAQ items
        faqItems.forEach((otherItem) => {
          otherItem.classList.remove("active");
          const otherIcon = otherItem.querySelector("button i");
          if (otherIcon) {
            otherIcon.className = "fas fa-plus text-primary";
          }
        });

        // Toggle current item
        if (!isActive) {
          item.classList.add("active");
          icon.className = "fas fa-minus text-primary";
        } else {
          item.classList.remove("active");
          icon.className = "fas fa-plus text-primary";
        }
      });
    }
  });
}

// Quantity selector functionality
function initializeQuantitySelectors() {
  const quantitySelectors = document.querySelectorAll(".quantity-selector");

  quantitySelectors.forEach((selector) => {
    const minusBtn = selector.querySelector(".quantity-minus");
    const plusBtn = selector.querySelector(".quantity-plus");
    const input = selector.querySelector(".quantity-input");

    if (minusBtn && plusBtn && input) {
      minusBtn.addEventListener("click", function () {
        let value = parseInt(input.value) || 1;
        if (value > 1) {
          input.value = value - 1;
          updateCartTotal();
        }
      });

      plusBtn.addEventListener("click", function () {
        let value = parseInt(input.value) || 1;
        input.value = value + 1;
        updateCartTotal();
      });

      input.addEventListener("change", function () {
        let value = parseInt(this.value) || 1;
        if (value < 1) value = 1;
        this.value = value;
        updateCartTotal();
      });
    }
  });
}

// Carousel functionality (for product sliders)
function initializeCarousel() {
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
    const prevBtn = carousel.querySelector(".carousel-prev");
    const nextBtn = carousel.querySelector(".carousel-next");
    const slides = carousel.querySelector(".carousel-slides");

    if (prevBtn && nextBtn && slides) {
      let currentSlide = 0;
      const totalSlides = slides.children.length;

      prevBtn.addEventListener("click", function () {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
      });

      nextBtn.addEventListener("click", function () {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
      });

      function updateCarousel() {
        const translateX = -currentSlide * 100;
        slides.style.transform = `translateX(${translateX}%)`;
      }

      // Auto-play carousel
      setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
      }, 5000);
    }
  });
}

// Mobile menu functionality
function initializeMobileMenu() {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
      this.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.remove("active");
        mobileMenuBtn.classList.remove("active");
      }
    });
  }
}

// Scroll effects
function initializeScrollEffects() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, observerOptions);

  // Observe all sections
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    observer.observe(section);
  });

  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
}

// Cart functionality
function initializeCartFunctionality() {
  const cartIcon = document.querySelector(".cart-icon");
  const cartCount = document.querySelector(".cart-count");

  // Initialize cart from localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  updateCartCount();

  function updateCartCount() {
    if (cartCount) {
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      cartCount.textContent = totalItems;
      cartCount.style.display = totalItems > 0 ? "flex" : "none";
    }
  }

  window.addToCart = function (productCard) {
    const productName = productCard.querySelector("h3").textContent;
    const productPrice =
      productCard.querySelector(".price-current").textContent;
    const productImage = productCard.querySelector("img").src;

    const product = {
      id: Date.now(),
      name: productName,
      price: productPrice,
      image: productImage,
      quantity: 1,
    };

    // Check if product already exists in cart
    const existingProduct = cart.find((item) => item.name === product.name);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push(product);
    }

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();

    // Show success message
    showNotification("تم إضافة المنتج إلى السلة", "success");
  };

  window.removeFromCart = function (productId) {
    cart = cart.filter((item) => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    showNotification("تم حذف المنتج من السلة", "info");
  };

  window.updateCartTotal = function () {
    // This would calculate and update the cart total
    console.log("Updating cart total...");
  };
}

// Notification system
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${
          type === "success"
            ? "#10b981"
            : type === "error"
            ? "#ef4444"
            : "#3b82f6"
        };
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Close functionality
  const closeBtn = notification.querySelector(".notification-close");
  closeBtn.addEventListener("click", function () {
    closeNotification(notification);
  });

  // Auto close after 3 seconds
  setTimeout(() => {
    closeNotification(notification);
  }, 3000);
}

function closeNotification(notification) {
  notification.style.transform = "translateX(100%)";
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 300);
}

// Form validation
function validateForm(form) {
  const inputs = form.querySelectorAll("input[required], textarea[required]");
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.classList.add("error");
      isValid = false;
    } else {
      input.classList.remove("error");
    }
  });

  return isValid;
}

// Price formatting
function formatPrice(price) {
  return new Intl.NumberFormat("ar-EG", {
    style: "currency",
    currency: "EGP",
  }).format(price);
}

// Image lazy loading
function initializeLazyLoading() {
  const images = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        observer.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeLazyLoading);

// Countdown Timer for Offer Section
(function () {
  // Set the offer end date (2 days from now)
  var offerEnd = new Date();
  offerEnd.setDate(offerEnd.getDate() + 2);
  offerEnd.setHours(5, 30, 56, 0); // 5:30:56

  function updateCountdown() {
    var now = new Date();
    var diff = offerEnd - now;
    if (diff < 0) diff = 0;
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    var minutes = Math.floor((diff / (1000 * 60)) % 60);
    var seconds = Math.floor((diff / 1000) % 60);
    document.getElementById("days").textContent = days
      .toString()
      .padStart(2, "0");
    document.getElementById("hours").textContent = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").textContent = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").textContent = seconds
      .toString()
      .padStart(2, "0");
  }
  setInterval(updateCountdown, 1000);
  updateCountdown();
})();

// Utility functions
const utils = {
  // Debounce function for search
  debounce: function (func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Format numbers in Arabic
  formatNumberArabic: function (number) {
    const arabicNumbers = "٠١٢٣٤٥٦٧٨٩";
    return number.toString().replace(/[0-9]/g, (w) => arabicNumbers[+w]);
  },

  // Get URL parameters
  getUrlParameter: function (name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    const results = regex.exec(location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  },
};

// Export functions for use in other scripts
window.ecommerceApp = {
  addToCart: window.addToCart,
  removeFromCart: window.removeFromCart,
  showNotification,
  validateForm,
  formatPrice,
  utils,
};

function initializeMobileHeaderToggles() {
  // Search overlay
  const searchBtn = document.querySelector(".search-btn");
  const searchOverlay = document.querySelector(".search-overlay");
  const searchOverlayClose = document.querySelector(".search-overlay-close");
  if (searchBtn && searchOverlay && searchOverlayClose) {
    searchBtn.addEventListener("click", function () {
      searchOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        const input = searchOverlay.querySelector(".search-overlay-input");
        if (input) input.focus();
      }, 100);
    });
    searchOverlayClose.addEventListener("click", function () {
      searchOverlay.classList.remove("active");
      document.body.style.overflow = "";
    });
    // Close overlay on outside click
    searchOverlay.addEventListener("click", function (e) {
      if (e.target === searchOverlay) {
        searchOverlay.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }
  // Mobile menu
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", function () {
      mobileMenu.classList.add("active");
      document.body.style.overflow = "hidden";
    });
    // Close menu on outside click
    document.addEventListener("click", function (e) {
      if (
        mobileMenu.classList.contains("active") &&
        !mobileMenu.contains(e.target) &&
        !menuBtn.contains(e.target)
      ) {
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }
}


