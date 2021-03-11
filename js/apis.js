
export class Apis {

    constructor() {


        this.rowHtml = document.getElementById('row')
        this.url = "https://api.themoviedb.org/3/movie/now_playing?api_key=4c69f7a3534cfa0d3664b6e1f78b2bf1";



        this.getData(this.url);


    }


    async getData(url) {


        
        let data = await this.fetchUrl(url);

        let item = '';
        for (let i = 0; i < data.length; i++) {
            item += `<div class="col-md-4">
            <div class="movie shadow rounded position-relative">
                <div class="post">
                    <img src="https://image.tmdb.org/t/p/w500${data[i].poster_path}"class="img-fluid rounded">

                    <div class="layer d-flex align-items-center rounded ">
                        <div class="info p-0 rounded">

                            <h2>${data[i].original_title}</h2>
                            <p>${data[i].overview}</p>
                            <p>rate:${data[i].vote_average} </p>
                            <p> ${data[i].release_date}</p>

                        </div>
                    </div>

                    
                </div>
            </div>    
        </div>`


        }

        this.rowHtml.innerHTML = item;

       


    }

    async fetchUrl(url) {

        let fetchData = await fetch(url);
        let data = await fetchData.json();
        return data.results
    }


    geturlPath() {



        let searchURL = "https://api.themoviedb.org/3/search/movie?query=mad&api_key=4c69f7a3534cfa0d3664b6e1f78b2bf1&language=en-US&include_adult=false"

        let trendingURL = "https://api.themoviedb.org/3/trending/all/day?api_key=4c69f7a3534cfa0d3664b6e1f78b2bf1"
        let latestURL = "https://api.themoviedb.org/3/movie/latest?api_key=4c69f7a3534cfa0d3664b6e1f78b2bf1"
        let popularURL = "https://api.themoviedb.org/3/movie/popular?api_key=4c69f7a3534cfa0d3664b6e1f78b2bf1"
        let topratedURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=4c69f7a3534cfa0d3664b6e1f78b2bf1"
        let upcomingURL = "https://api.themoviedb.org/3/movie/upcoming?api_key=4c69f7a3534cfa0d3664b6e1f78b2bf1"
        let NowURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=4c69f7a3534cfa0d3664b6e1f78b2bf1"
        let URL = "https://api.themoviedb.org/3/movie/now_playing?api_key=4c69f7a3534cfa0d3664b6e1f78b2bf1"
    }




}

