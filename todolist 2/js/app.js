import HistoryModel from './models/HistoryModel.js'
new Vue({
    el: '#wrap',
    data: {
        query: '', //form에 입력되는값
        history: [],
        checkedKewords: [],
        
    },
    created() {
        this.fetchHistory()
    },
    methods:{
        onSubmit(e) {
            HistoryModel.add(this.query)
            this.fetchHistory()
            this.onReset()
        },
        onReset() {
            this.query = '' //data 쿼리를 지우는 함수
        },
        onKeyup() {
            if(!this.query.length) this.onReset()
        },
        fetchHistory() {
            HistoryModel.list().then(data => {
                this.history = data
            }) //history에서 받아와서 넣어줌
        },
        onClickRemoveHistory(keyword) {
            HistoryModel.remove(keyword)
            this.fetchHistory()
        },
        onClickCheck(keyword,isChecked){ // check되면 ischeck값을 바꿈(true or false)
            HistoryModel.changeCheck(keyword,isChecked)
            this.fetchHistory()  
        },
        btn_Clear(){
            HistoryModel.clear()
            this.checkedKewords.splice(0) //전부지우고 check항목 초기화
            this.fetchHistory()
        },
        btn_Active(){
            HistoryModel.active()
            this.fetchHistory()
        },
        btn_Completed(){
            HistoryModel.completed()
            this.fetchHistory()
        },
        btn_All(){
            HistoryModel.all()
            this.fetchHistory()
        }

    
        
        
    }
}) 