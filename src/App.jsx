import './App.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

export const App = () => {
  const postsDatabase = postsFromServer.map(postEl => {
    const comments = commentsFromServer.filter(
      commentEl => commentEl.postId === postEl.id,
    );
    const user = usersFromServer?.find(
      userData => userData.id === postEl.userId,
    );

    return { ...postEl, comments, user };
  });

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList postsDatabase={postsDatabase} />
    </section>
  );
};
