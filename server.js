// Imports
const express = require('express')
const app = express()
require('dotenv').config()

// ===== PORT =====
const PORT = 3000

app.listen(PORT, () => console.log(`Express app running on port ${PORT}`))


// ===== MIDDLEWARES =====
app.use(express.json())

