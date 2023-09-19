"use client";
import { useState, useEffect } from "react";
import { posts } from "../../../static";
import { formatDate } from "../../../utils";
import styles from "../../page.module.css";
import Link from "next/link";

export default function Post({ params: { postId } }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    // fetch recherche en base de données
    const post = posts.find(post => String(post.id) === postId);
    setPost(post);
  }, []);

  return (
    <main className={styles.main}>
      {post ? (
        <div className={styles.post}>
          <h1>{post.title}</h1>
          <h2>{post.content}</h2>
          <h5>
            {post.createdBy}, {formatDate(post.createdAt)}
          </h5>
          <div>
            <h4>Commentaires: {post.comments.length}</h4>
            {post.comments.map(comment => (
              <Link href={`/posts/${postId}/comments/${comment.id}`}>
                {comment.content} - {comment.createdBy},{" "}
                {formatDate(comment.createdAt)}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <h1>No post found</h1>
      )}
    </main>
  );
}
