import Image from 'next/image';
import Link from 'next/link';
import { IPost } from '@constants/types/types.constants';
import styled from '@emotion/styled';

const Post: React.FC<{ post: IPost }> = ({ post }) => {
    const { id, thumbnailUrl, title, description } = post;
    return (
        <Link href={`https://goebal.tistory.com/${id}`}>
            <Wrap>
                <ThumbnailImageWrap>
                    <Image src={thumbnailUrl} fill alt={title} />
                </ThumbnailImageWrap>
                <InfoWrap>
                    <h3>{title}</h3>
                    <p>{`${description.slice(0, 100)}...`}</p>
                </InfoWrap>
            </Wrap>
        </Link>
    );
};

export default Post;

const Wrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    row-gap: 24px;
    border: 1px solid rgba(0, 0, 0, 0.125);
    transition: ease-in 0s, transform 0.3s ease-in 0s;

    &:hover {
        transform: translateY(-20px);
    }
`;

const ThumbnailImageWrap = styled.div`
    width: 100%;
    height: 210px;
    position: relative;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);

    img {
        object-fit: cover;
    }
`;

const InfoWrap = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding: 0 16px 16px 16px;

    h3 {
        line-height: 1.5;
    }

    p {
        font-size: 14px;
        line-height: 1.55;
        opacity: 0.6;
        font-weight: 400;
    }
`;
