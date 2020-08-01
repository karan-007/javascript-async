//#task1 - Promisify the functions

function fetchRandomNumbers() {
  return new Promise((resolve, reject) => {
    console.log("Fetching number...");
    setTimeout(() => {
      let randomNum = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
      console.log("Received random number:", randomNum);
      resolve(randomNum);
    }, (Math.floor(Math.random() * 5) + 1) * 1000);
  });
}


function fetchRandomString() {
  return new Promise((resolve, reject) => {
    console.log("Fetching string...");
    setTimeout(() => {
      let result = "";
      let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let charactersLength = characters.length;
      for (let i = 0; i < 5; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      console.log("Received random string:", result);
      resolve(result);
    }, (Math.floor(Math.random() * 5) + 1) * 1000);
  });
}


//#Task 2: Fetch a random number -> add it to a sum variable and print sum-> fetch another random variable
//-> add it to the same sum variable and print the sum variable.

function task2() {
    let sum = 0;
  fetchRandomNumbers()
    .then((randomNum) => {
      sum+=randomNum;
      console.log(sum);
    })
    .then(() => {
      fetchRandomNumbers().then((randomNum) => {
        sum+=randomNum
        console.log(sum);
      });
    });
}

task2();

//#Task 3: Fetch a random number and a random string simultaneously, concatenate their
//and print the concatenated string

function task3(){
  let randomNum= fetchRandomNumbers();
  let randomStr= fetchRandomString();
  Promise.all([randomNum,randomStr]).then((r)=>{
    console.log(r[0]+r[1]);
  })
}

task3();

//#Task 4: Fetch 10 random numbers simultaneously -> and print their sum.

function task4(){
  let sum=0;
  let arr=[];
  for(i=0;i<10;i++){
    arr.push(fetchRandomNumbers());
  }
  Promise.all(arr).then((r)=>{
    var sum = r.reduce(function(a, b){
      return a + b;
    });
    console.log(sum);
  });
}

task4();
