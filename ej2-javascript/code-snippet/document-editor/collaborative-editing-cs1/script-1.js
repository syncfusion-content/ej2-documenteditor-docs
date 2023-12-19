let connectionId = "";

var connection = new signalR.HubConnectionBuilder().withUrl(serviceUrl + '/documenteditorhub', {
    skipNegotiation: true,
    transport: signalR.HttpTransportType.WebSockets
}).withAutomaticReconnect().build();

connection.onclose(async () => {
    if (connection.state === signalR.HubConnectionState.Disconnected) {
        alert('Connection lost. Please relod the browser to continue.');
    }
});

async function start(data) {
    try {
        connection.start().then(function () {
            // Join the collaborative editing session with the specified room name.
            connection.send('JoinGroup', { roomName: data.roomName, currentUser: data.currentUser });
            console.log('server connected!!!');
        });
    } catch (err) {
        console.log(err);
        setTimeout(start, 5000);
    }
};
// Event handler to handle data received
connection.on('dataReceived', onDataRecived.bind(this));

function onDataRecived(action, data) {
    if (connections) {
        if (action == 'connectionId') {
            connectionId = data;
        } else if (connectionId != data.connectionId) {
            if (action == 'action' || action == 'addUser') {
                // Add user info when new user join the collaborative editing session.
                titleBar.addUser(data);
            } else if (action == 'removeUser') {
                // Remove user info from title bar once user is disconnected.
                titleBar.removeUser(data);
            }
        }
        // Apply remote changes to current document.
        connections.applyRemoteAction(action, data);
    }
}
