export const timeSincePost = createdAt => {
    const today = new Date();
    const uploadDate = new Date(createdAt);
    const timeDiff = Math.floor((today - uploadDate) / 1000);
    let interval = Math.floor(timeDiff / 31536000);
    if (interval > 1) {
        return interval + " years ago";
    } else if (interval === 1) {
        return interval + " year ago";
    }
    interval = Math.floor(timeDiff / 2592000);
    if (interval > 1) {
        return interval + " months ago";
    } else if (interval === 1) {
        return interval + " month ago";
    }
    interval = Math.floor(timeDiff / 86400);
    if (interval > 1) {
        return interval + " days ago";
    } else if (interval === 1) {
        return interval + " day ago";
    }
    interval = Math.floor(timeDiff / 3600);
    if (interval > 1) {
        return interval + " hours ago";
    } else if (interval === 1) {
        return interval + " hour ago";
    }
    interval = Math.floor(timeDiff / 60);
    if (interval > 1) {
        return interval + " minutes ago";
    } else if (interval === 1) {
        return interval + " minute ago";
    }
    return "just now";
};