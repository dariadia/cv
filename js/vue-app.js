let cv = new Vue({
    el: '#cv',
    data: {
        language: [
            // заголовки, тексты и сообщения для русского языка
            {
                language: 'rus',
                name: 'Дьячкова Дарья Валерьевна',
                search: 'Что бы вы хотели найти?',
                close: 'закрыть',
                contact: 'Связаться со мной!',
                contacts: 'Контакты',
                download: 'Скачать моё резюме',
                tel: 'тел',
                cv: 'Резюме',
            }, 

            // для английского
            {
                language: 'eng',
                name: 'Daria V. Diachkova',
                search: 'What would you like to know?',
                close: 'close',
                contact: 'Contact Me!',
                contacts: 'Contacts',
                download: 'Download My CV ',
                tel: 'tel',
                cv: 'CV',
            }, 

        ],
        lang: 0, // по дефолту язык – русский, он переключается нажатием на соответствующую кнопку
        currentSection: 'home',
        sections: ['home', 'about', 'skills', 'education', 'portfolio', 'contacts'],
        email: 'dariadiachkova@mail.ru',
        tel: '+7 (917) 168 1854'

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