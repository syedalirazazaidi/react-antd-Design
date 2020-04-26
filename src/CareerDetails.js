import React, { useEffect,useState } from "react";
import axios from 'axios'
import { Drawer } from "antd";
const CareerDetails = ({ player, visible, onClose }) => {
    const [details,setDetails] = useState({})
    // const [isLoading,output]=useState(false)
  useEffect(() => {
    async function fetchData() {
     await axios('../'+player.replace(' ','_')+'.json').then((res) => 
    //    console.log(res.data)
        // res.json().then((data) => 
      setDetails(res.data)
        // )
     
      )
    }
    fetchData();
  }, [player]);
  return (
    <Drawer
      destroyOnClose
      title={player}
      visible={visible}
      width={640}
      onClose={onClose}
    >
        {/* <Skeleton active loading={isLoading} paragraph={{ rows: 4 }} >  */}
                { <div style={{ padding: 10 }}><p>Team - {details.team}</p>
                    <p>age - {details.age}</p>
                    <p>born - {details.born}</p>
                    <p>batting - {details.batting}</p>
                    <p>bowling - {details.bowling}</p>

                </div> }
             {/* </Skeleton> */}
    </Drawer>
    
  );
};

export default CareerDetails;
