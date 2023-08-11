const getCroppedImageUrl = (url: string, w: number, h: number) => {
  const originalUrl = url.split("/media/");
  const croppedUrl = `${originalUrl[0]}/media/crop/${w}/${h}/${originalUrl[1]}`;
  return croppedUrl;
};

export default getCroppedImageUrl;
