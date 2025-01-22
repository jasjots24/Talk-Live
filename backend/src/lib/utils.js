
import jwt from 'jsonwebtoken'

export const generateToken=(userId , res)=>{

    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '7d'
    })
    
    res.cookie('jwt', token, {
        maxAge: 7*24*60*60*1000,
        httpOnly : true, // SO THAT WE CAN PREVENT IT FROM CROSS SITE SCRIPTING AND NOT READABLE FROM JS
        secure: process.env.NODE_ENV !=="development" // IT ALLOWS THE WEB TO RUN ONLY ON HTTPS AND WE ARE ON DEVELOPMENT SO WE WANT IT FALSE FOR NOW
    })

    return token; 
}
