import {useEffect, useState} from 'react';

const useSteps = (item, length, noteDict) => {
    const [steps, setSteps] = useState([])


    useEffect(() => {
        /*if(item !== undefined && item.instruments !== undefined) {
            updateSteps();
        }*/
        updateSteps()
    }, [item, length, noteDict]);

    const updateSteps = () => { /* crea steps per poter settare singolarmente tutti i volumi*/
        let temp = [];
        item.instruments.map((x, i) =>{
            let column = []
            for (let j = 0; j < length; j++){
                if(x.pad[j]){
                    column.push(noteDict[i]);
                } else {
                    column.push([]);
                }
            }
            temp.push(column)
        })
        /*console.log("\n\nTEMP DI MERDA È: ",temp)*/
        setSteps(temp);
    }

    return [steps, setSteps];
}

export default useSteps;