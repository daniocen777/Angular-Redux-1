import { Action } from "@ngrx/store";
// Importando mis acciones
import * as fromMensaje from "./mensaje.action";

// Modelo al estado de la aplicación
export interface appState {
  texto: String;
}

// Iniciando las propiedades del appState
export const initialState = {
  texto: "Código Mentor"
};

// Creando el miReducer => Crea un nuevo estado sin modificar el anterior (Función pura)
export function miReducer(
  state: appState = initialState,
  action: fromMensaje.MensajeActions
) {
  console.log(action);
  switch (action.type) {
    case fromMensaje.SPANISH:
      // Retornará un nuevo objeto: Con el estado anterior y el nuevo
      return {
        ...state, // Copia
        texto: action.payload
      };

    case fromMensaje.ENGLISH:
      return {
        ...state, // Copia
        texto: action.payload
      };
    default:
      // Retorna el estado original por defecto
      return state;
  }
}
