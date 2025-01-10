document.addEventListener('DOMContentLoaded', () => {
    const mochi = document.getElementById('mochi');
    let isAnimating = false;

    mochi.addEventListener('click', () => {
        if (isAnimating) return;
        isAnimating = true;

        // Stretching animation
        mochi.classList.add('stretching');
        
        setTimeout(() => {
            // Open and drip
            mochi.classList.remove('stretching');
            mochi.classList.add('open');
            
            setTimeout(() => {
                // Transform to loader
                mochi.classList.remove('open');
                mochi.classList.add('loading');
                
                // Reset after 5 seconds
                setTimeout(() => {
                    mochi.classList.remove('loading');
                    isAnimating = false;
                }, 5000);
            }, 1500); // Adjust this timing to allow for dripping animation
        }, 500); // Stretching duration
    });
});

