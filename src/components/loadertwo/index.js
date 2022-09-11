import React,{ useState } from 'react'
import { useSelector } from "react-redux"
import loader from '../../images/logo2.png'
import { showLoaderAction } from '../../actions/loader'

const Loadertwo = () => {
    const setLoader = useSelector((state) => state.loader.loaderDisplay)

    return (
        <>
            {setLoader ?
                <div style={style.loader}>
                    <img className="" src={loader} style={{width:'200px', backgroundRepeat: 'no-repeat',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-60%, -50%)',
                        zIndex:'-999'
                        
                        }} />
                </div>
                : null
            }
        </>
    );
}
    const style = {
        loader: {
            position: 'absolute',
            zIndex: 9999999,
            left: 0,
            top: 0,
            width: '100%',
            height: '62vh',
            textAlign: 'center',
            backgroundColor: '#fff'
        }
    }


export default Loadertwo
