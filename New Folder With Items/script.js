// Function to navigate between pages
function goToPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
        page.style.opacity = 0;
    });

    const currentPage = document.getElementById('page' + pageNumber);
    currentPage.style.display = 'block';

    setTimeout(() => {
        currentPage.style.opacity = 1;
    }, 50);
}

// Show the first page on initial load
window.onload = function() {
    goToPage(1);
};

// Function to generate the story
function generateStory() {
    const noun = document.getElementById('noun').value;
    const verb = document.getElementById('verb').value;
    const adjective = document.getElementById('adjective').value;
    const place = document.getElementById('place').value;

    const story = `
        Once upon a time, a very ${adjective} ${noun} decided to ${verb} all the way to the ${place}. 
        It was a magical journey full of surprises and laughter!
    `;

    document.getElementById('story').textContent = story;

    goToPage(3);
}
