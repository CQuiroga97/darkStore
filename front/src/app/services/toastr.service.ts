import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { envTesting } from '../enviroments/envTesting';
import {MatSnackBar} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class ToastService {

    constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
