import { Component } from '@angular/core';

interface Tarea {
  id: number;
  texto: string;
  completada: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  tareas: Tarea[] = [];
  nuevaTareaTexto = '';

  agregarTarea() {
    if (this.nuevaTareaTexto.trim() !== '') {
      const nuevaTarea: Tarea = {
        id: Date.now(),
        texto: this.nuevaTareaTexto,
        completada: false
      };
      this.tareas.push(nuevaTarea);
      this.nuevaTareaTexto = '';
    }
  }

  marcarComoCompletada(tarea: Tarea) {
    tarea.completada = !tarea.completada;
  }

  eliminarTarea(id: number) {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
  }
}
