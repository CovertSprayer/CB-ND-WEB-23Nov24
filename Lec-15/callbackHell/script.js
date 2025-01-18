
function downloadFile(url, callback){
  console.log("File started to download")
  setTimeout(() => {
    const file = url.split('/').pop();
    const err = null;
    // if(!file) err = new Error("Something went Wrong");
    callback(file, compressFile);
  }, 3000);
}

function compressFile(file, callback){
  console.log("File started to compress");
  setTimeout(()=>{
    const compressedFile = file.split('.')[0] + ".zip";
    callback(compressedFile, err);
  }, 2000)
}

function uploadFile(file, callback){
  console.log("Uploading...");
  setTimeout(() => {
    const url = "https://www.cloud.facebook.com/" + file;
    callback(url);
  }, 4000);
}

const url = "https://www.facebook.com/photo.jpg";

downloadFile(url, (file, err)=>{
    console.log(file);
    compressFile(file, (compressedFile)=>{
      console.log(compressedFile);
      uploadFile(compressedFile, (uploadURL)=>{
        console.log(uploadURL);
      })
    })
})


// downloadFile(url, (file)=>{
//   console.log(file);
//   uploadFile(file, (uploadURL)=>{
//     console.log(uploadURL);
//   })
// })









// const arr = [1,2,3,4];

// function map(cb){
//   for(let i=0; i<arr.length; i++){
//     cb(arr[i], i, arr);
//   }
// }

// arr.map((num, ind, arr)=>{

// })
