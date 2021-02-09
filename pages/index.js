import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import FsLightbox from 'fslightbox-react';

const imageSources = [
  'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1612824991870-125445007b14?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1612824266241-9b810de083f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=605&q=80',
  'https://images.unsplash.com/photo-1612823600885-70490b07dd28?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
];

export default function Home() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    sourceIndex: 0
  });

  const openLightboxOnSlide = (index) => () => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      sourceIndex: index
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        {imageSources.map((source, index) => (
          <img src={source} onClick={openLightboxOnSlide(index)} key={source} />
        ))}
        <FsLightbox
          toggler={lightboxController.toggler}
          sourceIndex={lightboxController.sourceIndex}
          sources={imageSources}
        />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
