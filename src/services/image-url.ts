const getCroppedImageUrl = (url: string, w: number, h: number) => {
  if (!url) return "https://placehold.co/600x400/EEE/31343C";
  
  const originalUrl = url.split("/media/");
  const croppedUrl = `${originalUrl[0]}/media/crop/${w}/${h}/${originalUrl[1]}`;
  return croppedUrl;
};

export default getCroppedImageUrl;
