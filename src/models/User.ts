import {Schema,model,Document} from 'mongoose'

const userSchema = new Schema({
    fullname : { type: String },
    username : { type: String },
    password : { type: String },
    email : { type: String },
    imagePath: { type: String }
},{
    timestamps: true,
    versionKey: false
})

interface IUser extends Document {
    fullname: string;
    username: string;
    password: string;
    email: string;
    imagePath: string;
}

export default model<IUser>('User', userSchema);