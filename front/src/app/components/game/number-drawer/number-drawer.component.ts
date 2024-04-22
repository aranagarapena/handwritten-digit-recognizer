import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NumberService } from '../../../services/number/number.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageDetailsModalComponent } from '../image-details-modal/image-details-modal.component';
import { Drawing } from '../../../models/drawing.model';

/*
  TODO: Cuando implemente el inicio de sesión, aquí hay que añadir la posibilidad de ingresar el ID de usuario en la BDs
  TODO: Queda pendiente trabajar con objetos Drawing (como en el modal) y pasarlos al backend. Hay dos arrays de miniaturas y uno de ellos es tipo string
  TODO: Habría que leer de la BDs las miniaturas si se les hace click encima y dar la posibilidad de editarlas
*/
@Component({
  selector: 'app-number-drawer',
  templateUrl: './number-drawer.component.html',
  styleUrls: ['./number-drawer.component.css']
})
export class NumberDrawerComponent implements AfterViewInit {
  
  errorMessage : string[] = [];
  numeroMNIST: number;
  hasDrawn: boolean = false;
  miniaturas: string[] = [];
  miniaturasDrawing: Drawing[] = [];


  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private drawing = false;

    // --------------------------------------------- REALIZAMOS ESTO AL INICIAR EL COMPONENTE ---------------------------------------
  constructor(private numberService: NumberService, private router: Router, private modalService: NgbModal) {
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
    this.hasDrawn = true;

  }

  terminar(): void {
    this.router.navigate(['/home']);
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
    this.hasDrawn = false;

  }

  openDetailsModal(index: number) {
    const modalRef = this.modalService.open(ImageDetailsModalComponent);
    modalRef.componentInstance.drawing = this.miniaturasDrawing[index];

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
    this.miniaturas.push(dataUrl);

    // generamos el objeto que queremos enviar al servidor
    const payload = {
      image: dataUrl,
      metadata: {
        timestamp: new Date().toISOString(),
        label: this.numeroMNIST,
        userId: null
        // userId: userId || null 
      }
    };

    const drawing = new Drawing(dataUrl, this.numeroMNIST, new Date().toISOString());  
    this.miniaturasDrawing.push(drawing);

    // enviar número al servicios
    this.addNumber(payload);

    this.numeroMNIST = this.generarNumeroAleatorio();
    this.borrarTodo();
  }

  /*
    Llamada al servicio para insertar el dibujo en la BDs
  */
  private addNumber(number : Object) {
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
  }
    // --------------------------------------------- OTROS METODOS ---------------------------------------
  generarNumeroAleatorio(): number {
    // Simulación de obtención de un número aleatorio, ajusta según tu lógica
    return Math.floor(Math.random() * 10);
  }

  
}
