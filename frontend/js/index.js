const article = document.querySelector('#electric-cars');
// The following would also work:
// const article = document.getElementById("electric-cars")


article.dataset.indexNumber = "12314"
article.dataset.parent = "cars"

article.dataset.columns = "3"
console.log(article.dataset.columns);
