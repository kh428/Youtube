export const fetchVideos = () => (
    $.ajax({
        method: "GET",
        url: "/api/videos"
    })
);

export const fetchVideo = id => (
    $.ajax({
        method: "GET",
        url: `/api/videos/${id}`
    })
);

export const createVideo = video => (
    $.ajax({
        method: 'POST',
        url: '/api/videos',
        data: { video }
    })
);

export const updateVideo = video => (
    $.ajax({
        method: 'PATCH',
        url: `/api/videos/${video.id}`,
        data: { video }
    })
);

export const deleteVideo = video => (
    $.ajax({
        method: 'DELETE',
        url: `/api/videos/${video.id}`
    })
);