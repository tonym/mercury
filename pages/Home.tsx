import Head from 'next/head';
import useSWR, { Fetcher } from 'swr';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import { Post } from '../types/csTypes';

export interface Posts {
  entries: Post[];
}

export default function Home() {
  const url =
    'https://cdn.contentstack.io/v3/content_types/post/entries?environment=development';
  const options: RequestInit = {
    headers: {
      access_token: 'cs10dbe50d387b7da55903ae9b',
      api_key: 'blt0de4b089a2dc0330',
      'Content-Type': 'application/json'
    }
  };
  const fetcher: Fetcher<Posts, [string, RequestInit]> = ([url, options]) =>
    fetch(url, options).then((res) => res.json());

  const { data } = useSWR([url, options], fetcher);

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
