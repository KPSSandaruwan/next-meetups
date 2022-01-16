import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://cdn.britannica.com/26/116526-050-76C37BBC/Cathedral-of-St-Basil-the-Blessed-Moscow.jpg"
      title="Kremlin"
      address="Some street, some city."
      description="This is Moscow"
    />
  );
}

export default MeetupDetails;
