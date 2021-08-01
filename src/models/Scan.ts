import { Schema, model, Document } from 'mongoose'

const scanSchema = new Schema({
    user: { type: String },
    text: { type: String },
    sexting: { type: String },
    date: { type: Date, default: new Date()},
    social: { type: String},
    evidencePath: { type: String },
},{
    timestamps: true,
    versionKey: false
})

interface IScan extends Document {
    user: string,
    text: string,
    sexting: string,
    date: Date,
    social: string,
    evidencePath: string,
}

export default model<IScan>('Scan', scanSchema);