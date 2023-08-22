// Kreirati niz od 4 objkta. svaki objekat sadrzi sledece informacije: ime i prezime, prosek ocena i outanja do slike.
// Potom koristevi js DOM kreirati tabelu u kojoj ce se prikazati infomacije i fotografije svakog od studenata.
// Tabela treba da sadrzi zaglavlje cije celije su: ime, prezime, broj indeksa. slika godina studija.
// Preko CSSa obojiti zaglavlje zelenom pozadinskom bojom. Unutar redova tabelele se nalze podaci iz objekta

let student = [
  {
    ime: "Asija",
    prezime: "Sijaric",
    index: 234567,
    ocene: [5, 6, 7, 10, 6, 8, 8],
    prosek: function () {
      return this.ocene.reduce((prev, curr) => prev + curr) / this.ocene.length;
    },
  },
  {
    ime: "Mejra",
    prezime: "Mujovic",
    index: 765432,
    ocene: [7, 8, 8, 10, 9, 10, 6],
    prosek: function () {
      return this.ocene.reduce((prev, curr) => prev + curr) / this.ocene.length;
    },
  },
  {
    ime: "Emina",
    prezime: "Tutic",
    index: 98762,
    ocene: [7, 6, 10, 10, 6, 7, 7],
    prosek: function () {
      return this.ocene.reduce((prev, curr) => prev + curr) / this.ocene.length;
    },
  },
  {
    ime: "Merva",
    prezime: "Rec",
    index: 2349876,
    ocene: [7, 10, 6, 8, 8, 6, 10, 9],
    prosek: function () {
      return this.ocene.reduce((prev, curr) => prev + curr) / this.ocene.length;
    },
  },
];
