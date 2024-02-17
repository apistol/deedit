import Axios from "axios";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { Post } from "../types";

import PostCard from "../components/PostCard";
import Layout from "../components/layout/layout";

dayjs.extend(relativeTime);

export default function Droguri() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        Axios.get("/post")
            .then((res) => setPosts(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <Layout>
            <div className="p-20 pt-40 min-h-screen">
                <Head>
                    <title>readit: the front page of the internet</title>
                </Head>
                <div className="container flex pt-4">
                    {/* Posts feed */}
                    <div className="w-160">
                        {posts.map((post) => (
                            <PostCard post={post} key={post.identifier} />
                        ))}
                    </div>
                    {/* Sidebar */}
                </div>
            </div>
        </Layout>
    );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   try {
//     const res = await Axios.get('/posts')

//     return { props: { posts: res.data } }
//   } catch (err) {
//     return { props: { error: 'Something went wrong' } }
//   }
// }
