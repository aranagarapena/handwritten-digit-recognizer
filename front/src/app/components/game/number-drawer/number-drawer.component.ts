import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-number-drawer',
  templateUrl: './number-drawer.component.html',
  styleUrls: ['./number-drawer.component.css']
})
export class NumberDrawerComponent implements AfterViewInit {
  
  numeroMNIST: number;

  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private drawing = false;

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

  constructor() {
    // Aquí puedes inicializar el número MNIST aleatoriamente
    this.numeroMNIST = this.generarNumeroAleatorio();
  }

  ngOnInit(): void {
  }

  enviarDibujo(): void{

  }

  generarNumeroAleatorio(): number {
    // Simulación de obtención de un número aleatorio, ajusta según tu lógica
    return Math.floor(Math.random() * 10);
  }

  borrarTodo(): void {
    this.ctx.clearRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);
  }


}
