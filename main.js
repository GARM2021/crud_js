 form = document.getElementById("form");
 input = document.getElementById("input");
 msg = document.getElementById("msg");
 posts = document.getElementById("posts");


 form.addEventListener("submit", (e) => {
     e.preventDefault();
     console.log("button clicked");

     formValidation();
 });



 formValidation = () => {
     if (input.value === "") {
         msg.innerHTML = "Post cannot be blank";
         console.log("failure");
     } else {
         acceptData();
     }
 };

 let data = {};

 let acceptData = () => {
     data["text"] = input.value;
     console.log(data);
     createPost();
 };

 let createPost = () => {
     posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `;
     input.value = "";
 };