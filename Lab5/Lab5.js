let news = [
    { id: 1, title: 'Election Results', content: "Newly elected minister..." },
    { id: 2, title: 'Sporting Success', content: "World Cup winners..." },
    { id: 3, title: 'Tornado Warning', content: "Residents should prepare..." }
];

const newsContainer = document.getElementById('news-container');
const newsTitleInput = document.getElementById('news-title');
const newsContentInput = document.getElementById('news-content');

function updateNews() {
    newsContainer.innerHTML = '';
    news.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = `
            <h2>${item.title}</h2>
            <p>${item.content}</p>
        `;
        newsContainer.appendChild(newsItem);
    });
}

function addNews() {
    const newTitle = newsTitleInput.value;
    const newContent = newsContentInput.value;

    if (newTitle.trim() !== '' && newContent.trim() !== '') {
        const newItem = {
            id: news.length + 1,
            title: newTitle,
            content: newContent
        };
        news.push(newItem);
        updateNews();
        newsTitleInput.value = '';
        newsContentInput.value = '';
    }
}

updateNews();
setInterval(updateNews, 5000);
