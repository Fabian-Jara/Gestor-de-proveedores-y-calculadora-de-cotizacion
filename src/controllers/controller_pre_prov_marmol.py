from flask import Blueprint, redirect, url_for, flash, request
from models.query.query_marmol import QueryMarmol
from models.entities.entity_marmol import EntityMarmol
import datetime

pre_prov_marmolBP = Blueprint('pre_prov_marmolBP', __name__)


@pre_prov_marmolBP.route("/add_marmol", methods=['POST'])
def add_marmol():
    fecha_add_marmol = datetime.date.today()
    if request.method == 'POST':
        from app import db
        nuevoMarmol = EntityMarmol(None, request.form['nombre_material_marmol'], request.form['nombre_proveedor_marmol'],
                                    request.form['tipo_marmol'], request.form['precio_marmol'], fecha_add_marmol, fecha_add_marmol, request.form['estado_marmol'])

        answer_add_marmol = QueryMarmol.marmol_add(db, nuevoMarmol)
        if answer_add_marmol == 'Datos ingresados con éxito':
            flash(answer_add_marmol)
            return redirect(url_for('proveedoMrarmol'))
        else:
            flash(answer_add_marmol)
            return redirect(url_for('proveedoMrarmol'))
    else:
        return redirect(url_for('proveedoMrarmol'))


@pre_prov_marmolBP.route("/edit_marmol", methods=['POST'])
def edit_marmol():
    fecha_edit_marmol = datetime.date.today()
    if request.method == 'POST':
        from app import db
        editarMarmol = EntityMarmol(request.form['id'], request.form['nombre_material_marmol'], request.form['nombre_proveedor_marmol'],
                                    request.form['tipo_marmol'], request.form['precio_marmol'], None, fecha_edit_marmol, request.form['estado_marmol'])

        answer_edit_marmol = QueryMarmol.marmol_edit(db, editarMarmol)
        if answer_edit_marmol == 'Datos Actualizados con éxito':
            flash(answer_edit_marmol)
            return redirect(url_for('proveedoMrarmol'))
        else:
            flash(answer_edit_marmol)
            return redirect(url_for('proveedoMrarmol'))
    else:
        return redirect(url_for('proveedoMrarmol'))


@pre_prov_marmolBP.route("/delete_marmol", methods=['POST'])
def delete_marmol():
    if request.method == 'POST':
        from app import db
        id = request.form['id']
        answer = 'Datos de la fila: ' + id + ' eliminados con éxito'
        borrarMarmol = EntityMarmol(request.form['id'], None, None, None, None, None, None, None)

        answer_delete_marmol = QueryMarmol.marmol_delete(db, borrarMarmol)
        if answer_delete_marmol == answer:
            flash(answer_delete_marmol)
            return redirect(url_for('proveedoMrarmol'))
        else:
            flash(answer_delete_marmol)
            return redirect(url_for('proveedoMrarmol'))
    else:
        return redirect(url_for('proveedoMrarmol'))
