
import express from 'express'

const router = express.Router()


router.get('/all', (req, res) => {
        console.log('all');
        res.send('<h1>Sending All Students</h1>')
        res.end()
})
router.post('/add', (req, res) => {
        console.log('add');
        res.send('<h1>Add Student</h1>')
        res.end()
})
router.put('/update', (req, res) => {
        res.send('<h1>Updating Student Data</h1>')
        res.end()
})
router.delete('/delete', (req, res) => {
        res.send('<h1>Deleting Student</h1>')
        res.end()
})





export default router