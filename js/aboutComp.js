Vue.component('about', {
   props: ['language', 'lang', ],
   template: `<section id="about">
   <div class="container">
      <h2>About Me</h2>
      <div class="row">
         <div class="col-sm-3">
            <img src="images/man02.png" alt="man" class="img-responsive section-img">
         </div> 
         <div class="col-sm-9">
            <h3 class="small-margin-bottom">Benjamin Thomson</h3>
            <h5>Web & UX Designer</h5>
            <p>Ultricies nisi voluptatem, illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque latu dantium, totam rem aperiam, eaque ipsa quae ab illo tempor dignissim at. </p>
            <div class="signature"><img src="images/signature.png" alt="signature" class="img-responsive"></div>
            <ul class="list-unstyled text-uppercase">
               <li><b>Date Of Birth:</b> 24 Jan 1989</li>
               <li><b>Phone:</b> 012-345-6789</li>
               <li><b>Email:</b> Sility@example.com</li>
               <li><b>Address:</b> 123 Sility, South Corner Street, Melborne, Australia.</li>
               <li><b>Website:</b> http://www.example.com</li>
            </ul> 
            <div class="spacer"></div>
            <h3>What I'm Doing</h3>
            <div class="row">
               <div class="col-sm-4">
                  <div class="service">
                     <div class="icon"><i class="ion-monitor"></i></div>
                     <h5>Web & UX Design</h5>
                  </div>
               </div> 
               <div class="col-sm-4">
                  <div class="service">
                     <div class="icon"><i class="ion-iphone"></i></div>
                     <h5>App Development</h5>
                  </div> 
               </div> 
               <div class="col-sm-4">
                  <div class="service">
                     <div class="icon"><i class="ion-trophy"></i></div>
                     <h5>Marketing</h5>
                  </div>
               </div> 
            </div> 
         </div> 
      </div> 
   </div> 
</section> `
});
