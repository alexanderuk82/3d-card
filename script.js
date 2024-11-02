document.addEventListener("DOMContentLoaded", () => {
	const cards = document.querySelectorAll(".card");

	const handleMouseMove = (e, card) => {
		const rect = card.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const rotateX = ((y - centerY) / centerY) * -15;
		const rotateY = ((x - centerX) / centerX) * 15;

		card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateZ(50px)
        `;
	};

	const handleMouseLeave = (card) => {
		card.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            translateZ(0)
        `;
	};

	cards.forEach((card) => {
		card.addEventListener("mousemove", (e) => handleMouseMove(e, card));
		card.addEventListener("mouseleave", () => handleMouseLeave(card));
	});
});
