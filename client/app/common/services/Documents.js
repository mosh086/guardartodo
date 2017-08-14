import moment from 'moment';
import _ from 'lodash';
import vfsFonts from 'vfs_fonts';

class Documents {
  constructor(Company, Image, Logo, UserService, ClientService, RentService, $filter) {
    'ngInject';

    this._docDefinition = null;
    this._Company = Company;
    this._Image = Image;
    this._Logo = Logo
    this._User = UserService;
    this._Client = ClientService;
    this._Rent = RentService;
    this._filter = $filter;

    const {vfs} = vfsFonts.pdfMake;
    pdfMake.vfs = vfs;
  }

  print() {

  }

  save() {

  }

  openCredentialByRenId(clientId, rentId) {
    let self = this;
    self._Client.get(clientId).then((client)=> {
      self._Client.getRentValidity(client.clientId, rentId).then((date) => {
        self._Rent.get(rentId).then((rent) => {
          self._docDefinition = new makeCredentialPerStoragelokerDefinition(self._filter, clientId, self._Company, self._Image, client, rent, date).getObject();
          pdfMake.createPdf(this._docDefinition).open();
        }, (err) => {})
      }, (err) => {})
    }, (err)=> {})
  }

  openContract(data) {
      let self = this;
      self._User.me().then((user) => {
        //self._User.getByRentId(data.rentId).then((authorization) => {
        this._docDefinition = new makeContractDefinition(self._filter, data, self._Company, self._Logo, self._Image, user.data[0]/*, authorization*/).getObject();
        pdfMake.createPdf(this._docDefinition).open();
        //}, (err)=> {})
      }, (err)=> {})
  }

  openPayment(data) {
    let self = this;
    this._docDefinition = new makePaymentDefinition(self._filter, data, self._Image).getObject();
    pdfMake.createPdf(this._docDefinition).open();
  }

  openCredential(data) {
    let self = this;
    self._Client.get(data).then((client)=> {
      self._Client.getValidity(client.clientId).then((date) => {
        self._Rent.getByClientId(client.clientId).then((rent) => {
          self._docDefinition = new makeCredentialDefinition(self._filter, data, self._Company, self._Image, client, _.sortBy(rent, 'number'), date).getObject();
          pdfMake.createPdf(this._docDefinition).open();
        }, (err) => {})
      }, (err) => {})
    }, (err)=> {})
  }
}

