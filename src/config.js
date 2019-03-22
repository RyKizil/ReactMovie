const API_KEY = "55b0a73181c6fc4992f4076ef9053934";
const API_URL = "https://api.themoviedb.org/3/";

// You'll notice that movie, TV and person objects contain references to different file paths. In order to generate a fully working image URL, you'll need 3 pieces of data. Those pieces are a base_url, a file_size and a file_path.

// The first two pieces can be retrieved by calling the  API and the third is the file path you're wishing to grab on a particular media object. Here's what a full image URL looks like if the poster_path of /kqjL17yufvn9OVLyXYpvtyrFfak.jpg was returned for a movie, and you were looking for the w500 size:

// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

const BASE_IMG_URL = "https://image.tmdb.org/t/p/";

//"backdrop_sizes": ["w300","w780","w1280","original"],

const BACKDROP_SIZE = "w1280";

//"poster_sizes": ["w92","w154","w185","w342","w500","w780","original"]

const POSTER_SIZE = "w500";

export {
    API_KEY,
    API_URL,
    BASE_IMG_URL,
    BACKDROP_SIZE,
    POSTER_SIZE
}

