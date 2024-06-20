const summaryList = document.querySelector(".summary-list");

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const listItem = document.createElement("div");
      listItem.classList.add("summary-item");
      listItem.classList.add(item.category.toLowerCase());
      listItem.innerHTML = `
        <div class="category">
          <img src="${item.icon}" alt="${item.category}" />
          <p class="title">${item.category}</p>
        </div>
        <div class="score-container">
          <p class="score">${item.score}</p>
          <span>/100</span>
        </div>
      `;
      summaryList.appendChild(listItem);
    });
  });
