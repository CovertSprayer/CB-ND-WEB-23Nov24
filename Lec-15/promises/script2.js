function downloadFile(url){
  console.log("File started to download")
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const file = url.split('/').pop();
      resolve(file);
    }, 3000);
  })
}

function compressFile(file){
  console.log("File started to compress");
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      const compressedFile = file.split('.')[0] + ".zip";
      resolve(compressedFile);
    }, 2000)
  })
}

function uploadFile(file){
  console.log("Uploading...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const url = "https://www.cloud.facebook.com/" + file;
      resolve(url);
    }, 4000);
  })
}

const url = "https://www.facebook.com/photo.jpg";

downloadFile(url)
  .then(file => compressFile(file))
  .then(file => uploadFile(file))
  .then(url => console.log(url))

  /*
downloadFile(url)
  .then((file)=>{
    console.log(file);
    return compressFile(file);
  })
  .then((compressedFile)=>{
    console.log(compressedFile);
    return uploadFile(compressedFile);
  })
  .then((uploadURL)=>{
    console.log(uploadURL);
  })
  .catch((err)=>{
    console.log(err);
  })
  */

// downloadFile(url)
//   .then((file)=>{
//     console.log(file)
//     compressFile(file)
//       .then((compressedFile)=>{
//         console.log(compressedFile);
//         uploadFile()
//           .then((uploadURL)=>{
//             console.log(uploadURL);
//           })
//       })
//   })



// downloadFile(url, (file, err)=>{
//     console.log(file);
//     compressFile(file, (compressedFile)=>{
//       console.log(compressedFile);
//       uploadFile(compressedFile, (uploadURL)=>{
//         console.log(uploadURL);
//       })
//     })
// })

