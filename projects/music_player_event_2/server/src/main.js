//server factory
const express = require("express") 
const uuid = require("uuid")
const cors = require("cors")

//creating a server
const app = express(); 
app.use(cors())

//localhost:4444 -> Hello , You have create a API
app.get("/",(request,response)=>{
    response.send({message:"Hello , You have create a Root API"});
})

app.get("/songs",(request,response)=>{
    response.send([
        {
            id:uuid.v4(),
            title: "Nenjukkul Peidhidum",
            trackPath : "assets/music/hey.mp3",
            coverPhotoPath : "assets/images/hey.jpg"
        },
        {
            id:uuid.v4(),
            title: "Maya Nadhi",
            trackPath : "assets/music/summer.mp3",
            coverPhotoPath : "assets/images/summer.jpg"
        },
        {
            id:uuid.v4(),
            title: "Aagayam thee pidicha",
            trackPath : "assets/music/ukulele.mp3",
            coverPhotoPath : "assets/images/ukulele.jpg"
        }
    ]);
})

//started server
app.listen(4444,()=>{
   console.log("server started")
})

