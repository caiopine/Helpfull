const SearchButton = document.getElementById("SearchButton");
const SearchBackground = document.getElementById("SearchBackground");
const SearchInput = document.getElementById("SearchInput");

var SearchBarActive = 0;

SearchButton.onclick = ActivateSearchBar;

function ActivateSearchBar() {
    if (SearchBarActive == 0){
        SearchBarActive = 1;

        SearchBackground.style.setProperty('width', '175px');
        SearchButton.style.setProperty('transform', 'translateX(0px)');
        SearchInput.style.setProperty('display', 'unset')
    }

    else {
        SearchBarActive = 0;

        SearchBackground.style.setProperty('width', '35px');
        SearchButton.style.setProperty('transform', 'translateX(0px)');
        SearchInput.style.setProperty('display', 'none')
    }
}