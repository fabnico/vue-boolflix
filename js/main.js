

const app = new Vue({
   el: '#root',
   data: {
      myAPI: '18d96878a8e77682ff38f707ebc18bb0',
      films: [],
      tvSeries: [],
      userInput: '',
   },
   methods:{
      search: function(){
         axios.get('https://api.themoviedb.org/3/search/movie',
      {
         params: {
            api_key: this.myAPI,
            query: this.userInput
         }
      })
         .then(result => {
         this.films = result.data.results;
         this.films.forEach(e => {e.vote_average = Math.ceil(e.vote_average / 2);
         e.star = 5 - e.vote_average;
            })
         }),
         axios.get('https://api.themoviedb.org/3/search/tv',
      {
         params: {
            api_key: this.myAPI,
            query: this.userInput
         }
      })
         .then(result => {
         this.tvSeries = result.data.results;
         this.tvSeries.forEach(e => {e.vote_average = Math.ceil(e.vote_average / 2);
         e.star = 5 - e.vote_average;
            })
         })
      },
      flagError: function(i){
         this.films[i].original_language = 'flag_404';
         this.tvSeries[i].original_language = 'flag_404';
      },
   }
})
