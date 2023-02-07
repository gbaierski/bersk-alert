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

function mountAlerts() {
    document.body.innerHTML += '<div id="info" class="alert"><div class="alert-content"><div id="info-header" class="alert-header"><span class="alert-close" onclick="closeAlert(\'info\')">&times;</span><h2 class="alert-title">Information:</h2></div><div class="alert-body"><p id="info-text" class="alert-text">Oops! We are still developing this part of the system! :)</p><div class="alert-actions"><button type="button" class="alert-button" id="info-button" onclick="closeAlert(\'info\')">OK</button></div></div></div></div>';
    document.body.innerHTML += '<div id="success" class="alert"><div class="alert-content"><div id="success-header" class="alert-header"><span class="alert-close" onclick="closeAlert(\'success\')">&times;</span><h2 class="alert-title">Success!</h2></div><div class="alert-body"><p id="success-text" class="alert-text">Everything went as expected! What good thing!</p><div class="alert-actions"><button type="button" class="alert-button" id="success-button" onclick="closeAlert(\'success\')">OK</button></div></div></div></div>';
    document.body.innerHTML += '<div id="error" class="alert"><div class="alert-content"><div id="error-header" class="alert-header"><span class="alert-close" onclick="closeAlert(\'error\')">&times;</span><h2 class="alert-title">Error:</h2></div><div class="alert-body"><p id="error-text" class="alert-text">Something went wrong, please contact support.</p><div class="alert-actions"><button type="button" class="alert-button" id="error-button" onclick="closeAlert(\'error\')">OK</button></div></div></div></div>';
    document.body.innerHTML += '<div id="confirm" class="alert"><div class="alert-content"><div id="confirm-header" class="alert-header"><span class="alert-close" onclick="closeAlert(\'confirm\')">&times;</span><h2 class="alert-title">Please confirm:</h2></div><div class="alert-body"><p id="confirm-text" class="alert-text">Do you want to cancel or confirm the action?</p><div class="alert-actions"><button type="button" class="alert-button" onclick="closeAlert(\'confirm\')">Cancel</button><button type="button" class="alert-button" id="confirm-button" onclick="confirmAlert()">Confirm</button></div></div></div></div>';
    document.body.innerHTML += '<div id="delete" class="alert"><div class="alert-content"><div id="delete-header" class="alert-header"><span class="alert-close" onclick="closeAlert(\'delete\')">&times;</span><h2 class="alert-title">Do you really want to delete?</h2></div><div class="alert-body"><p id="delete-text" class="alert-text">Think carefully! Deleting the item will be permanent.</p><div class="alert-actions"><button type="button" class="alert-button" onclick="closeAlert(\'delete\')">Cancel</button><button type="button" class="alert-button" id="delete-button" onclick="confirmAlert()">Delete</button></div></div></div></div>';
}

window.onload = function() {
    mountAlerts();
}