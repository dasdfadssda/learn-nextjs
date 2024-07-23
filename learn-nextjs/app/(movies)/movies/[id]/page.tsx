import { API_URL } from "../../../(home)/page";

// 특정 ID에 대한 영화 정보를 가져오는 비동기 함수
async function getMovie(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // 2초 지연
    const response = await fetch(`${API_URL}/${id}`);
    return response.json(); // JSON 형식으로 응답 반환
}

// 특정 ID에 대한 비디오 정보를 가져오는 비동기 함수
async function getVideos(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // 2초 지연
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json(); // JSON 형식으로 응답 반환
}

// 페이지 컴포넌트: 영화 및 비디오 정보를 병렬로 가져와 렌더링
export default async function MovieDetail({
    params: { id },
}: {
    params: { id: string };
}) {
    const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]); // 두 API 요청을 병렬로 실행

    return <h1>{movie.title}</h1>; // 영화 제목을 렌더링
}
