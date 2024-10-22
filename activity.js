var connection = new Postmonger.Session();
//STARTUP SEQUENCE
connection.trigger('ready');

connection.on('initActivity', fuction(data)

{
document.getElementById('configuration').value = JSON.stringyfy( data, null,2);
});

//SAVE SEQUENCE
connection.on('clickedNext',function())
{
var configuration= JSON.parse(document.getElementById('configuration').value);
connection.trigger('updateActivity', configuration);
});

