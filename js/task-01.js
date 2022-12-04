const NumberOfCategories = document.querySelectorAll(".item");
console.log("Number of categories :", NumberOfCategories.length);

NumberOfCategories.forEach((element) => {
    const categoryTitle = element.querySelector(".item h2").textContent;
    console.log("Category :", categoryTitle);
    const liOfElements = element.querySelectorAll(".item li").length;
    console.log("Elements :", liOfElements);
});


