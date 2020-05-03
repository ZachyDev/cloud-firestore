// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyBrkI2jtF91Vi-fYIAp0djUhNFaABriHbA',
    authDomain: 'cloud-firestore-a8dd6.firebaseapp.com',
    projectId: 'cloud-firestore-a8dd6',
  });
  
  const db = firebase.firestore();
  // enable offline persistence
db.enablePersistence().catch(err => {
    if (err.code == "failed-precondition") {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (err.code == "unimplemented") {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  });
  
