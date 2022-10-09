var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyEimDg8ysvr5SaR'}).base('applQc4ted1faPvQI');

module.exports = async function () {
    var introductions = [];
base('Introductions').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"
}).eachPage(function page(records) {
    // This function (`page`) will get called for each page of records.

    
    records.forEach(function(record) {
        //console.info(record);
        introductions.push(record.get('Introduction'));
        //console.log('Retrieved', record.get('Introduction'));
    });

    //console.info(JSON.stringify(introductions));
    

}, function done(err) {
    if (err) { console.error(err); return; }
});
return await JSON.stringify(introductions);
}