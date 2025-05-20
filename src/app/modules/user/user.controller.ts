import httpStatus from 'http-status'
import { catchAsync } from '../../utils/catchAsync'
import { UserServices } from './user.service'
import sendResponse from '../../utils/sendResponse'

const createUser = catchAsync(async (req, res) => {
    const result = await UserServices.createUserIntoDB(req.body)
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'User registered successfully',
        data: result,
    })
})

export const UserController = {
    createUser,
}