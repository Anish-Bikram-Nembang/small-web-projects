const scrollContainer = document.querySelector(".scrollcontent");
const content = document.querySelector(".content");

function createBox() {
    const box = document.createElement("div");
    box.classList.add("box");
    content.appendChild(box);
}

function loadMore(count = 4) {
    for (let i = 0; i < count; i++) {
        createBox();
    }
}

scrollContainer.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = scrollContainer;

    if (scrollTop + clientHeight >= scrollHeight - 100) {
        loadMore();
    }
});

