--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3
-- Dumped by pg_dump version 15.3

-- Started on 2024-05-28 13:48:26

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 17636)
-- Name: categoria_productos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categoria_productos (
    id_categoria_producto bigint NOT NULL,
    nombre character varying(255) NOT NULL,
    descripcion character varying(255) NOT NULL,
    fecha_creacion timestamp without time zone DEFAULT now(),
    fecha_actualizacion timestamp without time zone DEFAULT now()
);


ALTER TABLE public.categoria_productos OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 17635)
-- Name: categoria_productos_id_categoria_producto_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categoria_productos_id_categoria_producto_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categoria_productos_id_categoria_producto_seq OWNER TO postgres;

--
-- TOC entry 3478 (class 0 OID 0)
-- Dependencies: 214
-- Name: categoria_productos_id_categoria_producto_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categoria_productos_id_categoria_producto_seq OWNED BY public.categoria_productos.id_categoria_producto;


--
-- TOC entry 217 (class 1259 OID 17645)
-- Name: clientes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.clientes (
    id_cliente bigint NOT NULL,
    nombre character varying(255) NOT NULL,
    apellido character varying(255) NOT NULL,
    tipo_documento character varying(255) NOT NULL,
    telefono integer NOT NULL,
    correo character varying(255) NOT NULL,
    activo boolean DEFAULT true NOT NULL
);


ALTER TABLE public.clientes OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 17644)
-- Name: clientes_id_cliente_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.clientes_id_cliente_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.clientes_id_cliente_seq OWNER TO postgres;

--
-- TOC entry 3479 (class 0 OID 0)
-- Dependencies: 216
-- Name: clientes_id_cliente_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.clientes_id_cliente_seq OWNED BY public.clientes.id_cliente;


--
-- TOC entry 223 (class 1259 OID 17675)
-- Name: despachos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.despachos (
    id_despacho bigint NOT NULL,
    fecha_despacho date NOT NULL,
    codigo_despacho character varying(255) NOT NULL,
    marca_id bigint NOT NULL,
    transportadora character varying(255) NOT NULL,
    numero_guia character varying(255) NOT NULL,
    cantidad_productos integer NOT NULL,
    cantidad_embalaje integer NOT NULL,
    usuario_interno_id bigint,
    estado character varying(255) DEFAULT 'EN PROCESO'::character varying NOT NULL
);


ALTER TABLE public.despachos OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 17674)
-- Name: despachos_id_despacho_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.despachos_id_despacho_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.despachos_id_despacho_seq OWNER TO postgres;

--
-- TOC entry 3480 (class 0 OID 0)
-- Dependencies: 222
-- Name: despachos_id_despacho_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.despachos_id_despacho_seq OWNED BY public.despachos.id_despacho;


--
-- TOC entry 233 (class 1259 OID 17778)
-- Name: detalles_despachos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.detalles_despachos (
    id_detalle_despacho bigint NOT NULL,
    producto_id bigint NOT NULL,
    total_cantidad_unidades integer NOT NULL
);


ALTER TABLE public.detalles_despachos OWNER TO postgres;

--
-- TOC entry 232 (class 1259 OID 17777)
-- Name: detalles_despachos_id_detalle_despacho_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.detalles_despachos_id_detalle_despacho_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.detalles_despachos_id_detalle_despacho_seq OWNER TO postgres;

--
-- TOC entry 3481 (class 0 OID 0)
-- Dependencies: 232
-- Name: detalles_despachos_id_detalle_despacho_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.detalles_despachos_id_detalle_despacho_seq OWNED BY public.detalles_despachos.id_detalle_despacho;


