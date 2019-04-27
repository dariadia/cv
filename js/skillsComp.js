Vue.component('skills', {
   props: ['language', 'lang', ],
   template: `<section id="skills">
   <div class="container">
      <h2>{{ language[lang].skills}}</h2>
      <div class="row">
         <div class="col-sm-6">
            <h4>Frontend</h4>
            <div v-for="skill in language[lang].skillsExt" :key="skill.name" class="flex-column">
               <label class="label">{{skill.name}} <span class="pale-iron"> {{ skill.extra }}</span></label>
               <div class="progress">
                  <div class="bar shadow circuit" :class="skill.class"></div>
               </div>
            </div>
         </div>   
         <div class="col-sm-4 spacer-left">
            <h4>{{ language[lang].skillsAlso }}</h4>
            <div class="row spacer-left-sm">
                  <ul class="list-icons iron bold-list">
                     <li v-for="skill in language[lang].skillsPlus" :key="skill" class="li-glowing"> <i class="fas fa-map-pin royal-blue"></i> {{ skill }}</li>
                  </ul>
            </div>   
         </div>   
      </div>   
      <div class="spacer"></div>
      <h4>{{ language[lang].languages }}</h4>
      <div class="row">
         <div class="col-sm-4">
            <ul class="list-icons iron bold-list">
               <li class="list-skill li-glowing" v-for="skill in language[lang].languagesExt" :key="skill.name"> 
                  <i class="fas fa-atlas royal-blue spacer-right"></i> 
                     {{ skill.name }} 
                  <span class="royal-blue-hov spacer-left spacer-right"> 
                     <span v-if="skill.level === 'B2'" class="padder-left"></span> <b> {{ skill.level }}</b>
                  </span>
                  <span class="spacer-left"> {{ skill.certification }} </span>
               </li>
            </ul>
         </div>  
      </div> 
      <div class="spacer"></div>
      <div class="row">
         <div class="col-sm-4">
            <h4>Опыт работы</h4>

         </div>
      </div>
   </div>   
</section> `
});
