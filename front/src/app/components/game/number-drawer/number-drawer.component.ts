import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NumberService } from '../../../services/number/number.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-number-drawer',
  templateUrl: './number-drawer.component.html',
  styleUrls: ['./number-drawer.component.css']
})
export class NumberDrawerComponent implements AfterViewInit {
  
  errorMessage : string[] = [];
  numeroMNIST: number;

  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private drawing = false;

  constructor(private numberService: NumberService, private router: Router) {
    // Aquí puedes inicializar el número MNIST aleatoriamente
    this.numeroMNIST = this.generarNumeroAleatorio();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    canvas.width = 400;
    canvas.height = 400;

    canvas.addEventListener('mousedown', this.startDrawing.bind(this));
    canvas.addEventListener('mousemove', this.draw.bind(this));
    canvas.addEventListener('mouseup', this.stopDrawing.bind(this));
    canvas.addEventListener('mouseout', this.stopDrawing.bind(this));
  }

  // --------------------------------------------- METODOS ASOCIADOS AL LIENZO DE DIBUJO DE NÚMEROS ---------------------------------------
  startDrawing(event: MouseEvent): void {
    this.drawing = true;
    this.draw(event);
  }

  draw(event: MouseEvent): void {
    if (!this.drawing) return;
    this.ctx.lineWidth = 10;
    this.ctx.lineCap = 'round';
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
  }

  stopDrawing(): void {
    this.drawing = false;
    this.ctx.beginPath();
  }

  borrarTodo(): void {
    this.ctx.clearRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);
  }

  // --------------------------------------------- METODOS ASOCIADOS AL ENVIO DE NÚMEROS AL SERVIDOR ---------------------------------------
  enviarDibujo(): void{
    const imageData = this.ctx.getImageData(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);
    // Convertir a escala de grises (opcional según tus necesidades)
    for (let i = 0; i < imageData.data.length; i += 4) {
      const avg = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
      imageData.data[i] = avg; // rojo
      imageData.data[i + 1] = avg; // verde
      imageData.data[i + 2] = avg; // azul
    }
    this.ctx.putImageData(imageData, 0, 0);
  
    // Convertir a Base64
    const dataUrl = this.canvasRef.nativeElement.toDataURL('image/png');
    // console.log(dataUrl);

    // enviar al servicios
    this.addNumber(dataUrl);
  }

  /*
    Llamada al servicio para insertar el dibujo en la BDs
  */
  private addNumber(number : string) {
    this.errorMessage = [];
    this.numberService.addNumber(number).subscribe({
      next: (response) => {
        
        console.log('Número insertado con exito', response);
        // redirección a la lista de
        this.router.navigate(['/number-drawer']);

      },
      error: (error) => {
        console.log("Error/es al insertar el número: ", error);
        // if (error.messages !== undefined) {
        //   error.messages.forEach((messageArray: string[]) => {
        //     messageArray.forEach((message) => {
        //       this.errorMessage.push(message);
        //     });
        //   });        }

      }
    });

    this.numberService.addNumber(number).subscribe({
      next: (response) => {
        
        console.log('Número insertado con exito', response);
        // redirección a la lista de
        this.router.navigate(['/number-drawer']);

      },
      error: (error) => {
        console.log("Error/es al insertar el número: ", error);
        // if (error.messages !== undefined) {
        //   error.messages.forEach((messageArray: string[]) => {
        //     messageArray.forEach((message) => {
        //       this.errorMessage.push(message);
        //     });
        //   });        }

      }
    });
  }

    // --------------------------------------------- OTROS METODOS ---------------------------------------
  generarNumeroAleatorio(): number {
    // Simulación de obtención de un número aleatorio, ajusta según tu lógica
    return Math.floor(Math.random() * 10);
  }
}
