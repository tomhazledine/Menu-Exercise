var target = document.getElementById('menu_task_target');

console.log(data);

var menu_markup = create_menu(data);

target.innerHTML = menu_markup;

function create_menu(data){
    var output = '';

    output += '<ul>';

        for (var i = 0; i < data.length; i++) {
            var link_markup = build_link(data[i]);
            
            if (data[i].menu) {
                var submenu_markup = create_menu(data[i].menu);
            } else {
                var submenu_markup = '';
            }

            output += '<li>' + link_markup + submenu_markup + '</li>';
        }

    output += '</ul>';

    return output;
}

function build_link(data){
    var class_name = typeof data.class_name != 'undefined' ? data.class_name : data.title.toLowerCase();
    if (data.href) {
        var output = '<a href="' + data.href + '" class="' + class_name + '">' + data.title + '</a>';
    } else {
        var output = '<span class="' + class_name + '">' + data.title + '</span>';
    }
    return output;
}