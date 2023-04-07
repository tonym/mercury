import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import usePosts, { UsePosts } from '../hooks/usePosts';

export default function Home() {
  const { data, error }: UsePosts = usePosts();

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h2>Blog</h2>
        <ul>
          {data
            ? data.entries.map(({ uid, published_at, title }) => (
                <li className={utilStyles.listItem} key={uid}>
                  <Link href={`/posts/${uid}`}>{title}</Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={published_at} />
                  </small>
                </li>
              ))
            : null}
        </ul>
      </section>
    </Layout>
  );
}
