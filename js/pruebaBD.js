const db = firebase.firestore(); 

const boton = document.getElementById("btnPrueba");
boton.addEventListener("click",prueba());
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
}
