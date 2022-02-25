class Negociacoes {

    constructor() {
        this._negociacoes = [];
        Object.freeze(this);
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get volumeTotal() {
        return this._negociacoes.reduce((total, negociacao) => total + negociacao.volume, 0);
    }

    esvazia() {
        this._negociacoes.length = 0;
    }
}