export default {
    data: [
      { keyword: 'Vue.js',
        isChecked: false },
      { keyword: 'Angular',
        isChecked: false },
    ],
    data2: [
       {temp: [], //filter에서 뽑아둔 배열을 담기위함
        iscompleted: 0 //completed버튼의 클릭유뮤
      }
    ],
    list() {
        return Promise.resolve(this.data)
      },
    add(keyword = '') { 
      keyword = keyword.trim()
      if (!keyword) return 
      if (this.data.some(item => item.keyword === keyword)) {
        this.remove(keyword)
      }
     
    const isChecked = false 
    this.data = [{keyword, isChecked}, ...this.data]
    },
    remove(keyword) { // keyword를 제거한다.
      this.data = this.data.filter(item => item.keyword !== keyword)
    },
    changeCheck(keyword,isChecked){ //check하면 true로 값을 바꾼다.
      for(var i = 0; i< this.data.length; i++){
        if(this.data[i].keyword === keyword){
          this.data[i].isChecked = !isChecked
        }
      }
    },
    clear(){ //clear 버튼 (완전삭제)
      this.data = this.data.filter(item => item.isChecked === false )
    },
    active(){ //active 버튼
      this.temp = this.data.filter(item => item.isChecked === false )
      this.data = this.data.filter(item => item.isChecked === true )
    },
    completed(){ //completed 버튼
      this.temp = this.data.filter(item => item.isChecked === true )
      this.data = this.data.filter(item => item.isChecked === false)
      this.iscompleted = 1   //complete버튼을 클릭하면 1
    },
    all(){ //all 버튼
      for(var i=0; i<this.temp.length; i++){ 
          this.add(this.temp[i].keyword)
      }
      if(this.iscompleted === 1){ //complete버튼을 클릭했을때 의 all
        for(var i=0; i<this.temp.length;i++){
          this.data[i].isChecked = true
        }
      }
      this.iscompleted = 0 //초기화
      this.temp.splice(0) //초기화
    }
    
  }