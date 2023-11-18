 import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"


 const password = encodeURIComponent("OscarDiego"); // Replace with your actual password
 const username = encodeURIComponent('apistol5395'); // Replace with your actual password
 const cluster = "cluster0.iewtgka.mongodb.net";

 export const AppDataSource = new DataSource({
    type: "mongodb",
    // host: `mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority`,
    host: "localhost",
    synchronize: false,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
