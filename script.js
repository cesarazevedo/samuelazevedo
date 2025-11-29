// Destacar ano selecionado no <select>
const yearFilter = document.getElementById("yearFilter");
const rows = document.querySelectorAll("#historicoTable tbody tr");

yearFilter.addEventListener("change", () => {
  const year = yearFilter.value;

  rows.forEach((row) => {
    row.classList.remove("highlight");

    if (!year) return;

    const rowYear = row.getAttribute("data-year");
    if (rowYear === year) {
      row.classList.add("highlight");
    }
  });
});

// Também permite clicar em qualquer linha para destacá-la manualmente
rows.forEach((row) => {
  row.addEventListener("click", () => {
    rows.forEach((r) => r.classList.remove("highlight"));
    row.classList.add("highlight");

    const year = row.getAttribute("data-year") || "";
    yearFilter.value = year;
  });
});

// Ano atual no rodapé
document.getElementById("currentYear").textContent = new Date().getFullYear();
