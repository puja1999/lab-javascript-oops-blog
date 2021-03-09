class Blog {
  constructor(title, description) {
    (this.title = title), (this.description = description);
  }

  // for the title of the post
  addTitle() {
    var title_card = document.createElement("h1");
    title_card.setAttribute("id", "blog-title");
    title_card.innerHTML += this.title;
    document.getElementById("card-text").appendChild(title_card); // appending title
    console.log(title_card);
  }

  // for the description of the post
  addDescription() {
    let descriptionCard = document.createElement("p");
    descriptionCard.setAttribute("id", "blog-description");
    let text = document.createTextNode(`${this.description}`);
    descriptionCard.appendChild(text);
    document.querySelector("#card-text").appendChild(descriptionCard); // appending description
    console.log(descriptionCard);
  }
}

// selecting add blog button
var $addBlog = document.querySelector("#addBlog");
// selecting close button
var $close = document.querySelector("#close");

var $popup = document.querySelector("#popupContact");

// on clicking addNewPost, poping out popup  asking for details
$addBlog.addEventListener("click", () => {
  $popup.style.display = "block";
});

// closing the popup when user clicks the close button
$close.addEventListener("click", () => {
  $popup.style.display = "none";
});

// when addpost button will be clicked the the title and description varibles will be set in Blog class
// add blog details will be appended/add in card-text element

document.querySelector("#post").addEventListener("click", function () {
  let $title = document.getElementById("title").value;
  let $description = document.getElementById("detail").value;

  if ($title && $description) {
    let blog = new Blog(title, description);
    blog.addTitle();
    blog.addDescription();
    $popup.style.display = "none";
  } else {
    document.querySelector("#message").style.display = "inline-block";
  }
});

//display the blog on clicking the post button
document.querySelector("#post").addEventListener("click", function () {
  document.querySelector("#popupContact").style.display = "none";
  var $img = document.createElement("img");
  $img.setAttribute("src", "./assets/javascript.png");
  document.querySelector("#card-text").appendChild($img);
});
