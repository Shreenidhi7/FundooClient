// const Blob = RNFetchBlob.polyfill.Blob
// const fs = RNFetchBlob.fs
// window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
// window.Blob = Blob


// export function saveImage(uri) {
//     const imageFile = RNFetchBlob.wrap(uri);
//     var currentUser = firebase.firebase.auth().currentUser;
//     const ref = firebase.firebase.storage().ref(currentUser.email + '/images');
//     var uploadBlob = null;

//     Blob.build(imageFile, { type: 'image/jpg;' })
//         .then((imageBlob) => {
//             uploadBlob = imageBlob;
//             return ref.put(imageBlob, { contentType: 'image/jpg' });
//         })
//         .then(() => {
//             uploadBlob.close();
//             return ref.getDownloadURL();
//         })
//         .then((url) => {
//             // do something with the url if you wish to
//         })
//         .catch(() => {
//             dispatch({
//                 type: UPDATE_PROFILE_INFO_FAIL,
//                 payload: 'Unable to upload profile picture, please try again'
//             });
//         });
//     uploadPic();
// }


// export async function uploadPic() {
//     var user = await firebase.firebase.auth().currentUser;
//     var ref = await firebase.firebase.storage().ref(user.email + '/images');
//     var imgURL = await ref.getDownloadURL();
//     console.warn(imgURL + ': imgURL');
//     uploadImage(imgURL, user.email);
// }

// export function uploadImage(img, email) {
//     Firebase.database.ref('users').orderByChild('email').equalTo(email).on("value", snap => {

//         snap.forEach(function (snap) {
//             var key = snap.key;
//             var info = snap.val();
//             console.warn(img + ': img')
//             addPic(img, info, key)
//         })
//     })
// }


// export function addPic(img, data, key) {
//     data = {
//         profilePic: img
//     }
//     console.warn(data + ': data')
//     updateUser(key, data)
// }

// export function updateUser(key, user) {
//     database.database.ref('/users').child(key).update(user);
// }