export class Drawing {
    image: string;
    timestamp: string;
    label: number;
    userId?: string;  // Este campo es opcional

    constructor(image: string, label: number, timestamp?: string, userId?: string) {
        this.image = image;
        this.label = label;
        this.timestamp = timestamp || new Date().toISOString(); // Si no se proporciona una fecha, usa la fecha actual
        this.userId = userId;
    }
}
