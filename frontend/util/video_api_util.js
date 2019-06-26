export const fetchVideos = filters => (
    $.ajax({
        method: "GET",
        url: "/api/videos",
        data: filters
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
        data: video,
        contentType: false,
        processData: false
    })
);

export const updateVideo = video => (
    $.ajax({
        method: 'PATCH',
        url: `/api/videos/${video.id}`,
        data: video,
        contentType: false,
        processData: false
    })
);

export const deleteVideo = video => (
    $.ajax({
        method: 'DELETE',
        url: `/api/videos/${video.id}`
    })
);

