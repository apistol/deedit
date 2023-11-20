import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Product } from "./entity/Product"

 const username = process.env.MONGO_USER;
 const password = process.env.MONGO_PASS;
 const cluster = process.env.CLUSTER;


console.log("username :" + username)
console.log("password :" + password)
console.log("cluster :" + cluster)

 let uri = `mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority`;



 export const AppDataSource = new DataSource({
    type: "mongodb",
    url: uri, // Use the Atlas connection string
    database: "deedit",
    synchronize: true,
    logging: false,
    entities: [User, Product],
    migrations: [],
    subscribers: [],
})
