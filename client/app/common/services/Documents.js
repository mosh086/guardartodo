import moment from 'moment';
import _ from 'lodash';

class Documents {
  constructor(Company, UserService, ClientService, RentService, $filter) {
    'ngInject';

    this._docDefinition = null;
    this._Company = Company;
    this._User = UserService;
    this._Client = ClientService;
    this._Rent = RentService;
    this._filter = $filter;
  }

  print() {

  }

  save() {

  }

  openContract(data) {
      let self = this;
      self._User.me().then((user) => {
        self._User.getByRentId(data.rentId).then((authorization) => {
          this._docDefinition = new makeContractDefinition(self._filter, data, self._Company, user.data[0], authorization).getObject();
          pdfMake.createPdf(this._docDefinition).open();
        }, (err)=> {})
      }, (err)=> {})
  }

  openPayment(data) {
    let self = this;
    this._docDefinition = new makePaymentDefinition(self._filter, data).getObject();
    pdfMake.createPdf(this._docDefinition).open();
  }

  openCredential(data) {
    let self = this;
    self._Client.get(data).then((client)=> {
      self._Client.getValidity(client.clientId).then((date) => {
        self._Rent.getByClientId(client.clientId).then((rent) => {
          self._docDefinition = new makeCredentialDefinition(self._filter, data, self._Company, client, _.sortBy(rent, 'number'), date).getObject();
          pdfMake.createPdf(this._docDefinition).open();
        }, (err) => {})
      }, (err) => {})
    }, (err)=> {})
  }
}

