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
                download: 'Скачать резюме',
                tel: 'тел',
            }, 

            // для английского
            {
                language: 'eng',
                name: 'Daria V. Diachkova',
                search: 'What would you like to know?',
                close: 'close',
                contact: 'Contact Me!',
                download: 'Download My CV as A',
                tel: 'tel',
            }, 

        ],
        lang: 0, // по дефолту язык – русский, он переключается нажатием на соответствующую кнопку
        currentSection: 'home',
        sections: ['home', 'about', 'skills', 'education', 'portfolio', 'contacts'],

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
    },
    computed:{
        createComp(){
          return `${this.currentSection}`
        }
    },
});