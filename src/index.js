import express  from "express";
import bodyParser from "body-parser"


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("../public"));

app.get("/",(req,res)=>{
    // res.send("<h1>This is home page</h1>")
    res.render("index.ejs", { tasks: tasks })
})
let tasks = []
app.post("/submit",(req,res)=>{
    const text = req.body["task"]
    tasks.push(text)
    // console.log(task)
    res.render("index.ejs",{tasks:tasks})
    // res.render("index.ejs")
})
app.get("/work",(req,res)=>{
    res.render("work.ejs")
})
app.listen(port, ()=>{
    console.log(`This port is running at ${port}`)
})

// <!-- <% for(uint i=0;i<) %> -->

// <% for(uint i=0;i<tasks.length;i++){ %>
// <%= tasks[i]   %>
//     <% } %>

// <% console.log(locals.tasks) %>
// <ul>
// <% locals.tasks.map((task)=>{ %>
//   <li> <%= task %> </li>
// <% }) %>
// </ul>