--
-- TOC entry 235 (class 1259 OID 17790)
-- Name: detalles_ingresos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.detalles_ingresos (
    id_detalle_ingreso bigint NOT NULL,
    ingreso_id bigint,
    producto_id bigint,
    cantidad integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.detalles_ingresos OWNER TO postgres;

--
-- TOC entry 234 (class 1259 OID 17789)
-- Name: detalles_ingresos_id_detalle_ingreso_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.detalles_ingresos_id_detalle_ingreso_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.detalles_ingresos_id_detalle_ingreso_seq OWNER TO postgres;

--
-- TOC entry 3482 (class 0 OID 0)
-- Dependencies: 234
-- Name: detalles_ingresos_id_detalle_ingreso_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.detalles_ingresos_id_detalle_ingreso_seq OWNED BY public.detalles_ingresos.id_detalle_ingreso;


--
-- TOC entry 237 (class 1259 OID 17808)
-- Name: detalles_pedidos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.detalles_pedidos (
    id_detalle_pedido bigint NOT NULL,
    pedido_id bigint,
    producto_id bigint,
    cantidad integer NOT NULL,
    cliente_id bigint,
    ciudad_destino character varying(255) NOT NULL,
    direccion_destino character varying(255) NOT NULL,
    telefono_contacto_destino character varying(255) NOT NULL
);


ALTER TABLE public.detalles_pedidos OWNER TO postgres;

--
-- TOC entry 236 (class 1259 OID 17807)
-- Name: detalles_pedidos_id_detalle_pedido_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.detalles_pedidos_id_detalle_pedido_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.detalles_pedidos_id_detalle_pedido_seq OWNER TO postgres;

--
-- TOC entry 3483 (class 0 OID 0)
-- Dependencies: 236
-- Name: detalles_pedidos_id_detalle_pedido_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.detalles_pedidos_id_detalle_pedido_seq OWNED BY public.detalles_pedidos.id_detalle_pedido;


--
-- TOC entry 225 (class 1259 OID 17695)
-- Name: ingresos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ingresos (
    id_ingreso bigint NOT NULL,
    fecha_ingreso date NOT NULL,
    codigo_ingreso character varying(255) NOT NULL,
    marca_id bigint NOT NULL,
    usuario_marca_id bigint,
    usuario_interno_id bigint,
    estado character varying(255) DEFAULT 'INGRESADO'::character varying NOT NULL
);


ALTER TABLE public.ingresos OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 17694)
-- Name: ingresos_id_ingreso_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ingresos_id_ingreso_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.ingresos_id_ingreso_seq OWNER TO postgres;

--
-- TOC entry 3484 (class 0 OID 0)
-- Dependencies: 224
-- Name: ingresos_id_ingreso_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ingresos_id_ingreso_seq OWNED BY public.ingresos.id_ingreso;


--
-- TOC entry 219 (class 1259 OID 17655)
-- Name: marcas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.marcas (
    id_marca bigint NOT NULL,
    nombre character varying(255) NOT NULL,
    direccion character varying(255),
    telefono integer,
    correo character varying(255) NOT NULL,
    activo boolean DEFAULT true NOT NULL,
    usuario_id numeric,
    fecha_creacion timestamp without time zone DEFAULT now(),
    fecha_actualizacion timestamp without time zone DEFAULT now()
);


ALTER TABLE public.marcas OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 17654)
-- Name: marcas_id_marca_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.marcas_id_marca_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.marcas_id_marca_seq OWNER TO postgres;

--
-- TOC entry 3485 (class 0 OID 0)
-- Dependencies: 218
-- Name: marcas_id_marca_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.marcas_id_marca_seq OWNED BY public.marcas.id_marca;


--
-- TOC entry 227 (class 1259 OID 17720)
-- Name: pedidos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pedidos (
    id_pedido bigint NOT NULL,
    fecha_pedido date NOT NULL,
    codigo_pedido character varying(255) NOT NULL,
    marca_id bigint NOT NULL,
    usuario_marca_id bigint,
    usuario_interno_id bigint,
    estado character varying(255) DEFAULT 'EN PROCESO'::character varying NOT NULL,
    cantidad_total_unidades integer NOT NULL
);


ALTER TABLE public.pedidos OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 17719)
-- Name: pedidos_id_pedido_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pedidos_id_pedido_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pedidos_id_pedido_seq OWNER TO postgres;

