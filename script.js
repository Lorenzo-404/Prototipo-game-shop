document.querySelectorAll(".game").forEach(game => {
    game.addEventListener("mouseover", () => {
        let imgUrl = game.dataset.bg;
        document.body.style.background = `url(${imgUrl}) center/cover no-repeat`;
    });
});
