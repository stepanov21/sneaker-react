import React from "react";
import img from "../../assets/image5.jpg";
import styles from "./Aside.module.scss";

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.aside__wrapper}>
        <div className={styles.topPart}>
          <h3>Корзина</h3>
          <div className={styles.vcard}>
            <img src={img} width={70} height={70} alt="" />
            <div className={styles.vcard__descr}>
              <span>Мужские Кроссовки Nike Air Max 270</span>
              <b>12 999 руб.</b>
            </div>
            <button>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z"
                  fill="#B5B5B5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.bottomPart}>
          <div className={styles.total}>
            <span>Итого:</span>
            <b>21 498 руб.</b>
          </div>
          <div className={styles.tax}>
            <span>Налог 5%:</span>
            <b>1074 руб.</b>
          </div>
          <button>
            Оформить заказ
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
