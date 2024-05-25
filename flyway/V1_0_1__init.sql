-- public.categoria_productos definition

-- Drop table

-- DROP TABLE public.categoria_productos;

CREATE TABLE public.categoria_productos (
	id_categoria_producto bigserial NOT NULL,
	nombre varchar(255) NOT NULL,
	descripcion varchar(255) NOT NULL,
	CONSTRAINT categoria_productos_pkey PRIMARY KEY (id_categoria_producto)
);


-- public.clientes definition

-- Drop table

-- DROP TABLE public.clientes;

CREATE TABLE public.clientes (
	id_cliente bigserial NOT NULL,
	nombre varchar(255) NOT NULL,
	apellido varchar(255) NOT NULL,
	tipo_documento varchar(255) NOT NULL,
	telefono int4 NOT NULL,
	correo varchar(255) NOT NULL,
	activo bool DEFAULT true NOT NULL,
	CONSTRAINT clientes_pkey PRIMARY KEY (id_cliente)
);


-- public.marcas definition

-- Drop table

-- DROP TABLE public.marcas;

CREATE TABLE public.marcas (
	id_marca bigserial NOT NULL,
	nombre varchar(255) NOT NULL,
	direccion varchar(255) NULL,
	telefono int4 NULL,
	correo int4 NOT NULL,
	activo bool DEFAULT true NOT NULL,
	CONSTRAINT marcas_pkey PRIMARY KEY (id_marca)
);


-- public.usuarios definition

-- Drop table

-- DROP TABLE public.usuarios;

CREATE TABLE public.usuarios (
	id_usuario bigserial NOT NULL,
	nombre varchar(255) NOT NULL,
	correo varchar(255) NOT NULL,
	clave varchar(255) NOT NULL,
	activo bool DEFAULT true NOT NULL,
	CONSTRAINT usuarios_pkey PRIMARY KEY (id_usuario)
);


-- public.despachos definition

-- Drop table

-- DROP TABLE public.despachos;

CREATE TABLE public.despachos (
	id_despacho bigserial NOT NULL,
	fecha_despacho date NOT NULL,
	codigo_despacho varchar(255) NOT NULL,
	marca_id int8 NOT NULL,
	transportadora varchar(255) NOT NULL,
	numero_guia varchar(255) NOT NULL,
	cantidad_productos int4 NOT NULL,
	cantidad_embalaje int4 NOT NULL,
	usuario_interno_id int8 NULL,
	estado varchar(255) DEFAULT 'EN PROCESO'::character varying NOT NULL,
	CONSTRAINT despachos_pkey PRIMARY KEY (id_despacho),
	CONSTRAINT despachos_marca_id_foreign FOREIGN KEY (marca_id) REFERENCES public.marcas(id_marca) ON DELETE CASCADE,
	CONSTRAINT despachos_usuario_interno_id_foreign FOREIGN KEY (usuario_interno_id) REFERENCES public.usuarios(id_usuario) ON DELETE CASCADE
);


-- public.ingresos definition

-- Drop table

-- DROP TABLE public.ingresos;

CREATE TABLE public.ingresos (
	id_ingreso bigserial NOT NULL,
	fecha_ingreso date NOT NULL,
	codigo_ingreso varchar(255) NOT NULL,
	marca_id int8 NOT NULL,
	usuario_marca_id int8 NOT NULL,
	usuario_interno_id int8 NULL,
	estado varchar(255) DEFAULT 'INGRESADO'::character varying NOT NULL,
	CONSTRAINT ingresos_pkey PRIMARY KEY (id_ingreso),
	CONSTRAINT ingresos_marca_id_foreign FOREIGN KEY (marca_id) REFERENCES public.marcas(id_marca) ON DELETE CASCADE,
	CONSTRAINT ingresos_usuario_interno_id_foreign FOREIGN KEY (usuario_interno_id) REFERENCES public.usuarios(id_usuario) ON DELETE CASCADE,
	CONSTRAINT ingresos_usuario_marca_id_foreign FOREIGN KEY (usuario_marca_id) REFERENCES public.usuarios(id_usuario) ON DELETE CASCADE
);


-- public.pedidos definition

-- Drop table

-- DROP TABLE public.pedidos;

CREATE TABLE public.pedidos (
	id_pedido bigserial NOT NULL,
	fecha_pedido date NOT NULL,
	codigo_pedido varchar(255) NOT NULL,
	marca_id int8 NOT NULL,
	usuario_marca_id int8 NOT NULL,
	usuario_interno_id int8 NULL,
	estado varchar(255) DEFAULT 'EN PROCESO'::character varying NOT NULL,
	cantidad_total_unidades int4 NOT NULL,
	CONSTRAINT pedidos_pkey PRIMARY KEY (id_pedido),
	CONSTRAINT pedidos_marca_id_foreign FOREIGN KEY (marca_id) REFERENCES public.marcas(id_marca) ON DELETE CASCADE,
	CONSTRAINT pedidos_usuario_interno_id_foreign FOREIGN KEY (usuario_interno_id) REFERENCES public.usuarios(id_usuario) ON DELETE CASCADE,
	CONSTRAINT pedidos_usuario_marca_id_foreign FOREIGN KEY (usuario_marca_id) REFERENCES public.usuarios(id_usuario) ON DELETE CASCADE
);


