/* rolagem suave do overflow-image */

/* function overflowMovimentDown() {
	let overflow_projects = document.querySelector(".overflow-image")
	overflow_projects.scrollTo(0, overflow_projects.scrollHeight)
}

function overflowMovimentUp() {
	let overflow_projects = document.querySelector(".overflow-image")
	overflow_projects.scrollTo(0, 0)
}
 */

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