class ManipuladorDeDatas {
    dia: number;
    mes: number;
    ano: number;

    constructor(dia?: number, mes?: number, ano?: number) {

        if (dia === undefined || mes === undefined || ano === undefined) {
            const dataAtual = new Date();
            this.dia = dataAtual.getDate();
            this.mes = dataAtual.getMonth() + 1;
            this.ano = dataAtual.getFullYear();
        } else {
            this.dia = dia;
            this.mes = mes;
            this.ano = ano;
        }
    }


    compara(outra: ManipuladorDeDatas): number {
        const dataCorrente = new Date(this.ano, this.mes - 1, this.dia).getTime();
        const dataParametro = new Date(outra.ano, outra.mes - 1, outra.dia).getTime();

        if (dataCorrente === dataParametro) {
            return 0;
        }
        return (dataCorrente > dataParametro) ? 1 : -1;
    }

    getDia(): number {
        return this.dia
    }

    getMesExtenso(): string {
        let mesExtenso = "";

        switch (this.mes) {
            case 1:
                mesExtenso = "Janeiro";
                break
            case 2:
                mesExtenso = "Fevereiro";
                break
            case 3:
                mesExtenso = "Março";
                break
            case 4:
                mesExtenso = "Abril";
                break
            case 5:
                mesExtenso = "Maio";
                break
            case 6:
                mesExtenso = "Junho";
                break
            case 7:
                mesExtenso = "Julho";
                break
            case 8:
                mesExtenso = "Agosto";
                break
            case 9:
                mesExtenso = "Setembro";
                break
            case 10:
                mesExtenso = "Outubro";
                break
            case 11:
                mesExtenso = "Novembro";
                break
            case 12:
                mesExtenso = "Dezembro";
                break
        }
        return mesExtenso;
    }

    getAno(): number {
        return this.ano;
    }

    isBissexto(): boolean {
        return ((this.ano % 4 === 0 && this.ano % 100 !== 0) || (this.ano % 400 === 0));
    }

    clone(): ManipuladorDeDatas {
        return new ManipuladorDeDatas(this.dia, this.mes, this.ano);
    }

}


let dataFoda = new ManipuladorDeDatas(21, 9, 2004);
let dataClone = dataFoda.clone();

console.log(dataClone);