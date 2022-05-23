class Translator {
        constructor() {
            this.lang = this.getLanguage();
        }
        
        getLanguage(){
            let lang = navigator.languages[0];
            return lang;
        }
        
        load(lang){
            if(lang) {                         
                let result = fetch(`/locale/${lang}.json`);
                result.then((data) => {
                    return data.json();    
                }).then((qqq) => {
                    console.log(qqq);
                });
            }
        }
};

const trans = new Translator();
console.log(trans.load('ru'));
// trans.getLanguage();
