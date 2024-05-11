importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging.js");

firebase.initializeApp({
           apiKey:  "AIzaSyAFBKdttNx5fGBfSqBb_oaBnN1w8541Ywo",
           authDomain: "tischkicker-2cb9e.firebaseapp.com",
           projectId: "tischkicker-2cb9e",
           storageBucket:  "tischkicker-2cb9e.appspot.com",
           messagingSenderId: "328540746054",
           appId: "1:328540746054:ios:3231e4848ebb05fca87547",
           measurementId: "G-M2TEQ6TD2Z"
});


const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            return registration.showNotification("New Message");
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});