import { Time } from "@angular/common";

export interface Convocatoria {
rival: string;
direccion: string;
fechaConvocatoria: Date;
horaComienzo: Time;
horaFin: Time;
horaConvocatoria: Time;
resumen: string;
finalizado: string;
firma: string;
golesEquipo: number;
golesRival: number;
codigo: string;
}
