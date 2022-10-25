import AppDataSource from "../data-source"
import { User } from "../entities/user.entity"
import AppError from "../errors/AppError"


export const getByIdGeneric = async (model: any, instanceId:any , callback?: any) => {

    const modelRepository = AppDataSource.getRepository(model)

    const instance = modelRepository.findOneBy({
        id: instanceId
    })

    if (callback) {
        callback(instance)
    }

    return instance

}


export const getAllObjectsGeneric = async (model: any, callback?: Function) => {

    const modelRepository = AppDataSource.getRepository(model)

    const instances = await modelRepository.find()

    if (callback) {
        callback(instances)
    }

    return instances

}


export const getObjectOr404 = async (model: any, objectKey: any, objectKeyValue: any ) => {

    const modelRepository = AppDataSource.getRepository(model)

    const instances = await modelRepository.find()

    const instance = instances.find(objectInstance => objectInstance[`${objectKey}`] === objectKeyValue)

    if (!instance && model === User) {
        throw new AppError("invalid username", 404);
    }

    if (!instance) {
        throw new AppError("Not found", 404);
    }

    return instance

}