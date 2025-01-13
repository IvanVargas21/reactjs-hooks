
function ProfilePicture() {
    const imageURL = "./src/assets/firefox.ico";
    const handleClick = (e) => e.target.style.display = "none";
    return (
        <img 
        onClick={(e) => handleClick(e)}
        src={imageURL} alt="" />
    )
}

export default ProfilePicture