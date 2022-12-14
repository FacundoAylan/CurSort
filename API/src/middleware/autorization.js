const jwt = require('jsonwebtoken');

const autorization = (req, res , next) =>{
    const token = req.get('jwt')
    
    jwt.verify(token, 'secret', (error, decoded)=>{
        if(error) return res.status(401).json(error);

        next()
    });

}

module.exports = autorization;