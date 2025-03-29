// For Wix Velo
import wixWindow from 'wix-window';

$w.onReady(function () {
    const iframe = $w('#HTML1'); // Update this ID to match your iframe's ID in Wix

    // Set iframe properties
    iframe.src = 'https://spectacular-kashata-e31c28.netlify.app';
    
    // Make iframe responsive
    wixWindow.addEventListener('viewportChange', () => {
        const viewport = wixWindow.viewportSize;
        iframe.height = `${viewport.height}px`;
    });

    // Initial size
    const viewport = wixWindow.viewportSize;
    iframe.height = `${viewport.height}px`;
}); 