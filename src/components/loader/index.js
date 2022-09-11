import React, { useState } from 'react'
import { useSelector } from "react-redux"
import loader from '../../images/logo2.png'
import { showLoaderAction } from '../../actions/loader'

const Loader = () => {

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
        zIndex: 2,
        left: 0,
        top: 0,
        width: '100%',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#ffff',
        // filter: 'blur(2px)',
        // webkitFilter: 'blur(2px)',
        opacity: '0.8'
    }
}

export default Loader;