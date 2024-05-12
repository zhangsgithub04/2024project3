

endPoint = 'http://localhost:3007';

function insert(doc) {

    const customHeaders = {
        "Content-Type": "application/json",
    }

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

function getAll(doc) {

    const customHeaders = {
        "Content-Type": "application/json",
    }

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


