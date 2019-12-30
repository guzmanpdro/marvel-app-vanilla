const marvel = {
    render: () => {
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=4cdabaa97589e20db0d457152cb5092c&hash=61fd928f364f75d2ec1a1a5360aa6a57';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(urlAPI)
            .then(res => res.json())
            .then((json) => {
                for(const hero of json.data.results) {
                    let urlHero = hero.urls[0].url;
                    contentHTML += `
                        <div class="hero">
                            <a href="${urlHero}" target="_blank">
                                <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                            </a>
                            <h3 class="title">${hero.name}</h3>
                        </div>`;
                }
                container.innerHTML = contentHTML;
            })
    }
};

marvel.render();