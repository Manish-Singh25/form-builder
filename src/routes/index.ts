import { Router } from 'express'
import User from '../models/User';
import Car from '../models/Car';
import House from '../models/House';
const router = Router()


const getUserDetail = async (userId: string) => {
    const user = await User.findById(userId)

    if(!user) {
        throw new Error('User not found')
    }

    return user
}

router.get('/',async (req, res) => {
    console.log('Getting user list')
    const users = await User.find()
    res.status(200).send(users)
})

router.get('/user_detail', async (req, res) => {
    const { userId } = req.query
    const user = await getUserDetail(userId as string)
    res.status(200).send(user)
})

router.post('/add_user', async (req, res) => {
    const { name, email, gender, color, age, address, cars, house } = req.body
    const user = new User({
        name,
        email,
        gender,
        color,
        age,
        address,
        cars,
        house
    })
    await user.save()
    res.status(200).send({message: 'User added', user})
})

router.post('/add_car', async (req, res) => {
    const { name, number, colour, purchaseDate, companyName, userId } = req.body
    const user = await getUserDetail(userId as string)
    const car = new Car({
        name,
        number,
        colour,
        purchaseDate,
        companyName
    })
    await car.save()
    user?.cars.push(car.id)
    await user?.save()
    res.status(200).send({message: 'Car added', user})
})

router.post('/add_house', async (req, res) => {
    const { name, size, address, type, userId } = req.body
    const user = await getUserDetail(userId as string)
    const house = new House({
        name,
        size,
        address,
        type
    })
    await house.save()
    user!.house = house?.id ??''
    await user?.save()
    res.status(200).send({message: 'House added', user})
})
export default router