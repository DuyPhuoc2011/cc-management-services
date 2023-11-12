const db = require('./db');

const fetchUser = (email) => {
    return db.any('SELECT * FROM ccmanagement."User" WHERE email = ${email}', {
        email: email
    });
}

const fetchClientsList = () => { 
    return db.any(`SELECT * FROM ccmanagement."Client"`);    
}

const insertClient = (newClientName, newClientDes) => {
    return db.any('INSERT INTO ccmanagement."Client" (client_name, created_date, created_by, description) VALUES (${newClientName}, ${today}, ${createdBy}, ${newClientDes})', {
        today: new Date(),
        createdBy: 'PhuocN',
        newClientName: newClientName,
        newClientDes: newClientDes
    });
}

// const commonDbMethods = {
//     fetchUser: fetchUser
// };

module.exports = {
    fetchUser, 
    fetchClientsList,
    insertClient
}