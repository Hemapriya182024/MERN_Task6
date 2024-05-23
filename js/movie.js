class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    static getPG(Movie) {
        const pgMovies = [];
        for (let i = 0; i < Movie.length; i++) {
            if (Movie[i].rating === "PG") {
                pgMovies.push(Movie[i]);
            }
        }
        return pgMovies;
    }


}
const MyMovie = new Movie("CasinoRoyale", "Eon Productions", "PG13")
const MovieArray = [new Movie("leo", "vijay production", "PG"),
                    new Movie("VIP", "Dhanush production", "R"),
                    new Movie("poniyin selven", "Red gaint production", "PG")]


console.log(MyMovie);
const pgMovies = Movie.getPG(MovieArray);
console.log(pgMovies)

