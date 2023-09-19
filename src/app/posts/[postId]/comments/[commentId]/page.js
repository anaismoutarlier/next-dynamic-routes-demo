import { posts } from "../../../../../static";
import { formatDate } from "../../../../../utils";
import styles from "../../../../page.module.css";
import Link from "next/link";

export default function Comments({ params: { postId, commentId } }) {
  // retrouve le post par le postId
  const post = posts.find(post => String(post.id) === postId);
  // trouver le commentaire précis parmis ceux du post via le commentId. Les noms sont set par le nom des dossiers dans la structure du projet!
  const comments = post?.comments.filter(
    comment => String(comment.id) === commentId
  );
  return (
    <main className={styles.main}>
      {comments &&
        comments.map(comment => (
          <Link
            key={comment.id}
            href={`/posts/${postId}/comments/${comment.id}`}
          >
            <h1>{comment.content}</h1>
            <h2>
              {comment.createdBy}, {formatDate(comment.createdAt)}
            </h2>
          </Link>
        ))}
    </main>
  );
}
