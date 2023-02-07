<link rel="stylesheet" type="text/css" href="alert.css"/>
<script type="text/javascript" src='alert.js'></script>

<div id="info" class="alert">
    <div class="alert-content">
        <div id="info-header" class="alert-header">
            <span class="alert-close" onclick="closeAlert('info')">&times;</span>
            <h2 class="alert-title">Information:</h2>
        </div>
        <div class="alert-body">
            <p id="info-text" class="alert-text">Oops! We are still developing this part of the system! :)</p>
            <div class="alert-actions">
                <button type="button" class="alert-button" id="info-button" onclick="closeAlert('info')">OK</button>
            </div>
        </div>
    </div>
</div>

<div id="confirm" class="alert">
    <div class="alert-content">
        <div id="confirm-header" class="alert-header">
            <span class="alert-close" onclick="closeAlert('confirm')">&times;</span>
            <h2 class="alert-title">Please confirm:</h2>
        </div>
        <div class="alert-body">
            <p id="confirm-text" class="alert-text">Do you want to cancel or confirm the action?</p>
            <div class="alert-actions">
                <button type="button" class="alert-button" onclick="closeAlert('confirm')">Cancel</button>
                <button type="button" class="alert-button" id="confirm-button" onclick="confirmAlert()">Confirm</button>
            </div>
        </div>
    </div>
</div>

<div id="success" class="alert">
    <div class="alert-content">
        <div id="success-header" class="alert-header">
            <span class="alert-close" onclick="closeAlert('success')">&times;</span>
            <h2 class="alert-title">Success!</h2>
        </div>
        <div class="alert-body">
            <p id="success-text" class="alert-text">Everything went as expected! What good thing!</p>
            <div class="alert-actions">
                <button type="button" class="alert-button" id="success-button" onclick="closeAlert('success')">OK</button>
            </div>
        </div>
    </div>
</div>

<div id="error" class="alert">
    <div class="alert-content">
        <div id="error-header" class="alert-header">
            <span class="alert-close" onclick="closeAlert('error')">&times;</span>
            <h2 class="alert-title">Error:</h2>
        </div>
        <div class="alert-body">
            <p id="error-text" class="alert-text">Something went wrong, please contact support.</p>
            <div class="alert-actions">
                <button type="button" class="alert-button" id="error-button" onclick="closeAlert('error')">OK</button>
            </div>
        </div>
    </div>
</div>

<div id="delete" class="alert">
    <div class="alert-content">
        <div id="delete-header" class="alert-header">
            <span class="alert-close" onclick="closeAlert('delete')">&times;</span>
            <h2 class="alert-title">Do you really want to delete?</h2>
        </div>
        <div class="alert-body">
            <p id="delete-text" class="alert-text">Think carefully! Deleting the item will be permanent.</p>
            <div class="alert-actions">
                <button type="button" class="alert-button" onclick="closeAlert('delete')">Cancel</button>
                <button type="button" class="alert-button" id="delete-button" onclick="confirmAlert()">Delete</button>
            </div>
        </div>
    </div>
</div>