$(document).ready(function() {

    /**
     * Поймать событие добавления нового кредита
     */
    $('#create_credit').on('click', function(e) {
        e.preventDefault();
        showMadeCredit()
        addNewElemToTableMadeCredit()

    })

    /**
     * Показать оформленные кредиты
     */
    function showMadeCredit() {
        $('#made_credit_id').css('display', 'block');
    }


    /**
     * Добавить новый элемент в таблицу
     */
    function addNewElemToTableMadeCredit()
    {
        let formCredit = document.forms['form_create_credit']

        let email = formCredit.elements['email'].value
        let dataPassport = formCredit.elements['passport'].value
        let typeCredit = formCredit.elements['type_credit'].value

        let madeCreditTableBody = $('#made_credit_table_body_id')

        let countMadeCredit = document.getElementById('madeCreditTable').tBodies[0].rows.length + 1

        let newElem = `<tr>
                        <th scope="row">${countMadeCredit}</th>
                        <td>${email}</td>
                        <td>${dataPassport}</td>
                        <td>${typeCredit}</td>
                    </tr>`

        madeCreditTableBody.append(newElem)
    }

})