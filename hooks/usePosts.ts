import useSWR, { Fetcher } from 'swr';
import { Post } from '../types/csTypes';

export interface Posts {
  entries: Post[];
}

export interface UsePosts {
  data: Posts | undefined;
  error: Error | undefined;
}

const usePosts = (): UsePosts => {
  const url =
    'https://cdn.contentstack.io/v3/content_types/post/entries?environment=development&desc=published_at';
  const options: RequestInit = {
    headers: {
      access_token: 'cs10dbe50d387b7da55903ae9b',
      api_key: 'blt0de4b089a2dc0330',
      'Content-Type': 'application/json'
    }
  };
  const fetcher: Fetcher<Posts, [string, RequestInit]> = ([url, options]) =>
    fetch(url, options).then((res) => res.json());

  const { data, error } = useSWR<Posts, Error>([url, options], fetcher);

  return { data, error };
};

export default usePosts;
