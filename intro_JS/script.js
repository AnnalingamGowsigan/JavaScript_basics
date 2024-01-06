      //define variable
      let score = 10;
      const pi = 3.14;


      // alert(score);
      console.log("The score is"+ score);

      //special value
      console.log("10/0 = "+ 10/0);
      console.log("-10/0 = "+ -10/0);
      console.log("0/0 = "+ 0/0);

      //comparison
      let a = '5';
      console.log("type of a: "+ typeof a)
      console.log(a == 5)//it only consider value not type
      console.log(a === 5)//it consider both value and type

      //user input 
    //   let name = prompt("what is your name?")
    //   console.log("hi "+ name)

    // let numOfTicket = prompt("how many ticket do you want?")
    // console.log("you should pay "+ Number(numOfTicket)*20)

      //arrays
      let arr = [1,2,3,4,5, "hi", "hello", [1,2]]
      console.log(arr)

      console.log(arr.push(6)) //add element at the end
      console.log(arr.pop()) //remove element from the end
      console.log(arr.shift()) //remove element from the beginning
      console.log(arr.unshift(0)) // add element at the beginning
      delete arr[0] //delete element from array
    
      //split
      let str = "hello world"
      console.log(str.split(" ")) //split string into array

      //join
      let arr2 = ["hello", "world"]
      console.log(arr2.join(" ")) //join array into string

      //slice
      let arr3 = [1,2,3,4,5]
      console.log(arr3.slice(1,3)) //slice array from index 1 to 3  

      //splice
      let arr4 = [1,2,3,4,5]
      console.log(arr4.splice(1,3)) //splice array from index 1 to 3 and return the removed element