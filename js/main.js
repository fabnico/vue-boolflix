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
            {params: {api_key: this.myAPI, query: this.userInput}}).then(result => this.films = result.data.results);
         axios.get('https://api.themoviedb.org/3/search/tv',
            {params: {api_key: this.myAPI, query: this.userInput}}).then(result => this.tvSeries = result.data.results)
      },
      flagError: function(event){
         event.target.src = 'img/svg/flag_404.svg';
      },
      imgError: function(event){
         event.target.src = 'img/notfound.jpg'
      },
      starCounter: function(media){
         let vote = Math.ceil(media.vote_average / 2);
         return vote;
      }
   }
})
