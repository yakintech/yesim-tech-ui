import { tokenStorageHelper } from "../../../utils/auth/TokenHelper";
import { axiosInstance } from "../../axiosInstance";


export class BaseService {

    private entityUrl: string = ""


    /**
     *
     */
    constructor(url:string) {
        this.entityUrl = url
    }

    //add axiosInterceptor

    /**
     *
     */
    // constructor() {
    //     axiosInstance.interceptors.request.use((config) => {
    //         config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
    //         return config
    //     }
    //     )
    // }


    async getAll(): Promise<ResponseModel> {

        try {
            var token = tokenStorageHelper.getStoreWithDecryption()
            var result = await axiosInstance.get(this.entityUrl, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            if (result.status === 200) {
                var response: ResponseModel = {
                    items: result.data.items,
                    index: result.data.index,
                    size: result.data.size,
                    count: result.data.count,
                    pages: result.data.pages,
                    hasPrevious: result.data.hasPrevious,
                    hasNext: result.data.hasNext
                }
                return response
            }
            else {
                throw new Error("Error")
            }
        } catch (error) {
            throw error
        }
    }

    async getById(id: number): Promise<any> {

        try {
            var token = tokenStorageHelper.getStoreWithDecryption()
            var result = await axiosInstance.get(this.entityUrl, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            if (result.status === 200) {
                return result.data
            }
            else {
                throw new Error("Error")
            }
        } catch (error) {
            throw error
        }

    }
}




interface ResponseModel {
    items: []
    index: number
    size: number
    count: number
    pages: number
    hasPrevious: boolean
    hasNext: boolean
}


//getAll -> return array
//getById -> return object
//create -> return object
//update -> return object
//delete -> return empty