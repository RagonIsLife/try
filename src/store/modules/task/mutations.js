export default {
    setTitleData: (state, data) => {
        state.titleData = data;
        state.loadingTitleData = false
    },
    setImageData: (state, data) => {
        state.imageData = data;
        state.loadingimageData = false
    },
    deleteImage: (state) => {
        state.imageData.pop();
    },
    deleteTitle: (state) => {
        state.titleData.pop();
    }
}