--
-- TOC entry 3486 (class 0 OID 0)
-- Dependencies: 226
-- Name: pedidos_id_pedido_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pedidos_id_pedido_seq OWNED BY public.pedidos.id_pedido;


--
-- TOC entry 229 (class 1259 OID 17745)
-- Name: productos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.productos (
    id_producto bigint NOT NULL,
    referencia character varying(255) NOT NULL,
    descripcion character varying(255) NOT NULL,
    marca_id bigint NOT NULL,
    categoria_producto_id bigint NOT NULL,
    fecha_creacion timestamp without time zone DEFAULT now(),
    fecha_actualizacion timestamp without time zone DEFAULT now()
);


ALTER TABLE public.productos OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 17744)
-- Name: productos_id_producto_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.productos_id_producto_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.productos_id_producto_seq OWNER TO postgres;

--
-- TOC entry 3487 (class 0 OID 0)
-- Dependencies: 228
-- Name: productos_id_producto_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.productos_id_producto_seq OWNED BY public.productos.id_producto;


--
-- TOC entry 239 (class 1259 OID 17832)
-- Name: ubicacion_productos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ubicacion_productos (
    id_ubicacion_producto bigint NOT NULL,
    ubicacion_id bigint NOT NULL,
    producto_id bigint NOT NULL,
    cantidad integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.ubicacion_productos OWNER TO postgres;

--
-- TOC entry 238 (class 1259 OID 17831)
-- Name: ubicacion_productos_id_ubicacion_producto_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ubicacion_productos_id_ubicacion_producto_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.ubicacion_productos_id_ubicacion_producto_seq OWNER TO postgres;

--
-- TOC entry 3488 (class 0 OID 0)
-- Dependencies: 238
-- Name: ubicacion_productos_id_ubicacion_producto_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ubicacion_productos_id_ubicacion_producto_seq OWNED BY public.ubicacion_productos.id_ubicacion_producto;


--
-- TOC entry 231 (class 1259 OID 17764)
-- Name: ubicaciones; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ubicaciones (
    id_ubicacion bigint NOT NULL,
    estan character varying(255) NOT NULL,
    columna character varying(255) NOT NULL,
    nivel character varying(255) NOT NULL,
    categoria_producto_id bigint NOT NULL
);


ALTER TABLE public.ubicaciones OWNER TO postgres;

--
-- TOC entry 230 (class 1259 OID 17763)
-- Name: ubicaciones_id_ubicacion_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ubicaciones_id_ubicacion_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.ubicaciones_id_ubicacion_seq OWNER TO postgres;

--
-- TOC entry 3489 (class 0 OID 0)
-- Dependencies: 230
-- Name: ubicaciones_id_ubicacion_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ubicaciones_id_ubicacion_seq OWNED BY public.ubicaciones.id_ubicacion;


--
-- TOC entry 221 (class 1259 OID 17665)
-- Name: usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarios (
    id_usuario bigint NOT NULL,
    nombre character varying(255) NOT NULL,
    correo character varying(255) NOT NULL,
    clave character varying(255) NOT NULL,
    activo boolean DEFAULT true NOT NULL,
    rol bigint
);


ALTER TABLE public.usuarios OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 17664)
-- Name: usuarios_id_usuario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuarios_id_usuario_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.usuarios_id_usuario_seq OWNER TO postgres;

--
-- TOC entry 3490 (class 0 OID 0)
-- Dependencies: 220
-- Name: usuarios_id_usuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuarios_id_usuario_seq OWNED BY public.usuarios.id_usuario;


--
-- TOC entry 3233 (class 2604 OID 17875)
-- Name: categoria_productos id_categoria_producto; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categoria_productos ALTER COLUMN id_categoria_producto SET DEFAULT nextval('public.categoria_productos_id_categoria_producto_seq'::regclass);


--
-- TOC entry 3236 (class 2604 OID 17876)
-- Name: clientes id_cliente; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clientes ALTER COLUMN id_cliente SET DEFAULT nextval('public.clientes_id_cliente_seq'::regclass);


