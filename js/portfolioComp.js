Vue.component("portfolio", {
  props: ["language", "lang"],
  template: `<section id="portfolio">
   <div class="container container-portfolio">
      <h2>{{ language[lang].portfolio }}</h2>
      <div class="row">
         <div class="col-sm-12">
            <div class="box box-portfolio">
               <div v-for="(item, index) in language[lang].portfolioItems" v-if="index < 2" :key="item.src" class="portfolio-item">
                  <a 
                  :href="item.link" 
                  target="_blank">
                     <img :height ="item.height" :src="item.src" alt="webpage screenshot" class="spacer-sm">
                  </a>
                  <p class="iron bold-list royal-blue-hov spacer-sm"> {{ item.name }} </p>
                  <div>
                     <i class="fas fa-map-pin royal-blue-font padder-right-sm"></i> 
                     {{ item.desc }}
                  </div>
               </div>
            </div>
            <div class="box box-portfolio">
               <div 
                  v-for="(item, index) in language[lang].portfolioItems" 
                  v-if="index >= 2" 
                  :key="item.src" 
                  class="portfolio-item">
                     <a 
                        :href="item.link" 
                        target="_blank"><img 
                        :height ="item.height" 
                        :src="item.src" 
                        alt="webpage screenshot" 
                        class="spacer-sm">
                     </a>
                     <p class="iron bold-list royal-blue-hov spacer-sm"> {{ item.name }} </p>
                     <div>
                        <i class="fas fa-map-pin royal-blue-font padder-right-sm"></i> 
                        {{ item.desc }}
                     </div>
               </div>
            </div>
            <div class="spacer"></div>
            <div class="middle">
               <a 
                  :href="language[lang].myAccount.link" 
                  class="button solid-button royal-blue">
                  {{ language[lang].myAccount.caption }}
               </a>
            </div>  
         </div>
      </div>
   </div> 
</section>  `
});
