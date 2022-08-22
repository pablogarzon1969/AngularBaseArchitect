import { faker } from "@faker-js/faker"

import {User} from './user.model'

export const generateOneUser = (): User => {
    return {
        id: faker.datatype.number(),
        username :faker.datatype.string(),
        password: faker.datatype.string(),
        firstName:faker.datatype.string(),
        lastName:faker.datatype.string(),
        authdata: faker.datatype.string()
    };
}

export const generateManyUsers = (size = 10): User[]=>{
    const users:User[] = []
    for(let index = 0; index < size;index++){
        users.push(generateOneUser());
    }
    return [...users];
}