--
-- TOC entry 3244 (class 2604 OID 17877)
-- Name: despachos id_despacho; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.despachos ALTER COLUMN id_despacho SET DEFAULT nextval('public.despachos_id_despacho_seq'::regclass);


--
-- TOC entry 3254 (class 2604 OID 17878)
-- Name: detalles_despachos id_detalle_despacho; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalles_despachos ALTER COLUMN id_detalle_despacho SET DEFAULT nextval('public.detalles_despachos_id_detalle_despacho_seq'::regclass);


--
-- TOC entry 3255 (class 2604 OID 17879)
-- Name: detalles_ingresos id_detalle_ingreso; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalles_ingresos ALTER COLUMN id_detalle_ingreso SET DEFAULT nextval('public.detalles_ingresos_id_detalle_ingreso_seq'::regclass);


--
-- TOC entry 3257 (class 2604 OID 17880)
-- Name: detalles_pedidos id_detalle_pedido; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalles_pedidos ALTER COLUMN id_detalle_pedido SET DEFAULT nextval('public.detalles_pedidos_id_detalle_pedido_seq'::regclass);


--
-- TOC entry 3246 (class 2604 OID 17881)
-- Name: ingresos id_ingreso; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ingresos ALTER COLUMN id_ingreso SET DEFAULT nextval('public.ingresos_id_ingreso_seq'::regclass);


--
-- TOC entry 3238 (class 2604 OID 17882)
-- Name: marcas id_marca; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.marcas ALTER COLUMN id_marca SET DEFAULT nextval('public.marcas_id_marca_seq'::regclass);


--
-- TOC entry 3248 (class 2604 OID 17883)
-- Name: pedidos id_pedido; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pedidos ALTER COLUMN id_pedido SET DEFAULT nextval('public.pedidos_id_pedido_seq'::regclass);


--
-- TOC entry 3250 (class 2604 OID 17884)
-- Name: productos id_producto; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productos ALTER COLUMN id_producto SET DEFAULT nextval('public.productos_id_producto_seq'::regclass);


--
-- TOC entry 3258 (class 2604 OID 17885)
-- Name: ubicacion_productos id_ubicacion_producto; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ubicacion_productos ALTER COLUMN id_ubicacion_producto SET DEFAULT nextval('public.ubicacion_productos_id_ubicacion_producto_seq'::regclass);


--
-- TOC entry 3253 (class 2604 OID 17886)
-- Name: ubicaciones id_ubicacion; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ubicaciones ALTER COLUMN id_ubicacion SET DEFAULT nextval('public.ubicaciones_id_ubicacion_seq'::regclass);


--
-- TOC entry 3242 (class 2604 OID 17887)
-- Name: usuarios id_usuario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios ALTER COLUMN id_usuario SET DEFAULT nextval('public.usuarios_id_usuario_seq'::regclass);


--
-- TOC entry 3448 (class 0 OID 17636)
-- Dependencies: 215
-- Data for Name: categoria_productos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categoria_productos (id_categoria_producto, nombre, descripcion, fecha_creacion, fecha_actualizacion) FROM stdin;
1	BELLEZA	Productos de belleza	2024-05-27 22:55:26.681733	2024-05-27 22:55:26.681733
2	ELECTRODOMESTICOS	Productos para el hogar	2024-05-27 22:55:26.681733	2024-05-27 22:55:26.681733
\.


--
-- TOC entry 3450 (class 0 OID 17645)
-- Dependencies: 217
-- Data for Name: clientes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.clientes (id_cliente, nombre, apellido, tipo_documento, telefono, correo, activo) FROM stdin;
\.


--
-- TOC entry 3456 (class 0 OID 17675)
-- Dependencies: 223
-- Data for Name: despachos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.despachos (id_despacho, fecha_despacho, codigo_despacho, marca_id, transportadora, numero_guia, cantidad_productos, cantidad_embalaje, usuario_interno_id, estado) FROM stdin;
\.


