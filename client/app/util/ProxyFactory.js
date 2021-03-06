class ProxyFactory {

    static create(objeto, props, armadilha) {
        return new Proxy(objeto, {
            get(target, prop) {
                if (ProxyFactory._ehFuncao(target[prop]) && prop.includes(prop)) {
                    return function() {
                        console.log(`${prop} disparou a armadilha!`)
                        target[prop].apply(target, arguments);
                        armadilha(target);
                    }
                }
                else {
                    return target[prop];
                }
            },

            set(target, prop, value, reciever) {
                const updated = Reflect.set(target, prop, value);
                if(prop.includes(prop)) armadilha(target);
                return updated;
            }
        })
    }

    static _ehFuncao(fn) {
        return typeof(fn) == typeof(Function);
    }
}