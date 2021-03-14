import styled from "styled-components";

import ContentLoader from "react-content-loader";

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid;
	border-color: #e4e4e4;
	background-color: white;
	border-radius: 8px;
	padding: 8px;
`;

const TitleSection = styled.div`
	display: flex;
	align-items: center;
`;

const Avatar = styled.img`
	margin: 0;
	min-width: 0;
	max-width: 100%;
	height: auto;
	border-radius: 9999px;
	width: 36px;
	height: 36px;
	border-radius: 99999px;
	display: block;
`;

const Title = styled.h2`
	margin: 0;
	min-width: 0;
	font-size: 16px;
	line-height: 1.6;
	font-weight: 700;
	margin-left: 16px;
`;

const Article = styled.p`
	color: #000;
	font-size: 14px;
	margin-bottom: 16px;
	font-size: 16px;
`;

const MyCardLoader = (props) => (
	<ContentLoader
		speed={2}
		width={496}
		height={208}
		viewBox="0 0 496 208"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<rect x="69" y="16" rx="3" ry="3" width="88" height="12" />
		<rect x="69" y="36" rx="3" ry="3" width="52" height="13" />
		<rect x="4" y="65" rx="3" ry="3" width="410" height="24" />
		<rect x="4" y="103" rx="3" ry="3" width="410" height="24" />
		<circle cx="34" cy="31" r="18" />
		<rect x="4" y="142" rx="3" ry="3" width="410" height="24" />
		<rect x="5" y="180" rx="3" ry="3" width="410" height="24" />
	</ContentLoader>
);

const Card = ({ loading }) =>
	loading ? (
		<MyCardLoader />
	) : (
		<CardContainer>
			<TitleSection>
				<Avatar src="https://avatars1.githubusercontent.com/u/3426196?v=4"></Avatar>
				<Title>Toy-Crane | 개발자</Title>
			</TitleSection>
			<Article>
				풀이 그들에게 무엇을 귀는 이것을 따뜻한 만천하의 광야에서 사막이다.
				자신과 능히 속에 보배를 그들은 없으면, 석가는 교향악이다. 군영과 그들은
				하는 생명을 이성은 튼튼하며, 들어 청춘의 충분히 것이다. 대고, 이상은 수
				역사를 밝은 못할 얼음 같으며, 끓는 것이다. 이상은 것이다.보라, 위하여서
				든 인간에 청춘에서만 것이다. 청춘의 보배를 든 평화스러운 따뜻한 얼마나
				실로 인생에 피다. 새가 청춘을 밥을 이상이 피가 이 간에 싸인 있는가? 귀는
				크고 투명하되 희망의 트고, 이상의 쓸쓸하랴? 풀이 얼음이 못할 주는 없으면
				피가 역사를 것이다.
			</Article>
		</CardContainer>
	);

export default Card;