class makeContractDefinition {
  constructor($filter, data, company, user, authorization) {
    moment.locale('es');
    data = this.noNulls(data);
    let temp;
    let folioText = `B${moment(data.startDate).format('YYMM')}${data.storageloker.number}${"000".substring((data.client.clientId + "").length,3) + data.client.clientId}`;
    this.doc = {
      content: [{
        style: 'table',
        table: {
          widths: ['*', '*' ],
          body: [
            [ { image : logo, width: 150, alignment: 'center' }, {text: `Contrato\n${data.client.lineOfBusiness}\nFolio:  ${data.folio || folioText}`, alignment: 'center'  }],
            [ { text:''}, { text: ``, alignment: 'center' }],
          ]
        },
        layout: 'noBorders'
      }, {
        table: {
          headerRows: 1,
          widths: [ '60%', '40%' ],
          body: [
            [{ colSpan: 2, style:'header', text: 'INFORMACION DEL CLIENTE'}, {}],
            [{ colSpan: 2, style: 'title', text: ['A) NOMBRE O RAZON SOCIAL:   ', { style: 'info', text: `${data.client.name}` }]}, {}],
            [{ colSpan: 2, style: 'title', text: ['B) REPRESENTANTE LEGAL:   ', { style: 'info', text: `${data.client.legalRepresentative}` }]}, {}],
            [
              { style: 'title', text: ['C) R.F.C.:   ', { style: 'info', text: `${data.client.rfc}` } ]},
              { rowSpan: 3, style: 'title', text: ['E) DOMICILIO FISCAL:\n', {  style: 'info', alignment: 'center', text: `${data.client.address}` }] }
            ],
            [{ style: 'title', text: ['D) GIRO:   ', { style: 'info', text: `${data.client.kindOfBusiness}` } ] } ],
            [{ style: 'title', text: ['TELEFONO:   ', { style: 'info', text: `${data.client.phone}` } ] }, {}],
            [
              { style: 'title', text: ['CELULAR:   ', { style: 'info', text: `${data.client.cellPhone}` } ] },
              { style: 'title', text: ['CORREO:   ', { style: 'info', text: `${data.client.email}` } ] }
            ]
          ]
        }
      }, {
        style: 'table',
        pageBreak: 'after',
        table: {
          headerRows: 1,
          widths: [ '30%', '30%', '20%', '20%' ],
          body: [
            [{ colSpan: 4, style:'header', text: 'DATOS DE CONTRATACION' }, {}, {}, {}],
            [
              { colSpan: 2, style: 'title', text: ['F) EMPRESA:\n', { style: 'info', alignment: 'center', text : `${company.name}`}] }, {},
              { colSpan: 2, style: 'title', text: ['G) DIRECCION:\n', { style: 'info', alignment: 'center', text : `${company.address}`}] }, {}
            ],
            [
              { colSpan: 2, style: 'title', text: ['H) FECHA:\n', {style: 'info', alignment: 'center',  text: `${moment().format('LL')}`} ] }, {},
              { colSpan: 2, style: 'title', text: ['I) PERIODO INICIAL DE VIGENCIA DE CONTRATO:\n', {style: 'info', alignment: 'center', text: `${moment(data.startDate).format('LL')}` }] } , {}
            ],
            [{ colSpan: 4, style: 'title', margin: [0, 0, 0, 20], text: 'SERVICIOS CONTRATADOS:   ' }, {}, {}, {}],
            [{ colSpan: 2, text: ''}, {}, {text: 'PRECIO', style: 'title', alignment: 'center' }, {text: 'PRECIO CON I.V.A.', style: 'title', alignment: 'center' }],
            [{ colSpan: 2, style: 'title', text: ['J) BODEGA DE TAMAÑO:   ', {style: 'info', alignment: 'center', text: `${data.storagelokertype.name}  ${data.storageloker.number}` }] }, {}, { alignment: 'right', margin: [20, 0], text: `${$filter('currency')(data.cost, '$', 2)}` }, { alignment: 'right', margin: [20, 0], text: `${$filter('currency')(data.total, '$', 2)}` }],
            [{ colSpan: 2, style: 'title', text: 'L) SERVICIOS ADICIONALES:   ' }, {}, {margin: [20, 0], alignment: 'right', colSpan: 2, text: `${$filter('currency')(data.extra, '$', 2)}` }, {}],
            [{ colSpan: 2, style: 'title', alignment: 'center', margin: [20, 0], text: 'TOTAL' }, {}, { text: '' }, { alignment: 'right', margin: [20, 0], text: `${$filter('currency')(data.total, '$', 2)}` }],
            [{ colSpan: 4, style: 'title', text: `M) SERVICIO MENSUAL TOTAL:   ${$filter('currency')(data.total, '$', 2)}` }, {}, {}, {}],
            [{ colSpan: 4, style: 'title', text: ['N) DEPOSITO:   ', {style: 'info2',text: '$0.00 (00/100 M. N.)'} ]}, {}, {}, {}],
            [{ colSpan: 4, style: 'title', text: ['O) USUARIOS AUTORIZADOS:   ', {style: 'info2', text: `${_.map(authorization, function(a) { return a.fullName; }).join(', ')}`}]}, {}, {}, {}],
            [{ colSpan: 4, style: 'obs', text: [`OBSERVACIONES: “GuardarTodo” prestará sus servicios de `, { style:'obsbold', text: `Lunes a Viernes de 8:00 a 18:00 horas y Sábados :00-13:00 horas` }, `, salvo los siguientes días de conformidad con el artículo 74 de la Ley Federal del Trabajo: Enero 1, primer lunes de Febrero en conmemoración del 05 de Febrero, el tercer lunes de Marzo en conmemoración del 21 de Marzo, Mayo 1, Septiembre 16, tercer lunes de Noviembre en conmemoración del 20 de Noviembre, Diciembre 25, y cuando tome posesión de su cargo el Presidente de la República. “GuardarTodo” podrá suspender la prestación de los servicios por razones de inestabilidad política, u otros eventos fuera del control de “GuardarTodo”.`] }, {}, {}, {}],
            [{ colSpan: 4, style: 'title', text: ['ELABORO:   ', { style: 'info', text : `${user.firstName} ${user.lastName}`}]}, {}, {}, {}]
          ]
        },
        layout:{
          hLineColor: function(i, node){
            let resolve;
            temp = i;
            if (i <= 7 && i >= 4) {
              resolve = 'white'
            } else {
              resolve = 'black';
            }
            return resolve;
          },
          vLineColor: function(i, node) {
            return ((temp <= 7 && temp >= 4) && (i === 2 || i === 3)) ? 'white':'black';
          }
        }
			}, { image : logo, width: 100, alignment: 'center', margin: [0, 0, 0, 20]
      }, {
        style: 'columns',
        alignment: 'justify',
        columns: [{
          text: [
            { text : 'CONTRATO DE PRESTACIÓN DE SERVICIOS DE ALMACENAMIENTO QUE CELEBRAN POR UNA PARTE inciso A) ., A QUIEN EN LO SUCESIVO SE LE DENOMINARA EL “CLIENTE”, Y POR OTRA CARLOS R. LLAMAS GARCIA, A QUIEN EN LO SUCESIVO SE LE DENOMINARA COMO “GuardarTodo”, CONFORME A LAS SIGUIENTES CLAUSULAS:\n\n' },
            { style: 'columnbold', text: '1. LA BODEGA. '}, { text :'EL CLIENTE obtiene permiso de utilizar la(s) bodega(s) descrita(s) en el inciso J) de este contrato. Es responsabilidad de EL CLIENTE utilizar su propio candado de seguridad para su acceso. EL CLIENTE es el (la) único(a) que tiene acceso al interior. La Bodega se entrega limpia, vacía, fumigada y en perfectas condiciones. EL CLIENTE le está prohibido hacer construcciones, modificaciones o alterar la estructura y forma de la Bodega.\n\n'},
            { style: 'columnbold', text: '2. SERVICIOS. '}, { text: '“GuardarTodo” proveerá servicios de almacenaje, seguridad, limpieza, mantenimiento, fumigación durante los horarios descritos en la Cláusula 13 de este contrato. Así mismo, “GuardarTodo” prestará a EL CLIENTE los Servicios Adicionales descritos en el inciso L) de este contrato. “GuardarTodo” también ofrece a EL CLIENTE otros servicios con cargos adicionales, cuyas tarifas están disponibles a solicitud de EL CLIENTE. En caso de que EL CLIENTE no cumpla con sus obligaciones, “GuardarTodo” puede dejar de proveerle dicho servicios.\n\n'},
            { style: 'columnbold', text : '3. PAGOS. '}, { text: 'El pago de honorarios por los servicios señalados en el inciso M) de este documento (en su caso, actualizados en términos de la Cláusula 8 de este contrato) lo hará EL CLIENTE por adelantado dentro de los primeros cinco (5) días naturales de cada mes en el domicilio establecido en el inciso G) de este documento. En caso de que EL CLIENTE no cumpla con su obligación de pago en los términos de esta Cláusula, todos los servicios y acceso a la Bodega le serán suspendidos, y serán reanudados dentro de las 24 horas hábiles siguientes al momento en que “GuardarTodo” reciba el pago total del adeudo correspondiente. En caso de efectuarse el pago por medio de una transferencia bancaria, orden de pago, tarjeta de crédito, u otra forma similar, EL CLIENTE acepta pagar el 100% de las comisiones y cargos derivados de dicha transacción, de tal forma que “GuardarTodo” reciba en forma íntegra el pago total del saldo de EL CLIENTE.\n\n'} ,
            { style: 'columnbold', text : '4. MORA. '}, { text: 'Las partes convienen que en caso de mora en el pago de los honorarios pactados en el inciso M) de este documento. La suma adeudada, deberá pagar un interés moratorio equivalentes al 5% mensual del saldo que no haya sido cubierto.\n\n'} ,
            { style: 'columnbold', text : '5. DEPÓSITO EN GARANTÍA. '}, { text: 'Al firmar este contrato, EL CLIENTE entrega a “GuardarTodo” la cantidad de depósito establecida en el inciso N) de este documento, misma que “GuardarTodo” conservará quedando autorizada de forma expresa para aplicarla al pago de los saldos insolutos que le adeude EL CLIENTE en relación con este contrato. “GuardarTodo” devolverá a EL CLIENTE el dinero depositado dentro de los 10 días naturales siguientes a la fecha en que EL CLIENTE desocupe la Bodega, siempre y cuando EL CLIENTE no le adeude cantidad alguna.\n\n'} ,
            { style: 'columnbold', text : '6. SEGURIDAD. '}, {text: '“GuardarTodo” no proporciona ni hace arreglos de seguridad adicionales a los proporcionados. “GuardarTodo” no será responsable, en ningún momento, por la pérdida de dinero en efectivo, cheques, joyas y objetos que EL CLIENTE guarde o conserve en la Bodega. “GuardarTodo” no será responsable en caso de ocurrir algún incendio, corrientes de electricidad imprevistas u otro accidente fuera del control de “GuardarTodo”, El uso del estacionamiento que da servicio es bajo la responsabilidad de EL CLIENTE. “GuardarTodo” no se hace responsable por incendio, ni por el robo total o parcial o la pérdida de objetos en el interior de su vehículo o cualquier otro daño y/o perjuicio provocados por EL CLIENTE y/o terceros.\n\n'},
            { style: 'columnbold', text : '7. FALTAS AL PRESENTE CONTRATO. '}, { text: 'Durante la vigencia de este contrato, EL CLIENTE se obliga a observar el Reglamento de “GuardarTodo”. EL CLIENTE ha leído y está conforme con dicho Reglamento, y acepta que éste puede ser modificado sin previo aviso, “GuardarTodo” proporcionará el Reglamento modificado para conocimiento del CLIENTE. EL CLIENTE estará incumpliendo este contrato si: 1) Incumple cualquier disposición del Reglamento de “GuardarTodo”, 2) No liquida sus adeudos en los términos de este contrato; 3) Incumple con alguna de las cláusulas contenidas en este documento.\n\n' } ,
            { style: 'columnbold', text : '8. TÉRMINO DEL CONTRATO. '}, { text: 'Este contrato estará vigente durante el período inicial de vigencia que se establece en el inciso I) de este documento. El contrato quedará automáticamente renovado por periodos sucesivos adicionales de igual plazo al período inicial, salvo que cualquiera de las partes dé aviso por escrito a la otra parte notificando su deseo de terminar el contrato en la fecha de vencimiento que corresponda. Lo anterior, en el entendido de que dicho aviso deberá realizarse por lo menos 10 días naturales antes de la fecha de vencimiento respectiva. En este caso, EL CLIENTE deberá desocupar la Bodega precisamente en la fecha de vencimiento respectiva. EL CLIENTE podrá dar por terminado el presente Contrato antes del vencimiento de su vigencia (inicial o adicional) siempre y cuando se encuentre al corriente de sus pagos frente a “GuardarTodo”. Para tales efectos, deberá notificar a “GuardarTodo” por escrito su intención de dar por terminado el contrato anticipadamente y pagar a “GuardarTodo” el 100% del servicio mensual total señalado en el inciso M) de este documento (en su caso, actualizada en términos de esta Cláusula) multiplicada por el número de meses restantes del término de vigencia correspondiente, además de aquellos cargos que en ese tiempo adeude a “GuardarTodo”, y deberá desocupar la Bodega al día siguiente a la fecha en que realice dicha notificación. En cada renovación, el servicio mensual total se incrementará en un porcentaje igual al por ciento acumulado de aumento que registre el “Índice Nacional de Precios al Consumidor” (INPC) que determine y publique el Banco de México para los meses comprendidos en el período de vigencia que termina. En caso de que el período inicial de vigencia del presente contrato sea mayor a seis meses, el servicio mensual total se incrementará además semestralmente en porcentaje igual al por ciento acumulado de aumento que registre el “Índice Nacional de Precios al Consumidor” (INPC) que determine y publique el Banco de México para el período de seis meses naturales anteriores al ajuste, en el entendido de que en caso de que haya existido algún incremento por renovación durante dicho período de seis meses, el incremento semestral será en proporción a los meses que hayan transcurrido entre el mes en que se aplicó dicho incremento por renovación y el mes en el que corresponda el ajuste semestral respectivo. 9. RESESIÓN. En caso de que EL CLIENTE incumpla con cualquiera de sus obligaciones previstas en este contrato, incluyendo la falta de pago, “GuardarTodo” podrá exigir a EL CLIENTE el cumplimiento forzoso del contrato, o bien, optar por la rescisión del mismo sin necesidad de declaración judicial ni proceso legal alguno. “GuardarTodo” podrá también rescindir el presente contrato sin necesidad de declaración judicial ni proceso legal alguno en caso de que EL CLIENTE sea o se tenga la presunción de que será embargado, declarado en quiebra, en suspensión de pagos o en concurso de acreedores. En caso de que “GuardarTodo” decida dar por rescindido el presente contrato en los términos de esta cláusula, lo notificará a EL CLIENTE y éste deberá desocupar la Bodega dentro de los cinco días naturales siguientes a la fecha en que reciba dicha notificación. “GuardarTodo” tiene el derecho de ofrecer los servicios de almacenaje a otro cliente a partir de la fecha en que EL CLIENTE debe desocuparla de conformidad con esta Cláusula. EL CLIENTE expresamente autoriza a “GuardarTodo” a transferir sus enseres personales así como cualquier otra pertenencia que se encuentre dentro de la Bodega a un'  }
          ]
        },
        {
          text: [
            { text: 'almacén de depósito y a almacenarlos por un plazo no mayor a 60 días naturales contados a partir de la fecha en que EL CLIENTE debe desocupar la Bodega de conformidad con esta Cláusula. EL CLIENTE pagará en tal caso el importe correspondiente al almacenaje. En caso de que “GuardarTodo” dé por rescindido el presente contrato de conformidad con esta Cláusula y EL CLIENTE no permita a “GuardarTodo” obtener la posesión de la Bodega, EL CLIENTE se obliga a pagar mensualmente, como pena convencional por su incumplimiento, el equivalente al cien por ciento (100%) del monto del servicio mensual total (en su caso, actualizado en los términos de esta Cláusula), por cada mes o fracción de mes que continúe ocupando la Bodega, contado a partir del día siguiente al día en que EL CLIENTE debió desocupar y entregar la Bodega en términos de esta cláusula y hasta que haga entrega de la Bodega a “GuardarTodo”. El pago de la pena convencional establecida en la presente cláusula es en adición al servicio mensual total (en su caso, actualizado en los términos de esta Cláusula) que EL CLIENTE deberá seguir cubriendo por el uso, control o almacenamiento de la Bodega. Dichos pagos de penas y servicios contratados que EL CLIENTE deberá realizar no significan, en forma alguna, prórroga, renovación del contrato o consentimiento por parte de “GuardarTodo” de la no devolución de la Bodega. En todo caso, EL CLIENTE deberá devolver a “GuardarTodo” la Bodega en el mismo estado y condiciones en que la recibió.\n\n' } ,
            { style: 'columnbold', text: '9. RESESIÓN. ' }, { text: 'En caso de que EL CLIENTE incumpla con cualquiera de sus obligaciones previstas en este contrato, incluyendo la falta de pago, “GuardarTodo” podrá exigir a EL CLIENTE el cumplimiento forzoso del contrato, o bien, optar por la rescisión del mismo sin necesidad de declaración judicial ni proceso legal alguno. “GuardarTodo” podrá también rescindir el presente contrato sin necesidad de declaración judicial ni proceso legal alguno en caso de que EL CLIENTE sea o se tenga la presunción de que será embargado, declarado en quiebra, en suspensión de pagos o en concurso de acreedores. En caso de que “GuardarTodo” decida dar por rescindido el presente contrato en los términos de esta cláusula, lo notificará a EL CLIENTE y éste deberá desocupar la Bodega dentro de los cinco días naturales siguientes a la fecha en que reciba dicha notificación. “GuardarTodo” tiene el derecho de ofrecer los servicios de almacenaje a otro cliente a partir de la fecha en que EL CLIENTE debe desocuparla de conformidad con esta Cláusula. EL CLIENTE expresamente autoriza a “GuardarTodo” a transferir sus enseres personales así como cualquier otra pertenencia que se encuentre dentro de la Bodega a un almacén de depósito y a almacenarlos por un plazo no mayor a 60 días naturales contados a partir de la fecha en que EL CLIENTE debe desocupar la Bodega de conformidad con esta Cláusula. EL CLIENTE pagará en tal caso el importe correspondiente al almacenaje. En caso de que “GuardarTodo” dé por rescindido el presente contrato de conformidad con esta Cláusula y EL CLIENTE no permita a “GuardarTodo” obtener la posesión de la Bodega, EL CLIENTE se obliga a pagar mensualmente, como pena convencional por su incumplimiento, el equivalente al cien por ciento (100%) del monto del servicio mensual total (en su caso, actualizado en los términos de esta Cláusula), por cada mes o fracción de mes que continúe ocupando la Bodega, contado a partir del día siguiente al día en que EL CLIENTE debió desocupar y entregar la Bodega en términos de esta cláusula y hasta que haga entrega de la Bodega a “GuardarTodo”. El pago de la pena convencional establecida en la presente cláusula es en adición al servicio mensual total (en su caso, actualizado en los términos de esta Cláusula) que EL CLIENTE deberá seguir cubriendo por el uso, control o almacenamiento de la Bodega. Dichos pagos de penas y servicios contratados que EL CLIENTE deberá realizar no significan, en forma alguna, prórroga, renovación del contrato o consentimiento por parte de “GuardarTodo” de la no devolución de la Bodega. En todo caso, EL CLIENTE deberá devolver a “GuardarTodo” la Bodega en el mismo estado y condiciones en que la recibió.\n\n' },
            { style: 'columnbold', text: '10. ACTIVIDAD DEL CLIENTE. ' }, { text: 'EL CLIENTE utilizará la Bodega exclusivamente como almacenamiento. El desarrollo de tal actividad es responsabilidad exclusiva de EL CLIENTE. EL CLIENTE se abstendrá de ofrecer y/o vender productos y/o servicios a otro(s) cliente(s) de “GuardarTodo”. EL CLIENTE es el único responsable del origen y legal procedencia de los bienes en el interior de la Bodega. EL CLIENTE no podrá introducir a las instalaciones de “GuardarTodo” materiales altamente inflamables o explosivos, ni substancias corrosivas, materiales cuyo manejo sea de riesgo o sustancias prohibidas por la ley. El presente es un contrato personal y EL CLIENTE no podrá cederlo o transferirlo a tercero alguno. EL CLIENTE renuncia expresamente a cualquier servicio contratado que le llegare a corresponder en el caso de que “GuardarTodo” venda, transfiera o sea desalojado del terreno en el que se encuentra la Bodega.\n\n' },
            { style: 'columnbold', text: '11. RESPONSABILIDAD. ' }, { text: '“GuardarTodo” no será responsable, en ningún momento, de la guarda, deterioro, destrucción o pérdida de los bienes introducidos en el espacio dedicado al “Cliente” señalado en la cláusula primera de este contrato.\n\n' },
            { style: 'columnbold', text: '12. HORARIO. ' }, { text: '“GuardarTodo” prestará sus servicios de Lunes a Viernes de 8:00 a 18:00 horas y Sábados 9:00-13:00 horas, salvo los siguientes días de conformidad con el artículo 74 de la Ley Federal del Trabajo: Enero 1, primer lunes de Febrero en conmemoración del 05 de Febrero, el tercer lunes de Marzo en conmemoración del 21 de Marzo, Mayo 1, Septiembre 16, tercer lunes de Noviembre en conmemoración del 20 de Noviembre, Diciembre 25, y cuando tome posesión de su cargo el Presidente de la República. “GuardarTodo” podrá suspender la prestación de los servicios por razones de inestabilidad política, huelgas u otros eventos fuera del control de “GuardarTodo”, y en tal caso, el pago de la tarifa también se suspenderá por un período igual.\n\n' },
            { style: 'columnbold', text: '13. CONFIDENCIALIDAD. ' }, { text: 'Los sistemas y procedimientos que “GuardarTodo” utiliza para la prestación de los servicios materia de este contrato son propiedad exclusiva de “GuardarTodo”. En consecuencia, EL CLIENTE se obliga a no divulgarlos ni aprovecharlos en forma alguna, ni a participar directa o indirectamente, en la operación o en el desarrollo de negocio alguno que ofrezca servicios iguales o similares a los que presta “GuardarTodo”.\n\n' },
            { style: 'columnbold', text: '14. RESPONSABILIDAD LABORAL. ' }, { text: 'No existe relación laboral alguna entre “GuardarTodo” y EL CLIENTE, empleados de éste último, sus proveedores o personas o terceros que acudan a las instalaciones de “GuardarTodo”.\n\n' },
            { style: 'columnbold', text: '15. JURISDICCIÓN. ' }, { text: 'Para la interpretación y cumplimiento de este contrato, las partes se someten a la jurisdicción de los tribunales competentes de la Ciudad de Monterrey, N. L., renunciando a cualquier otro fuero que por razón de sus domicilios presentes o futuros pudiera corresponderles.\nLeído este contrato y enteradas las partes de su alcance y contenido del anverso, reverso y carátula, lo aceptan y suscriben en la fecha mencionada en la primara hoja de este contrato.\n\n' } ,
            {text : '\n\n\n\n\n\n\n'} ,
            {alignment: 'center', text: '________________________                           ________________________\n'},
            {alignment: 'center', text: ' "GuardarTodo"                                           "EL CLIENTE"'}
          ],
        }]
      }, {
        image : signature, width: 42, alignment: 'right', margin: [0, -62, 74, 0]
      }],
      styles: {
        header: {
          alignment: 'center',
          fillColor: 'black',
          color: 'white',
          fontSize:10
        },
        right: {
          fontSize: 18,
          alignment: 'right'
        },
        title: {
          fontSize: 9
        },
        info: {
          bold: true,
          fontSize: 9
        },
        info2: {
          bold: true,
          fontSize: 8
        },
        table: {
          margin: [0, 20, 0, 20]
        },
        obs: {
          alignment: 'center',
          fontSize: 8
        },
        rightme:
        {
            alignment: 'right'
        },
        obsbold: { bold: true },
        columnbold: { bold: true, fontSize: 7 },
        columns : { fontSize: 5.7 }
      },
      defaultStyle: {
        columnGap: 20,
      }
    }
  }

