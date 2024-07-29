import NumericGrid from "./Profile/NumericGrid";
import UserProfile from "./Profile/UserProfile";
import UserStats from "./Profile/UseStats";

function Profile() {
  return (
    <div className="flex ">
      <UserProfile />
      <NumericGrid />
      <UserStats />
    </div>
  );
}

export default Profile;
