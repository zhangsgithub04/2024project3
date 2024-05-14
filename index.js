

endPoint = 'http://localhost:3007';

const customHeaders = {
    "Content-Type": "application/json",
}


function insert(doc) {

    
    fetch(endPoint, {
        method: "POST",
        headers: customHeaders,
        body: JSON.stringify(doc),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
}

function deleteById(id)
{
    fetch('https://api.example.com/data')
  
    fetch(endPoint+'/'+id, {
        method: "DELETE",
        headers: customHeaders,
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  

}

function getAll() {
    fetch(endPoint, {
        method: "GET",
        headers: customHeaders,
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
}


// Need to prepare doc based on user input from the keyword, 
//like your solution to the last assignment 

getAll();

doc = { "name": "tester", "course": "troom", "roll_no": "111" }
insert(doc);

id="66412ed093c2134a40c10292";
deleteById(id);

