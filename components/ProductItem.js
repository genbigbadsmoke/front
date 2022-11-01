/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function ProductItem({ product }) {
  return (
    <div className="card flex-col items-center justify-center ">
      <div className='flex flex-col items-center justify-center p-5'>
      <Link href={`/product/${product.slug}`} legacyBehavior>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded-full w-21 h-20 items-center shadow object-cover w-full"
          />
        </a>
      </Link>
      </div>
      <div className="flex flex-col justify-around">
        <div className='flex flex-col py-5'>
        <button
          className="primary-button"
          type="button"
        >
          Add to cart
        </button>
        </div>

        <div className='flex flex-col py-5'>
        <button
          className="primary-button"
          type="button"
        >
          Add to cart
        </button>
        </div>

        <div className='flex flex-col py-5'>
        <button
          className="primary-button"
          type="button"
        >
          Add to cart
        </button>
        </div>

        <div className='flex flex-col py-5'>
        <button
          className="primary-button"
          type="button"
        >
          Add to cart
        </button>
        </div>

        
      </div>
    </div>
  );
}
