const arr=[];
export const getData=()=>{
  const savedData = localStorage.getItem('data');
    const parseData = JSON.parse(savedData)
    console.log(parseData)
    
    arr.push(parseData);
    console.log(arr);
    return parseData;
}

 