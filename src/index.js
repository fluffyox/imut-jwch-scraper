// 引入 axios 和 cheerio
const axios = require('axios');
const cheerio = require('cheerio');

// 基础 URL
const BASE_URL = 'http://jwch.imut.edu.cn';

/**
 * 构建完整的请求 URL
 * @param {string} path - 相对路径
 * @returns {string} - 完整的 URL
 */
function buildRequestUrl(path) {
    return `${BASE_URL}/${path}`;
}

/**
 * 获取 IMUT JWCH 公告列表
 * @returns {Promise<Array>} - 返回公告列表的 Promise
 */
async function fetchAnnouncementList() {
    try {
        // 发送请求获取页面内容
        const response = await axios.get(buildRequestUrl('jwgg.htm'));

        // 检查 HTTP 响应状态码
        if (response.status !== 200) {
            throw new Error(`Failed to fetch page, status code: ${response.status}`);
        }

        const htmlContent = response.data;

        // 使用 cheerio 解析 HTML
        const $ = cheerio.load(htmlContent);

        // 存储公告列表
        const announcements = [];

        // 遍历公告列表并提取数据
        $('.ej_list1_box ul li').each((index, element) => {
            const title = $(element).find('a').text().trim();
            const relativeUrl = $(element).find('a').attr('href');
            const fullUrl = buildRequestUrl(relativeUrl);

            announcements.push({
                title, // 公告标题
                url: fullUrl, // 公告 URL
            });
        });

        return announcements;
    } catch (error) {
        console.error(`Error fetching announcements: ${error.message}`);
        throw error; // 重新抛出错误
    }
}

// 导出 fetchAnnouncementList 函数
module.exports = {
    fetchAnnouncementList,
};
