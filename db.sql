PGDMP     !    )                |            DarkDB    15.3    15.3 r    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    17387    DarkDB    DATABASE     ~   CREATE DATABASE "DarkDB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE "DarkDB";
                postgres    false            �            1259    17636    categoria_productos    TABLE     5  CREATE TABLE public.categoria_productos (
    id_categoria_producto bigint NOT NULL,
    nombre character varying(255) NOT NULL,
    descripcion character varying(255) NOT NULL,
    fecha_creacion timestamp without time zone DEFAULT now(),
    fecha_actualizacion timestamp without time zone DEFAULT now()
);
 '   DROP TABLE public.categoria_productos;
       public         heap    postgres    false            �            1259    17635 -   categoria_productos_id_categoria_producto_seq    SEQUENCE     �   CREATE SEQUENCE public.categoria_productos_id_categoria_producto_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 D   DROP SEQUENCE public.categoria_productos_id_categoria_producto_seq;
       public          postgres    false    215            �           0    0 -   categoria_productos_id_categoria_producto_seq    SEQUENCE OWNED BY        ALTER SEQUENCE public.categoria_productos_id_categoria_producto_seq OWNED BY public.categoria_productos.id_categoria_producto;
          public          postgres    false    214            �            1259    17645    clientes    TABLE     D  CREATE TABLE public.clientes (
    id_cliente bigint NOT NULL,
    nombre character varying(255) NOT NULL,
    apellido character varying(255) NOT NULL,
    tipo_documento character varying(255) NOT NULL,
    telefono integer NOT NULL,
    correo character varying(255) NOT NULL,
    activo boolean DEFAULT true NOT NULL
);
    DROP TABLE public.clientes;
       public         heap    postgres    false            �            1259    17644    clientes_id_cliente_seq    SEQUENCE     �   CREATE SEQUENCE public.clientes_id_cliente_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.clientes_id_cliente_seq;
       public          postgres    false    217            �           0    0    clientes_id_cliente_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.clientes_id_cliente_seq OWNED BY public.clientes.id_cliente;
          public          postgres    false    216            �            1259    17675 	   despachos    TABLE     �  CREATE TABLE public.despachos (
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
    DROP TABLE public.despachos;
       public         heap    postgres    false            �            1259    17674    despachos_id_despacho_seq    SEQUENCE     �   CREATE SEQUENCE public.despachos_id_despacho_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.despachos_id_despacho_seq;
       public          postgres    false    223            �           0    0    despachos_id_despacho_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.despachos_id_despacho_seq OWNED BY public.despachos.id_despacho;
          public          postgres    false    222            �            1259    17778    detalles_despachos    TABLE     �   CREATE TABLE public.detalles_despachos (
    id_detalle_despacho bigint NOT NULL,
    producto_id bigint NOT NULL,
    total_cantidad_unidades integer NOT NULL
);
 &   DROP TABLE public.detalles_despachos;
       public         heap    postgres    false            �            1259    17777 *   detalles_despachos_id_detalle_despacho_seq    SEQUENCE     �   CREATE SEQUENCE public.detalles_despachos_id_detalle_despacho_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 A   DROP SEQUENCE public.detalles_despachos_id_detalle_despacho_seq;
       public          postgres    false    233            �           0    0 *   detalles_despachos_id_detalle_despacho_seq    SEQUENCE OWNED BY     y   ALTER SEQUENCE public.detalles_despachos_id_detalle_despacho_seq OWNED BY public.detalles_despachos.id_detalle_despacho;
          public          postgres    false    232            �            1259    17790    detalles_ingresos    TABLE     �   CREATE TABLE public.detalles_ingresos (
    id_detalle_ingreso bigint NOT NULL,
    ingreso_id bigint,
    producto_id bigint,
    cantidad integer DEFAULT 0 NOT NULL
);
 %   DROP TABLE public.detalles_ingresos;
       public         heap    postgres    false            �            1259    17789 (   detalles_ingresos_id_detalle_ingreso_seq    SEQUENCE     �   CREATE SEQUENCE public.detalles_ingresos_id_detalle_ingreso_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ?   DROP SEQUENCE public.detalles_ingresos_id_detalle_ingreso_seq;
       public          postgres    false    235            �           0    0 (   detalles_ingresos_id_detalle_ingreso_seq    SEQUENCE OWNED BY     u   ALTER SEQUENCE public.detalles_ingresos_id_detalle_ingreso_seq OWNED BY public.detalles_ingresos.id_detalle_ingreso;
          public          postgres    false    234            �            1259    17808    detalles_pedidos    TABLE     ^  CREATE TABLE public.detalles_pedidos (
    id_detalle_pedido bigint NOT NULL,
    pedido_id bigint,
    producto_id bigint,
    cantidad integer NOT NULL,
    cliente_id bigint,
    ciudad_destino character varying(255) NOT NULL,
    direccion_destino character varying(255) NOT NULL,
    telefono_contacto_destino character varying(255) NOT NULL
);
 $   DROP TABLE public.detalles_pedidos;
       public         heap    postgres    false            �            1259    17807 &   detalles_pedidos_id_detalle_pedido_seq    SEQUENCE     �   CREATE SEQUENCE public.detalles_pedidos_id_detalle_pedido_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 =   DROP SEQUENCE public.detalles_pedidos_id_detalle_pedido_seq;
       public          postgres    false    237            �           0    0 &   detalles_pedidos_id_detalle_pedido_seq    SEQUENCE OWNED BY     q   ALTER SEQUENCE public.detalles_pedidos_id_detalle_pedido_seq OWNED BY public.detalles_pedidos.id_detalle_pedido;
          public          postgres    false    236            �            1259    17695    ingresos    TABLE     C  CREATE TABLE public.ingresos (
    id_ingreso bigint NOT NULL,
    fecha_ingreso date NOT NULL,
    codigo_ingreso character varying(255) NOT NULL,
    marca_id bigint NOT NULL,
    usuario_marca_id bigint,
    usuario_interno_id bigint,
    estado character varying(255) DEFAULT 'INGRESADO'::character varying NOT NULL
);
    DROP TABLE public.ingresos;
       public         heap    postgres    false            �            1259    17694    ingresos_id_ingreso_seq    SEQUENCE     �   CREATE SEQUENCE public.ingresos_id_ingreso_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.ingresos_id_ingreso_seq;
       public          postgres    false    225            �           0    0    ingresos_id_ingreso_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.ingresos_id_ingreso_seq OWNED BY public.ingresos.id_ingreso;
          public          postgres    false    224            �            1259    17655    marcas    TABLE     �  CREATE TABLE public.marcas (
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
    DROP TABLE public.marcas;
       public         heap    postgres    false            �            1259    17654    marcas_id_marca_seq    SEQUENCE     |   CREATE SEQUENCE public.marcas_id_marca_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.marcas_id_marca_seq;
       public          postgres    false    219            �           0    0    marcas_id_marca_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.marcas_id_marca_seq OWNED BY public.marcas.id_marca;
          public          postgres    false    218            �            1259    17720    pedidos    TABLE     n  CREATE TABLE public.pedidos (
    id_pedido bigint NOT NULL,
    fecha_pedido date NOT NULL,
    codigo_pedido character varying(255) NOT NULL,
    marca_id bigint NOT NULL,
    usuario_marca_id bigint,
    usuario_interno_id bigint,
    estado character varying(255) DEFAULT 'EN PROCESO'::character varying NOT NULL,
    cantidad_total_unidades integer NOT NULL
);
    DROP TABLE public.pedidos;
       public         heap    postgres    false            �            1259    17719    pedidos_id_pedido_seq    SEQUENCE     ~   CREATE SEQUENCE public.pedidos_id_pedido_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.pedidos_id_pedido_seq;
       public          postgres    false    227            �           0    0    pedidos_id_pedido_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.pedidos_id_pedido_seq OWNED BY public.pedidos.id_pedido;
          public          postgres    false    226            �            1259    17745 	   productos    TABLE     n  CREATE TABLE public.productos (
    id_producto bigint NOT NULL,
    referencia character varying(255) NOT NULL,
    descripcion character varying(255) NOT NULL,
    marca_id bigint NOT NULL,
    categoria_producto_id bigint NOT NULL,
    fecha_creacion timestamp without time zone DEFAULT now(),
    fecha_actualizacion timestamp without time zone DEFAULT now()
);
    DROP TABLE public.productos;
       public         heap    postgres    false            �            1259    17744    productos_id_producto_seq    SEQUENCE     �   CREATE SEQUENCE public.productos_id_producto_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.productos_id_producto_seq;
       public          postgres    false    229            �           0    0    productos_id_producto_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.productos_id_producto_seq OWNED BY public.productos.id_producto;
          public          postgres    false    228            �            1259    17832    ubicacion_productos    TABLE     �   CREATE TABLE public.ubicacion_productos (
    id_ubicacion_producto bigint NOT NULL,
    ubicacion_id bigint NOT NULL,
    producto_id bigint NOT NULL,
    cantidad integer DEFAULT 0 NOT NULL
);
 '   DROP TABLE public.ubicacion_productos;
       public         heap    postgres    false            �            1259    17831 -   ubicacion_productos_id_ubicacion_producto_seq    SEQUENCE     �   CREATE SEQUENCE public.ubicacion_productos_id_ubicacion_producto_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 D   DROP SEQUENCE public.ubicacion_productos_id_ubicacion_producto_seq;
       public          postgres    false    239            �           0    0 -   ubicacion_productos_id_ubicacion_producto_seq    SEQUENCE OWNED BY        ALTER SEQUENCE public.ubicacion_productos_id_ubicacion_producto_seq OWNED BY public.ubicacion_productos.id_ubicacion_producto;
          public          postgres    false    238            �            1259    17764    ubicaciones    TABLE     �   CREATE TABLE public.ubicaciones (
    id_ubicacion bigint NOT NULL,
    estan character varying(255) NOT NULL,
    columna character varying(255) NOT NULL,
    nivel character varying(255) NOT NULL,
    categoria_producto_id bigint NOT NULL
);
    DROP TABLE public.ubicaciones;
       public         heap    postgres    false            �            1259    17763    ubicaciones_id_ubicacion_seq    SEQUENCE     �   CREATE SEQUENCE public.ubicaciones_id_ubicacion_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public.ubicaciones_id_ubicacion_seq;
       public          postgres    false    231            �           0    0    ubicaciones_id_ubicacion_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.ubicaciones_id_ubicacion_seq OWNED BY public.ubicaciones.id_ubicacion;
          public          postgres    false    230            �            1259    17665    usuarios    TABLE     �   CREATE TABLE public.usuarios (
    id_usuario bigint NOT NULL,
    nombre character varying(255) NOT NULL,
    correo character varying(255) NOT NULL,
    clave character varying(255) NOT NULL,
    activo boolean DEFAULT true NOT NULL,
    rol bigint
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            �            1259    17664    usuarios_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_usuario_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.usuarios_id_usuario_seq;
       public          postgres    false    221            �           0    0    usuarios_id_usuario_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.usuarios_id_usuario_seq OWNED BY public.usuarios.id_usuario;
          public          postgres    false    220            �           2604    17639 )   categoria_productos id_categoria_producto    DEFAULT     �   ALTER TABLE ONLY public.categoria_productos ALTER COLUMN id_categoria_producto SET DEFAULT nextval('public.categoria_productos_id_categoria_producto_seq'::regclass);
 X   ALTER TABLE public.categoria_productos ALTER COLUMN id_categoria_producto DROP DEFAULT;
       public          postgres    false    215    214    215            �           2604    17648    clientes id_cliente    DEFAULT     z   ALTER TABLE ONLY public.clientes ALTER COLUMN id_cliente SET DEFAULT nextval('public.clientes_id_cliente_seq'::regclass);
 B   ALTER TABLE public.clientes ALTER COLUMN id_cliente DROP DEFAULT;
       public          postgres    false    217    216    217            �           2604    17678    despachos id_despacho    DEFAULT     ~   ALTER TABLE ONLY public.despachos ALTER COLUMN id_despacho SET DEFAULT nextval('public.despachos_id_despacho_seq'::regclass);
 D   ALTER TABLE public.despachos ALTER COLUMN id_despacho DROP DEFAULT;
       public          postgres    false    223    222    223            �           2604    17781 &   detalles_despachos id_detalle_despacho    DEFAULT     �   ALTER TABLE ONLY public.detalles_despachos ALTER COLUMN id_detalle_despacho SET DEFAULT nextval('public.detalles_despachos_id_detalle_despacho_seq'::regclass);
 U   ALTER TABLE public.detalles_despachos ALTER COLUMN id_detalle_despacho DROP DEFAULT;
       public          postgres    false    233    232    233            �           2604    17793 $   detalles_ingresos id_detalle_ingreso    DEFAULT     �   ALTER TABLE ONLY public.detalles_ingresos ALTER COLUMN id_detalle_ingreso SET DEFAULT nextval('public.detalles_ingresos_id_detalle_ingreso_seq'::regclass);
 S   ALTER TABLE public.detalles_ingresos ALTER COLUMN id_detalle_ingreso DROP DEFAULT;
       public          postgres    false    234    235    235            �           2604    17811 "   detalles_pedidos id_detalle_pedido    DEFAULT     �   ALTER TABLE ONLY public.detalles_pedidos ALTER COLUMN id_detalle_pedido SET DEFAULT nextval('public.detalles_pedidos_id_detalle_pedido_seq'::regclass);
 Q   ALTER TABLE public.detalles_pedidos ALTER COLUMN id_detalle_pedido DROP DEFAULT;
       public          postgres    false    236    237    237            �           2604    17698    ingresos id_ingreso    DEFAULT     z   ALTER TABLE ONLY public.ingresos ALTER COLUMN id_ingreso SET DEFAULT nextval('public.ingresos_id_ingreso_seq'::regclass);
 B   ALTER TABLE public.ingresos ALTER COLUMN id_ingreso DROP DEFAULT;
       public          postgres    false    225    224    225            �           2604    17658    marcas id_marca    DEFAULT     r   ALTER TABLE ONLY public.marcas ALTER COLUMN id_marca SET DEFAULT nextval('public.marcas_id_marca_seq'::regclass);
 >   ALTER TABLE public.marcas ALTER COLUMN id_marca DROP DEFAULT;
       public          postgres    false    218    219    219            �           2604    17723    pedidos id_pedido    DEFAULT     v   ALTER TABLE ONLY public.pedidos ALTER COLUMN id_pedido SET DEFAULT nextval('public.pedidos_id_pedido_seq'::regclass);
 @   ALTER TABLE public.pedidos ALTER COLUMN id_pedido DROP DEFAULT;
       public          postgres    false    226    227    227            �           2604    17748    productos id_producto    DEFAULT     ~   ALTER TABLE ONLY public.productos ALTER COLUMN id_producto SET DEFAULT nextval('public.productos_id_producto_seq'::regclass);
 D   ALTER TABLE public.productos ALTER COLUMN id_producto DROP DEFAULT;
       public          postgres    false    228    229    229            �           2604    17835 )   ubicacion_productos id_ubicacion_producto    DEFAULT     �   ALTER TABLE ONLY public.ubicacion_productos ALTER COLUMN id_ubicacion_producto SET DEFAULT nextval('public.ubicacion_productos_id_ubicacion_producto_seq'::regclass);
 X   ALTER TABLE public.ubicacion_productos ALTER COLUMN id_ubicacion_producto DROP DEFAULT;
       public          postgres    false    238    239    239            �           2604    17767    ubicaciones id_ubicacion    DEFAULT     �   ALTER TABLE ONLY public.ubicaciones ALTER COLUMN id_ubicacion SET DEFAULT nextval('public.ubicaciones_id_ubicacion_seq'::regclass);
 G   ALTER TABLE public.ubicaciones ALTER COLUMN id_ubicacion DROP DEFAULT;
       public          postgres    false    230    231    231            �           2604    17668    usuarios id_usuario    DEFAULT     z   ALTER TABLE ONLY public.usuarios ALTER COLUMN id_usuario SET DEFAULT nextval('public.usuarios_id_usuario_seq'::regclass);
 B   ALTER TABLE public.usuarios ALTER COLUMN id_usuario DROP DEFAULT;
       public          postgres    false    221    220    221            x          0    17636    categoria_productos 
   TABLE DATA           ~   COPY public.categoria_productos (id_categoria_producto, nombre, descripcion, fecha_creacion, fecha_actualizacion) FROM stdin;
    public          postgres    false    215   �       z          0    17645    clientes 
   TABLE DATA           j   COPY public.clientes (id_cliente, nombre, apellido, tipo_documento, telefono, correo, activo) FROM stdin;
    public          postgres    false    217   ��       �          0    17675 	   despachos 
   TABLE DATA           �   COPY public.despachos (id_despacho, fecha_despacho, codigo_despacho, marca_id, transportadora, numero_guia, cantidad_productos, cantidad_embalaje, usuario_interno_id, estado) FROM stdin;
    public          postgres    false    223   ��       �          0    17778    detalles_despachos 
   TABLE DATA           g   COPY public.detalles_despachos (id_detalle_despacho, producto_id, total_cantidad_unidades) FROM stdin;
    public          postgres    false    233   ќ       �          0    17790    detalles_ingresos 
   TABLE DATA           b   COPY public.detalles_ingresos (id_detalle_ingreso, ingreso_id, producto_id, cantidad) FROM stdin;
    public          postgres    false    235   �       �          0    17808    detalles_pedidos 
   TABLE DATA           �   COPY public.detalles_pedidos (id_detalle_pedido, pedido_id, producto_id, cantidad, cliente_id, ciudad_destino, direccion_destino, telefono_contacto_destino) FROM stdin;
    public          postgres    false    237   �       �          0    17695    ingresos 
   TABLE DATA           �   COPY public.ingresos (id_ingreso, fecha_ingreso, codigo_ingreso, marca_id, usuario_marca_id, usuario_interno_id, estado) FROM stdin;
    public          postgres    false    225   5�       |          0    17655    marcas 
   TABLE DATA           �   COPY public.marcas (id_marca, nombre, direccion, telefono, correo, activo, usuario_id, fecha_creacion, fecha_actualizacion) FROM stdin;
    public          postgres    false    219   y�       �          0    17720    pedidos 
   TABLE DATA           �   COPY public.pedidos (id_pedido, fecha_pedido, codigo_pedido, marca_id, usuario_marca_id, usuario_interno_id, estado, cantidad_total_unidades) FROM stdin;
    public          postgres    false    227   �       �          0    17745 	   productos 
   TABLE DATA           �   COPY public.productos (id_producto, referencia, descripcion, marca_id, categoria_producto_id, fecha_creacion, fecha_actualizacion) FROM stdin;
    public          postgres    false    229   "�       �          0    17832    ubicacion_productos 
   TABLE DATA           i   COPY public.ubicacion_productos (id_ubicacion_producto, ubicacion_id, producto_id, cantidad) FROM stdin;
    public          postgres    false    239   j�       �          0    17764    ubicaciones 
   TABLE DATA           a   COPY public.ubicaciones (id_ubicacion, estan, columna, nivel, categoria_producto_id) FROM stdin;
    public          postgres    false    231   ��       ~          0    17665    usuarios 
   TABLE DATA           R   COPY public.usuarios (id_usuario, nombre, correo, clave, activo, rol) FROM stdin;
    public          postgres    false    221   ݞ       �           0    0 -   categoria_productos_id_categoria_producto_seq    SEQUENCE SET     [   SELECT pg_catalog.setval('public.categoria_productos_id_categoria_producto_seq', 2, true);
          public          postgres    false    214            �           0    0    clientes_id_cliente_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.clientes_id_cliente_seq', 1, false);
          public          postgres    false    216            �           0    0    despachos_id_despacho_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.despachos_id_despacho_seq', 1, false);
          public          postgres    false    222            �           0    0 *   detalles_despachos_id_detalle_despacho_seq    SEQUENCE SET     Y   SELECT pg_catalog.setval('public.detalles_despachos_id_detalle_despacho_seq', 1, false);
          public          postgres    false    232            �           0    0 (   detalles_ingresos_id_detalle_ingreso_seq    SEQUENCE SET     W   SELECT pg_catalog.setval('public.detalles_ingresos_id_detalle_ingreso_seq', 16, true);
          public          postgres    false    234            �           0    0 &   detalles_pedidos_id_detalle_pedido_seq    SEQUENCE SET     U   SELECT pg_catalog.setval('public.detalles_pedidos_id_detalle_pedido_seq', 1, false);
          public          postgres    false    236            �           0    0    ingresos_id_ingreso_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.ingresos_id_ingreso_seq', 22, true);
          public          postgres    false    224            �           0    0    marcas_id_marca_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.marcas_id_marca_seq', 5, true);
          public          postgres    false    218            �           0    0    pedidos_id_pedido_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.pedidos_id_pedido_seq', 1, false);
          public          postgres    false    226            �           0    0    productos_id_producto_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.productos_id_producto_seq', 5, true);
          public          postgres    false    228            �           0    0 -   ubicacion_productos_id_ubicacion_producto_seq    SEQUENCE SET     [   SELECT pg_catalog.setval('public.ubicacion_productos_id_ubicacion_producto_seq', 5, true);
          public          postgres    false    238            �           0    0    ubicaciones_id_ubicacion_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.ubicaciones_id_ubicacion_seq', 5, true);
          public          postgres    false    230            �           0    0    usuarios_id_usuario_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.usuarios_id_usuario_seq', 7, true);
          public          postgres    false    220            �           2606    17643 ,   categoria_productos categoria_productos_pkey 
   CONSTRAINT     }   ALTER TABLE ONLY public.categoria_productos
    ADD CONSTRAINT categoria_productos_pkey PRIMARY KEY (id_categoria_producto);
 V   ALTER TABLE ONLY public.categoria_productos DROP CONSTRAINT categoria_productos_pkey;
       public            postgres    false    215            �           2606    17653    clientes clientes_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.clientes
    ADD CONSTRAINT clientes_pkey PRIMARY KEY (id_cliente);
 @   ALTER TABLE ONLY public.clientes DROP CONSTRAINT clientes_pkey;
       public            postgres    false    217            �           2606    17683    despachos despachos_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.despachos
    ADD CONSTRAINT despachos_pkey PRIMARY KEY (id_despacho);
 B   ALTER TABLE ONLY public.despachos DROP CONSTRAINT despachos_pkey;
       public            postgres    false    223            �           2606    17783 *   detalles_despachos detalles_despachos_pkey 
   CONSTRAINT     y   ALTER TABLE ONLY public.detalles_despachos
    ADD CONSTRAINT detalles_despachos_pkey PRIMARY KEY (id_detalle_despacho);
 T   ALTER TABLE ONLY public.detalles_despachos DROP CONSTRAINT detalles_despachos_pkey;
       public            postgres    false    233            �           2606    17796 (   detalles_ingresos detalles_ingresos_pkey 
   CONSTRAINT     v   ALTER TABLE ONLY public.detalles_ingresos
    ADD CONSTRAINT detalles_ingresos_pkey PRIMARY KEY (id_detalle_ingreso);
 R   ALTER TABLE ONLY public.detalles_ingresos DROP CONSTRAINT detalles_ingresos_pkey;
       public            postgres    false    235            �           2606    17815 &   detalles_pedidos detalles_pedidos_pkey 
   CONSTRAINT     s   ALTER TABLE ONLY public.detalles_pedidos
    ADD CONSTRAINT detalles_pedidos_pkey PRIMARY KEY (id_detalle_pedido);
 P   ALTER TABLE ONLY public.detalles_pedidos DROP CONSTRAINT detalles_pedidos_pkey;
       public            postgres    false    237            �           2606    17703    ingresos ingresos_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.ingresos
    ADD CONSTRAINT ingresos_pkey PRIMARY KEY (id_ingreso);
 @   ALTER TABLE ONLY public.ingresos DROP CONSTRAINT ingresos_pkey;
       public            postgres    false    225            �           2606    17663    marcas marcas_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.marcas
    ADD CONSTRAINT marcas_pkey PRIMARY KEY (id_marca);
 <   ALTER TABLE ONLY public.marcas DROP CONSTRAINT marcas_pkey;
       public            postgres    false    219            �           2606    17728    pedidos pedidos_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.pedidos
    ADD CONSTRAINT pedidos_pkey PRIMARY KEY (id_pedido);
 >   ALTER TABLE ONLY public.pedidos DROP CONSTRAINT pedidos_pkey;
       public            postgres    false    227            �           2606    17752    productos productos_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_pkey PRIMARY KEY (id_producto);
 B   ALTER TABLE ONLY public.productos DROP CONSTRAINT productos_pkey;
       public            postgres    false    229            �           2606    17838 ,   ubicacion_productos ubicacion_productos_pkey 
   CONSTRAINT     }   ALTER TABLE ONLY public.ubicacion_productos
    ADD CONSTRAINT ubicacion_productos_pkey PRIMARY KEY (id_ubicacion_producto);
 V   ALTER TABLE ONLY public.ubicacion_productos DROP CONSTRAINT ubicacion_productos_pkey;
       public            postgres    false    239            �           2606    17771    ubicaciones ubicaciones_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.ubicaciones
    ADD CONSTRAINT ubicaciones_pkey PRIMARY KEY (id_ubicacion);
 F   ALTER TABLE ONLY public.ubicaciones DROP CONSTRAINT ubicaciones_pkey;
       public            postgres    false    231            �           2606    17673    usuarios usuarios_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id_usuario);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            postgres    false    221            �           2606    17684 $   despachos despachos_marca_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.despachos
    ADD CONSTRAINT despachos_marca_id_foreign FOREIGN KEY (marca_id) REFERENCES public.marcas(id_marca) ON DELETE CASCADE;
 N   ALTER TABLE ONLY public.despachos DROP CONSTRAINT despachos_marca_id_foreign;
       public          postgres    false    219    223    3265            �           2606    17689 .   despachos despachos_usuario_interno_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.despachos
    ADD CONSTRAINT despachos_usuario_interno_id_foreign FOREIGN KEY (usuario_interno_id) REFERENCES public.usuarios(id_usuario) ON DELETE CASCADE;
 X   ALTER TABLE ONLY public.despachos DROP CONSTRAINT despachos_usuario_interno_id_foreign;
       public          postgres    false    223    3267    221            �           2606    17784 9   detalles_despachos detalles_despachos_producto_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.detalles_despachos
    ADD CONSTRAINT detalles_despachos_producto_id_foreign FOREIGN KEY (producto_id) REFERENCES public.productos(id_producto) ON DELETE CASCADE;
 c   ALTER TABLE ONLY public.detalles_despachos DROP CONSTRAINT detalles_despachos_producto_id_foreign;
       public          postgres    false    229    3275    233            �           2606    17797 6   detalles_ingresos detalles_ingresos_ingreso_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.detalles_ingresos
    ADD CONSTRAINT detalles_ingresos_ingreso_id_foreign FOREIGN KEY (ingreso_id) REFERENCES public.ingresos(id_ingreso) ON DELETE CASCADE;
 `   ALTER TABLE ONLY public.detalles_ingresos DROP CONSTRAINT detalles_ingresos_ingreso_id_foreign;
       public          postgres    false    225    235    3271            �           2606    17802 7   detalles_ingresos detalles_ingresos_producto_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.detalles_ingresos
    ADD CONSTRAINT detalles_ingresos_producto_id_foreign FOREIGN KEY (producto_id) REFERENCES public.productos(id_producto) ON DELETE CASCADE;
 a   ALTER TABLE ONLY public.detalles_ingresos DROP CONSTRAINT detalles_ingresos_producto_id_foreign;
       public          postgres    false    235    229    3275            �           2606    17816 4   detalles_pedidos detalles_pedidos_cliente_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.detalles_pedidos
    ADD CONSTRAINT detalles_pedidos_cliente_id_foreign FOREIGN KEY (cliente_id) REFERENCES public.clientes(id_cliente) ON DELETE CASCADE;
 ^   ALTER TABLE ONLY public.detalles_pedidos DROP CONSTRAINT detalles_pedidos_cliente_id_foreign;
       public          postgres    false    217    3263    237            �           2606    17821 3   detalles_pedidos detalles_pedidos_pedido_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.detalles_pedidos
    ADD CONSTRAINT detalles_pedidos_pedido_id_foreign FOREIGN KEY (pedido_id) REFERENCES public.pedidos(id_pedido) ON DELETE CASCADE;
 ]   ALTER TABLE ONLY public.detalles_pedidos DROP CONSTRAINT detalles_pedidos_pedido_id_foreign;
       public          postgres    false    3273    237    227            �           2606    17826 5   detalles_pedidos detalles_pedidos_producto_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.detalles_pedidos
    ADD CONSTRAINT detalles_pedidos_producto_id_foreign FOREIGN KEY (producto_id) REFERENCES public.productos(id_producto) ON DELETE CASCADE;
 _   ALTER TABLE ONLY public.detalles_pedidos DROP CONSTRAINT detalles_pedidos_producto_id_foreign;
       public          postgres    false    229    237    3275            �           2606    17704 "   ingresos ingresos_marca_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.ingresos
    ADD CONSTRAINT ingresos_marca_id_foreign FOREIGN KEY (marca_id) REFERENCES public.marcas(id_marca) ON DELETE CASCADE;
 L   ALTER TABLE ONLY public.ingresos DROP CONSTRAINT ingresos_marca_id_foreign;
       public          postgres    false    225    219    3265            �           2606    17709 ,   ingresos ingresos_usuario_interno_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.ingresos
    ADD CONSTRAINT ingresos_usuario_interno_id_foreign FOREIGN KEY (usuario_interno_id) REFERENCES public.usuarios(id_usuario) ON DELETE CASCADE;
 V   ALTER TABLE ONLY public.ingresos DROP CONSTRAINT ingresos_usuario_interno_id_foreign;
       public          postgres    false    221    3267    225            �           2606    17714 *   ingresos ingresos_usuario_marca_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.ingresos
    ADD CONSTRAINT ingresos_usuario_marca_id_foreign FOREIGN KEY (usuario_marca_id) REFERENCES public.usuarios(id_usuario) ON DELETE CASCADE;
 T   ALTER TABLE ONLY public.ingresos DROP CONSTRAINT ingresos_usuario_marca_id_foreign;
       public          postgres    false    225    221    3267            �           2606    17729     pedidos pedidos_marca_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedidos
    ADD CONSTRAINT pedidos_marca_id_foreign FOREIGN KEY (marca_id) REFERENCES public.marcas(id_marca) ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.pedidos DROP CONSTRAINT pedidos_marca_id_foreign;
       public          postgres    false    227    219    3265            �           2606    17734 *   pedidos pedidos_usuario_interno_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedidos
    ADD CONSTRAINT pedidos_usuario_interno_id_foreign FOREIGN KEY (usuario_interno_id) REFERENCES public.usuarios(id_usuario) ON DELETE CASCADE;
 T   ALTER TABLE ONLY public.pedidos DROP CONSTRAINT pedidos_usuario_interno_id_foreign;
       public          postgres    false    3267    221    227            �           2606    17739 (   pedidos pedidos_usuario_marca_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedidos
    ADD CONSTRAINT pedidos_usuario_marca_id_foreign FOREIGN KEY (usuario_marca_id) REFERENCES public.usuarios(id_usuario) ON DELETE CASCADE;
 R   ALTER TABLE ONLY public.pedidos DROP CONSTRAINT pedidos_usuario_marca_id_foreign;
       public          postgres    false    3267    221    227            �           2606    17753 1   productos productos_categoria_producto_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_categoria_producto_id_foreign FOREIGN KEY (categoria_producto_id) REFERENCES public.categoria_productos(id_categoria_producto) ON DELETE CASCADE;
 [   ALTER TABLE ONLY public.productos DROP CONSTRAINT productos_categoria_producto_id_foreign;
       public          postgres    false    215    229    3261            �           2606    17758 $   productos productos_marca_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_marca_id_foreign FOREIGN KEY (marca_id) REFERENCES public.marcas(id_marca) ON DELETE CASCADE;
 N   ALTER TABLE ONLY public.productos DROP CONSTRAINT productos_marca_id_foreign;
       public          postgres    false    3265    229    219            �           2606    17839 ;   ubicacion_productos ubicacion_productos_producto_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.ubicacion_productos
    ADD CONSTRAINT ubicacion_productos_producto_id_foreign FOREIGN KEY (producto_id) REFERENCES public.productos(id_producto) ON DELETE CASCADE;
 e   ALTER TABLE ONLY public.ubicacion_productos DROP CONSTRAINT ubicacion_productos_producto_id_foreign;
       public          postgres    false    239    229    3275            �           2606    17844 <   ubicacion_productos ubicacion_productos_ubicacion_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.ubicacion_productos
    ADD CONSTRAINT ubicacion_productos_ubicacion_id_foreign FOREIGN KEY (ubicacion_id) REFERENCES public.ubicaciones(id_ubicacion) ON DELETE CASCADE;
 f   ALTER TABLE ONLY public.ubicacion_productos DROP CONSTRAINT ubicacion_productos_ubicacion_id_foreign;
       public          postgres    false    3277    239    231            �           2606    17772 5   ubicaciones ubicaciones_categoria_producto_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.ubicaciones
    ADD CONSTRAINT ubicaciones_categoria_producto_id_foreign FOREIGN KEY (categoria_producto_id) REFERENCES public.categoria_productos(id_categoria_producto) ON DELETE CASCADE;
 _   ALTER TABLE ONLY public.ubicaciones DROP CONSTRAINT ubicaciones_categoria_producto_id_foreign;
       public          postgres    false    231    215    3261            x   n   x�3�tr��q�r�(�O)M.�/VHIUHJ��I�J�4202�50�52W02�25�22�3�0476�#�e��������������d|AbQ�Bj�BF~zb�6��qqq ��-S      z      x������ � �      �      x������ � �      �      x������ � �      �      x�34�42�4�4426����� T�      �      x������ � �      �   4   x�32�4202�50�5��4426�4��!O?� �`G.##"��qqq i@�      |   |   x�}��	�0��4����v}���4�pjC�?�P)���������^�0���N	Xz5�ڇ��u\���
;(�vd�D'}����D䷠�0�m��� �=��I�(S�$>)s�?�7��/��1o      �      x������ � �      �   8   x�3�L�J�-�ɇ�&�F�FF&���F
�V�VFfz���F�x��b���� -E�      �      x������ � �      �   F   x�ȫ�PEA����* 8������c���c�y>�n�lh�M6��[l��m��f[�.f�Q��      ~   �   x���I�0D�_�l�����T4���V�.�z��ɫ��9���	D֍Le�3&EI���,A�Sm�k�c�� �1..������Y�6��j�.�8�Uko��ݴ���`h@G�-�`��|�l L��+�a�����,g4���Z��瑁�Q�������9�^!H�1�.�mo��Bv�u���s�R�?�>�a��ڹw�     