--
-- TOC entry 3466 (class 0 OID 17778)
-- Dependencies: 233
-- Data for Name: detalles_despachos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.detalles_despachos (id_detalle_despacho, producto_id, total_cantidad_unidades) FROM stdin;
\.


--
-- TOC entry 3468 (class 0 OID 17790)
-- Dependencies: 235
-- Data for Name: detalles_ingresos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.detalles_ingresos (id_detalle_ingreso, ingreso_id, producto_id, cantidad) FROM stdin;
16	22	5	1234
\.


--
-- TOC entry 3470 (class 0 OID 17808)
-- Dependencies: 237
-- Data for Name: detalles_pedidos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.detalles_pedidos (id_detalle_pedido, pedido_id, producto_id, cantidad, cliente_id, ciudad_destino, direccion_destino, telefono_contacto_destino) FROM stdin;
\.


--
-- TOC entry 3458 (class 0 OID 17695)
-- Dependencies: 225
-- Data for Name: ingresos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ingresos (id_ingreso, fecha_ingreso, codigo_ingreso, marca_id, usuario_marca_id, usuario_interno_id, estado) FROM stdin;
21	2024-05-28	1234	4	\N	\N	INGRESADO
22	2024-05-28	1234	4	\N	\N	INGRESADO
\.


--
-- TOC entry 3452 (class 0 OID 17655)
-- Dependencies: 219
-- Data for Name: marcas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.marcas (id_marca, nombre, direccion, telefono, correo, activo, usuario_id, fecha_creacion, fecha_actualizacion) FROM stdin;
4	Postobon	calle 40	12345577	postobon@gmail.com	t	4	2024-05-27 23:18:09.55222	2024-05-27 23:18:09.55222
5	Pepsi	calle 40	1234566	pepsi@gmail.com	t	6	2024-05-28 00:07:02.841181	2024-05-28 00:07:02.841181
\.


--
-- TOC entry 3460 (class 0 OID 17720)
-- Dependencies: 227
-- Data for Name: pedidos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pedidos (id_pedido, fecha_pedido, codigo_pedido, marca_id, usuario_marca_id, usuario_interno_id, estado, cantidad_total_unidades) FROM stdin;
\.


--
-- TOC entry 3462 (class 0 OID 17745)
-- Dependencies: 229
-- Data for Name: productos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.productos (id_producto, referencia, descripcion, marca_id, categoria_producto_id, fecha_creacion, fecha_actualizacion) FROM stdin;
5	ejemplo	ejemplo	4	2	2024-05-28 10:05:26.381725	2024-05-28 10:05:26.381725
\.


--
-- TOC entry 3472 (class 0 OID 17832)
-- Dependencies: 239
-- Data for Name: ubicacion_productos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ubicacion_productos (id_ubicacion_producto, ubicacion_id, producto_id, cantidad) FROM stdin;
\.


--
-- TOC entry 3464 (class 0 OID 17764)
-- Dependencies: 231
-- Data for Name: ubicaciones; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ubicaciones (id_ubicacion, estan, columna, nivel, categoria_producto_id) FROM stdin;
1	EST01	COL01	NVL01	1
2	EST02	COL02	NVL02	1
3	EST03	COL03	NVL03	1
4	EST04	COL04	NVL04	1
5	EST05	COL05	NVL05	1
\.


--
-- TOC entry 3454 (class 0 OID 17665)
-- Dependencies: 221
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuarios (id_usuario, nombre, correo, clave, activo, rol) FROM stdin;
4	Postobon	postobon@gmail.com	$2b$12$qkWpRMW.Xl9gvO3HdajJ0eOV4YWpui2o6Rcinu6Y3xPozBzNtnjD.	t	2
5	example	example@gmail.com	$2b$12$qkWpRMW.Xl9gvO3HdajJ0eOV4YWpui2o6Rcinu6Y3xPozBzNtnjD.	t	1
6	Pepsi	pepsi@gmail.com	$2b$12$NuQBihSPSFaW.Jlw5yzidO3.g8bHMLTPVL75JD//glPRX43zdL6JG	t	2
7	cristian	prueba@gmail.com	$2b$12$qkWpRMW.Xl9gvO3HdajJ0eOV4YWpui2o6Rcinu6Y3xPozBzNtnjD.	t	0
\.


