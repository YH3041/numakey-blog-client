import { IPost } from '@constants/types/types.constants';
import type { NextApiRequest, NextApiResponse } from 'next';

const POST_DATA: IPost[] = [
    {
        id: 1,
        title: '고무 오리 문제 해결법',
        thumbnailUrl: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FKWHnw%2Fbtsp7UgmAR2%2FH0LHBGuTLSSwtK60TsrgV0%2Fimg.jpg',
        description:
            '가끔 개발하면서 만난 문제에 대해 고민하다가 도움을 요청하기 위해 문제점에 대한 질문을 작성하면서, 또는 질문하는 과정에서 해답을 찾았던 경험이 자주 있다. 한 번은 질문을 하고 바로 답을 찾아 민망해서 “왜 혼자 그렇게 고민했을 때는 해답이 안나오고 질문하니까 해답이 생각날까요?”',
        category: '끄적끄적'
    },
    {
        id: 2,
        title: '[Next.js] Next.js를 사용하는 이유?',
        thumbnailUrl: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdjQiF3%2Fbtspnjn4OoJ%2FsUY9hl6PTYRQ50vl7GQ3Ak%2Fimg.png',
        description:
            'Next.js란 무엇인가? Next.js는 SSR(Server Side Rendering), SSG(Static Site Generation) 생성 등의 기능을 제공하는 React 기반 프레임워크입니다. Next.js의 필요성? Next.js의 필요성을 쉽게 이해하기 위해서 React 동작 원리에 대해서 먼저 이야기해보면 도움이 될 것이라고 생각합니다.',
        category: 'Next.js'
    },
    {
        id: 3,
        title: '[Next.js 13.4] - Next-auth를 사용해 소셜 로그인 구현하기',
        thumbnailUrl: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcWuHAk%2FbtsplMDLkrm%2FUslgWtWjjyyypSiWkFw6o0%2Fimg.webp',
        description:
            'Next.js로 프로젝트를 진행하는 과정에서 소셜 로그인 기능을 Next-auth로 구현 방법에 대한 글입니다. Next-auth를 사용해 소셜 로그인을 구현하는 방식이 Next-auth를 사용하지 않았을 때와 어떤 차별성과 편의성이 존재하는지 알아보기',
        category: 'Next.js'
    },
    {
        id: 4,
        title: 'React Dev 공식문서 읽기(컴포넌트에 Props 전달하기)',
        thumbnailUrl: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FwKrtn%2FbtslauN10M5%2FgKkEgk5VCkQHr5tLwKt4Ak%2Fimg.webp',
        description:
            'React 공식 문서를 읽으면서 중요하다고 생각하는 부분을 한번 더 되새기며 제가 내용 정리를 통해 다른 분들에게도 도움이 되었으면 하는 바람으로 글을 작성합니다. 1. 컴포넌트 Prop의 기본 값 지정하기',
        category: '끄적끄적'
    },
    {
        id: 5,
        title: '[모던 자바스크립트 Deep Dive] 변수',
        thumbnailUrl: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc7lMgw%2Fbtr1Uus0vNS%2F37H0DNm123hJGXAYFZwBs0%2Fimg.png',
        description:
            '변수란 무엇인가?  왜 필요한가? 컴퓨터는 CPU를 통해 연산하고, 메모리를 통해 데이터를 기억한다. 예를들어 컴퓨터가 10 + 20에 대한 식을 계산하기 위해서 그림 1과 같이 숫자 값들을 임의의 메모리 위치(주소)에 저장하고, CPU는 해당 값들을 읽어 연산을 수행 후 결과 값을 저장한다.',
        category: 'JavaScript'
    },
    {
        id: 6,
        title: '[Next.js] Data Fetching 방법',
        thumbnailUrl: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fvkd0Z%2FbtrSMIk8oHH%2FoUkKfbDK6M7u0GnKKe2AqK%2Fimg.png',
        description:
            'Next.js를 사용하면서 API 데이터를 Fetching 할 수 있는 방법 3가지에 대해 정리해보겠습니다. Data Fetcing 방법에 대한 정리의 필요성은 상황에 따라 어떤 Fetcing 방법이 가장 적합한지 알아보고 선택해서, 적용할 수 있으면 좋을 것 같습니다.',
        category: 'Next.js'
    },
    {
        id: 7,
        title: '[모던 자바스크립트 Deep Dive] - 프로미스(Promise)',
        thumbnailUrl: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FG1myi%2FbtrStQeeP6i%2FoqRCeGs7X5IOGjqKymU1M1%2Fimg.png',
        description:
            '비동기 처리 시 겪을 수 있는 문제점 우리가 비동기 처리 함수를 실행할 떄 비동기 처리 결과를 외부에 반환할 수 없고, 상위 스코프의 변수에 할당할 수 없는 문제점을 겪을 수 있을 것이다. 아래의 코드를 확인해보면 언급했던 문제점과 같이 test의 값이 undefined로 찍히는 결과를 확인할 수 있다.',
        category: 'JavaScript'
    },
    {
        id: 8,
        title: '[모던 자바스크립트 Deep Dive] - 비동기 프로그래밍',
        thumbnailUrl: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F1FzVi%2FbtrStQKiSXe%2F1oJSKnuOQ8N1z23Outm8e1%2Fimg.jpg',
        description:
            '동기 처리 : 현재 진행중인 작업이 끝날 떄까지 다음에 실행될 작업을 대기시키는 방식 (실행 순서가 보장되지만, 작업이 종료될 때까지 다른 작업은 블로킹) 비동기 처리 : 현재 진행중인 작업이 종료되지 않아도, 다음 작업을 실행하는 방식 (실행 순서가 보장되지 않지만, 이후 작업이 블로킹 되지 않는다.)',
        category: 'JavaScript'
    }
];

export default function handler(req: NextApiRequest, res: NextApiResponse<IPost[]>) {
    if (req.method === 'GET') {
        const { query } = req;
        const filterData = POST_DATA.filter((post) => post.category === query.category);
        console.log(filterData);
        res.status(200).json(query.category === 'ALL' ? POST_DATA : filterData);
    }
}
