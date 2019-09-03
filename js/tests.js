var expect = chai.expect;

describe('Testeo función reservarHorario ()', function () {
    it('Cuando se reserva un horario de un restaurant, el horario correspondiente se elimina del arreglo.', function () {
        let restoTest = new Restaurant(1, "El resto de Pepita y Pepito", "Pasta", "Palermo", ["12:00", "14:00", "20:00"], "../img/pizza3.jpg", [6, 8, 7, 5, 9, 9, 9]);
        let cantidadHorarioInicialRestoTest = restoTest.horarios.length;
        let horarioTest = "14:00";
        restoTest.reservarHorario(horarioTest);
        expect(restoTest.horarios.length).to.equal(cantidadHorarioInicialRestoTest - 1);
        expect(restoTest.horarios.includes(horarioTest)).to.be.false;
        expect(restoTest.horarios).to.eql(["12:00", "20:00"]);
    });

    it('Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual.', function () {
        let restoTest2 = new Restaurant(2, "El resto de Pepita y Pepito", "Pasta", "Palermo", ["12:00", "14:00", "20:00"], "../img/pizza3.jpg", [6, 8, 7, 5, 9, 9, 9]);
        let cantidadHorarioInicialRestoTest2 = restoTest2.horarios.length;
        let horariosRestoTest2 = restoTest2.horarios;
        let horarioTest2 = "19:00";
        restoTest2.reservarHorario(horarioTest2);
        expect(restoTest2.horarios.length).to.equal(cantidadHorarioInicialRestoTest2);
        expect(restoTest2.horarios).to.eql(["12:00", "14:00", "20:00"]);
        expect(restoTest2.horarios).to.equal(horariosRestoTest2);
    });

    it('Cuando se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual.', function () {
        let restoTest3 = new Restaurant(3, "El resto de Pepita y Pepito", "Pasta", "Palermo", ["12:00", "14:00", "20:00"], "../img/pizza3.jpg", [6, 8, 7, 5, 9, 9, 9]);
        let cantidadHorarioInicialRestoTest3 = restoTest3.horarios.length;
        let horariosRestoTest3 = restoTest3.horarios;
        restoTest3.reservarHorario();
        expect(restoTest3.horarios.length).to.equal(cantidadHorarioInicialRestoTest3);
        expect(restoTest3.horarios).to.eql(["12:00", "14:00", "20:00"]);
        expect(restoTest3.horarios).to.equal(horariosRestoTest3);
    });
});

describe('Testeo función obtenerPuntuación ()', function () {
    it('Dado un restaurant con determinadas calificaciones, la puntuación (que es el promedio de ellas) se calcula correctamente.', function () {
        let restoTest1 = new Restaurant(4, "El mas puntuado", "Pasta", "San Telmo", ["11:00", "21:00"], "../img/pasta1.jpg", [10, 9, 8]);
        let puntuacionRestoTest1 = restoTest1.obtenerPuntuacion();
        expect(puntuacionRestoTest1).to.equal(9);
        expect(puntuacionRestoTest1 === 10).to.be.false;
    });

    it('Dado un restaurant que no tiene ninguna calificación, la puntuación es igual a 0.', function () {
        let restoTest2 = new Restaurant(5, "El menos calificado", "Pasta", "San Telmo", ["11:00", "21:00"], "../img/pasta1.jpg", []);
        let puntuacionRestoTest2 = restoTest2.obtenerPuntuacion();
        expect(puntuacionRestoTest2).to.not.equal(10);
        expect(puntuacionRestoTest2).to.equal(0);
    })
});

