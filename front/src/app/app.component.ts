import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'front';

  ngOnInit(): void {

  }

  test() {
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  }
}


