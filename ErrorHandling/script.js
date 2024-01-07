try{

    let num =  prompt("enter a number")
    if(isNaN(num)){
        throw new Error("not a number")
    }
    console.log(num)
}catch(err){
    console.log(err)
}finally{
    console.log("finally")
}