export class WeatherData {
    public cityName?: string;
    public temperature?: number;
    public description?: string;
    public humidity?: number;
    public wind?: number;
    public icon?: string;
    constructor(
        cityName: string, 
        temperature: number, 
        description: string, 
        humidity: number, 
        wind: number,
        icon: string,
    ) {
        this.cityName = cityName; 
        this.temperature = temperature; 
        this.description = description; 
        this.humidity = humidity; 
        this.wind = wind;
        this.icon = icon;
    }
}