import express from "express";

const app = express();
const port = 4000;


// importing student router
import students from "./Routes/1_students.js" 
import students2 from "./Routes/2_students.js" 

// type-1

// app.use('/',students)
app.use('/students',students2)

app.listen( port,()=>{
    console.log(`Server is Listining on Port ${port}`);
})