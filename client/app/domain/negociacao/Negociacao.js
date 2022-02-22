class Negociacao {
    constructor(_data, _quantidade, _valor) { //Construtores
        
        Object.assign(this, { //Adiciona cada uma das propriedades a seu respectivo atributo, sem precisar ficar usando .this toda hora.
            _quantidade,
            _valor,
        });

        this._data = new Date(_data.getTime());

        Object.freeze(this); //Congela objeto para não ser alterado, mas cuidado, é possível contornar com esquemas inteligentes.
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }
}