Vue.component("home", {
  props: ["language", "lang"],
  template: `
<section id="home" class="no-padding-bottom active">
	<div class="container">
		<div class="row">
			<div class="col-sm-7 vertical-center padding-fix">
				<h1>Frontend</h1> 
				<h1>{{ language[lang].developer }} <sup>+</sup></h1>
				<p class="info">{{ language[lang].homeText }}</p><br>
				<h4 class="button solid-button royal-blue" >{{ language[lang].welcome }}</h4>
			</div>
			<div class="col-sm-5 vertical-center">
				<img src="images/me01.png" alt="daria's photo main" class="img-responsive section-img">
			</div><br><br><br>
		</div> 
	</div> 
</section> 
   `
});
