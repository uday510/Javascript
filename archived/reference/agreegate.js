db.blog.aggregate([
    {
        $lookup: {
            from: "author",
            localField: "author_id",
            foreignField: "_id",
            as : "author",
        }
    },
    {
        $project: {
            blogs: "$author.blogs",
            name: "$author.name",
        }
    }
])