from models.entities.entity_marmol import EntityMarmol

class QueryMarmol():
    @classmethod
    def marmol_list(cls, db):
        try:
            with db.connection.cursor() as cur:
                query_sql = "CALL sp_marmol_list()"
                cur.execute(query_sql)
                data = cur.fetchall()
                if data:
                    oMarmol = [EntityMarmol(*row) for row in data]
                    return oMarmol
                else:
                    return None
        except Exception as ex:
            raise Exception(ex)

    @classmethod
    def marmol_add(cls, db, marmolAdd):
        try:
            with db.connection.cursor() as cur:
                query_sql = "CALL sp_marmol_add(%s, %s, %s, %s, %s, %s, %s)"
                values = (
                    marmolAdd.nombre_material_marmol,
                    marmolAdd.nombre_proveedor_marmol,
                    marmolAdd.tipo_marmol,
                    marmolAdd.precio_marmol,
                    marmolAdd.fecha_insercion_marmol,
                    marmolAdd.fecha_actualizacion_marmol,
                    marmolAdd.estado_marmol
                )
                cur.execute(query_sql, values)
                db.connection.commit()

            answer = 'Datos ingresados con éxito'
            return answer
        except Exception as ex:
            answer = f'Error: {str(ex)}'
            return answer

    @classmethod
    def marmol_edit(cls, db, marmolEdit):
        try:
            with db.connection.cursor() as cur:
                query_sql = "CALL sp_marmol_edit(%s, %s, %s, %s, %s, %s, %s)"
                values = (
                    marmolEdit.id,
                    marmolEdit.nombre_material_marmol,
                    marmolEdit.nombre_proveedor_marmol,
                    marmolEdit.tipo_marmol,
                    marmolEdit.precio_marmol,
                    marmolEdit.fecha_actualizacion_marmol,
                    marmolEdit.estado_marmol
                )
                cur.execute(query_sql, values)
                db.connection.commit()

            answer = 'Datos de la fila: ' + marmolEdit.id + ' Actualizados con éxito'
            return answer
        except Exception as ex:
            answer = f'Error: {str(ex)}'
            return answer
        
    @classmethod
    def marmol_delete(cls, db, marmolDelete):
        try:
            with db.connection.cursor() as cur:
                query_sql = "CALL sp_marmol_delete('{}')".format(marmolDelete.id)
                cur.execute(query_sql)
                db.connection.commit()

            answer = 'Datos de la fila: ' + marmolDelete.id + ' eliminados con éxito'
            return answer
        except Exception as ex:
            answer = f'Error: {str(ex)}'
            return answer

    @classmethod
    def marmol_list_x_estado(cls, db):
        try:
            with db.connection.cursor() as cur:
                query_sql = "CALL sp_marmol_list_x_estado()"
                cur.execute(query_sql)
                data = cur.fetchall()

                if data:
                    listMarmol = [EntityMarmol(None, row[0], None, row[1], row[2], None, None, None) for row in data]
                    return listMarmol
                else:
                    return None
        except Exception as ex:
            raise Exception(ex)