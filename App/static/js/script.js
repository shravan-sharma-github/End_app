var isStarted = false

function init() {
    console.log('init called')
    sessionStorage.setItem("user", "{{ username }}")
    $('#cameras').hide();
    $('#attendance').hide();
    $('#sentiment').hide();
    $('#activator').hide();
    $('#default_error').hide();

    get_images()
        // $('#plots').find('tr').not('#table_header').hide();
        // $('#plots').find('#plot_segment1').show();
}

function home() {
    $('#home').show();
    $('#attendance').hide();
    $('#sentiment').hide();
    $('#activator').hide();
    $('#default_error').hide();
}

function attendance() {
    if (!isStarted)
        display_error()
    else {
        $('#home').hide();
        $('#attendance').show();
        $('#sentiment').hide();
        $('#activator').hide();
        $('#default_error').hide();
    }
}

function sentiment() {
    if (!isStarted)
        display_error()
    else {
        $('#home').hide();
        $('#attendance').hide();
        $('#sentiment').show();
        $('#activator').hide();
        $('#default_error').hide();
    }
}

function activator() {
    if (!isStarted)
        display_error()
    else {
        $('#home').hide();
        $('#attendance').hide();
        $('#sentiment').hide();
        $('#activator').show();
        $('#default_error').hide();
    }
}

function start_class() {
    isStarted = true
    $('#cameras').show();

}

function end_class() {
    isStarted = false
    $('#cameras').hide();
}

function get_images() {
    if (isStarted) {
        $('#camera1').find('img').attr('src', './static/cam1.jpg');
        $('#camera2').find('img').attr('src', './static/cam2.jpg');
        $('#camera3').find('img').attr('src', './static/cam3.jpg');
    }
}

setInterval(function() {
    get_images() // this will run after every 5 seconds
}, 5000);

function logout() {
    window.location = 'logout'
}

function display_error() {
    $('#home').hide();
    $('#attendance').hide();
    $('#sentiment').hide();
    $('#activator').hide();
    $('#default_error').show();
}

function check_session() {

}