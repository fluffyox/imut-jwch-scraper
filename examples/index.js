const { fetchAnnouncementList } = require('../src/index');

// 调用并展示公告列表
fetchAnnouncementList()
    .then((announcements) => {
        console.log('Fetched announcements:', announcements);
    })
    .catch((error) => {
        console.error('Error fetching announcements:', error.message);
    });