describe('Testeo función calificar ()', function () {
    it('Controlo que se sumen las calificaciones.', function () {
        let restoTest1 = new Restaurant(4, "El mas calificado", "Pasta", "San Telmo", ["11:00", "21:00"], "../img/pasta1.jpg", [10, 9, 8]);
        let calificacionesInicialesRestoTest1 = restoTest1.calificaciones;
        let cantidadCalificacionesRestoTest1 = restoTest1.calificaciones.length;
        restoTest1.calificar(9);
        expect(restoTest1.calificaciones.length).to.equal(cantidadCalificacionesRestoTest1 + 1);
        expect(restoTest1.calificaciones.length).to.equal(4);
        restoTest1.calificar(8);
        expect(restoTest1.calificaciones.length).to.equal(cantidadCalificacionesRestoTest1 + 2);
        expect(restoTest1.calificaciones.length).to.equal(5);
        expect(restoTest1.calificaciones).to.eql([10, 9, 8, 9, 8]);
    });

    it('Controlo que no se sumen calificaciones no numéricas.', function () {
        let restoTest1 = new Restaurant(4, "El mas calificado", "Pasta", "San Telmo", ["11:00", "21:00"], "../img/pasta1.jpg", [10, 9, 8]);
        let calificacionesInicialesRestoTest1 = restoTest1.calificaciones;
        let cantidadCalificacionesRestoTest1 = restoTest1.calificaciones.length;
        restoTest1.calificar("lalalal");
        expect(restoTest1.calificaciones.length).to.equal(cantidadCalificacionesRestoTest1);
        expect(restoTest1.calificaciones.length).to.equal(3);
    });

    it('Controlo que no se sumen calificaciones menores a 1 o mayores a 9.', function () {
        let restoTest1 = new Restaurant(4, "El mas calificado", "Pasta", "San Telmo", ["11:00", "21:00"], "../img/pasta1.jpg", [10, 9, 8]);
        let cantidadCalificacionesRestoTest1 = restoTest1.calificaciones.length;
        restoTest1.calificar(-1);
        expect(restoTest1.calificaciones.length).to.equal(cantidadCalificacionesRestoTest1);
        expect(restoTest1.calificaciones.length).to.equal(3);
        restoTest1.calificar(20);
        expect(restoTest1.calificaciones.length).to.equal(cantidadCalificacionesRestoTest1);
        expect(restoTest1.calificaciones.length).to.equal(3);
    });
});

describe('Testeo función buscarRestaurante (id)', function () {
    it('Pruebo que la búsqueda devuelva una instancia de Restaurant.', function () {
        let restoPruebaInstancia = listado.buscarRestaurante(5);
        expect(restoPruebaInstancia).to.be.an.instanceof(Restaurant);
    });

    it('Pruebo que la búsqueda devuelva un mensaje negativo cuando busco un elemento fuera del array de restaurants.', function () {
        let cantidadDeRestaurants = listado.restaurantes.length;
        let busquedaRestoPrueba = listado.buscarRestaurante(cantidadDeRestaurants + 2);
        expect(busquedaRestoPrueba).to.equal("No se ha encontrado ningún restaurant");
        let busquedaRestoPrueba2 = listado.buscarRestaurante(cantidadDeRestaurants * -1);
        expect(busquedaRestoPrueba2).to.equal("No se ha encontrado ningún restaurant");
    });
});

describe('Testeo función obtenerRestaurantes ()', function () {
    it('Pruebo que una búsqueda válida y pruebo que sea instancia de Restaurant.', function () {
        let restoPruebaInstancia = listado.buscarRestaurante(5);
        expect(restoPruebaInstancia).to.be.an.instanceof(Restaurant);
    });

    it('Pruebo error en rubro ("Sushi", inexistente).', function () {
        let restoFiltrado = listado.obtenerRestaurantes('Sushi', 'Berlín', '12:00');
        expect(restoFiltrado).to.eql([]);
    });

    it('Pruebo error en ciudad ("Pamplona", inexistente).', function () {
        let restoFiltrado2 = listado.obtenerRestaurantes('Pasta', 'Pamplona', '12:00');
        expect(restoFiltrado2).to.eql([]);
    });

    it('Pruebo error en horario ("02:00", inexistente).', function () {
        let restoFiltrado3 = listado.obtenerRestaurantes('Sushi', 'Berlín', '02:00');
        expect(restoFiltrado3).to.eql([]);
    });

    it('Pruebo filtro Londres, Desayuno, 12:00, debe devolver solo New London Cafe.', function () {
        let restoFiltrado4 = listado.obtenerRestaurantes('Desayuno', 'Londres', '12:00');
        expect(restoFiltrado4[0].nombre).to.equal('New London Cafe');
    });
});

