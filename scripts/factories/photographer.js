function photographerFactory(data) {
    const { id, name, portrait, city, country, tagline, price } = data;
    //console.log(data.portrait);
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement("article");
        const link = document.createElement("a");
        const img = document.createElement("img");
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");
        const paragraph = document.createElement("p");
        const span = document.createElement("span");
        link.setAttribute("href", `photographer.html?id=${id}`);
        link.setAttribute("class", "links");
        link.setAttribute("aria-label", `Lien page ${name}`);
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Photo profil  ${name}`);
        h2.textContent = name;
        h3.textContent = `${city} , ${country}`;
        paragraph.textContent = tagline;
        span.textContent = `${price}€/jour`;
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(link);
        article.appendChild(h3);
        article.appendChild(paragraph);
        article.appendChild(span);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}