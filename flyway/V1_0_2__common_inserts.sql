alter table categoria_productos add column fecha_creacion timestamp default now();
alter table categoria_productos add column fecha_actualizacion timestamp default now();
insert into categoria_productos (nombre, descripcion) values( 'BELLEZA', 'Productos de belleza');
insert into categoria_productos (nombre, descripcion) values( 'ELECTRODOMESTICOS', 'Productos para el hogar');

alter table marcas add column usuario_id numeric null ;
alter table marcas alter column correo type varchar(255);
alter table marcas add column fecha_creacion timestamp default now();
alter table marcas add column fecha_actualizacion timestamp default now();
insert into marcas (nombre, direccion, telefono, correo, activo)VALUES('Falabella', 'direccion_124575', 0011224455, 'correo2@gmail.com', true);

alter table productos add column fecha_creacion timestamp default now();
alter table productos add column fecha_actualizacion timestamp default now();
insert into productos (referencia, descripcion, marca_id, categoria_producto_id) values('referencia123', 'Labial rojo', 1, 1);
insert into productos (referencia, descripcion, marca_id, categoria_producto_id) values('referencia456', 'sombras', 1, 1);
insert into productos (referencia, descripcion, marca_id, categoria_producto_id) values('ref98', 'Microondas', 1, 2);
insert into productos (referencia, descripcion, marca_id, categoria_producto_id) values('ref99', 'Lavadora', 1, 2);



