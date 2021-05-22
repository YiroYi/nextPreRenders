const UserProfile = props => {

  return(
    <h1>{props.username}</h1>
  );
}

export async function getServerSideProps(context) {

  const { params, req, res } = context;

  return {
    props: {
      username: 'Yiro'
    }
  };
}

export default UserProfile;
