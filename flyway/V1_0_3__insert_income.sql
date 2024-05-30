insert into ingresos( fecha_ingreso, codigo_ingreso, marca_id, estado)
values( '2024-05-25', 'ingreso123', 1, 'INGRESADO'::character varying);

insert into detalles_ingresos
(ingreso_id, producto_id, cantidad)
VALUES(1, 1, 10);

insert into detalles_ingresos
(ingreso_id, producto_id, cantidad)
VALUES(1, 2, 25);


insert into public.ingresos( fecha_ingreso, codigo_ingreso, marca_id, estado)
values( '2024-05-25', 'ingreso456', 1, 'INGRESADO'::character varying);

insert into detalles_ingresos
(ingreso_id, producto_id, cantidad)
VALUES(1, 2, 38);

insert into detalles_ingresos
(ingreso_id, producto_id, cantidad)
VALUES(1, 3, 63);
