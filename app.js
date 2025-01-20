const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Server del mio blog')
})

app.get('/bacheca', (req, res) => {
    res.json([
        {
            title: "Introduzione a HTML: La Base del Web",
            content: "Scopri cos'è HTML, come funziona e come creare la tua prima pagina web con i tag fondamentali.",
            image: "/img/ciambellone.jpeg",
            tags: ["HTML", "web development", "frontend", "tutorial"]
        },
        {
            title: "Guida Completa a CSS: Stile e Layout",
            content: "Impara come usare CSS per migliorare l'aspetto delle tue pagine web, dai colori ai layout responsivi.",
            image: "css_guide.jpg",
            tags: ["CSS", "design", "frontend", "stili"]
        },
        {
            title: "JavaScript: I Fondamenti per Principianti",
            content: "Scopri le basi di JavaScript, il linguaggio di programmazione più usato nel web moderno.",
            image: "javascript_basics.jpg",
            tags: ["JavaScript", "frontend", "programmazione", "interattività"]
        },
        {
            title: "Introduzione a Node.js: JavaScript sul Server",
            content: "Cos'è Node.js? Scopri come eseguire JavaScript lato server e creare applicazioni veloci e scalabili.",
            image: "nodejs_intro.jpg",
            tags: ["Node.js", "backend", "JavaScript", "server"]
        },
        {
            title: "Express.js: Creare un'API REST in pochi passi",
            content: "Impara a usare Express.js per creare API RESTful e gestire le richieste HTTP in modo efficiente.",
            image: "express_api.jpg",
            tags: ["Express.js", "backend", "API", "Node.js"]
        }
    ])
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
      