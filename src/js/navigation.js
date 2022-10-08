const toggleNavigation = document.getElementById("toggleNavigation");
const navigation = document.getElementById("navigation");
const navigationClickLink = document.getElementById("navigationClickLink");

toggleNavigation.addEventListener("change", () => {
	navigation.classList.toggle("-translate-y-full");
});

navigationClickLink.addEventListener("click", () => {
	navigation.classList.toggle("-translate-y-full");
	toggleNavigation.checked = !toggleNavigation.checked;
});
