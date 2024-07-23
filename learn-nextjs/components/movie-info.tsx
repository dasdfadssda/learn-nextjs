import { API_URL } from "../app/(home)/page";

// 특정 ID에 대한 영화 정보를 가져오는 비동기 함수
async function getMovie(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1초 지연
    const response = await fetch(`${API_URL}/${id}`);
    return response.json(); // JSON 형식으로 응답 반환
}

export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovie(id);
    return <h6>{JSON.stringify(movie)}</h6>;
}