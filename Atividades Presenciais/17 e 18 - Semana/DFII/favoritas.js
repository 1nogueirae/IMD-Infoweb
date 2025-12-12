let todoItem = '';

$('#addToDo').on('keypress', function (event) {
    if (event.key === 'Enter' && $(this).val().trim() !== '') {
        todoItem = $(this).val();
        $('<li>')
            .append('<span><i class="fa fa-trash"></i></span> ')
            .append(todoItem)
            .appendTo('#todoList');
        $(this).val('');
    }
});

$('#todoList').on('click', 'span', function () {
    $(this).parent().remove();
});
