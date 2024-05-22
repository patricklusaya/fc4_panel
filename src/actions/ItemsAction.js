import firebase from "firebase";


import {

    IMAGE_SET

} from "./Types";




export const toggleMenu = (isToggled) => {

    return(dispatch) => {  
      
      }
};

export const imageSet = (value) => {

    const imageID = Math.random().toString(36).substring(6).toUpperCase();


    return(dispatch) => {

        const uploadTask = firebase.storage().ref(`assets/items/${imageID}`)
            .put(value);

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function(snapshot) {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                    default:
                }
            }, function(error) {

                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;

                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                    default:
                }
            }, function() {
                // Upload completed successfully, now we can get the download URL
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    console.log('File available at', downloadURL);
                    dispatch({
                        type: IMAGE_SET,
                        payload: {downloadURL, imageID}
                    })
                });
            });
    };
};



export const addItem = (itemName, activePlayer, setImage, shortName,) => {


    const itemID = Math.random().toString(36).substring(6).toUpperCase();

    return(dispatch) => {

        // dispatch({ type: SAVE_NEWS });

        firebase.firestore().collection('gameItems').doc(itemID)
            .set( {itemName, type:activePlayer, image:setImage, shortName:shortName}, { merge: true})
            .then(() => {
                //if company profile is saved successfully, execute
            console.log(" saved successfully");

                // dispatch ({ type: SAVE_NEWS_SUCCESSFUL });
                // message.success("Football news is saved successfully");

            })
            .catch((error) => {
                console.log(error);
                console.log("error encountered while saving football news");
                // dispatch({ type: SAVE_NEWS_FAILED});
                // message.error("Failed to save football news");
            })
    };

};



