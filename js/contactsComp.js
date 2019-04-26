Vue.component('contacts', {
   props: ['language', 'lang', ],
   template: `
   <section id="contacts">
      <div class="container">
         <h2>Get In Touch With Me</h2>
         <div class="row">
            <div class="col-sm-5">
               <h5>Contact Address</h5>
               <ul class="list-icons list-unstyled">
                  <li><i class="ion-ios-location-outline"></i>123 Sility, South Corner Street,<br />Melbornem Australia.</li>
                  <li><i class="ion-iphone"></i>Phone: +61 012 345 6789</li>
                  <li><i class="ion-ios-email-outline"></i>Email: <a href="mailto:example@gmail.com">example@gmail.com</a></li>
                  <li><i class="ion-ios-home-outline"></i>Website: <a href="">info@sility.com</a></li>
               </ul>
               <div class="spacer"></div>
               <div class="social-icons">
                  <a href="" class="social-icon"><i class="fa fa-facebook"></i></a>
                  <a href="" class="social-icon"><i class="fa fa-twitter"></i></a>
                  <a href="" class="social-icon"><i class="fa fa-google-plus"></i></a>
                  <a href="" class="social-icon"><i class="fa fa-behance"></i></a>
                  <a href="" class="social-icon"><i class="fa fa-dribbble"></i></a>
               </div>  
               <div class="spacer"></div>
            </div>
            <div class="col-sm-7">
               <h5>Contact Form</h5>
               <form action="scripts/contact.php" method="post" class="form-horizontal contact-form">
                  <div class="form-group">
                     <label class="col-sm-2 control-label">Name</label>
                     <div class="col-sm-10">
                        <input type="text" class="contact-name" name="contact-name" />
                     </div>  
                  </div> 
                  <div class="form-group">
                     <label class="col-sm-2 control-label">Email</label>
                     <div class="col-sm-10">
                        <input type="email" class="contact-email" name="contact-email" />
                     </div>  
                  </div> 
                  <div class="form-group">
                     <label class="col-sm-2 control-label">Message</label>
                     <div class="col-sm-10">
                        <textarea name="contact-message" class="contact-message" rows="3"></textarea>
                     </div>  
                  </div> 
                  <div class="form-group">
                     <div class="col-sm-10 col-sm-offset-2">
                        <button type="submit" class="button solid-button iron">Send Message</button>
                     </div>  
                  </div> 
                  <div class="contact-loading alert alert-info form-alert">
                     <span class="message">Loading...</span>
                     <button type="button" class="close" data-hide="alert" aria-label="Close"><i class="fa fa-times"></i></button>
                  </div>
                  <div class="contact-success alert alert-success form-alert">
                     <span class="message">Success!</span>
                     <button type="button" class="close" data-hide="alert" aria-label="Close"><i class="fa fa-times"></i></button>
                  </div>
                  <div class="contact-error alert alert-danger form-alert">
                     <span class="message">Error!</span>
                     <button type="button" class="close" data-hide="alert" aria-label="Close"><i class="fa fa-times"></i></button>
                  </div>
               </form> 
            </div>
         </div>
         <div class="map" id="map"></div>
      </div>  
   </section>`
});

Vue.component('social-links', {
   props: ['language', 'lang', ],
   data(){
      return  {
                  links: [
                     {name: 'Github', link: 'https://github.com/dariadia'},
                     {name: 'Geekbrains', link: 'https://geekbrains.ru/users/3413593'},
                     {name: 'Linkedin', link: 'https://www.linkedin.com/in/daria-diachkova-157715157/'},
                     {name: 'Вконтакте', link: 'https://vk.com/dariadia'},
                  ],
              }
   },
   template: `<ul class="list-unstyled">
                  <li v-for="item in links" :key="item.name"><a :href="item.link" class="capitalise">{{ item.name }}</a></li>
               </ul>`
});