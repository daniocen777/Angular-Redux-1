import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { appState } from "./app.reducer";
// Importando mis acciones
import * as fromMensaje from "./mensaje.action";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  // Observable
  dato$: Observable<any>;

  // store => Con esto puedo acceder a la BD del lado del cliente
  constructor(private store: Store<appState>) {
    this.dato$ = store.select<any>("mensaje"); // Acceder a la porción de la BD llamada "mensaje" (app.module)
  }

  // Métodos que despacharán (enviarán una acción)
  spanishMensaje() {
    // Emitiendo una acción => dispatch({type: "", payload: ... })
    this.store.dispatch(new fromMensaje.SPanishMensaje("Los colores"));
  }

  englishMensaje() {
    this.store.dispatch(new fromMensaje.EnglishMensaje("yellow"));
  }
}