-- public.productos definition

-- Drop table

-- DROP TABLE public.productos;

CREATE TABLE public.productos (
	id_producto bigserial NOT NULL,
	referencia varchar(255) NOT NULL,
	descripcion varchar(255) NOT NULL,
	marca_id int8 NOT NULL,
	categoria_producto_id int8 NOT NULL,
	CONSTRAINT productos_pkey PRIMARY KEY (id_producto),
	CONSTRAINT productos_categoria_producto_id_foreign FOREIGN KEY (categoria_producto_id) REFERENCES public.categoria_productos(id_categoria_producto) ON DELETE CASCADE,
	CONSTRAINT productos_marca_id_foreign FOREIGN KEY (marca_id) REFERENCES public.marcas(id_marca) ON DELETE CASCADE
);


-- public.ubicaciones definition

-- Drop table

-- DROP TABLE public.ubicaciones;

CREATE TABLE public.ubicaciones (
	id_ubicacion bigserial NOT NULL,
	estan varchar(255) NOT NULL,
	columna varchar(255) NOT NULL,
	nivel varchar(255) NOT NULL,
	categoria_producto_id int8 NOT NULL,
	CONSTRAINT ubicaciones_pkey PRIMARY KEY (id_ubicacion),
	CONSTRAINT ubicaciones_categoria_producto_id_foreign FOREIGN KEY (categoria_producto_id) REFERENCES public.categoria_productos(id_categoria_producto) ON DELETE CASCADE
);


-- public.detalles_despachos definition

-- Drop table

-- DROP TABLE public.detalles_despachos;

CREATE TABLE public.detalles_despachos (
	id_detalle_despacho bigserial NOT NULL,
	producto_id int8 NOT NULL,
	total_cantidad_unidades int4 NOT NULL,
	CONSTRAINT detalles_despachos_pkey PRIMARY KEY (id_detalle_despacho),
	CONSTRAINT detalles_despachos_producto_id_foreign FOREIGN KEY (producto_id) REFERENCES public.productos(id_producto) ON DELETE CASCADE
);


-- public.detalles_ingresos definition

-- Drop table

-- DROP TABLE public.detalles_ingresos;

CREATE TABLE public.detalles_ingresos (
	id_detalle_ingreso bigserial NOT NULL,
	fecha_ingreso date NOT NULL,
	ingreso_id int8 NULL,
	producto_id int8 NULL,
	cantidad int4 DEFAULT 0 NOT NULL,
	CONSTRAINT detalles_ingresos_pkey PRIMARY KEY (id_detalle_ingreso),
	CONSTRAINT detalles_ingresos_ingreso_id_foreign FOREIGN KEY (ingreso_id) REFERENCES public.ingresos(id_ingreso) ON DELETE CASCADE,
	CONSTRAINT detalles_ingresos_producto_id_foreign FOREIGN KEY (producto_id) REFERENCES public.productos(id_producto) ON DELETE CASCADE
);


-- public.detalles_pedidos definition

-- Drop table

-- DROP TABLE public.detalles_pedidos;

CREATE TABLE public.detalles_pedidos (
	id_detalle_pedido bigserial NOT NULL,
	pedido_id int8 NULL,
	producto_id int8 NULL,
	cantidad int4 NOT NULL,
	cliente_id int8 NULL,
	ciudad_destino varchar(255) NOT NULL,
	direccion_destino varchar(255) NOT NULL,
	telefono_contacto_destino varchar(255) NOT NULL,
	CONSTRAINT detalles_pedidos_pkey PRIMARY KEY (id_detalle_pedido),
	CONSTRAINT detalles_pedidos_cliente_id_foreign FOREIGN KEY (cliente_id) REFERENCES public.clientes(id_cliente) ON DELETE CASCADE,
	CONSTRAINT detalles_pedidos_pedido_id_foreign FOREIGN KEY (pedido_id) REFERENCES public.pedidos(id_pedido) ON DELETE CASCADE,
	CONSTRAINT detalles_pedidos_producto_id_foreign FOREIGN KEY (producto_id) REFERENCES public.productos(id_producto) ON DELETE CASCADE
);


-- public.ubicacion_productos definition

-- Drop table

-- DROP TABLE public.ubicacion_productos;

CREATE TABLE public.ubicacion_productos (
	id_ubicacion_producto bigserial NOT NULL,
	ubicacion_id int8 NOT NULL,
	producto_id int8 NOT NULL,
	cantidad int4 DEFAULT 0 NOT NULL,
	CONSTRAINT ubicacion_productos_pkey PRIMARY KEY (id_ubicacion_producto),
	CONSTRAINT ubicacion_productos_producto_id_foreign FOREIGN KEY (producto_id) REFERENCES public.productos(id_producto) ON DELETE CASCADE,
	CONSTRAINT ubicacion_productos_ubicacion_id_foreign FOREIGN KEY (ubicacion_id) REFERENCES public.ubicaciones(id_ubicacion) ON DELETE CASCADE
);
