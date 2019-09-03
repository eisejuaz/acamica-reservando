var Restaurant = function (id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

Restaurant.prototype.reservarHorario = function (horarioReservado) {
    for (var i = 0; i < this.horarios.length; i++) {
        if (this.horarios[i] === horarioReservado) {
            this.horarios = this.horarios.filter(horario => horario !== horarioReservado)
            return;
        }
    }
}

Restaurant.prototype.calificar = function (nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

Restaurant.prototype.obtenerPuntuacion = function () {
    if (this.calificaciones.length === 0) {
        return 0;
    } else {
        puntuacion = promedio(this.calificaciones);
    }
    return puntuacion;
}

function sumatoria(numeros) {
    let sumatoria = 0;
    numeros.forEach(elemento => sumatoria += elemento);
    return sumatoria;
};

function promedio(numeros) {
    if (numeros.length !== 0) {
        let promedio = sumatoria(numeros) / numeros.length;
        return Math.round(promedio * 10) / 10;
    } else {
        return 0;
    }
};