$(document).on("click", "#btnModalEditMarmol", function () {
    var edit_id = $(this).data('edit_id');
    var edit_nombre_material_marmol = $(this).data('edit_nombre_material_marmol');
    var edit_nombre_proveedor_marmol = $(this).data('edit_nombre_proveedor_marmol');
    var edit_tipo_marmol = $(this).data('edit_tipo_marmol');
    var edit_precio_marmol = $(this).data('edit_precio_marmol');
    var edit_estado_marmol = $(this).data('edit_estado_marmol');

    $("#edit_id").val(edit_id);
    $("#edit_nombre_material_marmol").val(edit_nombre_material_marmol);
    $("#edit_nombre_proveedor_marmol").val(edit_nombre_proveedor_marmol);
    $("#edit_tipo_marmol").val(edit_tipo_marmol);
    $("#edit_precio_marmol").val(edit_precio_marmol);
    $("#edit_estado_marmol").val(edit_estado_marmol);

});

$(document).on("click", "#btnModalDeleteMarmol", function () {
    var delete_id = $(this).data('delete_id');

    $("#delete_id").val(delete_id);
    $("#delete_id_spam").text(delete_id);

});

$(document).on("click", "#btnModalEditCristal", function () {
    var edit_id = $(this).data('edit_id');
    var edit_nombre_material_cristal = $(this).data('edit_nombre_material_cristal');
    var edit_nombre_proveedor_cristal = $(this).data('edit_nombre_proveedor_cristal');
    var edit_tipo_cristal = $(this).data('edit_tipo_cristal');
    var edit_precio_cristal = $(this).data('edit_precio_cristal');
    var edit_estado_cristal = $(this).data('edit_estado_cristal');

    $("#edit_id").val(edit_id);
    $("#edit_nombre_material_cristal").val(edit_nombre_material_cristal);
    $("#edit_nombre_proveedor_cristal").val(edit_nombre_proveedor_cristal);
    $("#edit_tipo_cristal").val(edit_tipo_cristal);
    $("#edit_precio_cristal").val(edit_precio_cristal);
    $("#edit_estado_cristal").val(edit_estado_cristal);

});

$(document).on("click", "#btnmodalDeleteCristal", function () {
    var delete_id = $(this).data('delete_id');
    
    $("#delete_id").val(delete_id);
    $("#delete_id_spam").text(delete_id);

});