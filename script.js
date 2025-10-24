// Lazy load
const images = document.querySelectorAll('img');

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const img = entry.target;

        try {
            const attrSrc = img.getAttribute('src');
            const src = attrSrc || img.src || '';

            const dataSrc = img.dataset && img.dataset.src;
            let newSrc = dataSrc || '';

            if (!newSrc) {
                if (/([?&])w=\d+/.test(src)) {
                    newSrc = src.replace(/([?&])w=\d+/, `$1w=1000`);
                } else if (src.indexOf('?') === -1) {
                    newSrc = src + '?w=1000';
                } else {
                    newSrc = src + '&w=1000';
                }
            }

            if (!newSrc) {
                obs.unobserve(img);
                return;
            }

            const onLoad = () => {
                img.classList.remove('is-loading');
                const spinner = img.nextElementSibling;
                if (spinner && spinner.classList && spinner.classList.contains('spinner')) {
                    spinner.classList.add('hidden');
                }
                img.removeEventListener('load', onLoad);
            };

            img.addEventListener('load', onLoad);

            img.src = newSrc;
            console.log('Requested high-res image:', newSrc);

            obs.unobserve(img);
        } catch (err) {
            console.error('Lazyload error for image:', err, entry.target);
            try { obs.unobserve(entry.target);
                entry.target.src = ''; 
            } catch (e) {
                console.error('Error resetting image source:', e);
            }
        }
    });
}, { rootMargin: '200px' });

images.forEach((image) => {
    observer.observe(image);
});
