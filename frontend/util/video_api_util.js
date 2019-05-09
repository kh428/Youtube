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
        data: video,
        contentType: false,
        processData: false
    })
);

export const updateVideo = (params) => {
    return $.ajax({
      method: "PATCH",
      url: `/api/videos/${params.id}`,
      data: JSON.stringify(params),
      contentType: "application/json",
      processData: false,
      dataType: "json"
    });
};

export const deleteVideo = video => (
    $.ajax({
        method: 'DELETE',
        url: `/api/videos/${video.id}`
    })
);