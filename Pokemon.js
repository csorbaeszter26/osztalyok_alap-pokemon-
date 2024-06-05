export default class Pokemon{

    #nev ="";
    #kep = "";
    #mondat = "";
    constructor(nev, kep, szuloElem){
        this.#nev = nev;
        this.#kep = kep;
        this.#mondat = "Jó estét!";
        this.szuloElem = szuloElem;
        this.megjelenit()

    }

    megjelenit(){
        let txt = `
            <div>
            <h3>{$this.#nev}</h3>
            <img src = "${this.#kep}" alt = "${this.#nev}">
            </div>
        `
        this.szuloElem.append(txt)
    }

    //getter a nevre:

    get nev(){
        return this.#nev
    }
    //mondat atirasara settert hasznalunk
    set mondat(szoveg){
        //kiszurjuk a csunya szavakat pl
        this.#mondat = szoveg
    }

    beszel(){
        console.log(this.#mondat)
    }
}