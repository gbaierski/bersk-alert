actualType = null;
actualAction = null;

/**
 * @param {string} type Type of alert (info | success | error | confirm | delete).
 * @param {string} text Alert text.
 * @param {string} action Name of the function that will be executed after confirmation (confirm | delete).
**/
function showAlert(type, text = null, action = null) {

    let types = ['info', 'success', 'error', 'confirm', 'delete'];

    if(type != null && types.includes(type)) {
        document.getElementById(type).style = "display: block";

        if(text != null) {
            document.getElementById(type+"-text").innerHTML = text;
        }

        if(type == "confirm" || type == "delete") {
            actualType = type;
            if(action != null) {
                actualAction = action+"()";
            } else {
                actualAction = "closeAlert('" + type + "')";
                console.info("Required to inform an action for alerts of the type: confirm, delete.")
            }
        }
    } else {
        console.error("Required to enter a valid alert type.\n Valid types: info, success, error, confirm, delete.\n Informed: " + type);
    }
}

function confirmAlert() {
    if(actualAction != null) {
        eval(actualAction);
        fechar(actualType);
        actualType = null;
        actualAction = null;
    }
}

function closeAlert(type) {
    document.getElementById(type).style = "display: none";
}