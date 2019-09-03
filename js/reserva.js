class Reserva {
    constructor(horario, cantidadPersonas, precioPersona, codigoDescuento) {
        this.horario = horario;
        this.cantidadPersonas = cantidadPersonas;
        this.precioPersona = precioPersona;
        this.codigoDescuento = codigoDescuento;
    }

    calcularPrecioBase() {
        let precioBase = this.precioPersona * this.cantidadPersonas;
        return precioBase;
    }

    calcularPrecioTotal() {
        let precioBase = this.calcularPrecioBase();
        let fecha = this.horario;
        let hora = fecha.getHours();
        let dia = fecha.getDay();
        let descuentos = calcularDescuentos(this.cantidadPersonas, precioBase, this.codigoDescuento, this.precioPersona);
        let adicionales = calcularAdicionales(precioBase, hora, dia);
        return precioBase - descuentos + adicionales;
    }
}

function descuentoGrupoGrande(personas, precioBase) {
    let descuentoGrupo = 0;
    if (personas >= 4 && personas <= 6) {
        descuentoGrupo = precioBase * 0.05;
    } else if (personas >= 7 && personas <= 8) {
        descuentoGrupo = precioBase * 0.1;
    } else if (personas >= 9) {
        descuentoGrupo = precioBase * 0.15;
    }
    return descuentoGrupo;
}

function descuentoCodigo(precioBase, codigo, precioPersona) {
    let descuentoCodigo = 0;
    switch (codigo) {
        case "":
            descuentoCodigo = 0;
            break;
        case "DES15":
            descuentoCodigo = precioBase * 0.15;
            break;
        case "DES200":
            descuentoCodigo = 200;
            break;
        case "DES1":
            descuentoCodigo = precioPersona;
            break;
        default:
            return console.log('El código ingresado no existe.');
    }
    return descuentoCodigo;
}

function calcularDescuentos(cantidadPersonas, precioBase, codigoDescuento, precioPersona) {
    return descuentoGrupoGrande(cantidadPersonas, precioBase) + descuentoCodigo(precioBase, codigoDescuento, precioPersona);
}

function adicionalHorario(precioBase, horario) {
    let adicionalHorario = 0;
    if ((horario >= 13 && horario <= 14) || (horario >= 20 && horario <= 21)) {
        adicionalHorario = precioBase * 0.5;
    }
    return adicionalHorario;
}

function adicionalDia(precioBase, dia) {
    let adicionalDia = 0;
    if (dia === 0 || dia === 5 || dia === 6) {
        adicionalDia = precioBase * 0.1;
    }
    return adicionalDia;
}

function calcularAdicionales(precioBase, horario, dia) {
    return adicionalHorario(precioBase, horario) + adicionalDia(precioBase, dia);
}