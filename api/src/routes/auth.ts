import {Request, Response, Router} from "express";
import {User} from "../entity/User";
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import { isEmpty, validate } from 'class-validator'
import bcrypt from 'bcrypt'

const register = async (req: Request, res: Response) => {

    const {email, username, password} = req.body;


    try{
        // todo validate data
        let errors: any = {}
        const emailUser = await User.findOne({ where: {email}})
        const nameUser = await User.findOne({ where: {username}})

        if (emailUser) errors.email = 'Email is already taken'
        if (nameUser) errors.username = 'Username is already taken'

        if (Object.keys(errors).length > 0) {
            return res.status(400).json(errors)
        }

        // todo create user
        const user = await User.create({ email, username, password })
        console.log("created")

        errors = await validate(user)
        if (errors.length > 0) return res.status(400).json({ errors })

        await user.save()


        // todo retuirn user
        return res.json(user)
    }catch (err) {
        console.error(err)
        return res.status(500).json({ error: "Something went wrong"})
    }

}



const login = async (req: Request, res: Response) => {
    const { username, password } = req.body

    try {
        let errors: any = {}

        if (isEmpty(username)) errors.username = 'Username must not be empty'
        if (isEmpty(password)) errors.password = 'Password must not be empty'
        if (Object.keys(errors).length > 0) {
            return res.status(400).json(errors)
        }

        const user = await User.findOne({ where: {username}})

        if (!user) return res.status(404).json({ error: 'User not found' })

        const passwordMatches = await bcrypt.compare(password, user.password)

        if (!passwordMatches) {
            return res.status(401).json({ password: 'Password is incorrect' })
        }

        console.log("process.env.JWT_SECRET: " + process.env.JWT_SECRET)
        const token = jwt.sign({ username }, process.env.JWT_SECRET)

        res.set(
            'Set-Cookie',
            cookie.serialize('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 3600,
                path: '/',
            })
        )

        return res.json(user)
    } catch (err) {
        console.error(err)
        return res.status(500).json({ error: "Something went wrong"})

    }
}

const router = Router()
router.post("/register", register)
router.post("/login", login)

export default router