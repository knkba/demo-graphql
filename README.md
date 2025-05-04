# Demo de GraphQL y GraphQL Federation

Este proyecto es una demostración práctica y educativa de GraphQL Federation, diseñada para mostrar cómo se pueden conectar múltiples servicios GraphQL independientes en una única API unificada. El demo utiliza un escenario simple pero efectivo con dos servicios: usuarios y productos, que simulan estar distribuidos en diferentes sistemas.

## Objetivo del Demo

El propósito principal de este demo es:
- Mostrar los conceptos básicos de GraphQL Federation
- Demostrar cómo los servicios distribuidos pueden compartir datos
- Ilustrar la resolución de referencias entre servicios
- Proporcionar ejemplos prácticos de consultas federadas

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

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución
- **Express**: Framework web
- **GraphQL**: Lenguaje de consulta
- **Apollo Server**: Implementación del servidor GraphQL
- **Apollo Gateway**: Implementación de Federation
- **Apollo Subgraph**: Para crear los subgrafos federados

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

## Aprendizajes Clave

- Cómo estructurar servicios GraphQL independientes
- La implementación de referencias entre servicios
- El uso del gateway para unificar APIs
- La composición de consultas que abarcan múltiples servicios

## Notas para el Aprendizaje

- Este demo está simplificado para fines educativos
- En un entorno de producción, se necesitarían consideraciones adicionales
- Los servicios están diseñados para ser fáciles de entender y modificar
- Se puede extender agregando más servicios o funcionalidades 