import { IMG_GOOGLE_LOGO, IMG_KAKAO_LOGO, IMG_NAVER_LOGO } from '@constants/images/images.constants';
import { LOGIN_TYPES } from './types.constants';

export const SOCIAL_LOGINS: { type: LOGIN_TYPES; logo: string }[] = [
    { type: 'google', logo: IMG_GOOGLE_LOGO },
    { type: 'naver', logo: IMG_NAVER_LOGO },
    { type: 'kakao', logo: IMG_KAKAO_LOGO }
];
