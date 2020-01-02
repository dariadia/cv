Vue.use(VueSmoothScroll);
let cv = new Vue({
  el: "#cv",
  data: {
    language: [
      // russian data
      {
        language: "rus",
        name: "Дьячкова Дарья Валерьевна",
        developer: "разработчик",
        developerExt: "Junior Frontend разработчик",
        close: "закрыть",
        contact: "Связаться со мной",
        contacts: "Контакты",
        about: "Обо мне",
        portfolio: "Портфолио",
        education: "Образование",
        skills: "Навыки",
        hobbies: "Хобби и Интересы",
        download: "Скачать моё резюме",
        tel: "тел",
        cv: "Резюме",
        address: "адрес",
        addressLine: "г. Москва, ул. Вертолётчиков, д. 1, кв. 70. 111674",
        welcome: "Добро пожаловать в моё портфолио!",
        homeText:
          "Привет! Меня зовут Даша. Я – веб-разработчик и студентка онлайн-университета Geekbrains от Mail.ru Group.",
        personalInfo: [
          { point: "Дата рождения: ", info: " 6/06/1997" },
          { point: "тел: ", info: " +7 (917) 168 1854" }
        ],
        skillsExt: [
          {
            name: "HTML & CSS",
            extra: ": HTML5, SCSS, CSS3 & медиа-запросы, адаптивная вёрстка",
            class: "bar-fin-adv"
          },
          { name: "JS", class: "bar-fin-adv" },
          {
            name: "Vue.js",
            class: "bar-fin-upp",
            extra: "Bootstrap + Vue, Vue CLI",
            class: "bar-fin-adv"
          },
          { name: "jQuery", class: "bar-fin-int" },
          { name: "Bootstrap", class: "bar-fin-adv" }
        ],
        skillsAlso: "Я также работала с",
        skillsPlus: [
          "PHP",
          "MySQL",
          "Yii2 basic & advanced",
          "git",
          "БЭМ",
          "Gulp",
          "Webpack",
          "Node.js",
          "Stylus"
        ],
        reasons:
          "Я учусь в Geekbrains уже год; составляю задания по JS и TypeScript для образовательной платформы Kodiri.com и участвую в их международных соревнованиях. По утрам читаю IT дайджесты и люблю узнавать о новых технологиях. В свободное время пишу приключенческие романы.",
        scholarship: "",
        languages: "знание языков",
        languagesExt: [
          {
            name: "английский",
            level: "C2 Proficiency ",
            certification: "CAE, Grade A"
          },
          { name: "немецкий", level: "B2 Upper-Intermediate" }
        ],
        education: "образование",
        department: "факультет веб-разработки",
        uni: "НИУ ВШЭ",
        uniDep: " Факультет мировой экономики и мировой политики",
        experience: "Опыт работы",
        experienceExt: [
          {
            title: "Инженер технической поддержки",
            occupation: "Bookmate",
            time: "июнь 2019 – настоящее время"
          },
          {
            title: "Практикант",
            occupation:
              "Корпоративный университет Сбербанка, академия технологий и данных",
            time: "1 апреля 2019 – 1 мая 2019"
          },
          {
            title: "Стажёр",
            occupation: "отдел продаж AVON, подразделение Коммуникаций",
            time: "апрель 2018 – август 2018"
          },
          {
            title:
              'Участник проекта "Россия в западноевропейской прессе XVIII века"',
            occupation: "НИУ ВШЭ",
            time: "октябрь 2016 — апрель 2018"
          }
        ],
        myAccount: {
          caption: "Мой профиль на Github",
          link: "https://github.com/dariadia"
        },
        myKodiri: {
          caption: "Мой аккаунт на Kodiri",
          link:
            " https://www.kodiri.com/platform/candidates/5dd12f7c0da38f3017d5d5d1"
        },
        portfolioItems: [
          {
            name: "Лендинг",
            desc: "адаптив на 4 типа экранов, .scss, css анимация, БЭМ",
            src: "images/portfolio03.png",
            height: "350",
            link: "./portfolio/coffeeshop/index.html"
          },
          {
            name: "Онлайн магазин",
            desc: "js-сервер, Vue.js",
            src: "images/portfolio02.png",
            height: "350",
            link: "https://github.com/dariadia/homework-BRAND-shop.git"
          },
          {
            name: "Корректор сообщений по стоп словам",
            desc: "js, jQuery",
            src: "images/portfolio07.png",
            height: "350",
            link: "./portfolio/message_tracker/index.html"
          },
          {
            name: "Лендинг",
            desc: "адаптив, Bootstrap, jQuery",
            src: "images/portfolio01.png",
            height: "300",
            link: "./portfolio/website-australia/index.html"
          },
          {
            name: "Игра Шарики",
            desc: "js, jQuery",
            src: "images/portfolio04.png",
            height: "300",
            link: "./portfolio/dots_game/index.html"
          },
          {
            name: "TS Relax",
            desc: "Typescript, HTML5, Gulp, Stylus",
            src: "images/portfolio08.png",
            height: "300",
            link: "https://github.com/dariadia/ts_game"
          },
          {
            name: "Лендинг",
            desc: "параллакс-эффект",
            src: "images/portfolio05.png",
            height: "300",
            link: "./portfolio/parallax_website/index.html"
          },
          {
            name: "База данных",
            desc: "MySQL",
            src: "images/portfolio06.png",
            height: "300",
            link:
              "https://github.com/dariadia/Databases/tree/master/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82"
          }
        ]
      },

      // english data
      {
        language: "eng",
        name: "Daria V. Diachkova",
        developer: "Developer",
        developerExt: "Junior Frontend Developer",
        close: "close",
        contact: "Contact Me",
        about: "About Me",
        portfolio: "Portfolio",
        education: "Education",
        skills: "Skills",
        hobbies: "Hobbies & Interests",
        contacts: "Contacts",
        download: "Download My CV ",
        tel: "tel",
        cv: "CV",
        address: "address",
        addressLine: "1, Vertoletchikov Street, ap. 70. Moscow, Russia. 111674",
        welcome: "Have a look around!",
        homeText:
          "Hi, my name is Dasha, a Geekbrains student and frontend developer. Welcome to my web-portfolio.",
        personalInfo: [
          { point: "Date of Birth: ", info: " 6/06/1997" },
          { point: "tel: ", info: " +7 (917) 168 1854" }
        ],
        skillsExt: [
          {
            name: "HTML & CSS",
            extra: ": HTML5, SCSS, CSS3 & media queries, Adaptive Web Design",
            class: "bar-fin-adv"
          },
          { name: "JS", class: "bar-fin-upp" },
          {
            name: "Vue.js",
            class: "bar-fin-upp",
            extra: "Bootstrap + Vue, Vue CLI",
            class: "bar-fin-adv"
          },
          { name: "jQuery", class: "bar-fin-int" },
          { name: "Bootstrap", class: "bar-fin-adv" }
        ],
        skillsAlso: "I also know",
        skillsPlus: [
          "PHP",
          "MySQL",
          "Yii2 basic & advanced",
          "git",
          "BEM",
          "Gulp",
          "webpack",
          "Node.js",
          "Stylus"
        ],
        reasons:
          "I am a Geekbrains student, and I write training exercises for the educational project Kodiri.com. I also enjoy competing in their international JS coding games. In my free time I write YA novels and read IT digests.",
        languages: "Languages",
        languagesExt: [
          { name: "russian", level: "native" },
          {
            name: "english",
            level: "C2 Proficienсy",
            certification: "CAE, Grade A"
          },
          { name: "german", level: "B2 Upper-Intermediate", certification: "" }
        ],
        education: "education",
        department: "The Department of Web development",
        uni: "HSE",
        uniDep: "The Department of World Economy and International Affairs",
        experience: "Experience",
        experienceExt: [
          {
            title: "Customer Support Engineer",
            occupation: "Bookmate",
            time: "June 2019 - currently"
          },
          {
            title: "Intern",
            occupation:
              "Sberbank Corporate University, Academy of Technology and Data",
            time: "April 1, 2019 – May 1, 2019"
          },
          {
            title: "Intern",
            occupation: "AVON Sales Department, Communications Division",
            time: "April 2018 - August 2018"
          },
          {
            title:
              '"Russia in the 18th Century Western European Press" Project participant',
            occupation: "HSE",
            time: "October 2016 — April 2018"
          }
        ],
        myAccount: {
          caption: "Follow me on Github",
          link: "https://github.com/dariadia"
        },
        myKodiri: {
          caption: "Follow me on Kodiri",
          link:
            " https://www.kodiri.com/platform/candidates/5dd12f7c0da38f3017d5d5d1"
        },
        portfolioItems: [
          {
            name: "Landing page",
            desc: "adaptive, .scss, css animation, BEM",
            src: "images/portfolio03.png",
            height: "350",
            link: "./portfolio/coffeeshop/index.html"
          },
          {
            name: "Online shop",
            desc: "js-server, Vue.js",
            src: "images/portfolio02.png",
            height: "350",
            link: "https://github.com/dariadia/homework-BRAND-shop.git"
          },
          {
            name: "Stop words tracker",
            desc: "js, jQuery",
            src: "images/portfolio07.png",
            height: "350",
            link: "./portfolio/message_tracker/index.html"
          },
          {
            name: "Landing page",
            desc: "adaptive WD, Bootstrap, jQuery",
            src: "images/portfolio01.png",
            height: "300",
            link: "./portfolio/website-australia/index.html"
          },
          {
            name: "The dots game",
            desc: "js, jQuery",
            src: "images/portfolio04.png",
            height: "300",
            link: "./portfolio/snake_game/index.html"
          },
          {
            name: "TS Relax",
            desc: "Typescript, HTML5, Gulp, Stylus",
            src: "images/portfolio08.png",
            height: "300",
            link: "https://github.com/dariadia/ts_game"
          },
          {
            name: "Landing page",
            desc: "parallax",
            src: "images/portfolio05.png",
            height: "300",
            link: "./portfolio/parallax_website/index.html"
          },
          {
            name: "Database",
            desc: "MySQL",
            src: "images/portfolio06.png",
            height: "300",
            link:
              "https://github.com/dariadia/Databases/tree/master/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82"
          }
        ]
      }
    ],
    lang: 0, // default (0) language is russian
    currentSection: "home",
    sections: ["home", "about", "skills", "education", "portfolio", "contacts"],
    email: "dariadiachkova@mail.ru",
    tel: "+7 (917) 168 1854"
  },
  methods: {
    toggleLanguage() {
      // if the language is russian (0), then it switches language to eng (1)
      if (this.lang === 0) {
        this.lang = 1;
      } else {
        // or back to russian (0) otherwise
        this.lang = 0;
      }
    },
    getSectionName(section) {
      if (this.lang === 0) {
        if (section === "home") {
          return "На главную";
        }
        if (section === "about") {
          return "Обо мне";
        }
        if (section === "skills") {
          return "Навыки";
        }
        if (section === "education") {
          return "Образование";
        }
        if (section === "portfolio") {
          return "Портфолио";
        }
        if (section === "contacts") {
          return "Контакты";
        }
      } else {
        return section;
      }
    },
    nextSection() {
      // if it's not the last menu section, then turn to the next section
      if (
        this.sections.indexOf(this.currentSection) <
        this.sections.length - 1
      ) {
        let nextSection = this.sections.indexOf(this.currentSection) + 1;
        this.currentSection = this.sections[nextSection];
        // if it's the last menu section, then return to the first one ('home')
      } else {
        this.currentSection = this.sections[0];
      }
    },
    previousSection() {
      // if it's not the first menu section, then turn to the previous section
      if (this.sections.indexOf(this.currentSection) !== 0) {
        let prevSection = this.sections.indexOf(this.currentSection) - 1;
        this.currentSection = this.sections[prevSection];
        // if it's the first menu section, then return to the last one ('contacts')
      } else {
        this.currentSection = this.sections[this.sections.length - 1];
      }
    }
  },
  computed: {
    createComp() {
      return `${this.currentSection}`;
    }
  }
});
