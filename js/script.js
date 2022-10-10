$( document ).ready(function() {
    $('.js-close-left').on('click', function(){
        $('#block-user').hide(500);
    });

    $('.js-open-left').on('click', function(){
        $('#block-user').show(500);
    });

    $('.js-save-user').on('click', function(){
        let form = $('#user-form').get(0);
        var formData = new FormData(form);
        let ifo = formData.get('name')+" " + formData.get('first-name')+" " + formData.get('three-name')+" " + formData.get('date')+" ";
        $('#user-name').text(ifo)
    });

    $('.js-btn-open-vclad').on('click', function(){
        let form = $('.js-data-vclad').get(0);
        var formData = new FormData(form);
        console.log(formData.get('vclad'));
        let thNew = '<tr class = "js-row">'+
            '<td>'+formData.get('vclad')+'</td>'+
            '<td class = "js-cash">'+formData.get('cash')+'</td>'+
            '<td>'+formData.get('type')+'</td>'+
            '<td><button class="js-top-up action">Пополнить на 100р</button><button class = "js-remove-row action">Закрыть</button></td>'+
            '</tr>';

        $('.js-add-vclad').append(thNew);
    });

    $('.js-data-table').on('click','.js-top-up', function(){
        let cashRow = $(this).parents('.js-row').children('.js-cash');
        cashRow.text(parseFloat(cashRow.text())+100);
        console.log('dfghjk');
    });

    $('.js-data-table').on('click','.js-remove-row', function(){
        let row = $(this).parents('.js-row');
        row.remove();
    });
});