import { IMG_INFO_LOGO } from '@constants/images/images.constants';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

interface ISideBar {
    categories: string[];
    currentCategory: string;
    setCurrentCategory: Dispatch<SetStateAction<string>>;
}

const SideBar: React.FC<ISideBar> = ({ categories, currentCategory, setCurrentCategory }) => {
    return (
        <Wrap>
            <VisitorCountWrap>
                <p>누적 방문 수 : 1</p>
                <p>오늘 방문 수 : 0</p>
            </VisitorCountWrap>
            <MyProfileWrap>
                <ProfileImageWrap>
                    <Image src={IMG_INFO_LOGO} fill alt="Numakey 로고" />
                </ProfileImageWrap>
                <InfoWrap>
                    <h3>Numakey의 개발 블로그</h3>
                    <p>Dev Numakey</p>
                </InfoWrap>
                <AboutButton>About Me</AboutButton>
            </MyProfileWrap>
            <CategoriesWrap>
                {categories.map((category) => (
                    <button
                        css={
                            currentCategory === category
                                ? css`
                                      color: #325eea;
                                      background-color: #eaeefd;
                                  `
                                : css`
                                      background-color: #ffffff;
                                      color: #474747;
                                  `
                        }
                        onClick={() => setCurrentCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </CategoriesWrap>
        </Wrap>
    );
};

export default SideBar;

const Wrap = styled.aside`
    width: 20%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
`;

const VisitorCountWrap = styled.div`
    display: flex;
    justify-content: space-around;

    p {
        font-size: 16px;
        color: gray;
        font-weight: 400;
        margin: 0;
    }
`;

const MyProfileWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    border-bottom: 1px solid lightgray;
    padding-bottom: 20px;
`;

const ProfileImageWrap = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
`;

const InfoWrap = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    justify-content: flex-start;
    align-items: center;

    h3 {
        font-size: 18px;
        color: #303030;
    }

    p {
        color: gray;
        font-weight: 400;
    }
`;

const CategoriesWrap = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px 10px;

    button {
        width: 100%;
        height: 40px;
        font-size: 16px;
        border-radius: 20px;
        cursor: pointer;
        border: 1px solid rgba(0, 0, 0, 0.125);
    }
`;

const AboutButton = styled.button`
    width: 55%;
    height: 40px;
    font-size: 20px;
    padding: 4px 0;
    border-radius: 10px;
    border: 0;
    cursor: pointer;
    background-color: #ffffff;
    font-weight: 500;
    color: #474747;
    border: 2px solid rgba(0, 0, 0, 0.125);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.125s ease-in 0s;

    &:hover {
        background-color: #e0e0e0;
    }
`;
