import { useState, useEffect } from "react";

export function useNewImage() {
  const [imgSrc, setImgSrc] = useState("");
  useEffect(() => {
    const randomImageIndex = Math.floor(Math.random() * 1000);
    fetch(
      `https://source.unsplash.com/200x200/?sig=${randomImageIndex}`
    ).then(({ url }) => setImgSrc(url));
  }, []);

  return imgSrc;
}
