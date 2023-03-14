// https://medium.com/@mignunez/how-to-create-a-responsive-hamburger-menu-with-html-css-javascript-4dc10a45d3

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// 向汉堡包类添加点击事件以激活菜单。 如果菜单已经显示，它只会将其隐藏起来。
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

// 还要为每个页面链接添加一个点击事件。 现在，当用户单击链接时，菜单会隐藏起来。
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))