--
-- TOC entry 3491 (class 0 OID 0)
-- Dependencies: 214
-- Name: categoria_productos_id_categoria_producto_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categoria_productos_id_categoria_producto_seq', 2, true);


--
-- TOC entry 3492 (class 0 OID 0)
-- Dependencies: 216
-- Name: clientes_id_cliente_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.clientes_id_cliente_seq', 1, false);


--
-- TOC entry 3493 (class 0 OID 0)
-- Dependencies: 222
-- Name: despachos_id_despacho_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.despachos_id_despacho_seq', 1, false);


--
-- TOC entry 3494 (class 0 OID 0)
-- Dependencies: 232
-- Name: detalles_despachos_id_detalle_despacho_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.detalles_despachos_id_detalle_despacho_seq', 1, false);


--
-- TOC entry 3495 (class 0 OID 0)
-- Dependencies: 234
-- Name: detalles_ingresos_id_detalle_ingreso_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.detalles_ingresos_id_detalle_ingreso_seq', 16, true);


--
-- TOC entry 3496 (class 0 OID 0)
-- Dependencies: 236
-- Name: detalles_pedidos_id_detalle_pedido_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.detalles_pedidos_id_detalle_pedido_seq', 1, false);


--
-- TOC entry 3497 (class 0 OID 0)
-- Dependencies: 224
-- Name: ingresos_id_ingreso_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ingresos_id_ingreso_seq', 22, true);


--
-- TOC entry 3498 (class 0 OID 0)
-- Dependencies: 218
-- Name: marcas_id_marca_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.marcas_id_marca_seq', 5, true);


--
-- TOC entry 3499 (class 0 OID 0)
-- Dependencies: 226
-- Name: pedidos_id_pedido_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pedidos_id_pedido_seq', 1, false);


--
-- TOC entry 3500 (class 0 OID 0)
-- Dependencies: 228
-- Name: productos_id_producto_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.productos_id_producto_seq', 5, true);


--
-- TOC entry 3501 (class 0 OID 0)
-- Dependencies: 238
-- Name: ubicacion_productos_id_ubicacion_producto_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ubicacion_productos_id_ubicacion_producto_seq', 5, true);


--
-- TOC entry 3502 (class 0 OID 0)
-- Dependencies: 230
-- Name: ubicaciones_id_ubicacion_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ubicaciones_id_ubicacion_seq', 5, true);


--
-- TOC entry 3503 (class 0 OID 0)
-- Dependencies: 220
-- Name: usuarios_id_usuario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuarios_id_usuario_seq', 7, true);


--
-- TOC entry 3261 (class 2606 OID 17643)
-- Name: categoria_productos categoria_productos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categoria_productos
    ADD CONSTRAINT categoria_productos_pkey PRIMARY KEY (id_categoria_producto);


--
-- TOC entry 3263 (class 2606 OID 17653)
-- Name: clientes clientes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clientes
    ADD CONSTRAINT clientes_pkey PRIMARY KEY (id_cliente);


--
-- TOC entry 3269 (class 2606 OID 17683)
-- Name: despachos despachos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.despachos
    ADD CONSTRAINT despachos_pkey PRIMARY KEY (id_despacho);


--
-- TOC entry 3279 (class 2606 OID 17783)
-- Name: detalles_despachos detalles_despachos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalles_despachos
    ADD CONSTRAINT detalles_despachos_pkey PRIMARY KEY (id_detalle_despacho);


--
-- TOC entry 3281 (class 2606 OID 17796)
-- Name: detalles_ingresos detalles_ingresos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalles_ingresos
    ADD CONSTRAINT detalles_ingresos_pkey PRIMARY KEY (id_detalle_ingreso);


