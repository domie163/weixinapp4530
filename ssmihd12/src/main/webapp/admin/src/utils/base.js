const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmihd12/",
            name: "ssmihd12",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmihd12/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "高校毕业论文管理系统小程序"
        } 
    }
}
export default base
