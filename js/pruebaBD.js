import {
  getFirestore
} from "./firebase.js";
const firestore = getFirestore();
const db = firebase.firestore(); 
const idProyecto = "espjaret";
const mandar = firestore.collection("Nueva")


const boton = document.getElementById("btnPrueba");
boton.addEventListener("click",prueba());
async function prueba() {
  try {
    await mandar.
      doc(dispositivoId).
      set("Hola");
  } catch (e) {
    muestraError(e);
  }
}
/*function prueba(){
    console.log("Hola");
db.collection("cities").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});
}*/
