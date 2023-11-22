export class CreateTaskDto {
    title: string;
    description?: string; // Optional field
    isCompleted?: boolean; // Optional field

    constructor(title: string, description?: string, isCompleted?: boolean) {
        this.title = title;
        this.description = description;
        this.isCompleted = isCompleted;
    }
}
