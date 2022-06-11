
import express from 'express'

const router = express.Router()


router.get('/students/all', (req, res) => {
        console.log('all');
        res.send('<h1>Sending All Students</h1>')
        res.end()
})
router.post('/students/add', (req, res) => {
        console.log('add');
        res.send('<h1>Add Student</h1>')
        res.end()
})
router.put('/students/update', (req, res) => {
        res.send('<h1>Updating Student Data</h1>')
        res.end()
})
router.delete('/students/delete', (req, res) => {
        res.send('<h1>Deleting Student</h1>')
        res.end()
})





export default router