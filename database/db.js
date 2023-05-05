import mongoose from 'mongoose'
const conectDB=()=>{
    mongoose.connect(process.env.MONG_URL)
    .then(()=>{
        console.log('Database Connected successfully')
    })


}

export default conectDB