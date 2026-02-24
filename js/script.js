document.addEventListener('DOMContentLoaded', function() {
    const coquiButton = document.getElementById('coqui-button');
    const coquiSound = document.getElementById('coqui-sound');
    
    if (coquiButton && coquiSound) {
        coquiButton.addEventListener('mouseenter', function() {
            coquiSound.currentTime = 0; // Reset to start
            coquiSound.play().catch(function(error) {
                // Handle autoplay restrictions
                console.log('Audio play failed:', error);
            });
        });
        
        coquiButton.addEventListener('mouseleave', function() {
            coquiSound.pause();
            coquiSound.currentTime = 0; // Reset to start for next hover
        });
    }
});
