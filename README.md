# Demo de GraphQL y GraphQL Federation

## Documentación de la POC (Prueba de Concepto)

### Descripción de la Prueba
Esta POC demuestra la implementación de una arquitectura de microservicios utilizando GraphQL Federation. El objetivo es validar la viabilidad de conectar múltiples servicios GraphQL independientes a través de un gateway central, permitiendo consultas distribuidas y una API unificada. La prueba se centra en dos servicios básicos (usuarios y productos) que simulan estar distribuidos en diferentes sistemas.

### Objetivo(s) de la Prueba
- Validar la implementación de GraphQL Federation en un entorno de microservicios
- Demostrar la capacidad de resolver referencias entre servicios distribuidos
- Verificar la eficiencia de las consultas distribuidas a través del gateway
- Evaluar la facilidad de mantenimiento y extensibilidad de la arquitectura
- Comprobar la integración de múltiples servicios GraphQL en una única API

### Pasos Implementados para Llevar a Cabo la Prueba
1. **Configuración del Entorno**
   - Creación de la estructura base del proyecto
   - Configuración de las dependencias necesarias
   - Establecimiento del entorno de desarrollo

2. **Implementación de Servicios**
   - Desarrollo del servicio de usuarios con su propio esquema GraphQL
   - Desarrollo del servicio de productos con su propio esquema GraphQL
   - Implementación de resolvers específicos para cada servicio

3. **Configuración del Gateway**
   - Implementación del gateway de GraphQL Federation
   - Configuración de la federación de servicios
   - Establecimiento de las reglas de resolución

4. **Pruebas y Validación**
   - Implementación de consultas de prueba
   - Validación de la resolución de referencias
   - Pruebas de rendimiento básicas

### Tecnologías Usadas en la Prueba
- **Lenguajes de Programación:**
  - JavaScript/Node.js

- **Frameworks y Librerías:**
  - Express.js (Framework web)
  - Apollo Server (Servidor GraphQL)
  - Apollo Gateway (Implementación de Federation)
  - Apollo Subgraph (Creación de subgrafos)
  - GraphQL (Lenguaje de consulta)

- **Herramientas de Desarrollo:**
  - npm (Gestor de paquetes)
  - GraphQL Playground (Herramienta de pruebas)

### Resultados
- **Funcionalidad:**
  - Implementación exitosa de la federación de servicios
  - Resolución correcta de referencias entre servicios
  - API unificada operativa a través del gateway

- **Rendimiento:**
  - Tiempo de respuesta aceptable para consultas distribuidas
  - Escalabilidad demostrada en la arquitectura
  - Manejo eficiente de las referencias entre servicios

- **Mantenibilidad:**
  - Código modular y bien estructurado
  - Fácil extensibilidad para nuevos servicios
  - Documentación clara y completa

### Conclusiones
- La POC demuestra la viabilidad de implementar GraphQL Federation en un entorno de microservicios
- La arquitectura propuesta permite una clara separación de responsabilidades
- El gateway central facilita la gestión de consultas distribuidas
- La solución es escalable y mantenible
- Se recomienda su implementación en proyectos que requieran:
  - Integración de múltiples servicios GraphQL
  - Consultas distribuidas eficientes
  - Arquitectura de microservicios con API unificada

---

## Componentes del Demo

El demo está compuesto por tres partes principales:

1. **Servicio de Usuarios** (`services/users`)
   - Gestiona información básica de usuarios
   - Expone una API GraphQL independiente
   - Mantiene su propio esquema y resolvers

2. **Servicio de Productos** (`services/products`)
   - Maneja el catálogo de productos
   - Expone su propia API GraphQL
   - Puede referenciar usuarios a través de Federation

3. **Gateway** (`gateway`)
   - Unifica los servicios en una única API
   - Coordina las consultas entre servicios
   - Proporciona un punto de entrada único

## Estructura del Proyecto

```
.
├── gateway/           # Gateway de GraphQL Federation
├── services/          # Servicios distribuidos
│   ├── users/        # Servicio de usuarios
│   └── products/     # Servicio de productos
└── package.json      # Dependencias del proyecto
```

## Instalación

```bash
npm install
```

## Ejecución del Demo

Para ver el demo en acción, necesitas ejecutar los tres componentes en terminales separadas:

1. Inicia el servicio de usuarios:
```bash
npm run start:users
```

2. Inicia el servicio de productos:
```bash
npm run start:products
```

3. Inicia el gateway:
```bash
npm run start:gateway
```

## Explorando el Demo

Una vez que todos los servicios estén ejecutándose, puedes acceder al playground de GraphQL en:
http://localhost:4000

### Ejemplos de Consultas Federadas

1. Consulta que combina datos de usuarios y productos:
```graphql
query {
  users {
    id
    name
    email
    products {
      id
      name
      price
    }
  }
}
```

2. Consulta que muestra productos con información de sus usuarios:
```graphql
query {
  products {
    id
    name
    price
    user {
      id
      name
      email
    }
  }
}
```

## Conceptos Demostrados

1. **Federación de Servicios**
   - Cómo los servicios independientes se unen en una API
   - La resolución de referencias entre servicios
   - La composición de esquemas GraphQL

2. **Consultas Distribuidas**
   - Cómo el gateway coordina las peticiones
   - La resolución de datos entre servicios
   - La optimización de consultas federadas

3. **Arquitectura Distribuida**
   - Servicios independientes y autónomos
   - Comunicación a través del gateway
   - Escalabilidad y mantenibilidad