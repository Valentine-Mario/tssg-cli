import express, {Request, Response, NextFunction, Router} from 'express';
const router=Router()

        router.get('/', (req:Request, res:Response, next:NextFunction)=>{
            res.send("home route reached")
        })
        
module.exports = router;
