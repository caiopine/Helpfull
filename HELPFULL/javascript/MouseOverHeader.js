const TimelineDescription = document.getElementById("TimelineDescription");
const TimelineButton = document.getElementById("TimelineButton");
const FavoritesDescription = document.getElementById("FavoritesDescription");
const FavoritesButton = document.getElementById("FavoritesButton");
const UserDescription = document.getElementById("UserDescription");
const UserButton = document.getElementById("UserButton");
const ConfigDescription = document.getElementById("ConfigDescription");
const ConfigButton = document.getElementById("ConfigButton");


TimelineButton.onmouseover = ShowTimelineDescription;
TimelineButton.onmouseout = HideTimelineDescription;
FavoritesButton.onmouseover = ShowFavoritesDescription;
FavoritesButton.onmouseout = HideFavoritesDescription;
UserButton.onmouseover = ShowUserDescription;
UserButton.onmouseout = HideUserDescription;
ConfigButton.onmouseover = ShowConfigDescription;
ConfigButton.onmouseout = HideConfigDescription;

function ShowTimelineDescription(){
    TimelineDescription.style.visibility = "visible"
}

function HideTimelineDescription(){
    TimelineDescription.style.visibility = "hidden"
}

function ShowFavoritesDescription(){
    FavoritesDescription.style.visibility = "visible"
}

function HideFavoritesDescription(){
    FavoritesDescription.style.visibility = "hidden"
}

function ShowUserDescription(){
    UserDescription.style.visibility = "visible"
}

function HideUserDescription(){
    UserDescription.style.visibility = "hidden"
}

function ShowConfigDescription(){
    ConfigDescription.style.visibility = "visible"
}

function HideConfigDescription(){
    ConfigDescription.style.visibility = "hidden"
}