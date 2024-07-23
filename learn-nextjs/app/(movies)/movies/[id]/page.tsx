import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

// 페이지 컴포넌트: 영화 및 비디오 정보를 병렬로 가져와 렌더링
export default async function MovieDetail({
    params: { id },
}: {
    params: { id: string };
}) {
    return (
        <div>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id} /> {/* 영화 정보 컴포넌트 */}
            </Suspense>
            <Suspense fallback={<h1>Loading movie video</h1>}>
                <MovieVideos id={id} /> {/* 영화 비디오 컴포넌트 */}
            </Suspense>
        </div>
    );
}
