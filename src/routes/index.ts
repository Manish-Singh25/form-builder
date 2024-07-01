import { Router } from 'express'
import User from '../models/Admin';
import Car from '../models/Form';
import House from '../models/User';
const router = Router()


const getUserDetail = async (userId: string) => {
    const user = await User.findById(userId)

    if(!user) {
        throw new Error('User not found')
    }

    return user
}

router.get('/',async (req, res) => {
    res.status(200).send('Welcome to Form Builder API')
})

export default router