'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { useCallback } from 'react';
import { LOGIN_TYPES } from '@constants/types/types.constants';
import { SOCIAL_LOGINS } from '@constants/types/login.constants';
import { IMG_LOGO } from '@constants/images/images.constants';
import styled from '@emotion/styled';

const Header = () => {
    const router = useRouter();
    const { data: session } = useSession();

    const loginHandler = useCallback((type: LOGIN_TYPES) => {
        switch (type) {
            case 'normal':
                router.push('/auth/login');
                break;
            case 'google':
                signIn('google');
                break;
            case 'naver':
                signIn('naver');
                break;
            case 'kakao':
                signIn('kakao');
                break;
            default:
                return;
        }
    }, []);

    return (
        <>
            <Wrap>
                <LogoWrap>
                    <Image src={IMG_LOGO} fill alt="Numakey 로고" sizes="(max-width: 500px) 100vw, 50vw" />
                </LogoWrap>
                <MenuWrap>
                    <button onClick={() => loginHandler('normal')}>로그인</button>
                    {SOCIAL_LOGINS.map((social) => (
                        <SocialLogoWrap key={social.type} onClick={() => loginHandler(social.type)}>
                            <Image src={social.logo} fill alt={`${social.type} 로고`} />
                        </SocialLogoWrap>
                    ))}
                </MenuWrap>
            </Wrap>
            <Hr />
        </>
    );
};

export default Header;

const Wrap = styled.header`
    width: 100%;
    max-width: 1376px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const LogoWrap = styled.div`
    width: 200px;
    height: 80px;
    position: relative;
`;

const MenuWrap = styled.nav`
    display: flex;
    align-items: center;
    column-gap: 24px;

    button {
        padding: 6px 24px;
        height: 40px;
        background-color: #212529;
        color: #ffffff;
        border-radius: 20px;
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;
        transition: all 0.125s ease-in 0s;
        word-break: keep-all;

        &:hover {
            opacity: 0.9;
        }
    }
`;

const SocialLogoWrap = styled.div`
    width: 32px;
    height: 32px;
    position: relative;
    cursor: pointer;
`;

const Hr = styled.hr`
    width: 100%;
    border-top: 1px solid lightgray;
`;
