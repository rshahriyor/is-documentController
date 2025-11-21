import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-notfound',
    standalone: true,
    imports: [RouterModule, ButtonModule],
    templateUrl: './notfound.html',
    styleUrl: './notfound.scss'
})
export class Notfound {}
