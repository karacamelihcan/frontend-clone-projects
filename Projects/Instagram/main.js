const tabList = document.querySelectorAll(".navigation-item");
const tabContent = document.querySelectorAll(".tab-content");

const imagesList = document.querySelectorAll(".tab-content > div > div > div > img");

RandomImageGenerate();

function RandomImageGenerate(){
    imagesList.forEach(element => {
        element.setAttribute("src",`https://picsum.photos/id/${RandomNumberGenerate()}/300`);
    });
}

function RandomNumberGenerate(){
    return Math.floor(Math.random() * (400 - 1 + 1)) + 1;
}

function openTab(e){
    makeTabPasive();
    RemoveShow();
    this.classList.add("active-tab");
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add("show");
}

function makeTabPasive(){
    tabList.forEach(element => {
        element.classList.remove("active-tab");
    });
}

function RemoveShow(){
    tabContent.forEach(element => {
        element.classList.remove("show");
    });
}

tabList.forEach(element => {
    element.addEventListener("click",openTab);
});
