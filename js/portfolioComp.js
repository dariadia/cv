Vue.component('portfolio', {
   props: ['language', 'lang', ],
   template: `	<section id="portfolio">
   <div class="container">
      <h2>{{language[lang].portfolio}}</h2>
      <div class="portfolio-wrapper">
         
         <div id="portfolio" class="portfolio">
            <div class="item branding print">
               <img src="images/portfolio01.jpg" alt="alt text" class="img-responsive">
               <a href="single-portfolio.html" class="overlay">
                  <div class="background"></div>
                  <div class="meta">
                     <span class="title">Portfolio Item - 01</span>
                     <span class="category">Branding, Print</span>
                  </div> 
               </a>  
            </div>  
            <div class="item motion">
               <img src="images/portfolio02.jpg" alt="alt text" class="img-responsive">
               <a href="single-portfolio.html" class="overlay">
                  <div class="background"></div>
                  <div class="meta">
                     <span class="title">Portfolio Item - 02</span>
                     <span class="category">Motion</span>
                  </div> 
               </a>  
            </div>  
            <div class="item print">
               <img src="images/portfolio03.jpg" alt="alt text" class="img-responsive">
               <a href="single-portfolio.html" class="overlay">
                  <div class="background"></div>
                  <div class="meta">
                     <span class="title">Portfolio Item - 03</span>
                     <span class="category">Print</span>
                  </div> 
               </a>  
            </div>  
            <div class="item print branding websites">
               <img src="images/portfolio04.jpg" alt="alt text" class="img-responsive">
               <a href="single-portfolio.html" class="overlay">
                  <div class="background"></div>
                  <div class="meta">
                     <span class="title">Portfolio Item - 04</span>
                     <span class="category">Branding, Websites</span>
                  </div> 
               </a>  
            </div>  
            <div class="item print branding">
               <img src="images/portfolio05.jpg" alt="alt text" class="img-responsive">
               <a href="single-portfolio.html" class="overlay">
                  <div class="background"></div>
                  <div class="meta">
                     <span class="title">Portfolio Item - 05</span>
                     <span class="category">Print, Branding</span>
                  </div> 
               </a>  
            </div>  
            <div class="item motion">
               <img src="images/portfolio06.jpg" alt="alt text" class="img-responsive">
               <a href="single-portfolio.html" class="overlay">
                  <div class="background"></div>
                  <div class="meta">
                     <span class="title">Portfolio Item - 06</span>
                     <span class="category">Motion</span>
                  </div> 
               </a>  
            </div>  
            <div class="item motion">
               <img src="images/portfolio07.jpg" alt="alt text" class="img-responsive">
               <a href="single-portfolio.html" class="overlay">
                  <div class="background"></div>
                  <div class="meta">
                     <span class="title">Portfolio Item - 07</span>
                     <span class="category">Motion</span>
                  </div> 
               </a>  
            </div>  
            <div class="item print">
               <img src="images/portfolio08.jpg" alt="alt text" class="img-responsive">
               <a href="single-portfolio.html" class="overlay">
                  <div class="background"></div>
                  <div class="meta">
                     <span class="title">Portfolio Item - 08</span>
                     <span class="category">Print</span>
                  </div> 
               </a>  
            </div>  
            <div class="item motion">
               <img src="images/portfolio09.jpg" alt="alt text" class="img-responsive">
               <a href="single-portfolio.html" class="overlay">
                  <div class="background"></div>
                  <div class="meta">
                     <span class="title">Portfolio Item - 09</span>
                     <span class="category">Motion</span>
                  </div> 
               </a>  
            </div>  
            <div class="item websites">
               <img src="images/portfolio10.jpg" alt="alt text" class="img-responsive">
               <a href="single-portfolio.html" class="overlay">
                  <div class="background"></div>
                  <div class="meta">
                     <span class="title">Portfolio Item - 10</span>
                     <span class="category">Websites</span>
                  </div> 
               </a>  
            </div>  
         </div>  
         <div class="portfolio-load-more">
            <a href="single-portfolio.html" class="button solid-button white icon-right">Загрузить ещё!<i class="md-refresh"></i></a>
         </div>  
      </div>  
   </div>  
</section>  `
});
