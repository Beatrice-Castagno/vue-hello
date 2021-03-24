var app = new Vue(
 {
   el: '#root',
   data: {
     nome: "",
     nomeTemporaneo: "",
     messaggio: "Ciao!",
     colore: "blue",
     img: "img/lamponi.jpg"
   },
   methods: {
     cambiaColore: function () {
       this.colore = "pink";
     },
     salvoNome: function () {
       this.nome = this.nomeTemporaneo;
     }
   }
 }
);
