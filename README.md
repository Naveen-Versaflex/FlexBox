
// basics commands for running FlexBox

    ->for frontend
        PS C:\Users\Administrator\Documents\Flows> cd visual-programming-tool\frontend
        PS C:\Users\Administrator\Documents\Flows\visual-programming-tool\frontend> npm run dev
 
    ->for backend
        PS C:\Users\Administrator\Documents\Flows> cd visual-programming-tool\backend
        PS C:\Users\Administrator\Documents\Flows\visual-programming-tool\backend> node server.js
        along with this docker should run simultaneously

 //Postman API's

      createTopic(POST)
          http://localhost:3000/create-topic
          {
             "topics": [
                { "topic": "test-topic-11", "numPartitions": 1 }
            ]
          }
 
      produce messages(POST)
          http://localhost:3000/produce
          {
            "topic": "test-topic-11",
            "message":"hello,client"
          }


 //For Reference 

      https://github.com/node-red/node-red?tab=readme-ov-file 
      https://github.com/apache/nifi
      
//Software needed
      Docker, Postman
