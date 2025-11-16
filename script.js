/* ============================================
   PORTFOLIO JQUERY FUNCTIONALITY
   ============================================ */

$(document).ready(function() {
    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    $('#menuToggle').on('click', function() {
        $(this).toggleClass('active');
        $('#navMenu').toggleClass('active');
    });

    // Close menu when a link is clicked
    $('.nav-link').on('click', function() {
        $('#menuToggle').removeClass('active');
        $('#navMenu').removeClass('active');
    });

    // ============================================
    // SMOOTH SCROLL FOR NAVIGATION LINKS
    // ============================================
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.getAttribute('href'));
        if(target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 1000);
        }
    });

    // ============================================
    // PROJECT SLIDER FUNCTIONALITY
    // ============================================
    var projectImages = {
        'bahl': [
            'portfolioImages/BAHL/1BAL.jpg',
            'portfolioImages/BAHL/2BAL.jpg',
            'portfolioImages/BAHL/3BAL.jpg',
            'portfolioImages/BAHL/3BAL(1).jpg',
            'portfolioImages/BAHL/4BAL.jpg',
            'portfolioImages/BAHL/5BAL.jpg',
            'portfolioImages/BAHL/6BAL.jpg',
            'portfolioImages/BAHL/7BAL.jpg',
            'portfolioImages/BAHL/8BAL.jpg',
            'portfolioImages/BAHL/9BAL.jpg',
            'portfolioImages/BAHL/10BAL.jpg'
        ],
        'bankcorp': [
            'portfolioImages/BankCorp/Screenshot_20210719-114324.png',
            'portfolioImages/BankCorp/Screenshot_20210719-114337.png',
            'portfolioImages/BankCorp/Screenshot_20210719-114344.png',
            'portfolioImages/BankCorp/Screenshot_20210719-114423.png',
            'portfolioImages/BankCorp/Screenshot_20210719-114427.png',
            'portfolioImages/BankCorp/Screenshot_20210719-114444.png',
            'portfolioImages/BankCorp/Screenshot_20210719-114450.png',
            'portfolioImages/BankCorp/Screenshot_20210719-114455.png',
            'portfolioImages/BankCorp/Screenshot_20210719-114507.png',
            'portfolioImages/BankCorp/Screenshot_20210719-114529.png',
            'portfolioImages/BankCorp/Screenshot_20210719-114535.png',
            'portfolioImages/BankCorp/Screenshot_20210719-114541.png',
            'portfolioImages/BankCorp/Screenshot_20210719-114614.png',
            'portfolioImages/BankCorp/Screenshot_20210719-114622.png',
            'portfolioImages/BankCorp/Screenshot_20210719-114626.png',
            'portfolioImages/BankCorp/Screenshot_20210719-114632.png',
            'portfolioImages/BankCorp/Screenshot_20210719-114638.png'
        ],
        'debitcredit': [
            'portfolioImages/DebitCredit/1DC.jpg',
            'portfolioImages/DebitCredit/2DC.jpg',
            'portfolioImages/DebitCredit/3DC.jpg',
            'portfolioImages/DebitCredit/4DC.jpg',
            'portfolioImages/DebitCredit/5DC.jpg',
            'portfolioImages/DebitCredit/6DC.jpg',
            'portfolioImages/DebitCredit/7DC.jpg',
            'portfolioImages/DebitCredit/8DC.jpg',
            'portfolioImages/DebitCredit/9DC.jpg',
            'portfolioImages/DebitCredit/10DC.jpg'
        ],
        'scannpay': [
            'portfolioImages/ScanNPay/1SCANNPAY.jpg',
            'portfolioImages/ScanNPay/2SCANNPAY.jpg',
            'portfolioImages/ScanNPay/3SCANNPAY.jpg',
            'portfolioImages/ScanNPay/4SCANNPAY.jpg',
            'portfolioImages/ScanNPay/5SCANNPAY.jpg',
            'portfolioImages/ScanNPay/6SCANNPAY.jpg',
            'portfolioImages/ScanNPay/7SCANNPAY.jpg',
            'portfolioImages/ScanNPay/8SCANNPAY.jpg',
            'portfolioImages/ScanNPay/9SCANNPAY.jpg',
            'portfolioImages/ScanNPay/10SCANNPAY.jpg',
            'portfolioImages/ScanNPay/11SCANNPAY.jpg',
            'portfolioImages/ScanNPay/12SCANNPAY.jpg',
            'portfolioImages/ScanNPay/13SCANNPAY.jpg',
            'portfolioImages/ScanNPay/14SCANNPAY.jpg',
            'portfolioImages/ScanNPay/15SCANNPAY.jpg',
            'portfolioImages/ScanNPay/16SCANNPAY.jpg',
            'portfolioImages/ScanNPay/17SCANNPAY.jpg'
        ],
        'verilink': [
            'portfolioImages/profilepic.jpg'
        ],
        'keenu': [
            'portfolioImages/profilepic.jpg'
        ],
        'merchantwallet': [
            'portfolioImages/profilepic.jpg'
        ]
    };

    var currentImageIndex = {
        'bahl': 0,
        'bankcorp': 0,
        'debitcredit': 0,
        'scannpay': 0,
        'verilink': 0,
        'keenu': 0,
        'merchantwallet': 0
    };

    window.nextSlide = function(project) {
        var images = projectImages[project];
        if (!images || images.length === 0) return;

        currentImageIndex[project] = (currentImageIndex[project] + 1) % images.length;
        updateSlide(project);
    };

    window.prevSlide = function(project) {
        var images = projectImages[project];
        if (!images || images.length === 0) return;

        currentImageIndex[project] = (currentImageIndex[project] - 1 + images.length) % images.length;
        updateSlide(project);
    };

    function updateSlide(project) {
        var images = projectImages[project];
        if (!images || images.length === 0) return;

        var newSrc = images[currentImageIndex[project]];
        $('[data-project="' + project + '"] .project-image.active').fadeOut(300, function() {
            $(this).attr('src', newSrc).fadeIn(300);
        });
    }

    // ============================================
    // SCROLL ANIMATIONS (Fade In on Scroll)
    // ============================================
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    function animateOnScroll() {
        var cards = document.querySelectorAll('.project-card, .cert-card, .skill-category, .interest-card, .research-item, .timeline-content, .stat-card');
        
        cards.forEach(function(card) {
            if (isElementInViewport(card) && !$(card).hasClass('animated')) {
                $(card).addClass('animated').css({
                    'animation': 'fadeInUp 0.6s ease forwards'
                });
            }
        });
    }

    // Add animation keyframes
    var style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    // Trigger animation on scroll
    $(window).on('scroll', animateOnScroll);
    // Trigger animation on page load
    animateOnScroll();

    // ============================================
    // ACTIVE NAVIGATION LINK ON SCROLL
    // ============================================
    $(window).on('scroll', function() {
        var scrollPosition = $(document).scrollTop() + 100;

        $('.nav-link').removeClass('active');

        $('section').each(function() {
            var section = $(this);
            var sectionTop = section.offset().top;
            var sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                var id = section.attr('id');
                $('a[href="#' + id + '"]').addClass('active');
            }
        });
    });

    // ============================================
    // STATS COUNTER ANIMATION
    // ============================================
    var statsAnimated = false;
    
    function animateStats() {
        if (statsAnimated) return;
        
        $('.stat-number').each(function() {
            var target = parseInt($(this).text());
            var $this = $(this);
            
            $({ countNum: 0 }).animate({
                countNum: target
            }, {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum) + (target > 10 ? '+' : ''));
                },
                complete: function() {
                    $this.text(target + (target > 10 ? '+' : ''));
                }
            });
        });

        statsAnimated = true;
    }

    // Trigger stats animation when section comes into view
    $(window).on('scroll', function() {
        var statsSection = $('#about').offset().top;
        var windowHeight = $(window).height();
        var scrollPosition = $(window).scrollTop();

        if (scrollPosition + windowHeight > statsSection && !statsAnimated) {
            animateStats();
        }
    });

    // ============================================
    // SKILL TAG HOVER EFFECT
    // ============================================
    $('.skill-tag').on('mouseenter', function() {
        $(this).css({
            'box-shadow': '0 5px 15px rgba(52, 152, 219, 0.3)',
            'cursor': 'pointer'
        });
    }).on('mouseleave', function() {
        $(this).css({
            'box-shadow': 'none'
        });
    });

    // ============================================
    // COPY EMAIL TO CLIPBOARD
    // ============================================
    $('a[href^="mailto:"]').on('click', function(e) {
        // Allow default behavior but show feedback
        var email = $(this).attr('href').replace('mailto:', '');
        console.log('Contact: ' + email);
    });

    // ============================================
    // FORM VALIDATION (If you add a contact form)
    // ============================================
    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // ============================================
    // BACK TO TOP BUTTON
    // ============================================
    var backToTopBtn = $('<button id="backToTop" class="back-to-top" title="Back to top"><i class="fas fa-arrow-up"></i></button>');
    $('body').append(backToTopBtn);

    // Show/hide back to top button
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 300) {
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
        }
    });

    $('#backToTop').on('click', function() {
        $('html, body').animate({scrollTop: 0}, 800);
    });

    // Add CSS for back to top button
    var backToTopStyle = document.createElement('style');
    backToTopStyle.textContent = `
        .back-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #3498db, #2980b9);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            font-size: 1.2rem;
            display: none;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 15px rgba(52, 152, 219, 0.4);
            transition: all 0.3s ease;
            z-index: 999;
        }

        .back-to-top:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 20px rgba(52, 152, 219, 0.6);
        }

        @media (max-width: 480px) {
            .back-to-top {
                bottom: 20px;
                right: 20px;
                width: 45px;
                height: 45px;
                font-size: 1rem;
            }
        }
    `;
    document.head.appendChild(backToTopStyle);

    // ============================================
    // PARALLAX EFFECT ON HERO SECTION (Optional)
    // ============================================
    $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
        $('.hero').css({
            'background-position': '0% ' + (scrollTop * 0.5) + 'px'
        });
    });

    // ============================================
    // TOOLTIP FUNCTIONALITY
    // ============================================
    $('[title]').on('mouseenter', function() {
        var title = $(this).attr('title');
        if (title && !$(this).data('tooltipShown')) {
            $(this).attr('data-original-title', title).removeAttr('title');
            $(this).data('tooltipShown', true);
        }
    });

    // ============================================
    // LAZY LOAD IMAGES (For performance)
    // ============================================
    if ('IntersectionObserver' in window) {
        var imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(function(img) {
            imageObserver.observe(img);
        });
    }

    // ============================================
    // WINDOW RESIZE HANDLER
    // ============================================
    $(window).on('resize', function() {
        // Handle responsive adjustments if needed
        if ($(window).width() > 768) {
            $('#navMenu').removeClass('active');
            $('#menuToggle').removeClass('active');
        }
    });

    // ============================================
    // KEYBOARD NAVIGATION
    // ============================================
    $(document).on('keydown', function(e) {
        // ESC key to close mobile menu
        if (e.keyCode === 27) {
            $('#menuToggle').removeClass('active');
            $('#navMenu').removeClass('active');
        }
        
        // Implement keyboard navigation for sections if needed
    });

    // ============================================
    // PRELOAD IMAGES
    // ============================================
    var imagesToPreload = [
        'portfolioImages/profilepic.jpg'
    ];

    imagesToPreload.forEach(function(img) {
        new Image().src = img;
    });

    // ============================================
    // INITIAL SETUP
    // ============================================
    console.log('%c Portfolio Loaded Successfully! ', 'background: #3498db; color: white; font-size: 14px; padding: 5px 10px; border-radius: 3px;');
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance optimization
function debounce(func, wait) {
    var timeout;
    return function executedFunction(...args) {
        var later = function() {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function
function throttle(func, limit) {
    var inThrottle;
    return function() {
        var args = arguments;
        var context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(function() { inThrottle = false; }, limit);
        }
    };
}

// Log analytics if needed
function logPageView() {
    if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
            'page_path': window.location.pathname
        });
    }
}

// Initialize
logPageView();
