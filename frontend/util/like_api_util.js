export const createLike = like => {
    const type = like.likeable_type.toLowerCase() + "s";
    return $.ajax({
        method: 'POST',
        url: `/api/${type}/${like.likeable_id}/likes`,
        data: { like }
    });
};

export const deleteLike = like => {
    const type = like.likeableType.toLowerCase() + "s";
    return $.ajax({
        method: 'DELETE',
        url: `/api/${type}/${like.likeableId}/likes`,
        data: { like }
    });
};

