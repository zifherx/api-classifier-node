import express from 'express'
import morgan from "morgan"
import helmet from "helmet"
import cors from 'cors'
import {config} from 'dotenv'
import indexRoutes from "./routes/index";

config()
const app = express()

//Settings
app.set('port', Number(process.env.PORT) || 4000)

//Middlewares
// app.use(helmet())
app.use(cors({
    origin: '*',
    methods: "GET,HEAD,POST",
    preflightContinue: false,
    optionsSuccessStatus: 200
}))
app.use(morgan('dev'))
app.use(express.json())

//Routes
app.use('/api',indexRoutes)

export default app;