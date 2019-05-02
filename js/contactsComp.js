Vue.component('contacts', {
   props: ['language', 'lang', 'email', 'tel'],
   template: `
   <section id="contacts">
      <div class="container">
         <h2>{{language[lang].contact}}</h2>
               <div class="contacts-flex">
               <ul class="list-icons list-unstyled">
                  <li><b>{{language[lang].tel}}</b>: {{tel}}</li>
                  <li><b>Email</b>: <a href="mailto:dariadiachkova@mail.ru">{{email}}</a></li>
                  <li><b>{{language[lang].address}}</b>: {{language[lang].addressLine}}</li>
               </ul>
               <i class="fas fa-mail-bulk"></i>
               </div>
               <div class="spacer"></div>
               <social-icons></social-icons>
               <div class="spacer"></div>
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


Vue.component('social-icons', {
   props: ['language', 'lang', ],
   data(){
      return  {
                  links: [
                     {name: 'Github', link: 'https://github.com/dariadia', icon: 'fab fa-github'},
                     {name: 'Geekbrains', link: 'https://geekbrains.ru/users/3413593', icon: 'fas fa-calendar-week'},
                     {name: 'Linkedin', link: 'https://www.linkedin.com/in/daria-diachkova-157715157/', icon: 'fab fa-linkedin-in'},
                     {name: 'Вконтакте', link: 'https://vk.com/dariadia', icon: 'fab fa-vk'},
                  ],
              }
   },
   template: `<div class="social-icons">
                  <a v-for="item in links" :key="item.name" :href="item.link" class="social-icon"><i :class="item.icon"></i></a>
               </div> `
});