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

/* 
let body = document.querySelector("body")

function lightTheme() {
	let theme = body.className
	body.classList.replace(theme, "lighttheme")

	changeImage(1)
}

function neutralTheme() {
	let theme = body.className
	body.classList.replace(theme, "neutraltheme")

	changeImage()
}

function darkTheme() {
	let theme = body.className
	body.classList.replace(theme, "darktheme")

	changeImage()
}
*/

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