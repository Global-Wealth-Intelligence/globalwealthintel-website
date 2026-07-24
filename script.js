// GlobalWealthIntel — site interactions

document.addEventListener('DOMContentLoaded', () => {

  // Mobile nav toggle
    const navToggle = document.getElementById('nav-toggle');
      const mainNav = document.getElementById('main-nav');

        if (navToggle && mainNav) {
            navToggle.addEventListener('click', () => {
                  mainNav.classList.toggle('is-open');
                      });

                          mainNav.querySelectorAll('a').forEach((link) => {
                                link.addEventListener('click', () => {
                                        mainNav.classList.remove('is-open');
                                              });
                                                  });
                                                    }


                                                      // Footer year
                                                        const yearEl = document.getElementById('year');
                                                          if (yearEl) {
                                                            yearEl.textContent = new Date().getFullYear();
                                                              }


                                                                // Scroll reveal animations
                                                                  const revealTargets = document.querySelectorAll('.pillar, .signal-card, .product-card, .hero-inner, .newsletter-inner');
                                                                    revealTargets.forEach((el) => el.classList.add('reveal'));

                                                                      const observer = new IntersectionObserver((entries) => {
                                                                        entries.forEach((entry) => {
                                                                          if (entry.isIntersecting) {
                                                                            entry.target.classList.add('is-visible');
                                                                              observer.unobserve(entry.target);
                                                                                }
                                                                                  });
                                                                                    }, { threshold: 0.15 });

                                                                                      revealTargets.forEach((el) => observer.observe(el));


                                                                                        // Newsletter form placeholder handling
                                                                                          const form = document.getElementById('newsletter-form');
                                                                                            const note = document.getElementById('form-note');

                                                                                              if (form && note) {
                                                                                                form.addEventListener('submit', (e) => {
                                                                                                  e.preventDefault();
                                                                                                    note.textContent = 'Thanks - this form is not yet connected to an email provider. Please check back soon.';
                                                                                                      });
                                                                                                        }
                                                                                                        
                                                                                                        });
                                                                                                        
