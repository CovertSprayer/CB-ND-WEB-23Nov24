const baseURL = "https://api.themoviedb.org/3/movie";
const imgURL = "https://image.tmdb.org/t/p/original";
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDhlMDRiNzcwODBhN2ZkYjAwMzQ5ZmVkNzVmZGY2MyIsIm5iZiI6MTcyMzgzMDUxNi40NDYsInN1YiI6IjY2YmY5MGY0NTQ0NTk1ODk5MjQ5ZTUwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z-e50TznJEryxFmVupqMRRwe4rVjjV7jqS0V6fzAlo8"

const mainElement = document.querySelector("main");

async function getData(url){
  try {
    const res = await fetch(url, {
      method: "GET",
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    return await res.json();
  } catch (error) {
    console.log("Error in API call", error);
    alert("Somethig went wrong!!")
  }
}

function createSection(heading, movieData){
  const section = document.createElement("section");
  section.innerHTML = `<h2>${heading}</h2>`;
  const div  = document.createElement("div");

  movieData.forEach(movie => {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", `${imgURL}/${movie.poster_path}`)
    article.appendChild(img);
    div.appendChild(article);
  })
  section.appendChild(div);
  return section;
}

async function main(){
  const [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([
    getData(`${baseURL}/popular`),
    getData(`${baseURL}/top_rated`),
    getData(`${baseURL}/upcoming`)
  ]);

  const popularMoviesSection = createSection("Popular Movies", popularMovies.results);
  const topRatedMoviesSection = createSection("Top Rated Movies", topRatedMovies.results);
  const upcomingMoviesSection = createSection("Upcoming Movies", upcomingMovies.results);

  console.log(popularMovies)

  mainElement.appendChild(popularMoviesSection);
  mainElement.appendChild(topRatedMoviesSection);
  mainElement.appendChild(upcomingMoviesSection);

}

main();