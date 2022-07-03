import React from "react";
import { SendNotification } from "../../components/modalNotification";

const useSearching = () =>{
    return {
        onPress: ()=> SendNotification({
                isShow: true,
                options: {
                  message: 'Call Api !',
                  isAccept: true,
                  
                },
              })
    }
} 

export default useSearching;
