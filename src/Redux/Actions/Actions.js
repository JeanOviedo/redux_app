export const  CAMBIARTEXTO= "CAMBIARTEXTO";
export const  CAMBIARTEXTO2 = "CAMBIARTEXTO2";
export const  CAMBIARTEXTOBOTON = "CAMBIARTEXTOBOTON";

export const ActionEdita = (data) => {
    
    return {type: CAMBIARTEXTO , payload: data};
};
export const ActionEdita2 = (aa) => {
    
    return {type: CAMBIARTEXTO2 , payload: aa};
};
export const editTextBoton = (aaa) => {
    
    return {type: CAMBIARTEXTOBOTON , payload: aaa};
};