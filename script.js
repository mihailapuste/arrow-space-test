document.addEventListener('DOMContentLoaded', () => {
    initializeToggleButton();
    initializeFaqItems();
    initializeSearchContainer();
    initializeLoginModal();
});

function initializeSearchContainer() {
    const searchInput = document.querySelector('.search-input');
    const searchContainer = document.querySelector('.search-container');
    
    if (searchInput && searchContainer) {
        searchInput.addEventListener('focus', function() {
            searchContainer.classList.add('search-container-focused');
        });
        
        searchInput.addEventListener('blur', function() {
            searchContainer.classList.remove('search-container-focused');
        });
    }
}

function initializeToggleButton() {
    const toggleButton = document.getElementById('toggleButton');
    const secondRowCards = document.querySelectorAll('.second-row');
    const toggleIcon = document.querySelector('.toggle-icon');
    const toggleText = document.querySelector('.toggle-text');

    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            const isHidden = secondRowCards[0].style.display === 'none' || secondRowCards[0].style.display === '';

            secondRowCards.forEach(card => {
                if (isHidden) {
                    card.style.display = 'flex';
                    void card.offsetWidth;
                    card.style.opacity = '1';
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300); 
                }
            });

            toggleText.textContent = isHidden ? 'View less' : 'View more';

            if (isHidden) {
                toggleIcon.classList.remove('down-icon');
                toggleIcon.classList.add('up-icon');
                return;
            } 

            toggleIcon.classList.remove('up-icon');
            toggleIcon.classList.add('down-icon');
        });
    }
}

function initializeFaqItems() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const faqContent = item.querySelector('.faq-content');
        
        faqContent.addEventListener('click', function() {
            const currentState = item.getAttribute('data-state');
            
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.setAttribute('data-state', 'collapsed');
                }
            });
            
            if (currentState === 'collapsed') {
                item.setAttribute('data-state', 'expanded');
            } else {
                item.setAttribute('data-state', 'collapsed');
            }
        });
    });
}

function initializeLoginModal() {
    const loginButton = document.getElementById('loginTriggerButton');
    const modal = document.getElementById('loginModal');
    const closeButton = document.querySelector('.close-modal');
    

    if (loginButton) {
        loginButton.addEventListener('click', function() {
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        });
    }
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });

}
