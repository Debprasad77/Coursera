// Initialize gallery on page load
function initGallery() {
    console.log("Gallery initialized - adding tabindex to all images");
    addTabIndex();
}

// Function to add tabindex to all images
function addTabIndex() {
    const images = document.querySelectorAll('.previewPic');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        console.log(`Added tabindex to image ${i + 1}`);
    }
}

// Update preview when hovering/focusing on an image
function upDate(previewPic) {
    console.log("Event triggered - displaying image:", previewPic.alt);
    const previewDiv = document.getElementById('image');
    
    // Update text content
    previewDiv.textContent = previewPic.alt;
    
    // Update background image
    previewDiv.style.backgroundImage = `url('${previewPic.src}')`;
    previewDiv.style.color = "white";
    previewDiv.style.textShadow = "1px 1px 2px black";
}

// Revert preview when mouse leaves/blurs
function undo() {
    console.log("Event ended - resetting preview");
    const previewDiv = document.getElementById('image');
    
    // Revert to original state
    previewDiv.style.backgroundImage = "url('')";
    previewDiv.textContent = "Hover over or focus on an image below to display here.";
    previewDiv.style.color = "#555";
    previewDiv.style.textShadow = "none";
}