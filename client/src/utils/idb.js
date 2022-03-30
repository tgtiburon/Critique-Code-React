let db;

const request = indexedDB.open('critique_code', 1);

request.onupgradeneeded = function(e) {
    const db = e.target.result;

    db.createObjectStore('new_transaction', { autoIncrement: true } );

    console.log(db);
};

request.onsuccess = function(e) {
    db = e.target.result;

    if(navigator.onLine)
        uploadRecord();
};

request.onerror = function(e) {
    console.log(e.target.errorCode);
}

function saveRecord(record) {
    console.log('adding record to indexeddb');
    const transaction = db.transaction(['new_transaction'], 'readwrite');

    const transactionObjectStore = transaction.objectStore('new_transaction');

    transactionObjectStore.add(record);
}

function uploadRecord() {
    const transaction = db.transaction(['new_transaction'], 'readwrite');

    const transactionObjectStore = transaction.objectStore('new_transaction');

    const getAll = transactionObjectStore.getAll();

    getAll.onsuccess = function() {
        // if there was data in the db => 
        if(getAll.result.length > 0) {
            fetch('/api/transaction', {
                method: 'POST',
                body: JSON.stringify(getAll.result),
                headers: {
                    Accept: 'application/json, text/plain */*',
                    'Content-Type': 'application/json'
                }
            })
                .then(res =>  res.json())
                .then((serverRes) => {
                    if(serverRes.message) throw new Error(serverRes);

                    // open one more transaction
                    const transaction = db.transaction(['new_transaction'], 'readwrite');
                    const transactionObjectStore = transaction.objectStore('new_transaction');

                    transactionObjectStore.clear();

                    console.log('All transaction data has been submitted');
                })
                .catch(err => {
                    console.log(err);
                });
        }
    };
}

window.addEventListener('online', uploadRecord);