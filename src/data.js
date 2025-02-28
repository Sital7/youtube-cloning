export const API_KEY ='AIzaSyB3RB5QUB09BSPNIsrsRMviF_wfoZAtFzU'
// 'AIzaSyD1hVKWHsn3t4-2OhjAo8gMIdLpmvK8YLg'
// 'AIzaSyB3RB5QUB09BSPNIsrsRMviF_wfoZAtFzU';
// 'AIzaSyAyXrd0YtYdmEozNz09DQMp-mZ9tujTXiA' ;


export const value_conveter = (value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}

