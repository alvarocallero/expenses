const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject('Something went wrong');
    }, 5000);
});

promise.then((data) => {
    console.log('Promise resolved', data);
}).catch((error) => {
    console.log('error: ',error)
});