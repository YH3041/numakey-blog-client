import Post from './post';
import { IPost } from '@constants/types/types.constants';
import styled from '@emotion/styled';

interface IPostList {
    posts: IPost[];
}

const PostList: React.FC<IPostList> = ({ posts }) => {
    return (
        <Wrap>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </Wrap>
    );
};

const Wrap = styled.article`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
`;

export default PostList;
