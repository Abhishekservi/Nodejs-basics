const express = require('express');
const users = require('./MOCK_DATA.json');
const fs = require('fs');

const app = express();

const PORT = 3000;

//MiddleWare - Plugin for express to parse json
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log('Middleware 1 is running');
    next();
})

app.use((req, res, next) => {
    fs.appendFile('log.txt', `${Date.now()} Request Method: ${req.method} Request URL: ${req.path} \n`, (err,data) => {
        next();
    }
)
})

app.get('/', (req, res) => {

    /// Creatinf a custom header
    res.setHeader('X-MyName', 'Abhishek');
    res.status(200).send('Hello World');
})

app.get('/users', (req, res) => {
    const html = 
    `<ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>`

    res.send(html);
})

//Rest Api get all users
app.get('/api/users', (req, res) => {
    res.json(users);
})

//Rest Api get user by id

app
.route('/api/users/:id').get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id ===id);
    if(user){
        res.json(user);
    } else {
        res.status(404).json({status: 'error', message: 'User not found'});
    }
}).patch((req, res) => {

    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (user) {
        // Update user data
        const { first_name, last_name, email } = req.body;
        user.first_name = first_name 
        user.last_name = last_name
        user.email = email 

        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
            if (err) {
                console.error(err);
                return res.json({ status: 'error', message: 'Failed to update user' });
            }
            return res.json({ status: 'success', message: 'User updated successfully' });
        });
    } else {
        res.json({ status: 'error', message: 'User not found' });
    }

}).delete((req, res) => {
    //delete user
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (user) {
        const newUsers =  users.filter((user) => user.id !== id);
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(newUsers), (err, data) => {
            if (err) {
                console.error(err);
                return res.json({ status: 'error', message: 'Failed to delete user' });
            }
            return res.json({ status: 'success', message: 'User deleted successfully' });
        });
    }
   

})



app.post('/api/users', (req,res) => {
    //create user
    const body = req.body;
    if (!body.first_name || !body.last_name || !body.email) {
        return res.status(400).json({ status: 'error', message: 'Please enter all fields' });
    }
    users.push({...body, id : users.length + 500});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
    return res.json({ status : 'sucesss', id: users.length + 499 });
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});