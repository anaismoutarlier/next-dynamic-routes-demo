"use client";
import { posts } from "../../static";
import { formatDate } from "../../utils";
import styles from "../page.module.css";
import Link from "next/link";

export default function Posts() {
  return (
    <main className={styles.main}>
      <div className={styles.list}>
        {posts.map(post => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <div className={styles.post}>
              <h4>{post.title}</h4>
              <p>
                {post.content} -{" "}
                <span>
                  {post.createdBy}, {formatDate(post.createdAt)}
                </span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
