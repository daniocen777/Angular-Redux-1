import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// Importaciones
import { StoreModule } from "@ngrx/store";
import { miReducer } from "./app.reducer";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      // mensaje => Porción del ngrx Store (Como una BD del lado del cliente)
      mensaje: miReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10 // Número de acciones máximas realziadas por la aplicación
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
