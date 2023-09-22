from flask import Flask, render_template, redirect, url_for
from flask_mysqldb import MySQL

from models.query.query_marmol import QueryMarmol
from models.query.query_cristal import QueryCristal

app = Flask(__name__)

app.config['SECRET_KEY'] = "clave secreta"
app.config['MYSQL_HOST'] = "localhost"
app.config['MYSQL_USER'] = "root"
app.config['MYSQL_PASSWORD'] = "contraseña de la base de datos"
app.config['MYSQL_DB'] = "nombre de la base de datos"
app.config['DEBUG'] = True

db = MySQL(app)

from controllers.controller_pre_prov_marmol import pre_prov_marmolBP
app.register_blueprint(pre_prov_marmolBP)

from controllers.controller_pre_prov_cristal import pre_prov_cristalBP
app.register_blueprint(pre_prov_cristalBP)

@app.route('/')
def inicio():
    return redirect(url_for('index'))

@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/inicioProveedos')
def inicioProveedos():
    return render_template('inicioProveedos.html')

@app.route('/proveedoMrarmol')
def proveedoMrarmol():
    listMarmol = QueryMarmol.marmol_list(db)
    return render_template('proveedoMrarmol.html', marmoles = listMarmol)

@app.route('/proveedorCristal')
def proveedorCristal():
    listCristal = QueryCristal.cristal_list(db)
    return render_template('proveedorCristal.html', cristales = listCristal)

@app.route('/positanoNormal')
def positanoNormal():
    listCristal = QueryCristal.cristal_list_x_estado(db)
    listMarmol = QueryMarmol.marmol_list_x_estado(db)
    return render_template('positanoNormal.html', cristales = listCristal, marmoles = listMarmol)

@app.route('/positanoCruzada')
def positanoCruzada():
    listCristal = QueryCristal.cristal_list_x_estado(db)
    listMarmol = QueryMarmol.marmol_list_x_estado(db)
    return render_template('positanoCruzada.html', cristales = listCristal, marmoles = listMarmol)

@app.route('/cubosYChimeneas')
def cubosYChimeneas():
    listMarmol = QueryMarmol.marmol_list_x_estado(db)
    return render_template('cubosYChimeneas.html', marmoles = listMarmol)

@app.route('/redondas')
def redondas():
    listMarmol = QueryMarmol.marmol_list_x_estado(db)
    return render_template('redondas.html', marmoles = listMarmol)

@app.route('/comedoresOCubiertas')
def comedoresOCubiertas():
    listCristal = QueryCristal.cristal_list_x_estado(db)
    listMarmol = QueryMarmol.marmol_list_x_estado(db)
    return render_template('comedoresOCubiertas.html', cristales = listCristal, marmoles = listMarmol)

@app.route('/rabona')
def rabona():
    listMarmol = QueryMarmol.marmol_list_x_estado(db)
    return render_template('rabona.html', marmoles = listMarmol)


def status_401(error):
    return redirect(url_for('index'))

def status_404(error):
    return "<h1>Página no encontrada</h1>", 404

if __name__ == '__main__':
    app.register_error_handler(401, status_401)
    app.register_error_handler(404, status_404)
    app.run(host="0.0.0.0", port=5000)