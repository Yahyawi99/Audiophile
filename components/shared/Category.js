import React from "react";
import { categories } from "../../data";
import Link from "next/link";
// icons
import { MdKeyboardArrowRight } from "react-icons/md";
// css
import categoryStyles from "../../styles/shared/Category.module.css";

function Category() {
  return (
    <section className={categoryStyles.container}>
      {categories.map((e) => {
        const { id, title, href, src } = e;

        return (
          <div key={id}>
            <img src={src} alt={title} />

            <h2>{title}</h2>

            <Link href={href}>
              <button>
                <p>SHOP</p>
                <MdKeyboardArrowRight />
              </button>
            </Link>
          </div>
        );
      })}
    </section>
  );
}

export default Category;
