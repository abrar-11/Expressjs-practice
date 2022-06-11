import express from "express";

const app = express();
const port = 4000;

// Home page
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Home page</h1>')
    res.end()
})
// Contact page
app.get('/contact', (req, res) => {
    res.send('<h1>Welcome to Contact page</h1>')
    res.end()
})
// About page
app.get('/about', (req, res) => {
    res.send('<h1>Welcome to About page</h1>')
    res.end()
})
// Not Found Page
app.get('*', (req, res) => {
    res.statusCode = 404
    res.send('<h1>404 | Page Not Found</h1>')
    res.end()
})



app.listen( port,()=>{
    console.log(`Server is Listining on Port ${port}`);
})