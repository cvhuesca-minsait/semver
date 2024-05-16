# Versionado Semantico

[TOC]

## ¿Que es el versionado semántico?

El versionado semántico es un conjunto de reglas y requisitos que definen cómo se asignan los números de versión a los lanzamientos de software. 

Es un sistema de numeración de versiones que se basa en tres números separados por puntos. Estos números representan la versión mayor, la versión menor y la versión de parche, respectivamente.

## ¿Por qué es importante el versionado semántico?

El versionado semántico es importante porque ayuda a los desarrolladores a comprender rápidamente qué cambios se han realizado en una nueva versión de un software.

## El versionado semántico sigue las siguientes reglas:

1. **Versión mayor (MAJOR):** Se incrementa cuando se realizan cambios incompatibles en la API.
2. **Versión menor (MINOR):** Se incrementa cuando se agregan funcionalidades de manera compatible con versiones anteriores.
3. **Versión de parche (PATCH):** Se incrementa cuando se realizan correcciones de errores compatibles con versiones anteriores.

## Etiquetas de versionado 

- **Alpha:** Es una versión preliminar del software que aún no se ha probado completamente.
- **Beta:** Es una versión del software que se ha probado parcialmente y que se está probando en un entorno de producción.
- **Release Candidate:** Es una versión del software que se considera estable y que se está probando en un entorno de producción.
- **Estable:** Es una versión del software que se considera estable y que se ha probado completamente.

## Versiones estables

Las versiones estables de un software se identifican con un número de versión que sigue el formato `MAJOR.MINOR.PATCH`. Por ejemplo, la versión `1.0.0` indica que es la primera versión estable del software.

## Versiones inestables

Las versiones inestables de un software se identifican con un número de versión que sigue el formato `MAJOR.MINOR.PATCH`. Por ejemplo, la versión `1.0.0-alpha` indica que es una versión preliminar del software.

## Etiquetas de meta-información 

- **Build:** Es una etiqueta que se utiliza para identificar una versión específica de un software.
- **Pre-release:** Es una etiqueta que se utiliza para identificar una versión preliminar de un software.
- **Metadata:** Es una etiqueta que se utiliza para identificar información adicional sobre una versión de un software.
- **Checksum:** Es una etiqueta que se utiliza para identificar la suma de verificación de una versión de un software.
- **Signature:** Es una etiqueta que se utiliza para identificar la firma digital de una versión de un software.
- **Timestamp:** Es una etiqueta que se utiliza para identificar la fecha y hora en que se lanzó una versión de un software.
- **Hash:** Es una etiqueta que se utiliza para identificar el hash de una versión de un software.

## Matenimiento de un control de cambios

El versionado semántico debe ir de la mano de un buen mantenimentod de un control de cambios. Habitualmente esto se hace con un sistema de control de versiones como Git y un documento llamado [CHANGELOG](./CHANGELOG.md).


## Conclusión

El versionado semántico es una práctica recomendada para asignar números de versión a los lanzamientos de software. Ayuda a los desarrolladores a comprender rápidamente qué cambios se han realizado en una nueva versión de un software y a mantener la compatibilidad con versiones anteriores. Además, el versionado semántico facilita la gestión de dependencias y la resolución de conflictos entre versiones de software.

Y mantiene esta estructura:

```
<mayor>.<menor>.<parche>-<etiqueta pre>+<etiqueta meta>
```

