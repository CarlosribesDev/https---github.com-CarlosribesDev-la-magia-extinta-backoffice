export class Project {
    id: number;
    name: string;
    description: string;
    status: string;
    startDate: string;
    endDate: string;

    constructor(id: number, name: string, description: string, status: string, startDate: string, endDate: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.status = status;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}

export class CreatedProject {
    name: string;
    description: string;
 
    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}