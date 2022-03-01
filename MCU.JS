function addUser() {
    name= document.getElementById("user_name").value
 
    localStorage.setItem("new",name)
 
     window.location = "second page.html"
 }
