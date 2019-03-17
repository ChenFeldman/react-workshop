var fs = require('fs'),
    path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),

    assign = require('lodash/assign'),
    find = require('lodash/find'),

    app = express(),
    router = express.Router(),

    // Using a JSON file as our "database"
    NEWS_FILE = path.join(__dirname, 'mockdata/fakeNews.json'),

    port = process.env.PORT || 5050;

function getNews(callback) {
    fs.readFile(NEWS_FILE, function(err, fileContents) {
        if (err) {
            console.log(err);
            process.exit(1);
        }

        callback(JSON.parse(fileContents));
    });
}

function saveNews(news, callback) {
    fs.writeFile(NEWS_FILE, JSON.stringify(news, null, 4), function(err) {
        if (err) {
            console.log(err);
            process.exit(1);
        }

        callback();
    });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// allow for cross-origin API requests
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    next();
});

// routes that end in /news
router.route('/news')

// create an news (accessed via POST to http://localhost:5050/news)
    .post(function(req, res) {
        getNews(function(news) {
            var newNews = assign({
                    id: Date.now(),
                    date: new Date() + '',
                    read: true
                }, req.body),
                newNews = news.concat(newNews);

            // write out file back to disk
            saveNews(newNews, function() {
                res.json({success: true});
            });
        });
    })

    // get all the news (access via GET from http://localhost:5050/news)
    .get(function(req, res) {
        getNews(function(news) {
            // Return back the full list of news
            res.setHeader('Cache-Control', 'no-cache');
            res.json(
                news
            );
        });
    });

// routes that end in news/:newsId
router.route('/news/:newsId')

// get the news with this id (accessed via GET from http://localhost:5050/news/:newsId)
    .get(function(req, res) {
        getNews(function(news) {
            var newsIdToGet = +req.params.newsId,
                newsToGet = find(news, function(news) {
                    return news.id === newsIdToGet;
                });

            res.json(newsToGet);
        });
    })

    // update the news this id (accessed via PUT on http://localhost:5050/news/:newsId)
    .put(function(req, res) {
        getNews(function(news) {
            var newsIdToUpdate = +req.params.newsId,

                // make a new copy of the news list, updating the appropriate news
                updatedNews = news.map(function(news) {
                    if (news.id === newsIdToUpdate) {
                        // make a copy of the news to update before updating
                        return assign({}, news, {
                            read: !!req.body.read
                        });
                    }

                    return news;
                });

            saveNews(updatedNews, function() {
                res.json({success: true});
            });
        });
    })

    // delete the news this id (accessed via PUT on http://localhost:5050/news/:newsId)
    .delete(function(req, res) {
        getNews(function(news) {
            var newsIdToDelete = +req.params.newsId,

                // make a new copy of the news list, marking the appropriate news as deleted
                updatedNews = news.map(function(news) {
                    if (news.id === newsIdToDelete) {
                        // make a copy of the news to update before updating
                        return assign({}, news, {
                            deleted: true
                        });
                    }

                    return news;
                });

            saveNews(updatedNews, function() {
                res.json({success: true});
            });
        });
    });

// Register the routes
app.use('/', router);

app.get('/ping', function(req, res) {
    res.json({success: true});
});

app.listen(port, function() {
    console.log('Server started: http://localhost:' + port + '/');
});
