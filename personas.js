document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('personaModal');
    const track = document.querySelector('.gallery-track');
    const images = track.querySelectorAll('.gallery-image');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const closeBtn = document.querySelector('.close-btn');
    const counter = document.querySelector('.counter');
    let currentIndex = 0;
    const totalImages = images.length;

    // Ouvrir le modal
    document.getElementById('openGallery').onclick = function() {
        modal.style.display = 'block';
        updateGallery();
    }

    // Navigation
    function updateGallery() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        counter.textContent = `${currentIndex + 1}/${totalImages}`;
    }

    prevBtn.onclick = function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateGallery();
        }
    }

    nextBtn.onclick = function() {
        if (currentIndex < totalImages - 1) {
            currentIndex++;
            updateGallery();
        }
    }

    // Fermer le modal
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    // Fermer avec Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            currentIndex--;
            updateGallery();
        }
        if (e.key === 'ArrowRight' && currentIndex < totalImages - 1) {
            currentIndex++;
            updateGallery();
        }
    });
});