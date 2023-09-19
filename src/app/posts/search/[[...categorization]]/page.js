import { posts } from "../../../../static";
import { formatDate } from "../../../../utils";
import styles from "../../../page.module.css";
import Link from "next/link";

// params: contiens une LISTE (voire les ... dans le nom de la route !) des paramétres de la route sous le nom du paramétre précisé (dans ce cas, categorization)
// searchParams: un objet avec les clés / valeurs du query: non précisés en avance (aucun besoin de modifier le chemin ou le nom de la route pour les modifier)
// Rappel sur la déstructuration: { params: { categorization } } c'est le même que const categorization = props.params.categorization;
export default function Search({ params: { categorization }, searchParams }) {
  let postList = posts.filter(
    post =>
      !categorization ||
      categorization.every(
        (el, i) => post.categorization[i]?.toLowerCase() === el.toLowerCase()
      )
  );

  //   console.log(postList);
  //   if (searchParams?.title)
  if (searchParams?.q)
    postList = postList.filter(post =>
      post.tags.some(tag =>
        tag.toLowerCase().includes(searchParams.q.toLowerCase())
      )
    );
  return (
    <main className={styles.main}>
      <div className={styles.list}>
        {postList.map(post => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            style={{ alignSelf: "flex-start" }}
          >
            <h1>{post.title}</h1>
            <h2>
              {post.createdBy}, {formatDate(post.createdAt)}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
