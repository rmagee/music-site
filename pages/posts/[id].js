import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'

export default function Post({ postData }) {
    return (
        <Layout>
            <Head><title>{postData.title}</title></Head>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {Date(postData.date)}
            <br />
            <div dangerouslySetInnerHTML={{ __html: postData.content }} />
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    if (params.id !== undefined) {
        const postData = await getPostData(params.id)
        return {
            props: {
                postData
            }
        }
    } else {
        return {
            props: {
                title: "none selected",
                id: "none",
                data: "none"
            }
        }
    }
}