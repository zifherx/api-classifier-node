import { Request, Response, Handler} from 'express'
import Scan from '../models/Scan'
import axios from 'axios'
// import {config}from 'dotenv'
// config()

export class ScanController{
    static analyzeText:Handler = async (req, res) => {
        
        const { sexting , social} = req.body
        try {
        // console.log(sexting, social)
        const query = await axios.post('http://localhost:5000', {"oracion": sexting} )
        // console.log(query.data)
        const newScan = {
            text: sexting,
            sexting: query.data.Clasificacion,
            social,
        }

        if(query.data.Clasificacion == "Sexting"){
            const newObj = new Scan(newScan)
            await newObj.save()
            return res.status(200).json({message: 'Se almacenó la evidencia', newScan})
        }else{
            return res.status(404).json({message: 'No hay evidencia que guardar'})
        }
        
        } catch (err) {
            console.log(err);
            res.status(409).json({message: err.message})
        }
    }
}