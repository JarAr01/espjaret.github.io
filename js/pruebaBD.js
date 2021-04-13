import {
  getFirestore
} from "./firebase.js";

document.getElementById("btnPrueba").addEventListener("click", function(){
firebase.firestore().collection("Nueva").add({nombre: "Hola "+ Math.random()}).then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});

});

/*const firestore = getFirestore();
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
    console.log("No pues no")
  }
}
function prueba(){
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