describe('Testeo las funcionalidades de los objetos Reserva.', function () {
    let todasLasReservasDePrueba = [];
    let reservaPrueba1 = new Reserva(new Date(2019, 1, 31, 11, 00), 2, 250, "DES1");
    let reservaPrueba2 = new Reserva(new Date(2019, 4, 12, 14, 00), 6, 550, "DES15");
    let reservaPrueba3 = new Reserva(new Date(2019, 5, 23, 12, 00), 8, 580, "");
    let reservaPrueba4 = new Reserva(new Date(2019, 9, 20, 20, 00), 10, 330, "DES15");
    let reservaPrueba5 = new Reserva(new Date(2019, 11, 5, 21, 00), 5, 220, "DES1");
    let reservaPrueba6 = new Reserva(new Date(2019, 11, 5, 21, 00), 5, 220, "sarasa");
    todasLasReservasDePrueba.push(reservaPrueba1, reservaPrueba2, reservaPrueba3, reservaPrueba4, reservaPrueba5);

    it('Pruebo que las reservas sean instancias de Reserva.', function () {
        todasLasReservasDePrueba.forEach(reserva => expect(reserva).to.be.an.instanceof(Reserva));
    });

    it('Pruebo que cada restaurante calcule correctamente su precio base.', function () {
        expect(reservaPrueba1.calcularPrecioBase()).to.equal(500);
        expect(reservaPrueba2.calcularPrecioBase()).to.equal(3300);
        expect(reservaPrueba3.calcularPrecioBase()).to.equal(4640);
        expect(reservaPrueba4.calcularPrecioBase()).to.equal(3300);
        expect(reservaPrueba5.calcularPrecioBase()).to.equal(1100);
        expect(reservaPrueba6.calcularPrecioBase()).to.equal(1100);
    });

    it('Pruebo el descuento por grupo grande.', function () {
        expect(descuentoGrupoGrande(reservaPrueba1.cantidadPersonas, reservaPrueba1.calcularPrecioBase())).to.equal(0);
        expect(descuentoGrupoGrande(reservaPrueba2.cantidadPersonas, reservaPrueba2.calcularPrecioBase())).to.equal(3300 * 0.05);
        expect(descuentoGrupoGrande(reservaPrueba3.cantidadPersonas, reservaPrueba3.calcularPrecioBase())).to.equal(4640 * 0.1);
        expect(descuentoGrupoGrande(reservaPrueba4.cantidadPersonas, reservaPrueba4.calcularPrecioBase())).to.equal(3300 * 0.15);
        expect(descuentoGrupoGrande(reservaPrueba5.cantidadPersonas, reservaPrueba5.calcularPrecioBase())).to.equal(1100 * 0.05);
        expect(descuentoGrupoGrande(reservaPrueba5.cantidadPersonas, reservaPrueba6.calcularPrecioBase())).to.equal(1100 * 0.05);
    });

    it('Pruebo el descuento por código.', function () {
        expect(descuentoCodigo(500, reservaPrueba1.codigoDescuento, reservaPrueba1.precioPersona)).to.equal(reservaPrueba1.precioPersona);
        expect(descuentoCodigo(3300, reservaPrueba2.codigoDescuento, reservaPrueba2.precioPersona)).to.equal(3300 * 0.15);
        expect(descuentoCodigo(4640, reservaPrueba3.codigoDescuento, reservaPrueba3.precioPersona)).to.equal(0);
        expect(descuentoCodigo(3300, reservaPrueba4.codigoDescuento, reservaPrueba4.precioPersona)).to.equal(3300 * 0.15);
        expect(descuentoCodigo(1100, reservaPrueba5.codigoDescuento, reservaPrueba5.precioPersona)).to.equal(reservaPrueba5.precioPersona);
        expect(descuentoCodigo(1100, reservaPrueba6.codigoDescuento, reservaPrueba5.precioPersona)).to.equal(console.log('El código ingresado no existe.'));
    });

    it('Pruebo el descuento total.', function () {
        expect(calcularDescuentos(reservaPrueba1.cantidadPersonas, reservaPrueba1.calcularPrecioBase(), reservaPrueba1.codigoDescuento, reservaPrueba1.precioPersona)).to.equal(250);
        expect(calcularDescuentos(reservaPrueba2.cantidadPersonas, reservaPrueba2.calcularPrecioBase(), reservaPrueba2.codigoDescuento, reservaPrueba2.precioPersona)).to.equal(660);
        expect(calcularDescuentos(reservaPrueba3.cantidadPersonas, reservaPrueba3.calcularPrecioBase(), reservaPrueba3.codigoDescuento, reservaPrueba3.precioPersona)).to.equal(464);
        expect(calcularDescuentos(reservaPrueba4.cantidadPersonas, reservaPrueba4.calcularPrecioBase(), reservaPrueba4.codigoDescuento, reservaPrueba4.precioPersona)).to.equal(990);
        expect(calcularDescuentos(reservaPrueba5.cantidadPersonas, reservaPrueba5.calcularPrecioBase(), reservaPrueba5.codigoDescuento, reservaPrueba5.precioPersona)).to.equal(275);
        expect(isNaN(calcularDescuentos(reservaPrueba6.cantidadPersonas, reservaPrueba6.calcularPrecioBase(), reservaPrueba6.codigoDescuento, reservaPrueba6.precioPersona))).to.equal(true);
    });

    it('Pruebo adicional por horario.', function () {
        expect(adicionalHorario(reservaPrueba1.calcularPrecioBase(), reservaPrueba1.horario.getHours())).to.equal(0);
        expect(adicionalHorario(reservaPrueba2.calcularPrecioBase(), reservaPrueba2.horario.getHours())).to.equal(reservaPrueba2.calcularPrecioBase() * 0.5);
        expect(adicionalHorario(reservaPrueba5.calcularPrecioBase(), reservaPrueba5.horario.getHours())).to.equal(reservaPrueba5.calcularPrecioBase() * 0.5);
    });

    it('Pruebo el adicional por día.', function () {
        expect(adicionalDia(reservaPrueba1.calcularPrecioBase(), reservaPrueba1.horario.getDay())).to.equal(reservaPrueba1.calcularPrecioBase() * 0.1);
        expect(adicionalDia(reservaPrueba5.calcularPrecioBase(), reservaPrueba5.horario.getDay())).to.equal(0);
    });

    it('Pruebo el adicional total.', function () {
        expect(calcularAdicionales(reservaPrueba2.calcularPrecioBase(), reservaPrueba2.horario.getHours(), reservaPrueba2.horario.getDay())).to.equal(1980);
        expect(calcularAdicionales(reservaPrueba3.calcularPrecioBase(), reservaPrueba3.horario.getHours(), reservaPrueba3.horario.getDay())).to.equal(464);
    });

    it('Pruebo que cada restaurante calcule correctamente su precio final.', function () {
        expect(reservaPrueba1.calcularPrecioTotal()).to.equal(300);
        expect(reservaPrueba2.calcularPrecioTotal()).to.equal(4620);
        expect(reservaPrueba3.calcularPrecioTotal()).to.equal(4640);
        expect(reservaPrueba4.calcularPrecioTotal()).to.equal(4290);
        expect(reservaPrueba5.calcularPrecioTotal()).to.equal(1375);
    });
});