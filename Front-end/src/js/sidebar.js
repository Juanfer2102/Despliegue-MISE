document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const cajaicon = document.querySelectorAll(".cajaelemento");
    const cadasidebar = document.getElementById("cajasidebar1");
    const cajaadmin = document.getElementById("admincaja");
    const toggleButton = document.getElementById("toggleBtn");
    const sidebarLogomini = document.getElementById("logo-min");
    const sidebarLogo = document.getElementById("logo");
    const elements = document.querySelectorAll(".sidebar-element");
    const profilesideBar = document.getElementById("profile");
    const profilesideBar1 = document.getElementById("profile-1");

    toggleButton.addEventListener("click", () => {
        if (sidebar.classList.contains("w-[23rem]")) {
            sidebar.classList.remove("w-[23rem]");
            sidebar.classList.add("w-[5.5rem]");
            cadasidebar.classList.add("pt-[6rem]");
            profilesideBar.classList.remove("block");
            profilesideBar.classList.add("hidden");
            profilesideBar1.classList.remove("block");
            profilesideBar1.classList.add("hidden");
            cajaadmin.classList.add("hidden");
            sidebarLogomini.classList.remove("hidden");
            sidebarLogomini.classList.add("block");
            sidebarLogo.classList.add("hidden");

            elements.forEach((element) => {
                element.classList.add("hidden");
            });
            cajaicon.forEach(element => {
                element.classList.remove("flex");
            });

        } else {
            sidebar.classList.remove("w-[5.5rem]");
            sidebar.classList.add("w-[23rem]");
            cadasidebar.classList.remove("pt-[6rem]");
            sidebarLogomini.classList.remove("block");
            sidebarLogomini.classList.add("hidden");
            profilesideBar.classList.remove("hidden");
            profilesideBar.classList.add("block");
            profilesideBar1.classList.remove("hidden");
            profilesideBar1.classList.add("block");
            sidebarLogo.classList.remove("hidden");
            cajaadmin.classList.remove("hidden");
            sidebarLogo.classList.add("block");
            elements.forEach((element) => {
                element.classList.remove("hidden");
            });
            cajaicon.forEach((element) => {
                element.classList.add("flex");
            });
        }
    });
});

const iconContainers = document.querySelectorAll(".icon-container");
    iconContainers.forEach(iconContainer => {
        iconContainer.addEventListener("click", () => {
            const url = iconContainer.getAttribute("data-url");
            if (url) {
                window.location.href = url;
            }
        });
    });