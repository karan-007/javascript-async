function getBoard(callback) {
  console.log('Fetching board...');
  return setTimeout(function() {
    let board = {
      id: "def453ed",
      name: "Thanos"
    };
    console.log('Received board');
    callback(board);
  }, 1000);
}

function getLists(boardId, callback) {
  console.log(`Fetching lists for board id ${boardId}...`);
  return setTimeout(function() {
    let lists = {
      def453ed: [
        {
          id: "qwsa221",
          name: "Mind"
        },
        {
          id: "jwkh245",
          name: "Space"
        },
        {
          id: "azxs123",
          name: "Soul"
        },
        {
          id: "cffv432",
          name: "Time"
        },
        {
          id: "ghnb768",
          name: "Power"
        },
        {
          id: "isks839",
          name: "Reality"
        }
      ]
    };
    console.log(`Received lists for board id ${boardId}`);
    callback(lists[boardId]);
  }, 1000);
}

function getCards(listId, callback) {
  console.log(`Fetching cards for list id ${listId}...`);
  return setTimeout(function() {
    let cards = {
      qwsa221: [
        {
          id: "1",
          description: `Having acquired the Power Stone, one of the six Infinity Stones,from the planet Xandar`
        },
        {
          id: "2",
          description: `Having acquired the Power Stone, one of the six Infinity Stones,from the planet Xandar`
        },
        {
          id: "3",
          description: `Having acquired the Power Stone, one of the six Infinity Stones,from the planet Xandar`
        }
      ],
      jwkh245: [
        {
          id: "1",
          description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
        },
        {
          id: "2",
          description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
        },
        {
          id: "3",
          description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
        },
        {
          id: "4",
          description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
        }
      ],
      azxs123: [
        {
          id: "1",
          description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
        },
        {
          id: "2",
          description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
        }
      ],
      cffv432: [
        {
          id: "1",
          description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
        },
        {
          id: "2",
          description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
        }
      ],
      ghnb768: [
        {
          id: "1",
          description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
        },
        {
          id: "2",
          description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
        }
      ]
    };
    console.log(`Received cards for list id ${listId}`);
    callback(cards[listId]);
  }, 1000);
}

// Task 1 board -> lists -> cards for list qwsa221

function task1(id, callback) {
  getBoard((board) => {
    getLists(board.id, (lists) => {
      let ourList = lists.filter((list) => list.id === id);
      console.log(ourList);
      let list_id = ourList[0].id;
      getCards(list_id, (card) => {
        callback(card);
      });
    });
  });
}

task1("qwsa221", function (card) {
  console.log(card);
});


// Task 2 board -> lists -> cards for list qwsa221 and cards for list jwkh245 simultaneously

function task2(id1,id2,callback){
  getBoard((board)=>{
    getLists(board.id,(lists)=>{
      let ourList=lists.filter((list)=>list.id===id1||list.id==id2);
      ourList.map((list)=>{
        getCards(list.id,(card)=>{
          callback(card);
        })
      })
    })
  })
  
}

task2('qwsa221','jwkh245',function(card){
  console.log(card);
});


// Task 3 board -> lists -> cards for all lists simultaneously

function task3(callback){
  getBoard((board)=>{
    getLists(board.id,(lists)=>{
      lists.map((list)=>{
        getCards(list.id,(card)=>{
          callback(card);
        })
      })
    })
  })
}

task3(function(card){
  console.log(card);
});