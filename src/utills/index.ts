import appDataSource from "../constants/index.js";

 export function getRepos(name: string):any {
    return appDataSource.getRepository(name)
}

export function getError(msg: any): any {
   
     return  msg instanceof Error ? msg.message : 'An unknown error occurred'
}