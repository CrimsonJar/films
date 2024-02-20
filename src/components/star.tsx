import React from "react";
import PropTypes from "prop-types";

const star = (props: { count: number }) => {
  const stars = [];
  if (props.count > 5 || props.count < 0) {
    let i = 0;
    stars.push(
      <svg
        fill='#D3BCA2'
        height='28'
        viewBox='0 0 18 18'
        width='28'
        xmlns='http://www.w3.org/2000/svg'
        key={i}
      >
        <path d='M0 0h18v18H0z' fill='none' />
      </svg>
    );
  } else {
    for (let i = 0; i < props.count; i++) {
      stars.push(
        <svg
          fill='#D3BCA2'
          height='28'
          viewBox='0 0 18 18'
          width='28'
          xmlns='http://www.w3.org/2000/svg'
          key={i}
        >
          <path d='M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z' />
        </svg>
      );
    }
  }

  return <li>{stars}</li>;
};

export default star;
