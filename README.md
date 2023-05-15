# example-websocket-servesent
Los proyectos estan preparado para funcionar a iniciarse tanto el Front como el Backend.
## example-websocket-servesent-backend
### Descripción
Ejemplo de envios de datos a través de WebSocket y Serve Sent Events simulando un Chat y datos para un Gráfico cada 2 segundos.

### Instalación

```bash
$ npm install
```

### Iniciar la aplicación
```bash
# development
$ npm run start:dev
```
### WebSocket chat
**Canales**
`room_chat`: Canal para unirse
`event_message`: Suscripción para los mensajes


**Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `idUser` | requerido | string  | La id del usuario                      
|     `data` | requerido | string  | Mensaje del usuario

### Serve Side Events Graphic
**Parameters**
                       
|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `name` | requerido | Dat (DD/MM/YYYY HH:mm:ss)  | fecha y hora del dato                      
|     `uv` | requerido | number  | Numero random del valor que se dibujará en el front
|     `pv` | requerido | number  | Valor que se dibujará en el front
|     `amt` | requerido | number  | NValor que se dibujará en el front


## example-websocket-servesent-front
### Descripción
Ejemplo de recepción de los datos a través de WebSocket y Serve Sent Events para el Chat y el Gráfico

### Instalación

```bash
$ npm install
```

### Iniciar la aplicación
```bash
# development
$ npm run dev
```
### WebSocket chat
1) Se iniciará la conexión para unirse al canal event_join
2) En el componente ChatRoom, se establece la logica de envios de datos y la recepción en pantallas simultaneas
### Serve Side Events Graphic
1) Se iniciará la conexión para escuchar el back en el canal de sse
2) Dibujará en la gráfica los datos recibidos del backend

