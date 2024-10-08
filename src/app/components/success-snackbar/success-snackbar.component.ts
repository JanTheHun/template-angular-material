import { Component, Inject, inject } from "@angular/core";
import {
    MatSnackBarRef,
    MAT_SNACK_BAR_DATA,
} from "@angular/material/snack-bar";

@Component({
    selector: "app-success-snackbar",
    templateUrl: "./success-snackbar.component.html",
    styleUrl: "./success-snackbar.component.scss",
})
export class SuccessSnackbarComponent {
    snackBarRef = inject(MatSnackBarRef);
    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string) {}
}
