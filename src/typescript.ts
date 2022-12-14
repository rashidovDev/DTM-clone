export interface IState {
    content: {
      id: string
      heading: string,
      title: string,
      image: string,
      category: string,
      date : string,
    }[]
  }
  
 export interface INews {
    title : {
        type : string
        heading : string
    }
  }
  
  export interface ICooperation {
    title : {
        sort : string
        heading : string
    }
  }