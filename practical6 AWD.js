// Import the built-in HTTP module 
const http = require('http'); 
// Create the server 
const server = http.createServer((req, res) => { 
// Set the response header to HTML 
res.setHeader('Content-Type', 'text/html'); 
 
    // Get the URL from the request object 
    const url = req.url; 
 
    // Routing logic based on URL 
    if (url === '/' || url === '/home') { 
        res.statusCode = 200; 
        res.write('<h1>Welcome to the Home Page</h1>'); 
        res.write('<p>This is the main content of our Node.js server. Developed by Narendra 09.</p>'); 
    }  
    else if (url === '/about') { 
        res.statusCode = 200; 
        res.write('<h1>About Us</h1>'); 
        res.write('<p>We are learning Advanced Web Development (MCA).</p>'); 
    }  
    else if (url === '/contact') { 
        res.statusCode = 200; 
        res.write('<h1>Contact Page</h1>'); 
        res.write('<p>Email us at: student@university.edu</p>'); 
    }  
    else { 
        // Handling 404 - Page Not Found 
        res.statusCode = 404; 
        res.write('<h1 style="color: red;">404 - Page Not Found</h1>'); 
        res.write('<p>The URL you requested does not exist.</p>'); 
    } 
 
    // End the response 
    res.end(); 
}); 
 
// Server listens on port 3000 
const PORT = 3000; 
server.listen(PORT, () => { 
    console.log(`Server is running at http://localhost:${PORT}`); 
console.log('Try visiting /about or /contact in your browser.'); 
console.log('Made by Narendra 09.'); 

});