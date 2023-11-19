import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Product } from "./entity/Product"

 const username = encodeURIComponent("apistol5395");
 const password = encodeURIComponent("Ff5395!!");
 const cluster = "cluster0.iewtgka.mongodb.net";

 let uri = `mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority`;



 export const AppDataSource = new DataSource({
    type: "mongodb",
     url: uri, // Use the Atlas connection string
    database: "deedit",
    synchronize: false,
    logging: false,
    entities: [User, Product],
    migrations: [],
    subscribers: [],
})
