let cv = new Vue({
    el: '#cv',
    data: {
        language: [
            // заголовки, тексты и сообщения для русского языка
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
                hobbies: 'Хобби и Интересы',
                hobbiesExt: '',
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
                reasons: 'Меня вдохновило TODO',
            }, 

            // для английского
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
                hobbies: 'Hobbies & Interests',
                hobbiesExt: '',
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
                reasons: 'Inspired TODO',
            }, 

        ],
        lang: 0, // по дефолту язык – русский, он переключается нажатием на соответствующую кнопку
        currentSection: 'home',
        sections: ['home', 'about', 'skills', 'education', 'portfolio', 'contacts'],
        email: 'dariadiachkova@mail.ru',
        tel: '+7 (917) 168 1854',

    },
    methods: {
        toggleLanguage(){
            // если язык русский, клик на кнопку переведет резюме на английский
            if (this.lang === 0){
                this.lang = 1;
            } else { // или обратно на русский
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


VueScrollTo.setDefaults({
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
});