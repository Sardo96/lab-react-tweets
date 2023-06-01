
function ProfileImage(props) {
  return (
    <img
      className="profile-image"
      src={props.image}
      alt="Profile"
      style={{
        width: '48px',
        height: '48px',
        objectFit: 'cover',
        borderRadius: '50%',
      }}
    />
  );
}

export default ProfileImage;
