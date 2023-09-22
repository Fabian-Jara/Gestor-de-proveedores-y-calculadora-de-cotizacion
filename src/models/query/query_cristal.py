from models.entities.entity_cristal import EntityCristal

class QueryCristal():
    @classmethod
    def cristal_list(cls, db):
        try:
            with db.connection.cursor() as cur:
                query_sql = "CALL sp_cristal_list()"
                cur.execute(query_sql)
                data = cur.fetchall()
                if data:
                    oCristal = [EntityCristal(*row) for row in data]
                    return oCristal
                else:
                    return None
        except Exception as ex:
            raise Exception(ex)
        
    @classmethod
    def cristal_add(cls, db, cristalAdd):
        try:
            with db.connection.cursor() as cur:
                query_sql = "CALL sp_cristal_add(%s, %s, %s, %s, %s, %s, %s)"
                values = (
                    cristalAdd.nombre_material_cristal,
                    cristalAdd.nombre_proveedor_cristal,
                    cristalAdd.tipo_cristal,
                    cristalAdd.precio_cristal,
                    cristalAdd.fecha_insercion_cristal,
                    cristalAdd.fecha_actualizacion_cristal,
                    cristalAdd.estado_cristal
                )
                cur.execute(query_sql, values)
                db.connection.commit()

            answer = 'Datos ingresados con éxito'
            return answer
        except Exception as ex:
            answer = f'Error: {str(ex)}'
            return answer
        
    @classmethod
    def cristal_edit(cls, db, cristalEdit):
        try:
            with db.connection.cursor() as cur:
                query_sql = "CALL sp_cristal_edit(%s, %s, %s, %s, %s, %s, %s)"
                values = (
                    cristalEdit.id,
                    cristalEdit.nombre_material_cristal,
                    cristalEdit.nombre_proveedor_cristal,
                    cristalEdit.tipo_cristal,
                    cristalEdit.precio_cristal,
                    cristalEdit.fecha_actualizacion_cristal,
                    cristalEdit.estado_cristal
                )
                cur.execute(query_sql, values)
                db.connection.commit()

            answer = 'Datos de la fila: ' + cristalEdit.id + ' Actualizados con éxito'
            return answer
        except Exception as ex:
            answer = f'Error: {str(ex)}'
            return answer
        
    @classmethod
    def cristal_delete(cls, db, cristalDelete):
        try:
            with db.connection.cursor() as cur:
                query_sql = "CALL sp_cristal_delete('{}')".format(cristalDelete.id)
                cur.execute(query_sql)
                db.connection.commit()

            answer = 'Datos de la fila: ' + cristalDelete.id + ' eliminados con éxito'
            return answer
        except Exception as ex:
            answer = f'Error: {str(ex)}'
            return answer      
        
    @classmethod
    def cristal_list_x_estado(cls, db):
        try:
            with db.connection.cursor() as cur:
                query_sql = "CALL sp_cristal_list_x_estado()"
                cur.execute(query_sql)
                data = cur.fetchall()

                if data:
                    listCristal = [EntityCristal(None, row[0], None, row[1], row[2], None, None, None) for row in data]
                    return listCristal
                else:
                    return None
        except Exception as ex:
            raise Exception(ex)
