import axios from "axios";

export default class ApiServiceBase<T> {
    private basePath: string;
  
    constructor(basePath: string) {
        this.basePath = basePath;
    }
  
    async getById(id: number): Promise<T | null> {
        try {
            const response = await axios.get(`${this.basePath}/${id}`);
            return response.data as T;
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }
  
    async getAll(): Promise<T[]> {
        try {
            const response = await axios.get(this.basePath);
            return response.data as T[];
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    }
  
    async deleteById(id: number): Promise<boolean> {
        try {
            await axios.delete(`${this.basePath}/${id}`);
            return true;
        } catch (error) {
            console.error('Error deleting data:', error);
            return false;
        }
    }

    async create(data: Partial<T>): Promise<T | null> {
        try {
            const response = await axios.post(`${this.basePath}`, data);
            return response.data as T;
        } catch (error) {
            console.error('Error updating data:', error);
            return null;
        }
    }
  
    async update(data: Partial<T>): Promise<T | null> {
        try {
            const response = await axios.put(`${this.basePath}`, data);
            return response.data as T;
        } catch (error) {
            console.error('Error updating data:', error);
            return null;
        }
    }
}