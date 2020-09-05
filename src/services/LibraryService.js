const LibraryService = {
    init(model) {
        this.model = model;
    },

    async getOneByProps(props) {
        try {
            const libraryResult = await this.model.query().findOne(props);
            return libraryResult;
        } catch(e) {
            throw e;
        }
    },

    async addAndFetch(newLibraryResult) {
        try {
            const libraryResult = await this.model.query().insertAndFetch(newLibraryResult);
            return libraryResult;
        } catch(e) {
            throw e;
        }
    }
};

module.exports = LibraryService;