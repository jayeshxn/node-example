const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to our Home Page')
    } else if (req.url === '/about'){
        res.end('Here is our short history')
    } else {
        res.end(`
        <h1>Oops!</h1>
        <h3>Error 404</h3>
        <p>Page not found</p>
        `)
    }
})

server.listen(5000)