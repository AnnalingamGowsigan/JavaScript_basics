let travelBook = new Promise((resolve, reject)=>{
    let bookStatus = true;
    if (bookStatus){
        resolve(850);
    }else{
        reject();
    }
})

travelBook.then(sucess).catch(failure);

function sucess(amt){
    console.log(`I am going to travel with ${amt}`);
}

function failure(){
    console.log("I am not going to travel");
}


//second example

function coinToss(){
    return new Promise((resolve, reject)=>{
        let random = Math.floor(Math.random()*2);
        if (random === 0 ){
            resolve ("heads")
        }else{
            reject("tails")
        }
    })
}

coinToss().then((data)=>{ console.log(data)}).catch((data)=>{console.log(data)});