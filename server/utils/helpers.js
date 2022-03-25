module.exports = {
    sortPosts: posts => {
        return posts.filter(post => post.vote_count >= 3);
    },

    getMostVoted: posts => {
        return posts.filter(post => Math.max(post.vote_count));
    },

    getAdvicePosts: posts => {
        return posts.filter(post => post.tag === "advice");
    },

    getFunnyPosts: posts => {
        return posts.filter(post => post.tag === "funny");
    },

    formatDate: date => {
        if(typeof date !== 'object')
            date = new Date(date);

        let seconds = Math.floor((new Date() - date) / 1000);
        let intervalType;

        let interval = Math.floor(seconds / 31536000);
        // we are doing this for now *shudders*
        if(interval >= 1)
            intervalType = 'year';
        else 
            interval = Math.floor(seconds / 2592000)
            if(interval >= 1)
                intervalType = 'month';
            else 
                interval = Math.floor(seconds / 86400);
                if(interval >= 1)
                    intervalType = 'day';
                else 
                    interval = Math.floor(seconds / 3600);
                    if(interval >= 1)
                        intervalType = 'hour';
                    else 
                        interval = Math.floor(seconds / 60)
                        if(interval >= 1)
                            intervalType = 'minute';
                        else {
                            interval = seconds;
                            intervalType = 'second'
                        }
        
        if(interval > 1 || interval === 0)
            intervalType += 's';
        
        return interval + ' ' + intervalType;
    },

    formatPlural: (word, amount) => {
        if(amount !== 1)
            return `${word}s`
        return word;
    },

    getComments: (posts) => {
        let totalComments = 0;
        for(let i = 0; i < posts.length; i++) {
            let commentAmt = posts[i].comments.length;
            totalComments += commentAmt;
        }
        return totalComments;
    },

    concatUrl: (github) => {
        let url = 'https://github-readme-stats.vercel.app/api/top-langs/?username=';
        let usrName = `${github}`;
        let newStr = url.concat(usrName);

        return newStr;
    }

};