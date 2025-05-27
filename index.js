const buttonEls = document.querySelectorAll(".btn");
const textareaEls = document.querySelectorAll("textarea");

textareaEls.forEach((textareaEl) => {
	textareaEl.addEventListener("input", () => {
		const maxlength = textareaEl.maxLength;
		const valueCount = textareaEl.value.length;
		const percentCount = valueCount / maxlength;

		textareaEl.parentElement.style.setProperty("--value", percentCount);
		textareaEl.parentElement.dataset.left = maxlength - valueCount;
	});
});

buttonEls.forEach((buttonEl) => {
	buttonEl.addEventListener("click", () => {
		const parentEl = buttonEl.parentElement;
		const answerEl = parentEl.nextElementSibling;
		const textareaValue = parentEl.querySelector("textarea").value;
		const answerPara = document.createElement("p");

		answerPara.textContent = textareaValue;
		answerPara.classList.add("tighter");

		answerEl.append(answerPara);
		parentEl.querySelector("textarea").value = "";
		parentEl.style.setProperty("--value", 0);
	});
});
