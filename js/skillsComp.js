Vue.component('skills', {
   props: ['language', 'lang', ],
   template: `<section id="skills">
   <div class="container">
      <h2>My Skills Values</h2>
      <div class="row">
         <div class="col-sm-6">
            <h4>Technical Skills</h4>
            <label class="progress-bar-label">Wordpress</label>
            <div class="progress">
               <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                  <span>85%</span>
               </div>  
            </div>   
            <label class="progress-bar-label">Photoshop</label>
            <div class="progress">
               <div class="progress-bar" role="progressbar" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100">
                  <span>99%</span>
               </div>  
            </div>   
            <label class="progress-bar-label">HTML&amp;CSS</label>
            <div class="progress">
               <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                  <span>75%</span>
               </div>  
            </div>   
            <label class="progress-bar-label">Javascript</label>
            <div class="progress">
               <div class="progress-bar" role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100">
                  <span>67%</span>
               </div>  
            </div>   
         </div>   
         <div class="col-sm-6">
            <h4>Knowledge</h4>
            <div class="row">
               <div class="col-sm-6">
                  <ul class="list-icons iron bold-list">
                     <li><i class="md-arrow-forward"></i>Install and Configure</li>
                     <li><i class="md-arrow-forward"></i>Web Usability</li>
                     <li><i class="md-arrow-forward"></i>Digital Painting</li>
                     <li><i class="md-arrow-forward"></i>Grid and Layout</li>
                     <li><i class="md-arrow-forward"></i>Mobile App Design</li>
                     <li><i class="md-arrow-forward"></i>Graphical Design</li>
                     <li><i class="md-arrow-forward"></i>SEO Optimization</li>
                  </ul>
               </div>   
               <div class="col-sm-6">
                  <ul class="list-icons iron bold-list">
                     <li><i class="md-arrow-forward"></i>UX and UI Design</li>
                     <li><i class="md-arrow-forward"></i>Logo Design</li>
                     <li><i class="md-arrow-forward"></i>3D Animation & Visual Effects</li>
                     <li><i class="md-arrow-forward"></i>Audio Video Editing</li>
                     <li><i class="md-arrow-forward"></i>Photography</li>
                     <li><i class="md-arrow-forward"></i>Web Development</li>
                     <li><i class="md-arrow-forward"></i>Digital Marketing</li>
                  </ul>
               </div>   
            </div>   
         </div>   
      </div>   
      <div class="spacer"></div>
      <h4>Language Skills</h4>
      <div class="row">
         <div class="col-sm-4">
            <div class="circle-progress-wrapper clearfix">
               <div class="circle-progress">
                  <input type="text" class="dial" value="99" data-color="#7c4dff" data-from="0" data-to="99" />
               </div>   
               <div class="circle-progress-label-wrapper"><label class="circle-progress-label">English Experienced</label></div>
            </div>   
         </div>   
         <div class="col-sm-4">
            <div class="circle-progress-wrapper clearfix">
               <div class="circle-progress">
                  <input type="text" class="dial" value="80" data-color="#7c4dff" data-from="0" data-to="80" />
               </div>   
               <div class="circle-progress-label-wrapper"><label class="circle-progress-label">French Advanced</label></div>
            </div>   
         </div>   
         <div class="col-sm-4">
            <div class="circle-progress-wrapper clearfix">
               <div class="circle-progress">
                  <input type="text" class="dial" value="69" data-color="#7c4dff" data-from="0" data-to="69" />
               </div>   
               <div class="circle-progress-label-wrapper"><label class="circle-progress-label">German Basic</label></div>
            </div>   
         </div>   
      </div>   
   </div>   
</section> `
});
