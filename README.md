
# imut-jwch-scraper

获取并解析内蒙古工业大学教务处公告的模块。

## Installation

使用以下命令安装 `imut-jwch-scraper` 模块：

```bash
npm install imut-jwch-scraper
```

## Usage

安装模块后，可以通过以下示例代码来获取公告列表并在控制台输出：

```javascript
// 引入 imut-jwch 模块
const { fetchAnnouncementList } = require('imut-jwch-scraper');

// 调用并展示公告列表
fetchAnnouncementList()
    .then((announcements) => {
        console.log('Fetched announcements:', announcements);
    })
    .catch((error) => {
        console.error('Error fetching announcements:', error.message);
    });
```

### 输出示例

如果获取成功，你会看到类似下面的公告列表：

```json
[
  {
    "title": "2024年秋季学期注册通知",
    "url": "http://jwch.imut.edu.cn/announcement1.htm"
  },
  {
    "title": "关于期末考试安排的通知",
    "url": "http://jwch.imut.edu.cn/announcement2.htm"
  }
]
```

### 方法说明

- **fetchAnnouncementList()**: 这是一个异步函数，用于从内蒙古工业大学教务处网页上抓取公告列表。它返回一个包含公告标题和 URL 的数组，便于进一步处理或展示。

### 错误处理

该函数在获取公告时可能遇到网络错误或响应错误。你可以通过 `catch` 块捕获错误并进行处理。例如：

```javascript
fetchAnnouncementList()
  .catch(error => {
    console.error('Failed to fetch announcements:', error.message);
  });
```

## Dependencies

- **axios**: 用于发送 HTTP 请求。
- **cheerio**: 用于解析 HTML 结构。

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
