create schema nombre de la base de datos;

use nombre de la base de datos;

create table marmol(
	id int not null auto_increment,
    nombre_material_marmol varchar(100) not null,
    nombre_proveedor_marmol varchar(100) not null,
    tipo_marmol varchar(15) not null,
    precio_marmol int null,
    fecha_insercion_marmol date not null,
    fecha_actualizacion_marmol date not null,
    estado_marmol boolean not null,
    
    primary key (id)
);

DELIMITER //
create procedure sp_marmol_list()
begin
	select * from marmol;
end //
DELIMITER ;

-- call sp_marmol_list();

DELIMITER //
create procedure sp_marmol_add(
    in vsp_nombre_material_marmol varchar(100),
    in vsp_nombre_proveedor_marmol varchar(100),
    in vsp_tipo_marmol varchar(15),
    in vsp_precio_marmol int,
    in vsp_fecha_insercion_marmol date,
    in vsp_fecha_actualizacion_marmol date,
	in vsp_estado_marmol boolean
)
begin
	insert into marmol(
		nombre_material_marmol, nombre_proveedor_marmol, tipo_marmol, precio_marmol, fecha_insercion_marmol, fecha_actualizacion_marmol, estado_marmol
    )
    values(
		vsp_nombre_material_marmol, vsp_nombre_proveedor_marmol, vsp_tipo_marmol, vsp_precio_marmol, vsp_fecha_insercion_marmol, vsp_fecha_actualizacion_marmol, vsp_estado_marmol
    );
end //
DELIMITER ;

-- call sp_marmol_add('preuba1', 'preuba1', 'preuba1', '1232', '2023-04-05', '2023-04-05', '1');

DELIMITER //
create procedure sp_marmol_edit(
	in vsp_id int,
	in vsp_nombre_material_marmol varchar(100),
    in vsp_nombre_proveedor_marmol varchar(100),
    in vsp_tipo_marmol varchar(15),
    in vsp_precio_marmol int,
    in vsp_fecha_actualizacion_marmol date,
	in vsp_estado_marmol boolean
)
begin
	update marmol set
		nombre_material_marmol = vsp_nombre_material_marmol, 
        nombre_proveedor_marmol = vsp_nombre_proveedor_marmol, 
        tipo_marmol = vsp_tipo_marmol, 
        precio_marmol = vsp_precio_marmol,
        fecha_actualizacion_marmol = vsp_fecha_actualizacion_marmol, 
        estado_marmol = vsp_estado_marmol
    where
		id = vsp_id;
end //
DELIMITER ;

-- call sp_marmol_edit('1', 'preuba2', 'preuba2', 'preuba2', '99999', '2023-06-10', '0');

DELIMITER //
create procedure sp_marmol_delete(
	in vsp_id int
)
begin
	delete from marmol where id = vsp_id;
end//
DELIMITER ;

-- call sp_marmol_delete('1');

DELIMITER //
create procedure sp_marmol_list_x_estado()
begin
	select nombre_material_marmol, tipo_marmol, precio_marmol from marmol where estado_marmol = '1';
end //
DELIMITER ;

-- call sp_marmol_list_x_estado();

-- =================================================

create table cristal(
	id int not null auto_increment,
    nombre_material_cristal varchar(100) not null,
    nombre_proveedor_cristal varchar(100) not null,
    tipo_cristal varchar(15) not null,
    precio_cristal int null,
    fecha_insercion_cristal date not null,
    fecha_actualizacion_cristal date not null,
    estado_cristal boolean not null,
    
    primary key (id)
);

DELIMITER //
create procedure sp_cristal_list()
begin
	select * from cristal;
end //
DELIMITER ;

-- call sp_cristal_list();

DELIMITER //
create procedure sp_cristal_add(
    in vsp_nombre_material_cristal varchar(100),
    in vsp_nombre_proveedor_cristal varchar(100),
    in vsp_tipo_cristal varchar(15),
    in vsp_precio_cristal int,
    in vsp_fecha_insercion_cristal date,
    in vsp_fecha_actualizacion_cristal date,
	in vsp_estado_cristal boolean
)
begin
	insert into cristal(
		nombre_material_cristal, nombre_proveedor_cristal, tipo_cristal, precio_cristal, fecha_insercion_cristal, fecha_actualizacion_cristal, estado_cristal
    )
    values(
		vsp_nombre_material_cristal, vsp_nombre_proveedor_cristal, vsp_tipo_cristal, vsp_precio_cristal, vsp_fecha_insercion_cristal, vsp_fecha_actualizacion_cristal, vsp_estado_cristal
    );
end //
DELIMITER ;

-- call sp_cristal_add('preuba1', 'preuba1', '1232', '2023-04-05', '2023-04-05', '1');

DELIMITER //
create procedure sp_cristal_edit(
	in vsp_id int,
	in vsp_nombre_material_cristal varchar(100),
    in vsp_nombre_proveedor_cristal varchar(100),
    in vsp_tipo_cristal varchar(15),
    in vsp_precio_cristal int,
    in vsp_fecha_actualizacion_cristal date,
	in vsp_estado_cristal boolean
)
begin
	update cristal set
		nombre_material_cristal = vsp_nombre_material_cristal, 
        nombre_proveedor_cristal = vsp_nombre_proveedor_cristal, 
        tipo_cristal = vsp_tipo_cristal, 
        precio_cristal = vsp_precio_cristal,
        fecha_actualizacion_cristal = vsp_fecha_actualizacion_cristal, 
        estado_cristal = vsp_estado_cristal
    where
		id = vsp_id;
end //
DELIMITER ;

-- call sp_cristal_edit('1', 'preuba2', 'preuba2', '99999', '2023-06-10', '0');

DELIMITER //
create procedure sp_cristal_delete(
	in vsp_id int
)
begin
	delete from cristal where id = vsp_id;
end//
DELIMITER ;

-- call sp_cristal_delete('1');

DELIMITER //
create procedure sp_cristal_list_x_estado()
begin
	select nombre_material_cristal, tipo_cristal, precio_cristal from cristal where estado_cristal = '1';
end //
DELIMITER ;

-- call sp_cristal_list_x_estado();

LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/nombre edl archivo .csv'
INTO TABLE marmol
FIELDS TERMINATED BY ';' -- Cambia ',' al delimitador adecuado si es diferente
LINES TERMINATED BY '\n'  -- Cambia '\n' si las líneas están separadas de manera diferente
IGNORE 1 LINES;  -- Ignora la primera línea si contiene encabezados


