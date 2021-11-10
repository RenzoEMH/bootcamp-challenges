# CSS Diner
![image](https://user-images.githubusercontent.com/56410444/141043552-862030fe-e45c-4977-944b-9c3947295c03.png)

1) plate

2) bento

3) #fancy

4) plate apple

5) #fancy pickle

6) .small

7) orange.small

8) bento orange.small

9) plate, bento

10) *

11) plate *

12) plate + apple

13) bento ~ pickle

14) plate > apple

15) orange:first-child

16) apple:only-child, plate pickle:only-child

17) apple:last-child, pickle:last-child

18) :nth-child(3)

19) bento:nth-last-child(3)

20) apple:first-of-type

21) plate:nth-of-type(even)

22) plate:nth-of-type(2n+3)

23) plate apple:only-of-type

24) orange:last-of-type, apple:last-of-type

25) bento:empty

26) apple:not(.small)

27) [for]

28) plate[for]

29) bento[for="Vitaly"]

30) *[for^="Sa"]

31) *[for$="ato"]

32) *[for*="obb"]

------------------------------------------------------------------------------------------
Lista de selectores CSS:
- Universal selector
- Type selector
- Class selector
- ID selector
- Attribute selector

¿Que significa la especificidad en CSS? 

La especificidad es la manera mediante la cual los navegadores deciden qué valores de una 
propiedad CSS son más relevantes para un elemento y, por lo tanto, serán aplicados. 
La especificidad está basada en las reglas de coincidencia que están compuestas por diferentes 
tipos de selectores CSS.

¿Como se calcula?

Se le da un valor de 1 punto a un elemento simple como una etiqueta a, p o div; a un selector 
de clase se le da el valor de 10 puntos y a un selector de id se le da un valor de 100 puntos, 
siendo únicamente superado por los atributos de estilos a los que se les da un valor de 1000 puntos.
