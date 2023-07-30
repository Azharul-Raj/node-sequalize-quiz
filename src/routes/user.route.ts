import express from 'express'

import userController from '../controllers/user.controller'

const router=express.Router();

router.route('/')
.get(userController.getUser)
.post(userController.signup)


export default router;