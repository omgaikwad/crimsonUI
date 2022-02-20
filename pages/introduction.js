const showSideBarComponent = document.querySelector(".show-sidebar-components");
const sidebarNavigation = document.querySelector(".sidebar-navigation-btn");

sidebarNavigation.addEventListener("click", () => {
  showSideBarComponent.classList.toggle("display-block");
});
