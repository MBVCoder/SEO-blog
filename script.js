document.addEventListener('DOMContentLoaded', () => {
    fetch('news.json')
      .then(response => {
        console.log('Response:', response); 
        return response.json();
      })
      .then(newsData => {
        console.log('News Data:', newsData);
        const newsContainer = document.getElementById('blog-container');
  
        newsData.news.forEach(newsItem => {
          const newsElement = document.createElement('div');
          newsElement.classList.add('post');
          
          newsElement.innerHTML = `
            <h3>${newsItem.title}</h3>
            <p>${"\n"}</p>
            <p><strong>Author:</strong> ${newsItem.author} </p> 
            <p><strong>Category:</strong> ${newsItem.category} </p>
            <p><strong>Date:</strong> ${newsItem.date}</p>
            <p>${newsItem.content}</p>
            <p><strong>Tags:</strong> ${newsItem.tags.join(', \n')}</p>
            <a href="${newsItem.url}" class="btn" target="_blank">Read More</a>
            <img src="${newsItem.imageurl}" alt="${newsItem.title}" class="news-image">
          `;
  
          newsContainer.appendChild(newsElement);
        });
      })
      .catch(error => {
        console.error('Error loading news data:', error); // Log any errors
      });
  });
  
