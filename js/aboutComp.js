Vue.component("about", {
  props: ["language", "lang", "email"],
  template: `<section id="about">
   <div class="container">
      <h2>{{language[lang].about}}</h2>
      <div class="row">
         <div class="col-sm-3">
            <img src="images/head01.png" alt="daria's photo" class="img-responsive section-img img-border">
         </div> 
         <div class="col-sm-7">
            <h3 class="small-margin-bottom"> {{language[lang].name}}</h3>
            <h5>{{language[lang].developerExt}}</h5>
            <p>{{language[lang].reasons}}</p>
            <p>{{ language[lang].scholarship}}</p>
            <div><i v-for="decor in 5" class="fab fa-pagelines"></i></div>
            <ul class="list-unstyled text-uppercase">
               <li v-for="item in language[lang].personalInfo"><b>{{item.point}}</b> {{item.info}}</li>
               <li><i class="far fa-envelope-open"></i> <a href="mailto:dariadiachkova@mail.ru">{{email}}</a></li>
            </ul> 
         </div> 
      </div> 
   </div> 
</section> `
});
