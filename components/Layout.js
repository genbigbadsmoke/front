import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Layout({ title, children }) {

  return (
    <>
      <Head>
        <title>{title ? title + ' Store' : 'BMS'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between ">
        <header>
          <div className="flex h-16 items-center px-16 justify-end shadow-md">
            <div className='justify-start'>
              <Link href="/" legacyBehavior>
                <a className="p-2 ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                  
                </a>
              </Link>
            </div>
          </div>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-between px-2 items-center shadow-inner">
            <p>Zuri.Internship</p>
            <p>Zuri.Internship</p>
            <p>Zuri.Internship</p>

        </footer>
      </div>
    </>
  );
}