  getObject() {
    return this.doc
  }

  noNulls(data) {
    return data
  }
}

class makeCredentialDefinition {
  constructor($filter, data, company, client, rent, date) {
    moment.locale('es');
    this.doc = {
      pageSize: 'A6',
      pageOrientation: 'landscape',
      pageMargins: [ 40, 60, 40, 60 ],
      content: [{
        style: 'table',
        table: {
          widths: ['*', '*', '*', '*' ],
          body: [
            [{
              colSpan: 2,
              border: [true, true, true, false],
              margin: [0, 0, 0, 8],
              style: 'table',
              table: {
                widths : ['*', '*', '*', '*'],
                body : [[
                  {text:'',border: [false, false, false, false]},{text:'',border: [false, false, false, false]},{colSpan:2, image : logo, width: 40, alignment: 'center', border: [false, false, false, false]},{}
                ],[
                  {text:'Bodega:', style: 'normaltext', border: [false, false, false, false]},{colSpan: 3, style: 'middletext', text:`${_.map(rent, function(a) { return a.number; }).join(', ')}`, border: [false, false, false, true]},{},{}
                ],[
                  {colSpan:4, text:'', border: [false, false, false, false]},{},{},{}
                ],[
                  {text:'Titular:', style: 'normaltext' , border: [false, false, false, false]},{colSpan: 3, style: 'middletext', text:`${client.name}`, border: [false, false, false, true]},{},{}
                ],[
                  {colSpan:4, text:'', border: [false, false, false, false]},{},{},{}
                ],[
                  {text:'Sucursal:', style: 'normaltext', border: [false, false, false, false]},{colSpan: 3, style: 'middletext', text:'Barragan', border: [false, false, false, true]},{},{}
                ]]
              }
            },{},{
              style: 'table',
              border: [true, true, true, false],
              margin: [0, 15, 0, 0],
              table: {
                widths : ['*', '*'],
                body : [[
                  {colSpan: 2, text:'Horario de oficina', style: 'middletext', border: [false, false, false, false]},{}
                ],[
                  {colSpan: 2, text:'Lunes a Viernes de 8:30 - 16:30 hrs', style: 'middletext', border: [false, false, false, false]},{}
                ],[
                  {colSpan: 2, text:'Sabado 9:00 - 15:00 hrs', style: 'middletext', border: [false, false, false, false]},{}
                ]]
              }
            },{
              style: 'table',
              margin: [0, 15, 0, 0],
              border: [true, true, true, false],
              table: {
                widths : ['*'],
                body : [[
                  {text:`${company.address}`, style: 'middletext', border: [false, false, false, false]}
                ], [
                  {text:'Telefono: 25560582', style: 'middletext', border: [false, false, false, false]}
                ], [
                  {text:'Whatsapp: 8123712694', style: 'middletext', border: [false, false, false, false]}
                ]]
              }
            }]
          ]
        }
      }, {
        style: 'table',
        table: {
          widths: ['*', '*' ],
          body: [[
              {text:`Vigente hasta ${moment(date.date).format('L')}`, style: 'middletextWhite', fillColor: '#cc1c1c'},
              {text:'Tarjeta para acceso a bodega', style: 'middletextWhite', fillColor: '#1b53cc'}
            ]]
          }
      }],
      styles: {
        normaltext: {
          fontSize: 6
        },
        middletext: {
          fontSize: 6,
          bond: true,
          alignment: 'center'
        },
        middletextWhite: {
          fontSize: 8,
          bond: true,
          alignment: 'center',
          color:'#fff'
        }
      }
    }
  }

