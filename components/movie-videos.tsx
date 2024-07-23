import { API_URL } from "../app/constants";
import styles from "../styles/movie-videos.module.css";

async function getVideos(id: string) {
    const response = await fetch(`${API_URL}/${id}/videos`); // 비디오 정보를 가져오기 위해 API 호출
    return response.json(); // 응답을 JSON 형식으로 파싱하여 반환
  }
  
  // MovieVideos 컴포넌트: 특정 영화의 비디오를 가져와서 렌더링
  export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id); // 비디오 목록을 비동기적으로 가져옴
    return (
      <div className={styles.container}> 
        {videos.map((video) => (
          <iframe
            key={video.id} 
            src={`https://youtube.com/embed/${video.key}`} 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen 
            title={video.name}
          />
        ))}
      </div>
    );
  }
  