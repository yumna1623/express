//npm install ejs
// EJS stands for Embedded JavaScript.
// It allows you to write JavaScript code inside HTML files.
// EJS is used to dynamically render HTML pages using server-side data.
// It helps to pass data from the backend (Express.js) to the frontend easily.
// EJS files typically have a .ejs extension.
// To use EJS with Express, you need to set it as the view engine:// app.set('view engine', 'ejs');
// ejs tags : <% = myTopic %>
// <% %> for js
// <%- include ("partials/header") %> for html
{/* <h1><%= myTopic %></h1>
     <div>
        <% {myTopic.forEach((course) => {%>
                <p>  <%= course %></p>
            
        <%    });} %>
        
     </div> */}

const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.set('views' , 'template')


app.get('/', (req, res) => {
// const topic = "EJS template" 
// const course =  [ "Html" , "css"  ,"Javascript" , "React" ]
//     res.render( "index" , {myTopic : course} )
    // we dont use res.sendFile() because its use for static files 
    // and res.render() use for dynamic files
    res.render("index")
})

app.get('/about' , (req,res) =>{
    res.render("about")
})
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
