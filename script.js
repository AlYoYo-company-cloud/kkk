const cards = document.querySelectorAll('.chapter-card');
const modal = document.getElementById('videoModal');
const frame = document.getElementById('videoFrame');

cards.forEach(card => {
card.addEventListener('click', () => {
const id = card.getAttribute('data-video');
frame.src = "https://www.youtube.com/embed/${id}";
modal.style.display = 'block';
});
});

modal.onclick = () => {
modal.style.display = 'none';
frame.src = '';
};