class makeContractDefinition {
  constructor($filter, data, company, logo, image, user) {
    moment.locale('es');
    let self = this;
    data = this.noNulls(data);
    let temp;
    let folioText = `B${moment(data.startDate).format('YYMM')}${data.storageloker.number}${"000".substring((data.rentId + "").length,3) + data.rentId}`;
    this.doc = {
      pageMargins: 10,
      content: [{
        style: 'table',
        table: {
          widths: ['70%', '*' ],
          body: [[
            { image : logo.logo2, width: 180, alignment: 'center' },
            { margin:[0,35,0,0], fontSize: 13, text: [
                { text: `CONTRATO\n`, fontSize: 17, margin:[0,0,10,0] },
                'Folio: ', { text: `${data.folio || folioText}\n`, bold: true },
                { text: `${data.client.lineOfBusiness}\n`, bold: true },
                { text: `CONTRATO: ${data.rentId}`, bold: true }
            ]}
        ]]}, layout: 'noBorders'
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
              { colSpan: 2, style: 'title', text: ['H) FECHA:\n', {style: 'info', alignment: 'center',  text: `${moment(data.startDate).format('LL')}`} ] }, {},
              { colSpan: 2, style: 'title', text: ['I) PERIODO INICIAL DE VIGENCIA DE CONTRATO:\n', {style: 'info', alignment: 'center', text: `${moment(data.startDate).format('LL')}` }] } , {}
            ],
            [{ colSpan: 4, style: 'title', margin: [10, 20], text: 'SERVICIOS CONTRATADOS:   ' }, {}, {}, {}],
            [{ colSpan: 2, text: ''}, {}, {text: 'PRECIO', style: 'title', alignment: 'center', fontSize:10 }, {text: 'PRECIO CON I.V.A.', style: 'title', alignment: 'center', fontSize: 10 }],
            [{ colSpan: 2, style: 'title', text: ['J) BODEGA DE TAMAÑO:   ', {style: 'info', alignment: 'center', text: `${data.storagelokertype.name}  ${data.storageloker.number}` }] }, {}, { alignment: 'right', margin: [20, 0], text: `${$filter('currency')(data.cost, '$', 2)}` }, { alignment: 'right', margin: [20, 0], text: `${$filter('currency')(data.total, '$', 2)}` }],
            [{ colSpan: 2, style: 'title', text: 'L) SERVICIOS ADICIONALES:   ' }, {}, {margin: [20, 0], alignment: 'right', colSpan: 2, text: `${$filter('currency')(data.extra, '$', 2)}` }, {}],
            [{ colSpan: 2, style: 'title', alignment: 'center', margin: [20, 20], text: 'TOTAL' }, {}, { text: '' }, { alignment: 'right', margin: [20, 20], text: `${$filter('currency')(data.total, '$', 2)}` }],
            [{ colSpan: 4, style: 'title', text: `M) SERVICIO MENSUAL TOTAL:   ${$filter('currency')(data.total, '$', 2)}` }, {}, {}, {}],
            [{ colSpan: 4, style: 'title', text: ['N) DEPOSITO:   ', {style: 'info2',text: '$0.00 (00/100 M. N.)'} ]}, {}, {}, {}],
            [{ colSpan: 4, style: 'title', text: ['O) USUARIOS AUTORIZADOS:   ', {style: 'info2', text: `${(data.authorization)?data.authorization:''}`/*${_.map(authorization, function(a) { return a.fullName; }).join(', ')}*/}]}, {}, {}, {}],
            [{ margin: 5, colSpan: 4, style: 'obs', text: [`OBSERVACIONES: “GuardarTodo” prestará sus servicios de `, { style:'obsbold', text: `Lunes a Viernes de 8:00 a 18:00 horas y Sábados :00-13:00 horas` }, `, salvo los siguientes días de conformidad con el artículo 74 de la Ley Federal del Trabajo: Enero 1, primer lunes de Febrero en conmemoración del 05 de Febrero, el tercer lunes de Marzo en conmemoración del 21 de Marzo, Mayo 1, Septiembre 16, tercer lunes de Noviembre en conmemoración del 20 de Noviembre, Diciembre 25, y cuando tome posesión de su cargo el Presidente de la República. “GuardarTodo” podrá suspender la prestación de los servicios por razones de inestabilidad política, u otros eventos fuera del control de “GuardarTodo”.`] }, {}, {}, {}],
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
			}, { image : image.logo, width: 100, alignment: 'center', margin: [0, 0, 0, 20]
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
            { style: 'columnbold', text : '8. TÉRMINO DEL CONTRATO. '}, { text: 'Este contrato estará vigente durante el período inicial de vigencia que se establece en el inciso I) de este documento. El contrato quedará automáticamente renovado por periodos sucesivos adicionales de igual plazo al período inicial, salvo que cualquiera de las partes dé aviso por escrito a la otra parte notificando su deseo de terminar el contrato en la fecha de vencimiento que corresponda. Lo anterior, en el entendido de que dicho aviso deberá realizarse por lo menos 10 días naturales antes de la fecha de vencimiento respectiva. En este caso, EL CLIENTE deberá desocupar la Bodega precisamente en la fecha de vencimiento respectiva. EL CLIENTE podrá dar por terminado el presente Contrato antes del vencimiento de su vigencia (inicial o adicional) siempre y cuando se encuentre al corriente de sus pagos frente a “GuardarTodo”. Para tales efectos, deberá notificar a “GuardarTodo” por escrito su intención de dar por terminado el contrato anticipadamente y pagar a “GuardarTodo” el 100% del servicio mensual total señalado en el inciso M) de este documento (en su caso, actualizada en términos de esta Cláusula) multiplicada por el número de meses restantes del término de vigencia correspondiente, además de aquellos cargos que en ese tiempo adeude a “GuardarTodo”, y deberá desocupar la Bodega al día siguiente a la fecha en que realice dicha notificación. En cada renovación, el servicio mensual total se incrementará en un porcentaje igual al por ciento acumulado de aumento que registre el “Índice Nacional de Precios al Consumidor” (INPC) que determine y publique el Banco de México para los meses comprendidos en el período de vigencia que termina. En caso de que el período inicial de vigencia del presente contrato sea mayor a seis meses, el servicio mensual total se incrementará además semestralmente en porcentaje igual al por ciento acumulado de aumento que registre el “Índice Nacional de Precios al Consumidor” (INPC) que determine y publique el Banco de México para el período de seis meses naturales anteriores al ajuste, en el entendido de que en caso de que haya existido algún incremento por renovación durante dicho período de seis meses, el incremento semestral será en proporción a los meses que hayan transcurrido entre el mes en que se aplicó dicho incremento por renovación y el mes en el que corresponda el ajuste semestral respectivo. 9. RESESIÓN. En caso de que EL CLIENTE incumpla con cualquiera de sus obligaciones previstas en este contrato, incluyendo la falta de pago, “GuardarTodo” podrá exigir a EL CLIENTE el cumplimiento forzoso del contrato, o bien, optar por la rescisión del mismo sin necesidad de declaración judicial ni proceso legal alguno. “GuardarTodo” podrá también rescindir el presente contrato sin necesidad de declaración judicial ni proceso legal alguno en caso de que EL CLIENTE sea o se tenga la presunción de que será embargado, declarado en quiebra, en suspensión de pagos o en concurso de acreedores. En caso de que “GuardarTodo” decida dar por rescindido el presente contrato en los términos de esta cláusula, lo notificará a EL CLIENTE y éste deberá desocupar la Bodega dentro de los cinco días naturales siguientes a la fecha en que reciba dicha notificación. “GuardarTodo” tiene el derecho de ofrecer los servicios de almacenaje a otro cliente a partir de la fecha en que EL CLIENTE debe desocuparla de conformidad con esta Cláusula. EL CLIENTE expresamente autoriza a “GuardarTodo” a transferir sus enseres personales así como cualquier otra pertenencia que se encuentre dentro de la Bodega a un almacén de depósito y a almacenarlos por un plazo no mayor a 60 días naturales contados a partir de la fecha en que EL CLIENTE debe desocupar la Bodega de conformidad con esta Cláusula. EL CLIENTE pagará en tal caso el importe correspondiente al almacenaje. En caso de que “GuardarTodo” dé por rescindido el presente contrato de conformidad con esta Cláusula y EL CLIENTE no permita a “GuardarTodo” obtener la posesión de la Bodega, EL CLIENTE se obliga a pagar mensualmente, como'  }
          ], margin:[0,0,7,0]
        },
        {
          text: [
            { text: 'pena convencional por su incumplimiento, el equivalente al cien por ciento (100%) del monto del servicio mensual total (en su caso, actualizado en los términos de esta Cláusula), por cada mes o fracción de mes que continúe ocupando la Bodega, contado a partir del día siguiente al día en que EL CLIENTE debió desocupar y entregar la Bodega en términos de esta cláusula y hasta que haga entrega de la Bodega a “GuardarTodo”. El pago de la pena convencional establecida en la presente cláusula es en adición al servicio mensual total (en su caso, actualizado en los términos de esta Cláusula) que EL CLIENTE deberá seguir cubriendo por el uso, control o almacenamiento de la Bodega. Dichos pagos de penas y servicios contratados que EL CLIENTE deberá realizar no significan, en forma alguna, prórroga, renovación del contrato o consentimiento por parte de “GuardarTodo” de la no devolución de la Bodega. En todo caso, EL CLIENTE deberá devolver a “GuardarTodo” la Bodega en el mismo estado y condiciones en que la recibió.\n\n' } ,
            { style: 'columnbold', text: '9. RESESIÓN. ' }, { text: 'En caso de que EL CLIENTE incumpla con cualquiera de sus obligaciones previstas en este contrato, incluyendo la falta de pago, “GuardarTodo” podrá exigir a EL CLIENTE el cumplimiento forzoso del contrato, o bien, optar por la rescisión del mismo sin necesidad de declaración judicial ni proceso legal alguno. “GuardarTodo” podrá también rescindir el presente contrato sin necesidad de declaración judicial ni proceso legal alguno en caso de que EL CLIENTE sea o se tenga la presunción de que será embargado, declarado en quiebra, en suspensión de pagos o en concurso de acreedores. En caso de que “GuardarTodo” decida dar por rescindido el presente contrato en los términos de esta cláusula, lo notificará a EL CLIENTE y éste deberá desocupar la Bodega dentro de los cinco días naturales siguientes a la fecha en que reciba dicha notificación. “GuardarTodo” tiene el derecho de ofrecer los servicios de almacenaje a otro cliente a partir de la fecha en que EL CLIENTE debe desocuparla de conformidad con esta Cláusula. EL CLIENTE expresamente autoriza a “GuardarTodo” a transferir sus enseres personales así como cualquier otra pertenencia que se encuentre dentro de la Bodega a un almacén de depósito y a almacenarlos por un plazo no mayor a 60 días naturales contados a partir de la fecha en que EL CLIENTE debe desocupar la Bodega de conformidad con esta Cláusula. EL CLIENTE pagará en tal caso el importe correspondiente al almacenaje. En caso de que “GuardarTodo” dé por rescindido el presente contrato de conformidad con esta Cláusula y EL CLIENTE no permita a “GuardarTodo” obtener la posesión de la Bodega, EL CLIENTE se obliga a pagar mensualmente, como pena convencional por su incumplimiento, el equivalente al cien por ciento (100%) del monto del servicio mensual total (en su caso, actualizado en los términos de esta Cláusula), por cada mes o fracción de mes que continúe ocupando la Bodega, contado a partir del día siguiente al día en que EL CLIENTE debió desocupar y entregar la Bodega en términos de esta cláusula y hasta que haga entrega de la Bodega a “GuardarTodo”. El pago de la pena convencional establecida en la presente cláusula es en adición al servicio mensual total (en su caso, actualizado en los términos de esta Cláusula) que EL CLIENTE deberá seguir cubriendo por el uso, control o almacenamiento de la Bodega. Dichos pagos de penas y servicios contratados que EL CLIENTE deberá realizar no significan, en forma alguna, prórroga, renovación del contrato o consentimiento por parte de “GuardarTodo” de la no devolución de la Bodega. En todo caso, EL CLIENTE deberá devolver a “GuardarTodo” la Bodega en el mismo estado y condiciones en que la recibió.\n\n' },
            { style: 'columnbold', text: '10. ACTIVIDAD DEL CLIENTE. ' }, { text: 'EL CLIENTE utilizará la Bodega exclusivamente como almacenamiento. El desarrollo de tal actividad es responsabilidad exclusiva de EL CLIENTE. EL CLIENTE se abstendrá de ofrecer y/o vender productos y/o servicios a otro(s) cliente(s) de “GuardarTodo”. EL CLIENTE es el único responsable del origen y legal procedencia de los bienes en el interior de la Bodega. EL CLIENTE no podrá introducir a las instalaciones de “GuardarTodo” materiales altamente inflamables o explosivos, ni substancias corrosivas, materiales cuyo manejo sea de riesgo o sustancias prohibidas por la ley. El presente es un contrato personal y EL CLIENTE no podrá cederlo o transferirlo a tercero alguno. EL CLIENTE renuncia expresamente a cualquier servicio contratado que le llegare a corresponder en el caso de que “GuardarTodo” venda, transfiera o sea desalojado del terreno en el que se encuentra la Bodega.\n\n' },
            { style: 'columnbold', text: '11. RESPONSABILIDAD. ' }, { text: '“GuardarTodo” no será responsable, en ningún momento, de la guarda, deterioro, destrucción o pérdida de los bienes introducidos en el espacio dedicado al “Cliente” señalado en la cláusula primera de este contrato.\n\n' },
            { style: 'columnbold', text: '12. HORARIO. ' }, { text: '“GuardarTodo” prestará sus servicios de Lunes a Viernes de 8:00 a 18:00 horas y Sábados 9:00-13:00 horas, salvo los siguientes días de conformidad con el artículo 74 de la Ley Federal del Trabajo: Enero 1, primer lunes de Febrero en conmemoración del 05 de Febrero, el tercer lunes de Marzo en conmemoración del 21 de Marzo, Mayo 1, Septiembre 16, tercer lunes de Noviembre en conmemoración del 20 de Noviembre, Diciembre 25, y cuando tome posesión de su cargo el Presidente de la República. “GuardarTodo” podrá suspender la prestación de los servicios por razones de inestabilidad política, huelgas u otros eventos fuera del control de “GuardarTodo”, y en tal caso, el pago de la tarifa también se suspenderá por un período igual.\n\n' },
            { style: 'columnbold', text: '13. CONFIDENCIALIDAD. ' }, { text: 'Los sistemas y procedimientos que “GuardarTodo” utiliza para la prestación de los servicios materia de este contrato son propiedad exclusiva de “GuardarTodo”. En consecuencia, EL CLIENTE se obliga a no divulgarlos ni aprovecharlos en forma alguna, ni a participar directa o indirectamente, en la operación o en el desarrollo de negocio alguno que ofrezca servicios iguales o similares a los que presta “GuardarTodo”.\n\n' },
            { style: 'columnbold', text: '14. RESPONSABILIDAD LABORAL. ' }, { text: 'No existe relación laboral alguna entre “GuardarTodo” y EL CLIENTE, empleados de éste último, sus proveedores o personas o terceros que acudan a las instalaciones de “GuardarTodo”.\n\n' },
            { style: 'columnbold', text: '15. JURISDICCIÓN. ' }, { text: 'Para la interpretación y cumplimiento de este contrato, las partes se someten a la jurisdicción de los tribunales competentes de la Ciudad de Monterrey, N. L., renunciando a cualquier otro fuero que por razón de sus domicilios presentes o futuros pudiera corresponderles.\nLeído este contrato y enteradas las partes de su alcance y contenido del anverso, reverso y carátula, lo aceptan y suscriben en la fecha mencionada en la primara hoja de este contrato.\n\n' } ,
            {text : '\n\n\n\n\n\n\n\n\n\n\n\n'} ,
            {alignment: 'center', text: '________________________                           ________________________\n'},
            {alignment: 'center', text: ' "GuardarTodo"                                           "EL CLIENTE"'}
          ], margin:[7,0,0,0]
        }]
      }, {
        image : image.signature, width: 62, alignment: 'right', margin: [0, -112, 84, 0]
      }],
      styles: {
        header: {
          alignment: 'center',
          fillColor: 'black',
          color: 'white',
          fontSize: 14,
          margin:2
        },
        right: {
          fontSize: 18,
          alignment: 'right'
        },
        title: {
          fontSize: 13,
          margin:2
        },
        info: {
          bold: true,
          fontSize: 13,
          margin:2
        },
        info2: {
          bold: true,
          fontSize: 13,
          margin:2
        },
        obs: {
          alignment: 'center',
          fontSize: 8
        },
        rightme: {
          alignment: 'right'
        },
        obsbold: { bold: true },
        columnbold: { bold: true, fontSize: 6.5 },
        columns : { fontSize: 6.2 }
      },
      defaultStyle: {
        font: 'Roboto',
        columnGap: 0,
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
  constructor($filter, data, company, image, client, rent, date) {
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
                  {text:'',border: [false, false, false, false]},{text:'',border: [false, false, false, false]},{colSpan:2, image : image.logo, width: 40, alignment: 'center', border: [false, false, false, false]},{}
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
          fontSize: 5.7
        },
        middletext: {
          fontSize: 5.7,
          bond: true,
          alignment: 'center'
        },
        middletextWhite: {
          fontSize: 6.7,
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

class makeCredentialPerStoragelokerDefinition {
  constructor($filter, data, company, image, client, rent, date) {
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
                  {colSpan:2, text:`${rent.number}`, fontSize:18 ,border: [false, false, false, false]},{},{colSpan:2, image : image.logo, width: 40, alignment: 'center', border: [false, false, false, false]},{}
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
          fontSize: 5.7
        },
        middletext: {
          fontSize: 5.7,
          bond: true,
          alignment: 'center'
        },
        middletextWhite: {
          fontSize: 6.7,
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
  constructor($filter, data, image) {
    moment.locale('es');
    let self = this;
    this.doc = {
      // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
      pageMargins: [ 30, 50, 30, 50 ],
      content: [{
        style: 'table',
        table: {
          widths: ['30%', '40%', '30%' ],
          body: [
            [ { image : image.logo, width: 100, alignment: 'center' },
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

export default Documents;
