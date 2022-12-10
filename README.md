# Documentación de la API BCC

## Puntos de acceso de la API

- USUARIOS

- METODOS DE PAGO

- TARJETAS

- BURO DE CREDITO

### Usuarios

### **URL**

- /user
  
  - **Metodo POST**
    
    - /login
      
      ```json
      
      {
          "user":"Persona",
          "password":"contraseña123"
      }
      
      ```
    
    - /signup
      
      ```json
      {
      	"nombre": "CUATRO",
      	"primerApellido": "PRUEBA",
      	"segundoApellido": "PROSPECTOR",
      	"rfc": "PRPU800101HM2",
      	"direccion": "Jaime Balmes",
      	"ciudad": "Cd de Mexico",
      	"codigoPostal": "11510",
      	"estado": "CMX",
      	"region": "Miguel Hidalgo",
      	"colonia": "Los morales",
      	"user": "Prueba",
      	"password": "123",
      	"status": 1,
      	"email": "prueba@gmail.com",
      	"fechaNacimiento": "1980-01-01T06:00:00.000Z",
      	"TipoCuenta": "PF",
      	"noExterior": "8",
      	"pais": "MX",
      	"nacionalidad": "MX"
      }
      ```
      
      
  
  - **Metodo GET**
    
    - /:rfc (obtiene el usuario con el rfc recibido)
  
  - **Metodo PATCH**
    
    - /:id (actualiza el usuario del id  establecido)
      
      ```json5
      
      // si solo se quiere cambiar el estado del usuario
      
      //no es necesario mandar todos los datos 
      
      {
          "nombre": "CUATRO",
      	"primerApellido": "PRUEBA",
      	"segundoApellido": "PROSPECTOR",
      	"rfc": "PRPU800101HM2",
      	"direccion": "Jaime Balmes",
      	"ciudad": "Cd de Mexico",
      	"codigoPostal": "11510",
      	"estado": "CMX",
      	"region": "Miguel Hidalgo",
      	"colonia": "Los morales",
      	"user": "Prueba",
      	"password": "123",
      	"status": 1,
      	"email": "prueba@gmail.com",
      	"fechaNacimiento": "1980-01-01T06:00:00.000Z",
      	"TipoCuenta": "PF",
      	"noExterior": "8",
      	"pais": "MX",
      	"nacionalidad": "MX"
      }
      
      
      
      //la forma correcta es:
      
      {
          "status":0
      }
      ```
      
      
  
  - **Metodo DELETE**
    
    - /:id (Elimina el usuario del id establecido)

- /metodos
  
  - **Metodo GET**
    
    - / (lee los metodos de pago almacenados)
  
  - **Metodo POST**
    
    - / (crea un nuevo Metodo de pago)
      
      ```json5
      {"nombrePago": "PayPal"}
      ```
      
      
  
  - **Metodo PATCH**
    
    - /:id (Actualiza el metodo de pago)
      
      ```json5
      {
          "nombrePago": "PayPal",
          "status":0
      } 
      
      // o
      
      {
          "nombrePago": "PayPal"
      }
      
      // o
      
      {
          "status": 0
      }
      ```
      
      
  
  - **Metodo DELETE**
    
    - /:id (Elimina el metodo de pago)

- /tarjetas
  
  - **Metodo GET**
    
    - / (obtiene todas las tarjetas)
  
  - **Metodo POST**
    
    - / (crea una nueva tarjeta)
      
      ```json5
          {
      		"noTarjeta": "0123456789",
      		"noCuenta": "1234567890",
      		"claveInterbancaria": "1234567890",
      		"nombresPersona": "cualquiera",
      		"ApellidosPersonas": "como sea"
      	}
      ```
      
      
  
  - **Metodo PATCH**
    
    - /:id (Actualiza la tarjeta)
      
      ```json5
      {
      	"noTarjeta": "0123456789",
      	"noCuenta": "1234567890",
      	"claveInterbancaria": "1234567890"
      }
      ```
      
      
  
  - **Metodo DELETE**
    
    - /:id (Elimina la tarjeta)

- /buro-credito
  
  - **Metodo GET**
    
    - /:id (Lee los datos de consulta en base al id del usuario)
  
  - **Metodo POST**
    
    - /:id (Agrega los datos de consulta con el id del usuario)
      
      ```json5
      {
          "NumeroMOP7": "00",
          "NumeroMOP6": "00",
          "NumeroMOP5": "00",
          "NumeroMOP4": "00",
          "NumeroMOP3": "00",
          "NumeroMOP2": "00",
          "NumeroMOP1": "07",
          "NumeroMOP0": "00",
          "NumeroMOPUR": "00",
          "NumeroCuentas": "0007",
          "CuentasPagosFijosHipotecas": "0000",
          "CuentasRevolventesAbiertas": "0007",
          "CuentasCerradas": "0000",
          "CuentasNegativasActuales": "0000",
          "CuentasClavesHistoriaNegativa": "0000",
          "CuentasDisputa": "00",
          "NumeroSolicitudesUltimos6Meses": "00",
          "NuevaDireccionReportadaUltimos60Dias": "N",
          "MensajesAlerta": "NNNNN",
          "ExistenciaDeclaracionesConsumidor": "N",
          "TipoMoneda": "MX",
          "TotalCreditosMaximosRevolventes": "25156",
          "TotalLimitesCreditoRevolventes": "52800",
          "TotalSaldosActualesRevolventes": "10753+",
          "TotalSaldosVencidosRevolventes": "0",
          "TotalPagosRevolventes": "385",
          "PctLimiteCreditoUtilizadoRevolventes": "20",
          "TotalCreditosMaximosPagosFijos": "0",
          "TotalSaldosActualesPagosFijos": "0+",
          "TotalSaldosVencidosPagosFijos": "0",
          "TotalPagosPagosFijos": "0",
          "NumeroMOP96": "00",
          "NumeroMOP97": "00",
          "NumeroMOP99": "00",
          "FechaAperturaCuentaMasAntigua": "21022020",
          "FechaAperturaCuentaMasReciente": "21022020",
          "TotalSolicitudesReporte": "06",
          "FechaSolicitudReporteMasReciente": "11082021",
          "NumeroTotalCuentasDespachoCobranza": "00",
          "FechaAperturaCuentaMasRecienteDespachoCobranza": "00000000",
          "NumeroTotalSolicitudesDespachosCobranza": "00",
          "CodigoScore": "007",
          "ValorScore": "0724"
      }
      ```








