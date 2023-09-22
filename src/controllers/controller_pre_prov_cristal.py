from flask import Blueprint, redirect, url_for, flash, request, session
from models.query.query_cristal import QueryCristal
from models.entities.entity_cristal import EntityCristal
import datetime

pre_prov_cristalBP = Blueprint('pre_prov_cristalBP', __name__)

@pre_prov_cristalBP.route("/add_cristal", methods=['POST'])
def add_cristal():
    fecha_add_cristal = datetime.date.today()
    if request.method == 'POST':
        from app import db
        nuevoCristal = EntityCristal(None, request.form['nombre_material_cristal'], request.form['nombre_proveedor_cristal'],
                                    request.form['tipo_cristal'], request.form['precio_cristal'], fecha_add_cristal, fecha_add_cristal, request.form['estado_cristal'])

        answer_add_cristal = QueryCristal.cristal_add(db, nuevoCristal)
        if answer_add_cristal == 'Datos ingresados con éxito':
            flash(answer_add_cristal)
            return redirect(url_for('proveedorCristal'))
        else:
            flash(answer_add_cristal)
            return redirect(url_for('proveedorCristal'))
    else:
        return redirect(url_for('proveedorCristal'))
    
@pre_prov_cristalBP.route("/edit_cristal", methods=['POST'])
def edit_cristal():
    fecha_edit_cristal = datetime.date.today()
    if request.method == 'POST':
        from app import db
        editarCristal = EntityCristal(request.form['id'], request.form['nombre_material_cristal'], request.form['nombre_proveedor_cristal'],
                                    request.form['tipo_cristal'], request.form['precio_cristal'], None, fecha_edit_cristal, request.form['estado_cristal'])

        answer_edit_cristal = QueryCristal.cristal_edit(db, editarCristal)
        if answer_edit_cristal == 'Datos Actualizados con éxito':
            flash(answer_edit_cristal)
            return redirect(url_for('proveedorCristal'))
        else:
            flash(answer_edit_cristal)
            return redirect(url_for('proveedorCristal'))
    else:
        return redirect(url_for('proveedorCristal'))
    
@pre_prov_cristalBP.route("/delete_cristal", methods=['POST'])
def delete_cristal():
    if request.method == 'POST':
        from app import db
        id = request.form['id']
        answer = 'Datos de la fila: ' + id + ' eliminados con éxito'
        borrarCristal = EntityCristal(request.form['id'], None, None, None, None, None, None, None)

        answer_delete_cristal = QueryCristal.cristal_delete(db, borrarCristal)
        if answer_delete_cristal == answer:
            flash(answer_delete_cristal)
            return redirect(url_for('proveedorCristal'))
        else:
            flash(answer_delete_cristal)
            return redirect(url_for('proveedorCristal'))
    else:
        return redirect(url_for('proveedorCristal'))