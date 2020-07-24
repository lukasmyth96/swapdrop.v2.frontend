export function getCroppedImage(image, crop, fileName, extension) {
  // crop is relative (0-100)
 
    const canvas = document.createElement('canvas');

    const width = image.naturalWidth * crop.width / 100;
    const height = image.naturalHeight * crop.height / 100;
    const x = image.naturalWidth * crop.x / 100;
    const y = image.naturalHeight * crop.y / 100;

    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
   
    ctx.drawImage(
      image,
      x,
      y,
      width,
      height,
      0,
      0,
      width,
      height
    );
  
    // As a blob
    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        const file = new File([blob], fileName)
        resolve(file);
      }, `image/`);
    });
  }


// Extract an Base64 Image's File Extension
export function extractImageFileExtensionFromBase64 (base64Data) {
  return base64Data.substring('data:image/'.length, base64Data.indexOf(';base64'))
}