Vue.component('education', {
   props: ['language', 'lang', ],
   data(){
      return {
         hobbyBoxEng: [
            {name: 'web development', icon: 'fas fa-globe', class: 'col-sm-offset-1'},
            {name: 'css animation', icon: 'fas fa-user-ninja'},
            {name: 'video editing', icon: 'fas fa-video'},
            {name: 'fiction writing', icon: 'fas fa-keyboard'},
         ],
         hobbyBoxRu: [
            {name: 'веб разработка', icon: 'fas fa-globe', class: 'col-sm-offset-1'},
            {name: 'css animation', icon: 'fas fa-user-ninja'},
            {name: 'монтаж & обработка видео', icon: 'fas fa-video'},
            {name: 'написание рассказов', icon: 'fas fa-keyboard'},
         ],
      }
   },
   template: `<section id="education">
   <div class="container">
      <h2>{{language[lang].education}}</h2>
      <div class="education clearfix">
         <div class="item">
            <div class="marker"></div>
            <div class="content">
               <span>{{ language[lang].uni }}</span>
               <h4>{{ language[lang].uniDep }}</h4>
            </div>
            <div class="year">2015 - 2019</div>
         </div>  
          
         <div class="item">
            <div class="marker"></div>
            <div class="content">
               <a href="https://geekbrains.ru/courses">GeekUniversity</a>
               <h4>{{ language[lang].department }}</h4>
            </div>
            <div class="year">2018 - 2020</div>
         </div>  
         <div class="line"></div>
      </div>  

      <h2>{{language[lang].hobbies}}</h2>
      <div class="row">
         <div  v-if="lang === 0" v-for="item in hobbyBoxRu" :key="item.name" class="col-sm-2 col-xs-6" :class="item.class">
            <div class="icon-box">
               <div class="icon"><i :class="item.icon"></i></div>
               <h6>{{ item.name }}</h6>
            </div>  
         </div> 

         <div v-else v-for="item in hobbyBoxEng" :key="item.name" class="col-sm-2 col-xs-6" :class="item.class">
            <div class="icon-box">
               <div class="icon"><i :class="item.icon"></i></div>
               <h6>{{ item.name }}</h6>
            </div>  
         </div> 
      </div> 
   </div>  
</section>  `
});
