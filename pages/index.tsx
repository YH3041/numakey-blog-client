import PostList from '@components/post/postList';
import SideBar from '@components/sideBar';
import { IPost } from '@constants/types/types.constants';
import styled from '@emotion/styled';
import axios from 'axios';
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query } = context;
    const { data: posts } = await axios.get(`http://localhost:3000/api/post?category=${query.category}`);
    const { data: categories } = await axios.get('http://localhost:3000/api/category');
    return { props: { posts, categories } };
};

interface IHome {
    posts: IPost[];
    categories: string[];
}

const Home: NextPage<IHome> = ({ posts, categories }) => {
    const router = useRouter();
    const [currentCategory, setCurrentCategory] = useState<string>('ALL');

    useEffect(() => {
        router.push(`/?category=${currentCategory}`);
    }, [currentCategory]);

    return (
        <Wrap>
            <SideBar categories={categories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
            <Section>
                <PostList posts={posts} />
            </Section>
        </Wrap>
    );
};

export default Home;

const Wrap = styled.main`
    width: 100%;
    max-width: 1376px;
    display: flex;
    margin: 0 auto;
    column-gap: 30px;
    padding-top: 40px;
`;

const Section = styled.section`
    width: 80%;
`;