--
-- TOC entry 3283 (class 2606 OID 17815)
-- Name: detalles_pedidos detalles_pedidos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalles_pedidos
    ADD CONSTRAINT detalles_pedidos_pkey PRIMARY KEY (id_detalle_pedido);


--
-- TOC entry 3271 (class 2606 OID 17703)
-- Name: ingresos ingresos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ingresos
    ADD CONSTRAINT ingresos_pkey PRIMARY KEY (id_ingreso);


--
-- TOC entry 3265 (class 2606 OID 17663)
-- Name: marcas marcas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.marcas
    ADD CONSTRAINT marcas_pkey PRIMARY KEY (id_marca);


--
-- TOC entry 3273 (class 2606 OID 17728)
-- Name: pedidos pedidos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pedidos
    ADD CONSTRAINT pedidos_pkey PRIMARY KEY (id_pedido);


--
-- TOC entry 3275 (class 2606 OID 17752)
-- Name: productos productos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_pkey PRIMARY KEY (id_producto);


--
-- TOC entry 3285 (class 2606 OID 17838)
-- Name: ubicacion_productos ubicacion_productos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ubicacion_productos
    ADD CONSTRAINT ubicacion_productos_pkey PRIMARY KEY (id_ubicacion_producto);


--
-- TOC entry 3277 (class 2606 OID 17771)
-- Name: ubicaciones ubicaciones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ubicaciones
    ADD CONSTRAINT ubicaciones_pkey PRIMARY KEY (id_ubicacion);


--
-- TOC entry 3267 (class 2606 OID 17673)
-- Name: usuarios usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id_usuario);


--
-- TOC entry 3286 (class 2606 OID 17684)
-- Name: despachos despachos_marca_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.despachos
    ADD CONSTRAINT despachos_marca_id_foreign FOREIGN KEY (marca_id) REFERENCES public.marcas(id_marca) ON DELETE CASCADE;


--
-- TOC entry 3287 (class 2606 OID 17689)
-- Name: despachos despachos_usuario_interno_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.despachos
    ADD CONSTRAINT despachos_usuario_interno_id_foreign FOREIGN KEY (usuario_interno_id) REFERENCES public.usuarios(id_usuario) ON DELETE CASCADE;


--
-- TOC entry 3297 (class 2606 OID 17784)
-- Name: detalles_despachos detalles_despachos_producto_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalles_despachos
    ADD CONSTRAINT detalles_despachos_producto_id_foreign FOREIGN KEY (producto_id) REFERENCES public.productos(id_producto) ON DELETE CASCADE;


--
-- TOC entry 3298 (class 2606 OID 17797)
-- Name: detalles_ingresos detalles_ingresos_ingreso_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalles_ingresos
    ADD CONSTRAINT detalles_ingresos_ingreso_id_foreign FOREIGN KEY (ingreso_id) REFERENCES public.ingresos(id_ingreso) ON DELETE CASCADE;


--
-- TOC entry 3299 (class 2606 OID 17802)
-- Name: detalles_ingresos detalles_ingresos_producto_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalles_ingresos
    ADD CONSTRAINT detalles_ingresos_producto_id_foreign FOREIGN KEY (producto_id) REFERENCES public.productos(id_producto) ON DELETE CASCADE;


--
-- TOC entry 3300 (class 2606 OID 17816)
-- Name: detalles_pedidos detalles_pedidos_cliente_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalles_pedidos
    ADD CONSTRAINT detalles_pedidos_cliente_id_foreign FOREIGN KEY (cliente_id) REFERENCES public.clientes(id_cliente) ON DELETE CASCADE;


--
-- TOC entry 3301 (class 2606 OID 17821)
-- Name: detalles_pedidos detalles_pedidos_pedido_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalles_pedidos
    ADD CONSTRAINT detalles_pedidos_pedido_id_foreign FOREIGN KEY (pedido_id) REFERENCES public.pedidos(id_pedido) ON DELETE CASCADE;