  getObject() {
    return this.doc
  }
}

class makePaymentDefinition {
  constructor($filter, data) {
    moment.locale('es');
    this.doc = {
      // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
      pageMargins: [ 30, 50, 30, 50 ],
      content: [{
        style: 'table',
        table: {
          widths: ['30%', '40%', '30%' ],
          body: [
            [ { image : logo, width: 100, alignment: 'center' },
              { text: `AV.MANUEL L. BARRAGAN #1400,\nCOLONIA LAS MISIONES,SAN NICOLAS\nDE LOS GARZA NUEVO LEON\nTELEFONO: 25560582`, style: 'header' },
              { style: 'table',
                table: {
                  widths: [ '*' ],
                  body: [
                    [{ style:'headerB', text: 'FOLIO' }],
                    [{ style:'header', text: `${_.map(
                        _.reject(data.payments, ['rent', null]), 
                      function(a) { return a.rent.folio }).join(',\n')}` }],
                    [{ style:'headerB', text: 'FECHA DE PAGO' }],
                    [{ style:'header', text: `${moment(data.transaction).format('LL')}` }]
                  ]
                }
              }
            ]
          ]
        }, layout: 'noBorders'
      }, {
        style: 'table',
        margin: [20, 20, 20, 20],
        table: {
          widths: [55, '*', 50, 90 ],
          body: [
            [ { style:'info', text: 'RECIBI DE :' }, {
              style: 'table',
              table: {
                widths: ['100%'],
                body: [[ { style:'infoB', text: data.client ? `${data.client.name}` : 'Publico en general' } ]]
              }, layout: {
                  hLineColor: function (i, node) {
                    return (i === 1 ) ? 'black' : 'white';
                  },
                  vLineColor: function (i, node) {
                    return 'white';
                  }
                }
             }, { style:'info', text: 'IMPORTE :' }, {
              style: 'table',
              table: {
                widths: ['100%'],
                body: [[ { style:'infoB', text: `${$filter('currency')(data.amount, '$', 2)}` } ]]
              }, layout: {
                  hLineColor: function (i, node) {
                    return (i !== 0 ) ? 'black' : 'white';
                  },
                  vLineColor: function (i, node) {
                    return 'white';
                  }
                }
             } ]
          ]
        } , layout: 'noBorders'
      }, {
        style: 'table',
        margin: [20, 5, 20, 0],
        table:{
          widths: [110, '*' ],
          body: [
            [ { style:'info', text: 'POR CONCEPTO DE: ' }, {
              style: 'table',
              table:{
                widths: [ '*' ],
                body: [[ { style:'infoB', text: `${_.map(data.payments, function(a) {
                    if (a.rent && a.date) {
                      return ((a.partial)? 'PAGO PARCIAL' : 'PAGO') + ' DE BODEGA ' + a.rent.number + ' CON FECHA DE ' + a.date.description;
                    } else {
                      return 'PAGO DE ARTICULO / SERVICIO ' + a.description;
                    }
                  }).join('\n')}` } ]]
              }, layout: {
                  hLineColor: function (i, node) {
                    return (i === 1 ) ? 'black' : 'white';
                  },
                  vLineColor: function (i, node) {
                    return 'white';
                  }
                }
            } ]
          ]
        }, layout: 'noBorders'
      }, {
        style: 'table',
        margin: [20, 5, 20, 0],
        table:{
          widths: [110, '*' ],
          body: [
            [ { style:'info', text: 'FORMA DE PAGO :' }, {
              style: 'table',
              table:{
                widths: [ '*' ],
                body: [[ { style:'infoB', text: `${data.methodpayment}` } ]]
              }, layout: {
                  hLineColor: function (i, node) {
                    return (i === 1 ) ? 'black' : 'white';
                  },
                  vLineColor: function (i, node) {
                    return 'white';
                  }
                }
            } ]
          ]
        }, layout: 'noBorders'
      }, {
        style: 'table',
        margin: [20, 5, 20, 0],
        table:{
          widths: [110, '*' ],
          body: [
            [ { style:'info', text: 'OBSEVACIONES :' }, {
              style: 'table',
              table:{
                widths: [ '*' ],
                body: [[ { style:'infoB', text: `${(data.comments)?data.comments:''}` } ]]
              }, layout: {
                  hLineColor: function (i, node) {
                    return (i === 1 ) ? 'black' : 'white';
                  },
                  vLineColor: function (i, node) {
                    return 'white';
                  }
                }
            } ]
          ]
        }, layout: 'noBorders'
      }, {
        margin: [20, 30, 20, 0],
        columns: [
            { width: '*', text: '' },
            {
                width: 'auto',
                    table:{
                      widths: [300],
                      body: [[ { style:'info', alignment: 'center', text: `NOMBRE Y FIRMA` } ]]
                    }, layout: {
                      hLineColor: function (i, node) {
                        return (i === 0 ) ? 'black' : 'white';
                      },
                      vLineColor: function (i, node) {
                        return 'white';
                      }
                    }
            },
            { width: '*', text: '' },
        ]
      }],
      styles: {
        header: {
          alignment: 'center',
          fontSize: 10
        },
        headerB: {
          alignment: 'center',
          fontSize: 11,
          bold: true
        },
        info: {
          fontSize: 10
        },
        infoB: {
          fontSize: 10,
          bold: true
        }
      }
    }
  }

