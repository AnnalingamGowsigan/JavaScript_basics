// let Json1 = '{"name":"John", "age":30, "cars": ["Ford", "BMW", "Fiat"]}'
let Json1 = `{
    "name":"John",
    "age":30,
    "cars": [
        { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
        { "name":"BMW", "models":[ "320", "X3", "X5" ] },
        { "name":"Fiat", "models":[ "500", "Panda" ] }
    ]
 }`;
 let Json2 = {
        "st": "hello"
    }
console.log(JSON.parse(Json1)) //converts string to object
console.log(JSON.stringify(Json2)) //converts object to string