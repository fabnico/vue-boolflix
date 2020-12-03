
const app = new Vue({
   el: '#root',
   data: {
      myAPI: '18d96878a8e77682ff38f707ebc18bb0',
      films: [],
      userInput: ''
   },
   methods:{
      search: function(){
         let a = axios.get('https://api.themoviedb.org/3/search/movie',
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
         })
      }
   }
})
