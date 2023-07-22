/* Menu */

window.addEventListener("scroll", showMenu)

function showMenu() {
	let header = document.querySelector("header")

	if(window.scrollY == 0){
		header.style.display = "none"
	}
	else {
		header.style.display = "block"
	}
}

/* Themes */

let root = document.documentElement

function lightTheme() {
	root.style.setProperty("--background-pattern1", "#ffffff")
	root.style.setProperty("--color-pattern1", "#6f24da")
	root.style.setProperty("--color-pattern2", "#6f24da")
	root.style.setProperty("--background-pattern2", "#ffffff")

	changeImage(1) /* ver */
}

function neutralTheme() {
	root.style.setProperty("--background-pattern1", "#3E0995")
	root.style.setProperty("--color-pattern1", "#ffffff")
	root.style.setProperty("--color-pattern2", "#000000")
	root.style.setProperty("--background-pattern2", "#ffffff")
	
	changeImage() /* ver */
}

function darkTheme() {
	root.style.setProperty("--background-pattern1", "#1e1e1e")
	root.style.setProperty("--color-pattern1", "#ffffff")
	root.style.setProperty("--color-pattern2", "#ffffff")
	root.style.setProperty("--background-pattern2", "#1e1e1e")

	changeImage() /* ver */
}

function changeImage(num) {
	if(num == 1){
		for(let n=0; n<3; n++){
			let icons = document.querySelectorAll(".icons img")[n]
			let a = icons.getAttribute("src").replace("white", "purple")
			icons.src = a
		}
	}
	else{
		for(let n=0; n<3; n++){
			let icons = document.querySelectorAll(".icons img")[n]
			let a = icons.getAttribute("src").replace("purple", "white")
			icons.src = a
		}
	}
}

/* Slider */

let slider = document.querySelector("#skills .slider")

function slideTransition(slide_num) {
	calc_transition = 33.33 * slide_num /* ver */
	slider.style.transform = `translate3d(-${calc_transition}%, 0px, 0px)`
}

/* window.addEventListener("resize", () =>{
	slideTransition(0)
}) */