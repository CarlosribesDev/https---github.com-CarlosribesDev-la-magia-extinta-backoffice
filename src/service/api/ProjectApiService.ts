import { Project } from "@/model";
import ApiService from "./ApiService";

class ProjectApiService extends ApiService<Project> {

    constructor() {
        super('https://admin-back-production-bc03.up.railway.app/api/v1/projects');
    }
}

const service = new ProjectApiService();
export default service;

