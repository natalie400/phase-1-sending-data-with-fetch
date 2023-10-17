// Add your code here
function submitData(name,email)
{

const data= {
   name : name,
     email :email,};


     return fetch("http://localhost:3000/users",{
    method: "POST",
    headers: {
        'Content-Type': "application/json",
        'Accept' : "application/json",  
    },
body: JSON.stringify(data),
}) 
.then(res => res.json())
.then(data => {
    const newId = data.id;

    // Create an element to display the new id 
    const idElement = document.createElement("p");
    idElement.textContent = `New ID is: ${newId}`;

    // Append the id element to the DOM
    document.body.appendChild(idElement);

})
.catch(function (error) {
   let wrong = document.createElement("p")
wrong.textContent = error.message;
document.body.appendChild(wrong);


})
}
