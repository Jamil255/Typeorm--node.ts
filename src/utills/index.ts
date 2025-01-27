import appDataSource from "../constants/index.js";

 export function getRepos(name: string):any {
    return appDataSource.getRepository(name)
}