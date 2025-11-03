import { Armazenamento } from "./armazenamento";
import { CPU } from "./cpu";
import { RAM } from "./ram";

export class Computador {
    private _armazenamento: Armazenamento;
    private _cpu: CPU;
    private _ram: RAM;

    constructor(
        _armazenamento?: Armazenamento,
        _cpu?: CPU,
        _ram?: RAM
    ) {
        this._armazenamento = _armazenamento ?? new Armazenamento();
        this._cpu = _cpu ?? new CPU();
        this._ram = _ram ?? new RAM();
    }

    get armazenamento(): Armazenamento {
        return this._armazenamento;
    }
    set armazenamento(value: Armazenamento) {
        this._armazenamento = value;
    }

    get cpu(): CPU {
        return this._cpu;
    }
    set cpu(value: CPU) {
        this._cpu = value;
    }

    get ram(): RAM {
        return this._ram;
    }
    set ram(value: RAM) {
        this._ram = value;
    }

    exibirInformacoes(): void {
        console.log("Informações do Computador:");
        console.log("CPU:");
        this.cpu.exibirInformacoes();
        console.log("RAM:");
        this.ram.exibirInformacoes();
        console.log("Armazenamento:");
        this.armazenamento.exibirInformacoes();
    }
}