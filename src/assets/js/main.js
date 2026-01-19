// Bookshelf interactivity
document.addEventListener("DOMContentLoaded", () => {
	const bookItems = document.querySelectorAll(".book-item");
	const modal = document.getElementById("book-modal");

	bookItems.forEach((book) => {
		book.addEventListener("click", () => {
			const title = book.dataset.title;
			const author = book.dataset.author;
			const notes = book.dataset.notes;

			document.getElementById("modal-title").textContent = title;
			document.getElementById("modal-author").textContent =
				`by ${author}`;
			document.getElementById("modal-notes").textContent =
				notes || "No notes yet.";

			modal.classList.remove("hidden");
		});
	});

	// Close modal when clicking outside
	modal?.addEventListener("click", (e) => {
		if (e.target === modal) {
			closeBookModal();
		}
	});
});

function closeBookModal() {
	document.getElementById("book-modal")?.classList.add("hidden");
}

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") {
		closeBookModal();
	}
});