  getObject() {
    return this.doc
  }
}

const logo = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QCYRXhpZgAASUkqAAgAAAAFABoBBQABAAAASgAAABsBBQABAAAAUgAAACgBAwABAAAAAgAAADEBAgAMAAAAWgAAAGmHBAABAAAAZgAAAAAAAABIAAAAAQAAAEgAAAABAAAAR0lNUCAyLjguMTYAAwAAkAcABAAAADAyMTAAoAcABAAAADAxMDABoAMAAQAAAP//AAAAAAAA/+ECmGh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiB4bWxuczpleGlmPSdodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyc+CiAgPGV4aWY6WFJlc29sdXRpb24+NzI8L2V4aWY6WFJlc29sdXRpb24+CiAgPGV4aWY6WVJlc29sdXRpb24+NzI8L2V4aWY6WVJlc29sdXRpb24+CiAgPGV4aWY6UmVzb2x1dGlvblVuaXQ+SW5jaDwvZXhpZjpSZXNvbHV0aW9uVW5pdD4KICA8ZXhpZjpTb2Z0d2FyZT5QaWNhc2E8L2V4aWY6U29mdHdhcmU+CiAgPGV4aWY6RXhpZlZlcnNpb24+RXhpZiBWZXJzaW9uIDIuMTwvZXhpZjpFeGlmVmVyc2lvbj4KICA8ZXhpZjpGbGFzaFBpeFZlcnNpb24+Rmxhc2hQaXggVmVyc2lvbiAxLjA8L2V4aWY6Rmxhc2hQaXhWZXJzaW9uPgogIDxleGlmOkNvbG9yU3BhY2U+VW5jYWxpYnJhdGVkPC9leGlmOkNvbG9yU3BhY2U+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCjwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9J3InPz4K/+IMWElDQ19QUk9GSUxFAAEBAAAMSExpbm8CEAAAbW50clJHQiBYWVogB84AAgAJAAYAMQAAYWNzcE1T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',


signature = 'data:image/jpeg;base64,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'



export default Documents;







