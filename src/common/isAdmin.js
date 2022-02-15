import React from 'react'

const isAdmin = () => {
    return !!localStorage.getItem("isLogin");
};

export default isAdmin


 