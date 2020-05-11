import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC27xGO-VcG8kK7rblL__V_5eQWJz0OomM",
    authDomain: "expensify-d38d7.firebaseapp.com",
    databaseURL: "https://expensify-d38d7.firebaseio.com",
    projectId: "expensify-d38d7",
    storageBucket: "expensify-d38d7.appspot.com",
    messagingSenderId: "951355796246",
    appId: "1:951355796246:web:63e28d412118742974fe37",
    measurementId: "G-5M0HXS6376"
  };

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export {firebase, googleAuthProvider, database as default}

// database.ref().on('value',(snpashot) => {
//     const val = snpashot.val();
// })


// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// });
// database.ref('notes').push({
//     title: 'Lessons',
//     body: 'Python'
// });

// database.ref('expensify-d38d7')
//     .once('value')
//     .then((snpashot) => {
//         const expenses = [];

//         snpashot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//     });

//     database.ref('expenses').on('child_removed', (snpashot) => {
//         console.log(snapshot.key, snapshot.val());
//     })