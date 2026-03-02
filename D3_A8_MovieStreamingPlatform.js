/*Movie Streaming Platform

You are working on a movie recommendation system.

Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"
    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"*/

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

//(1) filter() only "Sci-Fi" movies
let sciFiMovies=movies.filter((movie)=>movie.genre==="Sci-Fi")

//Print Details of Sci-Fi Movies
console.log("Details of Sci-Fi Movies:")
console.log(sciFiMovies)

//(2) map() to return: "Inception (8.8)"
let onlyInception=movies.map((movie)=>{
    if(movie.title==="Inception")
    {
        return `${movie.title} (${movie.rating})`
    }
})
//Print Inception Movie Only
console.log(onlyInception)

//If (2) is considering Only Title and Rating
let onlyTitleAndRating=movies.map((movie)=>{
        return `${movie.title} (${movie.rating})`
})

//Print Movies with Title and Rating Only
console.log("List of movies with title and rating only")
console.log(onlyTitleAndRating)

//(3) reduce() to find average movie rating
let sumOfMovieRating=movies.reduce((sumOfRating,movie)=>sumOfRating+movie.rating,0)
let avgMovieRating=sumOfMovieRating/movies.length

//Print Average Movie Rating
console.log("Average Movie Rating:",avgMovieRating)

//(4) find() movie "Joker"
let findMovieWithTitleJoker=movies.find((movie)=>movie.title==="Joker")

//If Movie with Title Joker Exists
if(findMovieWithTitleJoker)
{
    //Print Details of Movie Joker
    console.log("The Details of Movie Joker:")
    console.log(findMovieWithTitleJoker)
}
//If Movie with Title Joker does not exist
else
{
    //Print movie does not exist
    console.log("Movie with Title Joker does not exist")
}

//(5) findIndex() of "Avengers"
let findIndexOfMovieWithTitleAvengers=movies.find((movie)=>movie.title==="Joker")

//If Movie with Title Avengers Exists
if(findIndexOfMovieWithTitleAvengers)
{
    //Print Index of Movie Avengers
    console.log("The Index of Movie with Title Avengers:",findIndexOfMovieWithTitleAvengers)
}
//If Movie with Title Avengers does not exist
else
{
    //Print movie does not exist
    console.log("Movie with Title Avengers does not exist")
}