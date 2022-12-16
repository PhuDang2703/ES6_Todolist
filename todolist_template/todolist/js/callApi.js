export default class CallApi {
    constructor(url) {
        this.url = url;
    }

    getListItemApi() {  //Trả về Promise chứa mảng data
        return axios({
            url: this.url,
            method: "GET",
        })
    }

    addItemApi(item) {  //Add todo lên Api, trả về promise
        return axios({
            url: this.url,
            method: "POST",
            data: item,
        })
    }

    deleteItemApi(id) {  //Xóa dữ liệu Api, trả về promise
        return axios({
            url: `this.url/${id}`,
            method: "DELETE",
        })
    }

    getItemByIdApi(id) {   //Lấy dữ liệu về từ Api để cập nhật lại cái mới dựa vào id
        return axios({
            url: `this.url/${id}`,
            method: "GET",
        })
    }

    updateItemApi(item) {
        return axios({
            url: this.url,
            method: "PUT",
            data: item,
        })
    }
}