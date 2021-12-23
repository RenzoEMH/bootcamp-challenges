# Assesment I

## OPCIÓN 2:

<img src='image/cuadriculaLimpia.png' width='500'/>
<hr>
<img src='image/cuadricula.png' width='500'/>
<hr>

# PREGUNTAS:

**_1. ¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?_**

- **_Sprint Planning_**: Reunion que se realiza al comienzo de cada Sprint donde participa todo el equipo. En esta se definen los objetivos del Sprint, los entregables y tareas que se deben realizar para lograrlos.
- **_Daily Scrums_**: Reuniones diarias de 15 minutos donde participa el development team, en estas se mencionan los avances diarios.
- **_Sprint Review_**: Reunion que ocurre al final del Sprint, donde el prodcut owner y el development team presentan a los stakeholders el incremento terminado para su inspeccion y adaptacion correspondientes.
- **_Retrospectiva_**: Reunión donde se reflexiona sobre el ultimo Sprint. Lo comun es analizar que ha ido bien en el Sprint, que ha fallado y que se puede mejorar.

**_2. ¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar._**

Los Wireframes son una representacion visual a escala de grises de la estructura y funcionalidad de una sola pagina web o pantalla de aplicacion movil. Estos se usan en las primeras etapas del proceso de desarrollo con el fin de establecer la estructura básica de una página antes de agregar el contenido y el diseño visual.

Una herramienta que se puede utilizar es **FIGMA**.

**_3. Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará._**

**_var_**: Es una palabra reservada que se utiliza para declarar una variable, tienes las siguientes caracteristicas:

- No tiene alcance de bloque (block scope)
- Su valor se puede modificar
- Permite el hoisting, es decir se puede usar la variable antes de que esta sea declarada
- Se podria utilizar en un caso donde se quiera usar una variable antes de que esta sea declarada. Sin embargo, el uso de **var** no es recomendado.

**_let_**: Es una palabra reservada que se utiliza para declarar una variable, tienes las siguientes caracteristicas:

- Tiene alcance de bloque (block scope)
- Su valor se puede modificar
- No permite el hoisting
- Un caso de uso sería cuando se sabe que el valor de la varible va a ser modificado en un futuro

**_const_**: Es una palabra reservada que se utiliza para declarar una constante, tienes las siguientes caracteristicas:

- Tiene alcance de bloque (block scope)
- Su valor no se puede modificar
- No permite el hoisting
- Se uso cuando se sabe que el valor de la variable no va a ser modificado, por eso se lo declara como constante.

**_4. ¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?_**

Comandos para crear una rama llamada rama-1 y luego moverte hacia la rama creada:

```
> git branch rama-1
> git checkout rama-1
```

Comando para crear una rama y movernos hacia esta:

```
> git checkout -b rama-1
```

**_5. Explicar la diferencia entre git merge y git rebase._**

La principal diferencia es que el git rebase unifica 2 ramas perdiendo el historial de los commits mientras que el git merge unifica las ramas pero mantiene el historial, ademas el git merge crea un nuevo commit que representa la union de las ramas. Por ultimo, el git rebase monta los commits en la otra rama sin importar la cronologia.

**_6. ¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?._**

- El comando **git pull** se emplea para extraer y descargar contenido desde un repositorio remoto y actualizar al instante el repositorio local para reflejar ese contenido

- Un **pull request** es una petición que el propietario de un fork de un repositorio hace al propietario del repositorio original para que este último incorpore los commits que están en el fork.

**_7. ¿Qué es el Virtual DOM?._**

El Virtual DOM es una representación del DOM (Document Object Model) guardada en memoria, que actúa de intermediario entre los estados de la aplicación y los estados del DOM (vistos por el usuario). Cuando ocurre un cambio en la aplicación web, el virtual DOM interpreta dichos cambios y calcula la manera más eficiente de actualizar el DOM para que renderice la menor cantidad de cambios posibles.

**_8. Dado el siguiente codePen, el cual solo tiene un HTML, por medio de css llegar a esta respuesta. Imagen. (Para mostrar los servicios debes usar CSS Flexbox o CSS Grid)._**

Para la resolución de esta pregunte hice uso de Flexbox:

```css
.c-section {
  width: 83%;
  margin: 0 auto;
}
.c-section__title {
  background-color: #343232;
  color: white;
  padding: 30px;
  border-top: 20px solid grey;
  text-align: center;
  width: 80%;
  margin-left: 97px;
}
.c-services {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0 20px;
}
.c-services__item {
  margin-bottom: 20px;
  width: 40%;
  background-color: #ededed;
  padding: 18px;
}
.c-services__item:hover {
  box-shadow: 3px 3px 3px grey;
}

h3 {
  margin-left: 60px;
  padding: 10px 0px;
}
```
