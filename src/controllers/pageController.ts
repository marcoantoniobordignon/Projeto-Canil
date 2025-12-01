import { Request, Response } from "express";

export const home = ( req: Request, res: Response ) => {
    res.send('Home no Controller!')
    //res.render()
}

export const dogs = ( req: Request, res: Response ) => {
    res.send('/Dogs no Controller!')

    //res.render()
}
export const cats = ( req: Request, res: Response ) => {

    //res.render()
}
export const fishes = ( req: Request, res: Response ) => {

    //res.render()
}