Vue.use(VueSmoothScroll)
let cv = new Vue({
    el: '#cv',
    data: {
        language: [
            // russian data
            {
                language: 'rus',
                name: 'Дьячкова Дарья Валерьевна',
                developer: 'разработчик',
                developerExt: 'Junior Frontend разработчик',
                close: 'закрыть',
                contact: 'Связаться со мной',
                contacts: 'Контакты',
                about: 'Обо мне',
                portfolio: 'Портфолио',
                education: 'Образование',
                skills: 'Навыки',
                hobbies: 'Хобби и Интересы',
                download: 'Скачать моё резюме',
                tel: 'тел',
                cv: 'Резюме',
                address: 'адрес',
                addressLine: 'г. Москва, ул. Вертолётчиков, д. 1, кв. 70. 111674',
                welcome: 'Добро пожаловать в моё портфолио!',
                homeText: 'Привет! Меня зовут Дьячкова Дарья. Я студентка факультета веб-разработки онлайн-университета GeekUniversity.',
                personalInfo: [
                    {point: 'Дата рождения: ', info: ' 6/06/1997'},
                    {point: 'тел: ', info: ' +7 (917) 168 1854'},
                ],
                skillsExt: [
                    {name: 'HTML & CSS', extra: ': HTML5, SCSS, CSS3 & медиа-запросы, адаптивная вёрстка', class: 'bar-fin-adv'},
                    {name: 'JS', class: 'bar-fin-upp'},
                    {name: 'Vue.js', class: 'bar-fin-upp', extra: 'Bootstrap + Vue, Vue CLI', class: 'bar-fin-adv'},
                    {name: 'jQuery', class: 'bar-fin-int'},
                    {name: 'Bootstrap', class: 'bar-fin-adv'},
                ],
                skillsAlso: 'Я также знакома с',
                skillsPlus: ['git', 'webpack', 'Node.js', 'HTML5 canvas', 'БЭМ'],
                reasons: 'Хотя я и заканчиваю 4 курс НИУ ВШЭ, программа Международные отношения, в прошлом году я поняла, что в жизни хотела бы заниматься совсем другим – веб-разработкой. Так, я заново начала свой карьерный путь, и в декабре поступила в GeekUniversity от Geekbrains. Совсем недавно я закончила свой первый семестр (Frontend), и продолжу обучение на платформе ещё год.',
                scholarship: 'Я являюсь получателем гранта Президента РФ',
                languages: 'знание языков',
                languagesExt: [
                    {name: 'английский', level: 'C2 Proficiency ', certification: 'CAE, Grade A'},
                    {name: 'немецкий', level: 'B2 Upper-Intermediate'},
                ],
                education: 'образование',
                department: 'факультет веб-разработки',
                uni: 'НИУ ВШЭ',
                uniDep: ' Факультет мировой экономики и мировой политики',
                experience: 'Опыт работы',
                experienceExt: [
                    {title: 'Практикант', occupation: 'Корпоративный университет Сбербанка, академия технологий и данных', time: '1 апреля 2019 – 1 мая 2019'},
                    {title: 'Стажёр', occupation: 'отдел продаж AVON, подразделение Коммуникаций', time: 'апрель 2018 – август 2018'},
                    {title: 'волонтёр', occupation: 'Школа авторов «Учи Учёного» (Журнал «Россия в глобальной политике»)', time: 'октябрь 2017 – май 2018'},
                    {title: 'Фриланс'},
                ],
                myAccount: {caption: 'Мой профиль на Github', link: 'https://github.com/dariadia'},
                portfolioItems: [
                    {name: 'Лендинг', desc: 'адаптив, Bootstrap, jQuery', src: 'images/portfolio01.png', height: '350', link: './portfolio/website-australia/index.html'},
                    {name: 'Онлайн магазин', desc: 'js-сервер, Vue.js', src: 'images/portfolio02.png', height: '350', link: 'https://github.com/dariadia/homework-BRAND-shop.git'},
                    {name: 'Лендинг', desc: 'адаптив, .scss, БЭМ', src: 'images/portfolio03.png', height: '300', link: './portfolio/coffeeshop/index.html'},
                    {name: 'Игра змейка', desc: ' js', src: 'images/portfolio04.png', height: '300', link: './portfolio/snake_game/index.html'},
                    {name: 'Лендинг', desc: 'параллакс-эффект', src: 'images/portfolio05.png', height: '300', link: './portfolio/parallax_website/index.html'},
                    {name: 'Веб-страничка', desc: 'Vue.js, Vue CLI, Webpack, Bootstrap+Vue', src: 'images/portfolio06.png', height: '300', link: 'https://github.com/dariadia/sample-vue-cli-project.git'},
                ],
            }, 

            // english data
            {
                language: 'eng',
                name: 'Daria V. Diachkova',
                developer: 'Developer',
                developerExt: 'Junior Frontend  Developer',
                close: 'close',
                contact: 'Contact Me',
                about: 'About Me',
                portfolio: 'Portfolio',
                education: 'Education',
                skills: 'Skills',
                hobbies: 'Hobbies & Interests',
                contacts: 'Contacts',
                download: 'Download My CV ',
                tel: 'tel',
                cv: 'CV',
                address: 'address',
                addressLine: '1, Vertoletchikov Street, ap. 70. Moscow, Russia. 111674',
                welcome: 'Have a look around!',
                homeText: 'Hi, I`m Daria Diachkova, a GeekUniversity student. I aspire to realise my passion for writing clean code as a front-end developer. This page is my web-portfolio.',
                personalInfo: [
                    {point: 'Date of Birth: ', info: ' 6/06/1997'},
                    {point: 'tel: ', info: ' +7 (917) 168 1854'},
                ],
                skillsExt: [
                    {name: 'HTML & CSS', extra: ': HTML5, SCSS, CSS3 & media queries, Adaptive Web Design', class: 'bar-fin-adv'},
                    {name: 'JS', class: 'bar-fin-upp'},
                    {name: 'Vue.js', class: 'bar-fin-upp', extra: 'Bootstrap + Vue, Vue CLI', class: 'bar-fin-adv'},
                    {name: 'jQuery', class: 'bar-fin-int'},
                    {name: 'Bootstrap', class: 'bar-fin-adv'},
                ],
                skillsAlso: 'I also know',
                skillsPlus: ['git', 'webpack', 'Node.js', 'HTML5 canvas', 'BEM'],
                reasons: 'I was a senior at the HSE [International Affairs major, Economics minor] when I realised my passion for programming and web development in particular. So I went after my new dream and chose to restart my career path. I enrolled in Geekbrains` GeekUniversity last December and have just finished my first semester (frontend). Can`t wait to discover even more!',
                languages: 'Languages',
                languagesExt: [
                    {name: 'russian', level: 'native'},
                    {name: 'english', level: 'C2 Proficienсy', certification: 'CAE, Grade A'},
                    {name: 'german', level: 'B2 Upper-Intermediate', certification: ''},
                ],
                education: 'education',
                department: 'The Department of Web development',
                uni: 'HSE',
                uniDep: 'The Department of World Economy and International Affairs',
                experience: 'Experience',
                experienceExt: [
                    {title: 'Intern', occupation: 'Sberbank Corporate University, Academy of Technology and Data', time: 'April 1, 2019 – May 1, 2019'},
                    {title: 'Intern', occupation: 'AVON Sales Department, Communications Division', time: 'April 2018 - August 2018', time: 'April 2018 – August 2018'},
                    {title: 'Volunteer', occupation: 'Scientific Reaseach School (curated by the Russia in Global Affairs Journal)', time: 'October 2017 - May 2018'},
                    {title: 'Freelance'},
                ],
                myAccount: {caption: 'Follow me on Github', link: 'https://github.com/dariadia'},
                portfolioItems: [
                    {name: 'Landing page', desc: 'adaptive WD, Bootstrap, jQuery', src: 'images/portfolio01.png', height: '350', link: './portfolio/website-australia/index.html'},
                    {name: 'Online shop', desc: 'js-server, Vue.js', src: 'images/portfolio02.png', height: '350', link: 'https://github.com/dariadia/homework-BRAND-shop.git'},
                    {name: 'Landing page', desc: 'adaptive, .scss', src: 'images/portfolio03.png', height: '300', link: './portfolio/coffeeshop/index.html'},
                    {name: 'The snake game', desc: ' js', src: 'images/portfolio04.png', height: '300', link: './portfolio/snake_game/index.html'},
                    {name: 'Landing page', desc: 'parallax', src: 'images/portfolio05.png', height: '300', link: './portfolio/parallax_website/index.html'},
                    {name: 'Web-page', desc: 'Vue.js, Vue CLI, Webpack, Bootstrap+Vue', src: 'images/portfolio06.png', height: '300', link: 'https://github.com/dariadia/sample-vue-cli-project.git'},
                ],
            }, 

        ],
        lang: 0, // default (0) language is russian
        currentSection: 'home',
        sections: ['home', 'about', 'skills', 'education', 'portfolio', 'contacts'],
        email: 'dariadiachkova@mail.ru',
        tel: '+7 (917) 168 1854',

    },
    methods: {
        toggleLanguage(){
            // if the language is russian (0), this switches language to eng (1)
            if (this.lang === 0){
                this.lang = 1;
            } else { // or back to russian (0) otherwise
                this.lang = 0;
            }
        },
        getSectionName(section){
            if (this.lang === 0){
                if(section === 'home'){
                    return 'На главную';
                }
                if(section === 'about'){
                    return 'Обо мне';
                }
                if(section === 'skills'){
                    return 'Навыки'
                }
                if(section === 'education'){
                    return 'Образование'
                }
                if(section === 'portfolio'){
                    return 'Портфолио'
                }
                if(section === 'contacts'){
                    return 'Контакты'
                }
            } else {
                return section;
            }
        },
        nextSection() {
            // if it's not the last menu comp, then turn to the next comp
            if (this.sections.indexOf(this.currentSection) < this.sections.length - 1) { 
                let nextSection = this.sections.indexOf(this.currentSection) + 1;
                this.currentSection = this.sections[nextSection];
            // if it's the last menu comp, then return to the first one ('home')
            } else {
                this.currentSection = this.sections[0];
            }
            
        },
        previousSection(){
            // if it's not the first menu comp, then turn to the previous comp
            if (this.sections.indexOf(this.currentSection) !== 0) { 
                let prevSection = this.sections.indexOf(this.currentSection) - 1;
                this.currentSection = this.sections[prevSection];
            // if it's the first menu comp, then return to the last one ('contacts')
            } else {
                this.currentSection = this.sections[(this.sections.length - 1)];
            }
        }
    },
    computed:{
        createComp(){
          return `${this.currentSection}`
        }
    },
});

