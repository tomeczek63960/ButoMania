const getUserData = () =>{
    const token = localStorage.getItem('token');
    const user = JSON.parse( localStorage.getItem('user') );

    return { token, user };
}
export default getUserData;