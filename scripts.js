document.addEventListener('DOMContentLoaded', () => {

            // --- Menu Móvel ---
            const mobileNavToggle = document.getElementById('mobile-nav-toggle');
            const navLinks = document.getElementById('nav-links');

            if (mobileNavToggle && navLinks) {
                mobileNavToggle.addEventListener('click', () => {
                    const isActive = navLinks.classList.toggle('active');
                    // Keep aria-expanded in sync
                    mobileNavToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
                });
            }

            // --- Modal de Chat ---
            const modal = document.getElementById('chat-modal');
            const openChatButtons = document.querySelectorAll('.open-chat');
            const closeModalButton = document.getElementById('close-modal');
            let lastOpenTrigger = null;

            // Abrir modal
            openChatButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (!modal) return;
                    lastOpenTrigger = button;
                    modal.style.display = 'block';
                    // move focus to modal for accessibility
                    const focusable = modal.querySelector('input, button, [tabindex]');
                    if (focusable) focusable.focus();
                });
            });

            // Fechar modal no 'X'
            if (closeModalButton) {
                closeModalButton.addEventListener('click', () => {
                    if (!modal) return;
                    modal.style.display = 'none';
                    if (lastOpenTrigger) lastOpenTrigger.focus();
                });
            }

            // Fechar modal clicando fora
            // Click outside modal to close
            window.addEventListener('click', (e) => {
                if (!modal) return;
                if (e.target == modal) {
                    modal.style.display = 'none';
                    if (lastOpenTrigger) lastOpenTrigger.focus();
                }
            });

            // Close modal with Escape key
            window.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' || e.key === 'Esc') {
                    if (!modal) return;
                    if (modal.style.display === 'block') {
                        modal.style.display = 'none';
                        if (lastOpenTrigger) lastOpenTrigger.focus();
                    }
                }
            });

            // --- Features cards entrance animation ---
            const featuresGrid = document.querySelector('.features-grid');
            if (featuresGrid && 'IntersectionObserver' in window) {
                const items = Array.from(featuresGrid.querySelectorAll('.feature-item'));
                items.forEach((it, i) => it.setAttribute('data-order', String(i)));

                const obs = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            featuresGrid.classList.add('in-view');
                            // equalize heights after a short delay so layout stabilizes
                            setTimeout(() => equalizeFeatureHeights(), 30);
                        } else {
                            // remove so animation can replay when re-entering
                            featuresGrid.classList.remove('in-view');
                        }
                    });
                }, { threshold: 0.2, rootMargin: '0px' });

                obs.observe(featuresGrid);
            } else if (featuresGrid) {
                // fallback: immediately show
                featuresGrid.classList.add('in-view');
            }

            // --- Equalize feature card heights ---
            const equalizeFeatureHeights = () => {
                const items = Array.from(document.querySelectorAll('.features-grid .feature-item'));
                if (!items.length) return;
                // reset
                items.forEach(it => it.style.height = '');
                // compute max
                const max = items.reduce((m, it) => Math.max(m, it.getBoundingClientRect().height), 0);
                // apply
                items.forEach(it => it.style.height = `${Math.ceil(max)}px`);
            };

            // debounce helper
            let resizeTimer = null;
            const onResize = () => {
                if (resizeTimer) clearTimeout(resizeTimer);
                resizeTimer = setTimeout(() => {
                    equalizeFeatureHeights();
                }, 120);
            };

            // run after in-view animation (observer will call it). Keep resize handler to recompute.
            window.addEventListener('resize', onResize);

            // also recompute shortly after features become visible
            if (featuresGrid) {
                const observer2 = new MutationObserver(() => {
                    equalizeFeatureHeights();
                });
                observer2.observe(featuresGrid, { attributes: true, attributeFilter: ['class'] });
            }

            // --- Contact form handling (final-cta) ---
            const contactForm = document.getElementById('contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    // basic validation: name and email
                    const name = contactForm.querySelector('#name');
                    const email = contactForm.querySelector('#email');
                    if (!name.value.trim() || !email.value.trim()) {
                        // show a simple alert for now
                        alert('Por favor, preencha Nome e Email.');
                        return;
                    }

                    // simulate success
                    const success = document.createElement('div');
                    success.className = 'form-success';
                    success.textContent = 'Mensagem enviada — obrigado! Entraremos em contato em breve.';
                    contactForm.appendChild(success);

                    // reset after brief delay
                    setTimeout(() => {
                        contactForm.reset();
                        if (success && success.parentNode) success.parentNode.removeChild(success);
                    }, 2200);
                });
            }

            // --- Back to top button ---
            const backToTop = document.getElementById('back-to-top');
            if (backToTop) {
                backToTop.style.display = 'none';
                window.addEventListener('scroll', () => {
                    if (window.scrollY > 300) backToTop.style.display = 'block';
                    else backToTop.style.display = 'none';
                });

                backToTop.addEventListener('click', () => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            }
        });