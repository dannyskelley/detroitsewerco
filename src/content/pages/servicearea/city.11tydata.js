module.exports = {
    eleventyComputed: {
        title: (data) => {
            if (data.city) {
                return `Sewer Service in ${data.city.name}, MI`;
            }
            return data.title;
        },
        description: (data) => {
            if (data.city) {
                return `Need sewer repair in ${data.city.name}? Detroit Sewer Co. serves ${data.city.county} 24/7. Text 734-556-2035 for fast, reliable service.`;
            }
            return data.description;
        }
    }
};
