// Function to update the preview when hovering over an image
function upDate(previewPic) {
    // Logging for debugging (Step 3 & 4)
    console.log("Mouseover event triggered");
    console.log("Image source:", previewPic.src);
    console.log("Image alt text:", previewPic.alt);

    // Change the text of the preview div (Step 5)
    document.getElementById('image').innerHTML = previewPic.alt;
    
    // Change the background image of the preview div (Step 7)
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
    
    // Additional visual feedback
    document.getElementById('image').style.color = "white";
    document.getElementById('image').style.textShadow = "1px 1px 2px black";
}

// Function to revert changes when mouse leaves the image
function undo() {
    // Logging for debugging
    console.log("Mouseout event triggered");
    
    // Revert to original background (Step 10)
    document.getElementById('image').style.backgroundImage = "url('')";
    
    // Revert to original text (Step 11)
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
    
    // Reset text styling
    document.getElementById('image').style.color = "#555";
    document.getElementById('image').style.textShadow = "none";
}