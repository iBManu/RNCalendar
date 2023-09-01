# RNCalendar
![vid](https://github.com/iBManu/RNCalendar/assets/70716864/1d9f5696-7252-45e4-9563-aaa588e4e737)
---
## English | EN
**RNCalendar** is a simple and open source calendar component made in *React Native*, it shows the current month and has two buttons that allows the user to go back and forward in the calendary.
### Usage
First you have to download the files and put them together inside a folder in your project.
Then you have to import only the **RNCalendar** component.
```javascript
import RNCalendar from './yourDirectory/RNCalendar'
```
Add the component to your code, for example in the App.js.
```javascript
export default function App() {
  return (
    <View style={styles.container}>
      <RNCalendar />
      <StatusBar style="auto" />
    </View>
  );
}
```
Now the calendar should be working right.

### Properties
You can customize the **RNCalendar** component whith the following properties:
* `lang`: Allows you to change the language of the month a days, the accepted values are `en`,`es`,`fr`,`pr` and `de` for english, spanish, french, portuguese and german respectively. The default value is `en`.
  
* `oneCharDays`: Allows you to swap bettween long or short day names, for example MON and M for Monday. `true` or `false`. The default value is `false`.
  
* `outOfMonthDaysTransparency`: Controlls wether the days out of the month are shown or not. `true` or `false`. The default value is `false` (The days are shown).
  
* `customDayLabels`: Allows you to establish custom names for days, it has to be accompanied with the next property. `true` or `false`. The default value is `false`.
  
* `customDayLabelsNames: { customLongDayNames: [], customShortDayNames: [] }` : Here you add the custom names for the days of the week, they only will show if the `customDayLabels` property is set to `true`. `oneCharDays` affect wether of the custom names are shown. No custom names are set by default.

### Use example
```javascript
export default function App() {
  return (
    <View style={styles.container}>
      <RNCalendar options={{
        lang: "es",
        outOfMonthDaysTransparency: true,
        customDayLabels: true,
        oneCharDays: false,
        customDayLabelsNames: {
          customLongDayNames: ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"],
          customShortDayNames: ["l","m","x","j","v","s","d"],
        }
      }}/>
      <StatusBar style="auto" />
    </View>
  );
}
```
---

## Español | ES
**RNCalendar** es un componente simple y de código abierto de un calendario hecho en *React Native*, muestra el mes actual y tiene dos botones que permiten al usuario retroceder y avanzar en el calendario.
### Uso
Primero debes descargar los archivos y colocarlos juntos dentro de una carpeta en tu proyecto.
Después debes importar únicamente el componente **RNCalendar**.
```javascript
import RNCalendar from './tuDirectorio/RNCalendar'
```
Añade el componente a tu código, por ejemplo en el App.js.
```javascript
export default function App() {
  return (
    <View style={styles.container}>
      <RNCalendar />
      <StatusBar style="auto" />
    </View>
  );
}
```
Ahora el calendario debería estar funcionando correctamente.

### Propiedades
Puedes personalizar el componente **RNCalendar** con las siguientes propiedades:
* `lang`: Permite cambiar el idioma de los dias y meses, los posibles valores son `en`,`es`,`fr`,`pr` y `de` para inglés, español, francés, portugués y alemán respectivamente. El valor por defecto es `en`.
  
* `oneCharDays`: Permite cambiar entre nombres largos y cortos, Por ejemplo LUN y L para Lunes. `true` o `false`. El valor por defecto es `false`.
  
* `outOfMonthDaysTransparency`: Controla si los días fuera del mes se muestran o no. `true` o `false`. El valor por defecto es `false` (Los dias se muestran).
  
* `customDayLabels`: Te permite establecer nombres personalizados para los días, debe ser acompañado por la siguente propiedad. `true` o `false`. El valor por defecto es `false`.
  
* `customDayLabelsNames: { customLongDayNames: [], customShortDayNames: [] }`: Aquí añades los nombres personalizados para los días de la semana, solo se mostrarán si la propiedad `customDayLabels` se establece en `true`. `oneCharDays` afecta a cuales de los nombres personalizados se muestran. Ningún nombre personalizado está establecido por defecto.

### Ejemplo de uso
```javascript
export default function App() {
  return (
    <View style={styles.container}>
      <RNCalendar options={{
        lang: "es",
        outOfMonthDaysTransparency: true,
        customDayLabels: true,
        oneCharDays: false,
        customDayLabelsNames: {
          customLongDayNames: ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"],
          customShortDayNames: ["l","m","x","j","v","s","d"],
        }
      }}/>
      <StatusBar style="auto" />
    </View>
  );
}
```
---
