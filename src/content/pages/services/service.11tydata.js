module.exports = {
    eleventyComputed: {
        title: (data) => {
            if (data.service) {
                return data.service.pageTitle;
            }
            return data.title;
        },
        description: (data) => {
            if (data.service) {
                return data.service.metaDescription;
            }
            return data.description;
        }
    }
};
