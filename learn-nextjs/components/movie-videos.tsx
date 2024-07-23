import { API_URL } from "../app/(home)/page";

// 특정 ID에 대한 비디오 정보를 가져오는 비동기 함수
async function getVideos(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // 2초 지연
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json(); // JSON 형식으로 응답 반환
}

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id);
    return <h6>{JSON.stringify(videos)}</h6>;
}