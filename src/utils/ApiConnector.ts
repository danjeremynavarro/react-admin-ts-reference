import axios, {AxiosRequestConfig, AxiosResponse, AxiosPromise} from "axios";
/**
 * ApiRequest builder required by ApiConnector
 */
export interface ApiRequest extends AxiosRequestConfig{
    url: string
};

export interface ApiResponse extends AxiosResponse{}

/**
 * ApiConnector using axios. Serves as middleware.
 * Makes it easier to extend stuff
 */
export class ApiConnector {
    static get(c:ApiRequest):AxiosPromise{
        return axios.get(c.url, c)
    }
}