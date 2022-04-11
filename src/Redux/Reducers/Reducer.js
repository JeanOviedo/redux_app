import {
    CAMBIARTEXTO,
    CAMBIARTEXTO2,
    CAMBIARTEXTOBOTON 
  
} from "../Actions/Actions.js";


const initialState = {
    texto: "",
    texto2: "",
    boton: "",
    }


    
export default function rooReducer(state = initialState, action) {
    switch (action.type) {


        case  CAMBIARTEXTO:
            return {
                ...state,
                texto: action.payload


            };
            case  CAMBIARTEXTO2:
                return {
                    ...state,
                    texto2: action.payload
    
    
                };

                case  CAMBIARTEXTOBOTON:
                return {
                    ...state,
                    boton: action.payload
    
    
                };

            default:
                return state;
        }
    }
    
  

