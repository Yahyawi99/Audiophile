import React from "react";
import { products } from "../../data";
// css
import galleryStyles from "../../styles/product/Gallery.module.css";

function Gallery({ product }) {
  const SingleProduct = products.filter((e) => e.slug === product);

  return (
    <section className={galleryStyles.container}>
      {SingleProduct.length &&
        SingleProduct.map((e) => {
          const {
            id,
            gallery: { first, second, third },
          } = e;

          return (
            <div key={id}>
              <div>
                <div
                  id={galleryStyles.image}
                  style={{
                    background: `url(${first["mobile"]})`,
                  }}
                ></div>
                <div
                  id={galleryStyles.image}
                  style={{
                    background: `url(${second["mobile"]})`,
                  }}
                ></div>
              </div>

              <div
                id={galleryStyles.image}
                style={{
                  background: `url(${third["desktop"]})`,
                }}
              ></div>
            </div>
          );
        })}
    </section>
  );
}

export default Gallery;
