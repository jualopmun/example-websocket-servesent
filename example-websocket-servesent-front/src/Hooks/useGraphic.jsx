import { useState,useEffect } from 'react';
import { eventSource } from '../Config/eventsource.config';



export function useGraphic() {

  const [dataGraphic, setDataGraphic] = useState([]);

  useEffect(() => {
    eventSource.onmessage = ({ data }) => {
      const dataForGraphic =  JSON.parse(data);
      const copyData = [...dataGraphic, dataForGraphic];
      setDataGraphic(copyData);
    };

  }, [dataGraphic]);

  return {dataGraphic , setDataGraphic}

}