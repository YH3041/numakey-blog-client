import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import NaverProvider from 'next-auth/providers/naver';
import KakaoProvider from 'next-auth/providers/kakao';

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.KAKAO_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_SECRET!
        }),
        NaverProvider({
            clientId: process.env.NAVER_CLIENT_ID!,
            clientSecret: process.env.NAVER_SECRET!
        }),
        KakaoProvider({
            clientId: process.env.KAKAO_CLIENT_ID!,
            clientSecret: process.env.KAKAO_SECRET!
        })
    ]
};

export default NextAuth(authOptions);
