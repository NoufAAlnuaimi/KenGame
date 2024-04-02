function allowDrop(ev) {
    ev.preventDefault();
}

// Specify what data is being dragged. In this case, the image's ID
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

// Handle the drop of the image into a slot
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var dragElement = document.getElementById(data);

    var target = ev.target;
    // Ensure we're dropping onto a slot, not outside or onto another image
    while (target && !target.classList.contains("slot")) {
        target = target.parentNode;
    }

    // Prevent action if the drop target isn't a slot
    if (!target || !target.classList.contains("slot")) return;

    // Clear the slot before appending the new image, if you prefer one image per slot
    while (target.firstChild) {
        target.removeChild(target.firstChild);
    }

    target.appendChild(dragElement);
}

const correctOrder = ["1", "2", "3", "4", "5", "6", "7"]; // Example correct order

function checkOrder() {
    const slots = document.querySelectorAll('.slot');
    let isCorrectOrder = true;
    for (let i = 0; i < slots.length; i++) {
        const image = slots[i].querySelector('img');
        // Make sure an image exists in the slot and check the order
        if (!image || image.getAttribute('data-match') !== correctOrder[i]) {
            isCorrectOrder = false;
            break; // No need to check further if a mismatch is found
        }
    }

    if (isCorrectOrder) {
        alert('Correct order! Well done.');
    } else {
        alert('Incorrect order! Try again.');
    }
}

