window.onload = function (){
    const LanguageListButton = document.getElementById('LanguageListButton');
    const LanguageList = document.getElementById('LanguageList');

    LanguageListButton.onclick = OpenLangList;

    function OpenLangList() {
        

        if (getComputedStyle(LanguageList).getPropertyValue('visibility') == 'hidden') {
            LanguageList.style.setProperty('visibility', 'visible');
        }

        else {
            LanguageList.style.setProperty('visibility', 'hidden');
        }
    }
    
}