--
-- TOC entry 3302 (class 2606 OID 17826)
-- Name: detalles_pedidos detalles_pedidos_producto_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalles_pedidos
    ADD CONSTRAINT detalles_pedidos_producto_id_foreign FOREIGN KEY (producto_id) REFERENCES public.productos(id_producto) ON DELETE CASCADE;


--
-- TOC entry 3288 (class 2606 OID 17704)
-- Name: ingresos ingresos_marca_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ingresos
    ADD CONSTRAINT ingresos_marca_id_foreign FOREIGN KEY (marca_id) REFERENCES public.marcas(id_marca) ON DELETE CASCADE;


--
-- TOC entry 3289 (class 2606 OID 17709)
-- Name: ingresos ingresos_usuario_interno_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ingresos
    ADD CONSTRAINT ingresos_usuario_interno_id_foreign FOREIGN KEY (usuario_interno_id) REFERENCES public.usuarios(id_usuario) ON DELETE CASCADE;


--
-- TOC entry 3290 (class 2606 OID 17714)
-- Name: ingresos ingresos_usuario_marca_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ingresos
    ADD CONSTRAINT ingresos_usuario_marca_id_foreign FOREIGN KEY (usuario_marca_id) REFERENCES public.usuarios(id_usuario) ON DELETE CASCADE;


--
-- TOC entry 3291 (class 2606 OID 17729)
-- Name: pedidos pedidos_marca_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pedidos
    ADD CONSTRAINT pedidos_marca_id_foreign FOREIGN KEY (marca_id) REFERENCES public.marcas(id_marca) ON DELETE CASCADE;


--
-- TOC entry 3292 (class 2606 OID 17734)
-- Name: pedidos pedidos_usuario_interno_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pedidos
    ADD CONSTRAINT pedidos_usuario_interno_id_foreign FOREIGN KEY (usuario_interno_id) REFERENCES public.usuarios(id_usuario) ON DELETE CASCADE;


--
-- TOC entry 3293 (class 2606 OID 17739)
-- Name: pedidos pedidos_usuario_marca_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pedidos
    ADD CONSTRAINT pedidos_usuario_marca_id_foreign FOREIGN KEY (usuario_marca_id) REFERENCES public.usuarios(id_usuario) ON DELETE CASCADE;


--
-- TOC entry 3294 (class 2606 OID 17753)
-- Name: productos productos_categoria_producto_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_categoria_producto_id_foreign FOREIGN KEY (categoria_producto_id) REFERENCES public.categoria_productos(id_categoria_producto) ON DELETE CASCADE;


--
-- TOC entry 3295 (class 2606 OID 17758)
-- Name: productos productos_marca_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_marca_id_foreign FOREIGN KEY (marca_id) REFERENCES public.marcas(id_marca) ON DELETE CASCADE;


--
-- TOC entry 3303 (class 2606 OID 17839)
-- Name: ubicacion_productos ubicacion_productos_producto_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ubicacion_productos
    ADD CONSTRAINT ubicacion_productos_producto_id_foreign FOREIGN KEY (producto_id) REFERENCES public.productos(id_producto) ON DELETE CASCADE;


--
-- TOC entry 3304 (class 2606 OID 17844)
-- Name: ubicacion_productos ubicacion_productos_ubicacion_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ubicacion_productos
    ADD CONSTRAINT ubicacion_productos_ubicacion_id_foreign FOREIGN KEY (ubicacion_id) REFERENCES public.ubicaciones(id_ubicacion) ON DELETE CASCADE;


--
-- TOC entry 3296 (class 2606 OID 17772)
-- Name: ubicaciones ubicaciones_categoria_producto_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ubicaciones
    ADD CONSTRAINT ubicaciones_categoria_producto_id_foreign FOREIGN KEY (categoria_producto_id) REFERENCES public.categoria_productos(id_categoria_producto) ON DELETE CASCADE;


-- Completed on 2024-05-28 13:48:26

--
-- PostgreSQL database dump complete
--

