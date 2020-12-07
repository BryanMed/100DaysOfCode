const form = document.querySelector("#movieForm");
const imageSpace = document.querySelector("#images");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const res = await axios.get(
    `http://api.tvmaze.com/search/shows?q=${searchTerm}`
  );
  makeImages(res.data);
  form.elements.query.value = "";
});

function badges(text, type) {
  const badge = document.createElement("p");
  badge.classList.add("badge");
  badge.classList.add(`badge-${type}`);
  badge.innerHTML = text;
  return badge;
}

function randomColor(l) {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 30 + 30);
  return [h, s, l];
}

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const card = document.createElement("div");
      card.classList.add("card");
      card.classList.add("col-sm-6");
      card.classList.add("col-md-4");
      card.classList.add("col-lg-3");

      card.style = "width: 10rem";

      const [h, s, l] = randomColor(80);
      card.style.background = `hsl(${h}, ${s}%, ${l}%)`;

      const img = document.createElement("img");
      img.classList.add("card-img-top");
      img.src = result.show.image.medium;

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const titleContainer = document.createElement("div");
      titleContainer.classList.add("alert");
      titleContainer.style.background = `hsl(${h}, ${s}%, ${l - 50}%)`;
      // titleContainer.classList.add("alert-info");

      const statusBadge = badges(result.show.status, "info");
      const languageBadge = badges(result.show.language, "warning");

      const movieTitle = document.createElement("h4");
      movieTitle.classList.add("card-title");
      movieTitle.innerHTML = result.show.name;

      const description = document.createElement("p");
      const summarySubstring = result.show.summary.substring(0, 150);
      description.innerHTML = summarySubstring + "...";

      titleContainer.append(movieTitle);
      cardBody.append(titleContainer);

      cardBody.append(statusBadge);
      cardBody.append(languageBadge);

      const genresString = result.show.genres;
      for (let genre of genresString) {
        const genreBadge = badges(genre, "danger");
        cardBody.append(genreBadge);
      }

      cardBody.append(description);
      card.append(img);
      card.append(cardBody);
      imageSpace.append(card);
      // console.log(result.show);
    }
  }
};
