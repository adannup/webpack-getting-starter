# webpack-getting-starter

* ```__dirname``` [[node.js]](https://nodejs.org/docs/latest/api/globals.html#globals_dirname): Es un objeto global, su salida es el nombre del directorio del módulo actual.

* ```path.resolve``` [[node.js]](https://nodejs.org/docs/latest/api/path.html#path_path_resolve_paths): Método que resuelve una secuencia de rutas o segmentos de ruta en una ruta absoluta.

## webpack 
https://webpack.js.org/

## Conceptos
Antes de comenzar es necesario conocer los 4 principales conceptos de webpack [entry, output, loader, plugin]: https://webpack.js.org/concepts/

* [[entry]](https://webpack.js.org/concepts/entry-points)
* [[output]](https://webpack.js.org/concepts/output)
* [[loader]](https://webpack.js.org/concepts/loaders)
* [[plugin]](https://webpack.js.org/concepts/plugins)

### entry
Entry puede tener una sola entrada, 

```javascript
module.exports = {
	entry: './src/js/app.js',
  ...
};
```
o varias entradas.

```javascript
module.exports = {
	entry: {
		main: './src/js/app.js',
		vendor: './src/js/vendor.js'
	},
  ...
};
```

### output

```javascript
module.exports = {
  ...
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist'
	},
  ...
};
```
* path: Es la ruta absoluta hacia que directorio se guardara el archivo de salida.
* filename: Nombre del archivo de salida.
* publicPath: Es la ruta absoluta que webpack buscara cuando se ejecute en modo servidor, ya que los archivos se almacenaran dinamicamente en cache, esta opcion es recomenda cuando solo se trabaja en produccion.

En caso de que se tengan varios archivos de entrada, se deben de generar dinamicamente los nombre de los archivos con los siguientes parametro en ```[filename]```:

```javascript
module.exports = {
  ...
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		publicPath: '/dist'
	},
  ...
};
```

## Primeros pasos
Despues de conocer los conceptos, los primeros pasos se encuentran dentro de la documentacion de webpack https://webpack.js.org/guides/get-started/

## Configuracion webpack.config.js
En la documentacion oficial encontraras la configuracion de webpack https://webpack.js.org/configuration/
