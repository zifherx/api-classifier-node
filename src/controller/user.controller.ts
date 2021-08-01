import { Request, Response } from 'express'
import User from '../models/User'
import path from 'path'
import fs from 'fs-extra'

export class UserController {
    static getAll = async (req: Request, res: Response) => {
        try {
            const query = await User.find();
            if (query.length > 0) {
                res.json(query)
            } else {
                return res.status(404).json({ message: 'No existen usuarios' })
            }
        } catch (err) {
            console.log(err)
            res.status(409).json({ message: err.message })
        }

    }
}