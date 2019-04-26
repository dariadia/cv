Vue.component('education', {
   props: ['language', 'lang', ],
   template: `<section id="education">
   <div class="container">
      <h2>{{language[lang].education}}</h2>
      <div class="education clearfix">
         <div class="item">
            <div class="marker"></div>
            <div class="content">
               <span>University Of Design</span>
               <h4>Master Degree of Design</h4>
            </div>
            <div class="year">2005 - 2006</div>
         </div>  
          
         <div class="item">
            <div class="marker"></div>
            <div class="content">
               <span>University Of Design</span>
               <h4>Master Degree of Design</h4>
            </div>
            <div class="year">2005 - 2006</div>
         </div>  
         <div class="item">
            <div class="marker"></div>
            <div class="content">
               <span>University Of Design</span>
               <h4>Master Degree of Design</h4>
            </div>
            <div class="year">2005 - 2006</div>
         </div>  
         <div class="line"></div>
      </div>  

      <h2>{{language[lang].hobbies}}</h2>
      <div class="row">
         <div class="col-sm-2 col-sm-offset-1 col-xs-6">
            <div class="icon-box">
               <div class="icon"><i class="ion-easel"></i></div>
               <h6>Web Research</h6>
            </div>  
         </div>  
         <div class="col-sm-2 col-xs-6">
            <div class="icon-box">
               <div class="icon"><i class="ion-ios-camera-outline"></i></div>
               <h6>Photography</h6>
            </div>  
         </div>  
         <div class="col-sm-2 col-xs-6">
            <div class="icon-box">
               <div class="icon"><i class="ion-plane"></i></div>
               <h6>Travelling</h6>
            </div>  
         </div>  
         <div class="col-sm-2 col-xs-6">
            <div class="icon-box">
               <div class="icon"><i class="ion-ios-bookmarks-outline"></i></div>
               <h6>Book Reading</h6>
            </div>  
         </div>  
         <div class="col-sm-2 col-xs-6">
            <div class="icon-box">
               <div class="icon"><i class="ion-ios-musical-notes"></i></div>
               <h6>Music</h6>
            </div>  
         </div>  
      </div>  
   </div>  
</section>  `
});
