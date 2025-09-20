/* lastSwitch = Date.now()

$(document).ready(function () {
	$(".nav-left").click(prevPreview)
	$(".nav-right").click(nextPreview)
	window.addEventListener("scroll", setNavigationBackground)

	$(".preview-holder .images img").first().addClass("active")

	setInterval(function(){
		if(Date.now() - lastSwitch > 12 * 1000){
			nextPreview()
			lastSwitch = Date.now()
		}
	}, 1000)
})

function setNavigationBackground() {
	if (window.scrollY > 105) {
		$(".top-navigation").addClass("top-navigation-scrolling")
	} else {
		$(".top-navigation").removeClass("top-navigation-scrolling")
	}
}

function nextPreview() {
	const images = $(".preview-holder .images img")
	let active = $(".preview-holder .images img.active")
	let next = active.next("img")

	if (next.length === 0) next = images.first()

	active.removeClass("active")
	next.addClass("active")

	lastSwitch = Date.now()
}

function prevPreview() {
	const images = $(".preview-holder .images img")
	let active = $(".preview-holder .images img.active")
	let prev = active.prev("img")

	if (prev.length === 0) prev = images.last()

	active.removeClass("active")
	prev.addClass("active")

	lastSwitch = Date.now()
}
 */

$(document).ready(() => {

	$(".category .top .right .move-left").click(categoryMoveLeft)
	$(".category .top .right .move-right").click(categoryMoveRight)

	const images = document.querySelectorAll(".preview-holder .images img")
	const btnLeft = document.querySelector(".nav-left")
	const btnRight = document.querySelector(".nav-right")

	let currentIndex = 0
	let autoSlideInterval
	let isCooldown = false
	const slideDelay = 12000 // ms between auto slides
	const cooldownTime = 500 // ms after button click

	function showSlide(newIndex, direction) {
		if (newIndex === currentIndex) return

		const currentImage = images[currentIndex]
		const nextImage = images[newIndex]

		// Remove all animation classes
		images.forEach((img) => {
			img.classList.remove("active", "slide-in-left", "slide-out-left", "slide-in-right", "slide-out-right")
		})

		// Set animation direction
		if (direction === "right") {
			currentImage.classList.add("slide-out-left")
			nextImage.classList.add("slide-in-right")
		} else {
			currentImage.classList.add("slide-out-right")
			nextImage.classList.add("slide-in-left")
		}

		nextImage.classList.add("active")
		currentIndex = newIndex
	}

	function nextSlide() {
		const newIndex = (currentIndex + 1) % images.length
		showSlide(newIndex, "right")
	}

	function prevSlide() {
		const newIndex = (currentIndex - 1 + images.length) % images.length
		showSlide(newIndex, "left")
	}

	function resetAutoSlide() {
		clearInterval(autoSlideInterval)
		autoSlideInterval = setInterval(nextSlide, slideDelay)
	}

	function handleButtonClick(action) {
		if (isCooldown) return
		isCooldown = true

		action()
		resetAutoSlide()

		setTimeout(() => {
			isCooldown = false
		}, cooldownTime)
	}

	btnRight.addEventListener("click", () => {
		handleButtonClick(nextSlide)
	})

	btnLeft.addEventListener("click", () => {
		handleButtonClick(prevSlide)
	})

	// Init
	images[currentIndex].classList.add("active")
	autoSlideInterval = setInterval(nextSlide, slideDelay)

	window.addEventListener("scroll", setNavigationBackground)
})

function setNavigationBackground() {
	if (window.scrollY > 105) {
		$(".top-navigation").addClass("top-navigation-scrolling")
	} else {
		$(".top-navigation").removeClass("top-navigation-scrolling")
	}
}

function categoryMoveRight(e){
	console.log($(e.target).closest(".top").next().get(0))
	const object = $(e.target).closest(".top").next().get(0)
	const scrollAmount = object.offsetWidth * 1
	object.scrollBy({ left: scrollAmount, behavior: "smooth" })
}
function categoryMoveLeft(e){
	console.log($(e.target).closest(".top").next().get(0))
	const object = $(e.target).closest(".top").next().get(0)
	const scrollAmount = object.offsetWidth * 1
	object.scrollBy({ left: -scrollAmount, behavior: "smooth" })
}