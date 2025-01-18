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

async function main(){
  const file = await downloadFile(url);
  console.log(file);

  const compressedFile = await compressFile(file);
  console.log(compressedFile);

  const uploadURL = await uploadFile(compressedFile);
  console.log(uploadURL);
}

main();

